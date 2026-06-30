import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { partyShops } from '../data/partyShops';

interface PartyPageProps {
  onBack: () => void;
  onNavigate?: (page: 'home' | 'party' | 'fashion' | 'food') => void;
}

export const PartyPage: React.FC<PartyPageProps> = ({ onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 px-6 sm:px-8 flex items-center justify-between backdrop-blur-md bg-black/50 border-b border-white/10">
        {/* Logo pill */}
        <motion.div
          onClick={onBack}
          className="h-12 px-5 bg-white/15 backdrop-blur-md rounded-[14px] flex items-center gap-2.5 cursor-pointer"
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.22)' }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-[32px] leading-none mb-1">🐶</span>
          <div className="flex flex-col justify-center">
            <span className="text-[32px] font-bold tracking-tight text-white leading-none">
              팻 갤러리
            </span>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          {onNavigate && (
            <>
              <button onClick={() => onNavigate('party')} className="px-5 py-2.5 bg-white/15 hover:bg-blue-500 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">파티</button>
              <button onClick={() => onNavigate('fashion')} className="px-5 py-2.5 bg-white/15 hover:bg-blue-500 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">패션</button>
              <button onClick={() => onNavigate('food')} className="px-5 py-2.5 bg-white/15 hover:bg-blue-500 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">먹거리</button>
            </>
          )}
          <div className="font-bold tracking-[0.2em] text-lg ml-4">U-AGA</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/50 text-[14px] tracking-[0.3em] uppercase font-bold mb-4"
        >
          Curated Collection
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          PARTY DIRECTORY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 max-w-2xl text-lg md:text-xl font-light leading-relaxed"
        >
          특별한 날을 더욱 특별하게 만들어줄 프리미엄 파티용품 브랜드들을 엄선했습니다. 당신의 반려동물을 위한 최고의 파티를 준비해 보세요.
        </motion.p>
      </section>

      {/* Brand Grid */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto">
          {partyShops.map((shop, index) => (
            <motion.a
              href={shop.url.includes('search.shopping.naver.com') ? `${shop.url}+강아지+파티` : shop.url}
              target="_blank"
              rel="noopener noreferrer"
              key={shop.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-full py-3 px-5 hover:bg-white/10 transition-colors cursor-pointer w-full"
            >
              {/* Index Number Area */}
              <div className="w-8 h-8 rounded-full flex-shrink-0 bg-white/10 flex items-center justify-center font-bold text-sm text-white/80 group-hover:bg-white group-hover:text-black transition-colors">
                {index + 1}
              </div>
              
              {/* Content Area */}
              <div className="flex flex-1 items-center gap-4 overflow-hidden">
                <h3 className="text-base font-bold whitespace-nowrap text-white/90 group-hover:text-white flex-shrink-0">
                  {shop.name}
                </h3>
                <div className="h-3 w-px bg-white/20 flex-shrink-0" />
                <p className="text-white/50 text-sm truncate flex-1 font-light">
                  {shop.description}
                </p>
              </div>

              {/* Action Arrow */}
              <svg className="w-5 h-5 text-white/30 group-hover:text-white transform group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>
      </section>
      
      {/* Footer (Simplified) */}
      <footer className="border-t border-white/10 py-12 text-center text-white/50 text-sm">
        <p>&copy; 2026 U-AGA. All rights reserved.</p>
      </footer>
    </div>
  );
};
