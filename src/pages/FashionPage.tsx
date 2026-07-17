import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { motion } from 'framer-motion';
import { fashionShops } from '../data/partyShops';

interface FashionPageProps {
  onBack: () => void;
  onNavigate?: (page: 'home' | 'party' | 'fashion' | 'food') => void;
}

export const FashionPage: React.FC<FashionPageProps> = ({ onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Header / Nav */}
      <Navbar entranceComplete={true} onNavigate={onNavigate as any} />

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
          FASHION DIRECTORY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 max-w-2xl text-lg md:text-xl font-light leading-relaxed"
        >
          우리 아이를 더욱 돋보이게 해줄 트렌디하고 감각적인 패션 브랜드들을 엄선했습니다. 반려동물을 위한 멋진 스타일을 완성해 보세요.
        </motion.p>
      </section>

      {/* Brand Grid */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto">
          {fashionShops.map((shop, index) => (
            <motion.a
              href={shop.url}
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
