// ========================================
// 메인 렌더링 로직 (main.js)
// ========================================
// config.js의 PROFILE 객체를 읽어 DOM에 동적으로 콘텐츠를 생성합니다.

// ========== DOM 요소 캐싱 ==========
const nameText = document.getElementById('name-text');
const roleText = document.getElementById('role-text');
const introText = document.getElementById('intro-text');
const aboutIntro = document.getElementById('about-intro');
const careerTimeline = document.getElementById('career-timeline');
const techStackContainer = document.getElementById('tech-stack-container');
const achievementsGrid = document.getElementById('achievements-grid');
const projectsGrid = document.getElementById('projects-grid');
const emailLink = document.getElementById('email-link');
const phoneText = document.getElementById('phone-text');
const emailButton = document.getElementById('email-button');
const footerName = document.getElementById('footer-name');

// ========== 초기화 함수 ==========
function initialize() {
  renderName();
  renderRole();
  renderIntro();
  renderAboutIntro();
  renderCareer();
  renderTechStack();
  renderAchievements();
  renderProjects();
  renderContact();
  renderFooter();
  initScrollAnimations();
}

// ========== 1. 이름 렌더링 ==========
function renderName() {
  nameText.textContent = PROFILE.name;
}

// ========== 2. 직업/역할 타이핑 애니메이션 ==========
function renderRole() {
  const role = PROFILE.role;
  let index = 0;

  // 이전 텍스트가 있으면 지우기
  roleText.textContent = '';

  // 타이핑 애니메이션 (약간 느리게)
  const typeInterval = setInterval(() => {
    if (index < role.length) {
      roleText.textContent += role.charAt(index);
      index++;
    } else {
      clearInterval(typeInterval);
    }
  }, 100);
}

// ========== 3. Hero 섹션 소개 ==========
function renderIntro() {
  // 배열의 각 항목을 <br>로 구분
  const introLines = PROFILE.intro.map(line => line.trim()).join('\n');
  introText.innerHTML = introLines.replace(/\n/g, '<br>');
}

// ========== 4. About 섹션 소개 ==========
function renderAboutIntro() {
  const introLines = PROFILE.intro.map(line => line.trim()).join('\n');
  aboutIntro.innerHTML = introLines.replace(/\n/g, '<br>');
}

