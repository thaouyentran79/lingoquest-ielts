/**
 * IELTS BEE 🐝 - APP LOGIC & FEATURES CONTROLLER
 * Tự động hóa 100%, kết nối RSS miễn phí, Game nghe nhạc điền từ,
 * Liên kết Kho từ vựng vào Mini-games, Tra từ điển & Soát bài viết IELTS Writing.
 */

// ==========================================
// 1. QUẢN LÝ TRẠNG THÁI NGƯỜI DÙNG (LOCALSTORAGE)
// ==========================================
const BEE_STORAGE_KEY = "ielts_bee_master_v1";

let beeState = {
  xp: 160,
  streak: 3,
  completedLessons: ["ielts-1"],
  activeView: "roadmap",
  currentSongId: "song-1",
  solvedGaps: {}, // { "song-1": [0, 1] }
  mySavedVocab: [
    { word: "Crucial", ipa: "/ˈkruː.ʃəl/", vi: "Cực kỳ quan trọng, sống còn", example: "Early preparation is crucial for IELTS." },
    { word: "Beneficial", ipa: "/ˌben.ɪˈfɪʃ.əl/", vi: "Có lợi, mang lại hiệu quả tốt", example: "Reading daily is immensely beneficial." },
    { word: "Tackle", ipa: "/ˈtæk.əl/", vi: "Giải quyết, xử lý vấn đề", example: "The government took steps to tackle inflation." },
    { word: "Substantial", ipa: "/səbˈstæn.ʃəl/", vi: "Đáng kể, to lớn", example: "We noticed a substantial improvement." }
  ]
};

function loadBeeState() {
  try {
    const saved = localStorage.getItem(BEE_STORAGE_KEY);
    if (saved) {
      beeState = { ...beeState, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("Dùng trạng thái khởi đầu");
  }
}

function saveBeeState() {
  try {
    localStorage.setItem(BEE_STORAGE_KEY, JSON.stringify(beeState));
  } catch (e) {
    console.warn("Lỗi lưu:", e);
  }
  updateGlobalStatsUI();
}

// Cập nhật số liệu thật lên thanh menu & Hero banner
function updateGlobalStatsUI() {
  document.getElementById('nav-streak').textContent = `${beeState.streak} Ngày`;
  document.getElementById('nav-user-label').textContent = `Nữ hoàng (${beeState.xp} XP)`;

  // Số bài học thực tế
  let totalLessons = 0;
  IELTS_ROADMAP.forEach(m => totalLessons += m.lessons.length);
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

  // Cập nhật nhãn chọn nguồn từ trong Mini-game
  const sourceCountEl = document.getElementById('source-saved-count');
  if (sourceCountEl) sourceCountEl.textContent = `${beeState.mySavedVocab.length}`;
}

// ==========================================
// 2. HỆ THỐNG ÂM THANH & GIỌNG ĐỌC BẢN XỨ (100% FREE)
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

// ==========================================
// 3. ĐIỀU HƯỚNG CHUYỂN TAB CHÍNH
// ==========================================
function switchBeeView(viewId) {
  SoundSystem.click();
  beeState.activeView = viewId;

  // Cập nhật tab active trên navbar
  document.querySelectorAll('.bee-nav-link').forEach(link => link.classList.remove('active'));
  const activeLink = document.getElementById(`nav-${viewId}`);
  if (activeLink) activeLink.classList.add('active');

  // Ẩn hiện các view section
  ['roadmap', 'music', 'news', 'games', 'vault', 'tools'].forEach(id => {
    const sec = document.getElementById(`view-${id}`);
    if (sec) sec.style.display = (id === viewId) ? 'block' : 'none';
  });

  // Tự động cuộn lên đầu trang
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Tải dữ liệu riêng của từng tab
  if (viewId === 'vault') renderVaultTable();
  if (viewId === 'music') renderMusicGame();
  if (viewId === 'news') loadLiveNewsFeeds();
}

// ==========================================
// 4. VIEW 1: LỘ TRÌNH IELTS (ROADMAP)
// ==========================================
function renderRoadmapSection() {
  const wrapper = document.getElementById('roadmap-cards-wrapper');
  if (!wrapper) return;
  wrapper.innerHTML = '';

  let allLinear = [];
  IELTS_ROADMAP.forEach(m => m.lessons.forEach(l => allLinear.push(l)));

  IELTS_ROADMAP.forEach(milestone => {
    const block = document.createElement('div');
    block.className = 'bee-milestone-wrap';

    block.innerHTML = `
      <div class="bee-milestone-head">
        <span class="bee-band-pill" style="background: ${milestone.badgeColor};">${milestone.bandTitle}</span>
        <span style="font-size: 0.92rem; color: var(--bee-text-muted); font-weight: 600;">• ${milestone.bandDesc}</span>
      </div>
      <div class="bee-lessons-grid" id="grid-${milestone.bandId}"></div>
    `;

    wrapper.appendChild(block);
    const grid = block.querySelector(`#grid-${milestone.bandId}`);

    milestone.lessons.forEach(lesson => {
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
          alert("Nữ hoàng hãy hoàn thành bài học phía trước để mở khóa nhé!");
          return;
        }
        openLessonModal(lesson);
      });

      grid.appendChild(card);
    });
  });
}

