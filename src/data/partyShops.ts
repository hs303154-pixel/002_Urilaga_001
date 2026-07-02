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
  { id: '207', name: '쭈쭈야', description: '쭈쭈처럼 사랑스러운 반려견을 위한 포인트 코디', url: 'https://smartstore.naver.com/didipet', tags: [] },
  { id: '208', name: '디어 스위티펫', description: '스위티한 감성의 디어 스위티펫 파티 드레스', url: 'https://smartstore.naver.com/dearsweetiepet', tags: [] },
  { id: '209', name: '꼴레트멍멍', description: '프렌치 시크가 돋보이는 꼴레트멍멍의 스타일링', url: 'https://smartstore.naver.com/colettemungmung', tags: [] },
  { id: '210', name: '어리를빅', description: '조금 큰 아이들도 넉넉하고 예쁘게 입는 패션', url: 'https://smartstore.naver.com/alittlebig', tags: [] },
  { id: '211', name: '멍디버디', description: '멍디버디와 함께하는 힙스터 반려견 데일리룩', url: 'https://smartstore.naver.com/mungddy', tags: [] },
  { id: '212', name: '코코마펫', description: '코코마펫의 퀄리티 높은 프리미엄 강아지 옷', url: 'https://smartstore.naver.com/cocomapet', tags: [] },
  { id: '213', name: '멜로우디', description: '멜로우디만의 부드럽고 따뜻한 감성 반려견룩', url: 'https://smartstore.naver.com/melowoody', tags: [] },
  { id: '214', name: '매그독', description: '매그독이 선사하는 세련된 무드의 애견 의류', url: 'https://smartstore.naver.com/magdog', tags: [] },
  { id: '215', name: '포우에블', description: '포우에블의 특별한 날을 위한 포멀 파티수트', url: 'https://smartstore.naver.com/pawavel', tags: [] },
  { id: '216', name: '드몽드펫', description: '드몽드펫, 파리 감성의 유니크한 펫 부띠끄', url: 'https://smartstore.naver.com/demondepet', tags: [] },
  { id: '217', name: '개꿀아울렛', description: '개꿀아울렛에서 만나는 가성비 최고 패션템', url: 'https://smartstore.naver.com/honeydogoutlet', tags: [] },
  { id: '218', name: '패션퍼피', description: '패션퍼피가 제안하는 우리 강아지 패셔니스타 코디', url: 'https://smartstore.naver.com/theasilver', tags: [] },
  { id: '219', name: '라미더비', description: '라미더비만의 산뜻하고 발랄한 애견 스프링룩', url: 'https://smartstore.naver.com/rami_dovey', tags: [] },
  { id: '220', name: '바크독', description: '바크독의 활동성 좋고 멋스러운 강아지 산책룩', url: 'https://smartstore.naver.com/barkdog', tags: [] },
  { id: '221', name: '블랑시앙', description: '블랑시앙의 고급스럽고 우아한 강아지 드레스룸', url: 'https://smartstore.naver.com/puppy77', tags: [] },
  { id: '222', name: '댕댕스', description: '댕댕스를 위한 편안하고 실용적인 데일리 패션', url: 'https://smartstore.naver.com/trenddog', tags: [] },
  { id: '223', name: '줄리펫', description: '줄리펫의 아기자기하고 귀여운 소형견 맞춤 코디', url: 'https://smartstore.naver.com/joliepet', tags: [] },
  { id: '224', name: '펫티아', description: '펫티아에서 완성하는 반려견의 완벽한 오오티디', url: 'https://smartstore.naver.com/petia', tags: [] },
  { id: '225', name: '큰강아지', description: '큰강아지도 예쁘게 입을 수 있는 대형견 전용 옷', url: 'https://smartstore.naver.com/bigdoggy', tags: [] },
  { id: '226', name: '위드레오', description: '위드레오와 함께하는 감성 충만 강아지 커플룩', url: 'https://smartstore.naver.com/withreo', tags: [] },
  { id: '227', name: '쏭바이펫', description: '쏭바이펫의 흔하지 않은 유니크한 자체제작 패션', url: 'https://smartstore.naver.com/ssongbypet', tags: [] },
  { id: '228', name: '리치독', description: '리치독처럼 고급스럽고 부티나는 럭셔리 애견 의류', url: 'https://smartstore.naver.com/richdog', tags: [] },
  { id: '229', name: '멍픽', description: '멍픽이 까다롭게 고른 퀄리티 최상급 강아지 옷', url: 'https://smartstore.naver.com/mungpick', tags: [] },
  { id: '230', name: '우리펫츠', description: '우리펫츠의 사계절 언제나 편안한 베이직 아이템', url: 'https://smartstore.naver.com/wooripuppy', tags: [] },
  { id: '231', name: '포레스팻', description: '포레스팻의 숲속 요정처럼 맑고 순수한 강아지 코디', url: 'https://smartstore.naver.com/forespet', tags: [] },
  { id: '232', name: 'DOGNY', description: 'DOGNY만의 트렌디한 색감과 위트 있는 스트릿룩', url: 'https://smartstore.naver.com/dognystore', tags: [] },
  { id: '233', name: '투스투스', description: '투스투스의 치명적인 귀여움을 장착한 강아지 맨투맨', url: 'https://brand.naver.com/tustus', tags: [] },
  { id: '234', name: '엔젤도그', description: '천사 같은 우리 강아지를 위한 엔젤도그 맞춤 드레스', url: 'https://smartstore.naver.com/angel_dog', tags: [] },
  { id: '235', name: '플럼피', description: '플럼피의 포동포동 귀여운 체형을 위한 맞춤 핏 패션', url: 'https://smartstore.naver.com/plumpy', tags: [] },
  { id: '236', name: '왕큰댕', description: '왕큰댕들을 위한 빅사이즈 힙스터 애견 의류 전문점', url: 'https://smartstore.naver.com/bigdeng', tags: [] },
  { id: '237', name: '기브앤조이', description: '입히는 즐거움이 있는 기브앤조이의 트렌디 펫 패션', url: 'https://smartstore.naver.com/givenjoy', tags: [] },
];