// ========== 4-1. 근무일수 계산 함수 ==========
function calcDuration(startDate, endDate) {
  // startDate, endDate 형식: "YYYY.MM"
  const parseDate = (dateStr) => {
    if (dateStr === '현재') return new Date();
    const [year, month] = dateStr.split('.');
    return new Date(parseInt(year), parseInt(month) - 1);
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  // 밀리초 차이를 일수로 변환
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 년, 월, 일 계산
  let years = 0;
  let months = 0;
  let days = diffDays;

  years = Math.floor(days / 365);
  days -= years * 365;
  months = Math.floor(days / 30);
  days -= months * 30;

  // 문자열 생성
  const parts = [];
  if (years > 0) parts.push(`${years}년`);
  if (months > 0) parts.push(`${months}개월`);
  if (days > 0 || parts.length === 0) parts.push(`${days}일`);

  return parts.join(' ');
}

// ========== 4-2. 퇴사 사유 배지 CSS 클래스 반환 ==========
function getExitReasonClass(exitReason) {
  const reasonMap = {
    '졸업': 'graduated',
    '재직중': 'employed',
    '자진퇴사': 'voluntary',
    '권고사직': 'recommended',
    '계약만료': 'contract'
  };
  return reasonMap[exitReason] || 'graduated';
}

// ========== 5. Career 타임라인 렌더링 ==========
function renderCareer() {
  careerTimeline.innerHTML = '';

  PROFILE.career.forEach((item, index) => {
    // 카드 컨테이너
    const cardContainer = document.createElement('div');
    cardContainer.className = 'mb-8 md:mb-0 md:flex items-start';
    if (index % 2 === 0) {
      cardContainer.className += ' md:flex-row-reverse';
    }

    // 카드 본체
    const card = document.createElement('div');
    card.className = `timeline-card p-6 rounded-lg fade-in ${index % 2 === 0 ? 'right' : 'left'} md:w-5/12`;
    card.style.animationDelay = `${index * 0.1}s`;

    // 타임라인 점
    const dot = document.createElement('div');
    dot.className = 'timeline-dot hidden md:block';

    // 기관명 + 타입 아이콘
    const headerDiv = document.createElement('div');
    headerDiv.className = 'flex items-center gap-2 mb-2';

    const typeIcon = document.createElement('span');
    typeIcon.className = 'text-xl';
    typeIcon.textContent = item.type === 'education' ? '🎓' : '🏢';

    const orgName = document.createElement('h3');
    orgName.className = 'text-lg font-bold text-white';
    orgName.textContent = item.org;

    headerDiv.appendChild(typeIcon);
    headerDiv.appendChild(orgName);

    // 직위/전공
    const roleDiv = document.createElement('p');
    roleDiv.className = 'text-sky-400 font-semibold text-sm mb-2';
    roleDiv.textContent = item.role;

    // 기간 + 근무일수
    const periodDiv = document.createElement('p');
    periodDiv.className = 'text-slate-400 text-sm mb-2';
    const duration = calcDuration(item.startDate, item.endDate);
    periodDiv.innerHTML = `<strong>${item.startDate} ~ ${item.endDate}</strong><br><span class="text-sky-300 text-xs">📅 ${duration}</span>`;

    // 퇴사 사유 배지
    const reasonBadge = document.createElement('span');
    const reasonClass = getExitReasonClass(item.exitReason);
    reasonBadge.className = `exit-badge ${reasonClass}`;
    reasonBadge.textContent = item.exitReason;

    // 설명
    const descDiv = document.createElement('p');
    descDiv.className = 'text-slate-400 text-sm mt-3 leading-relaxed';
    descDiv.textContent = item.desc || '(설명 없음)';

    // 조립
    card.appendChild(dot);
    card.appendChild(headerDiv);
    card.appendChild(roleDiv);
    card.appendChild(periodDiv);
    card.appendChild(reasonBadge);
    card.appendChild(descDiv);

    cardContainer.appendChild(card);
    careerTimeline.appendChild(cardContainer);
  });
}

// ========== 6. Tech Stack 렌더링 ==========
function renderTechStack() {
  techStackContainer.innerHTML = '';

  // 카테고리별 그룹화
  const categorized = {};
  PROFILE.skills.forEach(skill => {
    if (!categorized[skill.category]) {
      categorized[skill.category] = [];
    }
    categorized[skill.category].push(skill);
  });

  // 각 스킬 배지 생성
  PROFILE.skills.forEach(skill => {
    const badge = document.createElement('div');
    badge.className = 'skill-badge px-4 py-2 rounded-lg text-center fade-in';
    badge.style.animationDelay = `${PROFILE.skills.indexOf(skill) * 0.05}s`;

    const skillName = document.createElement('div');
    skillName.className = 'font-semibold text-white text-sm md:text-base';
    skillName.textContent = skill.name;

    const skillLevel = document.createElement('div');
    skillLevel.className = 'text-xs text-sky-400 mt-1';
    skillLevel.textContent = skill.level;

    badge.appendChild(skillName);
    badge.appendChild(skillLevel);
    techStackContainer.appendChild(badge);
  });
}

// ========== 6-1. 업적 아이콘 및 배지 클래스 반환 ==========
function getAchievementIcon(type) {
  const iconMap = {
    'paper': '📄',
    'patent': '🔧',
    'award': '🏆'
  };
  return iconMap[type] || '📋';
}

function getAchievementBadgeClass(type) {
  const classMap = {
    'paper': 'paper',
    'patent': 'patent',
    'award': 'award'
  };
  return classMap[type] || 'paper';
}

function getAchievementLabel(type) {
  const labelMap = {
    'paper': '논문',
    'patent': '특허',
    'award': '수상'
  };
  return labelMap[type] || '업적';
}

// ========== 6-2. Achievements 렌더링 ==========
function renderAchievements() {
  achievementsGrid.innerHTML = '';

  PROFILE.achievements.forEach((achievement, index) => {
    const card = document.createElement('div');
    card.className = 'achievement-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;

    // 타입 배지 + 아이콘
    const headerDiv = document.createElement('div');
    headerDiv.className = 'flex items-center gap-2 mb-3';

    const icon = document.createElement('span');
    icon.className = 'text-2xl';
    icon.textContent = getAchievementIcon(achievement.type);

    const badge = document.createElement('span');
    badge.className = `achievement-badge ${getAchievementBadgeClass(achievement.type)}`;
    badge.textContent = getAchievementLabel(achievement.type);

    headerDiv.appendChild(icon);
    headerDiv.appendChild(badge);

    // 제목
    const titleDiv = document.createElement('h3');
    titleDiv.className = 'text-lg font-bold text-white mb-2';
    titleDiv.textContent = achievement.title;

    // 날짜
    const dateDiv = document.createElement('p');
    dateDiv.className = 'text-sky-400 text-sm font-semibold mb-1';
    dateDiv.textContent = `📅 ${achievement.date}`;

    // 발행/수여 기관
    const issuerDiv = document.createElement('p');
    issuerDiv.className = 'text-slate-400 text-sm mb-3';
    issuerDiv.innerHTML = `<strong>기관:</strong> ${achievement.issuer}`;

    // 설명
    const descDiv = document.createElement('p');
    descDiv.className = 'text-slate-400 text-sm leading-relaxed';
    descDiv.textContent = achievement.desc;

    // 조립
    card.appendChild(headerDiv);
    card.appendChild(titleDiv);
    card.appendChild(dateDiv);
    card.appendChild(issuerDiv);
    card.appendChild(descDiv);

    achievementsGrid.appendChild(card);
  });
}

// ========== 7. 프로젝트 카드 렌더링 ==========
function renderProjects() {
  projectsGrid.innerHTML = '';

  PROFILE.projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card rounded-lg overflow-hidden fade-in';
    card.style.animationDelay = `${index * 0.1}s`;

    // 이미지
    const imgContainer = document.createElement('div');
    imgContainer.className = 'h-48 overflow-hidden bg-slate-800';
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;
    img.className = 'w-full h-full object-cover';
    imgContainer.appendChild(img);

    // 콘텐츠
    const content = document.createElement('div');
    content.className = 'p-6';

    // 제목
    const title = document.createElement('h3');
    title.className = 'text-xl font-bold text-white mb-2';
    title.textContent = project.title;

    // 기간
    const period = document.createElement('p');
    period.className = 'text-sm text-sky-400 mb-3 font-semibold';
    period.textContent = project.period;

    // 목적
    const purpose = document.createElement('p');
    purpose.className = 'text-sm text-slate-400 mb-2';
    purpose.innerHTML = `<strong>목적:</strong> ${project.purpose}`;

    // 설명
    const desc = document.createElement('p');
    desc.className = 'text-sm text-slate-400 mb-4 leading-relaxed';
    desc.textContent = project.desc;

    // 태그
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'flex flex-wrap gap-2';
    project.tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.className = 'text-xs bg-slate-700 text-sky-300 px-2 py-1 rounded';
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });

    // 조립
    content.appendChild(title);
    content.appendChild(period);
    content.appendChild(purpose);
    content.appendChild(desc);
    content.appendChild(tagsContainer);

    card.appendChild(imgContainer);
    card.appendChild(content);
    projectsGrid.appendChild(card);
  });
}

// ========== 8. 연락처 렌더링 ==========
function renderContact() {
  // 이메일
  const email = PROFILE.contact.email;
  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;

  // 전화번호
  phoneText.textContent = PROFILE.contact.phone;

  // 이메일 버튼도 mailto 링크로 설정
  emailButton.onclick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };
}

// ========== 9. 푸터 렌더링 ==========
function renderFooter() {
  footerName.textContent = PROFILE.name;
}

// ========== 10. 스크롤 애니메이션 ==========
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.classList.contains('fade-in')) {
        entry.target.style.animation = 'fadeIn 0.8s ease-in forwards';
      }
    });
  }, observerOptions);

  // 모든 fade-in 요소 관찰
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// ========== 11. 부드러운 스크롤 링크 ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ========== 페이지 로드 시 실행 ==========
window.addEventListener('DOMContentLoaded', () => {
  initialize();
  initSmoothScroll();
});

// ========== 윈도우 로드 시 재실행 (이미지 로드 완료 후) ==========
window.addEventListener('load', () => {
  // 프로젝트 이미지 로드 완료 후 레이아웃 확인
  console.log('✓ 페이지 로드 완료');
});