// Cửa sổ học bài IELTS
let activeLessonObj = null;
let activeQuizAnswered = false;

function openLessonModal(lesson) {
  activeLessonObj = lesson;
  activeQuizAnswered = false;

  document.getElementById('m-lesson-skill-tag').textContent = `${lesson.skillIcon} ${lesson.skill}`;
  document.getElementById('m-lesson-name').textContent = lesson.title;
  document.getElementById('m-lesson-html-content').innerHTML = lesson.content;

  // Nạp từ vựng của bài
  const vocabBox = document.getElementById('m-lesson-vocab-list');
  vocabBox.innerHTML = lesson.vocab.map(v => `
    <div style="background: #ffffff; border: 1px solid var(--bee-border); border-radius: 12px; padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between;">
      <div>
        <span style="font-weight: 800; color: var(--bee-forest); font-size: 1.05rem;">${v.word}</span>
        <span style="font-family: monospace; color: var(--bee-amber); margin: 0 0.4rem;">${v.ipa}</span>: 
        <span style="font-size: 0.9rem; color: #1f2937;">${v.meaning}</span>
        <div style="font-size: 0.82rem; color: var(--bee-text-muted); font-style: italic; margin-top: 0.2rem;">"${v.example}"</div>
      </div>
      <div style="display: flex; gap: 0.4rem;">
        <button class="btn-icon-action" onclick="speakEnglish('${v.word.replace(/'/g, "\\'")}')" title="Phát âm">🔊</button>
        <button class="btn-icon-action" onclick="addSingleWordToVault('${v.word.replace(/'/g, "\\'")}', '${v.ipa}', '${v.meaning.replace(/'/g, "\\'")}', '${v.example.replace(/'/g, "\\'")}')" title="Lưu vào kho từ">⭐</button>
      </div>
    </div>
  `).join('');

  // Trắc nghiệm củng cố
  document.getElementById('m-lesson-quiz-q').textContent = lesson.quiz.question;
  const optBox = document.getElementById('m-lesson-quiz-choices');
  optBox.innerHTML = '';
  const fbBox = document.getElementById('m-lesson-quiz-msg');
  fbBox.style.display = 'none';

  lesson.quiz.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'cloze-opt-pill';
    btn.style.width = '100%';
    btn.style.textAlign = 'left';
    btn.style.padding = '0.65rem 1rem';
    btn.style.borderRadius = '12px';
    btn.innerHTML = `<b>${String.fromCharCode(65 + idx)}.</b> ${opt}`;

    btn.addEventListener('click', () => {
      if (activeQuizAnswered) return;
      activeQuizAnswered = true;

      if (idx === lesson.quiz.correct) {
        SoundSystem.correct();
        triggerConfetti();
        btn.style.borderColor = '#10b981';
        btn.style.background = '#dcfce7';
        btn.style.color = '#15803d';
        fbBox.style.display = 'block';
        fbBox.style.background = '#dcfce7';
        fbBox.style.color = '#15803d';
        fbBox.innerHTML = `<b>✓ Chính xác tuyệt vời!</b> ${lesson.quiz.explanation}`;
      } else {
        SoundSystem.wrong();
        btn.style.borderColor = '#ef4444';
        btn.style.background = '#fee2e2';
        btn.style.color = '#b91c1c';
        fbBox.style.display = 'block';
        fbBox.style.background = '#fee2e2';
        fbBox.style.color = '#b91c1c';
        fbBox.innerHTML = `<b>Chưa chính xác:</b> ${lesson.quiz.explanation}`;
      }
    });

    optBox.appendChild(btn);
  });

  document.getElementById('modal-lesson-dialog').classList.add('open');
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

  alert(`👑 Chúc mừng Nữ hoàng đã hoàn thành bài "${activeLessonObj.title}"!\n✨ Nhận ngay +${activeLessonObj.xp} XP!`);
  closeModal('modal-lesson-dialog');
  renderRoadmapSection();
}

