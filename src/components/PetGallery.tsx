import { motion } from 'framer-motion';

const DUMMY_PETS = [
  {
    id: 1,
    name: "뭉치",
    caption: "오늘 산책 신나게 했어요! 🐾",
    likes: 124,
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
    rotation: -4
  },
  {
    id: 2,
    name: "코코",
    caption: "새로운 꼬까옷 입고 찰칵 ✨",
    likes: 89,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80",
    rotation: 2
  },
  {
    id: 3,
    name: "보리",
    caption: "간식 달라고 애교 부리는 중 🥺",
    likes: 256,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    rotation: -2
  },
  {
    id: 4,
    name: "나비",
    caption: "창밖 구경이 제일 좋아 🐱",
    likes: 152,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    rotation: 3
  },
  {
    id: 5,
    name: "두부",
    caption: "쿨쿨.. 꿈속에서 뛰노는 중 💤",
    likes: 98,
    image: "https://images.unsplash.com/photo-1537151608804-ea2f141471a2?auto=format&fit=crop&w=600&q=80",
    rotation: -3
  },
  {
    id: 6,
    name: "초코",
    caption: "우다다다!! 달리기 대장 🏃‍♂️",
    likes: 187,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    rotation: 1
  }
];

export function PetGallery() {
  return (
    <div className="w-full flex flex-col items-center py-10 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex w-full justify-between items-end mb-12 border-b border-white/20 pb-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: '"Nanum Pen Script", "Gowun Dodum", sans-serif' }}>우리아가 자랑하기 📸</h2>
          <p className="text-white/60 mt-2 text-sm md:text-base">귀여운 우리 아이의 일상을 공유해 보세요!</p>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden sm:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl"
        >
          <span className="text-xl">📷</span>
          내 아이 자랑하기
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full place-items-center">
        {DUMMY_PETS.map((pet, idx) => (
          <motion.div
            key={pet.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className="relative bg-white p-3 md:p-4 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] cursor-pointer group w-full max-w-[320px] transition-transform duration-300"
            style={{ transform: `rotate(${pet.rotation}deg)` }}
          >
            {/* Polaroid Photo Frame */}
            <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200 mb-3 relative rounded-[2px]">
              <img 
                src={pet.image} 
                alt={pet.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            
            {/* Polaroid Bottom Text Area */}
            <div className="flex flex-col items-center pb-2">
              <span className="font-bold text-gray-800 text-lg">{pet.name}</span>
              <p className="text-sm text-gray-600 mt-1 text-center font-medium" style={{ fontFamily: '"Nanum Pen Script", "Gowun Dodum", sans-serif' }}>{pet.caption}</p>
              
              <div className="flex items-center gap-1 mt-3 text-red-500">
                <span>❤️</span>
                <span className="text-sm font-bold">{pet.likes}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <button className="sm:hidden mt-10 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg">
        <span className="text-xl">📷</span>
        내 아이 자랑하기
      </button>
    </div>
  );
}
