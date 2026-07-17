import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConnectAILabLogo } from './ConnectAILabLogo';
import { SquashHamburger } from './SquashHamburger';
import { ScrambleText } from './ScrambleText';
import { AuthModal } from './AuthModal';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  entranceComplete: boolean;
  onNavigate?: (page: 'home' | 'party' | 'fashion' | 'food' | 'hospital' | 'info') => void;
}

export function Navbar({ entranceComplete, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadHovered, setDownloadHovered] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);
  const [metricsHovered, setMetricsHovered] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { user, signOut } = useAuth();

  const scrollTo = (y: number) => {
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ===== DESKTOP ===== */}
        <div className="hidden sm:flex items-center justify-between w-full">
          {/* Left group */}
          <div className="flex items-center gap-2">
            {/* Logo pill */}
            <motion.div
              onClick={() => onNavigate?.('home')}
              className={`h-12 px-5 bg-white/15 backdrop-blur-md rounded-[14px] flex items-center gap-2.5 cursor-pointer ${
                menuOpen ? 'hidden md:flex' : 'flex'
              }`}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.22)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-[32px] leading-none mb-1">🐶</span>
              <div className="flex flex-col justify-center">
                <span className="font-bold tracking-tight leading-none flex items-baseline gap-1.5">
                  <span className="text-[32px] text-white">U-AGA</span>
                  <span className="text-[22px] text-white/80 font-medium">라운지</span>
                </span>
              </div>
            </motion.div>


          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-3">
            {onNavigate && (
              <>
                <button onClick={() => onNavigate('info')} className="px-5 py-2.5 bg-white/15 hover:bg-blue-500 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">정보게시판</button>
                <button onClick={() => onNavigate('party')} className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">파티</button>
                <button onClick={() => onNavigate('fashion')} className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">패션</button>
                <button onClick={() => onNavigate('food')} className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-[14px] text-sm font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm">먹거리</button>
              </>
            )}
            <div className="font-bold tracking-[0.2em] text-lg ml-4 hidden md:block">U-AGA</div>
          </div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="flex sm:hidden items-center justify-between w-full">
          {/* Left group */}
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            {/* Logo pill (collapses when menu open) */}
            <motion.div
              onClick={() => onNavigate?.('home')}
              className="h-9 px-3 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center gap-2 overflow-hidden shrink-0 cursor-pointer"
              animate={{ width: menuOpen ? 0 : 'auto', opacity: menuOpen ? 0 : 1, paddingLeft: menuOpen ? 0 : 12, paddingRight: menuOpen ? 0 : 12 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            >
              <span className="text-[26px] shrink-0 leading-none">🐶</span>
              <div className="flex flex-col justify-center whitespace-nowrap">
                <span className="font-bold tracking-tight leading-none flex items-baseline gap-1">
                  <span className="text-[26px] text-white">U-AGA</span>
                  <span className="text-[18px] text-white/80 font-medium">라운지</span>
                </span>
              </div>
            </motion.div>


          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-1.5 ml-2">
            {onNavigate && (
              <div className="flex overflow-x-auto gap-1.5 no-scrollbar">
                <button onClick={() => onNavigate('info')} className="px-3 py-2 bg-white/15 hover:bg-blue-500 text-white rounded-[10px] text-xs font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm whitespace-nowrap">정보게시판</button>
                <button onClick={() => onNavigate('party')} className="px-3 py-2 bg-white/15 hover:bg-white/25 text-white rounded-[10px] text-xs font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm whitespace-nowrap">파티</button>
                <button onClick={() => onNavigate('fashion')} className="px-3 py-2 bg-white/15 hover:bg-white/25 text-white rounded-[10px] text-xs font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm whitespace-nowrap">패션</button>
                <button onClick={() => onNavigate('food')} className="px-3 py-2 bg-white/15 hover:bg-white/25 text-white rounded-[10px] text-xs font-bold tracking-wider backdrop-blur-md transition-all active:scale-95 shadow-sm whitespace-nowrap">먹거리</button>
              </div>
            )}
            <div className="font-bold tracking-[0.2em] text-sm ml-2">U-AGA</div>
          </div>
        </div>
      </motion.nav>

      {/* 반려동물 사주 운세보기 버튼 */}
      <div className="fixed top-24 right-8 z-50 hidden sm:block">
        <button
          onClick={() => window.open('https://u-agapotohwp.vercel.app/', '_blank')}
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/80 to-pink-500/80 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:from-purple-500/90 hover:to-pink-400/90 hover:scale-105 cursor-pointer"
        >
          <span className="text-lg">🔮</span>
          <span className="text-white font-bold text-sm tracking-wide whitespace-nowrap">반려동물 사주 운세보기</span>
        </button>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
