export interface PartyShop {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export const partyShops: PartyShop[] = [
  // Existing approved shops
  { id: '13', name: '노가다손꾸락', description: '백일/돌상용 클레이 모형 케이크, 모형 떡 맞춤 제작', url: 'https://smartstore.naver.com/nogadafinger', tags: [] },
  
  // Previous 40 shops added by user
  { id: '14', name: '페시얌', description: '트렌디한 감각의 반려동물 파티 소품 및 굿즈', url: 'https://www.pesiyam.com', tags: [] },












  // New 40 shops (41-80) added by user

  // Newly added by user from notepad
  { id: '100', name: '꼬리의유혹', description: '꼬리 흔들며 즐기는 반려동물의 행복한 파티타임', url: 'https://smartstore.naver.com/thekkori', tags: [] },
  { id: '101', name: '풀문랜드', description: '보름달처럼 풍성하고 예쁜 반려동물 생일파티 용품', url: 'https://smartstore.naver.com/fullmoon_land', tags: [] },
  { id: '102', name: '스마일파티', description: '미소가 번지는 비비드한 감성의 강아지 파티 세트', url: 'https://smartstore.naver.com/vividbaby', tags: [] },
  { id: '103', name: '나랑파티', description: '너와 내가 함께하는 특별한 기념일 파티 장식', url: 'https://smartstore.naver.com/narang_party', tags: [] },
  { id: '104', name: '도그쿡', description: '강아지도 안심하고 먹는 건강한 수제 파티 케이크', url: 'https://brand.naver.com/dogcook', tags: [] },
  { id: '105', name: '사가지상점', description: '매력 넘치고 유니크한 반려동물 파티 아이템 상점', url: 'https://smartstore.naver.com/4gajistore', tags: [] },
  { id: '106', name: '랄랄 좋은날', description: '랄랄라 콧노래가 나오는 즐거운 생일파티 굿즈', url: 'https://smartstore.naver.com/lallalgoodday', tags: [] },
  { id: '107', name: '댕데이', description: '우리 댕댕이를 위한 세상에서 제일 행복한 하루', url: 'https://smartstore.naver.com/dangday1', tags: [] },
  { id: '108', name: '로나파티', description: '감성 한 스푼 더한 프리미엄 반려동물 파티 데코', url: 'https://smartstore.naver.com/ronaparty', tags: [] },
  { id: '109', name: 'BIBIER GALLERY', description: '갤러리처럼 감각적인 펫 컨템포러리 파티 소품', url: 'https://smartstore.naver.com/saeeum_contem', tags: [] },
  { id: '110', name: '도니카트', description: '카트 가득 담고 싶은 가성비 만점 파티 장난감', url: 'https://smartstore.naver.com/donycart', tags: [] },
  { id: '111', name: '안녕지니', description: '지니의 요술램프처럼 소원을 이뤄주는 생일파티', url: 'https://smartstore.naver.com/hellojinnny', tags: [] },
];

export const fashionShops: PartyShop[] = [
  { id: '200', name: '마둥마둥', description: '트렌디하고 편안한 반려동물 패션 상점', url: 'https://smartstore.naver.com/madoongmadoong', tags: [] },
  { id: '201', name: '트위니트위니', description: '트렌디하고 편안한 반려동물 패션 상점', url: 'https://smartstore.naver.com/twiny0602', tags: [] },
  { id: '202', name: '르쁘띠숑', description: '트렌디하고 편안한 반려동물 패션 상점', url: 'https://smartstore.naver.com/lepetitchiot', tags: [] },
  { id: '203', name: '밀키몽', description: '트렌디하고 편안한 반려동물 패션 상점', url: 'https://smartstore.naver.com/milkymong', tags: [] },
  { id: '204', name: '탄탄팻', description: '탄탄한 퀄리티, 언제나 입기 좋은 기본템', url: 'https://smartstore.naver.com/tantanpet', tags: [] },
  { id: '205', name: '김냥땡 스토어', description: '트렌디하고 편안한 반려동물 패션 상점', url: 'https://smartstore.naver.com/nyang_deng', tags: [] },
  { id: '206', name: '뭉미샵', description: '트렌디하고 편안한 반려동물 패션 상점', url: 'https://smartstore.naver.com/mihizzzz12', tags: [] },
  { id: '207', name: '쭈쭈야', description: '올인원, 조끼, 우비, 한복 등 귀엽고 다양한 강아지 옷과 액세서리를 합리적인 가격에 선보입니다.', url: 'https://smartstore.naver.com/didipet', tags: [] },
  { id: '208', name: '디어 스위티펫', description: '강아지 해충방지옷, 진드기 방지 버그가드 수트, 망사 모기장 올인원 등 기능성 반려견 의류를 주로 판매합니다.', url: 'https://smartstore.naver.com/dearsweetiepet', tags: [] },
  { id: '209', name: '꼴레트멍멍', description: '강아지 의류, 여름 기능성 용품 등 트렌디한 디자인의 반려동물 라이프스타일 제품을 제공합니다.', url: 'https://smartstore.naver.com/colettemungmung', tags: [] },
  { id: '210', name: '어리를빅', description: '대형견을 위한 맞춤형 \'왕커왕귀(왕 크니까 왕 귀엽다)\' 강아지 옷을 전문적으로 제작 및 판매합니다.', url: 'https://smartstore.naver.com/alittlebig', tags: [] },
  { id: '211', name: '멍디버디', description: '강아지 산책 용품, 리빙 용품, 모자 등 반려견을 위한 다채로운 패션 및 생활 용품을 취급합니다.', url: 'https://smartstore.naver.com/mungddy', tags: [] },
  { id: '212', name: '코코마펫', description: '사계절 강아지 옷, 티셔츠, 올인원, 패딩 등 다양한 애견 용품을 한곳에서 만날 수 있는 편집샵입니다.', url: 'https://smartstore.naver.com/cocomapet', tags: [] },
  { id: '213', name: '멜로우디', description: '트렌디한 강아지 패션 및 의류, 잡화 등을 선보이는 반려용품 감성 편집샵입니다.', url: 'https://smartstore.naver.com/melowoody', tags: [] },
  { id: '214', name: '매그독', description: '반려동물을 위한 감성적인 디자인과 편안함을 추구하는 유니크한 애견 의류를 선보입니다.', url: 'https://smartstore.naver.com/magdog', tags: [] },
  { id: '215', name: '포우에블', description: '쿨링 민소매, 올인원 등 반려동물의 라이프스타일을 고려한 세련된 의류 제품을 만나보실 수 있습니다.', url: 'https://smartstore.naver.com/pawavel', tags: [] },
  { id: '216', name: '드몽드펫', description: '반려견의 일상에 특별함을 더해주는 감성적이고 아기자기한 강아지 옷과 패션 소품을 제공합니다.', url: 'https://smartstore.naver.com/demondepet', tags: [] },
  { id: '217', name: '개꿀아울렛', description: '강아지 옷 전문 할인매장으로 다양한 신상 애견 의류를 합리적이고 저렴한 가격에 판매합니다.', url: 'https://smartstore.naver.com/honeydogoutlet', tags: [] },
  { id: '218', name: '패션퍼피', description: '매일 입기 좋은 편안하고 스타일리시한 디자인의 다채로운 강아지 의류를 만나보실 수 있습니다.', url: 'https://smartstore.naver.com/theasilver', tags: [] },
  { id: '219', name: '라미더비', description: '반려견의 매력을 돋보이게 하는 귀엽고 유니크한 디자인의 애견 패션 아이템을 선보입니다.', url: 'https://smartstore.naver.com/rami_dovey', tags: [] },
  { id: '220', name: '바크독', description: '소형견부터 대형견까지 모든 체형을 아우르는 쿨나시, 맨투맨 등 프리미엄 강아지 옷을 전문으로 합니다.', url: 'https://smartstore.naver.com/barkdog', tags: [] },
  { id: '221', name: '블랑시앙', description: '반려견의 편안한 휴식을 돕는 오가닉 소재의 강아지 실내복과 잠옷 제품을 주로 판매합니다.', url: 'https://smartstore.naver.com/puppy77', tags: [] },
  { id: '222', name: '댕댕스', description: '산책길에서 시선을 사로잡는 귀엽고 개성 넘치는 강아지 옷과 다양한 패션 용품을 제공합니다.', url: 'https://smartstore.naver.com/trenddog', tags: [] },
  { id: '223', name: '줄리펫', description: '러블리한 원피스부터 편안한 올인원까지 반려견을 위한 다채로운 디자인의 애견 의류를 판매합니다.', url: 'https://smartstore.naver.com/joliepet', tags: [] },
  { id: '224', name: '펫티아', description: '반려견의 일상에 편안함과 스타일을 더해주는 퀄리티 높은 강아지 의류와 용품을 선보입니다.', url: 'https://smartstore.naver.com/petia', tags: [] },
  { id: '225', name: '큰강아지', description: '대형견을 위한 다양한 사이즈와 스타일의 맞춤형 패션 의류를 만나보세요.', url: 'https://smartstore.naver.com/bigdoggy', tags: [] },
  { id: '226', name: '위드레오', description: '소형견부터 대형견까지 특별한 날을 위한 웨딩드레스와 코스튬 의상을 제공합니다.', url: 'https://smartstore.naver.com/withreo', tags: [] },
  { id: '227', name: '쏭바이펫', description: '우주에서 가장 편안한 착용감을 자랑하는 반려동물 고퀄리티 일상복을 제작합니다.', url: 'https://smartstore.naver.com/ssongbypet', tags: [] },
  { id: '228', name: '리치독', description: '반려견의 편안한 활동을 돕는 기능성 의류와 세련된 패션 케어 용품을 선보입니다.', url: 'https://smartstore.naver.com/richdog', tags: [] },
  { id: '229', name: '멍픽', description: '귀여운 디자인과 뛰어난 활동성을 겸비한 반려견 패션 의류 및 올인원을 판매합니다.', url: 'https://smartstore.naver.com/mungpick', tags: [] },
  { id: '230', name: '우리펫츠', description: '맨투맨부터 개량한복까지 사랑스러운 강아지를 위한 다채로운 패션 아이템을 소개합니다.', url: 'https://smartstore.naver.com/wooripuppy', tags: [] },
  { id: '231', name: '포레스팻', description: '반려견의 편안한 일상과 산책을 위한 스타일리시하고 실용적인 강아지 의류를 만나보세요.', url: 'https://smartstore.naver.com/forespet', tags: [] },
  { id: '232', name: 'DOGNY', description: '집에서도 밖에서도 편안하게 입을 수 있는 강아지 실내복과 잠옷, 올인원을 제공합니다.', url: 'https://smartstore.naver.com/dognystore', tags: [] },
  { id: '233', name: '투스투스', description: '계절에 꼭 맞는 실용적인 쿨나시와 올인원으로 반려견의 쾌적한 일상을 돕습니다.', url: 'https://brand.naver.com/tustus', tags: [] },
  { id: '234', name: '엔젤도그', description: '트렌치 레인코트와 쿨조끼 등 사계절 내내 강아지를 보호하는 기능성 의류를 판매합니다.', url: 'https://smartstore.naver.com/angel_dog', tags: [] },
  { id: '235', name: '플럼피', description: '귀여운 캐릭터 디자인과 편안한 패턴이 돋보이는 사랑스러운 반려견 옷을 제작합니다.', url: 'https://smartstore.naver.com/plumpy', tags: [] },
  { id: '236', name: '왕큰댕', description: '크고 사랑스러운 대형견들의 반전 매력을 한층 돋보이게 하는 전용 의류를 선보입니다.', url: 'https://smartstore.naver.com/bigdeng', tags: [] },
  { id: '237', name: '기브앤조이', description: '강아지 실내복, 패딩 조끼, 구명조끼 등 다양한 일상 및 아웃도어 의류 용품을 판매합니다.', url: 'https://smartstore.naver.com/givenjoy', tags: [] },
];

export const foodShops: PartyShop[] = [
  { id: '300', name: '몽드로프', description: '우리 아이 입맛을 사로잡을 프리미엄 수제간식', url: 'https://brand.naver.com/mondorf', tags: [] },
  { id: '301', name: '독틱', description: '독특하고 기발한 아이디어가 돋보이는 먹거리 장난감', url: 'https://smartstore.naver.com/dogteuk_', tags: [] },
  { id: '302', name: '뽀뽀제과', description: '뽀뽀를 부르는 달콤하고 건강한 반려동물 디저트', url: 'https://brand.naver.com/bbobbo', tags: [] },
  { id: '303', name: '팻랜드', description: '먹거리부터 용품까지 한 번에 배달되는 펫랜드', url: 'https://smartstore.naver.com/petland_delivery', tags: [] },
  { id: '304', name: '잘먹었개', description: '신선한 재료로 정성껏 만든 강아지용 생일 케이크와 이색 수제 간식을 제공합니다.', url: 'https://smartstore.naver.com/threesnacks', tags: [] },
  { id: '305', name: '생강이네 잡화점', description: '반려견의 건강하고 행복한 일상을 위해 정성을 담아 준비한 맛있는 간식을 만나보세요.', url: 'https://smartstore.naver.com/gingers-mung-boutigues', tags: [] },
  { id: '306', name: '동행형씨', description: '동해 바다의 신선한 수산물로 정성껏 만든 프리미엄 강아지 건강 수제 간식을 만나보세요.', url: 'https://brand.naver.com/eastseabrother', tags: [] },
  { id: '307', name: '바잇미', description: '반려견의 입맛을 사로잡는 맛있고 트렌디한 간식과 귀여운 라이프스타일 용품을 함께 선보입니다.', url: 'https://brand.naver.com/biteme1', tags: [] },
  { id: '308', name: '레이앤븐', description: '수의영양학 전문가가 설계한 신선하고 균형 잡힌 프리미엄 강아지 자연식과 영양제를 선보입니다.', url: 'https://brand.naver.com/rayvonne', tags: [] },
  { id: '309', name: '식스펫', description: '우리 아이를 위한 건강하고 맛있는 반려동물 맞춤형 먹거리를 다양하게 제공합니다.', url: 'https://smartstore.naver.com/egapetkor', tags: [] },
  { id: '310', name: '렛만찬', description: '반려동물의 행복한 식사 시간을 위한 정성 가득한 안심 먹거리를 선보입니다.', url: 'https://smartstore.naver.com/petmanchan', tags: [] },
  { id: '311', name: '멍냥스푼', description: '강아지와 고양이 모두가 좋아하는 영양 만점 먹거리를 정성껏 준비했습니다.', url: 'https://smartstore.naver.com/dogcatspoon_', tags: [] },
  { id: '312', name: '에코펫', description: '안전하고 건강하게 만든 우리 아이를 위한 반려동물 먹거리와 간식을 판매합니다.', url: 'https://smartstore.naver.com/safetyeco', tags: [] },
  { id: '313', name: '레이앤이본', description: '수의사가 직접 영양을 설계한 프리미엄 화식, 생식 및 영양제 브랜드 닥터레이를 선보입니다.', url: 'https://brand.naver.com/rayvonne', tags: [] },
  { id: '314', name: '노블쿤', description: '소중한 반려견을 위해 엄선된 재료로 만든 맛있고 건강한 간식을 만나보세요.', url: 'https://smartstore.naver.com/noblekkoonn', tags: [] },
  { id: '315', name: '몽몽까까', description: '우리 집 강아지가 매일 기다리는 신선하고 맛있는 맞춤형 간식을 제공합니다.', url: 'https://smartstore.naver.com/__mongkka_', tags: [] },
  { id: '316', name: '라떼온', description: '반려동물의 입맛을 사로잡을 정성 가득한 수제 먹거리를 선보이는 공간입니다.', url: 'https://smartstore.naver.com/latte_on', tags: [] },
  { id: '317', name: '견묘상저몰', description: '한우 우피 꽈배기, 상어 연골 등 화학 첨가물 없는 휴먼 그레이드 수제 간식을 매일 신선하게 만듭니다.', url: 'https://smartstore.naver.com/dogcatmartmall', tags: [] },
  { id: '318', name: '당무네수제간식', description: '강아지 용돈 쿠키 등 보기에도 좋고 기호성도 뛰어난 특별한 수제 간식을 정성껏 구워냅니다.', url: 'https://smartstore.naver.com/dammu', tags: [] },
  { id: '319', name: '더펫유통', description: '다양한 브랜드의 믿을 수 있는 반려동물 사료와 간식을 합리적인 가격에 제공합니다.', url: 'https://smartstore.naver.com/jjjk3003', tags: [] },
  { id: '320', name: '배부른강아지', description: '우리 아이들이 배부르고 행복하게 즐길 수 있는 영양 만점 강아지 간식을 판매합니다.', url: 'https://smartstore.naver.com/dogram', tags: [] },
  { id: '321', name: '훅펫', description: '반려동물의 입맛을 확 사로잡을 다양하고 맛있는 먹거리를 정성껏 준비했습니다.', url: 'https://smartstore.naver.com/hookpet', tags: [] },
  { id: '322', name: '문득 그리움', description: '사랑하는 반려동물을 떠올리며 정성을 다해 만든 맛있고 안전한 먹거리입니다.', url: 'https://smartstore.naver.com/intepia', tags: [] },
  { id: '323', name: '개슈', description: '매일 신선한 재료로 건강하게 만드는 부산의 정성 가득 반려동물 수제 간식을 만나보세요.', url: 'https://smartstore.naver.com/gae_shu__', tags: [] },
  { id: '324', name: '동글멍글', description: '둥글둥글 귀여운 반려동물들의 입맛을 맞춘 영양 가득하고 맛있는 안심 먹거리를 제공합니다.', url: 'https://smartstore.naver.com/donglemungle', tags: [] },
  { id: '325', name: '행복댕 맛있댕', description: '먹는 순간 행복해지는, 반려견을 위한 맛있고 건강한 영양 간식을 선보입니다.', url: 'https://smartstore.naver.com/hangbok_dang', tags: [] },
  { id: '326', name: '포코니얼', description: '네 발 달린 소중한 가족을 위해 좋은 원료로 정성껏 만든 건강한 반려동물 간식을 판매합니다.', url: 'https://smartstore.naver.com/4conimal', tags: [] },
  { id: '327', name: '더건강하개', description: '청년들이 정성껏 만든 무방부제 프리미엄 수제 간식과 알러지견을 위한 비건 간식을 제공합니다.', url: 'https://smartstore.naver.com/the_healthydog', tags: [] },
  { id: '328', name: '마루아띠', description: '소중한 반려동물을 위해 신선한 재료로 정성껏 만든 건강한 수제간식을 선보입니다.', url: 'https://smartstore.naver.com/maruatti', tags: [] },
  { id: '329', name: '멍냥구멍가게', description: '사랑하는 멍냥이를 위한 맛있고 다채로운 수제간식을 만나보실 수 있습니다.', url: 'https://smartstore.naver.com/neulchanpet', tags: [] },
  { id: '330', name: '바프독', description: '반려견의 건강 데이터를 분석해 1:1 맞춤형 프리미엄 생식과 화식을 정기 배송하는 브랜드입니다.', url: 'https://brand.naver.com/barfdog', tags: [] },
  { id: '331', name: '댕냥이점빵', description: '꽥꽥이칩 오리고기 등 반려동물이 좋아하는 맛있고 건강한 수제간식과 케이크 전문점입니다.', url: 'https://smartstore.naver.com/asdfg123', tags: [] },
  { id: '332', name: '마이리틀퍼피', description: '반려견을 위한 정성 가득한 프리미엄 수제간식을 만나보실 수 있습니다.', url: 'https://smartstore.naver.com/mylittlepuppy_shop', tags: [] },
  { id: '333', name: '월냥가', description: '반려동물이 좋아하는 건강하고 맛있는 영양 만점 수제간식을 선보입니다.', url: 'https://smartstore.naver.com/mmkhouse', tags: [] },
  { id: '334', name: '히피', description: '우리 아이의 입맛을 사로잡을 건강하고 특별한 프리미엄 수제간식입니다.', url: 'https://smartstore.naver.com/heepyheepy', tags: [] },
  { id: '335', name: '몽마벨 펫푸드', description: '반려동물의 얼굴을 정교하게 재현한 특별한 맞춤형 케이크와 프리미엄 수제간식을 제작합니다.', url: 'https://smartstore.naver.com/mong-mabelle', tags: [] },
  { id: '336', name: '댕댕미식회', description: '무항생제 식재료를 엄선하여 반려견을 위한 건강하고 맛있는 프리미엄 수제간식을 만듭니다.', url: 'https://smartstore.naver.com/gourmet_8733', tags: [] },
  { id: '337', name: '라떼온', description: '동물복지 무항생제 육류를 사용하여 안전하고 건강하게 만든 반려동물 수제간식을 제공합니다.', url: 'https://smartstore.naver.com/latte_on', tags: [] },
  { id: '338', name: '슈퍼멍멍', description: '방부제와 색소 없이 건강한 레시피로 강아지 화식, 건조 간식, 생일 케이크를 만듭니다.', url: 'https://smartstore.naver.com/supermungmung', tags: [] },
  { id: '339', name: '메이드알콩', description: '무색소, 무방부제 원칙을 지켜 100% 수작업으로 안심하고 먹일 수 있는 수제간식을 선보입니다.', url: 'https://smartstore.naver.com/madercong', tags: [] },
  { id: '340', name: '멍뭉식탁', description: '단미사료 성분검사를 완료하여 믿고 급여할 수 있는 안전하고 맛있는 반려동물 수제간식을 만듭니다.', url: 'https://smartstore.naver.com/mmst0104', tags: [] },
  { id: '341', name: '블루피펫푸드', description: '우리 아이를 위해 정성껏 만든 건강하고 맛있는 프리미엄 펫푸드를 만나보세요.', url: 'https://smartstore.naver.com/floofy0701', tags: [] },
  { id: '342', name: '퍼피니스', description: '사랑스러운 반려견의 입맛을 사로잡을 정성 가득하고 신선한 수제간식입니다.', url: 'https://smartstore.naver.com/puppiness', tags: [] },
  { id: '343', name: '몽드날드', description: '반려동물을 위해 특별하고 재미있는 컨셉으로 정성껏 만든 맛있는 수제간식입니다.', url: 'https://smartstore.naver.com/mongdonald', tags: [] },
  { id: '344', name: '꼬리부엌', description: '꼬리 치며 반기는 우리 아이를 위해 정직한 재료로 만든 건강한 수제간식입니다.', url: 'https://smartstore.naver.com/kkori_kitchen', tags: [] },
];
