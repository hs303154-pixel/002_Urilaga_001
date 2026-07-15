const axios = require('axios');
const cheerio = require('cheerio');

async function testScrape() {
  try {
    const url = 'https://smartstore.naver.com/mylittlepuppy_shop';
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
      }
    });
    
    const $ = cheerio.load(response.data);
    const ogDesc = $('meta[property="og:description"]').attr('content');
    const title = $('title').text();
    console.log('Title:', title);
    console.log('og:description:', ogDesc);
  } catch (err) {
    console.error('Error fetching:', err.message);
  }
}

testScrape();
