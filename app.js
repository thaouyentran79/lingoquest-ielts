/**
 * LINGOQUEST IELTS - LOGIC & TRẢI NGHIỆM GAMIFICATION
 * 100% Mã nguồn Front-end chạy mượt mà, lưu trữ bằng LocalStorage
 * Tích hợp Web Speech API (Phát âm chuẩn), Web Audio API (Hiệu ứng âm thanh)
 */

// ==========================================
// 1. QUẢN LÝ DỮ LIỆU & TIẾN ĐỘ (LOCALSTORAGE)
// ==========================================
const STORAGE_KEY = "lingoquest_ielts_state_v1";

let appState = {
  xp: 150,
  streak: 3,
  rank: "Chiến Binh Từ Vựng",
  completedStages: ["stage-1"], // Cho mở sẵn chặng 1 làm mẫu thành công
  currentStageId: null,
  activeFilter: "all"
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      appState = { ...appState, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("Không thể tải LocalStorage, dùng cấu hình mặc định:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.warn("Lỗi lưu LocalStorage:", e);
  }
  updateHeaderStats();
}

// Cập nhật xếp hạng dựa trên XP
function calculateRank(xp) {
  if (xp >= 500) return "👑 Nữ Hoàng IELTS";
  if (xp >= 350) return "💎 Cao Thủ Band 8.0";
  if (xp >= 200) return "⚡ Thợ Săn Từ Vựng";
  return "🌱 Tân Binh Khởi Đầu";
}

// ==========================================
// 2. BỘ PHÁT HIỆU ỨNG ÂM THANH (WEB AUDIO API)
// 100% không cần tải file ngoài, không lo lỗi mạng!
// ==========================================
const SoundSystem = {
  ctx: null,

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },

  playTone(freq, type, duration, delay = 0) {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    } catch (e) {
      // Bỏ qua nếu trình duyệt chặn âm thanh tự động
    }
  },

  // Âm thanh khi chọn đúng (Ting ting vui tươi)
  correct() {
    this.playTone(523.25, 'sine', 0.15, 0);       // C5
    this.playTone(659.25, 'sine', 0.25, 0.08);   // E5
    this.playTone(783.99, 'sine', 0.35, 0.16);   // G5
  },

  // Âm thanh khi nối sai (Buzzer nhẹ)
  wrong() {
    this.playTone(200, 'sawtooth', 0.2, 0);
    this.playTone(160, 'sawtooth', 0.25, 0.1);
  },

  // Âm thanh chiến thắng hoàn thành chặng (Fanfare hào hứng)
  victory() {
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, i) => {
      this.playTone(freq, 'triangle', 0.3, i * 0.12);
    });
  },

  // Âm thanh bấm nút nhẹ nhàng
  click() {
    this.playTone(400, 'sine', 0.05, 0);
  }
};

// ==========================================
// 3. PHÁT ÂM CHUẨN BẢN XỨ (WEB SPEECH API)
// Hoàn toàn miễn phí trên trình duyệt máy tính & điện thoại
// ==========================================
function speakEnglish(text) {
  if (!('speechSynthesis' in window)) {
    alert("Trình duyệt của bạn chưa hỗ trợ phát âm giọng nói.");
    return;
  }
  window.speechSynthesis.cancel(); // Ngắt câu trước nếu đang nói dở

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9; // Tốc độ vừa phải để học viên nghe rõ phát âm
  utterance.pitch = 1.0;

  // Tìm giọng US/UK chuẩn nếu có
  const voices = window.speechSynthesis.getVoices();
  const usVoice = voices.find(v => v.lang.includes('en-US') || v.lang.includes('en_US'));
  if (usVoice) utterance.voice = usVoice;

  window.speechSynthesis.speak(utterance);
}

// ==========================================
// 4. HIỆU ỨNG PHÁO HOA ĂN MỪNG (CONFETTI)
// ==========================================
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    // Fallback nếu chưa tải kịp thư viện ngoài
    console.log("Hoan hô! Bạn đã hoàn thành chặng học xuất sắc!");
  }
}

