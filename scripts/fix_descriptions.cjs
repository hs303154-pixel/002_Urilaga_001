const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'partyShops.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace fashion shops
content = content.replace(/description: '.*?패션.*?'/g, "description: '트렌디하고 편안한 반려동물 패션 상점'");
content = content.replace(/description: '.*?코디.*?'/g, "description: '트렌디하고 편안한 반려동물 패션 상점'");
content = content.replace(/description: '.*?스타일링.*?'/g, "description: '트렌디하고 편안한 반려동물 패션 상점'");
content = content.replace(/description: '.*?드레스.*?'/g, "description: '트렌디하고 편안한 반려동물 패션 상점'");
content = content.replace(/description: '.*?룩.*?'/g, "description: '트렌디하고 편안한 반려동물 패션 상점'");
content = content.replace(/description: '.*?옷.*?'/g, "description: '트렌디하고 편안한 반려동물 패션 상점'");
content = content.replace(/description: '.*?의류.*?'/g, "description: '트렌디하고 편안한 반려동물 패션 상점'");
content = content.replace(/description: '.*?수트.*?'/g, "description: '트렌디하고 편안한 반려동물 패션 상점'");
content = content.replace(/description: '.*?부띠끄.*?'/g, "description: '트렌디하고 편안한 반려동물 패션 상점'");

// Re-write specific ones
for (let id=207; id<=237; id++) {
    const regex = new RegExp(`id: '${id}', name: '(.*?)', description: '.*?'`, 'g');
    content = content.replace(regex, `id: '${id}', name: '$1', description: '우리 강아지를 위한 트렌디한 패션 상점'`);
}

// Re-write food shops
for (let id=304; id<=344; id++) {
    const regex = new RegExp(`id: '${id}', name: '(.*?)', description: '.*?'`, 'g');
    content = content.replace(regex, `id: '${id}', name: '$1', description: '건강하고 믿을 수 있는 반려동물 수제 간식'`);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed partyShops.ts');
