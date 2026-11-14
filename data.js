/**
 * IELTS BEE 🐝 - DỮ LIỆU BÀI HỌC, ÂM NHẠC & TIN TỨC
 * Thương hiệu chính thức: IELTS Bee (Học tiếng Anh chất như mật)
 */

// ===================================================
// 1. LỘ TRÌNH LUYỆN THI IELTS CHÍNH (THEO BAND ĐIỂM)
// ===================================================
const IELTS_ROADMAP = [
  {
    bandId: "band-5-6",
    bandTitle: "Chặng 1: Nền Tảng & Phản Xạ (Target 5.5 - 6.0)",
    bandDesc: "Xây gốc từ vựng học thuật cốt lõi và làm chủ phản xạ nói tự nhiên",
    badgeColor: "#d97706",
    lessons: [
      {
        id: "ielts-1",
        title: "Kỹ Thuật Paraphrasing & Bộ 30 Synonyms Kinh Điển",
        skill: "Writing & Speaking",
        skillIcon: "✍️",
        duration: "10 phút",
        xp: 40,
        summary: "Bí quyết nói 1 ý bằng 3 cách khác nhau để nâng band điểm IELTS ngay lập tức.",
        content: `
          <h3>🎯 Tại sao Paraphrasing là chìa khóa vàng của IELTS?</h3>
          <p>Giám khảo IELTS chấm điểm rất cao nếu bạn không lặp lại y nguyên từ ngữ trong câu hỏi. Kỹ thuật này áp dụng trong cả 4 kỹ năng.</p>
          
          <div class="theory-box">
            <h4>💡 3 Phương pháp Paraphrase dễ nhất:</h4>
            <ul>
              <li><b>Cách 1: Dùng từ đồng nghĩa (Synonyms):</b> Thay <i>important</i> bằng <i>crucial, vital, essential</i>.</li>
              <li><b>Cách 2: Đổi dạng từ (Word Form):</b> Thay <i>Technology develops rapidly</i> thành <i>The rapid development of technology</i>.</li>
              <li><b>Cách 3: Đổi từ chủ động sang bị động (Passive Voice).</b></li>
            </ul>
          </div>

          <h4>💎 Bảng Synonyms hay gặp nhất trong đề thi:</h4>
          <table class="ielts-table">
            <tr><th>Từ cơ bản</th><th>Từ nâng band (Band 6.5+)</th><th>Ví dụ áp dụng</th></tr>
            <tr><td>Big / Large</td><td><b>Substantial, Enormous</b></td><td>A substantial increase in traffic.</td></tr>
            <tr><td>Good / Helpful</td><td><b>Beneficial, Advantageous</b></td><td>Exercise is beneficial to health.</td></tr>
            <tr><td>Solve / Handle</td><td><b>Tackle, Mitigate, Address</b></td><td>Governments should tackle pollution.</td></tr>
            <tr><td>Famous</td><td><b>Renowned, Prominent</b></td><td>A renowned scientific researcher.</td></tr>
          </table>
        `,
        vocab: [
          { word: "Crucial", ipa: "/ˈkruː.ʃəl/", meaning: "Cực kỳ quan trọng, sống còn", example: "Early diagnosis is crucial for successful treatment." },
          { word: "Beneficial", ipa: "/ˌben.ɪˈfɪʃ.əl/", meaning: "Có lợi, mang lại hiệu quả tốt", example: "Walking daily is highly beneficial for mental health." },
          { word: "Tackle", ipa: "/ˈtæk.əl/", meaning: "Giải quyết, đối đầu với vấn đề", example: "New policies aim to tackle youth unemployment." },
          { word: "Substantial", ipa: "/səbˈstæn.ʃəl/", meaning: "Đáng kể, to lớn", example: "The company reported a substantial growth in revenue." }
        ],
        quiz: {
          question: "Chọn từ nâng band (Band 7.0+) thích hợp nhất để thay thế cho từ 'Solve' trong câu: 'We must [solve] the problem of environmental pollution.'",
          options: ["Do", "Tackle", "Make", "Think"],
          correct: 1,
          explanation: "'Tackle the problem' là collocation học thuật chuẩn xác và ăn điểm cao nhất trong IELTS Writing Task 2."
        }
      },
      {
        id: "ielts-2",
        title: "Speaking Part 1: Bí Kíp Mở Rộng Câu Trả Lời (Công Thức A.R.E.A)",
        skill: "Speaking",
        skillIcon: "🗣️",
        duration: "12 phút",
        xp: 50,
        summary: "Không bao giờ bí ý hay trả lời cộc lốc nhờ công thức Answer - Reason - Example - Alternative.",
        content: `
          <h3>🎯 Thoát cảnh trả lời 'Yes/No' ngắn củn</h3>
          <p>Nhiều thí sinh gặp câu hỏi <i>'Do you like music?'</i> chỉ trả lời <i>'Yes, I like pop music'</i> rồi im lặng. Công thức <b>A.R.E.A</b> giúp câu trả lời kéo dài 3-4 câu mượt mà như người bản xứ.</p>

          <div class="theory-box">
            <h4>🏆 Công thức A.R.E.A:</h4>
            <ul>
              <li><b>A (Answer):</b> Trả lời trực tiếp: <i>'Yes, absolutely, I am a massive music enthusiast.'</i></li>
              <li><b>R (Reason):</b> Nêu lý do: <i>'Because listening to melodious tunes helps me unwind after grueling work hours.'</i></li>
              <li><b>E (Example):</b> Đưa ví dụ cụ thể: <i>'For instance, I frequently listen to pop ballads during my daily commute.'</i></li>
              <li><b>A (Alternative):</b> Giả định ngược lại: <i>'Without music, my daily life would be monotonous.'</i></li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Enthusiast", ipa: "/ɪnˈθjuː.zi.æst/", meaning: "Người đam mê, người cực kỳ thích điều gì", example: "I am a passionate tech enthusiast." },
          { word: "Grueling", ipa: "/ˈɡruː.ə.lɪŋ/", meaning: "Căng thẳng, kiệt sức, đầy áp lực", example: "After a grueling 8-hour workday, I hit the gym." },
          { word: "Monotonous", ipa: "/məˈnɒt.ən.əs/", meaning: "Đơn điệu, tẻ nhạt, nhàm chán", example: "Routine paperwork can quickly become monotonous." }
        ],
        quiz: {
          question: "Trong công thức A.R.E.A cho IELTS Speaking, chữ 'R' viết tắt của từ gì?",
          options: ["Relaxation", "Reason (Nêu lý do)", "Repetition", "Reading"],
          correct: 1,
          explanation: "Chữ 'R' là 'Reason' - giải thích nguyên nhân tại sao bạn lại có quan điểm hay sở thích đó."
        }
      },
      {
        id: "ielts-3",
        title: "Reading: Tuyệt Kỹ Skimming & Scanning Định Vị Từ Khóa",
        skill: "Reading",
        skillIcon: "📖",
        duration: "15 phút",
        xp: 50,
        summary: "Đọc 3 đoạn văn dài 3000 từ trong 60 phút mà không cần dịch từng câu chữ.",
        content: `
          <h3>🎯 Chiến thuật sống còn cho IELTS Reading</h3>
          <p>Bạn không có đủ thời gian để đọc hiểu từng từ. Hai kỹ năng quan trọng nhất là:</p>
          <div class="theory-box">
            <ul>
              <li><b>Skimming (Đọc lướt):</b> Đọc nhanh tiêu đề, câu đầu (topic sentence) và câu cuối của mỗi đoạn để nắm ý chính toàn bài trong 2-3 phút.</li>
              <li><b>Scanning (Quét tìm từ khóa):</b> Giống như dùng tính năng Ctrl+F trên máy tính, mắt chỉ lướt tìm tên riêng, năm tháng, số liệu và thuật ngữ được hỏi.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Skim", ipa: "/skɪm/", meaning: "Đọc lướt nắm ý chính", example: "Skim through the headings before tackling the questions." },
          { word: "Scan", ipa: "/skæn/", meaning: "Quét mắt tìm chi tiết cụ thể", example: "Scan the paragraph for numerical data and dates." },
          { word: "Distractor", ipa: "/dɪˈstræk.tər/", meaning: "Thông tin gây nhiễu, bẫy trắc nghiệm", example: "Pay close attention to distractors like 'however' and 'despite'." }
        ],
        quiz: {
          question: "Kỹ năng 'Scanning' trong IELTS Reading có mục đích chính là gì?",
          options: ["Dịch cả đoạn văn sang tiếng Việt", "Quét tìm từ khóa cụ thể (tên, năm, số liệu)", "Đọc hiểu sâu từng từ", "Học thuộc lòng bài đọc"],
          correct: 1,
          explanation: "Scanning là kỹ thuật quét nhanh mắt trên trang giấy để tìm ra từ khóa định vị câu trả lời."
        }
      }
    ]
  },

  {
    bandId: "band-6-7",
    bandTitle: "Chặng 2: Nâng Tầm Lập Luận (Target 6.5 - 7.5)",
    bandDesc: "Phát triển tư duy phản biện Task 2 và biến hóa từ vựng Academic C1",
    badgeColor: "#b45309",
    lessons: [
      {
        id: "ielts-4",
        title: "Writing Task 2: Cấu Trúc Đoạn Văn PEEL Thuyết Phục",
        skill: "Writing",
        skillIcon: "✍️",
        duration: "15 phút",
        xp: 60,
        summary: "Viết thân bài luận điểm sắc bén, mạch lạc chuẩn tiêu chí Coherence & Cohesion.",
        content: `
          <h3>🎯 Viết thân bài Task 2 chuẩn khung giám khảo quốc tế</h3>
          <div class="theory-box">
            <h4>Mô hình 4 bước PEEL:</h4>
            <ul>
              <li><b>P (Point - Luận điểm):</b> Nêu câu chủ đề rõ ràng: <i>'First and foremost, remote working substantially cuts commuting overheads.'</i></li>
              <li><b>E (Explanation - Giải thích sâu):</b> Giải thích vì sao: <i>'Employees no longer squander hours stuck in metropolitan traffic gridlocks.'</i></li>
              <li><b>E (Example - Bằng chứng thực tế):</b> Đưa dẫn chứng: <i>'For instance, recent labor surveys reveal that remote staff save up to 10 hours weekly.'</i></li>
              <li><b>L (Link - Chốt liên kết):</b> Khẳng định lại ý: <i>'Consequently, this paradigm enhances overall job satisfaction and well-being.'</i></li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Squander", ipa: "/ˈskwɒn.dər/", meaning: "Lãng phí hoang phí (thời gian, tiền bạc)", example: "Do not squander precious minutes on irrelevant details." },
          { word: "Substantially", ipa: "/səbˈstæn.ʃəl.i/", meaning: "Một cách đáng kể", example: "Automation substantially reduces manual calculation errors." },
          { word: "Consequently", ipa: "/ˈkɒn.sɪ.kwənt.li/", meaning: "Hệ quả là, kết quả là", example: "He worked diligently; consequently, he earned a promotion." }
        ],
        quiz: {
          question: "Trong đoạn văn cấu trúc PEEL, chữ 'L' đại diện cho bước nào?",
          options: ["Listening", "Link (Chốt ý liên kết với chủ đề)", "Length", "Level"],
          correct: 1,
          explanation: "'Link' là câu kết nối câu luận điểm với câu hỏi tổng quát của đề bài."
        }
      },
      {
        id: "ielts-5",
        title: "Speaking Part 2 & 3: Idioms & Collocations Thần Thái",
        skill: "Speaking",
        skillIcon: "🗣️",
        duration: "12 phút",
        xp: 60,
        summary: "Sử dụng thành ngữ tự nhiên đúng ngữ cảnh để chạm ngưỡng Lexical Resource Band 7.5+.",
        content: `
          <h3>🎯 Cách dùng Idioms không bị 'gượng gạo'</h3>
          <p>Hãy dùng những idioms hiện đại, tinh tế sau:</p>
          <div class="theory-box">
            <ul>
              <li><b>Over the moon:</b> Cực kỳ hạnh phúc. (<i>'When I received the scholarship, I was over the moon.'</i>)</li>
              <li><b>See eye to eye:</b> Đồng thuận quan điểm với ai đó. (<i>'My manager and I rarely see eye to eye on this project.'</i>)</li>
              <li><b>Once in a blue moon:</b> Hiếm khi xảy ra. (<i>'I only go clubbing once in a blue moon.'</i>)</li>
              <li><b>Cost an arm and a leg:</b> Rất đắt đỏ. (<i>'Flagship smartphones cost an arm and a leg nowadays.'</i>)</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "See eye to eye", ipa: "/siː aɪ tuː aɪ/", meaning: "Đồng thuận, cùng chung chí hướng", example: "They see eye to eye on corporate strategies." },
          { word: "Over the moon", ipa: "/ˈəʊ.vər ðə muːn/", meaning: "Cực kỳ sung sướng, phấn khởi", example: "She was over the moon after acing the interview." },
          { word: "Once in a blue moon", ipa: "/wʌns ɪn ə bluː muːn/", meaning: "Năm thì mười họa, rất hiếm khi", example: "I treat myself to luxury restaurants once in a blue moon." }
        ],
        quiz: {
          question: "Cụm thành ngữ nào đồng nghĩa với việc 'rất hiếm khi xảy ra'?",
          options: ["Over the moon", "Once in a blue moon", "Cost an arm and a leg", "Piece of cake"],
          correct: 1,
          explanation: "'Once in a blue moon' mang nghĩa rất hiếm khi xảy ra."
        }
      }
    ]
  },

  {
    bandId: "band-7-8",
    bandTitle: "Chặng 3: Bứt Phá Đỉnh Cao (Target 7.5 - 8.5)",
    bandDesc: "Thành thạo cấu trúc câu cao cấp (Inversion, Cleft sentences) và từ vựng C2",
    badgeColor: "#059669",
    lessons: [
      {
        id: "ielts-6",
        title: "Ngữ Pháp Đảo Ngữ (Inversion) Gây Ấn Tượng Tuyệt Đối",
        skill: "Writing & Grammar",
        skillIcon: "⚡",
        duration: "15 phút",
        xp: 80,
        summary: "Biến câu văn bình thường thành tuyệt phẩm ngữ pháp đạt điểm Grammatical Range tối đa.",
        content: `
          <h3>🎯 Vũ khí bí mật cho Band 8.0 Writing</h3>
          <p>Chỉ cần 1-2 câu đảo ngữ trong bài luận sẽ chứng minh cho giám khảo thấy năng lực kiểm soát cấu trúc câu phức tạp của bạn.</p>
          <div class="theory-box">
            <h4>Ví dụ Đảo ngữ với 'Not only... but also':</h4>
            <p><b>Câu thường:</b> <i>Smart cities reduce traffic and they also protect the environment.</i></p>
            <p><b>Câu đảo ngữ Band 8.0:</b> <i><b>Not only do smart cities reduce</b> traffic congestion, <b>but they also substantially curb</b> carbon footprints.</i></p>
          </div>
        `,
        vocab: [
          { word: "Inversion", ipa: "/ɪnˈvɜː.ʃən/", meaning: "Hiện tượng đảo ngữ trong ngữ pháp", example: "Inversion adds dramatic emphasis to formal essays." },
          { word: "Curb", ipa: "/kɜːb/", meaning: "Kìm hãm, hạn chế, kìm nén", example: "Strict speed limits help curb road accidents." },
          { word: "Prominent", ipa: "/ˈprɒm.ɪ.nənt/", meaning: "Nổi bật, xuất chúng", example: "She is a prominent researcher in artificial intelligence." }
        ],
        quiz: {
          question: "Điền từ đúng vào câu đảo ngữ: 'Not only ______ he achieve high scores, but he also received a prestigious scholarship.'",
          options: ["does", "did", "was", "has"],
          correct: 1,
          explanation: "Vì vế sau là thì quá khứ ('achieve', 'received') nên trợ động từ đảo ngữ là 'did'."
        }
      }
    ]
  }
];

