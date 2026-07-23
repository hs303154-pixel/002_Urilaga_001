const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

const DATA_DIR = 'D:\\60_공공데이터자료\\공공데이터포탈';
const OUT_DIR = path.join(__dirname, '../src/data');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function formatPhone(raw) {
  if (!raw) return '';
  if (raw.includes('-')) return raw;
  const str = raw.replace(/[^0-9]/g, '');
  if (str.length === 8) return str.replace(/(\d{4})(\d{4})/, '$1-$2');
  if (str.length === 9) return str.startsWith('02') ? str.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3') : raw;
  if (str.length === 10) return str.startsWith('02') ? str.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3') : str.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  if (str.length === 11) return str.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  return raw;
}

function normalizeRegion(raw) {
  if (!raw) return '기타';
  const str = raw.trim();
  if (str.startsWith('서울')) return '서울특별시';
  if (str.startsWith('부산')) return '부산광역시';
  if (str.startsWith('대구')) return '대구광역시';
  if (str.startsWith('인천')) return '인천광역시';
  if (str.startsWith('광주')) return '광주광역시';
  if (str.startsWith('대전')) return '대전광역시';
  if (str.startsWith('울산')) return '울산광역시';
  if (str.startsWith('세종')) return '세종특별자치시';
  if (str.startsWith('경기')) return '경기도';
  if (str.startsWith('강원')) return '강원특별자치도';
  if (str.startsWith('충북') || str.startsWith('충청북')) return '충청북도';
  if (str.startsWith('충남') || str.startsWith('충청남')) return '충청남도';
  if (str.startsWith('전북') || str.startsWith('전라북')) return '전라북도';
  if (str.startsWith('전남') || str.startsWith('전라남')) return '전라남도';
  if (str.startsWith('경북') || str.startsWith('경상북')) return '경상북도';
  if (str.startsWith('경남') || str.startsWith('경상남')) return '경상남도';
  if (str.startsWith('제주')) return '제주특별자치도';
  return '기타';
}

function parseCsvLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

function groupByNormalizedRegion(items, maxPerRegion = 100) {
  const grouped = {};
  const REGION_ORDER = [
    '서울특별시', '부산광역시', '대구광역시', '인천광역시', 
    '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', 
    '경기도', '강원특별자치도', '충청북도', '충청남도', 
    '전라북도', '전라남도', '경상북도', '경상남도', '제주특별자치도'
  ];
  
  REGION_ORDER.forEach(r => { grouped[r] = []; });

  items.forEach(item => {
    const reg = normalizeRegion(item.region || item.address);
    if (!grouped[reg]) grouped[reg] = [];
    if (grouped[reg].length < maxPerRegion) {
      grouped[reg].push(item);
    }
  });

  // Remove empty regions
  Object.keys(grouped).forEach(k => {
    if (grouped[k].length === 0) delete grouped[k];
  });

  return grouped;
}

// 1. LocalData Standard Parsing
function parseLocalDataCsv(filePath) {
  const content = iconv.decode(fs.readFileSync(filePath), 'euc-kr');
  const lines = content.split('\n');
  const items = [];
  if (lines.length < 2) return items;
  
  const header = parseCsvLine(lines[0]);
  let nameIdx = header.findIndex(h => h.includes('사업장명') || h.includes('상호명'));
  if (nameIdx === -1) nameIdx = 11;
  let statusIdx = header.findIndex(h => h.includes('영업상태명') || h.includes('상태'));
  if (statusIdx === -1) statusIdx = 4;
  let roadAddrIdx = header.findIndex(h => h.includes('도로명전체주소'));
  if (roadAddrIdx === -1) roadAddrIdx = 16;
  let jibunAddrIdx = header.findIndex(h => h.includes('소재지전체주소'));
  if (jibunAddrIdx === -1) jibunAddrIdx = 24;
  let phoneIdx = header.findIndex(h => h.includes('소재지전화') || h.includes('전화번호'));
  if (phoneIdx === -1) phoneIdx = 20;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const cols = parseCsvLine(line);
    const status = cols[statusIdx] || '';
    if (status.includes('폐업') || status.includes('취소') || status.includes('말소')) continue;

    const name = cols[nameIdx] ? cols[nameIdx].replace(/^"|"$/g, '') : '';
    const address = (cols[roadAddrIdx] || cols[jibunAddrIdx] || '').replace(/^"|"$/g, '');
    const phoneRaw = cols[phoneIdx] ? cols[phoneIdx].replace(/^"|"$/g, '') : '';
    const phone = formatPhone(phoneRaw);
    if (!name || !address) continue;

    items.push({
      name,
      address,
      phone,
      region: address.split(' ')[0]
    });
  }
  return items;
}

// 2. Parse Hotels & Kindergartens
console.log('Parsing Hotels & Kindergartens...');
const vetCare = parseLocalDataCsv(path.join(DATA_DIR, '동물_동물위탁관리업.csv'));
const hotels = [];
const kindergartens = [];

