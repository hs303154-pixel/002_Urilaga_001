import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import iconv from 'iconv-lite';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFilePath = path.join(__dirname, '../public/data/facilities.csv');
const outputFilePath = path.join(__dirname, '../src/data/funerals.json');

const results = [];
let count = 0;

console.log('Reading CSV file (UTF-8 encoding assumed)...');

const includeKeywords = ['장례', '장묘', '추모', '화장', '납골'];

fs.createReadStream(inputFilePath)
  .pipe(iconv.decodeStream('utf8'))
  .pipe(csv())
  .on('data', (data) => {
    const c1 = data['카테고리1'] || '';
    const c2 = data['카테고리2'] || '';
    const c3 = data['카테고리3'] || '';
    const name = data['시설명'] || '';
    
    const isIncluded = includeKeywords.some(keyword => c1.includes(keyword) || c2.includes(keyword) || c3.includes(keyword));

    if (isIncluded) {
      results.push({
        id: ++count,
        name: name,
        category1: c1,
        category2: c2,
        category3: c3,
        sido: data['시도 명칭'] || '',
        sigungu: data['시군구 명칭'] || '',
        dong: data['법정읍면동명칭'] || '',
        address: data['도로명주소'] || data['지번주소'] || '',
        phone: data['전화번호'] || '',
        url: data['홈페이지'] || '',
        closedDays: data['휴무일'] || '',
        hours: data['운영시간'] || '',
        parking: data['주차 가능여부'] || '',
        fee: data['입장(이용료)가격 정보'] || '',
        petInfo: data['반려동물 동반 가능정보'] || '',
        petSize: data['반려동물 전용 정보'] || '',
        indoorOutDoor: data['장소(실내) 여부'] === 'Y' ? '실내' : (data['장소(실외)여부'] === 'Y' ? '실외' : ''),
        lat: data['위도'] || '',
        lng: data['경도'] || '',
        updatedAt: data['최종작성일'] || ''
      });
    }
  })
  .on('end', () => {
    const finalResults = {};
    results.forEach(item => {
      if (!finalResults[item.sido]) finalResults[item.sido] = [];
      finalResults[item.sido].push(item);
    });

    fs.writeFileSync(outputFilePath, JSON.stringify(finalResults, null, 2), 'utf-8');
    console.log(`Successfully converted ${results.length} funeral facilities to JSON.`);
    console.log(`Saved to ${outputFilePath}`);
  })
  .on('error', (err) => {
    console.error('Error processing file:', err);
  });