// ===================================================
// 2. GAME "NGHE NHẠC ĐIỀN TỪ" (MUSIC GAP-FILL)
// Nhúng trực tiếp video YouTube + Lời bài hát đục lỗ ăn điểm XP
// ===================================================
const MUSIC_GAMES_DATA = [
  {
    id: "song-1",
    title: "Die With A Smile",
    artist: "Bruno Mars & Lady Gaga",
    genre: "Pop Ballad • IELTS Speaking",
    youtubeId: "kPa7bsKwL-8",
    xpReward: 60,
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "I just woke up from a dream where you and I had to say ",
        target: "goodbye",
        suffix: ".",
        hint: "Từ 7 chữ cái: Lời tạm biệt",
        options: ["goodbye", "hello", "forever", "nothing"]
      },
      {
        prefix: "If the world was ending, I'd wanna be ",
        target: "next to you",
        suffix: ".",
        hint: "Cụm 3 từ: Bên cạnh bạn",
        options: ["far away", "next to you", "out of town", "on the moon"]
      },
      {
        prefix: "I'd wanna hold you just for a while and ",
        target: "die with a smile",
        suffix: ".",
        hint: "Thành ngữ: Mãn nguyện không hối tiếc",
        options: ["cry all night", "die with a smile", "dance in rain", "stay forever"]
      },
      {
        prefix: "Our precious moments pass in the ",
        target: "blink of an eye",
        suffix: ".",
        hint: "Idiom: Trong nháy mắt, cực nhanh",
        options: ["middle of day", "blink of an eye", "heat of moment", "drop of hat"]
      }
    ],
    vocabToSave: [
      { word: "Die with a smile", ipa: "/daɪ wɪð ə smaɪl/", vi: "Mãn nguyện, không còn gì hối tiếc", example: "If I achieve my lifelong goals, I could die with a smile." },
      { word: "In the blink of an eye", ipa: "/ɪn ðə blɪŋk əv ən aɪ/", vi: "Trong chớp mắt, rất nhanh chóng", example: "Modern trends change in the blink of an eye." },
      { word: "Bittersweet", ipa: "/ˌbɪtəˈswiːt/", vi: "Buồn vui lẫn lộn, ngọt ngào xen tiếc nuối", example: "Graduation was a bittersweet occasion." },
      { word: "Unconditional", ipa: "/ˌʌn.kənˈdɪʃ.ən.əl/", vi: "Vô điều kiện", example: "A mother offers unconditional love." }
    ]
  },
  {
    id: "song-2",
    title: "Espresso",
    artist: "Sabrina Carpenter",
    genre: "Disco-Pop • Casual English & Slang",
    youtubeId: "eVli-tstM5E",
    xpReward: 60,
    cover: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "Say you can't sleep, baby, I know, that's that me, ",
        target: "espresso",
        suffix: ".",
        hint: "Tên một loại cà phê đậm đặc",
        options: ["latte", "espresso", "cappuccino", "macchiato"]
      },
      {
        prefix: "Move it up, down, left, right, ",
        target: "switch it up",
        suffix: " like Nintendo.",
        hint: "Cụm động từ: Thay đổi phong cách mới mẻ",
        options: ["turn it off", "switch it up", "give it away", "break it down"]
      },
      {
        prefix: "She entered the lounge looking effortlessly ",
        target: "nonchalant",
        suffix: ".",
        hint: "Tính từ Band 8.0: Thản nhiên, cực ngầu",
        options: ["nervous", "nonchalant", "confused", "panicked"]
      }
    ],
    vocabToSave: [
      { word: "Nonchalant", ipa: "/ˌnɒn.ʃəl.ənt/", vi: "Thản nhiên, điềm tĩnh cực ngầu", example: "She gave a delightfully nonchalant reply." },
      { word: "Switch it up", ipa: "/swɪtʃ ɪt ʌp/", vi: "Đổi mới phong cách cho thú vị", example: "Let's switch it up and dine somewhere fancy." },
      { word: "Intoxicating", ipa: "/ɪnˈtɒk.sɪ.keɪ.tɪŋ/", vi: "Gây say đắm, mê hoặc lòng người", example: "Her voice has an intoxicating quality." }
    ]
  },
  {
    id: "song-3",
    title: "Anti-Hero",
    artist: "Taylor Swift",
    genre: "Synth-Pop • Psychological Vocab",
    youtubeId: "b1kbLwvqugk",
    xpReward: 60,
    cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "It's me, hi, I'm the ",
        target: "problem",
        suffix: ", it's me.",
        hint: "Từ 7 chữ: Vấn đề, rắc rối",
        options: ["solution", "problem", "master", "shadow"]
      },
      {
        prefix: "At tea time, everybody ",
        target: "agrees",
        suffix: ".",
        hint: "Động từ: Đồng thuận, tán thành",
        options: ["disagrees", "agrees", "leaves", "whispers"]
      },
      {
        prefix: "Sometimes I feel like everybody is a sexy baby, and I'm a monster on the ",
        target: "hill",
        suffix: ".",
        hint: "Từ 4 chữ cái: Ngọn đồi",
        options: ["sea", "hill", "mountain", "cloud"]
      }
    ],
    vocabToSave: [
      { word: "Anti-hero", ipa: "/ˌæn.tiˈhɪə.rəʊ/", vi: "Nhân vật phản anh hùng (nhiều khuyết điểm)", example: "Modern cinema loves complex anti-heroes." },
      { word: "Altruism", ipa: "/ˈæl.tru.ɪ.zəm/", vi: "Lòng vị tha, hy sinh vì người khác", example: "True altruism expects no recognition." },
      { word: "Covert", ipa: "/ˈkəʊ.vɜːt/", vi: "Bí mật, che giấu không công khai", example: "The survey uncovered covert bias in hiring." }
    ]
  }
];

