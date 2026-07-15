import React from 'react';
import { motion } from 'framer-motion';


// 샘플 데이터 (투표 로직 테스트용 펫 1마리 + 나머지 빈 박스)
const initialPets = [
  { id: 999, name: '테스트(투표가능)', petId: 'TEST001', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80', hearts: 100, localHearts: 0 },
  ...Array.from({ length: 17 }).map((_, i) => ({
    id: i + 1,
    name: '',
    petId: '',
    image: null,
    hearts: 0,
    localHearts: 0
  }))
];

export function PetBragGallery() {
  const [pets, setPets] = React.useState(initialPets);
  
  const bestPets = [...pets].filter(p => p.image).sort((a, b) => b.localHearts - a.localHearts).slice(0, 6);
  while (bestPets.length < 6) {
    bestPets.push({ id: `empty-best-${bestPets.length}`, image: null, hearts: 0, localHearts: 0, name: '', petId: '' });
  }
  
  const recentPets = pets.slice(0, 18); // 일단 18개만 보여줌

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleRedirect = () => {
    window.open('https://u-agapotohwp.vercel.app', '_blank'); 
  };



  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center pb-20">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
          Aga Photo Global Picks
        </h2>
        <p className="text-white/60 text-center max-w-lg mb-8">
          전 세계 가장 사랑스러운 반려동물들의 순간들. 
          우리아가 포토(Aga Photo)에서 펫 ID를 발급받고 명예의 전당에 도전하세요!
        </p>
        <button 
          onClick={handleRedirect}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
        >
          나도 내 펫 자랑하러 가기 🚀
        </button>
      </div>

      {/* 명예의 전당 (BEST 6) */}
      <div className="w-full mb-16">
        <h3 className="text-pink-600 text-xl font-extrabold mb-6 flex items-center gap-2">
          👑 명예의 전당 (BEST 6)
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          {bestPets.map((pet, idx) => (
            <div key={pet.id} className="flex flex-col gap-2">
              <motion.div 
                className={`relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-sm transition-all duration-300 hover:shadow-pink-500/50 hover:border-pink-400 ${pet.image ? 'border-2 border-pink-300 shadow-[0_0_15px_rgba(251,207,232,0.4)]' : 'bg-pink-900/30 border-2 border-pink-500/60 shadow-[inset_0_0_20px_rgba(236,72,153,0.2)]'}`}
                onClick={handleRedirect}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {pet.image && (
                  <>
                    <img src={pet.image} alt={pet.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-2 right-2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
                      Best
                    </div>
                  </>
                )}
              </motion.div>
              {pet.image && (
                <div className="flex justify-end items-center gap-1.5 pr-3 pb-1 opacity-70">
                  <div className="flex items-center gap-1.5 text-lg">
                    <span className="drop-shadow-md">❤️</span>
                    <span className="text-sm text-[#94A3B8] font-bold">{pet.hearts + pet.localHearts}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-white/10 mb-16"></div>

      {/* 새로운 친구들 */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white/90 text-lg font-bold flex items-center gap-2">
            <span className="text-xl">🐶</span> 새로운 친구들
          </h3>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          {recentPets.map((pet, idx) => (
            <div key={pet.id} className="flex flex-col gap-2">
              <motion.div 
                className={`relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-sm transition-all duration-300 hover:shadow-blue-500/40 hover:border-blue-400 ${pet.image ? 'bg-black border border-white/10' : 'bg-white/10 border-2 border-white/40 shadow-[inset_0_0_15px_rgba(255,255,255,0.1)]'}`}
                onClick={handleRedirect}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                {pet.image && (
                  <>
                    <img src={pet.image} alt={pet.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </>
                )}
              </motion.div>
              {pet.image && (
                <div className="flex justify-end items-center gap-1.5 pr-3 pb-1 opacity-70 hover:opacity-100 transition-opacity">
                  <button 
                    className="flex items-center gap-1.5 text-lg hover:scale-110 transition-transform cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPets(pets.map(p => p.id === pet.id ? { ...p, localHearts: p.localHearts + 1 } : p));
                    }}
                  >
                    <span className="drop-shadow-md">❤️</span>
                    <span className="text-sm text-[#94A3B8] font-bold">{pet.hearts + pet.localHearts}</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
