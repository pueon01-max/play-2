/* Case Study Signature kit for the portfolio: the case study's own data (data.js) and stylesheet, unchanged except image paths and the :root/body hooks. */
window.CASE_KIT=(()=>{/* Shared case data for Kit A and Kit B */
const THEMES = {
  compose: { "a-bg":"#ffd23a","a-bg2":"#ffe9a3","a-ink":"#1d1608","a-mute":"#5c4a12","a-line":"rgba(29,22,8,.16)","a-card":"#ffe27a","a-hi":"#7a4f00",
    "b-bg":"#fbf6e9","b-ink":"#1d1608","b-mute":"#7a6c52","b-line":"#eadfc4","b-card":"#ffffff","b-before":"#2b241a","b-after":"#f3e7c4","b-hi":"#a06e00",
    "mark":"#1d1608","glow":"rgba(255,196,40,.6)","sol-bg":"#1d1608","sol-ink":"#fbf2d7","sol-hi":"#ffd23a" },
  guess: { "a-bg":"#1f3a72","a-bg2":"#3a5ea8","a-ink":"#f3f6fc","a-mute":"#b2c0df","a-line":"rgba(243,246,252,.18)","a-card":"#28478a","a-hi":"#a9c6ff",
    "b-bg":"#f3f4f7","b-ink":"#12204a","b-mute":"#636c8a","b-line":"#dde1ea","b-card":"#ffffff","b-before":"#1b1e27","b-after":"#e3e8f2","b-hi":"#2f55c8",
    "mark":"#2f55c8","glow":"rgba(80,130,255,.45)","sol-bg":"#12204a","sol-ink":"#eef2fb","sol-hi":"#a9c6ff" },
  "luckin-web": { "a-bg":"#2348e8","a-bg2":"#4a6dff","a-ink":"#ffffff","a-mute":"#c9d3ff","a-line":"rgba(255,255,255,.22)","a-card":"#1c3cd0","a-hi":"#cfe6ff",
    "b-bg":"#f5f7ff","b-ink":"#0d1b5c","b-mute":"#5f6a99","b-line":"#dfe4f7","b-card":"#ffffff","b-before":"#20232c","b-after":"#e3e9ff","b-hi":"#2348e8",
    "mark":"#2348e8","glow":"rgba(35,72,232,.45)","sol-bg":"#0d1b5c","sol-ink":"#eef2ff","sol-hi":"#9db6ff" },
  "luckin-campaign": { "a-bg":"#06070b","a-bg2":"#16245e","a-ink":"#f4f6ff","a-mute":"#8e95ab","a-line":"rgba(120,150,255,.2)","a-card":"#0e1222","a-hi":"#5d86ff",
    "b-bg":"#eef1fb","b-ink":"#0a0f24","b-mute":"#5d6585","b-line":"#d9def0","b-card":"#ffffff","b-before":"#0b0d14","b-after":"#dde5ff","b-hi":"#2f5bff",
    "mark":"#2f5bff","glow":"rgba(47,91,255,.55)","sol-bg":"#0a0f24","sol-ink":"#eef1ff","sol-hi":"#7fa0ff" },
  additable: { "a-bg":"#dce8f7","a-bg2":"#ffffff","a-ink":"#233047","a-mute":"#57677f","a-line":"rgba(35,48,71,.14)","a-card":"#eaf2fc","a-hi":"#2f6fd6",
    "b-bg":"#f4f7fb","b-ink":"#1d2638","b-mute":"#5e6b80","b-line":"#dde4ee","b-card":"#ffffff","b-before":"#2c3a52","b-after":"#dfe9f6","b-hi":"#2f6fd6",
    "mark":"#3d8bff","glow":"rgba(110,170,255,.5)","sol-bg":"#233047","sol-ink":"#eef4fc","sol-hi":"#9fd0ff" }
};

const CASES = {
  compose: {
    tab: "Compose",
    meta: ["Mobile App Redesign", "Compose Coffee", "Case 01"],
    titleLines: ["Order,", "first."],
    hero: { kind: "cutout", src: "img/compose-hand.png", logo: "img/compose-logo.png", alt: "손에 든 폰 속 리디자인한 컴포즈커피 앱 메인 화면" },
    statement: "앱을 여는 이유는 단 하나, <strong>주문</strong>이다.",
    overview: "컴포즈커피 앱은 설치 후 한 달 안에 4명 중 3명이 떠난다. 그런데 현재 UI에 대한 반응은 나쁘지 않았다. 그래서 문제를 디자인이 아니라 주문까지의 거리로 보고, 메인 화면을 주문 중심으로 다시 짰다.",
    facts: [["Role", null], ["Period", null], ["Team", null], ["Tools", "Figma"]],
    context: {
      sub: "사용자 이용통계",
      big: { label: "1개월 이탈률", value: "75.2", unit: "%", note: "이탈 기간 1개월 기준", chip: "2025.08" },
      compare: [["컴포즈커피", 75.2, false], ["스타벅스", 30.3, true]],
      stats: [["49.0", "%", "사용자 중 직장인"], ["44.8", "%", "사용자 중 초등학생 부모"], ["80", "%", "현재 UI에 대한 긍정 반응 · 자체 설문"]],
      source: "IGAWorks Marketing Cloud, 2025.08 안드로이드 기준 · 만족도는 자체 설문",
      diagnosis: { vis: { kind: "phone", src: "img/case/compose-before.webp", alt: "기존 컴포즈커피 앱 메인 화면" }, pts: [[44, 88], [50, 52], [88, 92]],
        title: "기존 앱 진단",
        issues: [
          ["하단 탭에 묻힌 주문 버튼", "핵심 행동인 주문 버튼이 하단 탭바에 묻혀 한눈에 들어오지 않는다."],
          ["화면 중앙을 차지한 스탬프", "주문과 무관한 스탬프 10칸이 화면 중앙을 차지해 시선이 분산된다."],
          ["연한 회색 하단 아이콘", "하단 메뉴 아이콘 색이 연해 활력이 없고 한눈에 구분되지 않는다."]
        ] },
      insight: "UI는 괜찮았다.<br>문제는 <em>주문까지의 거리</em>라고 봤다.",
      insightNote: "바쁜 직장인과 학부모에게 필요한 건 새로운 기능보다 빠르고 확실한 주문."
    },
    process: [
      ["Discover", "사용자 이용통계로 누가 쓰는지, 얼마나 떠나는지 확인하고 앱오더 사용자 설문을 진행했다."],
      ["Define", "만족도는 높은데 이탈은 높다. 문제를 ‘주문까지의 거리’로 정의했다."],
      ["Benchmark", "더벤티와 투썸플레이스 앱에서 주문 동선과 하단 메뉴 구성을 비교했다."],
      ["Design", "메인 화면을 주문 중심으로 재배치하는 세 가지 결정을 내렸다."]
    ],
    decisions: [
      { tag: "Decision 01", title: "주문 버튼을 첫눈에 보이는 곳으로",
        body: "주문은 이 앱의 가장 중요한 행동인데, 기존에는 하단 탭바에 다른 메뉴와 나란히 놓여 있었다.",
        visual: { kind: "phones", before: { src: "img/case/compose-before.webp", mark: { type: "ring", x: 50, y: 87.5, size: 26 } },
          after: [{ src: "img/case/hq-c-home.webp", mark: { type: "ring", x: 82.5, y: 53.5, size: 38 } }] },
        problem: "핵심 행동인 주문 버튼이 하단 탭바에 묻혀 한눈에 들어오지 않는다.",
        evidence: "주 사용자는 시간이 부족한 직장인과 학부모. 더벤티는 메인 화면에 오더 버튼을 둬 주문 단계를 줄였다.",
        evidenceImg: ["img/case/bench-venti.webp", "벤치마킹 · 더벤티", "메인 화면 오더 버튼"],
        solution: "주문 버튼을 화면 위쪽에 <strong>가장 크게</strong> 두고, 입체 아이콘으로 먼저 보이게 했다." },
      { tag: "Decision 02", title: "스탬프 대신 늘 마시던 메뉴를",
        body: "화면 한가운데를 차지하던 스탬프 10칸은 주문과 상관없는 정보였다.",
        visual: { kind: "phones", before: { src: "img/case/compose-before.webp", mark: { type: "box", x: 3.5, y: 43, w: 93, h: 33 } },
          after: [{ src: "img/case/hq-c-home.webp", mark: { type: "box", x: 3.5, y: 55, w: 93, h: 32 } }] },
        problem: "주문과 무관한 스탬프 영역이 화면 중앙을 차지해 시선이 분산된다.",
        evidence: "앱을 여는 목적은 주문이다. 투썸플레이스는 필요한 기능만 배치해 가독성을 높였다.",
        evidenceImg: ["img/case/bench-twosome.webp", "벤치마킹 · 투썸플레이스", "필요한 기능만 배치한 메인"],
        solution: "스탬프는 한 줄 요약(1/10)으로 줄이고, 그 자리에 <strong>‘늘 마시던 걸로’</strong> 바로 주문을 넣었다." },
      { tag: "Decision 03", title: "회색 아이콘에 브랜드 컬러를",
        body: "하단 메뉴는 매번 보는 영역인데, 연한 회색 아이콘이라 구분이 어렵고 브랜드도 드러나지 않았다.",
        visual: { kind: "strips", before: ["img/case/compose-nav-before.webp"], after: ["img/case/compose-nav-after.webp"] },
        problem: "하단 메뉴 아이콘 색이 연해 활력이 없고 한눈에 구분되지 않는다.",
        evidence: "투썸플레이스는 브랜드 아이덴티티를 살린 하단 메뉴로 가독성과 브랜드 인지를 함께 잡았다.",
        solution: "아이콘에 컴포즈 옐로를 입히고, 자주 쓰는 <strong>멤버십(바코드)</strong>을 탭에 올렸다." }
    ],
    compare: { kind: "phone", title: "직접 밀어서<br>비교해보기", note: "같은 메인 화면, 같은 해상도. 손잡이를 움직이면 기존 화면과 리디자인 화면이 겹쳐 보인다.", before: "img/case/compose-before.webp", after: "img/case/hq-c-home.webp" },
    reflection: {
      quote: "불편을 찾기보다,<br><em>목적</em>을 봤다.",
      learnings: [
        ["What I learned", "우리 시각에서 불편해 보였던 부분이 실제 사용자에게는 크게 불편하지 않았다. 그래서 불편을 억지로 찾기보다 앱의 목적을 먼저 고려하게 됐다."],
        ["Next", null]
      ]
    }
  },

  guess: {
    tab: "GUESS",
    meta: ["UX/UI App Redesign", "GUESS Korea", "Case 02"],
    titleLines: ["Denim,", "archived."],
    hero: { kind: "phone", src: "img/case/hq-g-main.webp", alt: "리디자인한 GUESS Korea 앱 아카이브 피드 홈" },
    statement: "쇼핑몰이 아닌, <strong>데님 핏</strong>을 발견하고 저장하는 브랜드 앱.",
    overview: "게스는 역삼각형 로고와 독보적인 핏으로 사랑받아 온 데님 브랜드다. 하지만 지금의 게스 앱은 프로모션 배너 중심이라 브랜드가 지향하는 프리미엄 이미지를 전하지 못하고, 온라인 구매의 고질적 한계인 ‘기장과 핏’에 대한 경험도 비어 있었다. 후르츠 패밀리의 미니멀한 감도와 유니클로의 직관적인 정보 체계를 결합해, 핏 가이드를 중심으로 브랜드 경험을 넓히는 앱을 목표로 했다.",
    facts: [["Role", null], ["Period", null], ["Team", null], ["Tools", "Figma"]],
    context: {
      diagnosis: { vis: { kind: "phone", src: "img/case/guess-before.webp", alt: "기존 GUESS Korea 앱 메인 화면" }, pts: [[60, 42], [18, 14], [50, 92]],
        title: "현재 앱 진단",
        issues: [
          ["과도한 배너 비중", "메인 화면의 프로모션 배너가 너무 커서, 어떤 상품이 있는지 보기도 전에 광고에 피로감을 느낀다."],
          ["위계 질서 부재", "로고, 배너, 카테고리가 모두 똑같이 자기주장을 해서 어디를 먼저 봐야 할지 모른다."],
          ["하단 바의 존재감", "하단 내비게이션이 아이콘과 텍스트로 꽉 차 상품 하단부를 가리고, 검은 모바일용 내비게이션은 용도가 불분명하다."]
        ] },
      reframe: { before: ["초기 포지셔닝", "빠른 탐색 → 빠른 구매", "패스트패션형 쇼핑 흐름 · ZARA · H&M · UNIQLO"],
                 after: ["재정의된 방향", "브랜드 경험 → 핏 탐색 → 저장 → 구매", "데님 아카이브 기반 브랜드 앱 · Levi’s · Polo Ralph Lauren"] },
      table: { head: ["항목", "현재 GUESS 앱", "벤치마크에서 확인한 방향"],
        rows: [["앱의 역할", "상품 나열 · 구매 처리", "브랜드 경험을 전달하는 탐색 공간"], ["첫 인상", "프로모션 배너 중심", "캠페인 비주얼 · 스토리 중심"], ["고객 관계", "거래 중심", "멤버십 · 충성 고객 관리 중심"], ["제품 정보", "옵션 · 가격 중심", "핏 · 스타일링 가이드 포함"]] },
      source: "공식 사이트 및 벤치마크 구조 비교를 바탕으로 정리한 포지셔닝 판단",
      insight: "한계는 디자인이 아니라<br><em>쇼핑몰 구조</em>에 있었다.",
      insightNote: "경쟁사 기준을 다시 세워 보니, 기존 GUESS Korea 앱은 브랜드 앱이 아니라 쇼핑몰 구조에 머물러 있었다."
    },
    process: [
      ["Diagnose", "현재 앱의 배너 비중, 정보 위계, 하단 바를 진단했다."],
      ["Reposition", "경쟁사를 ZARA·H&M·UNIQLO에서 Levi’s·Polo Ralph Lauren으로 다시 세우고 포지셔닝을 재정의했다."],
      ["Structure", "IA와 유저 저니를 설계하고 와이어플로우로 발견부터 결제까지의 흐름을 검증했다."],
      ["Design", "런처 아이콘, 스플래시, 아카이브 피드 홈, 핏 아카이브, 결제까지 시안을 완성했다."]
    ],
    flow: { title: "쇼핑보다 먼저, 스타일과 핏을 발견하는 흐름",
      steps: [["발견", "Archive Feed", "오늘의 아카이브와 큐레이션 콘텐츠로 스타일과 핏을 발견한다."], ["탐색", "Fit Archive", "데님 핏 아카이브에서 다양한 핏과 스타일을 비교한다."], ["분석", "Fit Scan", "Fit Scan으로 체형을 분석하고 나에게 맞는 핏을 추천받는다."], ["저장", "My Archive", "마음에 드는 핏과 상품을 My Denim Archive에 저장한다."], ["구매", "Payment", "저장한 상품을 확인하고 간편하게 결제한다."]] },
    decisions: [
      { tag: "Decision 01", title: "배너 대신 캠페인 비주얼로 시작하는 홈",
        body: "앱에 들어오는 순간부터 GUESS의 감성과 세계관을 전달하도록, 홈을 아카이브 피드로 바꿨다.",
        visual: { kind: "phones", before: { src: "img/case/guess-before.webp" }, after: [{ src: "img/case/hq-g-main.webp" }] },
        problem: "큰 프로모션 배너가 화면을 차지해, 브랜드가 지향하는 프리미엄 이미지가 전달되지 않는다.",
        evidence: "벤치마킹한 앱들은 메인 화보를 꽉 채우지 않고 라운드 값을 크게 준 카드로 띄워, 배너가 아닌 콘텐츠로 활용했다.",
        solution: "캠페인 배너, <strong>퀵 카테고리</strong>, 데님 에디트로 이어지는 아카이브 피드 홈. 이미지만 보고도 원하는 카테고리로 바로 이동한다." },
      { tag: "Decision 02", title: "상품 나열 대신, 핏으로 분류한 데님 아카이브",
        body: "슬림 · 스트레이트 · 와이드 · 부츠컷 · 루즈. 상품을 핏 기준으로 묶어, 목적에 따라 탐색하는 리스트 기반의 아카이브를 만들었다.",
        visual: { kind: "web", plain: true, before: null, after: [{ src: "img/case/guess-archive-list.webp" }] },
        problem: "기존 앱의 제품 정보는 옵션과 가격 중심이라, 수많은 데님 중 나에게 맞는 핏을 비교하기 어렵다.",
        evidence: "벤치마크한 브랜드들은 옵션과 가격만이 아니라 핏과 스타일링 가이드를 제품 정보에 함께 담고 있었다.",
        solution: "<strong>데님 핏 아카이브</strong>. 핏별로 비교하는 리스트에 실루엣, 특징, 추천 체형 정보를 함께 보여주고, 저장 버튼과 큐레이션으로 아카이브를 쌓은 뒤 구매로 이어지게 했다." },
      { tag: "Decision 03", title: "온라인 구매의 불안, 핏을 먼저 보여준다",
        body: "게스의 핵심 카테고리인 데님을 구매 전에 충분히 이해하도록 핏 정보를 앞에 놓았다.",
        visual: { kind: "phones", before: null, after: [{ src: "img/case/hq-g-archive.webp" }, { src: "img/case/hq-g-fitscan.webp" }, { src: "img/case/hq-g-detail.webp" }] },
        problem: "온라인에서 데님을 살 때 기장과 핏을 확신할 수 없어 구매를 망설이게 된다.",
        evidence: "벤치마킹한 브랜드들은 미니멀한 UI와 AI를 활용한 가상 피팅으로 구매 확신을 주고 있었다.",
        solution: "핏을 비교하는 <strong>데님 핏 아카이브</strong>, 전신을 스캔하는 Fit Scan, 기장(Inseam)에 맞춘 Perfect Fit 추천을 상품 상세까지 연결했다." },
      { tag: "Decision 03", title: "한 번 사고 끝나는 거래 대신, 쌓이는 아카이브",
        body: "일회성 구매가 아니라 브랜드 팬을 만드는 구조를 마이페이지에 담았다.",
        visual: { kind: "phones", before: null, after: [{ src: "img/case/hq-g-mypage.webp" }] },
        problem: "기존 앱의 고객 관계는 거래 중심이라, 구매 이후 다시 찾아올 이유가 약하다.",
        evidence: "재설정한 벤치마크인 Levi’s와 Polo Ralph Lauren은 멤버십과 충성 고객 관리를 중심에 둔다.",
        solution: "핏 프로필, <strong>GUESS Archive Pass</strong> 멤버십, 저장 아카이브를 한곳에 모아 구매 이후에도 이어지는 경험을 만들었다." },
      { tag: "Decision 04", title: "하단 내비게이션은 다섯 개만",
        body: "꽉 차 있던 하단 바를 핵심 기능만 남겨 정리하고, 나머지는 드로어 메뉴로 옮겼다.",
        visual: { kind: "strips", before: ["img/case/guess-nav-before.webp"], after: ["img/case/guess-nav-after.webp"] },
        problem: "하단 내비게이션이 아이콘과 텍스트로 꽉 차 있고, 그 아래 검은 내비게이션은 용도가 불분명하다.",
        evidence: "이 앱의 핵심 여정은 핏 탐색, 저장, 마이 아카이브로 빠르게 오가는 것이다.",
        solution: "홈 · 검색 · 저장 · <strong>핏스캔</strong> · 마이페이지만 남기고, 캠페인과 핏 카테고리는 드로어 메뉴에서 접근하게 했다." }
    ],
    compare: { kind: "phone", title: "배너에서<br>아카이브로", note: "같은 메인 화면을 겹쳐 보면, 화면을 덮던 배너가 캠페인 카드와 퀵 카테고리로 바뀐 것이 보인다.", before: "img/case/guess-before.webp", after: "img/case/hq-g-main.webp" },
    reflection: {
      quote: "쇼핑앱이 아닌,<br><em>핏을 발견하는</em> 앱으로.",
      learnings: [
        ["What I learned", "처음에는 빠른 구매 중심의 패스트패션 앱으로 접근했다. 경쟁사 기준을 다시 세우면서, 게스에 필요한 건 속도가 아니라 브랜드 경험과 핏 확신이라는 걸 알게 됐다."],
        ["Expected · 기대 효과", "구매 확신 향상, 재방문 유도, 차별화된 앱 경험. 개인화된 데님 경험으로 전환율과 고객 충성도가 높아지기를 기대한다."]
      ]
    }
  },

  "luckin-web": {
    tab: "Luckin Web",
    meta: ["Website Redesign", "Luckin Coffee", "Case 03"],
    titleLines: ["Invisible tech,", "visible art."],
    hero: { kind: "web", src: "img/case/hq-lkweb-hero.webp", alt: "리디자인한 루이싱 커피 웹사이트 메인 히어로" },
    statement: "기술은 보이지 않게, <strong>아름다움</strong>은 눈에 띄게.",
    overview: "루이싱은 키오스크 없는 100% 앱 주문과 AI 기반 물류로 성장한 테크 기업이다. 그런데 웹사이트(lkcoffee.com)는 2010년대 스타일의 레이아웃과 빽빽한 줄글로 그 기술력을 전혀 보여주지 못했다. 강점인 ‘테크’는 살리고 약점인 ‘디자인 감성’을 보완해, 똑똑한데 아름답기까지 한 프리미엄 테크 브랜드로 리포지셔닝했다.",
    facts: [["Role", null], ["Period", null], ["Team", null], ["Tools", "Figma"]],
    context: {
      sub: "루이싱 커피의 현재",
      big: { label: "중국 내 매장 수", value: "30,000", unit: "+", note: "탄생 7년 만에 중국 내 스타벅스를 넘어 점유율 1위", chip: "Retail Tech" },
      stats: [["100", "%", "키오스크 없는 앱 주문 시스템"], ["1:1", "", "구매 패턴을 분석한 맞춤 큐레이션과 쿠폰"], ["2030", "", "타깃 · 한국과 중국의 직장인과 학생"]],
      source: "기획안 시장 분석 기준",
      diagnosis: { vis: { kind: "web", src: "img/case/lkweb-before.webp", alt: "기존 루이싱 커피 웹사이트" }, pts: [[30, 28], [32, 84], [86, 30]],
        title: "기존 웹사이트 진단",
        issues: [
          ["형식의 노후화", "2010년대 초반 스타일의 바둑판식 나열과 고정된 레이아웃, 저화질 이미지."],
          ["기술력의 텍스트화", "최고의 테크 기업인데, 이를 인포그래픽이 아닌 빽빽한 줄글로 보여줘 읽고 싶지 않다."],
          ["정보의 파편화", "브랜드 철학, 기술력, 투자자 정보가 유기적으로 연결되지 않는다."]
        ] },
      table: { head: ["SWOT", "내용"],
        rows: [["Strength", "스타벅스를 능가한 3만 개 매장의 빅데이터, 효율적인 테크 기업"], ["Weakness", "기술력을 담지 못하는 투박한 UI, 테이크아웃 전문점이라 브랜드 경험 부재, 웹상 정보 분산"], ["Opportunity", "글로벌 확장기에 따른 브랜드 이미지 재정립, 미니멀한 테크 디자인 선호 급증"], ["Threat", "경쟁사 대비 낮은 디지털 미감, 복잡한 투자 정보로 인한 기업가치 저평가 우려"]] },
      insight: "최고의 테크 기업인데,<br>웹사이트는 <em>2010년대</em>에 머물러 있었다.",
      insightNote: "타깃은 합리적인 가격으로 프리미엄 브랜드 경험을 갖고 싶은 한국과 중국의 2030 직장인과 학생."
    },
    process: [
      ["Analyze", "기존 웹사이트와 시장 현황을 분석해 문제를 세 가지로 정리했다."],
      ["Benchmark", "스타벅스, 아라비카, 컴포즈 웹사이트에서 일관된 브랜드 컬러와 고감도 비주얼이라는 공통점을 찾았다."],
      ["Position", "SWOT과 STP로 ‘The Invisible Tech, The Visible Art’ 포지셔닝을 정했다."],
      ["Design", "메인 히어로, About Us, 앱 전환 영역을 다시 설계했다."]
    ],
    decisions: [
      { tag: "Decision 01", title: "바둑판식 나열 대신, 한 잔의 확신",
        body: "메인 히어로에서 데이터 기반 원두 선정과 우승 레시피를 강조해 ‘이 커피는 힙하고 맛있다’는 시각적 확신을 주도록 했다.",
        visual: { kind: "web", before: { src: "img/case/lkweb-before.webp" }, after: [{ src: "img/case/hq-lkweb-hero.webp" }] },
        problem: "고정된 레이아웃과 저화질 이미지가 첨단 테크 브랜드라는 정체성을 대변하지 못한다.",
        evidence: "스타벅스, 아라비카, 컴포즈는 커피의 질감과 매장 같은 고해상도 이미지·영상 중심으로, 설명 없이 브랜드를 인지시킨다.",
        evidenceImg: ["img/case/lkweb-bench.webp", "벤치마킹 · 경쟁사 웹사이트", "고감도 비주얼과 일관된 컬러"],
        solution: "‘Everywhere You Are, Reliable as Always’ 카피와 큰 제품 비주얼로 히어로를 채우고, <strong>루이싱 블루</strong>를 사이트 전체 톤으로 가져갔다." },
      { tag: "Decision 02", title: "빽빽한 텍스트 대신 스크롤 스토리텔링",
        body: "About Us의 빽빽한 텍스트를 스크롤 스토리텔링으로 바꾸고, 기술력은 깔끔한 이미지 카드로 보여줬다.",
        visual: { kind: "web", before: { src: "img/case/lkweb-before-about.webp" }, after: [{ src: "img/case/hq-lkweb-quality.webp" }] },
        problem: "브랜드 철학과 기술력이 긴 줄글로만 설명되어 있어 읽고 싶지 않다.",
        evidence: "스타벅스 리저브는 잡지 같은 스토리텔링으로, 애플은 스크롤에 따라 하나씩 보여주는 방식으로 신뢰감을 만든다.",
        solution: "아라비카 원두, WBC 챔피언 블렌딩, 갓 볶은 원두를 <strong>세 장의 카드</strong>로 나눠 스크롤하며 하나씩 읽히게 했다." },
      { tag: "Decision 03", title: "테이크아웃 브랜드답게, 웹에서 앱으로",
        body: "매장에 머무는 경험이 없는 테이크아웃 전문점이라는 약점을, 웹에서 앱 주문으로 이어지는 흐름으로 바꿨다.",
        visual: { kind: "web", before: null, after: [{ src: "img/case/hq-lkweb-nearby.webp" }, { src: "img/case/hq-lkweb-easy.webp" }] },
        problem: "웹 방문자가 루이싱의 핵심 경험인 앱 주문으로 이어지는 연결이 없다.",
        evidence: "한국과 중국 유저 모두 루이싱에서 원하는 건 앱 주문, 빠른 픽업, 개인화 쿠폰이라는 편리함이다.",
        solution: "‘Find Nearby Luckin Coffee’와 <strong>Download App</strong>, ‘We are easy and fast’로 웹 방문을 앱 주문으로 연결했다." }
    ],
    compare: { kind: "web", title: "2010년대에서<br>지금으로", note: "같은 첫 화면을 겹쳐 보면, 투자 정보 중심의 페이지가 제품과 브랜드 중심의 히어로로 바뀐 것이 보인다.", before: "img/case/lkweb-before.webp", after: "img/case/hq-lkweb-hero.webp" },
    reflection: {
      quote: "저가 브랜드에서,<br><em>가장 진보된 테크 브랜드</em>로.",
      learnings: [
        ["Expected · 기대 효과", "이미지 쇄신, 투명한 정보 제공을 통한 투자 가치 상승, 세련된 정보 구조로 웹 방문자의 앱 다운로드율 증가를 기대한다."],
        ["What I learned", null]
      ]
    }
  },

  "luckin-campaign": {
    tab: "Luckin Campaign",
    meta: ["Global Campaign · Promotion Web", "Luckin Coffee", "Case 04"],
    titleLines: ["Brew", "your luck."],
    hero: { kind: "image", src: "img/case/hq-k-hero.webp", alt: "You're missing your luck QR 포스터 키비주얼" },
    statement: "<strong>You’re missing your luck.</strong> 놓칠까 봐 찍게 되는 QR 캠페인.",
    overview: "BREW YOUR LUCK은 글로벌 MZ 소비자가 오프라인 QR 포스터로 모바일 웹에 들어와, 커피가 퍼지는 인터랙션으로 랜덤 리워드를 확인하고, 루이싱 앱 다운로드까지 자연스럽게 이어지도록 설계한 QR 기반 인터랙티브 프로모션이다.",
    facts: [["Role", null], ["Period", null], ["Team", null], ["Tools", "Figma"]],
    context: {
      sub: "루이싱 커피의 시장 상황",
      big: { label: "루이싱 매장 수", value: "31,048", unit: "", note: "중국 로컬 브랜드를 넘어 글로벌 커피 브랜드로 성장 중", chip: "Global Expansion" },
      stats: [["2025", "", "7월 뉴욕에 첫 미국 매장 2곳 오픈"], ["≈ 50", "%", "주 1회 이상 QR을 스캔하는 Gen Z와 밀레니얼"], ["88", "%", "QR에 대한 소비자 태도가 더 긍정적으로 변했다고 답한 마케터 (2025)"]],
      source: "기획안 리서치 기준 · Reuters, Mintel, QR 마케팅 자료",
      table: { head: ["현재 마케팅", "특징", "한계"],
        rows: [["앱 다운로드 할인", "첫 주문 · 신규 가입 혜택", "가격 중심 이미지가 강함"], ["쿠폰 · 바우처", "앱 접속 및 재구매 유도", "경쟁사도 쉽게 함"], ["빠른 픽업 · 주문", "편의성 강조", "브랜드 감정 각인은 약함"], ["협업 · 시즌 메뉴", "바이럴 가능성", "캠페인 경험으로 연결되지 않음"]] },
      insight: "혜택은 있지만,<br><em>기억되는 첫 경험</em>은 약하다.",
      insightNote: "글로벌 신규 소비자에게 루이싱은 아직 ‘왜 Luckin인가?’를 기억하게 할 첫 경험이 부족했다."
    },
    process: [
      ["Research", "시장 상황, 현재 마케팅 방식, 글로벌 MZ 소비자 인사이트를 조사했다."],
      ["Define", "‘혜택은 있지만 기억되는 첫 경험은 약하다’로 문제를 정의했다."],
      ["Concept", "Mystery, FOMO, Interaction, Reward, Conversion 다섯 축으로 BREW YOUR LUCK 컨셉을 만들었다."],
      ["Design", "QR 포스터, 리워드 인터랙션, 프로모션 웹사이트를 디자인했다."]
    ],
    flow: { title: "다섯 단계가 겹치지 않으면서 하나의 전환 흐름을 만든다",
      steps: [["Mystery", "QR 스캔 유도", "“뭐지?” 관심을 유발하는 첫 접점"], ["FOMO", "행동 압박", "“나만 놓치나?” 지금 참여하지 않으면 손해"], ["Interaction", "경험 몰입", "“재밌다!” 커피가 퍼지는 인터랙션으로 브랜드를 기억"], ["Reward", "실질 혜택", "“받았다!” 리워드로 만족과 보상"], ["Conversion", "앱 다운로드", "“써볼까?” 앱 설치로 지속적인 관계 형성"]] },
    decisions: [
      { tag: "Decision 01", title: "‘행운을 찾으세요’가 아니라 ‘행운을 놓치고 있어요’",
        body: "사람을 QR 앞에 멈추게 하는 감정은 행운을 얻고 싶은 마음보다, 혹시 나만 놓치고 있는 게 있나 하는 마음이라고 봤다.",
        visual: { kind: "web", before: null, plain: true, after: [{ src: "img/case/camp-posters.webp" }] },
        problem: "앱 다운로드 할인과 쿠폰은 강한 전환 장치지만, 가격 중심 이미지가 강하고 경쟁사도 쉽게 따라 한다.",
        evidence: "MZ는 단순 광고보다 참여형 경험에 반응하고, QR은 더 이상 낯선 기술이 아니다.",
        solution: "뻔한 ‘Looking for your luck?’ 대신 <strong>‘You’re missing your luck.’</strong>과 ‘Scan before someone else claims it’으로 FOMO를 건드렸다." },
      { tag: "Decision 02", title: "스캔에서 앱까지 끊기지 않는 네 단계",
        body: "QR을 찍는 순간부터 루이싱이라는 이름을 기억하고, 앱에서 혜택을 경험하도록 흐름을 설계했다.",
        visual: { kind: "web", before: null, plain: true, after: [{ src: "img/case/camp-flow.webp" }] },
        problem: "‘앱 다운받으면 할인’만으로는 브랜드 첫인상을 강하게 남기지 못한다.",
        evidence: "2025년 경험 마케팅은 메시지 전달보다 놀이, 몰입, 세계관 구축으로 소비자 경험을 강화하는 방향으로 움직인다.",
        solution: "<strong>Scan → Brew → Reveal → Claim</strong>. 커피가 퍼지는 연출로 랜덤 리워드를 공개하고, 리워드는 루이싱 앱에서 받도록 했다." },
      { tag: "Decision 03", title: "도시마다 행운을 찾게 하는 프로모션 웹",
        body: "QR로 들어온 사람이 루이싱의 글로벌 확장을 한눈에 보도록, 도시별 매장을 카드로 탐색하는 프로모션 웹사이트를 만들었다.",
        visual: { kind: "web", before: null, after: [{ src: "img/case/hq-camp-web-hero.webp" }, { src: "img/case/hq-camp-web-city.webp" }] },
        problem: "기존 웹사이트에는 프로모션 기능이 없고 투자 정보와 회사 정보만 나열되어 있다.",
        evidence: "루이싱은 2025년 뉴욕에 진출하며 중국 로컬을 넘어 글로벌 브랜드로 확장하고 있다.",
        solution: "‘Brewing Luck Around the World’ 지도와 중국 · 싱가포르 · 뉴욕 · 서울 <strong>도시 카드</strong>. 마우스를 올리면 카드가 떠오르고, 드래그하면 뒤집힌다." }
    ],
    compare: null,
    reflection: {
      quote: "쿠폰을 뿌리는 브랜드에서,<br><em>행운을 발견하게 하는</em> 브랜드로.",
      learnings: [
        ["Target · 목표 수치", "앱 다운로드 +25%, QR 참여율 +30%, 브랜드 인지도와 호감도 향상. KPI 예시는 QR 스캔 100,000회, 웹 완료율 60%, 앱 설치 전환 25%, 리워드 수령 40%, 첫 주문 전환 30–40%."],
        ["What I learned", null]
      ]
    }
  },

  additable: {
    tab: "additable",
    meta: ["Pamphlet Redesign", "additable", "Case 05"],
    titleLines: ["Beyond sight,", "into sense."],
    hero: { kind: "image", src: "img/case/hq-a-object.webp", alt: "additable 리브드 글라스 조명 오브제" },
    statement: "시각을 넘어, <strong>감각</strong>을 경험하도록.",
    overview: "additable은 3D 프린팅으로 새로운 조형의 조명 오브제를 만드는 브랜드다. 기존 팜플렛은 제품 위주의 따뜻한 무드라, 브랜드가 가진 감각적인 조형과 기술이 드러나지 않았다. 브랜드 소개를 더하고 무드를 modern cool로 바꿔, 오브제를 보는 것을 넘어 감각으로 느끼게 하는 팜플렛으로 다시 만들었다.",
    facts: [["Role", null], ["Period", null], ["Team", null], ["Tools", null]],
    context: {
      diagnosis: { vis: { kind: "image", src: "img/case/hq-a-old.webp", alt: "기존 additable 팜플렛" }, pts: [[22, 40], [72, 86]], title: "기존 팜플렛", issues: [
        ["제품 위주의 구성", "제품 사진과 스펙이 중심이라 브랜드가 어떤 회사인지 소개되지 않는다."],
        ["warm & cozy 무드", "무드등이라는 제품 특성만 고려한 따뜻한 톤이라, 3D 프린팅 오브제의 감각적인 조형이 묻힌다."]
      ] },
      shifts: [["무드", "warm & cozy", "modern cool"], ["구성", "제품 위주", "브랜드 소개 + 제품"], ["강조", "무드등의 따뜻함", "3D 프린팅 조형과 기술"]],
      insight: "따뜻한 조명이 아니라,<br><em>새로운 조형</em>을 보여줘야 했다.",
      insightNote: "제품 위주의 따뜻한 느낌에서, 감각적인 오브제를 3D 프린팅하는 브랜드의 특성을 더하는 방향으로 바꿨다."
    },
    process: [
      ["Audit", "기존 팜플렛의 제품 위주 구성과 warm & cozy 무드를 분석했다."],
      ["Direction", "modern cool 무드와 브랜드 소개를 더하는 방향을 정했다."],
      ["Cover", "리브드 글라스 질감 너머의 조명을 형상화해 표지를 만들었다."],
      ["Layout", "다양한 공간에 놓인 제품으로 활용도를 보여주는 내지를 구성했다."]
    ],
    decisions: [
      { tag: "Decision 01", title: "따뜻한 무드에서 차가운 감각으로",
        body: "기존 팜플렛의 warm & cozy를 modern cool로 바꿔, 조명보다 오브제의 조형이 먼저 보이게 했다.",
        visual: { kind: "web", plain: true, before: { src: "img/case/hq-a-old.webp" }, after: [{ src: "img/case/hq-a-cover.webp" }] },
        problem: "제품 위주의 따뜻한 무드라, 감각적인 오브제를 3D 프린팅하는 브랜드의 특성이 드러나지 않는다.",
        evidence: "additable의 차별점은 새로운 조형의 유니크한 오브제와 이를 만드는 3D 프린팅 기술이다.",
        solution: "딥 네이비와 아이스 블루의 <strong>modern cool</strong> 톤, 얇은 산세리프 로고로 오브제가 먼저 보이게 했다." },
      { tag: "Decision 02", title: "조명 대신 빛의 질감을 표지에",
        body: "리브드 글라스 특유의 질감을 넘어 나오는 빛을 그래픽으로 형상화하고, 브랜드 철학을 타이틀에 배치했다.",
        visual: { kind: "web", plain: true, before: null, after: [{ src: "img/case/hq-a-spread.webp" }] },
        problem: "제품 사진만으로는 브랜드 스토리와 차별화된 기술이 전달되지 않는다.",
        evidence: "리브드 글라스를 통과해 번지는 빛이 additable 제품의 가장 큰 특징이다.",
        solution: "빛을 형상화한 그래픽과 <strong>브랜드 철학 타이틀</strong>로 브랜드 스토리와 기술을 함께 보여줬다." },
      { tag: "Decision 03", title: "스튜디오샷을 줄이고, 놓인 공간을 보여주기",
        body: "제품에 집중할 수 있도록 제품 소개를 강조하고, 다양한 곳에 배치된 모습으로 활용도를 보여줬다.",
        visual: { kind: "web", plain: true, before: null, after: [{ src: "img/case/hq-a-inside.webp" }] },
        problem: "스튜디오샷이 강조될수록 오히려 제품에 집중하기 어려울 거라고 판단했다.",
        evidence: "브랜드의 차별화된 부분을 강조하려면 제품 소개가 중심이 되어야 한다.",
        solution: "제품 소개를 강조하고, <strong>다양한 공간에 배치된 제품</strong>으로 활용도를 소개했다." }
    ],
    compare: null,
    reflection: {
      quote: "보는 팜플렛에서,<br><em>느끼는</em> 팜플렛으로.",
      learnings: [["What I learned", null], ["Next", null]]
    }
  }
};
const ORDER = ["compose", "guess", "luckin-web", "luckin-campaign", "additable"];

/* Atmosphere per project: blurred colour fields instead of flat fills (tokens: atm-a / atm-b / glass). */
const ATM = {
  compose: { "atm-a":"radial-gradient(55% 45% at 50% 30%,rgba(255,210,58,.85),rgba(255,214,80,.35) 45%,transparent 72%),radial-gradient(40% 35% at 95% 85%,rgba(255,186,30,.35),transparent 70%),radial-gradient(35% 30% at 0% 70%,rgba(255,226,140,.45),transparent 70%),linear-gradient(180deg,#fffdf6,#fff4d2)",
    "atm-b":"radial-gradient(40% 30% at 100% 0%,rgba(255,210,58,.30),transparent 70%),radial-gradient(45% 35% at 0% 100%,rgba(255,200,60,.22),transparent 70%),#fbf8f0",
    "a-bg":"#fff6da","a-card":"rgba(255,255,255,.5)","a-glass":"rgba(255,255,255,.5)","a-gline":"rgba(255,255,255,.85)","b-glass":"rgba(255,255,255,.62)","b-gline":"rgba(255,255,255,.9)","b-after":"#fff2c8","grain":".14" },
  guess: { "atm-a":"radial-gradient(55% 50% at 15% 0%,rgba(92,135,230,.55),transparent 70%),radial-gradient(45% 45% at 95% 70%,rgba(56,100,200,.5),transparent 70%),repeating-linear-gradient(135deg,rgba(255,255,255,.025) 0 2px,transparent 2px 6px),linear-gradient(170deg,#132652,#1f3a72 55%,#223f7c)",
    "atm-b":"radial-gradient(40% 35% at 100% 0%,rgba(80,130,255,.18),transparent 70%),radial-gradient(45% 40% at 0% 100%,rgba(140,170,240,.22),transparent 70%),#f3f4f7",
    "a-glass":"rgba(255,255,255,.07)","a-gline":"rgba(255,255,255,.16)","b-glass":"rgba(255,255,255,.66)","b-gline":"rgba(255,255,255,.95)","grain":".12" },
  "luckin-web": { "atm-a":"radial-gradient(50% 50% at 75% 15%,rgba(120,150,255,.75),transparent 70%),radial-gradient(50% 45% at 5% 95%,rgba(10,30,170,.7),transparent 70%),radial-gradient(30% 30% at 40% 60%,rgba(170,200,255,.25),transparent 70%),#2348e8",
    "atm-b":"radial-gradient(40% 35% at 100% 0%,rgba(35,72,232,.16),transparent 70%),radial-gradient(45% 40% at 0% 100%,rgba(120,160,255,.22),transparent 70%),#f6f8ff",
    "a-glass":"rgba(255,255,255,.1)","a-gline":"rgba(255,255,255,.24)","b-glass":"rgba(255,255,255,.66)","b-gline":"rgba(255,255,255,.95)","grain":".12" },
  "luckin-campaign": { "atm-a":"radial-gradient(45% 40% at 50% 0%,rgba(47,91,255,.55),transparent 72%),radial-gradient(35% 35% at 100% 100%,rgba(40,70,220,.3),transparent 70%),radial-gradient(30% 30% at 0% 60%,rgba(90,60,255,.18),transparent 70%),#06070b",
    "atm-b":"radial-gradient(40% 35% at 100% 0%,rgba(47,91,255,.2),transparent 70%),radial-gradient(45% 40% at 0% 100%,rgba(130,150,255,.24),transparent 70%),#eef1fb",
    "a-glass":"rgba(140,165,255,.07)","a-gline":"rgba(140,165,255,.2)","b-glass":"rgba(255,255,255,.66)","b-gline":"rgba(255,255,255,.95)","grain":".16" },
  additable: { "atm-a":"radial-gradient(45% 40% at 20% 15%,rgba(255,255,255,.95),transparent 70%),radial-gradient(45% 45% at 85% 55%,rgba(150,195,250,.75),transparent 70%),radial-gradient(40% 35% at 30% 95%,rgba(185,215,250,.8),transparent 70%),linear-gradient(180deg,#e3edf9,#cfe0f5)",
    "atm-b":"radial-gradient(40% 35% at 100% 0%,rgba(140,190,255,.3),transparent 70%),radial-gradient(45% 40% at 0% 100%,rgba(190,220,255,.4),transparent 70%),#f4f7fb",
    "a-glass":"rgba(255,255,255,.45)","a-gline":"rgba(255,255,255,.85)","b-glass":"rgba(255,255,255,.6)","b-gline":"rgba(255,255,255,.95)","grain":".1" }
};


/* Real screens, in the order a user meets them. kind: phones | web. wide: an extra full-width board. */
const JOURNEY = {
  compose: { title: "홈에서 결제까지, <b>멈추지 않는</b> 주문 흐름", kind: "phones",
    items: [["img/case/hq-c-home.webp", "홈", "주문 버튼이 첫 화면에"], ["img/case/hq-c-store-list.webp", "매장 선택", "가까운 매장 목록"], ["img/case/hq-c-store-map.webp", "지도", "지도에서 바로 찾기"],
            ["img/case/hq-c-menu.webp", "메뉴", "추천 메뉴부터"], ["img/case/hq-c-product.webp", "상품", "수량 고르고 주문하기"], ["img/case/hq-c-checkout.webp", "주문서", "요청사항 · 쿠폰"],
            ["img/case/hq-c-confirm.webp", "매장 확인", "주문 전 매장 한 번 더"], ["img/case/hq-c-pay.webp", "결제", "카드 간편결제"]],
    extra: { title: "주문을 더 빠르게", items: [["img/case/hq-c-barcode.webp", "멤버십 바코드", "홈에서 바로 꺼내는 바코드"], ["img/case/hq-c-card.webp", "카드 간편결제", "카드를 미리 등록해 두는 화면"]] } },
  guess: { title: "같은 흐름을 <b>실제 화면</b>으로 따라가 보기", kind: "phones",
    items: [["img/case/hq-g-main.webp", "Archive Feed", "캠페인 비주얼로 시작"], ["img/case/hq-g-archive.webp", "Fit Archive", "핏별로 비교하는 데님 아카이브"], ["img/case/hq-g-fitscan.webp", "Fit Scan", "전신 스캔으로 핏 분석"],
            ["img/case/hq-g-detail.webp", "Product Detail", "Perfect Fit 추천"], ["img/case/hq-g-mypage.webp", "My Archive · Pass", "핏 프로필과 Archive Pass"]],
    wide: ["img/case/guess-wireflow.webp", "와이어플로우 · 아카이브 피드 홈 → 데님 핏 아카이브 → 핏 스캔 → 핏 분석 결과 → 상품 상세 → 내 데님 아카이브 → 결제"] },
  "luckin-web": { title: "한 잔의 비주얼에서 <b>앱 다운로드</b>까지", kind: "web",
    items: [["img/case/hq-lkweb-hero.webp", "Hero", "한 잔의 제품 비주얼"], ["img/case/hq-lkweb-quality.webp", "Quality", "카드로 읽는 품질 이야기"], ["img/case/hq-lkweb-nearby.webp", "Find Nearby", "가까운 매장 찾기"], ["img/case/hq-lkweb-easy.webp", "Easy", "앱으로 이어지는 주문"]] },
  "luckin-campaign": { title: "포스터 한 장에서 <b>도시의 행운</b>까지", kind: "web",
    items: [["img/case/hq-k-hero.webp", "QR Poster", "스캔을 부르는 키비주얼"], ["img/case/camp-posters.webp", "Poster Series", "도시마다 이어지는 포스터"], ["img/case/hq-camp-web-hero.webp", "Promo Web", "You can find us"], ["img/case/hq-camp-web-map.webp", "Lucky Map", "지도에서 찾는 행운"], ["img/case/hq-camp-web-city.webp", "City Cards", "도시 카드로 보는 행운"]] },
  additable: { title: "표지에서 공간까지, <b>빛의 질감</b>으로 이어지는 팜플렛", kind: "web",
    items: [["img/case/hq-a-cover.webp", "Cover", "빛을 형상화한 표지"], ["img/case/hq-a-spread.webp", "Spread", "펼침면 구성"], ["img/case/hq-a-inside.webp", "Inside", "공간에 놓인 제품"]] }
};
/* Symbols */
const ICONS = {
  up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
  declutter:'<path d="M4 7h16M7 12h10M10 17h4"/>',
  palette:'<path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.6 0-1.2-1-1.4-1-2.4 0-.9.7-1.5 1.6-1.5H16a5 5 0 0 0 5-5c0-4-4-7.5-9-7.5z"/><path d="M7.5 11h.01M10 7.5h.01M14.5 7.5h.01"/>',
  sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 17v4M17 19h4"/>',
  scan:'<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M4 12h16"/>',
  bookmark:'<path d="M6 4h12v17l-6-4-6 4z"/>',
  nav:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7.5 15h.01M12 15h.01M16.5 15h.01"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  "arrow-out":'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  qr:'<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2zM18 14h2M14 18v2"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.2 3.4 3.2 14.6 0 18M12 3c-3.2 3.4-3.2 14.6 0 18"/>',
  drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  light:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6L19 19M5 19l1.4-1.4M17.6 6.4L19 5"/>',
  archive:'<rect x="3" y="4" width="18" height="5" rx="1"/><path d="M5 9v10h14V9M10 13h4"/>',
  frame:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 15l5-5 4 4 3-3 6 6"/>'
};
const ic = k => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[k] || ""}</svg>`;

/* Intent map + Problem→Fix board. fixes[i] lines up with decisions[i]; pts = [x%, y%, decision index] on the finished screen. */
const FX = {
  compose: {
    intent: { kind: "phone", src: "img/case/hq-c-home.webp", title: "앱을 여는 순간 <b>주문</b>까지, 한 화면에 담은 세 가지 의도", pts: [[82, 53, 0], [28, 66, 1], [50, 96.5, 2]] },
    fixes: [["up", "Order First", "하단 탭에 묻힌 주문 버튼", "첫눈에 보이는 큰 주문 버튼"],
            ["declutter", "Less Noise", "화면 중앙을 차지한 스탬프 10칸", "늘 마시던 메뉴 바로 주문"],
            ["palette", "Brand Color", "연한 회색 하단 아이콘", "컴포즈 옐로 아이콘"]] },
  guess: {
    intent: { kind: "phone", src: "img/case/hq-g-main.webp", title: "할인 쇼핑몰이 아니라 <b>데님 아카이브</b>로 읽히게", pts: [[60, 33, 0], [27, 81, 1], [88, 82, 2]] },
    fixes: [["sparkle", "Brand First", "화면을 덮는 프로모션 배너", "캠페인 비주얼 아카이브 피드"],
            ["archive", "Denim Archive", "옵션 · 가격 중심의 상품 나열", "핏별로 분류한 데님 핏 아카이브"],
            ["scan", "Fit Confidence", "확신할 수 없는 기장과 핏", "핏 아카이브 · Fit Scan · Perfect Fit"],
            ["bookmark", "Loyalty", "구매로 끝나는 거래", "쌓이는 Archive Pass"],
            ["nav", "Simple Nav", "꽉 찬 하단 바 두 줄", "핵심 기능 다섯 개"]] },
  "luckin-web": {
    intent: { kind: "web", src: "img/case/hq-lkweb-hero.webp", title: "기술은 숨기고, <b>한 잔의 비주얼</b>로 설득한다", pts: [[52, 38, 0], [20, 42, 1], [93, 62, 2]] },
    fixes: [["eye", "Visual Proof", "바둑판식 나열 · 저화질 이미지", "한 잔의 제품 비주얼 히어로"],
            ["layers", "Scroll Story", "빽빽한 줄글", "세 장의 카드 스토리"],
            ["arrow-out", "Web to App", "앱으로 이어지지 않는 웹", "Find Nearby · Download App"]] },
  "luckin-campaign": {
    intent: { kind: "image", src: "img/case/hq-k-hero.webp", title: "할인이 아니라 <b>놓치기 싫은 행운</b>으로", pts: [[50, 22, 0], [55, 63, 1]] },
    fixes: [["bolt", "FOMO", "가격 중심 쿠폰", "You’re missing your luck"],
            ["qr", "Scan to Claim", "할인만 남는 다운로드", "Scan · Brew · Reveal · Claim"],
            ["globe", "Lucky Cities", "투자 정보뿐인 웹", "도시 카드로 찾는 행운"]] },
  additable: {
    intent: { kind: "image", src: "img/case/hq-a-cover.webp", title: "따뜻한 조명이 아니라 <b>차갑게 번지는 빛</b>으로", pts: [[40, 85, 0], [78, 40, 1]] },
    fixes: [["drop", "Modern Cool", "Warm & cozy", "Modern cool"],
            ["light", "Light Texture", "제품 사진뿐인 표지", "빛을 형상화한 표지"],
            ["frame", "In Place", "스튜디오샷 중심", "공간에 놓인 제품"]] }
};


return {THEMES,CASES,ORDER,ATM,JOURNEY,ICONS,FX,ic,css:"\n\n/* Kit D — the brand rooms, symbols and maps of Kit A, set with the type, spacing and devices of Kit C.\n   Every colour below is a token that each project overrides from its own palette (THEMES + ATM in data.js). */\n.kd{\n  color-scheme:light;\n  --a-bg:#fff6da; --a-ink:#1d1608; --a-mute:#5c4a12; --a-line:rgba(29,22,8,.16); --a-glass:rgba(255,255,255,.5); --a-gline:rgba(255,255,255,.85);\n  --b-bg:#fbf6e9; --b-ink:#1d1608; --b-mute:#7a6c52; --b-line:#eadfc4; --b-glass:rgba(255,255,255,.62); --b-gline:rgba(255,255,255,.9); --b-hi:#a06e00;\n  --mark:#1d1608; --glow:rgba(255,196,40,.6); --sol-bg:#1d1608; --sol-ink:#fbf2d7; --sol-hi:#ffd23a;\n  --atm-a:#fff6da; --atm-b:#fbf8f0; --grain:.12;\n  --red:#ff4d3d;\n  --font:\"Pretendard\",-apple-system,BlinkMacSystemFont,\"Apple SD Gothic Neo\",\"Helvetica Neue\",sans-serif;\n  --r:28px;\n}\n*{box-sizing:border-box}\n.kd{margin:0;background:#fff;color:var(--b-ink);font-family:var(--font);font-size:17px;line-height:1.5;letter-spacing:-.02em;word-break:keep-all;overflow-wrap:break-word;-webkit-font-smoothing:antialiased}\nimg{max-width:100%;display:block}\nh1,h2,h3,p{margin:0}\nbutton{font:inherit;color:inherit}\n.wrap{max-width:1080px;margin:0 auto;padding-left:max(22px,env(safe-area-inset-left,0px));padding-right:max(22px,env(safe-area-inset-right,0px))}\n.wide{max-width:1260px}\n.todo{display:inline-block;border:1px dashed currentColor;border-radius:6px;padding:0 7px;font-size:13px;opacity:.65}\n:focus-visible{outline:2px solid var(--mark);outline-offset:3px}\n.ic{width:1em;height:1em;display:inline-block;vertical-align:-.15em;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}\n\n/* rooms: brand atmosphere (A), brand paper (B), brand night (N), plain white (W) */\n.room{position:relative;isolation:isolate;padding-block:clamp(84px,11vw,150px);overflow:hidden}\n.room::after{content:\"\";position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:var(--grain);mix-blend-mode:overlay;\n  background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")}\n.rA{background:var(--atm-a);color:var(--a-ink)}\n.rB{background:var(--atm-b);color:var(--b-ink)}\n.rN{background:radial-gradient(60% 50% at 80% 0%,var(--glow),transparent 70%),radial-gradient(50% 40% at 0% 100%,color-mix(in srgb,var(--glow) 60%,transparent),transparent 70%),var(--sol-bg);color:var(--sol-ink)}\n.rW{background:#fff;color:var(--b-ink)}\n.rW::after{display:none}\n\n/* type */\n.eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:clamp(15px,1.4vw,17px);font-weight:600;padding:7px 14px 7px 8px;border-radius:999px;margin-bottom:22px}\n.eyebrow i{font-style:normal;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:600}\n.rA .eyebrow,.rB .eyebrow,.rW .eyebrow{color:var(--b-ink);background:var(--b-glass);border:1px solid var(--b-gline);box-shadow:0 8px 24px -14px rgba(0,0,0,.25)}\n.rA .eyebrow i,.rB .eyebrow i,.rW .eyebrow i{background:var(--sol-bg);color:var(--sol-hi)}\n.rN .eyebrow{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12)}\n.rN .eyebrow i{background:var(--sol-hi);color:var(--sol-bg)}\n.h2{font-size:clamp(38px,5.4vw,76px);line-height:1.08;font-weight:600;letter-spacing:-.03em;text-wrap:balance}\n.h2.sm{font-size:clamp(32px,4.2vw,56px)}\n.h2 b{font-weight:600;color:var(--b-hi)}\n.rA .h2 b{color:var(--a-hi)}\n.rN .h2 b{color:var(--sol-hi)}\n.lead{font-size:clamp(18px,1.7vw,22px);line-height:1.45;font-weight:600;max-width:34em;margin-top:20px;text-wrap:pretty;opacity:.62}\n.center{text-align:center}.center .lead{margin-inline:auto}\n\n/* nav */\n.gnav{background:var(--sol-bg);color:var(--sol-ink)}\n.gnav .wrap{display:flex;align-items:center;height:44px}\n.gtabs{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none;min-width:0}\n.gtabs::-webkit-scrollbar{display:none}\n.gtabs a{font-size:13px;color:color-mix(in srgb,var(--sol-ink) 62%,transparent);text-decoration:none;padding:6px 11px;border-radius:999px;white-space:nowrap}\n.gtabs a:hover{color:var(--sol-ink)}\n.gtabs a[aria-current=\"page\"]{color:var(--sol-bg);background:var(--sol-hi);font-weight:600}\n.lnav{position:sticky;top:env(safe-area-inset-top,0px);z-index:30;background:color-mix(in srgb,#fff 78%,transparent);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);border-bottom:1px solid rgba(0,0,0,.07)}\n.lnav .wrap{display:flex;align-items:center;gap:18px;height:54px}\n.lnav h2{font-size:20px;font-weight:600;white-space:nowrap}\n.chips-nav{margin-left:auto;display:flex;gap:6px;overflow-x:auto;scrollbar-width:none}\n.chips-nav::-webkit-scrollbar{display:none}\n.chips-nav button{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:7px;padding:6px 12px 6px 6px;border-radius:999px;font-size:13px;white-space:nowrap;color:#3a3a3c;transition:background .25s}\n.chips-nav button i{font-style:normal;width:20px;height:20px;border-radius:50%;display:grid;place-items:center;font-size:10px;font-weight:600;background:rgba(0,0,0,.07)}\n.chips-nav button:hover,.chips-nav button.on{background:rgba(0,0,0,.06)}\n.chips-nav button.on i{background:var(--sol-bg);color:var(--sol-hi)}\n.chips-nav button:focus-visible{outline:2px solid var(--mark);outline-offset:2px}\n[id^=\"s-\"]{scroll-margin-top:60px}\n\n/* devices (Kit C) */\n.iphone{position:relative;width:var(--w,300px);flex:none;border-radius:calc(var(--w,300px) * .17);padding:calc(var(--w,300px) * .036);\n  background:linear-gradient(140deg,#e6e6eb 0%,#8e8e93 18%,#48484a 42%,#2c2c2e 58%,#8e8e93 82%,#e5e5ea 100%);\n  box-shadow:inset 0 0 0 1px rgba(255,255,255,.5),inset 0 0 0 calc(var(--w,300px) * .014) #0b0b0c,0 50px 90px -30px rgba(0,0,0,.5),0 20px 40px -20px rgba(0,0,0,.3)}\n.iphone::before,.iphone::after{content:\"\";position:absolute;width:calc(var(--w,300px) * .012);border-radius:3px;background:linear-gradient(#9a9aa0,#3a3a3c)}\n.iphone::before{left:calc(var(--w,300px) * -.008);top:20%;height:9%;box-shadow:0 calc(var(--w,300px) * .2) 0 #6e6e73}\n.iphone::after{right:calc(var(--w,300px) * -.008);top:26%;height:14%}\n.iphone .scr{position:relative;aspect-ratio:1170/2532;border-radius:calc(var(--w,300px) * .135);overflow:hidden;background:#000;isolation:isolate}\n.iphone .scr > img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;transition:opacity .5s ease,transform 4.5s cubic-bezier(.45,0,.2,1)}\n.iphone .scr::after{content:\"\";position:absolute;left:50%;top:1.35%;width:30%;height:3.4%;transform:translateX(-50%);border-radius:999px;background:#000;z-index:3}\n.iphone .glare{position:absolute;inset:0;z-index:2;background:linear-gradient(115deg,rgba(255,255,255,.14),transparent 32%);pointer-events:none}\n.mac{position:relative;width:var(--w,860px);max-width:100%;margin-inline:auto}\n.mac .lid{position:relative;border-radius:calc(var(--w,860px) * .028) calc(var(--w,860px) * .028) 6px 6px;background:#0c0c0d;padding:calc(var(--w,860px) * .02) calc(var(--w,860px) * .02) calc(var(--w,860px) * .03);box-shadow:inset 0 0 0 1.5px #3a3a3c,inset 0 0 0 4px #0c0c0d,inset 0 0 0 5px #2c2c2e}\n.mac .lid::before{content:\"\";position:absolute;left:50%;top:calc(var(--w,860px) * .0075);width:6px;height:6px;border-radius:50%;background:#1f2a36;transform:translateX(-50%)}\n.mac .scr{position:relative;aspect-ratio:16/10;overflow:hidden;border-radius:4px;background:#111}\n.mac .scr > img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;transition:opacity .5s ease}\n.mac .base{position:relative;height:calc(var(--w,860px) * .032);margin:0 -7%;border-radius:0 0 50% 50% / 0 0 100% 100%;background:linear-gradient(#e8e8ed 0%,#c7c7cc 35%,#8e8e93 100%);box-shadow:0 30px 50px -18px rgba(0,0,0,.5)}\n.mac .base::before{content:\"\";position:absolute;left:50%;top:0;width:15%;height:38%;transform:translateX(-50%);border-radius:0 0 10px 10px;background:linear-gradient(#a1a1a6,#c7c7cc)}\n.display{position:relative;border-radius:var(--r);overflow:hidden;box-shadow:0 50px 100px -40px rgba(0,0,0,.55);background:#111}\n.display img{width:100%;transition:opacity .5s ease}\n.reflect{-webkit-box-reflect:below 4px linear-gradient(transparent 84%,rgba(255,255,255,.14))}\n\n/* hero */\n.hero{text-align:center;padding-top:clamp(48px,6vw,80px);padding-bottom:clamp(64px,8vw,110px)}\n.hero h1{font-size:clamp(54px,10vw,148px);line-height:1;font-weight:600;letter-spacing:-.045em;padding-bottom:.04em}\n.hero .sub{font-size:clamp(19px,2vw,28px);line-height:1.32;font-weight:600;color:var(--a-mute);margin:18px auto 0;max-width:24em;text-wrap:balance}\n.hero .sub strong{color:var(--a-ink);font-weight:600}\n.stage{position:relative;margin-top:clamp(44px,6vw,76px);will-change:transform;transform-origin:50% 10%}\n.stage::before{content:\"\";position:absolute;left:50%;top:48%;width:min(900px,100%);aspect-ratio:1.6;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(ellipse at center,var(--glow),transparent 66%);filter:blur(20px);z-index:0;pointer-events:none}\n.lineup{position:relative;z-index:1;display:flex;justify-content:center;align-items:flex-end}\n.lineup .main{--w:clamp(210px,24vw,330px);z-index:2}\n.lineup .side{--w:clamp(160px,19vw,270px);margin-inline:clamp(-40px,-3vw,-14px);opacity:.95}\n.lineup .side.l{transform:translateY(-4%) rotate(-5deg)}.lineup .side.r{transform:translateY(-4%) rotate(5deg)}\n.stage .mac{--w:min(960px,92vw);position:relative;z-index:1}\n.stage .display{position:relative;z-index:1;max-width:1080px;margin-inline:auto}\n.chips{position:absolute;inset:0;z-index:3;pointer-events:none}\n.fchip{position:absolute;display:inline-flex;align-items:center;gap:9px;padding:10px 16px 10px 10px;border-radius:999px;white-space:nowrap;\n  background:var(--a-glass);border:1px solid var(--a-gline);backdrop-filter:blur(18px) saturate(1.4);-webkit-backdrop-filter:blur(18px) saturate(1.4);\n  font-size:15px;font-weight:600;color:var(--a-ink);box-shadow:0 20px 40px -20px rgba(0,0,0,.35);animation:drift 7s ease-in-out infinite}\n.fchip .ic{width:28px;height:28px;padding:6px;border-radius:50%;background:var(--sol-bg);color:var(--sol-hi);box-sizing:border-box}\n.fchip.c0{left:2%;top:14%}.fchip.c1{right:2%;top:26%;animation-delay:-2s}.fchip.c2{left:6%;top:60%;animation-delay:-4s}.fchip.c3{right:6%;top:70%;animation-delay:-1s}\n@keyframes drift{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}\n.facts{display:flex;justify-content:center;gap:clamp(24px,4vw,56px);flex-wrap:wrap;margin-top:clamp(40px,5vw,64px);position:relative;z-index:3}\n.facts span{font-size:14px;color:var(--a-mute)}\n.facts b{display:block;font-size:17px;font-weight:600;color:var(--a-ink);margin-top:2px}\n\n/* overview */\n.intro{display:grid;grid-template-columns:1.15fr 1fr;gap:clamp(32px,6vw,96px);align-items:start}\n.intro .big{font-size:clamp(21px,2.3vw,30px);line-height:1.45;font-weight:600;color:color-mix(in srgb,var(--b-ink) 70%,transparent)}\n.specs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 24px;margin:0;border-top:1px solid var(--b-line)}\n.specs div{padding:14px 0;border-bottom:1px solid var(--b-line)}\n.specs dt{font-size:13px;color:var(--b-mute);font-weight:500}\n.specs dd{margin:4px 0 0;font-size:17px;font-weight:600}\n\n/* WHY (night room) */\n.reveal-text{font-size:clamp(32px,4.6vw,64px);line-height:1.2;font-weight:600;letter-spacing:-.03em;max-width:18em;text-wrap:balance}\n.reveal-text .w{color:color-mix(in srgb,var(--sol-ink) 22%,transparent);transition:color .35s ease}\n.reveal-text .w.lit{color:var(--sol-ink)}\n.reveal-text .w.em.lit{color:var(--sol-hi)}\n.rnote{font-size:clamp(17px,1.5vw,20px);line-height:1.55;color:color-mix(in srgb,var(--sol-ink) 60%,transparent);max-width:36em;margin-top:26px;font-weight:500}\n.bento{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:16px;margin-top:clamp(64px,8vw,110px)}\n.tile{position:relative;border-radius:var(--r);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);padding:clamp(22px,3vw,38px);overflow:hidden;min-width:0}\n.tile.big{grid-row:span 3;display:grid;grid-template-columns:auto 1fr;gap:clamp(20px,3vw,40px);align-items:center}\n.tile.big.noring{grid-template-columns:1fr}\n.tile .lbl{font-size:14px;font-weight:600;color:color-mix(in srgb,var(--sol-ink) 60%,transparent)}\n.tile .num{font-size:clamp(72px,9vw,140px);line-height:.95;font-weight:600;letter-spacing:-.05em;margin-top:12px;font-variant-numeric:tabular-nums;color:var(--sol-hi)}\n.tile .num small{font-size:.42em;margin-left:.04em}\n.tile .note{font-size:15px;color:color-mix(in srgb,var(--sol-ink) 60%,transparent);margin-top:10px}\n.tile .v{font-size:clamp(40px,4.4vw,58px);line-height:1;font-weight:600;letter-spacing:-.04em;font-variant-numeric:tabular-nums}\n.tile .v small{font-size:.5em}\n.tile p{font-size:15px;color:color-mix(in srgb,var(--sol-ink) 60%,transparent);margin-top:10px;line-height:1.45}\n.donut{width:clamp(150px,17vw,230px);aspect-ratio:1;transform:rotate(-90deg)}\n.donut circle{fill:none;stroke:rgba(255,255,255,.1);stroke-width:9}\n.donut .arc{stroke:var(--sol-hi);stroke-linecap:round;stroke-dasharray:0 100;transition:stroke-dasharray 1.6s cubic-bezier(.2,.7,.2,1) .2s}\n.bento.in .donut .arc{stroke-dasharray:var(--p) 100}\n.bars{display:grid;gap:12px;margin-top:24px;grid-column:1 / -1}\n.bars div{display:grid;grid-template-columns:100px 1fr 60px;gap:14px;align-items:center;font-size:14px}\n.bars i{height:8px;border-radius:99px;background:rgba(255,255,255,.1);overflow:hidden;display:block}\n.bars i b{display:block;height:100%;border-radius:99px;background:rgba(255,255,255,.35);width:0;transition:width 1.4s cubic-bezier(.2,.7,.2,1) .3s}\n.bars .me i b{background:var(--sol-hi)}\n.bento.in .bars i b{width:var(--v)}\n.bars span:last-child{text-align:right;font-variant-numeric:tabular-nums}\nsup.fn{font-size:15px;vertical-align:super;margin-left:3px;opacity:.6;font-weight:500;letter-spacing:0;color:var(--sol-ink)}\n.callouts{position:relative;--pw:300px;margin:clamp(80px,10vw,130px) auto 0}\n.callouts .dev{width:var(--pw);margin-inline:auto;position:relative}\n.callouts .dev .iphone{--w:var(--pw)}\n.callouts .dev .iphone .scr > img{filter:grayscale(.15)}\n.xm{position:absolute;transform:translate(-50%,-50%);width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:var(--red);color:#fff;font-size:13px;font-weight:600;z-index:4;box-shadow:0 0 0 4px rgba(255,255,255,.85),0 0 26px 6px rgba(255,77,61,.5)}\n.xm::after{content:\"\";position:absolute;inset:-4px;border-radius:50%;border:2px solid var(--red);animation:pulse 2.2s ease-out infinite}\n.xm.on{transform:translate(-50%,-50%) scale(1.2)}\n@keyframes pulse{0%{transform:scale(1);opacity:.9}100%{transform:scale(2.4);opacity:0}}\n.cl{position:absolute;top:calc(var(--y) * 1%);transform:translateY(-50%);width:calc(50% - var(--pw) / 2 - 60px);z-index:2}\n.cl.l{left:0;text-align:right}.cl.r{right:0}\n.cl b{display:inline-flex;align-items:center;gap:10px;font-size:19px;font-weight:600}\n.cl b i{font-style:normal;flex:none;width:24px;height:24px;border-radius:50%;background:var(--red);color:#fff;font-size:12px;display:grid;place-items:center}\n.cl span{display:block;font-size:14px;color:color-mix(in srgb,var(--sol-ink) 60%,transparent);margin-top:6px;line-height:1.5}\n.cline{position:absolute;top:calc(var(--y) * 1%);height:1px;z-index:1}\n.cline.l{left:calc(50% - var(--pw) / 2 - 48px);width:calc(48px + var(--pw) * var(--x) / 100 - 18px);background:linear-gradient(90deg,transparent,var(--red) 40%)}\n.cline.r{right:calc(50% - var(--pw) / 2 - 48px);width:calc(48px + var(--pw) * (100 - var(--x)) / 100 - 18px);background:linear-gradient(270deg,transparent,var(--red) 40%)}\n.clist{display:none}\n.wide-c{margin:clamp(80px,10vw,130px) auto 0}\n.wide-c .frame{position:relative;max-width:900px;margin-inline:auto}\n.xgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin-top:28px}\n.xgrid div,.clist div{border-radius:20px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);padding:20px 22px;transition:background .25s}\n.xgrid div.on,.clist div.on{background:rgba(255,77,61,.14)}\n.xgrid b,.clist b{display:flex;gap:10px;align-items:center;font-size:17px;font-weight:600}\n.xgrid b i,.clist b i{font-style:normal;flex:none;width:24px;height:24px;border-radius:50%;background:var(--red);color:#fff;font-size:12px;display:grid;place-items:center}\n.xgrid span,.clist span{display:block;font-size:14px;color:color-mix(in srgb,var(--sol-ink) 60%,transparent);margin-top:8px;line-height:1.5}\n.diag-t{text-align:center;font-size:15px;font-weight:600;margin-bottom:30px;color:color-mix(in srgb,var(--sol-ink) 62%,transparent)}\n.rf2{display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:center;margin-top:clamp(64px,8vw,110px)}\n.rf2 .tile b{display:block;font-size:clamp(21px,2.3vw,28px);line-height:1.25;font-weight:600;margin-top:10px}\n.rf2 .tile.now{background:var(--sol-hi);color:var(--sol-bg);border-color:transparent}\n.rf2 .tile.now .lbl,.rf2 .tile.now p{color:color-mix(in srgb,var(--sol-bg) 70%,transparent)}\n.rf2 .ar{font-size:28px;opacity:.5}\n.tw{overflow-x:auto;margin-top:16px;border-radius:22px;border:1px solid rgba(255,255,255,.1)}\n.tw table{min-width:600px}\n.dtable{width:100%;border-collapse:collapse;font-size:15px;color:inherit;font-family:inherit}\n.dtable th{text-align:left;font-size:13px;font-weight:600;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.12);color:color-mix(in srgb,var(--sol-ink) 60%,transparent);background:rgba(255,255,255,.04)}\n.dtable td{padding:16px 18px;border-bottom:1px solid rgba(255,255,255,.07);vertical-align:top;color:color-mix(in srgb,var(--sol-ink) 80%,transparent)}\n.dtable tr:last-child td{border-bottom:0}\n.dtable td:first-child{font-weight:600;color:var(--sol-ink);white-space:nowrap}\n.dtable td:last-child{font-weight:600;color:var(--sol-hi)}\n.shift3{display:grid;gap:10px;margin-top:clamp(56px,7vw,96px)}\n.shift3 div{display:grid;grid-template-columns:110px 1fr 40px 1fr;gap:16px;padding:18px 22px;border-radius:20px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);align-items:baseline}\n.shift3 .k{font-size:13px;opacity:.6}\n.shift3 s{opacity:.55}\n.shift3 b{font-size:19px;font-weight:600;color:var(--sol-hi)}\n\n/* WHAT — Problem → Fix board (Kit A) */\n.fxb{display:grid;gap:16px;margin-top:clamp(48px,6vw,80px)}\n.fx{display:grid;grid-template-columns:136px minmax(0,1fr) 54px minmax(0,1fr);gap:clamp(12px,2vw,24px);align-items:center}\n.ring{position:relative;width:136px;aspect-ratio:1;border-radius:50%;display:grid;place-content:center;justify-items:center;gap:6px;text-align:center;background:var(--b-glass);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 14px 30px -18px rgba(0,0,0,.3)}\n.ring::before{content:\"\";position:absolute;inset:0;border-radius:50%;padding:2px;background:conic-gradient(from 210deg,var(--mark),var(--sol-hi),transparent 70%,var(--mark));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}\n.ring .ic{font-size:28px;color:var(--b-hi)}\n.ring b{font-size:14px;font-weight:600;line-height:1.15;max-width:100px}\n.pill{display:flex;align-items:center;gap:12px;border-radius:999px;padding:17px 24px;font-size:16px;line-height:1.4;min-height:66px}\n.pill i{flex:none;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-size:12px;font-weight:600;font-style:normal}\n.pill.p{border:1.5px dashed var(--b-line);color:var(--b-mute);background:color-mix(in srgb,#fff 30%,transparent)}\n.pill.p span{background:linear-gradient(currentColor,currentColor) no-repeat 0 58%/0% 1.5px;transition:background-size .7s ease calc(var(--d,0ms) + .35s)}\n.fx.in .pill.p span{background-size:100% 1.5px}\n.pill.p i{background:rgba(255,77,61,.14);color:var(--red)}\n.pill.f{background:var(--sol-bg);color:var(--sol-ink);font-weight:600;box-shadow:0 18px 44px -12px var(--glow);transition:box-shadow .8s ease calc(var(--d,0ms) + .6s),transform .8s ease calc(var(--d,0ms) + .6s)}\n.fx:not(.in) .pill.f{box-shadow:none;transform:scale(.96)}\n.pill.f i{background:var(--sol-hi);color:var(--sol-bg)}\n.fx .arw{display:grid;place-items:center;font-size:28px;opacity:.45}\n.fx .kwm{display:none;font-size:18px;font-weight:600;grid-column:2}\n\n/* WHERE — intent map (Kit A) on 3x devices */\n.imap{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);gap:clamp(20px,3vw,44px);align-items:center;margin-top:clamp(48px,6vw,80px)}\n.imap .col{display:grid;gap:16px}\n.imap .iphone{--w:clamp(240px,24vw,320px)}\n.imap.wide{grid-template-columns:1fr}\n.imap.wide .col{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}\n.imap.wide .mac{--w:min(900px,100%)}\n.imap.wide .display{max-width:900px;margin-inline:auto}\n.hot{position:absolute;inset:0;z-index:4}\n.hs{position:absolute;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;border:0;padding:0;cursor:pointer;background:var(--sol-bg);color:var(--sol-hi);font-size:14px;font-weight:600;display:grid;place-items:center;box-shadow:0 0 0 4px rgba(255,255,255,.85),0 0 28px 8px var(--glow);transition:transform .25s}\n.hs::before{content:\"\";position:absolute;inset:-4px;border-radius:50%;border:2px solid var(--sol-hi);animation:pulse 2.2s ease-out infinite}\n.hs.on{transform:translate(-50%,-50%) scale(1.25)}\n.icard{all:unset;box-sizing:border-box;display:block;cursor:pointer;border-radius:24px;padding:20px 22px;background:var(--b-glass);border:1px solid var(--b-gline);color:var(--b-ink);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 16px 40px -22px rgba(0,0,0,.35);transition:transform .3s,box-shadow .3s}\n.icard:hover,.icard.on{transform:translateY(-3px);box-shadow:0 24px 50px -18px var(--glow),0 0 0 2px var(--sol-hi)}\n.icard:focus-visible{outline:2px solid var(--mark);outline-offset:3px}\n.icard .top{display:flex;align-items:center;gap:10px}\n.icard .no{width:26px;height:26px;border-radius:50%;background:var(--sol-bg);color:var(--sol-hi);font-size:12px;font-weight:600;display:grid;place-items:center;flex:none}\n.icard .kw{font-size:19px;font-weight:600;display:flex;align-items:center;gap:7px}\n.icard .kw .ic{font-size:20px;color:var(--b-hi)}\n.icard .pf{display:grid;gap:7px;margin-top:14px;font-size:14.5px;line-height:1.45}\n.icard .x{color:var(--b-mute)}.icard .x s{text-decoration-thickness:1px}\n.icard .o{font-weight:600}\n.icard .x::before,.icard .o::before{display:inline-grid;place-items:center;width:18px;height:18px;border-radius:50%;margin-right:8px;font-size:10px;font-weight:600;vertical-align:1px}\n.icard .x::before{content:\"✕\";background:rgba(255,77,61,.16);color:#e2483b}\n.icard .o::before{content:\"✓\";background:var(--sol-bg);color:var(--sol-hi)}\n.icard .go{display:block;margin-top:12px;font-size:13px;color:var(--b-mute)}\n\n/* HOW — decision chapters (Kit C) */\n.chap{position:relative;padding-block:clamp(80px,10vw,140px)}\n.chap:nth-child(odd){background:#fff}\n.chap:nth-child(even){background:var(--atm-b)}\n.chap .grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:clamp(32px,6vw,96px);align-items:start}\n.chap:nth-child(even) .grid{grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr)}\n.chap:nth-child(even) .media{order:2}\n.media{position:sticky;top:100px}\n.mstage{position:relative;display:flex;justify-content:center;align-items:flex-end;gap:18px;min-height:clamp(360px,44vw,640px);padding:clamp(20px,3vw,36px) 0}\n.mstage::before{content:\"\";position:absolute;left:50%;top:50%;width:90%;aspect-ratio:1;max-height:110%;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,var(--glow),transparent 62%);opacity:.55;filter:blur(10px);z-index:0}\n.mstage > *{position:relative;z-index:1}\n.mstage .iphone{--w:clamp(220px,23vw,320px)}\n.mstage.fan .iphone{--w:clamp(150px,15vw,220px)}\n.mstage.fan .iphone:nth-child(2){--w:clamp(170px,17vw,250px);z-index:2;margin-inline:-28px}\n.mstage.fan .iphone:nth-child(1){transform:rotate(-4deg) translateY(4%)}\n.mstage.fan .iphone:nth-child(3){transform:rotate(4deg) translateY(4%)}\n.mstage .mac{--w:min(620px,100%)}\n.mstage .display{width:100%}\n.mstage.st{flex-direction:column;align-items:center;justify-content:center;gap:22px}\n.mstage .strip{width:100%;max-width:560px;border-radius:24px;overflow:hidden;background:#fff;box-shadow:0 30px 60px -30px rgba(0,0,0,.35)}\n.mstage .strip img{width:100%;transition:opacity .5s}\n.swap{position:relative}\n.swap > .b{position:absolute;inset:0;opacity:0}\n.mstage[data-v=\"before\"] .swap > .b{opacity:1}\n.mstage[data-v=\"before\"] .swap > .a{opacity:0}\n.scr > img.b{opacity:0}\n.mstage[data-v=\"before\"] .scr > img.b{opacity:1}\n.mstage[data-v=\"before\"] .scr > img.a{opacity:0}\n/* Compose icon set: original 3D PNGs on glass tiles */\n.icons5{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;width:100%;max-width:560px}\n.icons5 figure{margin:0;display:grid;justify-items:center;gap:10px;padding:18px 8px 14px;border-radius:22px;background:var(--b-glass);border:1px solid var(--b-gline);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 16px 30px -20px rgba(0,0,0,.35);transition:transform .3s}\n.icons5 figure:hover{transform:translateY(-4px)}\n.icons5 .im{height:clamp(36px,4.4vw,58px);width:100%;display:flex;align-items:center;justify-content:center}\n.icons5 img{height:100%;width:auto;max-width:78%;object-fit:contain;filter:drop-shadow(0 6px 10px rgba(0,0,0,.15))}\n.icons5 img[src*=\"member\"],.icons5 img[src*=\"card\"]{height:74%}\n.icons5 figcaption{font-size:13px;font-weight:600}\n.icons-cap{font-size:14px;color:var(--b-mute);text-align:center}\n.seg{display:inline-flex;padding:3px;border-radius:999px;background:rgba(0,0,0,.07);margin:18px auto 0;position:relative}\n.segw{text-align:center}\n.seg button{all:unset;cursor:pointer;position:relative;z-index:1;font-size:14px;font-weight:500;padding:7px 18px;border-radius:999px;color:var(--b-mute);transition:color .25s}\n.seg button[aria-pressed=\"true\"]{color:var(--b-ink);font-weight:600}\n.seg i{position:absolute;top:3px;bottom:3px;left:3px;width:calc(50% - 3px);border-radius:999px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.12);transition:transform .35s cubic-bezier(.2,.7,.2,1)}\n.seg[data-v=\"after\"] i{transform:translateX(100%)}\n.seg button:focus-visible{outline:2px solid var(--mark);outline-offset:2px}\n.lens{position:absolute;z-index:6;width:clamp(120px,13vw,176px);aspect-ratio:1;border-radius:50%;background-repeat:no-repeat;background-color:#fff;box-shadow:0 0 0 4px #fff,0 0 0 5px rgba(0,0,0,.08),0 24px 50px -12px rgba(0,0,0,.45);transform:translate(-50%,-50%) scale(.6);opacity:0;transition:opacity .4s,transform .6s cubic-bezier(.2,.7,.2,1);pointer-events:none}\n.lens.on{opacity:1;transform:translate(-50%,-50%) scale(1)}\n.ltarget{position:absolute;z-index:5;width:36px;height:36px;border-radius:50%;transform:translate(-50%,-50%);border:2px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 0 24px 6px var(--glow);opacity:0;transition:opacity .4s}\n.ltarget.on{opacity:1}\n.mstage[data-v=\"before\"] .lens,.mstage[data-v=\"before\"] .ltarget{opacity:0}\n.tcol{padding-top:clamp(8px,2vw,40px)}\n.tcol .no{font-size:14px;font-weight:600;color:var(--b-mute)}\n.kw{display:inline-flex;align-items:center;gap:10px;font-size:15px;font-weight:600;margin-top:12px;padding:6px 14px 6px 6px;border-radius:999px;background:var(--b-glass);border:1px solid var(--b-gline)}\n.kw .ic{width:32px;height:32px;padding:7px;border-radius:50%;background:var(--sol-bg);color:var(--sol-hi);box-sizing:border-box}\n.tcol h3{font-size:clamp(32px,3.8vw,52px);line-height:1.12;font-weight:600;letter-spacing:-.035em;margin-top:18px;text-wrap:balance}\n.tcol .body{font-size:clamp(17px,1.5vw,20px);line-height:1.55;color:var(--b-mute);margin-top:18px;font-weight:500}\n.spec3{margin:36px 0 0;display:grid;gap:10px}\n.spec3 div{display:grid;grid-template-columns:auto 1fr;gap:14px;padding:16px 18px;border-radius:20px;background:var(--b-glass);border:1px solid var(--b-gline);align-items:start}\n.spec3 dt{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--b-mute);white-space:nowrap;padding-top:2px}\n.spec3 dt i{font-style:normal;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:11px}\n.spec3 .p dt i{background:rgba(255,77,61,.14);color:var(--red)}\n.spec3 .e dt i{background:rgba(0,0,0,.06);color:var(--b-mute)}\n.spec3 dd{margin:0;font-size:15.5px;line-height:1.6}\n.spec3 .sol{background:var(--sol-bg);border-color:transparent;color:var(--sol-ink);box-shadow:0 18px 40px -16px var(--glow)}\n.spec3 .sol dt{color:var(--sol-hi)}\n.spec3 .sol dt i{background:var(--sol-hi);color:var(--sol-bg)}\n.spec3 .sol dd{font-weight:600}\n.spec3 strong{font-weight:600}\n.spec3 .evn{display:block;font-size:13px;color:var(--b-mute);margin-top:6px}\n\n/* FLOW — gallery (Kit C) */\n.steps4{display:grid;grid-template-columns:repeat(var(--n,5),minmax(0,1fr));gap:12px;margin-top:clamp(40px,5vw,64px)}\n.steps4 div{position:relative;border-radius:22px;background:var(--b-glass);border:1px solid var(--b-gline);padding:22px 20px;min-width:0}\n.steps4 div:not(:last-child)::after{content:\"→\";position:absolute;right:-12px;top:24px;width:12px;text-align:center;color:var(--b-mute)}\n.steps4 .n{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--sol-bg);color:var(--sol-hi);font-size:12px;font-weight:600}\n.steps4 b{display:block;font-size:22px;font-weight:600;margin-top:12px}\n.steps4 em{display:block;font-style:normal;font-size:13px;font-weight:600;color:var(--b-hi);margin-top:4px}\n.steps4 p{font-size:14px;color:var(--b-mute);margin-top:10px;line-height:1.45}\n.gal{display:flex;gap:clamp(24px,3vw,44px);overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-left:max(22px,calc((100vw - 1080px) / 2));padding:30px max(22px,calc((100vw - 1080px) / 2)) 20px;scrollbar-width:none;margin-top:clamp(36px,5vw,56px)}\n.gal::-webkit-scrollbar{display:none}\n.gal figure{margin:0;flex:none;scroll-snap-align:start;text-align:center;position:relative}\n.gal figure:not(:last-child)::after{content:\"\";position:absolute;right:calc(clamp(24px,3vw,44px) / -2 - 5px);top:40%;width:10px;height:10px;border-top:1.5px solid var(--b-mute);border-right:1.5px solid var(--b-mute);transform:rotate(45deg);opacity:.5}\n.gal .iphone{--w:clamp(200px,20vw,270px);margin-inline:auto}\n.gal .display{width:clamp(300px,52vw,640px);border-radius:20px}\n.gal figcaption{margin-top:22px;display:grid;justify-items:center;gap:4px}\n.gal figcaption .n{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--sol-bg);color:var(--sol-hi);font-size:12px;font-weight:600}\n.gal figcaption b{font-size:17px;font-weight:600}\n.gal figcaption span{font-size:14px;color:var(--b-mute)}\n.gal figure.plus figcaption .n{background:var(--sol-hi);color:var(--sol-bg)}\n.gal .iphone.tall:hover .scr > img,.gal .iphone.tall:focus-within .scr > img{transform:translateY(var(--shift,0))}\n.gal-ctl{display:flex;justify-content:flex-end;gap:10px;margin-top:6px}\n.paddle{all:unset;cursor:pointer;width:38px;height:38px;border-radius:50%;background:rgba(0,0,0,.07);display:grid;place-items:center;font-size:19px}\n.paddle:hover{background:rgba(0,0,0,.13)}\n.paddle:focus-visible{outline:2px solid var(--mark);outline-offset:3px}\n.paddle[disabled]{opacity:.3;cursor:default}\n.board{margin-top:clamp(40px,5vw,64px);border-radius:var(--r);overflow:hidden;background:#fff;box-shadow:0 30px 70px -40px rgba(0,0,0,.4),0 0 0 1px rgba(0,0,0,.06)}\n.board figcaption{padding:14px 22px;font-size:14px;color:var(--b-mute);border-top:1px solid rgba(0,0,0,.06)}\n\n/* RESULT — drag compare on a real device */\n.cmpg{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:clamp(28px,5vw,80px);align-items:center}\n.cmpg.ph{grid-template-columns:minmax(0,1fr) auto}\n.cmpg .lead{opacity:.62}\n.slider{position:relative;touch-action:pan-y;cursor:ew-resize}\n.slider .iphone{--w:clamp(250px,26vw,340px)}\n.slider .mac{--w:min(640px,100%)}\n.slider .scr > img.b{opacity:1;clip-path:inset(0 calc(100% - var(--pos,50%)) 0 0);z-index:1}\n.slider .handle{position:absolute;top:0;bottom:0;left:var(--pos,50%);width:2px;background:#fff;transform:translateX(-1px);z-index:4;box-shadow:0 0 12px rgba(0,0,0,.4)}\n.slider .handle::after{content:\"↔\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:46px;height:46px;border-radius:50%;background:var(--sol-hi);color:var(--sol-bg);display:grid;place-items:center;font-size:18px;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,.4)}\n.slider .t{position:absolute;top:7%;font-size:12px;font-weight:600;padding:5px 11px;border-radius:99px;background:rgba(0,0,0,.72);color:#fff;z-index:5}\n.range{width:min(340px,100%);display:block;margin:24px auto 0;accent-color:var(--sol-hi)}\n\n/* LEARN */\n.proc{display:grid;grid-template-columns:repeat(var(--n,4),minmax(0,1fr));gap:14px;margin-top:clamp(48px,6vw,80px)}\n.proc div{border-radius:24px;background:var(--b-glass);border:1px solid var(--b-gline);padding:24px;min-width:0;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}\n.proc .n{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;font-size:13px;font-weight:600;background:rgba(0,0,0,.06)}\n.proc div:last-child .n{background:var(--sol-bg);color:var(--sol-hi)}\n.proc b{display:block;font-size:21px;font-weight:600;margin-top:18px;overflow-wrap:anywhere}\n.proc p{font-size:14px;color:var(--b-mute);margin-top:8px;line-height:1.5}\n.quote{font-size:clamp(38px,5.6vw,82px);line-height:1.12;font-weight:600;letter-spacing:-.04em;text-align:center;margin-top:clamp(90px,12vw,160px);text-wrap:balance}\n.quote em{font-style:normal;color:var(--b-hi)}\n.learn2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:clamp(56px,7vw,90px)}\n.learn2 div{border-radius:24px;background:var(--b-glass);border:1px solid var(--b-gline);padding:26px}\n.learn2 .lbl{display:block;font-size:14px;font-weight:600;color:var(--b-mute);margin-bottom:10px}\n.learn2 p{font-size:17px;line-height:1.6}\n.foot{background:var(--sol-bg);color:color-mix(in srgb,var(--sol-ink) 62%,transparent);font-size:12.5px;line-height:1.6;padding-block:30px 44px}\n.foot ol{margin:0;padding-left:1.2em;display:grid;gap:6px}\n.foot .bc{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:22px;padding-top:16px;border-top:1px solid rgba(255,255,255,.1)}\n\n/* reveal */\n.rv{opacity:0;transform:translateY(36px);transition:opacity 1s ease var(--d,0ms),transform 1.1s cubic-bezier(.2,.7,.2,1) var(--d,0ms)}\n.rv.in{opacity:1;transform:none}\n\n@media (max-width:900px){\n  .chips-nav{display:none}\n  .lineup .side{display:none}\n  .lineup .main{--w:min(250px,64vw)}\n  .fchip{font-size:13px;padding:8px 13px 8px 8px}.fchip .ic{width:24px;height:24px;padding:5px}\n  .chips{position:relative;inset:auto;display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:26px}\n  .fchip{position:static;animation:none}\n  .intro{grid-template-columns:1fr}\n  .bento{grid-template-columns:1fr}\n  .tile.big{grid-row:auto;grid-template-columns:1fr}\n  .callouts{--pw:min(250px,66vw)}\n  .callouts .cl,.callouts .cline{display:none}\n  .clist{display:grid;gap:12px;margin-top:28px}\n  .rf2{grid-template-columns:1fr}.rf2 .ar{transform:rotate(90deg);justify-self:center}\n  .shift3 div{grid-template-columns:1fr;gap:4px}.shift3 div span:nth-child(3){display:none}\n  .fx{grid-template-columns:78px minmax(0,1fr);row-gap:8px}\n  .fx .ring{width:78px;grid-row:span 3;align-self:start}.fx .ring b{display:none}.fx .ring .ic{font-size:24px}\n  .fx .arw{display:none}.fx .kwm{display:block}\n  .pill{border-radius:20px;padding:12px 16px;font-size:14.5px;min-height:0}\n  .imap{grid-template-columns:1fr}\n  .imap .col{display:contents}\n  .imap .dev{order:-99;justify-self:center;margin-bottom:10px}\n  .imap .iphone{--w:min(250px,64vw)}\n  .chap .grid,.chap:nth-child(even) .grid{grid-template-columns:1fr}\n  .chap:nth-child(even) .media{order:0}\n  .media{position:relative;top:auto}\n  .mstage{min-height:0}\n  .mstage .iphone{--w:min(240px,62vw)}\n  .mstage.fan{gap:4px}\n  .mstage.fan .iphone{--w:min(112px,28vw)}\n  .mstage.fan .iphone:nth-child(2){--w:min(132px,32vw);margin-inline:-14px}\n  .lens{width:110px}\n  .icons5{gap:6px}.icons5 figure{padding:12px 4px 10px;border-radius:16px}.icons5 figcaption{font-size:11px}\n  .steps4{grid-template-columns:1fr}.steps4 div:not(:last-child)::after{content:\"↓\";right:auto;left:26px;top:auto;bottom:-20px}\n  .cmpg,.cmpg.ph{grid-template-columns:1fr}\n  .proc{grid-template-columns:1fr}\n  .learn2{grid-template-columns:1fr}\n}\n@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}.rv{opacity:1;transform:none}.reveal-text .w{color:var(--sol-ink)}}\n"}})();
