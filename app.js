/**
 * FORUMFLASH • IELTS EDITION LOGIC
 * Tái hiện chuẩn xác trải nghiệm Forum Flash Study:
 * Lộ trình học bài bản theo chuẩn CEFR / Band điểm
 * Tạp chí đọc báo giải trí nhặt từ vựng (Âm nhạc, Thời trang, Công nghệ)
 */

// ==========================================
// 1. QUẢN LÝ TIẾN ĐỘ & TRẠNG THÁI
// ==========================================
const FF_STORAGE_KEY = "forumflash_ielts_state_v3";

let appState = {
  xp: 160,
  streak: 3,
  completedLessons: ["ielts-1"],
  activeView: "roadmap"
};

function loadState() {
  try {
    const saved = localStorage.getItem(FF_STORAGE_KEY);
    if (saved) {
      appState = { ...appState, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("Dùng trạng thái mặc định");
  }
}

function saveState() {
  try {
    localStorage.setItem(FF_STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.warn("Lỗi lưu:", e);
  }
  updateStatsUI();
}

function updateStatsUI() {
  document.getElementById('streak-val').textContent = `${appState.streak} Ngày`;
  document.getElementById('user-rank-val').textContent = `Nữ hoàng (${appState.xp} XP)`;

  // Cập nhật Cây hạt giống
  let totalLessons = 0;
  IELTS_ROADMAP.forEach(m => totalLessons += m.lessons.length);
  const doneCount = appState.completedLessons.length;
  const pct = Math.min(100, Math.round((doneCount / totalLessons) * 100));

  const pctText = document.getElementById('seed-pct-text');
  const barFill = document.getElementById('seed-bar-fill');
  const xpText = document.getElementById('seed-xp-text');

  if (pctText) pctText.textContent = `${pct}%`;
  if (barFill) barFill.style.width = `${pct}%`;
  if (xpText) xpText.textContent = `${appState.xp} XP`;
}

// ==========================================
// 2. ÂM THANH & GIỌNG ĐỌC BẢN XỨ (WEB AUDIO / SPEECH)
// ==========================================
const Sound = {
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
    this.play(400, 'sine', 0.04, 0);
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
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
  }
}

// ==========================================
// 3. CHUYỂN ĐỔI GIAO DIỆN CHÍNH
// ==========================================
function showView(viewId) {
  Sound.click();
  appState.activeView = viewId;

  // Cập nhật tab active
  document.querySelectorAll('.ff-nav-item').forEach(el => el.classList.remove('active'));
  const activeNav = document.getElementById(`nav-item-${viewId}`);
  if (activeNav) activeNav.classList.add('active');

  // Ẩn hiện các view
  document.getElementById('view-roadmap').classList.toggle('active-view', viewId === 'roadmap');
  document.getElementById('view-magazine').classList.toggle('active-view', viewId === 'magazine');
  document.getElementById('view-games').classList.toggle('active-view', viewId === 'games');

  // Cuộn mượt lên trên
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 4. VIEW 1: RENDER LỘ TRÌNH IELTS (ROADMAP)
// ==========================================
function renderRoadmapView() {
  const wrapper = document.getElementById('roadmap-milestones-wrapper');
  if (!wrapper) return;
  wrapper.innerHTML = '';

  let allLinear = [];
  IELTS_ROADMAP.forEach(m => m.lessons.forEach(l => allLinear.push(l)));

  IELTS_ROADMAP.forEach(m => {
    const block = document.createElement('div');
    block.className = 'ff-milestone-block';

    block.innerHTML = `
      <div class="ff-milestone-title-bar">
        <span class="ff-band-pill">${m.bandTitle}</span>
        <span class="ff-band-desc">• ${m.bandDesc}</span>
      </div>
      <div class="ff-lessons-grid" id="grid-${m.bandId}"></div>
    `;

    wrapper.appendChild(block);
    const grid = block.querySelector(`#grid-${m.bandId}`);

    m.lessons.forEach(lesson => {
      const isDone = appState.completedLessons.includes(lesson.id);
      const currIdx = allLinear.findIndex(l => l.id === lesson.id);
      const prevLesson = currIdx > 0 ? allLinear[currIdx - 1] : null;
      const isUnlocked = currIdx === 0 || (prevLesson && appState.completedLessons.includes(prevLesson.id));
      const isLocked = !isUnlocked && !isDone;

      let cardClass = 'ff-lesson-card';
      let btnLabel = 'Học bài';
      let btnClass = 'ff-btn-action';

      if (isDone) {
        cardClass += ' done';
        btnLabel = '✓ Đã xong';
        btnClass += ' done';
      } else if (isLocked) {
        cardClass += ' locked';
        btnLabel = '🔒 Khóa';
        btnClass += ' lock';
      }

      const card = document.createElement('div');
      card.className = cardClass;
      card.innerHTML = `
        <div class="ff-lesson-top">
          <div class="ff-skill-icon-box">${lesson.skillIcon}</div>
          <div>
            <h4>${lesson.title}</h4>
            <p class="summary">${lesson.summary}</p>
          </div>
        </div>
        <div class="ff-lesson-bottom">
          <span class="ff-lesson-meta">⏱️ ${lesson.duration} • ✨ +${lesson.xp} XP</span>
          <button class="${btnClass}">${btnLabel}</button>
        </div>
      `;

      card.addEventListener('click', () => {
        Sound.click();
        if (isLocked) {
          alert("Nữ hoàng hãy hoàn thành bài học phía trước để mở khóa bài này nhé!");
          return;
        }
        openLessonDetail(lesson);
      });

      grid.appendChild(card);
    });
  });
}

// CHI TIẾT BÀI HỌC IELTS
let currentOpenLesson = null;
let currentQuizDone = false;

function openLessonDetail(lesson) {
  currentOpenLesson = lesson;
  currentQuizDone = false;

  document.getElementById('m-lesson-skill').textContent = `${lesson.skillIcon} ${lesson.skill}`;
  document.getElementById('m-lesson-title').textContent = lesson.title;
  document.getElementById('m-lesson-content').innerHTML = lesson.content;

  // Bảng từ vựng
  const vocabBox = document.getElementById('m-lesson-vocab');
  vocabBox.innerHTML = lesson.vocab.map(v => `
    <div style="background: #ffffff; border: 1px solid var(--ff-border); border-radius: 12px; padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between;">
      <div>
        <span style="font-weight: 800; color: var(--ff-dark-green); font-size: 1.05rem;">${v.word}</span>
        <span style="font-family: monospace; color: #0d9488; margin: 0 0.4rem;">${v.ipa}</span>: 
        <span style="font-size: 0.9rem; color: #1f2937;">${v.meaning}</span>
        <div style="font-size: 0.82rem; color: var(--ff-text-muted); font-style: italic; margin-top: 0.2rem;">"${v.example}"</div>
      </div>
      <button class="ff-speech-circle" onclick="speakEnglish('${v.word.replace(/'/g, "\\'")}')">🔊</button>
    </div>
  `).join('');

  // Trắc nghiệm
  document.getElementById('m-lesson-q').textContent = lesson.quiz.question;
  const optsBox = document.getElementById('m-lesson-opts');
  optsBox.innerHTML = '';
  const fbBox = document.getElementById('m-lesson-feedback');
  fbBox.style.display = 'none';

  lesson.quiz.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'ff-mag-filter-btn';
    btn.style.width = '100%';
    btn.style.justifyContent = 'flex-start';
    btn.style.borderRadius = '12px';
    btn.innerHTML = `<b>${String.fromCharCode(65 + idx)}.</b> ${opt}`;

    btn.addEventListener('click', () => {
      if (currentQuizDone) return;
      currentQuizDone = true;

      if (idx === lesson.quiz.correct) {
        Sound.correct();
        triggerConfetti();
        btn.style.borderColor = '#10b981';
        btn.style.background = '#dcfce7';
        btn.style.color = '#15803d';
        fbBox.style.display = 'block';
        fbBox.style.background = '#dcfce7';
        fbBox.style.color = '#15803d';
        fbBox.innerHTML = `<b>✓ Chính xác!</b> ${lesson.quiz.explanation}`;
      } else {
        Sound.wrong();
        btn.style.borderColor = '#ef4444';
        btn.style.background = '#fee2e2';
        btn.style.color = '#b91c1c';
        fbBox.style.display = 'block';
        fbBox.style.background = '#fee2e2';
        fbBox.style.color = '#b91c1c';
        fbBox.innerHTML = `<b>Chưa chính xác:</b> ${lesson.quiz.explanation}`;
      }
    });

    optsBox.appendChild(btn);
  });

  document.getElementById('modal-lesson').classList.add('open');
}

function completeCurrentLessonAction() {
  if (!currentOpenLesson) return;
  Sound.victory();
  triggerConfetti();

  if (!appState.completedLessons.includes(currentOpenLesson.id)) {
    appState.completedLessons.push(currentOpenLesson.id);
    appState.xp += currentOpenLesson.xp;
    appState.streak += 1;
    saveState();
  }

  alert(`👑 Chúc mừng Nữ hoàng đã hoàn thành bài "${currentOpenLesson.title}"!\n✨ Nhận ngay +${currentOpenLesson.xp} XP và giúp Cây Tri Thức lớn mạnh!`);
  closeModal('modal-lesson');
  renderRoadmapView();
}

// ==========================================
// 5. VIEW 2: RENDER TẠP CHÍ BẮT TREND
// ==========================================
let currentMagFilter = 'all';

function renderMagazineView() {
  const grid = document.getElementById('mag-articles-grid');
  if (!grid) return;

  const filtered = MAGAZINE_ARTICLES.filter(art => {
    if (currentMagFilter === 'all') return true;
    return art.category === currentMagFilter;
  });

  grid.innerHTML = filtered.map(art => `
    <div class="ff-article-card" onclick="openArticleDetail('${art.id}')">
      <div class="ff-art-thumb-wrap">
        <img class="ff-art-thumb-img" src="${art.coverImg}" alt="${art.title}">
        <span class="ff-art-tag">${art.categoryIcon} ${art.categoryName}</span>
      </div>
      <div class="ff-art-body">
        <div>
          <h3 class="ff-art-title">${art.title}</h3>
          <p class="ff-art-desc">${art.summary}</p>
        </div>
        <div class="ff-art-footer">
          <span>⏱️ ${art.readTime}</span>
          <span class="ff-read-link">Đọc bài báo & Nghe nhạc →</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterMagCategory(cat, btn) {
  Sound.click();
  currentMagFilter = cat;
  document.querySelectorAll('.ff-mag-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderMagazineView();
}

function openArticleDetail(artId) {
  const art = MAGAZINE_ARTICLES.find(a => a.id === artId);
  if (!art) return;
  Sound.click();

  document.getElementById('m-art-tag').textContent = `${art.categoryIcon} ${art.categoryName}`;
  document.getElementById('m-art-title').textContent = art.title;
  document.getElementById('m-art-author').textContent = `✍️ ${art.author}`;
  document.getElementById('m-art-readtime').textContent = `⏱️ ${art.readTime}`;

  // Video YouTube nếu có
  const vBox = document.getElementById('m-art-video-box');
  const iframe = document.getElementById('m-art-iframe');
  if (art.youtubeId) {
    vBox.style.display = 'block';
    iframe.src = `https://www.youtube-nocookie.com/embed/${art.youtubeId}?rel=0`;
  } else {
    vBox.style.display = 'none';
    iframe.src = '';
  }

  // Toàn văn bài báo
  document.getElementById('m-art-html').innerHTML = art.contentHtml;

  // Từ vựng bài báo
  document.getElementById('m-art-vocab-list').innerHTML = art.vocabList.map(v => `
    <div style="background: #ffffff; border: 1px solid #bbf7d0; border-radius: 12px; padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between;">
      <div>
        <span style="font-weight: 800; color: #166534; font-size: 1.05rem;">${v.word}</span>
        <span style="font-family: monospace; color: #0d9488; margin: 0 0.35rem;">${v.ipa}</span>: 
        <span style="color: #1f2937; font-size: 0.95rem;">${v.meaning}</span>
      </div>
      <button class="ff-speech-circle" onclick="speakEnglish('${v.word.replace(/'/g, "\\'")}')">🔊</button>
    </div>
  `).join('');

  document.getElementById('modal-article').classList.add('open');
}

// ==========================================
// 6. VIEW 3: MINI-GAMES LUYỆN TẬP
// ==========================================
let cardIdx = 0;
let isFlipped = false;

function renderGamesView() {
  updateSimpleCard();
  initSpeedMatch();
}

function updateSimpleCard() {
  const item = ALL_VOCABULARY_POOL[cardIdx];
  isFlipped = false;
  document.getElementById('card-term').textContent = item.word;
  document.getElementById('card-phonetic').textContent = item.ipa;
  document.getElementById('card-idx-indicator').textContent = `${cardIdx + 1} / ${ALL_VOCABULARY_POOL.length}`;
}

function flipSimpleCard() {
  Sound.click();
  const item = ALL_VOCABULARY_POOL[cardIdx];
  isFlipped = !isFlipped;
  const termEl = document.getElementById('card-term');
  const phonEl = document.getElementById('card-phonetic');

  if (isFlipped) {
    termEl.textContent = item.vi;
    phonEl.textContent = `"${item.example}"`;
  } else {
    termEl.textContent = item.word;
    phonEl.textContent = item.ipa;
  }
}

function nextCardWord() {
  Sound.click();
  cardIdx = (cardIdx + 1) % ALL_VOCABULARY_POOL.length;
  updateSimpleCard();
}

function prevCardWord() {
  Sound.click();
  cardIdx = (cardIdx - 1 + ALL_VOCABULARY_POOL.length) % ALL_VOCABULARY_POOL.length;
  updateSimpleCard();
}

function speakCardWord() {
  const item = ALL_VOCABULARY_POOL[cardIdx];
  speakEnglish(item.word);
}

// Speed Matching 30s
let speedSec = 30;
let speedTimerId = null;
let activeTile = null;
let speedMatchedCount = 0;

function initSpeedMatch() {
  clearInterval(speedTimerId);
  speedSec = 30;
  activeTile = null;
  speedMatchedCount = 0;

  document.getElementById('speed-clock').textContent = '30s';
  document.getElementById('speed-counter-txt').textContent = 'Đã nối: 0 / 4';

  const subset = [...ALL_VOCABULARY_POOL].sort(() => 0.5 - Math.random()).slice(0, 4);
  const en = subset.map((s, idx) => ({ id: idx, type: 'en', text: s.word }));
  const vi = subset.map((s, idx) => ({ id: idx, type: 'vi', text: s.vi }));
  const all = [...en, ...vi].sort(() => 0.5 - Math.random());

  const grid = document.getElementById('speed-pairs-grid');
  grid.innerHTML = '';

  all.forEach(t => {
    const tile = document.createElement('div');
    tile.style.background = '#ffffff';
    tile.style.border = '2px solid var(--ff-border)';
    tile.style.borderRadius = '12px';
    tile.style.padding = '0.75rem 0.5rem';
    tile.style.textAlign = 'center';
    tile.style.fontWeight = '700';
    tile.style.fontSize = '0.9rem';
    tile.style.color = 'var(--ff-dark-green)';
    tile.style.cursor = 'pointer';
    tile.style.userSelect = 'none';
    tile.style.transition = 'all 0.2s';
    tile.textContent = t.text;
    tile.dataset.id = t.id;
    tile.dataset.type = t.type;

    tile.addEventListener('click', () => handleTilePick(tile));
    grid.appendChild(tile);
  });

  speedTimerId = setInterval(() => {
    speedSec--;
    document.getElementById('speed-clock').textContent = `${speedSec}s`;
    if (speedSec <= 0) {
      clearInterval(speedTimerId);
      Sound.wrong();
      document.getElementById('speed-counter-txt').innerHTML = '⏳ <b>Hết giờ!</b> Bấm "Chơi lại" nhé!';
    }
  }, 1000);
}

function handleTilePick(tile) {
  if (tile.dataset.matched || speedSec <= 0) return;
  Sound.click();

  if (!activeTile) {
    activeTile = tile;
    tile.style.borderColor = '#0d9488';
    tile.style.background = '#ccfbf1';
    return;
  }

  if (activeTile === tile) {
    tile.style.borderColor = 'var(--ff-border)';
    tile.style.background = '#ffffff';
    activeTile = null;
    return;
  }

  const prev = activeTile;

  if (prev.dataset.type === tile.dataset.type) {
    prev.style.borderColor = 'var(--ff-border)';
    prev.style.background = '#ffffff';
    activeTile = tile;
    tile.style.borderColor = '#0d9488';
    tile.style.background = '#ccfbf1';
    return;
  }

  if (prev.dataset.id === tile.dataset.id) {
    Sound.correct();
    prev.dataset.matched = 'true';
    tile.dataset.matched = 'true';
    prev.style.borderColor = '#22c55e';
    tile.style.borderColor = '#22c55e';
    prev.style.background = '#dcfce7';
    tile.style.background = '#dcfce7';
    prev.style.color = '#15803d';
    tile.style.color = '#15803d';
    activeTile = null;
    speedMatchedCount++;
    document.getElementById('speed-counter-txt').textContent = `Đã nối: ${speedMatchedCount} / 4`;

    if (speedMatchedCount >= 4) {
      clearInterval(speedTimerId);
      Sound.victory();
      triggerConfetti();
      document.getElementById('speed-counter-txt').innerHTML = '🎉 <b>XUẤT SẮC!</b> Hoàn thành 4/4!';
    }
  } else {
    Sound.wrong();
    prev.style.borderColor = '#ef4444';
    tile.style.borderColor = '#ef4444';
    prev.style.background = '#fee2e2';
    tile.style.background = '#fee2e2';
    setTimeout(() => {
      prev.style.borderColor = 'var(--ff-border)';
      tile.style.borderColor = 'var(--ff-border)';
      prev.style.background = '#ffffff';
      tile.style.background = '#ffffff';
      activeTile = null;
    }, 400);
  }
}

function restartSpeedMatch() {
  Sound.click();
  initSpeedMatch();
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('open');
  const iframe = document.getElementById('m-art-iframe');
  if (iframe) iframe.src = '';
}

// ==========================================
// 7. KHỞI TẠO TOÀN DIỆN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateStatsUI();
  renderRoadmapView();
  renderMagazineView();
  renderGamesView();

  // Đóng modal khi bấm ra ngoài
  ['modal-lesson', 'modal-article'].forEach(id => {
    document.getElementById(id).addEventListener('click', (e) => {
      if (e.target.id === id) closeModal(id);
    });
  });
});