// ==========================================
// 5. HIỂN THỊ GIAO DIỆN ROADMAP CHÍNH
// ==========================================
function updateHeaderStats() {
  document.getElementById('stat-xp').textContent = `${appState.xp} XP`;
  document.getElementById('stat-streak').textContent = `${appState.streak} Ngày`;
  
  const rank = calculateRank(appState.xp);
  document.getElementById('stat-rank').textContent = rank;

  // Tính phần trăm tiến độ
  const totalStages = ROADMAP_DATA.length;
  const completedCount = appState.completedStages.length;
  const percent = Math.min(100, Math.round((completedCount / totalStages) * 100));

  const progressBar = document.getElementById('overall-progress-bar');
  const progressText = document.getElementById('progress-percentage-text');
  if (progressBar) progressBar.style.width = `${percent}%`;
  if (progressText) progressText.textContent = `${percent}%`;
}

function renderRoadmap() {
  const container = document.getElementById('roadmap-trail');
  if (!container) return;

  container.innerHTML = '';

  // Lọc theo Track (Chủ đề)
  const filteredData = ROADMAP_DATA.filter(item => {
    if (appState.activeFilter === 'all') return true;
    return item.track === appState.activeFilter;
  });

  filteredData.forEach((stage, index) => {
    const isCompleted = appState.completedStages.includes(stage.id);

    // Xác định trạng thái của Chặng:
    // Chặng đầu tiên luôn mở, hoặc chặng kế tiếp ngay sau chặng đã hoàn thành
    const prevStage = ROADMAP_DATA[index - 1];
    const isUnlocked = index === 0 || (prevStage && appState.completedStages.includes(prevStage.id));
    const isActive = isUnlocked && !isCompleted;
    const isLocked = !isUnlocked && !isCompleted;

    let nodeClass = 'roadmap-node';
    let btnHtml = '';

    if (isCompleted) {
      nodeClass += ' completed';
      btnHtml = `<button class="node-action-btn btn-completed-node">✓ Đã Chinh Phục</button>`;
    } else if (isActive) {
      nodeClass += ' active';
      btnHtml = `<button class="node-action-btn btn-play-node">⚡ Vào Chơi Ngay</button>`;
    } else {
      nodeClass += ' locked';
      btnHtml = `<button class="node-action-btn btn-locked-node">🔒 Cần mở khóa</button>`;
    }

    const nodeEl = document.createElement('div');
    nodeEl.className = nodeClass;
    nodeEl.dataset.stageId = stage.id;

    nodeEl.innerHTML = `
      <div class="node-circle-icon">
        ${isCompleted ? '👑' : (isLocked ? '🔒' : stage.trackIcon)}
      </div>
      <div class="node-content">
        <div class="node-meta">
          <span class="node-track-badge">${stage.trackName}</span>
          <span class="node-level-badge">${stage.level}</span>
        </div>
        <h4 class="node-title">${stage.title}</h4>
        <div class="node-subtitle">${stage.subtitle} • ${stage.badge}</div>
        <div class="node-footer">
          <div class="node-reward">✨ +${stage.xpReward} XP</div>
          ${btnHtml}
        </div>
      </div>
    `;

    // Sự kiện click mở chặng
    nodeEl.addEventListener('click', () => {
      SoundSystem.click();
      if (isLocked) {
        alert("Nữ hoàng hãy hoàn thành chặng phía trước để mở khóa chặng này nhé!");
        return;
      }
      openLessonModal(stage.id);
    });

    container.appendChild(nodeEl);
  });
}

// ==========================================
// 6. CỬA SỔ HỌC TẬP TƯƠNG TÁC (LESSON MODAL)
// ==========================================
let currentStage = null;
let currentFlashcardIndex = 0;
let speedMatchState = {
  timer: 30,
  interval: null,
  selectedTile: null,
  matchedCount: 0,
  totalPairs: 5
};

function openLessonModal(stageId) {
  const stage = ROADMAP_DATA.find(s => s.id === stageId);
  if (!stage) return;

  currentStage = stage;
  appState.currentStageId = stageId;

  // Cập nhật thông tin Header Modal
  document.getElementById('modal-stage-title').textContent = stage.title;
  document.getElementById('modal-stage-subtitle').textContent = `${stage.trackName} • ${stage.badge} • Nhận +${stage.xpReward} XP`;

  // Mặc định mở Tab 1: Nội dung chính
  switchModalTab('tab-media');

  // Nạp dữ liệu các tab
  renderMediaTab(stage);
  renderFlashcards(stage);
  setupSpeedMatching(stage);
  renderGapFill(stage);

  // Hiển thị Modal
  const modal = document.getElementById('lesson-modal');
  modal.classList.add('show');
}