// ===================================================
// 3. TỰ ĐỘNG CẬP NHẬT TIN TỨC RSS (100% MIỄN PHÍ)
// Nguồn RSS: TechCrunch (Công nghệ TG), VnExpress Số Hóa (Công nghệ VN), Fashionista (Thời trang)
// ===================================================
const RSS_SOURCES = [
  {
    category: "fashion",
    name: "Thời Trang Quốc Tế",
    icon: "👗",
    feedUrl: "https://fashionista.com/.rss/full/"
  },
  {
    category: "tech-world",
    name: "Công Nghệ Thế Giới",
    icon: "🌐",
    feedUrl: "https://techcrunch.com/feed/"
  },
  {
    category: "tech-vn",
    name: "Công Nghệ Việt Nam",
    icon: "🇻🇳",
    feedUrl: "https://vnexpress.net/rss/so-hoa.rss"
  }
];

// Dữ liệu tin tức dự phòng sẵn sàng nạp ngay (Zero-latency fallback)
const DEFAULT_NEWS_ARTICLES = [
  {
    id: "news-fashion-1",
    category: "fashion",
    categoryName: "Thời Trang Quốc Tế",
    categoryIcon: "👗",
    title: "Quiet Luxury & Old Money: Khi Sự Tinh Tế Lên Ngôi",
    author: "Vogue Style Monitor",
    published: "Hôm nay",
    coverImg: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60",
    summary: "Thay vì phô trương logo thương hiệu hào nhoáng, giới mộ điệu toàn cầu chuyển hướng sang bespoke tailoring và sự sang trọng kín đáo.",
    content: `The global fashion landscape has embraced a profound paradigm shift towards quiet luxury—often termed the Old Money aesthetic. Rather than parading ostentatious brand logos, discerning connoisseurs invest in bespoke tailoring, neutral palettes, and sumptuous cashmere garments.

This movement celebrates understated elegance, proving that true sophistication whispers rather than screams. Garments are crafted with immaculate attention to detail, boasting timeless silhouettes that transcend fleeting micro-trends.

Furthermore, environmental sociologists emphasize that sustainable craftsmanship is becoming an indispensable cornerstone of ethical consumerism in modern society.`
  },
  {
    id: "news-tech-world-1",
    category: "tech-world",
    categoryName: "Công Nghệ Thế Giới",
    categoryIcon: "🌐",
    title: "Kỷ Nguyên AI Tự Hành (Autonomous Agents): Cách Mạng Năng Suất 2026",
    author: "Tech Horizons Global",
    published: "Vừa cập nhật",
    coverImg: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
    summary: "Từ chatbot hỏi-đáp bị động sang các Trợ lý AI tự hành có khả năng phân tích chuỗi quy trình và tự động thực thi công việc đa nhiệm.",
    content: `Artificial intelligence has progressed past the era of simplistic text chat. Today, industry pioneers deploy autonomous AI agents capable of multistep reasoning, persistent memory, and automated API execution.

These autonomous entities decompose complex business directives into sequential workflows without requiring manual micro-management. By automating repetitive clerical operations, agents alleviate substantial cognitive burden for corporate professionals.

However, computer scientists emphasize that robust verification layers remain crucial to mitigate hallucination risks and ensure data privacy.`
  },
  {
    id: "news-tech-vn-1",
    category: "tech-vn",
    categoryName: "Công Nghệ Việt Nam",
    categoryIcon: "🇻🇳",
    title: "Giao Thông Thông Minh (ITS) & Chuyển Đổi Số Đô Thị Tại Việt Nam",
    author: "Vietnam Digital Gazette",
    published: "Hôm nay",
    coverImg: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&auto=format&fit=crop&q=60",
    summary: "Hệ thống ETC không dừng, camera AI nhận diện biển số và cảm biến đo đếm telemetry đang giải quyết bài toán ùn tắc đô thị tại TP.HCM và Hà Nội.",
    content: `Rapid metropolitan expansion in Ho Chi Minh City and Hanoi has exerted severe pressure on arterial transport corridors. In response, municipal authorities and leading Vietnamese tech corporations are orchestrating comprehensive Intelligent Transportation Systems (ITS).

By synergizing real-time telemetry, automated ETC toll collection, and AI-assisted traffic signaling, cities can actively mitigate congestion during peak commute hours. Commuters benefit from reduced travel latency and lower carbon emissions.

Experts note that continuous transit infrastructure modernization will remain a primary catalyst for Vietnam's economic trajectory in the upcoming decade.`
  }
];

