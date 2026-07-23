import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  AnimatePresence,
} from 'framer-motion';
import {
  PartyPopper, Cake, Gift, TreePine, Ghost, Tent, Camera,
  Shirt, Sun, CloudSnow, Umbrella, Crown, Users,
  Bone, CakeSlice, Cookie, Salad, Utensils, Heart, Sparkles, Navigation
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ScrambleIn } from './components/ScrambleText';
import { TypewriterText } from './components/TypewriterText';
import { ConnectAILabLogo } from './components/ConnectAILabLogo';
import PayPalCheckoutButton from './components/payment/PayPalCheckoutButton';
import TossCheckoutButton from './components/payment/TossCheckoutButton';
import { Analytics } from "@vercel/analytics/react";
import { useAuth } from './contexts/AuthContext';
import { createOrder } from './lib/firestore';
import { PRODUCTS } from './lib/paypal';
import { TOSS_PRODUCTS } from './lib/toss';
import { VIDEO_URLS } from './config/videos';
import { SITE_CONFIG } from './config/content';
import { partyShops, fashionShops, foodShops } from './data/partyShops';
import { PartyPage } from './pages/PartyPage';
import { FashionPage } from './pages/FashionPage';
import { FoodPage } from './pages/FoodPage';
import { HospitalsPage } from './pages/HospitalsPage';
import { PharmaciesPage } from './pages/PharmaciesPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { TrailsPage } from './pages/TrailsPage';
import { SalonsPage } from './pages/SalonsPage';
import { DiningPage } from './pages/DiningPage';
import { PetParksPage } from './pages/PetParksPage';
import { HotelsPage } from './pages/HotelsPage';
import { KindergartensPage } from './pages/KindergartensPage';
import { FuneralsPage } from './pages/FuneralsPage';
import { PetTaxisPage } from './pages/PetTaxisPage';
import { PetGallery } from './components/PetGallery';
import { PetBragGallery } from './components/PetBragGallery';
import { CommunityBoard } from './components/CommunityBoard';

const IconMap: Record<string, React.ElementType> = {
  PartyPopper, Cake, Gift, TreePine, Ghost, Tent, Camera,
  Shirt, Sun, CloudSnow, Umbrella, Crown, Users,
  Bone, CakeSlice, Cookie, Salad, Utensils
};

