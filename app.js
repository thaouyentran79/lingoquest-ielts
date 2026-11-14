/**
 * LINGOQUEST IELTS - CONTROLLER LOGIC
 * Thiết kế EdTech chuẩn chỉnh: Trọng tâm là Lộ trình IELTS chuẩn Band điểm
 * Tách biệt Tạp chí Bắt Trend và Đấu trường Mini-games
 */

// ==========================================
// 1. QUẢN LÝ TIẾN ĐỘ & TRẠNG THÁI (LOCALSTORAGE)
// ==========================================
const STORAGE_KEY = "lingoquest_ielts_v2";

let userState = {
  xp: 160,
  streak: 3,
  completedLessons: ["ielts-1"], // Mở sẵn bài 1 hoàn thành mẫu
  activeMainTab: "tab-roadmap",
  activeMagCat: "all"
};

function loadUserState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      userState = { ...userState, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("Dùng cấu hình mặc định:", e);
  }
}

function saveUserState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
  } catch (e) {
    console.warn("Lỗi lưu:", e);
  }
  updateHeaderStats();
}

function updateHeaderStats() {
  document.getElementById('header-xp').textContent = `${userState.xp} XP`;
  document.getElementById('header-streak').textContent = `${userState.streak} Ngày`;

  let rank = "Chiến Binh IELTS";
  if (userState.xp >= 500) rank = "👑 Nữ Hoàng IELTS";
  else if (userState.xp >= 350) rank = "💎 Cao Thủ Band 8.0";
  else if (userState.xp >= 200) rank = "⚡ Thợ Săn Band 7.0";

  document.getElementById('header-rank').textContent = rank;

  // Tính phần trăm lộ trình IELTS
  let totalLessons = 0;
  IELTS_ROADMAP.forEach(m => totalLessons += m.lessons.length);
  const doneCount = userState.completedLessons.length;
  const pct = Math.min(100, Math.round((doneCount / totalLessons) * 100));

  const pctText = document.getElementById('roadmap-pct-text');
  const bar = document.getElementById('roadmap-progress-bar');
  if (pctText) pctText.textContent = `${pct}%`;
  if (bar) bar.style.width = `${pct}%`;
}

// ==========================================
// 2. HIỆU ỨNG ÂM THANH & GIỌNG ĐỌC (WEB AUDIO & SPEECH)
// ==========================================
const SoundSystem = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },
  play(freq, type, dur, delay = 0) {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + dur);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + dur);
    } catch (e) {}
  },
  correct() {
    this.play(523.25, 'sine', 0.15, 0);
    this.play(659.25, 'sine', 0.25, 0.08);
    this.play(783.99, 'sine', 0.35, 0.16);
  },
  wrong() {
    this.play(200, 'sawtooth', 0.2, 0);
    this.play(150, 'sawtooth', 0.25, 0.1);
  },
  victory() {
    [440, 554.37, 659.25, 880].forEach((f, i) => this.play(f, 'triangle', 0.3, i * 0.1));
  },
  click() {
    this.play(420, 'sine', 0.04, 0);
  }
};

function speakEnglish(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US';
  utt.rate = 0.9;
  const voices = window.speechSynthesis.getVoices();
  const us = voices.find(v => v.lang.includes('en-US') || v.lang.includes('en_US'));
  if (us) utt.voice = us;
  window.speechSynthesis.speak(utt);
}

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({ particleCount: 90, spread: 65, origin: { y: 0.6 } });
  }
}