function closeLessonModal() {
  const modal = document.getElementById('lesson-modal');
  modal.classList.remove('show');
  
  // Dừng video youtube và đồng hồ đếm ngược
  clearInterval(speedMatchState.interval);
  const iframe = document.getElementById('youtube-iframe');
  if (iframe) iframe.src = "";
}

// Chuyển Tab trong Modal
function switchModalTab(tabId) {
  SoundSystem.click();

  // Đổi nút active
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Ẩn hiện nội dung tab
  document.querySelectorAll('.tab-content-panel').forEach(panel => {
    panel.style.display = (panel.id === tabId) ? 'block' : 'none';
  });

  // Nếu bấm vào tab Game Nối từ, tự reset ván mới
  if (tabId === 'tab-matching') {
    startSpeedMatchTimer();
  } else {
    clearInterval(speedMatchState.interval);
  }
}

// TAB 1: MEDIA & NỘI DUNG ĐỌC
function renderMediaTab(stage) {
  const mediaContainer = document.getElementById('media-render-zone');
  const detailsContainer = document.getElementById('content-details-zone');

  if (stage.contentType === 'music') {
    mediaContainer.innerHTML = `
      <div class="media-wrapper">
        <iframe id="youtube-iframe" 
                src="https://www.youtube-nocookie.com/embed/${stage.youtubeId}?rel=0" 
                title="${stage.title}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
      </div>
      <p style="font-size: 0.85rem; color: #94a3b8; text-align: center; margin-bottom: 1.25rem;">
        🎧 Bấm Play để vừa thưởng thức giai điệu US-UK vừa luyện tai nghe bắt nhịp nhé!
      </p>
    `;

    detailsContainer.innerHTML = `
      <h4 style="color: #f472b6; font-size: 1.15rem; margin-bottom: 0.75rem;">📝 Đoạn Điệp Khúc Đắt Giá (Lyrics Highlight):</h4>
      <div class="reading-article-box" style="font-style: italic; border-left: 4px solid #ec4899;">
        ${stage.contentData.lyricsSnippet.replace(/\n/g, '<br>')}
      </div>
      <h4 style="color: #38bdf8; font-size: 1.1rem; margin: 1.25rem 0 0.75rem;">💎 Cụm Từ & Thành Ngữ Ăn Điểm IELTS Speaking:</h4>
      <div class="expressions-list">
        ${stage.contentData.highlightedExpressions.map(exp => `
          <div class="expression-card">
            <div class="expression-phrase">
              <span>🌟 ${exp.phrase}</span>
              <button class="speech-btn" style="width: 28px; height: 28px; font-size: 0.8rem;" onclick="speakEnglish('${exp.phrase.replace(/'/g, "\\'")}')">🔊</button>
            </div>
            <div style="font-size: 0.9rem; color: #e2e8f0; margin-top: 0.25rem;"><b>Nghĩa:</b> ${exp.meaning}</div>
            <div class="expression-tip"><b>IELTS Tip:</b> ${exp.ieltsTip}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    // Track Thời trang hoặc Công nghệ (Article reading)
    mediaContainer.innerHTML = `
      <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(255,255,255,0.1); border-radius: 18px; padding: 1.25rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <span style="font-size: 0.8rem; color: #a78bfa; font-weight: 700;">${stage.contentData.author}</span>
          <h3 style="font-size: 1.2rem; color: #fff; margin: 0.25rem 0;">${stage.contentData.title}</h3>
        </div>
        <span style="background: rgba(255,255,255,0.1); padding: 0.3rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; color: #38bdf8;">⏱️ ${stage.contentData.readTime}</span>
      </div>
    `;

    detailsContainer.innerHTML = `
      <div class="reading-article-box" id="article-body-text">
        ${stage.contentData.articleText}
      </div>
      <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 1.25rem;">
        💡 <b>Mẹo học:</b> Bấm trực tiếp vào các từ <b>in đậm màu xanh</b> trong bài để nghe loa đọc phát âm chuẩn US nhé!
      </p>
      <h4 style="color: #38bdf8; font-size: 1.1rem; margin-bottom: 0.75rem;">💎 Cụm Collocation Học Thuật (Band 7.5 - 8.5):</h4>
      <div class="expressions-list">
        ${stage.contentData.highlightedExpressions.map(exp => `
          <div class="expression-card">
            <div class="expression-phrase">
              <span>🎯 ${exp.phrase}</span>
              <button class="speech-btn" style="width: 28px; height: 28px; font-size: 0.8rem;" onclick="speakEnglish('${exp.phrase.replace(/'/g, "\\'")}')">🔊</button>
            </div>
            <div style="font-size: 0.9rem; color: #e2e8f0; margin-top: 0.25rem;"><b>Nghĩa:</b> ${exp.meaning}</div>
            <div class="expression-tip"><b>Ứng dụng IELTS:</b> ${exp.ieltsTip}</div>
          </div>
        `).join('')}
      </div>
    `;

    // Gán sự kiện click phát âm cho các từ in đậm trong bài đọc
    setTimeout(() => {
      document.querySelectorAll('#article-body-text b').forEach(el => {
        el.style.cursor = 'pointer';
        el.title = 'Bấm để nghe phát âm';
        el.addEventListener('click', () => {
          SoundSystem.click();
          speakEnglish(el.textContent.trim());
        });
      });
    }, 100);
  }
}

