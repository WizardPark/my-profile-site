// ========================================
// 프로필 웹사이트 설정 파일 (config.js)
// ========================================
// 이 파일의 내용을 수정하면 웹사이트 전체가 반영됩니다.
// 각 항목의 주석을 읽고 필요한 부분을 수정하세요.

const PROFILE = {
  // ========== 기본 정보 ==========

  // 이름 (Hero 섹션 타이핑 애니메이션에서 사용)
  name: "WizardPark",

  // 직업/역할 (Hero 섹션에서 이름 다음에 타이핑 애니메이션)
  role: "Firmware Developer",

  // 자기소개 (Hero 섹션 좌측에서 표시)
  // 배열의 각 항목이 한 줄이 됩니다
  intro: [
    "임베디드 시스템과 펌웨어 개발에 열정을 가진 엔지니어입니다.",
    "STM32, AVR 마이크로컨트롤러 기반의 다양한 프로젝트를 진행했으며,",
    "PyQt를 이용한 GUI 프로그래밍과 회로 설계까지 폭넓은 경험을 보유하고 있습니다."
  ],

  // About 섹션 상세 설명 (Hero 섹션 우측에서 표시)
  aboutDetail: "저는 저전력 IoT 기기부터 자동차 제어 시스템까지 다양한 임베디드 시스템을 설계하고 개발한 경험이 있습니다. 복잡한 문제를 단순하고 효율적인 솔루션으로 해결하는 것을 즐기며, 최신 기술 트렌드를 항상 학습하고 적용하려 노력합니다.",

  // ========== 기술 스택 ==========
  // 각 항목: { name: "기술명", level: "레벨", category: "카테고리" }
  skills: [
    // 프로그래밍 언어
    { name: "C Language", level: "중급", category: "Languages" },
    { name: "Python", level: "중급", category: "Languages" },

    // 마이크로컨트롤러 / 임베디드
    { name: "STM32", level: "상급", category: "MCU/Embedded" },
    { name: "AVR", level: "중급", category: "MCU/Embedded" },

    // GUI 개발
    { name: "PyQt", level: "중급", category: "GUI" },

    // 전자설계 / PCB
    { name: "orCAD", level: "중급", category: "EDA/PCB" },
    { name: "Altium Designer", level: "중급", category: "EDA/PCB" }
  ],

  // ========== 프로젝트 / 포트폴리오 ==========
  // 각 프로젝트는 다음 필드를 포함합니다:
  // - title: 프로젝트 제목
  // - period: 개발 기간 (예: "2023.01 ~ 2023.06")
  // - purpose: 개발 목적
  // - desc: 상세 설명
  // - image: 이미지 경로 (assets/images/파일명.jpg 또는 외부 URL)
  //   ※ 이미지 교체 방법:
  //     1) 이미지 파일을 assets/images/ 폴더에 저장
  //     2) 아래 image 필드의 파일명을 변경
  //     3) 브라우저 새로고침
  // - tags: 태그 배열

  projects: [
    {
      title: "STM32 기반 온습도 데이터 로거",
      period: "2023.01 ~ 2023.06 (약 3개월)",
      purpose: "센서로부터 실시간 온습도 데이터를 수집하고 저장하는 임베디드 시스템 개발",
      desc: "DHT22 온습도 센서와 SD카드 모듈을 이용하여 데이터를 수집·저장하고, UART 통신으로 PC와 통신. STM32 HAL 라이브러리를 활용한 저수준 제어 경험 획득.",
      image: "https://picsum.photos/400/250?random=1",
      tags: ["STM32F4", "Embedded C", "UART", "Sensor"],
      careerIndex: 2
    },
    {
      title: "AVR 기반 DC모터 PWM 제어기",
      period: "2023.07 ~ 2023.09 (약 2개월)",
      purpose: "마이크로컨트롤러를 이용한 DC모터 속도 제어 시스템 구축",
      desc: "ATmega328P 마이크로컨트롤러와 L298N 모터 드라이버를 이용하여 DC모터의 속도를 PWM 신호로 제어. 버튼 입력으로 속도 조절 가능한 사용자 인터페이스 구현.",
      image: "https://picsum.photos/400/250?random=2",
      tags: ["AVR", "PWM", "Motor Control", "Hardware"],
      careerIndex: 1
    },
    {
      title: "PyQt5 시리얼 데이터 모니터 GUI",
      period: "2023.10 ~ 2023.11 (약 1개월)",
      purpose: "임베디드 장치로부터 시리얼 포트를 통해 수신한 데이터를 시각화하는 PC 애플리케이션 개발",
      desc: "PyQt5를 이용하여 직관적인 GUI 기반 시리얼 모니터 개발. 실시간 데이터 그래프 표시, 데이터 로깅, CSV 내보내기 기능 구현. 멀티스레드를 활용한 안정적인 UI 반응성 확보.",
      image: "https://picsum.photos/400/250?random=3",
      tags: ["PyQt5", "Python", "GUI", "Serial Communication"],
      careerIndex: 3
    },
    {
      title: "STM32 평가보드 회로설계 및 PCB 제작",
      period: "2023.12 ~ 2024.02 (약 2개월)",
      purpose: "STM32 마이크로컨트롤러 기반 실험용 평가보드 설계 및 PCB 제작",
      desc: "orCAD로 회로도 작성 및 Altium Designer로 PCB 레이아웃 설계. 2레이어 PCB에 STM32F407 MCU, 결정자(Crystal), 전원 회로, 프로그래밍 포트 구성. 실제 PCB 제조 및 부품 솔더링을 통한 손으로 직접 만드는 경험 획득.",
      image: "https://picsum.photos/400/250?random=4",
      tags: ["orCAD", "Altium Designer", "PCB Design", "Hardware"],
      careerIndex: 2
    }
  ],

  // ========== 경력 / Career Timeline ==========
  // 대학교 → 대학원 → 업체 순서대로 입력
  // 각 항목: { type, org, role, startDate, endDate, exitReason, desc }
  // - type: "education" (학교) | "work" (회사)
  // - org: 기관명 (예: "OO대학교", "ABC회사")
  // - role: 전공/직위 (예: "전자공학과 학사", "시니어 펌웨어 개발자")
  // - startDate: 시작일 (YYYY.MM 형식, 예: "2015.03")
  // - endDate: 종료일 (YYYY.MM 형식 또는 "현재" 입력 시 오늘 날짜 기준)
  // - exitReason: 퇴사/졸업 사유
  //   ("졸업", "재직중", "자진퇴사", "권고사직", "계약만료" 중 선택)
  // - desc: 추가 설명 (생략 가능)

  career: [
    {
      type: "education",
      org: "OO대학교",
      role: "제어로봇공학과",
      startDate: "2015.03",
      endDate: "2019.02",
      exitReason: "졸업",
      desc: ""
    },
    {
      type: "education",
      org: "OO대학원",
      role: "전기공학과 석사",
      startDate: "2019.03",
      endDate: "2021.02",
      exitReason: "석사 취득",
      desc: "임베디드 시스템 및 펌웨어 개발 심화 연구"
    },
    {
      type: "work",
      org: "업체1",
      role: "인턴",
      startDate: "2021.03",
      endDate: "2022.12",
      exitReason: "계약만료",
      desc: "드론 실험 보조 및 자율주행 브레이크 시스템 개발 참여"
    },
    {
      type: "work",
      org: "업체2",
      role: "대리",
      startDate: "2023.01",
      endDate: "2024.06",
      exitReason: "자진퇴사",
      desc: "자동차 부품 임베디드 시스템 개발"
    },
    {
      type: "work",
      org: "업체3",
      role: "선임연구원",
      startDate: "2024.07",
      endDate: "현재",
      exitReason: "재직중",
      desc: "고급 제어 시스템 및 실시간 OS 개발"
    }
  ],

  // ========== 업적 / Achievements ==========
  // 논문, 특허, 수상 기록 등을 입력
  // 각 항목: { type, title, date, issuer, desc }
  // - type: "paper" (논문) | "patent" (특허) | "award" (수상)
  // - title: 논문/특허/수상 제목
  // - date: 발표/등록/수상 날짜 (YYYY.MM 형식)
  // - issuer: 발행/등재 기관 또는 수여 기관
  // - desc: 간단한 설명

  achievements: [
    {
      type: "paper",
      title: "논문-1",
      date: "2020.06",
      issuer: "한국전자공학회",
      desc: "무선 센서 네트워크의 전력 효율을 높이는 알고리즘 제시"
    },
    {
      type: "paper",
      title: "논문-2",
      date: "2021.03",
      issuer: "IEEE 국제학술대회",
      desc: "RTOS 기반 시스템의 응답 시간 개선 방법 연구"
    },
    {
      type: "patent",
      title: "적응형 전력 관리 시스템",
      date: "2022.05",
      issuer: "대한민국 특허청",
      desc: "마이크로컨트롤러의 동적 전력 소비를 최적화하는 발명"
    },
    {
      type: "award",
      title: "우수 기술혁신상",
      date: "2023.11",
      issuer: "업체1 기술부",
      desc: "IoT 플랫폼 고도화 프로젝트 주도"
    },
    {
      type: "award",
      title: "베스트 엔지니어 어워드",
      date: "2024.08",
      issuer: "업체3 R&D 센터",
      desc: "임베디드 시스템 성능 최적화 기여"
    }
  ],

  // ========== 연락처 ==========
  // 이메일과 전화번호를 수정할 수 있습니다
  contact: {
    email: "gmail@gmail.com",  // ← 이메일 주소를 여기서 수정
    phone: "000-0000-0000"            // ← 전화번호를 여기서 수정
    // 주의: GitHub, LinkedIn 등 외부 링크는 포함되지 않습니다
  }
};

// ========== 내보내기 ==========
// 다른 JavaScript 파일에서 PROFILE 객체를 사용하기 위해 내보냅니다
// (일반 script 태그로 로드할 경우 window 객체에 자동으로 할당됨)