// ===================================================
// 4. TỪ ĐIỂN TỰ ĐỘNG BÔI ĐẬM TỪ B2-C1 (ACADEMIC HIGHLIGHTER)
// Tự động nhận diện từ vựng học thuật trong bài báo để highlight
// ===================================================
const ACADEMIC_VOCAB_DB = {
  "paradigm shift": { ipa: "/ˈpær.ə.daɪm ʃɪft/", vi: "Bước ngoặt tư duy mang tính cách mạng" },
  "quiet luxury": { ipa: "/ˈkwaɪ.ət ˈlʌk.ʃər.i/", vi: "Sự sang trọng thầm lặng, không phô trương" },
  "ostentatious": { ipa: "/ˌɒs.tenˈteɪ.ʃəs/", vi: "Khoe khoang, phô trương kệch cỡm" },
  "connoisseurs": { ipa: "/ˌkɒn.əˈsɜːrz/", vi: "Các chuyên gia có gu thẩm mỹ sành sỏi" },
  "bespoke tailoring": { ipa: "/bɪˈspəʊk ˈteɪ.lər.ɪŋ/", vi: "Trang phục may đo riêng theo số đo" },
  "understated elegance": { ipa: "/ˌʌn.dəˈsteɪ.tɪd ˈel.ɪ.ɡəns/", vi: "Vẻ thanh lịch kín đáo, tinh tế" },
  "silhouettes": { ipa: "/ˌsɪl.uˈets/", vi: "Kiểu dáng, phom dáng trang phục" },
  "sustainable": { ipa: "/səˈsteɪ.nə.bəl/", vi: "Bền vững, thân thiện môi trường" },
  "indispensable": { ipa: "/ˌɪn.dɪˈspen.sə.bəl/", vi: "Tối quan trọng, không thể thiếu" },
  "cornerstone": { ipa: "/ˈkɔː.nə.stəʊn/", vi: "Hòn đá tảng nền móng thiết yếu" },
  "autonomous": { ipa: "/ɔːˈtɒn.ə.məs/", vi: "Tự hành, hoạt động độc lập" },
  "alleviate": { ipa: "/əˈliː.vi.eɪt/", vi: "Làm vơi đi, giảm bớt áp lực gánh nặng" },
  "cognitive burden": { ipa: "/ˈkɒɡ.nə.tɪv ˈbɜː.dən/", vi: "Gánh nặng nhận thức của não bộ" },
  "mitigate": { ipa: "/ˈmɪt.ɪ.ɡeɪt/", vi: "Giảm nhẹ tác hại, làm dịu vấn đề" },
  "hallucination": { ipa: "/həˌluː.sɪˈneɪ.ʃən/", vi: "Thông tin bịa đặt của mô hình AI" },
  "metropolitan": { ipa: "/ˌmet.rəˈpɒl.ɪ.tən/", vi: "Thuộc vùng đô thị lớn" },
  "arterial": { ipa: "/ɑːˈtɪə.ri.əl/", vi: "Tuyến đường huyết mạch trọng điểm" },
  "telemetry": { ipa: "/təˈlem.ə.tri/", vi: "Đo đạc và truyền dữ liệu tự động từ xa" },
  "congestion": { ipa: "/kənˈdʒes.tʃən/", vi: "Tình trạng ùn tắc giao thông" },
  "catalyst": { ipa: "/ˈkæt.əl.ɪst/", vi: "Chất xúc tác thúc đẩy sự phát triển" },
  "substantial": { ipa: "/səbˈstæn.ʃəl/", vi: "Đáng kể, to lớn" },
  "beneficial": { ipa: "/ˌben.ɪˈfɪʃ.əl/", vi: "Có lợi, mang lại hiệu quả tốt" },
  "tackle": { ipa: "/ˈtæk.əl/", vi: "Giải quyết, đối đầu với bài toán khó" },
  "crucial": { ipa: "/ˈkruː.ʃəl/", vi: "Cực kỳ quan trọng, sống còn" }
};
