const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

const csvFilePath = path.join(__dirname, '../public/data/facilities.csv');
const jsonFilePath = path.join(__dirname, '../src/data/trails.json');

console.log('Reading CSV file (EUC-KR encoding assumed)...');

try {
  const buffer = fs.readFileSync(csvFilePath);
  const fileContent = iconv.decode(buffer, 'EUC-KR');
  
  const lines = fileContent.split('\n');
  if (lines.length < 2) {
    console.error('Error: CSV file is empty or only has a header.');
    process.exit(1);
  }

  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const results = [];
  const includeKeywords = ['여행지', '반려동반여행', '공원', '산책'];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    let row = [];
    let inQuotes = false;
    let currentValue = '';
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"' && line[j+1] === '"') {
        currentValue += '"';
        j++;
      } else if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        row.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    row.push(currentValue.trim());

    if (row.length === headers.length) {
      const data = {};
      headers.forEach((header, index) => {
        data[header] = row[index];
      });

      const c1 = data['카테고리1'] || '';
      const c2 = data['카테고리2'] || '';
      const c3 = data['카테고리3'] || '';
      const name = data['시설명'] || '';
      
      const isIncluded = includeKeywords.some(keyword => c1.includes(keyword) || c2.includes(keyword) || c3.includes(keyword));

      if (isIncluded) {
        results.push({
          id: i,
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
    }
  }

  fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`Successfully converted ${results.length} trail/travel facilities to JSON.`);
  console.log(`Saved to ${jsonFilePath}`);

} catch (error) {
  console.error('Error processing file:', error);
}