// ==========================================
// 3. CHUYỂN ĐỔI 3 TAB CHÍNH (ROADMAP / MAGAZINE / GAMES)
// ==========================================
function switchMainTab(tabId) {
  SoundSystem.click();
  userState.activeMainTab = tabId;

  // Cập nhật nút tab
  document.getElementById('btn-tab-roadmap').classList.toggle('active', tabId === 'tab-roadmap');
  document.getElementById('btn-tab-magazine').classList.toggle('active', tabId === 'tab-magazine');
  document.getElementById('btn-tab-games').classList.toggle('active', tabId === 'tab-games');

  // Ẩn hiện View Panel
  document.getElementById('panel-roadmap').classList.toggle('active-view', tabId === 'tab-roadmap');
  document.getElementById('panel-magazine').classList.toggle('active-view', tabId === 'tab-magazine');
  document.getElementById('panel-games').classList.toggle('active-view', tabId === 'tab-games');

  // Tự động cuộn lên đầu nhẹ nhàng
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 4. VIEW 1: RENDER LỘ TRÌNH IELTS (ROADMAP)
// ==========================================
function renderRoadmap() {
  const container = document.getElementById('roadmap-milestones-container');
  if (!container) return;
  container.innerHTML = '';

  let allLessonsLinear = [];
  IELTS_ROADMAP.forEach(m => m.lessons.forEach(l => allLessonsLinear.push(l)));

  IELTS_ROADMAP.forEach(milestone => {
    const groupEl = document.createElement('div');
    groupEl.className = 'band-milestone-group';

    // Header của Milestone
    groupEl.innerHTML = `
      <div class="milestone-header">
        <span class="milestone-badge" style="background: ${milestone.badgeColor};">${milestone.bandTitle}</span>
        <span class="milestone-desc">• ${milestone.bandDesc}</span>
      </div>
      <div class="lessons-list" id="list-${milestone.bandId}"></div>
    `;

    container.appendChild(groupEl);
    const listEl = groupEl.querySelector(`#list-${milestone.bandId}`);

    milestone.lessons.forEach(lesson => {
      const isDone = userState.completedLessons.includes(lesson.id);
      
      // Tìm bài trước trong danh sách phẳng để xét khóa
      const currIdx = allLessonsLinear.findIndex(l => l.id === lesson.id);
      const prevLesson = currIdx > 0 ? allLessonsLinear[currIdx - 1] : null;
      const isUnlocked = currIdx === 0 || (prevLesson && userState.completedLessons.includes(prevLesson.id));
      const isLocked = !isUnlocked && !isDone;

      let btnHtml = '';
      let cardClass = 'lesson-card';

      if (isDone) {
        cardClass += ' completed';
        btnHtml = `<button class="lesson-btn btn-done">✓ Đã Hoàn Thành</button>`;
      } else if (isLocked) {
        cardClass += ' locked';
        btnHtml = `<button class="lesson-btn btn-lock">🔒 Cần mở khóa</button>`;
      } else {
        btnHtml = `<button class="lesson-btn btn-start">⚡ Vào Học (+${lesson.xp} XP)</button>`;
      }

      const card = document.createElement('div');
      card.className = cardClass;
      card.innerHTML = `
        <div class="lesson-left">
          <div class="lesson-skill-icon">${lesson.skillIcon}</div>
          <div class="lesson-info">
            <h3>${lesson.title}</h3>
            <div class="lesson-meta">
              <span>🎯 ${lesson.skill}</span>
              <span>⏱️ ${lesson.duration}</span>
              <span>✨ +${lesson.xp} XP</span>
            </div>
          </div>
        </div>
        <div>${btnHtml}</div>
      `;

      card.addEventListener('click', () => {
        SoundSystem.click();
        if (isLocked) {
          alert("Nữ hoàng hãy hoàn thành bài học phía trước để mở khóa bài này nhé!");
          return;
        }
        openLessonModal(lesson);
      });

      listEl.appendChild(card);
    });
  });
}

// MODAL HỌC BÀI IELTS
let activeLesson = null;
let quizAnswered = false;

function openLessonModal(lesson) {
  activeLesson = lesson;
  quizAnswered = false;

  document.getElementById('lesson-modal-badge').textContent = `${lesson.skillIcon} ${lesson.skill}`;
  document.getElementById('lesson-modal-title').textContent = lesson.title;
  document.getElementById('lesson-theory-body').innerHTML = lesson.content;

  // Nạp danh sách từ vựng
  const vocabBox = document.getElementById('lesson-vocab-container');
  vocabBox.innerHTML = lesson.vocab.map(v => `
    <div style="background: rgba(15, 23, 42, 0.4); border: 1px solid var(--border-color); border-radius: 12px; padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between;">
      <div>
        <div style="font-weight: 700; color: #fff; font-size: 1rem;">
          ${v.word} <span style="font-family: monospace; color: #a5b4fc; font-weight: normal;">${v.ipa}</span>
        </div>
        <div style="font-size: 0.85rem; color: #38bdf8; margin: 0.2rem 0;">${v.meaning}</div>
        <div style="font-size: 0.82rem; color: var(--text-muted); font-style: italic;">"${v.example}"</div>
      </div>
      <button class="speech-btn-sm" onclick="speakEnglish('${v.word.replace(/'/g, "\\'")}')" title="Phát âm">🔊</button>
    </div>
  `).join('');

  // Nạp bài tập trắc nghiệm
  document.getElementById('lesson-quiz-question').textContent = lesson.quiz.question;
  const optBox = document.getElementById('lesson-quiz-options');
  optBox.innerHTML = '';
  const feedbackBox = document.getElementById('lesson-quiz-feedback');
  feedbackBox.style.display = 'none';

  lesson.quiz.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'mag-filter-btn';
    btn.style.width = '100%';
    btn.style.justifyContent = 'flex-start';
    btn.style.borderRadius = '12px';
    btn.innerHTML = `<b>${String.fromCharCode(65 + idx)}.</b> ${opt}`;

    btn.addEventListener('click', () => {
      if (quizAnswered) return;
      quizAnswered = true;

      if (idx === lesson.quiz.correct) {
        SoundSystem.correct();
        triggerConfetti();
        btn.style.borderColor = '#10b981';
        btn.style.background = 'rgba(16, 185, 129, 0.2)';
        feedbackBox.style.display = 'block';
        feedbackBox.style.background = 'rgba(16, 185, 129, 0.15)';
        feedbackBox.style.border = '1px solid rgba(16, 185, 129, 0.4)';
        feedbackBox.innerHTML = `<span style="color: #34d399; font-weight: 700;">✓ Chính xác!</span> ${lesson.quiz.explanation}`;
      } else {
        SoundSystem.wrong();
        btn.style.borderColor = '#ef4444';
        btn.style.background = 'rgba(239, 68, 68, 0.2)';
        feedbackBox.style.display = 'block';
        feedbackBox.style.background = 'rgba(239, 68, 68, 0.15)';
        feedbackBox.style.border = '1px solid rgba(239, 68, 68, 0.4)';
        feedbackBox.innerHTML = `<span style="color: #f87171; font-weight: 700;">Chưa chính xác:</span> ${lesson.quiz.explanation}`;
      }
    });

    optBox.appendChild(btn);
  });

  document.getElementById('btn-finish-lesson').innerHTML = `<span>✓</span> Hoàn Thành Bài & Nhận +${lesson.xp} XP`;
  document.getElementById('lesson-modal').classList.add('open');
}