vetCare.forEach(item => {
  const n = item.name;
  
  const isHotelKeyword = n.includes('호텔') || n.includes('펜션') || n.includes('리조트') || n.includes('스테이') || n.includes('풀빌라') || n.includes('민박') || n.includes('캠핑') || n.includes('글램핑') || n.includes('하우스') || n.includes('여관');
  const isKindergartenKeyword = n.includes('유치원') || n.includes('데이케어') || n.includes('스쿨') || n.includes('아카데미') || n.includes('훈련') || n.includes('교육');
  const isExcluded = n.includes('병원') || n.includes('의원') || n.includes('메디컬') || n.includes('카페') || n.includes('다방') || n.includes('미용') || n.includes('용품') || n.includes('살롱');

  if (!isExcluded) {
    if (isHotelKeyword) {
      hotels.push(item);
    }
    if (isKindergartenKeyword) {
      kindergartens.push(item);
    }
  }
});

fs.writeFileSync(path.join(OUT_DIR, 'hotels.json'), JSON.stringify(groupByNormalizedRegion(hotels, 100), null, 2));
fs.writeFileSync(path.join(OUT_DIR, 'kindergartens.json'), JSON.stringify(groupByNormalizedRegion(kindergartens, 100), null, 2));

// 3. Parse Funerals
console.log('Parsing Funerals...');
const funerals = parseLocalDataCsv(path.join(DATA_DIR, '동물_동물장묘업 (1).csv'));
fs.writeFileSync(path.join(OUT_DIR, 'funerals.json'), JSON.stringify(groupByNormalizedRegion(funerals, 100), null, 2));

// 4. Parse Pet Taxis
console.log('Parsing Pet Taxis...');
const pettaxis = parseLocalDataCsv(path.join(DATA_DIR, '동물_동물운송업.csv'));
fs.writeFileSync(path.join(OUT_DIR, 'pettaxis.json'), JSON.stringify(groupByNormalizedRegion(pettaxis, 100), null, 2));

// 5. Parse Culture Info Data (Dining vs PetParks)
console.log('Parsing Culture Info Data...');
const cultureContent = fs.readFileSync(path.join(DATA_DIR, '한국문화정보원_전국 반려동물 동반 가능 문화시설 위치 데이터_20250324.csv'), 'utf-8');
const cultureLines = cultureContent.split('\n');

const dining = [];
const petparks = [];

for (let i = 1; i < cultureLines.length; i++) {
  const line = cultureLines[i].trim();
  if (!line) continue;
  const cols = parseCsvLine(line);
  if (cols.length < 16) continue;

  const name = cols[0] ? cols[0].replace(/^"|"$/g, '') : '';
  const cat1 = cols[1] ? cols[1].replace(/^"|"$/g, '') : '';
  const cat2 = cols[2] ? cols[2].replace(/^"|"$/g, '') : '';
  const cat3 = cols[3] ? cols[3].replace(/^"|"$/g, '') : '';
  const sido = cols[4] ? cols[4].replace(/^"|"$/g, '') : '';
  const roadAddr = cols[14] ? cols[14].replace(/^"|"$/g, '') : '';
  const jibunAddr = cols[15] ? cols[15].replace(/^"|"$/g, '') : '';
  const phoneRaw = cols[16] ? cols[16].replace(/^"|"$/g, '') : '';
  const phone = formatPhone(phoneRaw);
  const address = roadAddr || jibunAddr;

  if (!name || !address) continue;

  const item = {
    name,
    address,
    phone,
    region: sido || address.split(' ')[0]
  };

  const textAll = `${name} ${cat1} ${cat2} ${cat3}`;

  const isPetParkKeyword = textAll.includes('수영') || textAll.includes('놀이터') || textAll.includes('운동장');
  const isNotPetPark = textAll.includes('병원') || textAll.includes('약국') || textAll.includes('다이소') || textAll.includes('마트') || textAll.includes('의원') || textAll.includes('카페') || textAll.includes('식당') || textAll.includes('펜션') || textAll.includes('호텔') || textAll.includes('미용') || textAll.includes('용품') || textAll.includes('미술관') || textAll.includes('박물관');
  const isPetPark = isPetParkKeyword && !isNotPetPark;
  const isDining = textAll.includes('식당') || textAll.includes('카페') || textAll.includes('음식점') || textAll.includes('베이커리') || textAll.includes('다방') || textAll.includes('제과점') || textAll.includes('레스토랑');
  const isNotDining = textAll.includes('병원') || textAll.includes('약국') || textAll.includes('펜션') || textAll.includes('호텔') || textAll.includes('미용') || textAll.includes('용품') || textAll.includes('메디컬');

  if (isPetPark) {
    petparks.push(item);
  } else if (isDining && !isNotDining) {
    dining.push(item);
  }
}

fs.writeFileSync(path.join(OUT_DIR, 'dining.json'), JSON.stringify(groupByNormalizedRegion(dining, 100), null, 2));
fs.writeFileSync(path.join(OUT_DIR, 'petparks.json'), JSON.stringify(groupByNormalizedRegion(petparks, 100), null, 2));

console.log('OPTIMIZED ALL JSON DATASETS (MAX 100 PER REGION)!');