// TAB 2: FLASHCARD 3D
function renderFlashcards(stage) {
  currentFlashcardIndex = 0;
  updateFlashcardUI();
}

function updateFlashcardUI() {
  if (!currentStage || !currentStage.vocabList) return;
  const vocab = currentStage.vocabList[currentFlashcardIndex];
  const total = currentStage.vocabList.length;

  document.getElementById('flashcard-counter').textContent = `Thẻ ${currentFlashcardIndex + 1} / ${total}`;

  const cardInner = document.getElementById('flashcard-card-inner');
  cardInner.classList.remove('flipped'); // Reset về mặt trước

  // Mặt trước
  document.getElementById('card-front-word').textContent = vocab.word;
  document.getElementById('card-front-ipa').textContent = vocab.ipa;
  document.getElementById('card-front-pos').textContent = `(${vocab.pos})`;
  const cardImg = document.getElementById('card-front-img');
  cardImg.src = vocab.image;
  cardImg.onerror = () => {
    cardImg.src = "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=60";
  };

  // Mặt sau
  document.getElementById('card-back-meaning').textContent = vocab.meaning;
  document.getElementById('card-back-example').textContent = `"${vocab.example}"`;

  // Gán nút đọc phát âm
  const speechBtn = document.getElementById('card-speech-btn');
  speechBtn.onclick = (e) => {
    e.stopPropagation(); // Không kích hoạt lật thẻ
    SoundSystem.click();
    speakEnglish(vocab.word);
  };
}

function flipCurrentCard() {
  SoundSystem.click();
  const cardInner = document.getElementById('flashcard-card-inner');
  cardInner.classList.toggle('flipped');
}

function nextFlashcard() {
  SoundSystem.click();
  if (currentFlashcardIndex < currentStage.vocabList.length - 1) {
    currentFlashcardIndex++;
    updateFlashcardUI();
  } else {
    currentFlashcardIndex = 0;
    updateFlashcardUI();
  }
}

function prevFlashcard() {
  SoundSystem.click();
  if (currentFlashcardIndex > 0) {
    currentFlashcardIndex--;
    updateFlashcardUI();
  } else {
    currentFlashcardIndex = currentStage.vocabList.length - 1;
    updateFlashcardUI();
  }
}

// TAB 3: SPEED MATCHING (NỐI TỪ SIÊU TỐC)
function setupSpeedMatching(stage) {
  clearInterval(speedMatchState.interval);
  speedMatchState.timer = 30;
  speedMatchState.matchedCount = 0;
  speedMatchState.selectedTile = null;

  const pairs = stage.matchingPairs || [];
  speedMatchState.totalPairs = pairs.length;

  // Tách 2 cột: Cột Anh và Cột Việt, xáo trộn ngẫu nhiên
  const enTiles = pairs.map((p, idx) => ({ id: idx, type: 'en', text: p.en }));
  const viTiles = pairs.map((p, idx) => ({ id: idx, type: 'vi', text: p.vi }));

  // Trộn xáo
  enTiles.sort(() => Math.random() - 0.5);
  viTiles.sort(() => Math.random() - 0.5);

  const arena = document.getElementById('matching-tiles-grid');
  arena.innerHTML = '';

  const allTiles = [];
  for (let i = 0; i < pairs.length; i++) {
    allTiles.push(enTiles[i]);
    allTiles.push(viTiles[i]);
  }

  allTiles.forEach(item => {
    const tile = document.createElement('div');
    tile.className = 'match-tile';
    tile.textContent = item.text;
    tile.dataset.pairId = item.id;
    tile.dataset.type = item.type;

    tile.addEventListener('click', () => handleTileClick(tile));
    arena.appendChild(tile);
  });

  document.getElementById('speed-timer-count').textContent = '30s';
  document.getElementById('speed-status-msg').textContent = '⚡ Chọn 1 từ tiếng Anh và 1 nghĩa tiếng Việt tương ứng!';
}

