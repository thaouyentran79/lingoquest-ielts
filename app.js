/**
 * IELTS BEE 🐝 - APP CONTROLLER V2 (2026 EDITION)
 * Quản lý toàn bộ tính năng:
 *  - 20 chặng học IELTS chuyên sâu (100 câu hỏi trắc nghiệm có giải thích chi tiết)
 *  - 10 bản hit US-UK đầy đủ đục lỗ 8 vị trí + Giải mã idioms Speaking
 *  - 12 bài báo chuẩn IELTS Reading + 3 câu hỏi đọc hiểu kèm giải thích + RSS Realtime
 *  - Đấu trường Mini-games lọc theo 8 chủ đề của 116 từ vựng IELTS
 *  - Kho học liệu cá nhân & Công cụ soát bài viết IELTS Writing
 */

// ===================================================
// 1. TRẠNG THÁI NGƯỜI DÙNG & LƯU TRỮ LOCALSTORAGE
// ===================================================
const BEE_STORAGE_KEY = "ielts_bee_state_v2";

let beeState = {
  xp: 160,
  streak: 3,
  completedLessons: ["ielts-1"],
  activeView: "roadmap",
  currentSongIndex: 0,
  solvedGaps: {}, // { "song-1": [0, 1, 2] }
  solvedNewsQuizzes: {}, // { "news-fashion-1": { score: 3, total: 3 } }
  mySavedVocab: [
    { word: "Crucial", ipa: "/ˈkruː.ʃəl/", vi: "Cực kỳ quan trọng, sống còn", example: "Early preparation is crucial for achieving high IELTS scores." },
    { word: "Beneficial", ipa: "/ˌben.ɪˈfɪʃ.əl/", vi: "Có lợi, mang lại hiệu quả tốt", example: "Regular reading is beneficial for lexical acquisition." },
    { word: "Tackle", ipa: "/ˈtæk.əl/", vi: "Giải quyết, đối đầu xử lý vấn đề", example: "The municipality took bold steps to tackle traffic congestion." },
    { word: "Substantial", ipa: "/səbˈstæn.ʃəl/", vi: "Đáng kể, to lớn", example: "We noticed a substantial enhancement in reading fluency." },
    { word: "Paradigm shift", ipa: "/ˈpær.ə.daɪm ʃɪft/", vi: "Bước ngoặt tư duy mang tính cách mạng", example: "AI represents a paradigm shift in modern education." },
    { word: "Quiet luxury", ipa: "/ˈkwaɪ.ət ˈlʌk.ʃər.i/", vi: "Sự sang trọng thầm lặng, không phô trương", example: "Quiet luxury emphasizes bespoke craftsmanship over loud logos." }
  ]
};

function loadBeeState() {
  try {
    const saved = localStorage.getItem(BEE_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      beeState = { ...beeState, ...parsed };
      if (!Array.isArray(beeState.mySavedVocab)) beeState.mySavedVocab = [];
    }
  } catch (e) {
    console.warn("Khởi tạo trạng thái mặc định");
  }
}

function saveBeeState() {
  try {
    localStorage.setItem(BEE_STORAGE_KEY, JSON.stringify(beeState));
  } catch (e) {
    console.warn("Lỗi lưu state:", e);
  }
  updateGlobalStatsUI();
}

function updateGlobalStatsUI() {
  // Cập nhật streak & nhãn Nữ hoàng
  const streakEl = document.getElementById('nav-streak');
  if (streakEl) streakEl.textContent = `${beeState.streak} Ngày`;

  const userLabelEl = document.getElementById('nav-user-label');
  if (userLabelEl) userLabelEl.textContent = `Nữ hoàng (${beeState.xp} XP)`;

  // Tính tổng số bài học trong 4 giai đoạn
  let totalLessons = 0;
  if (typeof IELTS_ROADMAP !== 'undefined') {
    IELTS_ROADMAP.forEach(phase => totalLessons += phase.lessons.length);
  } else {
    totalLessons = 20;
  }
  const doneCount = beeState.completedLessons.length;
  const pct = Math.min(100, Math.round((doneCount / totalLessons) * 100));

  const lessonsCountEl = document.getElementById('stat-lessons-count');
  if (lessonsCountEl) lessonsCountEl.textContent = `${doneCount} / ${totalLessons}`;

  const vocabCountEl = document.getElementById('stat-vocab-count');
  if (vocabCountEl) vocabCountEl.textContent = `${beeState.mySavedVocab.length}`;

  const xpNumEl = document.getElementById('seed-xp-num');
  if (xpNumEl) xpNumEl.textContent = `${beeState.xp} XP`;

  const progPctEl = document.getElementById('seed-progress-pct');
  const barFillEl = document.getElementById('seed-bar-fill');
  if (progPctEl) progPctEl.textContent = `${pct}%`;
  if (barFillEl) barFillEl.style.width = `${pct}%`;

  // Nhãn số lượng từ đã lưu trong bộ chọn nguồn Mini-games
  const sourceCountEl = document.getElementById('source-saved-count');
  if (sourceCountEl) sourceCountEl.textContent = `${beeState.mySavedVocab.length}`;

  // Cấp độ Cây Tri Thức
  const treeTitleEl = document.getElementById('tree-level-title');
  if (treeTitleEl) {
    if (pct >= 80) treeTitleEl.textContent = "Cây Tri Thức: Đại Thụ Trĩu Quả 🌳🍎 (Cấp 5)";
    else if (pct >= 50) treeTitleEl.textContent = "Cây Tri Thức: Tươi Tốt Đơm Hoa 🌿🌸 (Cấp 4)";
    else if (pct >= 25) treeTitleEl.textContent = "Cây Tri Thức: Chồi Non Mạnh Mẽ 🌱 (Cấp 3)";
    else treeTitleEl.textContent = "Cây Tri Thức: Hạt Giống Nảy Mầm 🌱 (Cấp 2)";
  }
}

// ===================================================
// 2. HỆ THỐNG ÂM THANH WEB AUDIO & PHÁT ÂM TTS (100% FREE)
// ===================================================
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
  const usVoice = voices.find(v => v.lang.includes('en-US') || v.lang.includes('en_US'));
  if (usVoice) utt.voice = usVoice;
  window.speechSynthesis.speak(utt);
}

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
  }
}