export const foodShops: PartyShop[] = [
  { id: '300', name: '몽드로프', description: '우리 아이 입맛을 사로잡을 프리미엄 수제간식', url: 'https://brand.naver.com/mondorf', tags: [] },
  { id: '301', name: '독틱', description: '독특하고 기발한 아이디어가 돋보이는 먹거리 장난감', url: 'https://smartstore.naver.com/dogteuk_', tags: [] },
  { id: '302', name: '뽀뽀제과', description: '뽀뽀를 부르는 달콤하고 건강한 반려동물 디저트', url: 'https://brand.naver.com/bbobbo', tags: [] },
  { id: '303', name: '팻랜드', description: '먹거리부터 용품까지 한 번에 배달되는 펫랜드', url: 'https://smartstore.naver.com/petland_delivery', tags: [] },
  { id: '304', name: '잘먹었개', description: '이름처럼 배부르게 잘먹었개! 기호성 좋은 영양 간식', url: 'https://smartstore.naver.com/threesnacks', tags: [] },
  { id: '305', name: '생강이네 잡화점', description: '생강이네가 직접 만든 건강 듬뿍 프리미엄 펫 수제간식', url: 'https://smartstore.naver.com/gingers-mung-boutigues', tags: [] },
  { id: '306', name: '동행형씨', description: '반려동물과 동행하는 형씨가 추천하는 믿을 수 있는 먹거리', url: 'https://brand.naver.com/eastseabrother', tags: [] },
  { id: '307', name: '바잇미', description: '한 입 크게 바잇미! 신선한 재료로 만든 꿀맛 간식', url: 'https://brand.naver.com/biteme1', tags: [] },
  { id: '308', name: '레이앤븐', description: '레이앤븐의 특별한 레시피로 구워낸 파티용 고기 케이크', url: 'https://brand.naver.com/rayvonne', tags: [] },
  { id: '309', name: '식스펫', description: '식스펫이 보장하는 100% 휴먼그레이드 안전한 펫푸드', url: 'https://smartstore.naver.com/egapetkor', tags: [] },
  { id: '310', name: '렛만찬', description: '우리아이 입맛을 확 살려줄 렛만찬의 특별한 특식', url: 'https://smartstore.naver.com/petmanchan', tags: [] },
  { id: '311', name: '멍냥스푼', description: '멍냥스푼으로 떠먹여 주고 싶은 정성 가득 영양 스튜', url: 'https://smartstore.naver.com/dogcatspoon_', tags: [] },
  { id: '312', name: '에코펫', description: '친환경 재료로 더욱 안전하게 만든 에코펫 자연식', url: 'https://smartstore.naver.com/safetyeco', tags: [] },
  { id: '313', name: '레이앤이본', description: '레이앤이본의 알러지 걱정 없는 깨끗한 무방부제 간식', url: 'https://brand.naver.com/rayvonne', tags: [] },
  { id: '314', name: '노블쿤', description: '노블쿤이 준비한 상위 1% 아이들을 위한 귀족 펫푸드', url: 'https://smartstore.naver.com/noblekkoonn', tags: [] },
  { id: '315', name: '몽몽까까', description: '바스락바스락 몽몽까까의 식감 예술 수제 건조 간식', url: 'https://smartstore.naver.com/__mongkka_', tags: [] },
  { id: '316', name: '라떼온', description: '라떼온의 부드럽고 달콤한 펫밀크와 강아지 전용 디저트', url: 'https://smartstore.naver.com/latte_on', tags: [] },
  { id: '317', name: '견묘상저몰', description: '견묘상저몰의 강아지와 고양이 모두가 사랑하는 츄르 묶음', url: 'https://smartstore.naver.com/dogcatmartmall', tags: [] },
  { id: '318', name: '당무네수제간식', description: '당무네 오븐에서 갓 구워낸 고소하고 담백한 강아지 빵', url: 'https://smartstore.naver.com/dammu', tags: [] },
  { id: '319', name: '더펫유통', description: '더펫유통에서 거품 없이 만나는 신선한 생식과 화식', url: 'https://smartstore.naver.com/jjjk3003', tags: [] },
  { id: '320', name: '배부른강아지', description: '배부른강아지도 꼬리치게 만드는 마성의 대용량 간식', url: 'https://smartstore.naver.com/dogram', tags: [] },
  { id: '321', name: '훅펫', description: '훅 들어오는 감칠맛! 훅펫의 기호성 끝판왕 파티 음식', url: 'https://smartstore.naver.com/hookpet', tags: [] },
  { id: '322', name: '문득 그리움', description: '문득 그리운 그 맛, 엄마의 마음으로 푹 끓인 보양식', url: 'https://smartstore.naver.com/intepia', tags: [] },
  { id: '323', name: '개슈', description: '개슈가 제안하는 트렌디하고 예쁜 강아지 피크닉 도시락', url: 'https://smartstore.naver.com/gae_shu__', tags: [] },
  { id: '324', name: '동글멍글', description: '동글멍글 귀여운 모양에 영양까지 꽉 채운 칭찬용 간식', url: 'https://smartstore.naver.com/donglemungle', tags: [] },
  { id: '325', name: '행복댕 맛있댕', description: '먹는 순간 행복댕! 최고급 원육으로 빚어낸 프리미엄 저키', url: 'https://smartstore.naver.com/hangbok_dang', tags: [] },
  { id: '326', name: '포코니얼', description: '포코니얼의 알러지 체질 아이들을 위한 착한 곤충 단백질', url: 'https://smartstore.naver.com/4conimal', tags: [] },
  { id: '327', name: '더건강하개', description: '이름값 제대로 하는 더건강하개의 면역력 쑥쑥 영양제 간식', url: 'https://smartstore.naver.com/the_healthydog', tags: [] },
  { id: '328', name: '마루아띠', description: '마루아띠 공방에서 매일 신선하게 만들어내는 펫 베이커리', url: 'https://smartstore.naver.com/maruatti', tags: [] },
  { id: '329', name: '멍냥구멍가게', description: '없는 거 빼고 다 있는 멍냥구멍가게의 다채로운 주전부리', url: 'https://smartstore.naver.com/neulchanpet', tags: [] },
  { id: '330', name: '바프독', description: '바프독의 육즙 가득한 강아지 소시지와 바비큐 특식', url: 'https://brand.naver.com/barfdog', tags: [] },
  { id: '331', name: '댕냥이점빵', description: '댕냥이점빵 이모님이 푸짐하게 담아주는 가성비 최고 간식', url: 'https://smartstore.naver.com/asdfg123', tags: [] },
  { id: '332', name: '마이리틀퍼피', description: '마이리틀퍼피의 생일파티 식탁을 빛내줄 예쁜 파운드 케이크', url: 'https://smartstore.naver.com/mylittlepuppy_shop', tags: [] },
  { id: '333', name: '월냥가', description: '월냥가의 고양이를 위한 신선한 동결건조 트릿과 캣닢 사탕', url: 'https://smartstore.naver.com/mmkhouse', tags: [] },
  { id: '334', name: '히피', description: '자유로운 영혼 히피 스타일의 천연 치석 제거 껌', url: 'https://smartstore.naver.com/heepyheepy', tags: [] },
  { id: '335', name: '몽마벨 펫푸드', description: '프랑스 요리처럼 고급스러운 몽마벨 펫푸드의 자연식', url: 'https://smartstore.naver.com/mong-mabelle', tags: [] },
  { id: '336', name: '댕댕미식회', description: '댕댕미식회에서 입맛 까다로운 미식견을 위해 엄선한 한 끼', url: 'https://smartstore.naver.com/gourmet_8733', tags: [] },
  { id: '337', name: '라떼온', description: '오후의 티타임에 라떼온과 함께 즐기는 강아지 시리얼', url: 'https://smartstore.naver.com/latte_on', tags: [] },
  { id: '338', name: '슈퍼멍멍', description: '슈퍼파워 솟아나는 슈퍼멍멍의 고단백 에너지 충전 간식', url: 'https://smartstore.naver.com/supermungmung', tags: [] },
  { id: '339', name: '메이드알콩', description: '알콩달콩 정성을 다해 메이드알콩이 쪄낸 단호박 오리 말이', url: 'https://smartstore.naver.com/madercong', tags: [] },
  { id: '340', name: '멍뭉식탁', description: '우리 집 식탁에 같이 올리고 싶은 멍뭉식탁의 정갈한 반찬', url: 'https://smartstore.naver.com/mmst0104', tags: [] },
  { id: '341', name: '블루피펫푸드', description: '블루피펫푸드의 무색소, 무향료로 꽉 채운 클린 잇 간식', url: 'https://smartstore.naver.com/floofy0701', tags: [] },
  { id: '342', name: '퍼피니스', description: '해피니스 가득한 퍼피니스의 알록달록 무지개 마카롱 세트', url: 'https://smartstore.naver.com/puppiness', tags: [] },
  { id: '343', name: '몽드날드', description: '햄버거만큼 맛있고 감자튀김만큼 중독적인 몽드날드 펫푸드', url: 'https://smartstore.naver.com/mongdonald', tags: [] },
  { id: '344', name: '꼬리부엌', description: '꼬리가 헬리콥터처럼 돌아가는 마법의 꼬리부엌 시그니처 메뉴', url: 'https://smartstore.naver.com/kkori_kitchen', tags: [] },
];
