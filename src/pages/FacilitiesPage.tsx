import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import facilitiesData from '../data/facilities.json';

interface FacilitiesPageProps {
  onBack: () => void;
  onNavigate?: (page: 'home' | 'party' | 'fashion' | 'food' | 'facility') => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getRegionWeight = (region: string) => {
    if (region === '서울특별시') return 1;
    if (region.includes('특별자치시')) return 2;
    if (region.includes('광역시')) return 3;
    return 4;
  };

  const regions = Object.keys(facilitiesData).sort((a, b) => {
    const weightA = getRegionWeight(a);
    const weightB = getRegionWeight(b);
    if (weightA !== weightB) return weightA - weightB;
    return a.localeCompare(b);
  });
  
  const [selectedRegion, setSelectedRegion] = useState<string>(regions.length > 0 ? regions[0] : '');

  const facilities = useMemo(() => {
    // @ts-ignore
    return (facilitiesData[selectedRegion] || []).slice(0, 50); // Show top 50 for performance
  }, [selectedRegion]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black pb-20">
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 px-6 sm:px-8 flex items-center justify-between backdrop-blur-md bg-black/50 border-b border-white/10">
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
        <div className="flex items-center gap-3 overflow-x-auto">
          {onNavigate && (
            <>
              <button onClick={() => onNavigate('facility')} className="px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">동반 시설</button>
              <button onClick={() => onNavigate('party')} className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">파티</button>
              <button onClick={() => onNavigate('fashion')} className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">패션</button>
              <button onClick={() => onNavigate('food')} className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">먹거리</button>
            </>
          )}
          <div className="font-bold tracking-[0.2em] text-lg ml-4 hidden md:block">U-AGA</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-12 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/50 text-[14px] tracking-[0.3em] uppercase font-bold mb-4"
        >
          National Public Data
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
        >
          전국 동반 시설 위치안내
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 max-w-2xl text-lg md:text-xl font-light leading-relaxed"
        >
          우리아가와 언제 어디서든 안심하고 함께할 수 있도록, 전국 동반 시설 데이터를 제공합니다.<br/>
          <span className="text-sm text-white/50 mt-2 block tracking-tight">※ 본 데이터는 2025년 8월 14일 공공데이터 기준으로 작성되었으며, 실제 영업 정보와 다를 수 있습니다.</span>
        </motion.p>
      </section>

      {/* Region Tabs */}
      <section className="pb-8 px-6 max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              selectedRegion === region
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {region}
          </button>
        ))}
      </section>

      {/* Brand Grid / List */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto">
          {facilities.map((facility: any, index: number) => {
            // 주소가 너무 길면 네이버 지도 검색이 실패할 수 있으므로, '병원명 + 시/도 + 구/군' 형태로 검색어 최적화
            const shortAddress = facility.address ? facility.address.split(' ').slice(0, 2).join(' ') : '';
            const mapQuery = encodeURIComponent(`${facility.name} ${shortAddress}`);
            return (
              <motion.a
                href={`https://map.naver.com/v5/search/${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-full py-3 px-5 hover:bg-white/10 transition-colors cursor-pointer w-full"
              >
                {/* Index Number Area */}
                <div className="w-8 h-8 rounded-full flex-shrink-0 bg-white/10 flex items-center justify-center font-bold text-sm text-white/80 group-hover:bg-white group-hover:text-black transition-colors">
                  {index + 1}
                </div>
                
                {/* Content Area */}
                <div className="flex flex-1 items-center gap-4 overflow-hidden">
                  <h3 className="text-base font-bold whitespace-nowrap text-white/90 group-hover:text-white flex-shrink-0">
                    {facility.name}
                  </h3>
                  <div className="h-3 w-px bg-white/20 flex-shrink-0" />
                  <p className="text-sm text-white/50 truncate group-hover:text-white/80">
                    {facility.address}
                  </p>
                  {facility.phone && (
                    <>
                      <div className="h-3 w-px bg-white/20 flex-shrink-0 hidden md:block" />
                      <p className="text-sm text-white/40 hidden md:block">{facility.phone}</p>
                    </>
                  )}
                </div>

                {/* Arrow Icon Area */}
                <div className="text-white/30 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            )
          })}
          {facilities.length === 0 && (
            <div className="text-center text-white/50 py-10">
              해당 지역의 동반 시설 데이터가 없습니다.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