// ===================================================
// 3. ĐIỀU HƯỚNG CHUYỂN TAB CHÍNH
// ===================================================
function switchBeeView(viewId) {
  SoundSystem.click();
  beeState.activeView = viewId;

  // Active link trên navbar
  document.querySelectorAll('.bee-nav-link').forEach(link => link.classList.remove('active'));
  const activeLink = document.getElementById(`nav-${viewId}`);
  if (activeLink) activeLink.classList.add('active');

  // Chuyển view
  ['roadmap', 'music', 'news', 'games', 'vault', 'tools'].forEach(id => {
    const sec = document.getElementById(`view-${id}`);
    if (sec) sec.style.display = (id === viewId) ? 'block' : 'none';
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Tải dữ liệu tương ứng
  if (viewId === 'roadmap') renderRoadmapSection();
  if (viewId === 'music') renderMusicGame();
  if (viewId === 'news') loadLiveNewsFeeds();
  if (viewId === 'games') loadMiniGamePool(document.getElementById('game-vocab-source').value || 'saved');
  if (viewId === 'vault') renderVaultTable();
}

// ===================================================
// 4. VIEW 1: LỘ TRÌNH IELTS 20 CHẶNG HỌC CHUYÊN SÂU
// ===================================================
function renderRoadmapSection() {
  const wrapper = document.getElementById('roadmap-cards-wrapper');
  if (!wrapper || typeof IELTS_ROADMAP === 'undefined') return;
  wrapper.innerHTML = '';

  let allLinear = [];
  IELTS_ROADMAP.forEach(phase => phase.lessons.forEach(l => allLinear.push(l)));

  IELTS_ROADMAP.forEach(phase => {
    const block = document.createElement('div');
    block.className = 'bee-milestone-wrap';

    block.innerHTML = `
      <div class="bee-milestone-head">
        <span class="bee-band-pill" style="background: ${phase.badgeColor};">${phase.bandTitle}</span>
        <span style="font-size: 0.92rem; color: var(--bee-text-muted); font-weight: 600;">• ${phase.bandDesc}</span>
      </div>
      <div class="bee-lessons-grid" id="grid-${phase.bandId}"></div>
    `;

    wrapper.appendChild(block);
    const grid = block.querySelector(`#grid-${phase.bandId}`);

    phase.lessons.forEach(lesson => {
      const isDone = beeState.completedLessons.includes(lesson.id);
      const currIdx = allLinear.findIndex(l => l.id === lesson.id);
      const prevLesson = currIdx > 0 ? allLinear[currIdx - 1] : null;
      const isUnlocked = currIdx === 0 || (prevLesson && beeState.completedLessons.includes(prevLesson.id));
      const isLocked = !isUnlocked && !isDone;

      let cardClass = 'bee-lesson-card';
      let btnLabel = 'Học bài';
      let btnClass = 'bee-btn-main';

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
        <div style="display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1rem;">
          <div style="width: 48px; height: 48px; border-radius: 14px; background: var(--bee-honey-light); border: 1px solid var(--bee-honey-border); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">
            ${lesson.skillIcon}
          </div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--bee-forest); margin-bottom: 0.25rem;">${lesson.title}</h4>
            <p style="font-size: 0.85rem; color: var(--bee-text-muted);">${lesson.summary}</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #f1f5f0; padding-top: 0.85rem; margin-top: 0.5rem;">
          <span style="font-size: 0.82rem; font-weight: 700; color: #64748b;">⏱️ ${lesson.duration} • ✨ +${lesson.xp} XP</span>
          <button class="${btnClass}">${btnLabel}</button>
        </div>
      `;

      card.addEventListener('click', () => {
        SoundSystem.click();
        if (isLocked) {
          alert("Nữ hoàng hãy hoàn thành các bài học phía trước để mở khóa chặng này nhé!");
          return;
        }
        openLessonModal(lesson);
      });

      grid.appendChild(card);
    });
  });
}

// Cửa sổ học bài IELTS chuyên sâu
let activeLessonObj = null;
let currentLessonQuizUserAnswers = {}; // { 0: 1, 1: 2, ... }
let currentLessonQuizSubmitted = false;

function openLessonModal(lesson) {
  activeLessonObj = lesson;
  currentLessonQuizUserAnswers = {};
  currentLessonQuizSubmitted = false;

  document.getElementById('m-lesson-skill-tag').textContent = `${lesson.skillIcon} ${lesson.skill}`;
  document.getElementById('m-lesson-name').textContent = lesson.title;
  document.getElementById('m-lesson-html-content').innerHTML = lesson.content;

  // 1. Render Bảng từ vựng mở rộng 6-8 từ
  const vocabBox = document.getElementById('m-lesson-vocab-list');
  vocabBox.innerHTML = lesson.vocab.map(v => `
    <div style="background: #ffffff; border: 1px solid var(--bee-border); border-radius: 14px; padding: 0.85rem 1.15rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
      <div style="flex-grow: 1;">
        <span style="font-weight: 800; color: var(--bee-forest); font-size: 1.05rem;">${v.word}</span>
        <span style="font-family: monospace; color: var(--bee-amber); margin: 0 0.4rem;">${v.ipa}</span>
        <span style="font-size: 0.78rem; font-weight: 700; color: #0284c7; background: #e0f2fe; padding: 0.15rem 0.5rem; border-radius: 6px;">${v.pos || 'acad'}</span>: 
        <span style="font-size: 0.92rem; color: #1f2937; font-weight: 600;">${v.meaning}</span>
        <div style="font-size: 0.82rem; color: var(--bee-text-muted); font-style: italic; margin-top: 0.25rem;">Ví dụ: "${v.example}"</div>
        ${v.synonyms ? `<div style="font-size: 0.78rem; color: #059669; font-weight: 700; margin-top: 0.2rem;">Synonyms: ${v.synonyms}</div>` : ''}
      </div>
      <div style="display: flex; gap: 0.4rem; flex-shrink: 0;">
        <button class="btn-icon-action" onclick="speakEnglish('${v.word.replace(/'/g, "\\'")}')" title="Phát âm chuẩn">🔊</button>
        <button class="btn-icon-action" onclick="addSingleWordToVault('${v.word.replace(/'/g, "\\'")}', '${v.ipa}', '${v.meaning.replace(/'/g, "\\'")}', '${v.example.replace(/'/g, "\\'")}')" title="Lưu vào kho từ">⭐</button>
      </div>
    </div>
  `).join('');

  // 2. Render 5 câu hỏi trắc nghiệm thực hành
  const quizContainer = document.getElementById('m-lesson-multi-quiz-container');
  quizContainer.innerHTML = '';

  const quizzes = lesson.quizzes || (lesson.quiz ? [lesson.quiz] : []);

  quizzes.forEach((qItem, qIdx) => {
    const qCard = document.createElement('div');
    qCard.className = 'multi-quiz-item';
    qCard.id = `lesson-q-card-${qIdx}`;

    qCard.innerHTML = `
      <div class="multi-quiz-q-title">
        <span style="background: var(--bee-honey-light); color: var(--bee-dark-amber); border: 1px solid var(--bee-honey-border); border-radius: 8px; padding: 0.2rem 0.6rem; font-size: 0.85rem; font-weight: 800;">Câu ${qIdx + 1}</span>
        <span>${qItem.question}</span>
      </div>
      <div class="multi-quiz-options" id="lesson-q-opts-${qIdx}">
        ${qItem.options.map((opt, oIdx) => `
          <button type="button" class="quiz-option-btn" id="l-opt-${qIdx}-${oIdx}" onclick="selectLessonQuizChoice(${qIdx}, ${oIdx})">
            <b>${String.fromCharCode(65 + oIdx)}.</b> <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback-explanation" id="lesson-q-exp-${qIdx}" style="display: none;"></div>
    `;

    quizContainer.appendChild(qCard);
  });

  // Reset nút nộp và tóm tắt điểm
  const summaryBox = document.getElementById('m-lesson-quiz-score-summary');
  summaryBox.style.display = 'none';

  const btnSubmit = document.getElementById('btn-submit-lesson-multi-quiz');
  btnSubmit.style.display = 'inline-block';
  btnSubmit.textContent = '✓ Nộp Bài Kiểm Tra & Chấm Điểm';

  const btnFinish = document.getElementById('btn-finish-lesson-action');
  // Nếu đã từng hoàn thành bài này thì cho phép bấm, nếu chưa thì yêu cầu làm quiz trước
  const isAlreadyDone = beeState.completedLessons.includes(lesson.id);
  btnFinish.disabled = !isAlreadyDone;
  btnFinish.style.opacity = isAlreadyDone ? '1' : '0.6';
  btnFinish.style.cursor = isAlreadyDone ? 'pointer' : 'not-allowed';

  document.getElementById('modal-lesson-dialog').classList.add('open');
}

function selectLessonQuizChoice(qIdx, oIdx) {
  if (currentLessonQuizSubmitted) return;
  SoundSystem.click();
  currentLessonQuizUserAnswers[qIdx] = oIdx;

  // Cập nhật giao diện lựa chọn
  const parent = document.getElementById(`lesson-q-opts-${qIdx}`);
  if (!parent) return;
  parent.querySelectorAll('.quiz-option-btn').forEach(btn => btn.classList.remove('selected'));
  const targetBtn = document.getElementById(`l-opt-${qIdx}-${oIdx}`);
  if (targetBtn) targetBtn.classList.add('selected');
}

function submitCurrentLessonMultiQuiz() {
  if (!activeLessonObj || currentLessonQuizSubmitted) return;
  const quizzes = activeLessonObj.quizzes || (activeLessonObj.quiz ? [activeLessonObj.quiz] : []);

  // Kiểm tra xem đã trả lời hết chưa
  const answeredCount = Object.keys(currentLessonQuizUserAnswers).length;
  if (answeredCount < quizzes.length) {
    alert(`Nữ hoàng hãy trả lời đầy đủ ${quizzes.length} câu hỏi trước khi nộp bài nhé! (Hiện đã làm: ${answeredCount}/${quizzes.length})`);
    return;
  }

  currentLessonQuizSubmitted = true;
  let correctCount = 0;

  quizzes.forEach((qItem, qIdx) => {
    const userChoice = currentLessonQuizUserAnswers[qIdx];
    const isCorrect = (userChoice === qItem.correct);
    if (isCorrect) correctCount++;

    const chosenBtn = document.getElementById(`l-opt-${qIdx}-${userChoice}`);
    const correctBtn = document.getElementById(`l-opt-${qIdx}-${qItem.correct}`);
    const expBox = document.getElementById(`lesson-q-exp-${qIdx}`);

    if (chosenBtn) {
      chosenBtn.classList.remove('selected');
      if (isCorrect) {
        chosenBtn.classList.add('correct-ans');
      } else {
        chosenBtn.classList.add('wrong-ans');
        if (correctBtn) correctBtn.classList.add('correct-ans');
      }
    }

    if (expBox) {
      expBox.style.display = 'block';
      if (isCorrect) {
        expBox.style.background = '#dcfce7';
        expBox.style.color = '#15803d';
        expBox.innerHTML = `<b>✓ Chính xác tuyệt vời!</b> ${qItem.explanation}`;
      } else {
        expBox.style.background = '#fee2e2';
        expBox.style.color = '#b91c1c';
        expBox.innerHTML = `<b>Giải thích chi tiết:</b> ${qItem.explanation}`;
      }
    }
  });

  // Hiển thị kết quả tổng quan
  const summaryBox = document.getElementById('m-lesson-quiz-score-summary');
  summaryBox.style.display = 'block';

  const earnedXP = correctCount * 10;
  beeState.xp += earnedXP;
  saveBeeState();

  if (correctCount >= Math.ceil(quizzes.length * 0.6)) {
    SoundSystem.victory();
    triggerConfetti();
    summaryBox.style.background = '#dcfce7';
    summaryBox.style.color = '#15803d';
    summaryBox.style.border = '1.5px solid #86efac';
    summaryBox.innerHTML = `
      <div style="font-size: 1.35rem;">🎉 Chúc mừng Nữ hoàng! Đạt <b>${correctCount} / ${quizzes.length}</b> câu đúng (+${earnedXP} XP)!</div>
      <div style="font-size: 0.9rem; margin-top: 0.35rem; font-weight: 500;">Nữ hoàng hãy bấm nút <b>"✓ Hoàn Thành Bài & Nhận XP"</b> bên dưới để mở khóa chặng tiếp theo nhé!</div>
    `;
  } else {
    SoundSystem.wrong();
    summaryBox.style.background = '#fef3c7';
    summaryBox.style.color = '#92400e';
    summaryBox.style.border = '1.5px solid #fde68a';
    summaryBox.innerHTML = `
      <div style="font-size: 1.25rem;">Nữ hoàng đúng <b>${correctCount} / ${quizzes.length}</b> câu (+${earnedXP} XP).</div>
      <div style="font-size: 0.9rem; margin-top: 0.35rem; font-weight: 500;">Hãy xem kỹ các phần giải thích chi tiết phía trên để rút kinh nghiệm nhé!</div>
    `;
  }

  // Mở khóa nút hoàn thành bài
  const btnFinish = document.getElementById('btn-finish-lesson-action');
  btnFinish.disabled = false;
  btnFinish.style.opacity = '1';
  btnFinish.style.cursor = 'pointer';

  document.getElementById('btn-submit-lesson-multi-quiz').style.display = 'none';
}

function finishCurrentIELTSLesson() {
  if (!activeLessonObj) return;
  SoundSystem.victory();
  triggerConfetti();

  if (!beeState.completedLessons.includes(activeLessonObj.id)) {
    beeState.completedLessons.push(activeLessonObj.id);
    beeState.xp += activeLessonObj.xp;
    beeState.streak += 1;
    saveBeeState();
  }

  alert(`👑 Chúc mừng Nữ hoàng đã chính thức hoàn thành chặng học "${activeLessonObj.title}"!\n✨ Tích lũy thêm +${activeLessonObj.xp} XP vào Cây Tri Thức!`);
  closeModal('modal-lesson-dialog');
  renderRoadmapSection();
}

// ===================================================
// 5. VIEW 2: GAME "NGHE NHẠC ĐIỀN TỪ" 10 BẢN HIT US-UK
// ===================================================
let currentActiveBlankIdx = 0;

function renderMusicGame() {
  const songTabs = document.getElementById('song-picker-tabs');
  if (!songTabs || typeof MUSIC_GAMES_DATA === 'undefined') return;

  // Render 10 nút bài hát
  songTabs.innerHTML = MUSIC_GAMES_DATA.map((s, idx) => `
    <button class="cloze-opt-pill ${idx === beeState.currentSongIndex ? 'active' : ''}" onclick="selectSongByIndex(${idx})">
      🎵 ${s.title}
    </button>
  `).join('');

  const song = MUSIC_GAMES_DATA[beeState.currentSongIndex];
  document.getElementById('current-song-title').textContent = song.title;
  document.getElementById('current-song-artist').textContent = `${song.artist} • ${song.genre}`;

  // Iframe Youtube
  const iframe = document.getElementById('music-yt-frame');
  const targetSrc = `https://www.youtube-nocookie.com/embed/${song.youtubeId}?rel=0`;
  if (iframe.src !== targetSrc) iframe.src = targetSrc;

  // Trạng thái đã giải của bài này
  if (!beeState.solvedGaps[song.id]) {
    beeState.solvedGaps[song.id] = [];
  }
  const solved = beeState.solvedGaps[song.id];

  // Render các câu đục lỗ
  const linesBox = document.getElementById('lyrics-lines-box');
  linesBox.innerHTML = song.lyricsGaps.map((gap, gIdx) => {
    const isSolved = solved.includes(gIdx);
    return `
      <div class="cloze-line">
        <span>${gap.prefix.replace(/\n/g, '<br>')}</span>
        <span class="cloze-blank-btn ${isSolved ? 'solved' : ''}" id="gap-btn-${gIdx}" onclick="clickGapBlank(${gIdx})">
          ${isSolved ? gap.target : `[ Chỗ trống ${gIdx + 1} ? ]`}
        </span>
        <span>${gap.suffix.replace(/\n/g, '<br>')}</span>
        <div style="font-size: 0.8rem; color: var(--bee-amber); margin-top: 0.3rem;">💡 Gợi ý: ${gap.hint}</div>
      </div>
    `;
  }).join('');

  document.getElementById('cloze-progress-badge').textContent = `Đã điền: ${solved.length} / ${song.lyricsGaps.length}`;

  // Render ngân hàng từ lựa chọn
  renderClozeOptionPills(song);

  // Render phần GIẢI MÃ TỪ LÓNG & IDIOMS ÁP DỤNG IELTS SPEAKING
  renderSongSpeakingIdioms(song);
}

function selectSongByIndex(idx) {
  SoundSystem.click();
  beeState.currentSongIndex = idx;
  currentActiveBlankIdx = 0;
  saveBeeState();
  renderMusicGame();
}

function renderClozeOptionPills(song) {
  const optionsBox = document.getElementById('cloze-options-pills');
  let allOpts = [];
  song.lyricsGaps.forEach(g => allOpts.push(...g.options));
  allOpts = [...new Set(allOpts)].sort(() => 0.5 - Math.random());

  optionsBox.innerHTML = allOpts.map(opt => `
    <button class="cloze-opt-pill" onclick="chooseClozeWord('${opt.replace(/'/g, "\\'")}')">
      ${opt}
    </button>
  `).join('');
}

function clickGapBlank(gIdx) {
  SoundSystem.click();
  currentActiveBlankIdx = gIdx;
  const song = MUSIC_GAMES_DATA[beeState.currentSongIndex];
  const gap = song.lyricsGaps[gIdx];
  alert(`🎧 Nữ hoàng đang điền từ cho Chỗ trống ${gIdx + 1}:\nGợi ý: ${gap.hint}\nHãy bấm chọn một từ trong danh sách bên dưới nhé!`);
}

function chooseClozeWord(selectedWord) {
  const song = MUSIC_GAMES_DATA[beeState.currentSongIndex];
  const targetGap = song.lyricsGaps[currentActiveBlankIdx];
  if (!targetGap) return;

  if (selectedWord.toLowerCase() === targetGap.target.toLowerCase()) {
    // ĐIỀN ĐÚNG!
    SoundSystem.correct();
    triggerConfetti();

    if (!beeState.solvedGaps[song.id].includes(currentActiveBlankIdx)) {
      beeState.solvedGaps[song.id].push(currentActiveBlankIdx);
      beeState.xp += 15;
      saveBeeState();
    }

    const gapEl = document.getElementById(`gap-btn-${currentActiveBlankIdx}`);
    if (gapEl) {
      gapEl.classList.add('solved');
      gapEl.textContent = targetGap.target;
    }

    const solvedCount = beeState.solvedGaps[song.id].length;
    document.getElementById('cloze-progress-badge').textContent = `Đã điền: ${solvedCount} / ${song.lyricsGaps.length}`;

    if (solvedCount >= song.lyricsGaps.length) {
      SoundSystem.victory();
      alert(`🎉 XUẤT SẮC! Nữ hoàng đã điền trọn vẹn toàn bộ lời bài hát "${song.title}" (+${song.xpReward} XP)!`);
    } else {
      // Tìm chỗ trống tiếp theo chưa điền
      let nextBlank = -1;
      for (let i = 0; i < song.lyricsGaps.length; i++) {
        if (!beeState.solvedGaps[song.id].includes(i)) {
          nextBlank = i;
          break;
        }
      }
      if (nextBlank !== -1) currentActiveBlankIdx = nextBlank;
    }
  } else {
    SoundSystem.wrong();
    alert(`😅 Chưa đúng rồi, từ "${selectedWord}" không khớp với giai điệu câu này. Nữ hoàng hãy nghe lại và chọn từ khác nhé!`);
  }
}

function renderSongSpeakingIdioms(song) {
  const grid = document.getElementById('song-speaking-idioms-grid');
  if (!grid) return;

  const idioms = song.speakingIdioms || [];
  grid.innerHTML = idioms.map(item => `
    <div class="song-idiom-card">
      <div class="song-idiom-title">
        <span>✨</span> <b>${item.idiom}</b>
      </div>
      <div class="song-idiom-meaning">${item.meaning}</div>
      <div style="font-size: 0.8rem; color: #b45309; font-weight: 700; margin-bottom: 0.35rem;">
        🎯 Áp dụng: ${item.speakingContext}
      </div>
      <div class="song-idiom-speaking-box">
        <b>Câu mẫu Band 8.0:</b> "${item.sampleAnswer}"
      </div>
      <div style="margin-top: 0.75rem; display: flex; justify-content: flex-end; gap: 0.4rem;">
        <button class="btn-icon-action" onclick="speakEnglish('${item.sampleAnswer.replace(/'/g, "\\'")}')" title="Nghe câu mẫu">🔊</button>
        <button class="btn-icon-action" onclick="addSingleWordToVault('${item.idiom.replace(/'/g, "\\'")}', '', '${item.meaning.replace(/'/g, "\\'")}', '${item.sampleAnswer.replace(/'/g, "\\'")}')" title="Lưu idiom vào kho từ">⭐</button>
      </div>
    </div>
  `).join('');
}

function saveAllCurrentSongVocab() {
  const song = MUSIC_GAMES_DATA[beeState.currentSongIndex];
  let added = 0;

  song.vocabToSave.forEach(item => {
    const exists = beeState.mySavedVocab.some(v => v.word.toLowerCase() === item.word.toLowerCase());
    if (!exists) {
      beeState.mySavedVocab.push(item);
      added++;
    }
  });

  if (added > 0) {
    beeState.xp += added * 10;
    saveBeeState();
    SoundSystem.victory();
    triggerConfetti();
    alert(`🐝 Tuyệt vời! Đã thêm ${added} cụm từ đắt giá của bài "${song.title}" vào Kho từ của Nữ hoàng (+${added * 10} XP)!`);
  } else {
    alert("Nữ hoàng đã lưu đầy đủ các từ của bài hát này rồi ạ!");
  }
}

// ===================================================
// 6. VIEW 3: BẢN TIN BẮT TREND 12 BÀI ĐỌC IELTS READING
// ===================================================
let currentNewsCat = 'all';
let loadedRSSArticles = (typeof DEFAULT_NEWS_ARTICLES !== 'undefined') ? [...DEFAULT_NEWS_ARTICLES] : [];

async function loadLiveNewsFeeds() {
  renderNewsGrid();
  fetchRealTimeRSS();
}

async function fetchRealTimeRSS() {
  if (typeof RSS_SOURCES === 'undefined') return;
  try {
    for (const source of RSS_SOURCES) {
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.feedUrl)}`;
      const res = await fetch(apiUrl);
      if (res.ok) {
        const data = await res.json();
        if (data && data.items && data.items.length > 0) {
          const topItem = data.items[0];
          if (!loadedRSSArticles.some(a => a.title === topItem.title)) {
            loadedRSSArticles.unshift({
              id: `rss-${Date.now()}-${Math.random()}`,
              category: source.category,
              categoryName: source.name,
              categoryIcon: source.icon,
              title: topItem.title,
              author: topItem.author || source.name,
              published: "Vừa cập nhật",
              coverImg: topItem.thumbnail || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
              summary: topItem.description ? topItem.description.replace(/<[^>]+>/g, '').substring(0, 150) + "..." : "Bản tin thời sự tiếng Anh mới nhất.",
              content: topItem.content ? topItem.content.replace(/<[^>]+>/g, ' ') : topItem.description.replace(/<[^>]+>/g, ' '),
              readingQuiz: [
                {
                  question: "What is the primary topic discussed in this newly updated report?",
                  options: [
                    "Recent industrial innovations and global impact",
                    "Traditional folklore storytelling",
                    "Ancient archeological discoveries",
                    "Weather forecasts for maritime shipping"
                  ],
                  correct: 0,
                  explanation: "The article highlights contemporary industry developments and technological transformations."
                }
              ]
            });
            renderNewsGrid();
          }
        }
      }
    }
  } catch (e) {
    console.log("Sử dụng kho 12 bài báo chuẩn:", e);
  }
}

function refreshRSSFeeds() {
  SoundSystem.click();
  alert("🔄 Đang quét các nguồn tin RSS thời trang & công nghệ mới nhất...");
  fetchRealTimeRSS();
}

function renderNewsGrid() {
  const grid = document.getElementById('rss-news-grid');
  if (!grid) return;

  const filtered = loadedRSSArticles.filter(art => {
    if (currentNewsCat === 'all') return true;
    return art.category === currentNewsCat;
  });

  grid.innerHTML = filtered.map(art => `
    <div class="news-card-item" onclick="openNewsArticleModal('${art.id}')">
      <div class="news-thumb-wrap">
        <img class="news-thumb-img" src="${art.coverImg}" alt="${art.title}">
        <span class="news-tag-badge">${art.categoryIcon} ${art.categoryName}</span>
      </div>
      <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
        <div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--bee-forest); line-height: 1.45; margin-bottom: 0.5rem;">${art.title}</h3>
          <p style="font-size: 0.88rem; color: var(--bee-text-muted); line-height: 1.6; margin-bottom: 1rem;">${art.summary}</p>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #f1f5f0; padding-top: 0.85rem; font-size: 0.82rem; color: #64748b;">
          <span>⏱️ ${art.published}</span>
          <span style="color: var(--bee-amber); font-weight: 700;">Đọc & Luyện IELTS Reading →</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterNewsCategory(cat, btn) {
  SoundSystem.click();
  currentNewsCat = cat;
  document.querySelectorAll('.cloze-opt-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderNewsGrid();
}

// Cửa sổ đọc bản tin phóng to & 3 câu hỏi đọc hiểu chuẩn IELTS
let activeNewsArticle = null;
let currentNewsQuizUserAnswers = {};
let currentNewsQuizSubmitted = false;

function openNewsArticleModal(artId) {
  const art = loadedRSSArticles.find(a => a.id === artId);
  if (!art) return;
  SoundSystem.click();
  activeNewsArticle = art;
  currentNewsQuizUserAnswers = {};
  currentNewsQuizSubmitted = false;

  document.getElementById('m-news-tag').textContent = `${art.categoryIcon} ${art.categoryName}`;
  document.getElementById('m-news-title').textContent = art.title;
  document.getElementById('m-news-author').textContent = `✍️ ${art.author}`;
  document.getElementById('m-news-pub').textContent = `📅 ${art.published}`;

  // Bôi đậm từ vựng học thuật B2-C1
  const highlightedContent = highlightAcademicWordsInText(art.content);
  document.getElementById('m-news-body').innerHTML = highlightedContent;

  // Render 3 câu hỏi đọc hiểu chuẩn format IELTS
  const quizList = document.getElementById('m-news-quiz-list');
  const quizzes = art.readingQuiz || [];

  quizList.innerHTML = quizzes.map((qItem, qIdx) => `
    <div class="multi-quiz-item" id="news-q-card-${qIdx}">
      <div class="multi-quiz-q-title">
        <span style="background: #dcfce7; color: #166534; border: 1px solid #86efac; border-radius: 8px; padding: 0.2rem 0.6rem; font-size: 0.85rem; font-weight: 800;">Câu ${qIdx + 1}</span>
        <span>${qItem.question}</span>
      </div>
      <div class="multi-quiz-options" id="news-q-opts-${qIdx}">
        ${qItem.options.map((opt, oIdx) => `
          <button type="button" class="quiz-option-btn" id="news-opt-${qIdx}-${oIdx}" onclick="selectNewsQuizChoice(${qIdx}, ${oIdx})">
            <b>${String.fromCharCode(65 + oIdx)}.</b> <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback-explanation" id="news-q-exp-${qIdx}" style="display: none;"></div>
    </div>
  `).join('');

  const resultBox = document.getElementById('m-news-quiz-result');
  resultBox.style.display = 'none';

  const btnSubmit = document.getElementById('btn-submit-news-reading-quiz');
  btnSubmit.style.display = 'inline-block';
  btnSubmit.textContent = '✓ Kiểm Tra Đáp Án Đọc Hiểu (+60 XP)';

  document.getElementById('modal-news-dialog').classList.add('open');
}

function selectNewsQuizChoice(qIdx, oIdx) {
  if (currentNewsQuizSubmitted) return;
  SoundSystem.click();
  currentNewsQuizUserAnswers[qIdx] = oIdx;

  const parent = document.getElementById(`news-q-opts-${qIdx}`);
  if (!parent) return;
  parent.querySelectorAll('.quiz-option-btn').forEach(btn => btn.classList.remove('selected'));
  const targetBtn = document.getElementById(`news-opt-${qIdx}-${oIdx}`);
  if (targetBtn) targetBtn.classList.add('selected');
}

function submitNewsReadingQuiz() {
  if (!activeNewsArticle || currentNewsQuizSubmitted) return;
  const quizzes = activeNewsArticle.readingQuiz || [];

  const answeredCount = Object.keys(currentNewsQuizUserAnswers).length;
  if (answeredCount < quizzes.length) {
    alert(`Nữ hoàng hãy trả lời đủ ${quizzes.length} câu hỏi đọc hiểu trước khi nộp nhé! (Hiện đã làm: ${answeredCount}/${quizzes.length})`);
    return;
  }

  currentNewsQuizSubmitted = true;
  let correctCount = 0;

  quizzes.forEach((qItem, qIdx) => {
    const userChoice = currentNewsQuizUserAnswers[qIdx];
    const isCorrect = (userChoice === qItem.correct);
    if (isCorrect) correctCount++;

    const chosenBtn = document.getElementById(`news-opt-${qIdx}-${userChoice}`);
    const correctBtn = document.getElementById(`news-opt-${qIdx}-${qItem.correct}`);
    const expBox = document.getElementById(`news-q-exp-${qIdx}`);

    if (chosenBtn) {
      chosenBtn.classList.remove('selected');
      if (isCorrect) {
        chosenBtn.classList.add('correct-ans');
      } else {
        chosenBtn.classList.add('wrong-ans');
        if (correctBtn) correctBtn.classList.add('correct-ans');
      }
    }

    if (expBox) {
      expBox.style.display = 'block';
      if (isCorrect) {
        expBox.style.background = '#dcfce7';
        expBox.style.color = '#15803d';
        expBox.innerHTML = `<b>✓ Đáp án chuẩn xác!</b> ${qItem.explanation}`;
      } else {
        expBox.style.background = '#fee2e2';
        expBox.style.color = '#b91c1c';
        expBox.innerHTML = `<b>Giải thích:</b> ${qItem.explanation}`;
      }
    }
  });

  const resultBox = document.getElementById('m-news-quiz-result');
  resultBox.style.display = 'block';

  const earnedXP = correctCount * 20;
  beeState.xp += earnedXP;
  saveBeeState();

  if (correctCount === quizzes.length) {
    SoundSystem.victory();
    triggerConfetti();
    resultBox.style.background = '#dcfce7';
    resultBox.style.color = '#15803d';
    resultBox.style.border = '1.5px solid #86efac';
    resultBox.innerHTML = `🎉 TUYỆT VỜI! Nữ hoàng đã trả lời đúng toàn bộ ${quizzes.length} / ${quizzes.length} câu hỏi đọc hiểu (+${earnedXP} XP)!`;
  } else {
    SoundSystem.correct();
    resultBox.style.background = '#fef3c7';
    resultBox.style.color = '#92400e';
    resultBox.style.border = '1.5px solid #fde68a';
    resultBox.innerHTML = `Nữ hoàng trả lời đúng <b>${correctCount} / ${quizzes.length}</b> câu hỏi đọc hiểu (+${earnedXP} XP).`;
  }

  document.getElementById('btn-submit-news-reading-quiz').style.display = 'none';
}

// Bôi đậm từ vựng học thuật B2-C1
function highlightAcademicWordsInText(rawText) {
  let processed = rawText;
  if (typeof ACADEMIC_VOCAB_DB === 'undefined') return processed.replace(/\n/g, '<br><br>');

  const vocabKeys = Object.keys(ACADEMIC_VOCAB_DB).sort((a, b) => b.length - a.length);

  vocabKeys.forEach(term => {
    const regex = new RegExp(`\\b(${term})\\b`, 'gi');
    processed = processed.replace(regex, (match) => {
      return `<span class="academic-highlight" onclick="showAcademicPopover(event, '${term.toLowerCase().replace(/'/g, "\\'")}')">${match}</span>`;
    });
  });

  return processed.replace(/\n/g, '<br><br>');
}

// Popover hiển thị nghĩa & nút phát âm khi chạm vào từ highlight
let activePopoverWord = "";

function showAcademicPopover(e, term) {
  e.stopPropagation();
  SoundSystem.click();

  const data = ACADEMIC_VOCAB_DB[term];
  if (!data) return;

  activePopoverWord = term;

  document.getElementById('popover-word').textContent = term.charAt(0).toUpperCase() + term.slice(1);
  document.getElementById('popover-ipa').textContent = data.ipa || '';
  document.getElementById('popover-meaning').textContent = data.vi || data.meaning || '';

  const popover = document.getElementById('academic-vocab-popover');
  popover.style.display = 'block';

  const clickX = e.clientX;
  const clickY = e.clientY;
  const popWidth = 310;
  const popHeight = 170;

  let leftPos = Math.min(clickX, window.innerWidth - popWidth - 20);
  let topPos = clickY + 20;

  if (topPos + popHeight > window.innerHeight) {
    topPos = clickY - popHeight - 10;
  }

  popover.style.left = `${Math.max(15, leftPos)}px`;
  popover.style.top = `${topPos}px`;
}

function closeVocabPopover() {
  document.getElementById('academic-vocab-popover').style.display = 'none';
}

function speakPopoverWord() {
  if (activePopoverWord) speakEnglish(activePopoverWord);
}

function saveCurrentPopoverWord() {
  if (!activePopoverWord) return;
  const data = ACADEMIC_VOCAB_DB[activePopoverWord];
  if (!data) return;

  addSingleWordToVault(activePopoverWord, data.ipa || '', data.vi || data.meaning || '', `Bài báo chuẩn IELTS Reading.`);
  closeVocabPopover();
}

function addSingleWordToVault(word, ipa, vi, example) {
  const exists = beeState.mySavedVocab.some(v => v.word.toLowerCase() === word.toLowerCase());
  if (!exists) {
    beeState.mySavedVocab.unshift({ word, ipa, vi, example });
    beeState.xp += 10;
    saveBeeState();
    SoundSystem.correct();
    triggerConfetti();
    alert(`🐝 Đã lưu từ "${word}" vào Kho từ của Nữ hoàng (+10 XP)!`);
  } else {
    alert(`Từ "${word}" đã có trong Kho từ của Nữ hoàng rồi ạ!`);
  }
}

// ===================================================
// 7. VIEW 4: ĐẤU TRƯỜNG MINI-GAMES 116 TỪ THEO 8 CHỦ ĐỀ
// ===================================================
let currentMiniGamePool = [];
let gameCardIdx = 0;
let isGameCardFlipped = false;

function changeGameSource(sourceType) {
  SoundSystem.click();
  loadMiniGamePool(sourceType);
}

function loadMiniGamePool(sourceType = 'saved') {
  if (sourceType === 'saved') {
    if (beeState.mySavedVocab.length > 0) {
      currentMiniGamePool = [...beeState.mySavedVocab];
    } else if (typeof MASTER_VOCABULARY_POOL !== 'undefined') {
      currentMiniGamePool = [...MASTER_VOCABULARY_POOL];
    }
  } else if (sourceType === 'all_ielts') {
    if (typeof MASTER_VOCABULARY_POOL !== 'undefined') {
      currentMiniGamePool = [...MASTER_VOCABULARY_POOL];
    }
  } else {
    // Lọc theo chủ đề cụ thể (tech, environment, business, ...)
    if (typeof MASTER_VOCABULARY_POOL !== 'undefined') {
      currentMiniGamePool = MASTER_VOCABULARY_POOL.filter(v => v.category === sourceType);
    }
  }

  if (currentMiniGamePool.length === 0) {
    // Dự phòng an toàn
    currentMiniGamePool = [
      { word: "Crucial", ipa: "/ˈkruː.ʃəl/", vi: "Cực kỳ quan trọng, sống còn", example: "Crucial element." },
      { word: "Beneficial", ipa: "/ˌben.ɪˈfɪʃ.əl/", vi: "Có lợi, mang lại hiệu quả tốt", example: "Beneficial habit." }
    ];
  }

  gameCardIdx = 0;
  updateGameCardUI();
  setupSpeedBoard();
}

function updateGameCardUI() {
  if (currentMiniGamePool.length === 0) return;
  const item = currentMiniGamePool[gameCardIdx];
  isGameCardFlipped = false;

  document.getElementById('card-display-word').textContent = item.word;
  document.getElementById('card-display-sub').textContent = item.ipa;
  document.getElementById('game-card-counter').textContent = `${gameCardIdx + 1} / ${currentMiniGamePool.length}`;
}

function flipGameCard() {
  SoundSystem.click();
  if (currentMiniGamePool.length === 0) return;
  const item = currentMiniGamePool[gameCardIdx];
  isGameCardFlipped = !isGameCardFlipped;

  const wordEl = document.getElementById('card-display-word');
  const subEl = document.getElementById('card-display-sub');

  if (isGameCardFlipped) {
    wordEl.textContent = item.vi;
    subEl.textContent = `"${item.example}"`;
  } else {
    wordEl.textContent = item.word;
    subEl.textContent = item.ipa;
  }
}

function nextGameCard() {
  SoundSystem.click();
  if (currentMiniGamePool.length === 0) return;
  gameCardIdx = (gameCardIdx + 1) % currentMiniGamePool.length;
  updateGameCardUI();
}

function prevGameCard() {
  SoundSystem.click();
  if (currentMiniGamePool.length === 0) return;
  gameCardIdx = (gameCardIdx - 1 + currentMiniGamePool.length) % currentMiniGamePool.length;
  updateGameCardUI();
}

function speakActiveGameCard() {
  if (currentMiniGamePool.length === 0) return;
  speakEnglish(currentMiniGamePool[gameCardIdx].word);
}

// ---------------------------------------------------
// Mini-game 2: Nối từ siêu tốc 30s
// ---------------------------------------------------
let speedTimerInterval = null;
let speedTimeLeft = 30;
let speedSelectedTile = null; // { type: 'en'|'vi', val: '...', id: ... }
let speedMatchedCount = 0;
let speedActivePairs = [];

function setupSpeedBoard() {
  clearInterval(speedTimerInterval);
  speedTimeLeft = 30;
  speedMatchedCount = 0;
  speedSelectedTile = null;

  document.getElementById('speed-timer-clock').textContent = `${speedTimeLeft}s`;
  document.getElementById('speed-status-lbl').textContent = `Đã nối: 0 / 4`;

  // Chọn 4 từ ngẫu nhiên trong pool
  const shuffledPool = [...currentMiniGamePool].sort(() => 0.5 - Math.random());
  speedActivePairs = shuffledPool.slice(0, 4);

  // Tạo các ô thẻ
  let tiles = [];
  speedActivePairs.forEach((pair, idx) => {
    tiles.push({ id: idx, type: 'en', text: pair.word });
    tiles.push({ id: idx, type: 'vi', text: pair.vi });
  });

  // Xáo trộn các ô
  tiles.sort(() => 0.5 - Math.random());

  const board = document.getElementById('speed-tiles-board');
  board.innerHTML = tiles.map((tile, tIdx) => `
    <button class="cloze-opt-pill" id="speed-tile-${tIdx}" style="padding: 0.75rem 0.6rem; border-radius: 12px; font-size: 0.88rem; text-align: center;" onclick="clickSpeedTile(${tIdx}, ${tile.id}, '${tile.type}', '${tile.text.replace(/'/g, "\\'")}')">
      ${tile.text}
    </button>
  `).join('');

  // Đếm ngược 30s
  speedTimerInterval = setInterval(() => {
    speedTimeLeft--;
    document.getElementById('speed-timer-clock').textContent = `${speedTimeLeft}s`;
    if (speedTimeLeft <= 0) {
      clearInterval(speedTimerInterval);
      SoundSystem.wrong();
      alert(`⏰ Hết giờ rồi! Nữ hoàng đã ghép đúng ${speedMatchedCount} / 4 cặp từ.`);
    }
  }, 1000);
}

function restartSpeedBoard() {
  SoundSystem.click();
  setupSpeedBoard();
}

function clickSpeedTile(tIdx, pairId, type, text) {
  SoundSystem.click();
  const btn = document.getElementById(`speed-tile-${tIdx}`);

  if (btn.classList.contains('solved')) return;

  if (!speedSelectedTile) {
    // Chọn ô đầu tiên
    speedSelectedTile = { tIdx, pairId, type, text, btn };
    btn.style.borderColor = 'var(--bee-amber)';
    btn.style.background = '#fef3c7';
    btn.style.color = 'var(--bee-dark-amber)';
    return;
  }

  // Đã chọn ô thứ hai
  if (speedSelectedTile.tIdx === tIdx) {
    // Bấm lại chính ô đó để hủy chọn
    btn.style.borderColor = '';
    btn.style.background = '';
    btn.style.color = '';
    speedSelectedTile = null;
    return;
  }

  // So sánh 2 ô
  if (speedSelectedTile.pairId === pairId && speedSelectedTile.type !== type) {
    // GHÉP ĐÚNG CẶP!
    SoundSystem.correct();
    speedMatchedCount++;

    btn.classList.add('solved');
    btn.style.borderColor = '#10b981';
    btn.style.background = '#dcfce7';
    btn.style.color = '#15803d';

    speedSelectedTile.btn.classList.add('solved');
    speedSelectedTile.btn.style.borderColor = '#10b981';
    speedSelectedTile.btn.style.background = '#dcfce7';
    speedSelectedTile.btn.style.color = '#15803d';

    document.getElementById('speed-status-lbl').textContent = `Đã nối: ${speedMatchedCount} / 4`;
    speedSelectedTile = null;

    if (speedMatchedCount === 4) {
      clearInterval(speedTimerInterval);
      SoundSystem.victory();
      triggerConfetti();
      beeState.xp += 40;
      saveBeeState();
      alert(`⚡ XUẤT SẮC! Nữ hoàng đã hoàn thành xuất sắc thử thách Nối từ siêu tốc trước thời hạn (+40 XP)!`);
    }
  } else {
    // GHÉP SAI
    SoundSystem.wrong();
    btn.style.borderColor = '#ef4444';
    btn.style.background = '#fee2e2';
    speedSelectedTile.btn.style.borderColor = '#ef4444';
    speedSelectedTile.btn.style.background = '#fee2e2';

    const prevTile = speedSelectedTile;
    setTimeout(() => {
      btn.style.borderColor = '';
      btn.style.background = '';
      btn.style.color = '';
      prevTile.btn.style.borderColor = '';
      prevTile.btn.style.background = '';
      prevTile.btn.style.color = '';
    }, 450);

    speedSelectedTile = null;
  }
}

// ===================================================
// 8. VIEW 5: HỌC LIỆU (KHO TỪ VỰNG CÁ NHÂN ĐÃ LƯU)
// ===================================================
function renderVaultTable() {
  const tbody = document.getElementById('vault-tbody');
  const emptyState = document.getElementById('vault-empty-state');
  const tableWrap = document.getElementById('vault-table-wrapper');

  if (!tbody) return;

  if (beeState.mySavedVocab.length === 0) {
    emptyState.style.display = 'block';
    tableWrap.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';
  tableWrap.style.display = 'block';

  tbody.innerHTML = beeState.mySavedVocab.map((item, idx) => `
    <tr>
      <td><b style="color: var(--bee-forest); font-size: 1.05rem;">${item.word}</b></td>
      <td style="font-family: monospace; color: var(--bee-amber); font-weight: 600;">${item.ipa || ''}</td>
      <td style="font-weight: 600; color: #1f2937;">${item.vi}</td>
      <td style="font-size: 0.85rem; color: var(--bee-text-muted); font-style: italic;">"${item.example || ''}"</td>
      <td style="text-align: center;">
        <button class="btn-icon-action" onclick="speakEnglish('${item.word.replace(/'/g, "\\'")}')" title="Phát âm">🔊</button>
      </td>
      <td style="text-align: center;">
        <button class="btn-icon-action" onclick="removeWordFromVault(${idx})" style="background: #fee2e2; border-color: #fca5a5; color: #b91c1c;" title="Xóa từ">🗑️</button>
      </td>
    </tr>
  `).join('');
}

function removeWordFromVault(idx) {
  SoundSystem.click();
  const word = beeState.mySavedVocab[idx].word;
  if (confirm(`Nữ hoàng có chắc muốn xóa từ "${word}" khỏi Kho từ không?`)) {
    beeState.mySavedVocab.splice(idx, 1);
    saveBeeState();
    renderVaultTable();
  }
}

// ===================================================
// 9. VIEW 6: CÔNG CỤ SOÁT BÀI VIẾT IELTS WRITING
// ===================================================
function analyzeWritingText() {
  const textarea = document.getElementById('writing-input-area');
  const text = textarea ? textarea.value.trim() : '';

  const words = text ? text.split(/\s+/).filter(w => w.length > 0) : [];
  const sentences = text ? text.split(/[.!?]+/).filter(s => s.trim().length > 0) : [];

  const wordCount = words.length;
  const sentenceCount = sentences.length;
  const readingTime = Math.ceil(wordCount / 180);

  document.getElementById('word-count-val').textContent = wordCount;
  document.getElementById('sentence-count-val').textContent = sentenceCount;
  document.getElementById('reading-time-val').textContent = `${readingTime}m`;

  const fbBox = document.getElementById('writing-status-feedback');
  if (!fbBox) return;

  if (wordCount === 0) {
    fbBox.style.background = '#e0f2fe';
    fbBox.style.color = '#0369a1';
    fbBox.textContent = 'Chưa có nội dung bài viết.';
  } else if (wordCount < 150) {
    fbBox.style.background = '#fee2e2';
    fbBox.style.color = '#b91c1c';
    fbBox.innerHTML = `⚠️ <b>${wordCount} từ:</b> Bài viết chưa đạt độ dài tối thiểu cho Task 1 (cần ít nhất 150 từ).`;
  } else if (wordCount < 250) {
    fbBox.style.background = '#fef3c7';
    fbBox.style.color = '#92400e';
    fbBox.innerHTML = `✓ <b>${wordCount} từ:</b> Đã đủ chuẩn Task 1 (150 từ), nhưng chưa đủ chuẩn Task 2 (cần ít nhất 250 từ).`;
  } else {
    fbBox.style.background = '#dcfce7';
    fbBox.style.color = '#15803d';
    fbBox.innerHTML = `🎉 <b>${wordCount} từ:</b> Độ dài hoàn hảo cho bài luận IELTS Writing Task 2 (Band 7.0+)!`;
  }
}

function clearWritingText() {
  SoundSystem.click();
  const textarea = document.getElementById('writing-input-area');
  if (textarea) {
    textarea.value = '';
    analyzeWritingText();
  }
}

// Tra cứu từ điển nhanh
function searchQuickDictionary() {
  const input = document.getElementById('dict-search-input');
  const term = input ? input.value.trim().toLowerCase() : '';
  const resultBox = document.getElementById('dict-search-result');
  if (!term || !resultBox) return;

  SoundSystem.click();

  // Tìm trong ACADEMIC_VOCAB_DB hoặc MASTER_VOCABULARY_POOL
  let found = null;
  if (typeof ACADEMIC_VOCAB_DB !== 'undefined' && ACADEMIC_VOCAB_DB[term]) {
    found = {
      word: term,
      ipa: ACADEMIC_VOCAB_DB[term].ipa,
      vi: ACADEMIC_VOCAB_DB[term].vi,
      example: "Từ vựng học thuật B2-C1."
    };
  } else if (typeof MASTER_VOCABULARY_POOL !== 'undefined') {
    found = MASTER_VOCABULARY_POOL.find(v => v.word.toLowerCase() === term);
  }

  if (found) {
    resultBox.style.display = 'block';
    resultBox.style.background = '#ffffff';
    resultBox.style.border = '1.5px solid var(--bee-honey-border)';
    resultBox.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <h4 style="font-size: 1.2rem; font-weight: 800; color: var(--bee-forest);">${found.word}</h4>
          <span style="font-family: monospace; color: var(--bee-amber); font-weight: 700;">${found.ipa || ''}</span>
          <p style="font-size: 0.95rem; font-weight: 600; color: #1f2937; margin: 0.35rem 0;">${found.vi}</p>
          <p style="font-size: 0.85rem; color: var(--bee-text-muted); font-style: italic;">"${found.example || ''}"</p>
        </div>
        <div style="display: flex; gap: 0.4rem;">
          <button class="btn-icon-action" onclick="speakEnglish('${found.word.replace(/'/g, "\\'")}')" title="Phát âm">🔊</button>
          <button class="btn-icon-action" onclick="addSingleWordToVault('${found.word.replace(/'/g, "\\'")}', '${found.ipa || ''}', '${found.vi.replace(/'/g, "\\'")}', '${found.example || ''}')" title="Lưu vào kho từ">⭐</button>
        </div>
      </div>
    `;
  } else {
    resultBox.style.display = 'block';
    resultBox.style.background = '#fef3c7';
    resultBox.style.border = '1px solid #fde68a';
    resultBox.innerHTML = `<span style="color: #92400e; font-weight: 600;">Không tìm thấy từ "${term}" trong từ điển nhanh. Nữ hoàng hãy kiểm tra lại chính tả nhé!</span>`;
  }
}

// ===================================================
// 10. ĐÓNG MODAL CHUNG
// ===================================================
function closeModal(modalId) {
  SoundSystem.click();
  const m = document.getElementById(modalId);
  if (m) m.classList.remove('open');
}

// Bấm phím Escape để đóng modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.bee-modal-overlay').forEach(m => m.classList.remove('open'));
    closeVocabPopover();
  }
});

// Đóng popover khi bấm ra ngoài
window.addEventListener('click', (e) => {
  const popover = document.getElementById('academic-vocab-popover');
  if (popover && !popover.contains(e.target) && !e.target.classList.contains('academic-highlight')) {
    popover.style.display = 'none';
  }
});

// ===================================================
// 11. KHỞI CHẠY ỨNG DỤNG KHI TẢI XONG TRANG
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  loadBeeState();
  updateGlobalStatsUI();
  renderRoadmapSection();
  loadMiniGamePool('saved');

  // Gắn sự kiện gõ phím cho bộ đếm bài viết
  const writingArea = document.getElementById('writing-input-area');
  if (writingArea) {
    writingArea.addEventListener('input', analyzeWritingText);
  }

  // Gắn sự kiện Enter cho ô tìm từ điển
  const dictInput = document.getElementById('dict-search-input');
  if (dictInput) {
    dictInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') searchQuickDictionary();
    });
  }
});
