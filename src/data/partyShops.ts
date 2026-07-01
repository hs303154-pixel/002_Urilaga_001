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
  { id: '200', name: '마둥마둥', description: '우리 아이를 돋보이게 하는 러블리 펫 패션', url: 'https://smartstore.naver.com/madoongmadoong', tags: [] },
  { id: '201', name: '트위니트위니', description: '트렌디하고 감각적인 반려견 데일리룩', url: 'https://smartstore.naver.com/twiny0602', tags: [] },
  { id: '202', name: '르쁘띠숑', description: '작고 소중한 아이를 위한 프렌치 감성 부띠끄', url: 'https://smartstore.naver.com/lepetitchiot', tags: [] },
  { id: '203', name: '밀키몽', description: '구름처럼 부드럽고 편안한 반려동물 의류', url: 'https://smartstore.naver.com/milkymong', tags: [] },
  { id: '204', name: '탄탄팻', description: '탄탄한 퀄리티, 언제나 입기 좋은 기본템', url: 'https://smartstore.naver.com/tantanpet', tags: [] },
  { id: '205', name: '김냥땡 스토어', description: '시선 강탈! 힙한 멍냥이들을 위한 스트릿 패션', url: 'https://smartstore.naver.com/nyang_deng', tags: [] },
  { id: '206', name: '뭉미샵', description: '귀여움 폭발, 깔끔하고 단정한 반려견 코디', url: 'https://smartstore.naver.com/mihizzzz12', tags: [] },
  { id: '207', name: '쭈쭈야', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/didipet', tags: [] },
  { id: '208', name: '디어 스위티펫', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/dearsweetiepet', tags: [] },
  { id: '209', name: '꼴레트멍멍', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/colettemungmung', tags: [] },
  { id: '210', name: '어리를빅', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/alittlebig', tags: [] },
  { id: '211', name: '멍디버디', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/mungddy', tags: [] },
  { id: '212', name: '코코마펫', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/cocomapet', tags: [] },
  { id: '213', name: '멜로우디', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/melowoody', tags: [] },
  { id: '214', name: '매그독', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/magdog', tags: [] },
  { id: '215', name: '포우에블', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/pawavel', tags: [] },
  { id: '216', name: '드몽드펫', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/demondepet', tags: [] },
  { id: '217', name: '개꿀아울렛', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/honeydogoutlet', tags: [] },
  { id: '218', name: '패션퍼피', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/theasilver', tags: [] },
  { id: '219', name: '라미더비', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/rami_dovey', tags: [] },
  { id: '220', name: '바크독', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/barkdog', tags: [] },
  { id: '221', name: '블랑시앙', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/puppy77', tags: [] },
  { id: '222', name: '댕댕스', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/trenddog', tags: [] },
  { id: '223', name: '줄리펫', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/joliepet', tags: [] },
  { id: '224', name: '펫티아', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/petia', tags: [] },
  { id: '225', name: '큰강아지', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/bigdoggy', tags: [] },
  { id: '226', name: '위드레오', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/withreo', tags: [] },
  { id: '227', name: '쏭바이펫', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/ssongbypet', tags: [] },
  { id: '228', name: '리치독', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/richdog', tags: [] },
  { id: '229', name: '멍픽', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/mungpick', tags: [] },
  { id: '230', name: '우리펫츠', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/wooripuppy', tags: [] },
  { id: '231', name: '포레스팻', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/forespet', tags: [] },
  { id: '232', name: 'DOGNY', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/dognystore', tags: [] },
  { id: '233', name: '투스투스', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://brand.naver.com/tustus', tags: [] },
  { id: '234', name: '엔젤도그', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/angel_dog', tags: [] },
  { id: '235', name: '플럼피', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/plumpy', tags: [] },
  { id: '236', name: '왕큰댕', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/bigdeng', tags: [] },
  { id: '237', name: '기브앤조이', description: '트렌디하고 감각적인 반려동물 패션 상점', url: 'https://smartstore.naver.com/givenjoy', tags: [] },
];

export const foodShops: PartyShop[] = [
  { id: '300', name: '몽드로프', description: '우리 아이 입맛을 사로잡을 프리미엄 수제간식', url: 'https://brand.naver.com/mondorf', tags: [] },
  { id: '301', name: '독틱', description: '독특하고 기발한 아이디어가 돋보이는 먹거리 장난감', url: 'https://smartstore.naver.com/dogteuk_', tags: [] },
  { id: '302', name: '뽀뽀제과', description: '뽀뽀를 부르는 달콤하고 건강한 반려동물 디저트', url: 'https://brand.naver.com/bbobbo', tags: [] },
  { id: '303', name: '팻랜드', description: '먹거리부터 용품까지 한 번에 배달되는 펫랜드', url: 'https://smartstore.naver.com/petland_delivery', tags: [] },
  { id: '304', name: '잘먹었개', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/threesnacks', tags: [] },
  { id: '305', name: '생강이네 잡화점', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/gingers-mung-boutigues', tags: [] },
  { id: '306', name: '동행형씨', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://brand.naver.com/eastseabrother', tags: [] },
  { id: '307', name: '바잇미', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://brand.naver.com/biteme1', tags: [] },
  { id: '308', name: '레이앤븐', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://brand.naver.com/rayvonne', tags: [] },
  { id: '309', name: '식스펫', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/egapetkor', tags: [] },
  { id: '310', name: '렛만찬', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/petmanchan', tags: [] },
  { id: '311', name: '멍냥스푼', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/dogcatspoon_', tags: [] },
  { id: '312', name: '에코펫', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/safetyeco', tags: [] },
  { id: '313', name: '레이앤이본', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://brand.naver.com/rayvonne', tags: [] },
  { id: '314', name: '노블쿤', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/noblekkoonn', tags: [] },
  { id: '315', name: '몽몽까까', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/__mongkka_', tags: [] },
  { id: '316', name: '라떼온', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/latte_on', tags: [] },
  { id: '317', name: '견묘상저몰', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/dogcatmartmall', tags: [] },
  { id: '318', name: '당무네수제간식', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/dammu', tags: [] },
  { id: '319', name: '더펫유통', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/jjjk3003', tags: [] },
  { id: '320', name: '배부른강아지', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/dogram', tags: [] },
  { id: '321', name: '훅펫', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/hookpet', tags: [] },
  { id: '322', name: '문득 그리움', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/intepia', tags: [] },
  { id: '323', name: '개슈', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/gae_shu__', tags: [] },
  { id: '324', name: '동글멍글', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/donglemungle', tags: [] },
  { id: '325', name: '행복댕 맛있댕', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/hangbok_dang', tags: [] },
  { id: '326', name: '포코니얼', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/4conimal', tags: [] },
  { id: '327', name: '더건강하개', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/the_healthydog', tags: [] },
  { id: '328', name: '마루아띠', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/maruatti', tags: [] },
  { id: '329', name: '멍냥구멍가게', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/neulchanpet', tags: [] },
  { id: '330', name: '바프독', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://brand.naver.com/barfdog', tags: [] },
  { id: '331', name: '댕냥이점빵', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/asdfg123', tags: [] },
  { id: '332', name: '마이리틀퍼피', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/mylittlepuppy_shop', tags: [] },
  { id: '333', name: '월냥가', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/mmkhouse', tags: [] },
  { id: '334', name: '히피', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/heepyheepy', tags: [] },
  { id: '335', name: '몽마벨 펫푸드', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/mong-mabelle', tags: [] },
  { id: '336', name: '댕댕미식회', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/gourmet_8733', tags: [] },
  { id: '337', name: '라떼온', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/latte_on', tags: [] },
  { id: '338', name: '슈퍼멍멍', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/supermungmung', tags: [] },
  { id: '339', name: '메이드알콩', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/madercong', tags: [] },
  { id: '340', name: '멍뭉식탁', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/mmst0104', tags: [] },
  { id: '341', name: '블루피펫푸드', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/floofy0701', tags: [] },
  { id: '342', name: '퍼피니스', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/puppiness', tags: [] },
  { id: '343', name: '몽드날드', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/mongdonald', tags: [] },
  { id: '344', name: '꼬리부엌', description: '건강하고 맛있는 반려동물 먹거리 상점', url: 'https://smartstore.naver.com/kkori_kitchen', tags: [] },
];
