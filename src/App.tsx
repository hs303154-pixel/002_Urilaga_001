import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from 'framer-motion';
import {
  PartyPopper, Cake, Gift, TreePine, Ghost, Tent, Camera,
  Shirt, Sun, CloudSnow, Umbrella, Crown, Users,
  Bone, CakeSlice, Cookie, Salad, Utensils
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ScrambleIn } from './components/ScrambleText';
import { ConnectAILabLogo } from './components/ConnectAILabLogo';
import PayPalCheckoutButton from './components/payment/PayPalCheckoutButton';
import TossCheckoutButton from './components/payment/TossCheckoutButton';
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

const IconMap: Record<string, React.ElementType> = {
  PartyPopper, Cake, Gift, TreePine, Ghost, Tent, Camera,
  Shirt, Sun, CloudSnow, Umbrella, Crown, Users,
  Bone, CakeSlice, Cookie, Salad, Utensils
};

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'party' | 'fashion' | 'food'>('home');
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

  /* ── Hero video mouse-scrub ── */
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const isSeekingRef = useRef(false);

  const handleSeeked = useCallback(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    isSeekingRef.current = false;
    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
      isSeekingRef.current = true;
      video.currentTime = targetTimeRef.current;
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const video = heroVideoRef.current;
      if (!video || !video.duration) return;
      const deltaX = e.movementX;
      const sensitivity = 1.5; // 변경됨: 마우스 한 번 스와이프로 영상 끝까지 도달하도록 0.8 -> 1.5로 증가
      const change = (deltaX / window.innerWidth) * video.duration * sensitivity;
      targetTimeRef.current = Math.max(
        0,
        Math.min(video.duration, targetTimeRef.current + change)
      );
      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  if (activePage === 'party') return <PartyPage onBack={() => setActivePage('home')} onNavigate={setActivePage} />;
  if (activePage === 'fashion') return <FashionPage onBack={() => setActivePage('home')} onNavigate={setActivePage} />;
  if (activePage === 'food') return <FoodPage onBack={() => setActivePage('home')} onNavigate={setActivePage} />;

  return (
    <div style={{ fontFamily: '"Space Mono", monospace' }}>
      <Navbar entranceComplete={entranceComplete} onNavigate={setActivePage} />

      {/* ════════════════ SECTION 1: HERO ════════════════ */}
      <section className="relative h-screen h-[100dvh] flex flex-col overflow-hidden">
        {/* Video background (mouse-scrubbed) */}
        {VIDEO_URLS.hero && (
          <div className="absolute inset-x-0 top-0 bottom-8 sm:bottom-12 pointer-events-none">
            <video
              ref={heroVideoRef}
              src={VIDEO_URLS.hero}
              className="w-full h-full object-contain object-bottom scale-[0.7] origin-bottom"
              playsInline
              muted
              preload="auto"
              onSeeked={handleSeeked}
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

      {/* ════════════════ SECTION 2: CINEMATIC TEXT ════════════════ */}
      <section
        ref={section2Ref}
        className="star-wars-space"
      >
        {/* Video background */}
        {VIDEO_URLS.section2 && (
          <video
            src={VIDEO_URLS.section2}
            className="absolute inset-0 w-full h-full object-cover"
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

        {/* 3D text content */}
        <p className="star-wars-crawl font-sans font-normal text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] tracking-[-0.02em] select-none pointer-events-none">
          {cinematic.text}
        </p>
      </section>

      {/* ════════════════ SECTION 3: METRICS ════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Video background (restored) */}
        {VIDEO_URLS.metrics && (
          <video
            src={VIDEO_URLS.metrics}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
          />
        )}

        <div className="relative z-20 pt-32 pb-32 px-6 max-w-7xl mx-auto w-full flex flex-col items-center justify-center min-h-[50vh]">
          {/* Section Title */}
          <motion.p
            className="text-white/50 text-[26px] sm:text-[28px] tracking-[0.2em] uppercase text-center font-bold mb-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
          >
            PET GALLERY COLLECTION
          </motion.p>
          
          {/* User's custom image cards wrapped in a gray box */}
          <div className="mt-36 relative bg-gray-100 rounded-[40px] p-8 sm:p-12 lg:p-20 w-full max-w-[1000px] shadow-2xl border border-gray-200 overflow-hidden">
            
            {/* Background Decorative Icons (Darker, Smaller, Irregularly Scattered) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 hidden md:block">
              {/* Top row / Upper section */}
              <svg className="absolute top-[5%] left-[10%] w-6 h-6 text-gray-400 transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-7 7c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm14 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-7 4c-3.3 0-6 2.7-6 6v3h12v-3c0-3.3-2.7-6-6-6z"/>
              </svg>
              <svg className="absolute top-[8%] left-[25%] w-5 h-5 text-gray-500 transform rotate-45" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 4c-2.2 0-4 1.8-4 4 0 .3 0 .6.1.8-1-.5-2.2-.8-3.4-.8s-2.4.3-3.4.8c.1-.2.1-.5.1-.8 0-2.2-1.8-4-4-4S0 5.8 0 8s1.8 4 4 4c.3 0 .6 0 .8-.1-.5 1-.8 2.2-.8 3.4s.3 2.4.8 3.4c-.2-.1-.5-.1-.8-.1-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c0-.3 0-.6-.1-.8 1 .5 2.2.8 3.4.8s2.4-.3 3.4-.8c-.1.2-.1.5-.1.8 0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4c-.3 0-.6 0-.8.1.5-1 .8-2.2.8-3.4s-.3-2.4-.8-3.4c.2.1.5.1.8.1 2.2 0 4-1.8 4-4s-1.8-4-4-4z"/>
              </svg>
              <svg className="absolute top-[12%] left-[45%] w-7 h-7 text-gray-400 transform -rotate-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.5 5.5l-4-4-2.5 2.5-3-3-3 3-2.5-2.5-4 4 2 8 2-2v10h10v-10l2 2 2-8z"/>
              </svg>
              <svg className="absolute top-[4%] right-[30%] w-4 h-4 text-gray-500 transform rotate-[20deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/>
              </svg>
              <svg className="absolute top-[10%] right-[15%] w-6 h-6 text-gray-400 transform -rotate-[15deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-7 7c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm14 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-7 4c-3.3 0-6 2.7-6 6v3h12v-3c0-3.3-2.7-6-6-6z"/>
              </svg>
              <svg className="absolute top-[18%] right-[5%] w-5 h-5 text-gray-500 transform rotate-[30deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.5 5.5l-4-4-2.5 2.5-3-3-3 3-2.5-2.5-4 4 2 8 2-2v10h10v-10l2 2 2-8z"/>
              </svg>
              
              {/* Mid-level / Sides / Gaps */}
              <svg className="absolute top-[30%] left-[2%] w-6 h-6 text-gray-400 transform -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 4c-2.2 0-4 1.8-4 4 0 .3 0 .6.1.8-1-.5-2.2-.8-3.4-.8s-2.4.3-3.4.8c.1-.2.1-.5.1-.8 0-2.2-1.8-4-4-4S0 5.8 0 8s1.8 4 4 4c.3 0 .6 0 .8-.1-.5 1-.8 2.2-.8 3.4s.3 2.4.8 3.4c-.2-.1-.5-.1-.8-.1-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c0-.3 0-.6-.1-.8 1 .5 2.2.8 3.4.8s2.4-.3 3.4-.8c-.1.2-.1.5-.1.8 0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4c-.3 0-.6 0-.8.1.5-1 .8-2.2.8-3.4s-.3-2.4-.8-3.4c.2.1.5.1.8.1 2.2 0 4-1.8 4-4s-1.8-4-4-4z"/>
              </svg>
              <svg className="absolute top-[40%] left-[31%] w-5 h-5 text-gray-500 transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <svg className="absolute top-[55%] right-[32%] w-4 h-4 text-gray-400 transform rotate-45" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/>
              </svg>
              <svg className="absolute top-[45%] right-[2%] w-7 h-7 text-gray-500 transform rotate-[10deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-7 7c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm14 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-7 4c-3.3 0-6 2.7-6 6v3h12v-3c0-3.3-2.7-6-6-6z"/>
              </svg>
              <svg className="absolute top-[60%] left-[5%] w-5 h-5 text-gray-400 transform rotate-[15deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <svg className="absolute top-[75%] right-[4%] w-6 h-6 text-gray-500 transform -rotate-[20deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 4c-2.2 0-4 1.8-4 4 0 .3 0 .6.1.8-1-.5-2.2-.8-3.4-.8s-2.4.3-3.4.8c.1-.2.1-.5.1-.8 0-2.2-1.8-4-4-4S0 5.8 0 8s1.8 4 4 4c.3 0 .6 0 .8-.1-.5 1-.8 2.2-.8 3.4s.3 2.4.8 3.4c-.2-.1-.5-.1-.8-.1-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c0-.3 0-.6-.1-.8 1 .5 2.2.8 3.4.8s2.4-.3 3.4-.8c-.1.2-.1.5-.1.8 0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4c-.3 0-.6 0-.8.1.5-1 .8-2.2.8-3.4s-.3-2.4-.8-3.4c.2.1.5.1.8.1 2.2 0 4-1.8 4-4s-1.8-4-4-4z"/>
              </svg>
              <svg className="absolute top-[70%] left-[33%] w-6 h-6 text-gray-500 transform -rotate-[10deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.5 5.5l-4-4-2.5 2.5-3-3-3 3-2.5-2.5-4 4 2 8 2-2v10h10v-10l2 2 2-8z"/>
              </svg>
              
              {/* Bottom row */}
              <svg className="absolute bottom-[5%] left-[8%] w-6 h-6 text-gray-400 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-7 7c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm14 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-7 4c-3.3 0-6 2.7-6 6v3h12v-3c0-3.3-2.7-6-6-6z"/>
              </svg>
              <svg className="absolute bottom-[10%] left-[28%] w-5 h-5 text-gray-500 transform -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 4c-2.2 0-4 1.8-4 4 0 .3 0 .6.1.8-1-.5-2.2-.8-3.4-.8s-2.4.3-3.4.8c.1-.2.1-.5.1-.8 0-2.2-1.8-4-4-4S0 5.8 0 8s1.8 4 4 4c.3 0 .6 0 .8-.1-.5 1-.8 2.2-.8 3.4s.3 2.4.8 3.4c-.2-.1-.5-.1-.8-.1-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c0-.3 0-.6-.1-.8 1 .5 2.2.8 3.4.8s2.4-.3 3.4-.8c-.1.2-.1.5-.1.8 0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4c-.3 0-.6 0-.8.1.5-1 .8-2.2.8-3.4s-.3-2.4-.8-3.4c.2.1.5.1.8.1 2.2 0 4-1.8 4-4s-1.8-4-4-4z"/>
              </svg>
              <svg className="absolute bottom-[15%] left-[48%] w-4 h-4 text-gray-400 transform rotate-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/>
              </svg>
              <svg className="absolute bottom-[8%] right-[32%] w-6 h-6 text-gray-500 transform -rotate-[30deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.5 5.5l-4-4-2.5 2.5-3-3-3 3-2.5-2.5-4 4 2 8 2-2v10h10v-10l2 2 2-8z"/>
              </svg>
              <svg className="absolute bottom-[5%] right-[12%] w-7 h-7 text-gray-400 transform rotate-[25deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-7 7c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm14 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-7 4c-3.3 0-6 2.7-6 6v3h12v-3c0-3.3-2.7-6-6-6z"/>
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-36 w-full">
              {/* 1. 파티 카드 */}
              <motion.div 
                onClick={() => setActivePage('party')}
                className="w-full relative rounded-[32px] overflow-hidden shadow-lg cursor-pointer z-10 border-2 border-black/25"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -12, 
                  filter: "brightness(1.1)",
                  boxShadow: "0px 30px 60px rgba(0,0,0,0.2)",
                  zIndex: 20
                }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/s3_paty.png?v=4" 
                  alt="파티 카드" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* 2. 패션 카드 */}
              <motion.div 
                onClick={() => setActivePage('fashion')}
                className="w-full relative rounded-[32px] overflow-hidden shadow-lg cursor-pointer z-10 border-2 border-black/25"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -12, 
                  filter: "brightness(1.1)",
                  boxShadow: "0px 30px 60px rgba(0,0,0,0.2)",
                  zIndex: 20
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/s3_Fashion.png" 
                  alt="패션 카드" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* 3. 먹거리 카드 */}
              <motion.div 
                onClick={() => setActivePage('food')}
                className="w-full relative rounded-[32px] overflow-hidden shadow-lg cursor-pointer z-10 border-2 border-black/25"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -12, 
                  filter: "brightness(1.1)",
                  boxShadow: "0px 30px 60px rgba(0,0,0,0.2)",
                  zIndex: 20
                }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/s3_eat.png" 
                  alt="먹거리 카드" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════ FOOTER ════════════════ */}
      <footer className="bg-black overflow-hidden">
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
