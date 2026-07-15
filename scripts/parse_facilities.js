import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import iconv from 'iconv-lite';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFilePath = path.join(__dirname, '../public/data/facilities.csv');
const outputFilePath = path.join(__dirname, '../src/data/facilities.json');

const results = [];

console.log('Reading CSV file (EUC-KR encoding assumed)...');

fs.createReadStream(inputFilePath)
  .pipe(iconv.decodeStream('utf8'))
  .pipe(csv())
  .on('data', (data) => {
    // Include if pet-friendly or pet-exclusive
    const exclude = ['약국', '병원', '의원', '미용', '장례', '장묘']; const c1 = data['카테고리1'] || ''; const c2 = data['카테고리2'] || ''; const c3 = data['카테고리3'] || ''; const name = data['시설명'] || ''; const isExcluded = exclude.some(keyword => c1.includes(keyword) || c2.includes(keyword) || c3.includes(keyword) || name.includes(keyword)); if (!isExcluded) {
      results.push({
        name: data['시설명'],
        category1: data['카테고리1'],
        category2: data['카테고리2'],
        category3: data['카테고리3'],
        address: data['도로명주소'] || data['지번주소'],
        phone: data['전화번호'],
        x: data['위도'],
        y: data['경도'],
        hours: data['운영시간'],
        closed: data['휴무일'],
        parking: data['주차 가능여부'],
        homepage: data['홈페이지'],
        petInfo: data['반려동물 제한사항'],
        updatedAt: data['최종작성일']
      });
    }
  })
  .on('end', () => {
    // Group by region (extract region from address)
    const grouped = results.reduce((acc, curr) => {
      const addr = curr.address || '';
      const regionMatch = addr.trim().split(' ')[0];
      const region = regionMatch || '기타';
      
      if (!acc[region]) {
        acc[region] = [];
      }
      acc[region].push(curr);
      return acc;
    }, {});

    // Save as JSON
    const dir = path.dirname(outputFilePath);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(outputFilePath, JSON.stringify(grouped, null, 2), 'utf8');
    console.log(`Successfully converted ${results.length} pet-friendly facilities to JSON.`);
    console.log(`Saved to ${outputFilePath}`);
  });