function startSpeedMatchTimer() {
  clearInterval(speedMatchState.interval);
  speedMatchState.timer = 30;

  speedMatchState.interval = setInterval(() => {
    speedMatchState.timer--;
    const timerEl = document.getElementById('speed-timer-count');
    if (timerEl) timerEl.textContent = `${speedMatchState.timer}s`;

    if (speedMatchState.timer <= 0) {
      clearInterval(speedMatchState.interval);
      SoundSystem.wrong();
      document.getElementById('speed-status-msg').innerHTML = '⏳ <b>Hết giờ rồi!</b> Bấm nút "Chơi lại" bên dưới để thử lại nhé!';
    }
  }, 1000);
}

function handleTileClick(tile) {
  if (tile.classList.contains('matched') || speedMatchState.timer <= 0) return;

  SoundSystem.click();

  // Nếu chưa chọn thẻ nào
  if (!speedMatchState.selectedTile) {
    speedMatchState.selectedTile = tile;
    tile.classList.add('selected');
    return;
  }

  // Nếu bấm lại chính thẻ đó -> Hủy chọn
  if (speedMatchState.selectedTile === tile) {
    tile.classList.remove('selected');
    speedMatchState.selectedTile = null;
    return;
  }

  const prev = speedMatchState.selectedTile;

  // Kiểm tra xem có 1 thẻ Tiếng Anh + 1 thẻ Tiếng Việt không
  if (prev.dataset.type === tile.dataset.type) {
    prev.classList.remove('selected');
    speedMatchState.selectedTile = tile;
    tile.classList.add('selected');
    return;
  }

  // Kiểm tra cặp khớp (cùng pairId)
  if (prev.dataset.pairId === tile.dataset.pairId) {
    // KHỚP ĐÚNG!
    SoundSystem.correct();
    prev.classList.remove('selected');
    prev.classList.add('matched');
    tile.classList.add('matched');
    speedMatchState.selectedTile = null;
    speedMatchState.matchedCount++;

    if (speedMatchState.matchedCount >= speedMatchState.totalPairs) {
      clearInterval(speedMatchState.interval);
      SoundSystem.victory();
      triggerConfetti();
      document.getElementById('speed-status-msg').innerHTML = '🎉 <b>XUẤT SẮC!</b> Nữ hoàng đã nối trọn vẹn toàn bộ các từ vựng!';
    }
  } else {
    // SAI!
    SoundSystem.wrong();
    prev.classList.add('error-shake');
    tile.classList.add('error-shake');

    setTimeout(() => {
      prev.classList.remove('selected', 'error-shake');
      tile.classList.remove('error-shake');
      speedMatchState.selectedTile = null;
    }, 450);
  }
}