// ==========================================
// 5. FEATURE 1: GAME "NGHE NHẠC ĐIỀN TỪ"
// ==========================================
let currentSongIndex = 0;
let currentActiveBlankIdx = 0;

function renderMusicGame() {
  const songTabs = document.getElementById('song-picker-tabs');
  if (!songTabs) return;

  // Render các nút chọn bài hát
  songTabs.innerHTML = MUSIC_GAMES_DATA.map((s, idx) => `
    <button class="cloze-opt-pill ${idx === currentSongIndex ? 'active' : ''}" onclick="selectSongByIndex(${idx})">
      🎵 ${s.title}
    </button>
  `).join('');

  const song = MUSIC_GAMES_DATA[currentSongIndex];
  document.getElementById('current-song-title').textContent = song.title;
  document.getElementById('current-song-artist').textContent = `${song.artist} • ${song.genre}`;

  // Iframe Youtube
  const iframe = document.getElementById('music-yt-frame');
  const targetSrc = `https://www.youtube-nocookie.com/embed/${song.youtubeId}?rel=0`;
  if (iframe.src !== targetSrc) iframe.src = targetSrc;

  // Trạng thái đã điền của bài này
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
        <span>${gap.prefix}</span>
        <span class="cloze-blank-btn ${isSolved ? 'solved' : ''}" id="gap-btn-${gIdx}" onclick="clickGapBlank(${gIdx})">
          ${isSolved ? gap.target : `[ Điền từ ${gIdx + 1} ? ]`}
        </span>
        <span>${gap.suffix}</span>
        <div style="font-size: 0.8rem; color: var(--bee-amber); margin-top: 0.3rem;">💡 Gợi ý: ${gap.hint}</div>
      </div>
    `;
  }).join('');

  document.getElementById('cloze-progress-badge').textContent = `Đã điền: ${solved.length} / ${song.lyricsGaps.length}`;

  // Render ngân hàng từ lựa chọn
  renderClozeOptionPills(song);
}

function selectSongByIndex(idx) {
  SoundSystem.click();
  currentSongIndex = idx;
  currentActiveBlankIdx = 0;
  renderMusicGame();
}

function renderClozeOptionPills(song) {
  const optionsBox = document.getElementById('cloze-options-pills');
  // Gom tất cả các options của các câu trong bài hát lại và xáo trộn
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
  const song = MUSIC_GAMES_DATA[currentSongIndex];
  const gap = song.lyricsGaps[gIdx];
  alert(`🎧 Nữ hoàng đang điền từ cho câu ${gIdx + 1}:\nGợi ý: ${gap.hint}\nHãy bấm chọn một từ trong danh sách bên dưới nhé!`);
}

function chooseClozeWord(selectedWord) {
  const song = MUSIC_GAMES_DATA[currentSongIndex];
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

    // Chuyển sang câu trống tiếp theo
    if (solvedCount >= song.lyricsGaps.length) {
      SoundSystem.victory();
      alert(`🎉 XUẤT SẮC! Nữ hoàng đã điền trọn vẹn toàn bộ lời bài hát "${song.title}" (+${song.xpReward} XP)!`);
    } else {
      currentActiveBlankIdx = (currentActiveBlankIdx + 1) % song.lyricsGaps.length;
    }
  } else {
    // ĐIỀN SAI
    SoundSystem.wrong();
    alert(`😅 Chưa đúng rồi, từ "${selectedWord}" không khớp với giai điệu câu này. Nữ hoàng hãy nghe lại và chọn từ khác nhé!`);
  }
}

// Lưu tất cả từ vựng bài hát vào Kho từ
function saveAllCurrentSongVocab() {
  const song = MUSIC_GAMES_DATA[currentSongIndex];
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

// ==========================================
// 6. FEATURE 2: BẢN TIN RSS & HIGHLIGHT TỪ VỰNG B2-C1
// ==========================================
let currentNewsCat = 'all';
let loadedRSSArticles = [...DEFAULT_NEWS_ARTICLES];

async function loadLiveNewsFeeds() {
  const grid = document.getElementById('rss-news-grid');
  if (!grid) return;

  // Thử kết nối API RSS to JSON miễn phí (không cần API key)
  // Nếu có mạng sẽ lấy bài mới nhất, nếu lỗi sẽ dùng ngay DEFAULT_NEWS_ARTICLES
  renderNewsGrid();

  // Gọi bất đồng bộ nền để cập nhật nếu có mạng
  fetchRealTimeRSS();
}

async function fetchRealTimeRSS() {
  try {
    for (const source of RSS_SOURCES) {
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.feedUrl)}`;
      const res = await fetch(apiUrl);
      if (res.ok) {
        const data = await res.json();
        if (data && data.items && data.items.length > 0) {
          const topItem = data.items[0];
          // Kiểm tra xem đã có chưa
          if (!loadedRSSArticles.some(a => a.title === topItem.title)) {
            loadedRSSArticles.unshift({
              id: `rss-${Date.now()}-${Math.random()}`,
              category: source.category,
              categoryName: source.name,
              categoryIcon: source.icon,
              title: topItem.title,
              author: topItem.author || source.name,
              published: "Vừa cập nhật hôm nay",
              coverImg: topItem.thumbnail || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
              summary: topItem.description ? topItem.description.replace(/<[^>]+>/g, '').substring(0, 150) + "..." : "Bản tin thời sự tiếng Anh mới nhất.",
              content: topItem.content ? topItem.content.replace(/<[^>]+>/g, ' ') : topItem.description.replace(/<[^>]+>/g, ' ')
            });
            renderNewsGrid();
          }
        }
      }
    }
  } catch (e) {
    console.log("Dùng tin bài dự phòng chất lượng cao:", e);
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
          <span style="color: var(--bee-amber); font-weight: 700;">Đọc & Bắt từ vựng →</span>
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

// Mở bản tin phóng to & Tự động bôi đậm từ vựng B2-C1
function openNewsArticleModal(artId) {
  const art = loadedRSSArticles.find(a => a.id === artId);
  if (!art) return;
  SoundSystem.click();

  document.getElementById('m-news-tag').textContent = `${art.categoryIcon} ${art.categoryName}`;
  document.getElementById('m-news-title').textContent = art.title;
  document.getElementById('m-news-author').textContent = `✍️ ${art.author}`;
  document.getElementById('m-news-pub').textContent = `📅 ${art.published}`;

  // Tự động quét và bôi đậm từ vựng B2-C1
  const highlightedContent = highlightAcademicWordsInText(art.content);
  document.getElementById('m-news-body').innerHTML = highlightedContent;

  document.getElementById('modal-news-dialog').classList.add('open');
}

// Thuật toán quét và highlight từ học thuật
function highlightAcademicWordsInText(rawText) {
  let processed = rawText;

  // Sắp xếp các cụm từ dài trước, từ đơn sau
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
  document.getElementById('popover-ipa').textContent = data.ipa;
  document.getElementById('popover-meaning').textContent = data.vi;

  const popover = document.getElementById('academic-vocab-popover');
  popover.style.display = 'block';

  // Định vị popover gần vị trí bấm
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

  addSingleWordToVault(activePopoverWord, data.ipa, data.vi, `Encountered in modern news articles.`);
  closeVocabPopover();
}

// Thêm từ đơn lẻ vào Kho từ
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

// ==========================================
// 7. FEATURE 3: LIÊN KẾT KHO TỪ VÀO MINI-GAMES
// ==========================================
let currentMiniGamePool = [];
let gameCardIdx = 0;
let isGameCardFlipped = false;

function changeGameSource(sourceType) {
  SoundSystem.click();
  loadMiniGamePool(sourceType);
}

function loadMiniGamePool(sourceType = 'saved') {
  if (sourceType === 'saved' && beeState.mySavedVocab.length > 0) {
    currentMiniGamePool = [...beeState.mySavedVocab];
  } else {
    // Nếu chưa lưu từ nào, lấy từ vựng các bài học IELTS
    currentMiniGamePool = [];
    IELTS_ROADMAP.forEach(m => m.lessons.forEach(l => currentMiniGamePool.push(...l.vocab.map(v => ({
      word: v.word,
      ipa: v.ipa,
      vi: v.meaning,
      example: v.example
    })))));
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
  const item = currentMiniGamePool[gameCardIdx];
  speakEnglish(item.word);
}

// Speed Matching 30s với Kho từ động
let speedSecLeft = 30;
let speedTimerHandle = null;
let activePickedTile = null;
let speedDonePairs = 0;

function setupSpeedBoard() {
  clearInterval(speedTimerHandle);
  speedSecLeft = 30;
  activePickedTile = null;
  speedDonePairs = 0;

  document.getElementById('speed-timer-clock').textContent = '30s';
  document.getElementById('speed-status-lbl').textContent = 'Đã nối: 0 / 4';

  const sample = [...currentMiniGamePool].sort(() => 0.5 - Math.random()).slice(0, 4);
  const enTiles = sample.map((s, idx) => ({ id: idx, type: 'en', text: s.word }));
  const viTiles = sample.map((s, idx) => ({ id: idx, type: 'vi', text: s.vi }));
  const mixed = [...enTiles, ...viTiles].sort(() => 0.5 - Math.random());

  const board = document.getElementById('speed-tiles-board');
  board.innerHTML = '';

  mixed.forEach(t => {
    const tile = document.createElement('div');
    tile.style.background = '#ffffff';
    tile.style.border = '2px solid var(--bee-border)';
    tile.style.borderRadius = '12px';
    tile.style.padding = '0.75rem 0.5rem';
    tile.style.textAlign = 'center';
    tile.style.fontWeight = '700';
    tile.style.fontSize = '0.88rem';
    tile.style.color = 'var(--bee-forest)';
    tile.style.cursor = 'pointer';
    tile.style.userSelect = 'none';
    tile.style.transition = 'all 0.2s';
    tile.textContent = t.text;
    tile.dataset.id = t.id;
    tile.dataset.type = t.type;

    tile.addEventListener('click', () => handleSpeedTilePick(tile));
    board.appendChild(tile);
  });

  speedTimerHandle = setInterval(() => {
    speedSecLeft--;
    document.getElementById('speed-timer-clock').textContent = `${speedSecLeft}s`;
    if (speedSecLeft <= 0) {
      clearInterval(speedTimerHandle);
      SoundSystem.wrong();
      document.getElementById('speed-status-lbl').innerHTML = '⏳ <b>Hết giờ!</b> Thử lại nhé!';
    }
  }, 1000);
}

function handleSpeedTilePick(tile) {
  if (tile.dataset.matched || speedSecLeft <= 0) return;
  SoundSystem.click();

  if (!activePickedTile) {
    activePickedTile = tile;
    tile.style.borderColor = 'var(--bee-amber)';
    tile.style.background = 'var(--bee-honey-light)';
    return;
  }

  if (activePickedTile === tile) {
    tile.style.borderColor = 'var(--bee-border)';
    tile.style.background = '#ffffff';
    activePickedTile = null;
    return;
  }

  const prev = activePickedTile;

  if (prev.dataset.type === tile.dataset.type) {
    prev.style.borderColor = 'var(--bee-border)';
    prev.style.background = '#ffffff';
    activePickedTile = tile;
    tile.style.borderColor = 'var(--bee-amber)';
    tile.style.background = 'var(--bee-honey-light)';
    return;
  }

  if (prev.dataset.id === tile.dataset.id) {
    SoundSystem.correct();
    prev.dataset.matched = 'true';
    tile.dataset.matched = 'true';
    prev.style.borderColor = '#16a34a';
    tile.style.borderColor = '#16a34a';
    prev.style.background = '#dcfce7';
    tile.style.background = '#dcfce7';
    prev.style.color = '#15803d';
    tile.style.color = '#15803d';
    activePickedTile = null;
    speedDonePairs++;
    document.getElementById('speed-status-lbl').textContent = `Đã nối: ${speedDonePairs} / 4`;

    if (speedDonePairs >= 4) {
      clearInterval(speedTimerHandle);
      SoundSystem.victory();
      triggerConfetti();
      document.getElementById('speed-status-lbl').innerHTML = '🎉 <b>XUẤT SẮC!</b> Đã nối đúng 4/4 (+20 XP)!';
      beeState.xp += 20;
      saveBeeState();
    }
  } else {
    SoundSystem.wrong();
    prev.style.borderColor = '#ef4444';
    tile.style.borderColor = '#ef4444';
    prev.style.background = '#fee2e2';
    tile.style.background = '#fee2e2';
    setTimeout(() => {
      prev.style.borderColor = 'var(--bee-border)';
      tile.style.borderColor = 'var(--bee-border)';
      prev.style.background = '#ffffff';
      tile.style.background = '#ffffff';
      activePickedTile = null;
    }, 400);
  }
}

function restartSpeedBoard() {
  SoundSystem.click();
  setupSpeedBoard();
}

// ==========================================
// 8. FEATURE 4: HỌC LIỆU (KHO TỪ ĐÃ LƯU)
// ==========================================
function renderVaultTable() {
  const tbody = document.getElementById('vault-tbody');
  const emptyBox = document.getElementById('vault-empty-state');
  const tableWrap = document.getElementById('vault-table-wrapper');

  if (beeState.mySavedVocab.length === 0) {
    emptyBox.style.display = 'block';
    tableWrap.style.display = 'none';
    return;
  }

  emptyBox.style.display = 'none';
  tableWrap.style.display = 'block';

  tbody.innerHTML = beeState.mySavedVocab.map((item, idx) => `
    <tr>
      <td><b style="color: var(--bee-forest); font-size: 1rem;">${item.word}</b></td>
      <td><span style="font-family: monospace; color: var(--bee-amber);">${item.ipa}</span></td>
      <td><span style="font-weight: 600; color: #1f2937;">${item.vi}</span></td>
      <td><span style="font-size: 0.85rem; color: var(--bee-text-muted); font-style: italic;">"${item.example || 'Thực hành trong câu'}"</span></td>
      <td style="text-align: center;">
        <button class="btn-icon-action" onclick="speakEnglish('${item.word.replace(/'/g, "\\'")}')" title="Phát âm">🔊</button>
      </td>
      <td style="text-align: center;">
        <button class="btn-icon-action" style="color: #ef4444;" onclick="deleteWordFromVault(${idx})" title="Xóa từ này">🗑️</button>
      </td>
    </tr>
  `).join('');
}

function deleteWordFromVault(idx) {
  SoundSystem.click();
  const deleted = beeState.mySavedVocab.splice(idx, 1);
  saveBeeState();
  renderVaultTable();
  alert(`Đã xóa từ "${deleted[0].word}" khỏi Kho từ.`);
}

// ==========================================
// 9. FEATURE 4: CÔNG CỤ (TỪ ĐIỂN & WRITING CHECKER)
// ==========================================

// Tool 1: Tra từ điển Free Dictionary API
async function lookupDictionary() {
  const input = document.getElementById('dict-search-input');
  const word = input.value.trim();
  if (!word) return;
  SoundSystem.click();

  const resBox = document.getElementById('dict-result-box');
  resBox.innerHTML = `<p style="text-align: center; color: var(--bee-amber);">🔍 Đang tra cứu từ "${word}"...</p>`;

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (res.ok) {
      const data = await res.json();
      const entry = data[0];
      const phonetics = entry.phonetic || (entry.phonetics && entry.phonetics[0] ? entry.phonetics[0].text : '');
      const firstMeaning = entry.meanings[0];
      const definition = firstMeaning.definitions[0].definition;
      const example = firstMeaning.definitions[0].example || "No example provided.";

      resBox.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <div>
            <h4 style="font-size: 1.35rem; font-weight: 800; color: var(--bee-forest);">${entry.word}</h4>
            <span style="font-family: monospace; color: var(--bee-amber); font-size: 1rem;">${phonetics}</span>
            <span style="font-size: 0.8rem; background: var(--bee-honey-light); color: var(--bee-dark-amber); padding: 0.15rem 0.5rem; border-radius: 6px; font-weight: 700; margin-left: 0.5rem;">${firstMeaning.partOfSpeech}</span>
          </div>
          <button class="btn-icon-action" onclick="speakEnglish('${entry.word.replace(/'/g, "\\'")}')">🔊</button>
        </div>
        <p style="font-size: 0.95rem; color: #1f2937; margin: 0.5rem 0;"><b>Định nghĩa:</b> ${definition}</p>
        <p style="font-size: 0.85rem; color: var(--bee-text-muted); font-style: italic; margin-bottom: 1rem;">"${example}"</p>
        <button class="bee-btn-main" onclick="addSingleWordToVault('${entry.word.replace(/'/g, "\\'")}', '${phonetics}', '${definition.substring(0, 60).replace(/'/g, "\\'")}', '${example.replace(/'/g, "\\'")}')" style="background: var(--bee-amber); font-size: 0.85rem;">
          ⭐ Lưu vào Kho từ của tôi (+10 XP)
        </button>
      `;
    } else {
      resBox.innerHTML = `<p style="color: #ef4444; text-align: center;">Không tìm thấy định nghĩa cho từ "${word}". Nữ hoàng hãy kiểm tra lại chính tả nhé!</p>`;
    }
  } catch (e) {
    resBox.innerHTML = `<p style="color: #ef4444; text-align: center;">Lỗi kết nối từ điển: ${e.message}</p>`;
  }
}

// Tool 2: Bộ đếm từ & Đánh giá bài viết IELTS Writing
function analyzeWritingEssay() {
  const text = document.getElementById('writing-input-text').value;
  const taskType = document.getElementById('writing-task-select').value;

  const words = text.trim() ? text.trim().split(/\s+/).filter(w => w.length > 0) : [];
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0) : [];
  const wordCount = words.length;
  const sentenceCount = sentences.length;

  // Tính thời gian đọc trung bình (200 từ/phút)
  const readMins = Math.ceil(wordCount / 200);

  document.getElementById('word-count-val').textContent = wordCount;
  document.getElementById('sentence-count-val').textContent = sentenceCount;
  document.getElementById('reading-time-val').textContent = `${readMins}m`;

  const feedbackBox = document.getElementById('writing-status-feedback');

  if (wordCount === 0) {
    feedbackBox.style.background = '#e0f2fe';
    feedbackBox.style.color = '#0369a1';
    feedbackBox.innerHTML = "Chưa có nội dung bài viết. Hãy dán bài luận của Nữ hoàng vào đây nhé!";
    return;
  }

  const minTarget = (taskType === 'task2') ? 250 : 150;
  const idealMax = (taskType === 'task2') ? 310 : 200;

  if (wordCount < minTarget) {
    feedbackBox.style.background = '#fee2e2';
    feedbackBox.style.color = '#b91c1c';
    feedbackBox.innerHTML = `⚠️ <b>Chưa đạt độ dài tối thiểu:</b> Bài viết hiện có ${wordCount} từ (cần tối thiểu <b>${minTarget} từ</b>). Giám khảo IELTS sẽ trừ điểm tiêu chí Task Achievement nếu viết dưới số từ quy định!`;
  } else if (wordCount >= minTarget && wordCount <= idealMax) {
    feedbackBox.style.background = '#dcfce7';
    feedbackBox.style.color = '#15803d';
    feedbackBox.innerHTML = `🎉 <b>Độ dài lý tưởng:</b> ${wordCount} từ! Đây là dung lượng vàng (Target: ${minTarget} - ${idealMax} từ) giúp Nữ hoàng triển khai đủ ý mà không sợ thiếu giờ làm bài!`;
  } else {
    feedbackBox.style.background = '#fef3c7';
    feedbackBox.style.color = '#b45309';
    feedbackBox.innerHTML = `ℹ️ <b>Bài viết khá dài:</b> ${wordCount} từ. Nữ hoàng hãy chú ý kiểm soát thời gian phòng thi để kịp soát lỗi ngữ pháp và dấu câu nhé!`;
  }
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('open');
}

// ==========================================
// 10. KHỞI TẠO TỔNG THỂ KHI LOAD TRANG
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadBeeState();
  updateGlobalStatsUI();
  renderRoadmapSection();
  renderMusicGame();
  loadLiveNewsFeeds();
  loadMiniGamePool('saved');

  // Đóng popover khi bấm ra ngoài
  document.addEventListener('click', (e) => {
    const pop = document.getElementById('academic-vocab-popover');
    if (pop && !pop.contains(e.target) && !e.target.classList.contains('academic-highlight')) {
      pop.style.display = 'none';
    }
  });

  // Hỗ trợ Enter cho ô tra từ điển
  const dictInput = document.getElementById('dict-search-input');
  if (dictInput) {
    dictInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') lookupDictionary();
    });
  }
});