export type ActivePage = 'home' | 'party' | 'fashion' | 'food' | 'hospital' | 'pharmacy' | 'facility' | 'trail' | 'salon' | 'dining' | 'petpark' | 'hotel' | 'kindergarten' | 'funeral' | 'pettaxi';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [entranceComplete, setEntranceComplete] = useState(false);
  const { user } = useAuth();

  /* ── PayPal 결제 완료 → Firestore 저장 ── */
  const handlePayPalSuccess = useCallback(
    async (details: any, productId: string, productName: string, amount: string) => {
      const orderId = details.id || `pp_${Date.now()}`;
      try {
        await createOrder({
          id: orderId,
          userId: user?.uid || 'anonymous',
          productId,
          productName,
          amount: parseFloat(amount),
          currency: 'USD',
          status: 'completed',
          paypalOrderId: orderId,
          paypalPayerId: details.payer?.payer_id || '',
        });
        console.log('[Firestore] Order saved:', orderId);
        alert(`✅ 결제 완료! Order: ${orderId}`);
      } catch (err) {
        console.error('[Firestore] Failed to save order:', err);
        alert(`결제는 완료되었지만 기록 저장에 실패했습니다. Order: ${orderId}`);
      }
    },
    [user]
  );



  /* ── Entrance delay ── */
  useEffect(() => {
    const timer = setTimeout(() => setEntranceComplete(true), 800);
    return () => clearTimeout(timer);
  }, []);

  /* ── Section 2 scroll-driven 3D text ── */
  const section2Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: section2Ref,
    offset: ['start end', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 32,
    mass: 1.8,
  });
  const yScaleValue = useTransform(smoothProgress, [0, 1], [-120, 60]);
  const textOpacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
  const transform3D = useMotionTemplate`rotateX(24deg) translateY(${yScaleValue}px) translateZ(15px)`;

  /* ── Destructure config for readability ── */
  const { hero, cinematic, metrics, technology, architecture, footer } = SITE_CONFIG;

  const handleNavigate = (page: string) => {
    if (page === 'info') {
      setActivePage('home');
      setTimeout(() => {
        section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setActivePage(page as any);
    }
  };

  if (activePage === 'party') return <PartyPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'fashion') return <FashionPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'food') return <FoodPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'hospital') return <HospitalsPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'pharmacy') return <PharmaciesPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'facility') return <FacilitiesPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'dining') return <DiningPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'petpark') return <PetParksPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'trail') return <TrailsPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'salon') return <SalonsPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'hotel') return <HotelsPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'kindergarten') return <KindergartensPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'funeral') return <FuneralsPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;
  if (activePage === 'pettaxi') return <PetTaxisPage onBack={() => setActivePage('home')} onNavigate={handleNavigate} />;

  return (
    <div style={{ fontFamily: '"Space Mono", monospace' }}>
      <Analytics />
      <Navbar entranceComplete={entranceComplete} onNavigate={handleNavigate} />
      
      {/* ════════════════ SECTION 1: HERO ════════════════ */}
      <section className="relative h-screen h-[100dvh] flex flex-col">
        {/* Video background (AutoPlay once) */}
        {VIDEO_URLS.hero && (
          <div className="absolute inset-x-0 top-0 bottom-8 sm:bottom-12 pointer-events-none">
            <video
              src={VIDEO_URLS.hero}
              className="w-full h-full object-contain object-bottom scale-[0.7] origin-bottom mix-blend-screen"
              autoPlay
              playsInline
              muted
              preload="auto"
            />
          </div>
        )}

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.05,
          }}
        />

        {/* Watermark text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{ paddingTop: 50 }}
        >
          <span
            className="uppercase select-none"
            style={{
              fontFamily: '"Anton SC", sans-serif',
              fontSize: 'clamp(120px, 30vw, 521px)',
              letterSpacing: '-4px',
              opacity: 0.1,
              background:
                'radial-gradient(circle, rgba(142,127,148,0) 0%, #8E7F94 70%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              lineHeight: 1,
            }}
          >
            {hero.watermark}
          </span>
        </div>

        {/* Hero content */}
        <motion.div
          className="relative z-20 flex flex-col flex-1 px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: entranceComplete ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex-1" />

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* Left column */}
            <div className="flex flex-col gap-4">
              <h1
                className="text-white font-light leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(40px, 10vw, 100px)' }}
              >
                <ScrambleIn text={hero.titleLeft[0]} delay={200} triggered={entranceComplete} />
                <br />
                <ScrambleIn text={hero.titleLeft[1]} delay={500} triggered={entranceComplete} />
              </h1>

              <motion.p
                className="max-w-sm text-[13px] sm:text-[15px] text-white/60 leading-relaxed"
                initial={{ opacity: 0, y: 25 }}
                animate={entranceComplete ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  ease: [0.215, 0.61, 0.355, 1.0],
                  delay: 0.2,
                }}
              >
                {hero.description}
              </motion.p>
            </div>

            {/* Right heading */}
            <h1
              className="text-white font-light leading-[0.95] tracking-[-0.03em] text-left md:text-right"
              style={{ fontSize: 'clamp(40px, 10vw, 100px)' }}
            >
              <ScrambleIn text={hero.titleRight[0]} delay={700} triggered={entranceComplete} />
              <br />
              <ScrambleIn text={hero.titleRight[1]} delay={1000} triggered={entranceComplete} />
            </h1>
          </div>
        </motion.div>
      </section>

      {/* ════════════════ SECTION 2: CINEMATIC TEXT & INFO BOARD ════════════════ */}
      <section
        ref={section2Ref}
        className="relative w-full h-screen bg-black flex flex-col md:flex-row"
      >
        {/* Video background */}
        {VIDEO_URLS.section2 && (
          <video
            src={VIDEO_URLS.section2}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
          />
        )}

        {/* Top gradient overlay */}
        <div
          className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
          style={{
            height: 180,
            background: 'linear-gradient(to bottom, #010103, transparent)',
          }}
        />

        {/* Left column: Cinematic Text */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full z-20 flex flex-col items-center justify-center md:border-r border-white/10 p-8 md:p-16">
          <div className="w-full max-w-xl">
            <TypewriterText 
              text={cinematic.text} 
              speed={50}
              className="font-sans font-normal text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] tracking-[-0.02em] leading-relaxed text-white/90" 
            />
          </div>
        </div>

        {/* Right column: Information Board */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full z-20 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-3xl flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest mb-4 md:mb-6">정보게시판</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 w-full">
              {/* Card 1: Animal Hospital */}
              <div 
                onClick={() => setActivePage('hospital')}
                className="group cursor-pointer h-full min-h-[120px] md:min-h-[150px] rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-blue-400 transition-all flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <span className="text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">🏥</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-blue-400 transition-colors text-center">전국동물병원</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-1 text-center leading-tight">
                  우리아가 주변의<br/>안전한 주치의
                </span>
              </div>
            
              {/* Card 2: Animal Pharmacy */}
              <div 
                onClick={() => setActivePage('pharmacy')}
                className="group cursor-pointer h-full min-h-[120px] md:min-h-[150px] rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-pink-400 transition-all flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(244,114,182,0.3)]"
              >
                <span className="text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">💊</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-pink-400 transition-colors text-center">전국동물약국</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-1 text-center leading-tight">
                  반려동물 의약품<br/>취급처 안내
                </span>
              </div>

              {/* Card 3: Dining & Cafe */}
              <div 
                onClick={() => setActivePage('dining')}
                className="group cursor-pointer h-full min-h-[120px] md:min-h-[150px] rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-amber-400 transition-all flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
              >
                <span className="text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">☕</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-amber-400 transition-colors text-center">동반 식당/카페</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-1 text-center leading-tight">
                  맛있고 쾌적한<br/>동반 맛집안내
                </span>
              </div>

              {/* Card 4: Pet Park & Pool */}
              <div 
                onClick={() => setActivePage('petpark')}
                className="group cursor-pointer h-full min-h-[120px] md:min-h-[150px] rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-cyan-400 transition-all flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <span className="text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">🏊‍♂️</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-cyan-400 transition-colors text-center">펫파크/수영장</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-1 text-center leading-tight">
                  신나게 뛰놀고<br/>첨벙첨벙 수영
                </span>
              </div>

              {/* Card 5: Trails */}
              <div 
                onClick={() => setActivePage('trail')}
                className="group cursor-pointer h-full min-h-[120px] md:min-h-[150px] rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-green-400 transition-all flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
              >
                <span className="text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">🌳</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-green-400 transition-colors text-center">산책로/여행지</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-1 text-center leading-tight">
                  자연 속 힐링<br/>야외 공간
                </span>
              </div>

              {/* Card 6: Beauty Salon */}
              <div 
                onClick={() => setActivePage('salon')}
                className="group cursor-pointer h-full min-h-[120px] md:min-h-[150px] rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-fuchsia-400 transition-all flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]"
              >
                <span className="text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">✂️</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-fuchsia-400 transition-colors text-center">동물 미용실</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-1 text-center leading-tight">
                  깔끔하고 예쁘게<br/>미용/스파
                </span>
              </div>

              {/* Card 7: Pet Hotel */}
              <div 
                onClick={() => setActivePage('hotel')}
                className="group cursor-pointer h-full min-h-[120px] md:min-h-[150px] rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-indigo-400 transition-all flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(129,140,248,0.3)]"
              >
                <span className="text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">🏨</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-indigo-400 transition-colors text-center">전국 동물호텔</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-1 text-center leading-tight">
                  안심하고 맡기는<br/>편안한 호텔
                </span>
              </div>

              {/* Card 8: Pet Kindergarten */}
              <div 
                onClick={() => setActivePage('kindergarten')}
                className="group cursor-pointer h-full min-h-[120px] md:min-h-[150px] rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-yellow-400 transition-all flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
              >
                <span className="text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">🏫</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-yellow-400 transition-colors text-center">애견유치원</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-1 text-center leading-tight">
                  낮 시간동안 케어<br/>사회성/교육
                </span>
              </div>

              {/* Card 9: Pet Funeral */}
              <div 
                onClick={() => setActivePage('funeral')}
                className="group cursor-pointer h-full min-h-[120px] md:min-h-[150px] rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-purple-400 transition-all flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]"
              >
                <span className="text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">🌈</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-purple-400 transition-colors text-center">동물장례식장</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-1 text-center leading-tight">
                  마지막 배웅을 위한<br/>경건한 장묘공간
                </span>
              </div>

              {/* Card 10: Pet Taxi */}
              <div 
                onClick={() => setActivePage('pettaxi')}
                className="group cursor-pointer h-full min-h-[120px] md:min-h-[150px] rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-orange-400 transition-all flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(351,146,60,0.3)]"
              >
                <span className="text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">🚕</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-orange-400 transition-colors text-center">펫택시/이동</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-1 text-center leading-tight">
                  편안하고 안전한<br/>반려동물 전용이동
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 3: COMMUNITY BOARD ════════════════ */}
      <section className="relative w-full min-h-screen bg-[#010103] flex flex-col items-center p-6 md:p-16 pt-24 border-t border-white/10">
        <div className="w-full max-w-5xl mx-auto flex flex-col">
          <CommunityBoard />
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer className="bg-black">
        <div className="flex flex-col md:flex-row min-h-[400px]">
          {/* Left: Video */}
          <div className="md:w-1/2 h-[300px] md:h-auto relative">
            {VIDEO_URLS.footer ? (
              <video
                src={VIDEO_URLS.footer}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <div className="absolute inset-0 bg-white/5" />
            )}
          </div>

          {/* Right: Content */}
          <div className="md:w-1/2 flex flex-col justify-between p-10 sm:p-16">
            <div>
              <div className="flex items-center gap-2.5 mb-8">
                <ConnectAILabLogo size={18} className="text-white/70" />
                <span className="text-[15px] font-medium text-white/70 tracking-tight">
                  {SITE_CONFIG.brandName}
                </span>
              </div>
              <p className="text-white/40 text-[14px] sm:text-[15px] leading-relaxed max-w-sm">
                {footer.tagline}
              </p>
            </div>

            <p className="text-white/25 text-[12px] mt-12">
              {SITE_CONFIG.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