function closeLessonModal() {
  document.getElementById('lesson-modal').classList.remove('open');
}

function finishCurrentLesson() {
  if (!activeLesson) return;
  SoundSystem.victory();
  triggerConfetti();

  if (!userState.completedLessons.includes(activeLesson.id)) {
    userState.completedLessons.push(activeLesson.id);
    userState.xp += activeLesson.xp;
    userState.streak += 1;
    saveUserState();
  }

  alert(`👑 Chúc mừng Nữ hoàng đã hoàn thành bài "${activeLesson.title}"!\n✨ Nhận ngay +${activeLesson.xp} XP!`);
  closeLessonModal();
  renderRoadmap();
}

// ==========================================
// 5. VIEW 2: TẠP CHÍ ĐỌC BÁO BẮT TREND (MAGAZINE)
// ==========================================
function renderMagazine(category = 'all') {
  userState.activeMagCat = category;
  const container = document.getElementById('magazine-articles-grid');
  if (!container) return;

  // Lọc bài báo
  const filtered = MAGAZINE_ARTICLES.filter(art => {
    if (category === 'all') return true;
    return art.category === category;
  });

  container.innerHTML = filtered.map(art => `
    <div class="article-card" onclick="openArticleModal('${art.id}')">
      <div class="article-thumb-wrapper">
        <img class="article-thumb-img" src="${art.coverImg}" alt="${art.title}">
        <span class="article-category-badge">${art.categoryIcon} ${art.categoryName}</span>
      </div>
      <div class="article-body">
        <div>
          <h3 class="article-title">${art.title}</h3>
          <p class="article-summary">${art.summary}</p>
        </div>
        <div class="article-footer">
          <span>⏱️ ${art.readTime}</span>
          <span class="read-btn">Đọc bài báo & Nghe nhạc →</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterArticles(cat) {
  SoundSystem.click();
  document.querySelectorAll('.mag-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderMagazine(cat);
}

// MODAL ĐỌC BÀI BÁO CHI TIẾT
function openArticleModal(artId) {
  const art = MAGAZINE_ARTICLES.find(a => a.id === artId);
  if (!art) return;
  SoundSystem.click();

  document.getElementById('art-modal-category').textContent = `${art.categoryIcon} ${art.categoryName}`;
  document.getElementById('art-modal-title').textContent = art.title;
  document.getElementById('art-modal-author').textContent = `✍️ ${art.author}`;
  document.getElementById('art-modal-time').textContent = `⏱️ ${art.readTime}`;

  // Video Youtube nếu có
  const mediaWrap = document.getElementById('art-media-wrapper');
  const frame = document.getElementById('art-youtube-frame');
  if (art.youtubeId) {
    mediaWrap.style.display = 'block';
    frame.src = `https://www.youtube-nocookie.com/embed/${art.youtubeId}?rel=0`;
  } else {
    mediaWrap.style.display = 'none';
    frame.src = '';
  }

  // Toàn văn bài báo
  document.getElementById('art-modal-content').innerHTML = art.contentHtml;

  // Danh sách từ vựng bài báo
  document.getElementById('art-modal-vocab-list').innerHTML = art.vocabList.map(v => `
    <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid var(--border-color); border-radius: 10px; padding: 0.65rem 0.85rem; display: flex; align-items: center; justify-content: space-between;">
      <div>
        <span style="font-weight: 700; color: #fff;">${v.word}</span> 
        <span style="font-family: monospace; color: #a5b4fc; font-size: 0.85rem;">${v.ipa}</span>: 
        <span style="color: #38bdf8; font-size: 0.9rem;">${v.meaning}</span>
      </div>
      <button class="speech-btn-sm" onclick="speakEnglish('${v.word.replace(/'/g, "\\'")}')" title="Nghe phát âm">🔊</button>
    </div>
  `).join('');

  document.getElementById('article-modal').classList.add('open');
}

