import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import iconv from 'iconv-lite';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFilePath = path.join(__dirname, '../public/data/hospitals.csv');
const outputFilePath = path.join(__dirname, '../src/data/hospitals.json');

const results = [];

console.log('Reading CSV file (EUC-KR encoding assumed)...');

fs.createReadStream(inputFilePath)
  .pipe(iconv.decodeStream('euc-kr'))
  .pipe(csv())
  .on('data', (data) => {
    // Only include active (영업/정상) businesses
    if (data['상세영업상태명'] === '정상' || data['상세영업상태명'] === '영업') {
      results.push({
        name: data['사업장명'],
        address: data['도로명주소'] || data['지번주소'],
        phone: data['소재지전화'],
        x: data['좌표정보(X)'],
        y: data['좌표정보(Y)'],
        updatedAt: data['데이터갱신일자']
      });
    }
  })
  .on('end', () => {
    // Group by region (extract region from address)
    // Basic grouping by first word of address (e.g., 서울특별시, 경기도, 등)
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
    console.log(`Successfully converted ${results.length} active animal hospitals to JSON.`);
    console.log(`Saved to ${outputFilePath}`);
  });