// TAB 4: THỬ THÁCH NGỮ CẢNH (GAP-FILL)
function renderGapFill(stage) {
  const qData = stage.gapFill;
  if (!qData) return;

  document.getElementById('gap-question-text').textContent = qData.question;
  const optionsContainer = document.getElementById('gap-options-container');
  optionsContainer.innerHTML = '';

  const feedbackBox = document.getElementById('gap-feedback-box');
  feedbackBox.className = 'gap-feedback-box';
  feedbackBox.innerHTML = '';

  qData.options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.className = 'gap-option-btn';
    btn.innerHTML = `<span style="width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.1); display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem;">${String.fromCharCode(65 + index)}</span> <span>${optText}</span>`;

    btn.addEventListener('click', () => {
      // Vô hiệu hóa các nút sau khi chọn
      document.querySelectorAll('.gap-option-btn').forEach(b => b.disabled = true);

      if (index === qData.correctIndex) {
        SoundSystem.correct();
        triggerConfetti();
        btn.classList.add('correct');
        feedbackBox.classList.add('show');
        feedbackBox.style.background = 'rgba(16, 185, 129, 0.2)';
        feedbackBox.style.border = '1px solid rgba(16, 185, 129, 0.4)';
        feedbackBox.innerHTML = `
          <div style="color: #34d399; font-weight: 700; margin-bottom: 0.35rem;">🎉 Chính xác 100%! Nữ hoàng siêu quá!</div>
          <div style="font-size: 0.9rem; color: #e2e8f0;">${qData.explanation}</div>
        `;
      } else {
        SoundSystem.wrong();
        btn.classList.add('wrong');
        const correctBtn = optionsContainer.children[qData.correctIndex];
        if (correctBtn) correctBtn.classList.add('correct');

        feedbackBox.classList.add('show');
        feedbackBox.style.background = 'rgba(239, 68, 68, 0.2)';
        feedbackBox.style.border = '1px solid rgba(239, 68, 68, 0.4)';
        feedbackBox.innerHTML = `
          <div style="color: #f87171; font-weight: 700; margin-bottom: 0.35rem;">😅 Chưa chuẩn rồi, đáp án đúng là phương án ${String.fromCharCode(65 + qData.correctIndex)}!</div>
          <div style="font-size: 0.9rem; color: #e2e8f0;">${qData.explanation}</div>
        `;
      }
    });

    optionsContainer.appendChild(btn);
  });
}

// ==========================================
// 7. HOÀN THÀNH CHẶNG & CỘNG THƯỞNG XP
// ==========================================
function completeCurrentStage() {
  if (!currentStage) return;

  const stageId = currentStage.id;
  const isFirstTime = !appState.completedStages.includes(stageId);

  if (isFirstTime) {
    appState.completedStages.push(stageId);
    appState.xp += currentStage.xpReward;
    appState.streak += 1;
    saveState();
  }

  SoundSystem.victory();
  triggerConfetti();

  alert(`👑 Chúc mừng Nữ hoàng đã chinh phục thành công chặng "${currentStage.title}"!\n✨ Nhận ngay +${currentStage.xpReward} XP và chuỗi ngày học rực lửa!`);

  closeLessonModal();
  renderRoadmap();
}

// ==========================================
// 8. TẢI BẢN TIN TRENDING TỰ ĐỘNG
// ==========================================
function renderTrendingNews() {
  const container = document.getElementById('trending-news-grid');
  if (!container) return;

  container.innerHTML = LIVE_TRENDS_FEED.map(news => `
    <div class="news-card">
      <div>
        <div class="news-category-tag">${news.category} • ${news.tag}</div>
        <h4>${news.title}</h4>
        <p>${news.snippet}</p>
      </div>
      <div class="news-vocab-pills">
        ${news.keyVocab.map(v => `<span class="vocab-pill">${v}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ==========================================
// 9. KHỞI TẠO ỨNG DỤNG KHI MỞ TRANG WEB
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateHeaderStats();
  renderRoadmap();
  renderTrendingNews();

  // Bộ lọc Track (Tất cả / Âm nhạc / Thời trang / Công nghệ)
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      SoundSystem.click();
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.activeFilter = btn.dataset.filter;
      renderRoadmap();
    });
  });

  // Nút đóng modal
  document.getElementById('modal-close-btn').addEventListener('click', closeLessonModal);

  // Chuyển tab trong modal
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchModalTab(btn.dataset.tab));
  });

  // Nút lật thẻ Flashcard
  const cardElement = document.getElementById('flashcard-card-inner');
  if (cardElement) {
    cardElement.addEventListener('click', flipCurrentCard);
  }

  // Nút chuyển thẻ tiếp theo / thẻ trước
  document.getElementById('btn-next-card').addEventListener('click', nextFlashcard);
  document.getElementById('btn-prev-card').addEventListener('click', prevFlashcard);

  // Nút chơi lại Game nối từ
  document.getElementById('btn-restart-matching').addEventListener('click', () => {
    SoundSystem.click();
    setupSpeedMatching(currentStage);
    startSpeedMatchTimer();
  });

  // Nút "Hoàn thành chặng & nhận XP"
  document.getElementById('btn-complete-stage').addEventListener('click', completeCurrentStage);

  // Cho phép đóng modal khi bấm ra ngoài nền tối
  document.getElementById('lesson-modal').addEventListener('click', (e) => {
    if (e.target.id === 'lesson-modal') {
      closeLessonModal();
    }
  });
});
