// ============================================================
// Site Content Configuration — 텍스트/데이터 관리
// ============================================================
// 사이트에 표시되는 모든 텍스트를 여기서 수정할 수 있습니다.
// ============================================================

export const SITE_CONFIG = {
  // 브랜드
  brandName: 'U-AGA 라운지',
  copyright: '© 2026 U-AGA Lounge. All rights reserved.',

  // 히어로 섹션
  hero: {
    titleLeft: ['평범한 일상도', '특별한'],
    titleRight: ['기념일이', '됩니다'],
    watermark: 'U-AGA LOUNGE',
    description:
      '반려동물과 함께하는 모든 순간을 특별하게. 한국과 글로벌의 트렌디한 강아지, 고양이 파티 용품, 감각적인 옷, 건강한 먹거리를 큐레이션합니다.',
  },

  // 시네마틱 텍스트 섹션
  cinematic: {
    text: '우리아가(U-AGA)의 세계에 오신 것을 환영합니다. 이곳은 숨겨진 보석 같은 아이템을 소개하는 갤러리이자, 우리 아이의 가장 예쁜 순간을 전 세계와 나누는 글로벌 무대입니다. 매일 입는 옷과 먹거리부터, 건강을 책임질 병원 정보, 마지막 소풍을 위한 장례식장 안내까지. 반려동물과 함께하는 당신의 모든 시간에 가장 완벽하고 든든한 길잡이가 되겠습니다. 우리의 큐레이션으로 오늘 하루를, 그리고 평생의 추억을 선물하세요.',
  },

  // 성능 지표 섹션 (카테고리 카드로 대체됨)
  metrics: {
    subtitle: 'U-AGA LOUNGE CATEGORIES',
    items: [
      { 
        label: '파티', 
        subtext: '특별한 날을 더 특별하게',
        icon: 'PartyPopper',
        textColor: 'text-[#E86A8D]',
        circleBg: 'bg-[#E86A8D]',
        headerBg: 'bg-gradient-to-br from-[#FFF0F5] to-[#FFE4E1]',
        bodyBg: 'bg-[#FFF5F8]',
        imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        subItems: [
          { name: '생일파티', icon: 'Cake', isWide: false },
          { name: '돌잔치', icon: 'Gift', isWide: false },
          { name: '크리스마스', icon: 'TreePine', isWide: false },
          { name: '할로윈', icon: 'Ghost', isWide: false },
          { name: '피크닉', icon: 'Tent', isWide: false },
          { name: '웨딩컨셉', icon: 'Camera', isWide: false },
        ]
      },
      { 
        label: '패션', 
        subtext: '우리 아이를 더 빛나게',
        icon: 'Shirt',
        textColor: 'text-[#5C9ED8]',
        circleBg: 'bg-[#5C9ED8]',
        headerBg: 'bg-gradient-to-br from-[#F0F8FF] to-[#E1F0FF]',
        bodyBg: 'bg-[#F4F9FF]',
        imageUrl: 'https://images.unsplash.com/photo-1537151608804-ea6d11540eb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        subItems: [
          { name: '여름옷', icon: 'Sun', isWide: false },
          { name: '겨울옷', icon: 'CloudSnow', isWide: false },
          { name: '우비', icon: 'Umbrella', isWide: false },
          { name: '모자', icon: 'Crown', isWide: false },
          { name: '커플룩', icon: 'Users', isWide: true },
        ]
      },
      { 
        label: '먹거리', 
        subtext: '맛있고 건강한 선택',
        icon: 'Bone',
        textColor: 'text-[#D4A017]',
        circleBg: 'bg-[#D4A017]',
        headerBg: 'bg-gradient-to-br from-[#FFFDF0] to-[#FFF4CC]',
        bodyBg: 'bg-[#FFFAF0]',
        imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        subItems: [
          { name: '케이크', icon: 'CakeSlice', isWide: false },
          { name: '간식', icon: 'Bone', isWide: false },
          { name: '수제간식', icon: 'Cookie', isWide: false },
          { name: '건강식', icon: 'Salad', isWide: false },
          { name: '생일음식', icon: 'Utensils', isWide: true },
        ]
      },
    ],
  },

  // 기술 섹션 (큐레이션 기준)
  technology: {
    title: ['우리가', '선택한 기준'],
    description:
      '수백 개의 브랜드 중 디자인, 품질, 그리고 반려동물의 행복을 최우선으로 고려하여 엄선합니다.',
    features: [
      {
        title: '파티 용품',
        desc: '생일과 기념일을 위한 특별한 데코레이션과 소품',
      },
      {
        title: '프리미엄 의류',
        desc: '편안함과 스타일을 모두 잡은 글로벌 트렌드 옷',
      },
      {
        title: '건강한 먹거리',
        desc: '믿고 먹일 수 있는 프리미엄 간식과 수제 케이크',
      },
      {
        title: '라이프스타일',
        desc: '반려동물과 함께하는 공간을 아름답게 채울 아이템',
      },
    ],
  },

  // 아키텍처 섹션 (프로세스)
  architecture: {
    subtitle: '큐레이션 프로세스',
    heading: '세 단계로 만나는 완벽한 아이템.',
    description:
      '전 세계의 트렌드를 분석하고, 꼼꼼하게 품질을 검증하여, 당신의 반려동물에게 가장 잘 맞는 아이템만 소개합니다.',
    layers: [
      { num: 1, name: '글로벌 트렌드 발굴' },
      { num: 2, name: '품질 및 성분 검증' },
      { num: 3, name: '베스트 아이템 선정' },
    ],
  },

  // 푸터
  footer: {
    tagline:
      '반려동물과 함께하는 당신의 모든 일상이 화보가 됩니다.',
  },

  // 네비게이션
  nav: {
    links: [
      { label: '소개', scrollMultiplier: 1 },
      { label: '큐레이션', scrollMultiplier: 2 },
    ],
    downloadLabel: '둘러보기',
  },
};
