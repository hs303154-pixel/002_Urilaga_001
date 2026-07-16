import React from 'react';

export function PetBragGallery() {

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
    </div>
  );
}
