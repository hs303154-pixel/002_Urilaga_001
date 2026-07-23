import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KAKAO_KEY = '7f54a9edc73a4ce7b2800825f1c1ed8e';
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

const JSON_FILES = [
  'hospitals.json',
  'pharmacies.json',
  'hotels.json',
  'salons.json',
  'kindergartens.json',
  'dining.json',
  'petparks.json',
  'trails.json',
  'funerals.json',
  'pettaxis.json'
];

async function verifyQuery(placeName, address, region) {
  // Clean masked address digits if present
  let cleanAddress = (address || '').replace(/\*+/g, '').trim();
  let query = `${region || ''} ${placeName}`.trim();
  
  try {
    const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(query)}`;
    const res = await fetch(url, {
      headers: { Authorization: `KakaoAK ${KAKAO_KEY}` }
    });
    
    if (res.status !== 200) return null;
    const data = await res.json();
    
    if (data.documents && data.documents.length > 0) {
      // Find best matching document
      const top = data.documents[0];
      return {
        verified: true,
        realName: top.place_name,
        realAddress: top.road_address_name || top.address_name,
        phone: top.phone || '',
        lng: top.x,
        lat: top.y,
        placeUrl: top.place_url
      };
    }
  } catch (err) {
    // Ignore network error
  }
  return null;
}

async function verifyAll() {
  console.log('🚀 Starting Place Data Verification & Filtering...');
  
  let totalProcessed = 0;
  let totalVerified = 0;

  for (const filename of JSON_FILES) {
    const filePath = path.join(DATA_DIR, filename);
    if (!fs.existsSync(filePath)) continue;

    console.log(`\n📁 Processing ${filename}...`);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let fileVerified = 0;
    let fileCount = 0;

    if (Array.isArray(content)) {
      // List format
      for (const item of content) {
        fileCount++;
        totalProcessed++;
        const match = await verifyQuery(item.name || item.title, item.address, item.region);
        if (match) {
          item.verified = true;
          if (match.realAddress) item.address = match.realAddress;
          if (match.phone && !item.phone) item.phone = match.phone;
          if (match.lat) item.lat = match.lat;
          if (match.lng) item.lng = match.lng;
          fileVerified++;
          totalVerified++;
        } else {
          item.verified = false;
        }
      }
    } else if (typeof content === 'object') {
      // Region keyed format
      for (const regionKey of Object.keys(content)) {
        if (Array.isArray(content[regionKey])) {
          for (const item of content[regionKey]) {
            fileCount++;
            totalProcessed++;
            const match = await verifyQuery(item.name || item.title, item.address, regionKey);
            if (match) {
              item.verified = true;
              if (match.realAddress) item.address = match.realAddress;
              if (match.phone && !item.phone) item.phone = match.phone;
              if (match.lat) item.lat = match.lat;
              if (match.lng) item.lng = match.lng;
              fileVerified++;
              totalVerified++;
            } else {
              item.verified = false;
            }
          }
        }
      }
    }

    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`✅ ${filename} completed: ${fileVerified} verified entries marked.`);
  }

  console.log(`\n🎉 Verification Finished! Total items checked: ${totalProcessed}, Verified: ${totalVerified}`);
}

verifyAll();