function closeArticleModal() {
  document.getElementById('article-modal').classList.remove('open');
  const frame = document.getElementById('art-youtube-frame');
  if (frame) frame.src = '';
}

// ==========================================
// 6. VIEW 3: ĐẤU TRƯỜNG MINI-GAMES
// ==========================================
let activeCardIdx = 0;

function renderMiniGames() {
  updateCardUI();
  setupSpeedTiles();
}

// Game 1: Flashcard
function updateCardUI() {
  const item = ALL_VOCABULARY_POOL[activeCardIdx];
  document.getElementById('fc-counter-text').textContent = `Thẻ ${activeCardIdx + 1} / ${ALL_VOCABULARY_POOL.length}`;
  document.getElementById('fc-card-inner').classList.remove('flipped');

  document.getElementById('fc-word').textContent = item.word;
  document.getElementById('fc-ipa').textContent = item.ipa;
  document.getElementById('fc-meaning').textContent = item.vi;
  document.getElementById('fc-example').textContent = `"${item.example}"`;
}

function flipActiveCard() {
  SoundSystem.click();
  document.getElementById('fc-card-inner').classList.toggle('flipped');
}

function nextCard() {
  SoundSystem.click();
  activeCardIdx = (activeCardIdx + 1) % ALL_VOCABULARY_POOL.length;
  updateCardUI();
}

