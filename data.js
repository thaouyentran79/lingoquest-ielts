/**
 * DATA NỘI DUNG LỘ TRÌNH IELTS & TẠP CHÍ BẮT TREND
 * Thiết kế chuẩn EdTech: Trọng tâm là Lộ trình IELTS chuẩn Band điểm
 * Tách riêng phần Tạp chí Đọc báo (Âm nhạc, Thời trang, Công nghệ)
 */

// ===================================================
// 1. LỘ TRÌNH LUYỆN THI IELTS CHÍNH (THEO CÁC BAND ĐIỂM)
// Lấy cảm hứng từ Forum Flash Study nhưng tối ưu cực kỳ dễ xài!
// ===================================================
const IELTS_ROADMAP = [
  {
    bandId: "band-5-6",
    bandTitle: "Chặng 1: Nền Tảng & Phản Xạ (Target 5.5 - 6.0)",
    bandDesc: "Xây gốc từ vựng học thuật cốt lõi và làm chủ phản xạ nói tự nhiên",
    badgeColor: "#38bdf8",
    lessons: [
      {
        id: "ielts-1",
        title: "Kỹ Thuật Paraphrasing & Bộ 30 Synonyms Kinh Điển",
        skill: "Writing & Speaking",
        skillIcon: "✍️",
        duration: "10 phút",
        xp: 40,
        status: "completed", // Chặng đầu mở sẵn
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
        status: "unlocked",
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
        status: "locked",
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
    badgeColor: "#a855f7",
    lessons: [
      {
        id: "ielts-4",
        title: "Writing Task 2: Cấu Trúc Đoạn Văn PEEL Thuyết Phục",
        skill: "Writing",
        skillIcon: "✍️",
        duration: "15 phút",
        xp: 60,
        status: "locked",
        summary: "Viết thân bài luận điểm sắc bén, mạch lạc lạc chuẩn tiêu chí Coherence & Cohesion.",
        content: `
          <h3>🎯 Viết thân bài Task 2 chuẩn khung giám khảo quốc tế</h3>
          <div class="theory-box">
            <h4>Mô hình 4 bước PEEL:</h4>
            <ul>
              <li><b>P (Point - Luận điểm):</b> Nêu câu chủ đề rõ ràng: <i>'First and foremost, remote working substantially cuts commuting overheads.'</i></li>
              <li><b>E (Explanation - Giải thích sâu):</b> Giải thích vì sao: <i>'Employees no longer squander hours stuck in metropolitan traffic gridlocks.'</i></li>
              <li><b>E (Example - Bằng chứng thực tế):</b> Đưa dẫn chứng: <i>'For instance, recent labor surveys in Vietnam reveal that remote staff save up to 10 hours weekly.'</i></li>
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
        status: "locked",
        summary: "Sử dụng thành ngữ tự nhiên đúng ngữ cảnh để chạm ngưỡng Lexical Resource Band 7.5+.",
        content: `
          <h3>🎯 Cách dùng Idioms không bị 'gượng gạo'</h3>
          <p>Giám khảo ghét nhất là thí sinh nhét bừa các thành ngữ sáo rỗng như 'rain cats and dogs'. Hãy dùng những idioms hiện đại, tinh tế sau:</p>
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
    badgeColor: "#ec4899",
    lessons: [
      {
        id: "ielts-6",
        title: "Ngữ Pháp Đảo Ngữ (Inversion) & Cleft Sentences Gây Ấn Tượng",
        skill: "Writing & Grammar",
        skillIcon: "⚡",
        duration: "15 phút",
        xp: 80,
        status: "locked",
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
// 2. TẠP CHÍ ĐỌC BÁO & GIẢI TRÍ (MAGAZINE ARTICLES)
// Trình bày như trang báo chí/tạp chí hiện đại
// 3 Chuyên mục: Âm nhạc US-UK, Thời trang, Công nghệ
// ===================================================
const MAGAZINE_ARTICLES = [
  // --- CHUYÊN MỤC ÂM NHẠC ---
  {
    id: "mag-music-1",
    category: "music",
    categoryName: "Âm Nhạc US-UK",
    categoryIcon: "🎵",
    title: "Die With A Smile - Bản Tình Ca Đạt Hàng Tỷ Lượt Nghe Của Bruno Mars & Lady Gaga",
    subtitle: "Học cách diễn tả cảm xúc thăng hoa và idioms cho bài thi IELTS Speaking",
    author: "Billboard Music Review",
    readTime: "3 phút đọc",
    coverImg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    youtubeId: "kPa7bsKwL-8",
    summary: "Ca khúc thống trị các bảng xếp hạng toàn cầu nhờ giai điệu hoài niệm và ca từ đầy cảm xúc. Cùng mổ xẻ các từ vựng và thành ngữ đắt giá trong bài hát nhé!",
    contentHtml: `
      <p>Sự kết hợp bất ngờ giữa <b>Bruno Mars</b> và <b>Lady Gaga</b> trong ca khúc <i>"Die With A Smile"</i> đã tạo nên cơn địa chấn trong làng nhạc quốc tế. Bài hát mang âm hưởng pop-ballad sâu lắng của thập niên 70, thể hiện tình yêu mãnh liệt và sự trân trọng từng khoảnh khắc bên người thương.</p>
      
      <blockquote>
        "If the world was ending, I'd wanna be next to you.<br>
        If the party was over and our time on Earth was through,<br>
        I'd wanna hold you just for a while and <span class="mag-highlight" onclick="speakEnglish('die with a smile')">die with a smile</span>."
      </blockquote>

      <h4>💎 Giải Mã Từ Lóng & Idioms Ăn Điểm:</h4>
      <ul>
        <li><b>Die with a smile:</b> Mãn nguyện, không còn gì phải ân hận hay hối tiếc. Trong IELTS Speaking, bạn có thể nói: <i>'If I achieved my dream of studying abroad, I could die with a smile.'</i></li>
        <li><b>In the blink of an eye:</b> Trong nháy mắt, cực kỳ nhanh chóng. Thay thế hoàn hảo cho từ đơn giản <i>'very fast'</i>.</li>
        <li><b>Bittersweet:</b> Buồn vui lẫn lộn, ngọt ngào xen lẫn tiếc nuối (từ vựng Band 7.5).</li>
      </ul>
    `,
    vocabList: [
      { word: "Bittersweet", ipa: "/ˌbɪtəˈswiːt/", meaning: "Vừa vui vừa tiếc nuối", example: "Graduating was a bittersweet milestone." },
      { word: "Serenade", ipa: "/ˌser.əˈneɪd/", meaning: "Hát bản tình ca tán tỉnh", example: "He serenaded her under the moonlight." },
      { word: "Unconditional", ipa: "/ˌʌn.kənˈdɪʃ.ən.əl/", meaning: "Vô điều kiện", example: "Maternal love is unconditional." }
    ]
  },
  {
    id: "mag-music-2",
    category: "music",
    categoryName: "Âm Nhạc US-UK",
    categoryIcon: "🎵",
    title: "Espresso - Sabrina Carpenter: Cơn Sốt Cà Phê Disco-Pop Khiến Giới Trẻ Mê Mẩn",
    subtitle: "Học cách nói tự tin, dí dỏm chuẩn phong cách bản xứ Gen Z",
    author: "Rolling Stone Magazine",
    readTime: "3 phút đọc",
    coverImg: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=60",
    youtubeId: "eVli-tstM5E",
    summary: "Điệu nhảy vui nhộn và giai điệu bắt tai của Espresso đã càn quét TikTok. Cùng học các cụm từ lóng cực tự nhiên cho IELTS Speaking Part 1.",
    contentHtml: `
      <p>Với điệp khúc dí dỏm <i>"That's that me, espresso"</i>, Sabrina Carpenter đã ví sự quyến rũ khó cưỡng của mình giống như một tách espresso đậm đặc khiến đối phương trằn trọc không thể ngủ.</p>
      
      <h4>💎 Từ Vựng & Cụm Từ Thời Thượng:</h4>
      <ul>
        <li><b>Nonchalant:</b> Thờ ơ, thản nhiên, tỏ vẻ ngầu không bận tâm thế sự (Từ vựng Band 8.0 cực xịn).</li>
        <li><b>Switch it up:</b> Đổi mới phong cách, làm điều gì đó khác lạ thường ngày.</li>
        <li><b>Intoxicating:</b> Làm say mê, gây cuốn hút mãnh liệt.</li>
      </ul>
    `,
    vocabList: [
      { word: "Nonchalant", ipa: "/ˌnɒn.ʃəl.ənt/", meaning: "Thản nhiên, điềm tĩnh cực ngầu", example: "She gave a delightfully nonchalant reply." },
      { word: "Intoxicating", ipa: "/ɪnˈtɒk.sɪ.keɪ.tɪŋ/", meaning: "Gây say đắm, mê hoặc", example: "The perfume has an intoxicating aroma." },
      { word: "Switch it up", ipa: "/swɪtʃ ɪt ʌp/", meaning: "Thay đổi phong cách cho mới mẻ", example: "Let's switch it up tonight." }
    ]
  },

  // --- CHUYÊN MỤC THỜI TRANG ---
  {
    id: "mag-fashion-1",
    category: "fashion",
    categoryName: "Thời Trang & Lifestyle",
    categoryIcon: "👗",
    title: "Quiet Luxury & Phong Cách Old Money: Khi Sự Tinh Tế Lên Ngôi",
    subtitle: "Giải mã xu hướng ăn mặc tối giản, sang trọng không phô trương",
    author: "Vogue International",
    readTime: "4 phút đọc",
    coverImg: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60",
    summary: "Thay vì khoe mẽ logo hàng hiệu cỡ lớn, giới thượng lưu ngày nay chuộng trang phục may đo tinh xảo với gam màu trung tính nhã nhặn.",
    contentHtml: `
      <p>Khác biệt hoàn toàn với trào lưu khoe mẽ logo thương hiệu (logomania), làn sóng <b>Quiet Luxury</b> (Sang trọng thầm lặng) hay còn gọi là <i>Old Money Aesthetic</i> đang thống trị các sàn diễn thời trang thế giới.</p>
      
      <p>Người sành điệu không cần quần áo gắn mác to tướng. Họ tìm kiếm những bộ trang phục <span class="mag-highlight" onclick="speakEnglish('bespoke tailoring')">bespoke tailoring</span> (may đo riêng), chất liệu len cashmere thượng hạng và đường may hoàn mỹ. Đó chính là vẻ đẹp của <span class="mag-highlight" onclick="speakEnglish('understated elegance')">understated elegance</span> (sự thanh lịch kín đáo).</p>

      <h4>💎 Từ Vựng Học Thuật Nâng Band Cực Đẹp:</h4>
      <ul>
        <li><b>Understated:</b> Kín đáo, không phô trương, tinh tế.</li>
        <li><b>Bespoke:</b> Đặt may đo riêng theo số đo chuẩn xác.</li>
        <li><b>Ostentatious:</b> Khoe khoang, phô trương kệch cỡm (từ trái nghĩa hoàn hảo).</li>
        <li><b>Connoisseur:</b> Chuyên gia sành sỏi, người có gu thẩm mỹ cao.</li>
      </ul>
    `,
    vocabList: [
      { word: "Understated", ipa: "/ˌʌn.dəˈsteɪ.tɪd/", meaning: "Kín đáo, tinh tế, không khoe của", example: "Her understated dress won high praise." },
      { word: "Bespoke", ipa: "/bɪˈspəʊk/", meaning: "May đo riêng theo yêu cầu", example: "He wore a bespoke Italian suit." },
      { word: "Ostentatious", ipa: "/ˌɒs.tenˈteɪ.ʃəs/", meaning: "Khoe khoang phô trương lộ liễu", example: "She avoids ostentatious jewelry." }
    ]
  },
  {
    id: "mag-fashion-2",
    category: "fashion",
    categoryName: "Thời Trang & Lifestyle",
    categoryIcon: "👗",
    title: "Thời Trang Tuần Hoàn: Cách Thế Hệ Trẻ Giải Cứu Trái Đất Qua Tủ Quần Áo",
    subtitle: "Chủ đề môi trường & tiêu dùng xuất hiện liên tục trong đề thi IELTS",
    author: "Elle Green Edition",
    readTime: "3 phút đọc",
    coverImg: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60",
    summary: "Ngành thời trang nhanh (Fast fashion) đang xả thải khổng lồ. Phong trào Upcycling và kinh tế tuần hoàn đang trở thành phong cách sống mới.",
    contentHtml: `
      <p>Thời trang nhanh giá rẻ đang để lại một <span class="mag-highlight" onclick="speakEnglish('carbon footprint')">carbon footprint</span> (dấu chân carbon) khổng lồ cho bầu khí quyển. Hàng triệu tấn quần áo khó phân hủy bị chôn vùi tại các bãi rác mỗi năm.</p>
      
      <p>Để cứu vãn tình thế, thế hệ trẻ đang thúc đẩy nền kinh tế tuần hoàn qua trào lưu <span class="mag-highlight" onclick="speakEnglish('upcycling')">upcycling</span> (tái chế nâng cấp đồ cũ thành món đồ giá trị cao hơn) và tiêu dùng có đạo đức (ethical consumerism).</p>
    `,
    vocabList: [
      { word: "Biodegradable", ipa: "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/", meaning: "Phân hủy sinh học tự nhiên", example: "Biodegradable fabrics reduce landfill waste." },
      { word: "Upcycling", ipa: "/ˈʌpˌsaɪ.klɪŋ/", meaning: "Tái chế nâng cấp giá trị cao hơn", example: "Upcycling denim jackets is trendy." },
      { word: "Mitigate", ipa: "/ˈmɪt.ɪ.ɡeɪt/", meaning: "Làm dịu bớt, giảm nhẹ tác hại", example: "Renewable energy mitigates pollution." }
    ]
  },

  // --- CHUYÊN MỤC CÔNG NGHỆ ---
  {
    id: "mag-tech-1",
    category: "tech",
    categoryName: "Công Nghệ & AI",
    categoryIcon: "🚀",
    title: "Từ Chatbot Đến Trợ Lý Tự Hành (AI Agents): Kỷ Nguyên Làm Việc Mới",
    subtitle: "Cách AI thay đổi năng suất lao động và vốn từ học thuật cho Task 2",
    author: "Tech Horizons Review",
    readTime: "4 phút đọc",
    coverImg: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
    summary: "Không chỉ dừng lại ở việc gõ chữ trò chuyện, các AI Agent ngày nay có thể tự lập kế hoạch, tự chạy lệnh và tự động hóa toàn bộ quy trình công việc phức tạp.",
    contentHtml: `
      <p>Thế giới công nghệ đang chứng kiến một bước ngoặt mang tính cách mạng: <span class="mag-highlight" onclick="speakEnglish('paradigm shift')">paradigm shift</span> từ các chatbot bị động sang các Trợ lý AI tự hành (<span class="mag-highlight" onclick="speakEnglish('autonomous agents')">autonomous agents</span>).</p>
      
      <p>Khác với việc người dùng phải nhắc từng lệnh, Agent sở hữu bộ nhớ, công cụ và khả năng lập luận đa bước. Chúng giải phóng con người khỏi những gánh nặng nhận thức (<span class="mag-highlight" onclick="speakEnglish('cognitive burden')">cognitive burden</span>) và các công việc hành chính thủ công lặp đi lặp lại.</p>
    `,
    vocabList: [
      { word: "Paradigm shift", ipa: "/ˈpær.ə.daɪm ʃɪft/", meaning: "Bước ngoặt tư duy mang tính cách mạng", example: "AI sparked a paradigm shift in education." },
      { word: "Autonomous", ipa: "/ɔːˈtɒn.ə.məs/", meaning: "Tự hành, hoạt động độc lập", example: "Autonomous drones monitor traffic conditions." },
      { word: "Alleviate", ipa: "/əˈliː.vi.eɪt/", meaning: "Xoa dịu, giảm tải áp lực gánh nặng", example: "Smart tools alleviate operational stress." }
    ]
  },
  {
    id: "mag-tech-2",
    category: "tech",
    categoryName: "Công Nghệ & AI",
    categoryIcon: "🚀",
    title: "Giao Thông Thông Minh (ITS): Lời Giải Cho Ùn Tắc Đô Thị Đông Nam Á",
    subtitle: "Chủ đề Smart City kinh điển trong đề thi IELTS Reading & Writing",
    author: "Urban Infrastructure Journal",
    readTime: "3.5 phút đọc",
    coverImg: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&auto=format&fit=crop&q=60",
    summary: "Thu phí không dừng (ETC), đèn tín hiệu điều khiển bằng AI và cảm biến đo lường từ xa đang giải cứu các thành phố lớn khỏi kẹt xe giờ cao điểm.",
    contentHtml: `
      <p>Sự gia tăng phương tiện nhanh chóng tại các vùng đô thị lớn (<span class="mag-highlight" onclick="speakEnglish('metropolitan areas')">metropolitan areas</span>) đòi hỏi các giải pháp công nghệ hiện đại.</p>
      
      <p>Hệ thống Giao thông thông minh (ITS) kết hợp dữ liệu cảm biến từ xa (<span class="mag-highlight" onclick="speakEnglish('telemetry')">telemetry</span>) với thuật toán học máy giúp cơ quan quản lý điều tiết dòng xe theo thời gian thực và <span class="mag-highlight" onclick="speakEnglish('mitigate congestion')">mitigate congestion</span> (giảm thiểu ùn tắc) trên các tuyến đường huyết mạch.</p>
    `,
    vocabList: [
      { word: "Congestion", ipa: "/kənˈdʒes.tʃən/", meaning: "Tình trạng ùn tắc giao thông", example: "Traffic congestion costs billions annually." },
      { word: "Metropolitan", ipa: "/ˌmet.rəˈpɒl.ɪ.tən/", meaning: "Thuộc vùng đô thị lớn", example: "Metropolitan living requires efficient mass transit." },
      { word: "Telemetry", ipa: "/təˈlem.ə.tri/", meaning: "Hệ thống đo đạc truyền dữ liệu từ xa", example: "Sensors transmit real-time telemetry." }
    ]
  }
];

// ===================================================
// 3. TOÀN BỘ TỪ VỰNG CHO ĐẤU TRƯỜNG MINI-GAMES
// ===================================================
const ALL_VOCABULARY_POOL = [
  { word: "Crucial", ipa: "/ˈkruː.ʃəl/", vi: "Cực kỳ quan trọng, sống còn", example: "Early preparation is crucial for IELTS." },
  { word: "Beneficial", ipa: "/ˌben.ɪˈfɪʃ.əl/", vi: "Có lợi, mang lại hiệu quả tốt", example: "Reading daily is immensely beneficial." },
  { word: "Tackle", ipa: "/ˈtæk.əl/", vi: "Giải quyết, xử lý vấn đề", example: "The government took steps to tackle inflation." },
  { word: "Substantial", ipa: "/səbˈstæn.ʃəl/", vi: "Đáng kể, to lớn", example: "We noticed a substantial improvement." },
  { word: "Understated", ipa: "/ˌʌn.dəˈsteɪ.tɪd/", vi: "Kín đáo, thanh lịch tinh tế", example: "Quiet luxury celebrates understated chic." },
  { word: "Nonchalant", ipa: "/ˌnɒn.ʃəl.ənt/", vi: "Thản nhiên, điềm tĩnh cực ngầu", example: "He gave a wonderfully nonchalant smirk." },
  { word: "Autonomous", ipa: "/ɔːˈtɒn.ə.məs/", vi: "Tự hành, hoạt động độc lập", example: "Autonomous agents handle complex pipelines." },
  { word: "Congestion", ipa: "/kənˈdʒes.tʃən/", vi: "Sự ùn tắc giao thông", example: "Smart signals mitigate traffic congestion." }
];