function prevCard() {
  SoundSystem.click();
  activeCardIdx = (activeCardIdx - 1 + ALL_VOCABULARY_POOL.length) % ALL_VOCABULARY_POOL.length;
  updateCardUI();
}

function speakActiveWord() {
  const item = ALL_VOCABULARY_POOL[activeCardIdx];
  speakEnglish(item.word);
}

// Game 2: Speed Matching
let speedTimer = 30;
let speedInterval = null;
let selectedTile = null;
let matchedPairs = 0;

function setupSpeedTiles() {
  clearInterval(speedInterval);
  speedTimer = 30;
  matchedPairs = 0;
  selectedTile = null;

  document.getElementById('speed-timer-badge').textContent = '30s';
  document.getElementById('speed-result-status').textContent = 'Đã nối: 0 / 4 cặp';

  // Lấy 4 từ ngẫu nhiên
  const sample = [...ALL_VOCABULARY_POOL].sort(() => 0.5 - Math.random()).slice(0, 4);
  const enTiles = sample.map((item, idx) => ({ id: idx, type: 'en', text: item.word }));
  const viTiles = sample.map((item, idx) => ({ id: idx, type: 'vi', text: item.vi }));

  const mixed = [...enTiles, ...viTiles].sort(() => 0.5 - Math.random());
  const grid = document.getElementById('speed-tiles-grid');
  grid.innerHTML = '';

  mixed.forEach(t => {
    const el = document.createElement('div');
    el.className = 'speed-tile';
    el.textContent = t.text;
    el.dataset.id = t.id;
    el.dataset.type = t.type;

    el.addEventListener('click', () => handleSpeedTileClick(el));
    grid.appendChild(el);
  });

  // Chạy đồng hồ
  speedInterval = setInterval(() => {
    speedTimer--;
    document.getElementById('speed-timer-badge').textContent = `${speedTimer}s`;
    if (speedTimer <= 0) {
      clearInterval(speedInterval);
      SoundSystem.wrong();
      document.getElementById('speed-result-status').innerHTML = '⏳ <b>Hết giờ!</b> Bấm "Chơi lại" để thử lại nhé!';
    }
  }, 1000);
}

function handleSpeedTileClick(el) {
  if (el.classList.contains('matched') || speedTimer <= 0) return;
  SoundSystem.click();

  if (!selectedTile) {
    selectedTile = el;
    el.classList.add('selected');
    return;
  }

  if (selectedTile === el) {
    el.classList.remove('selected');
    selectedTile = null;
    return;
  }

  const prev = selectedTile;

  if (prev.dataset.type === el.dataset.type) {
    prev.classList.remove('selected');
    selectedTile = el;
    el.classList.add('selected');
    return;
  }

  if (prev.dataset.id === el.dataset.id) {
    SoundSystem.correct();
    prev.classList.remove('selected');
    prev.classList.add('matched');
    el.classList.add('matched');
    selectedTile = null;
    matchedPairs++;
    document.getElementById('speed-result-status').textContent = `Đã nối: ${matchedPairs} / 4 cặp`;

    if (matchedPairs >= 4) {
      clearInterval(speedInterval);
      SoundSystem.victory();
      triggerConfetti();
      document.getElementById('speed-result-status').innerHTML = '🎉 <b>XUẤT SẮC!</b> Đã nối đúng toàn bộ!';
    }
  } else {
    SoundSystem.wrong();
    prev.classList.remove('selected');
    selectedTile = null;
  }
}

function restartSpeedGame() {
  SoundSystem.click();
  setupSpeedTiles();
}

// ==========================================
// 7. KHỞI TẠO TOÀN DIỆN KHI MỞ TRANG WEB
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadUserState();
  updateHeaderStats();
  renderRoadmap();
  renderMagazine();
  renderMiniGames();

  // Đóng modal khi bấm ra ngoài nền tối
  document.getElementById('lesson-modal').addEventListener('click', (e) => {
    if (e.target.id === 'lesson-modal') closeLessonModal();
  });
  document.getElementById('article-modal').addEventListener('click', (e) => {
    if (e.target.id === 'article-modal') closeArticleModal();
  });
});
