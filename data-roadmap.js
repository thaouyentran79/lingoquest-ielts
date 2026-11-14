/**
 * IELTS BEE 🐝 - LỘ TRÌNH 20 CHẶNG HỌC CHUYÊN SÂU (BAND 5.0 -> 8.5)
 * 4 Giai đoạn:
 * 1. Khởi động (Band 5.0 - Xây gốc vững chắc) - 5 Chặng
 * 2. Tăng tốc (Band 6.0 - Tư duy phản biện) - 5 Chặng
 * 3. Bứt phá (Band 7.0 - Lập luận đa chiều) - 5 Chặng
 * 4. Chinh phục (Band 8.0+ - Làm chủ ngôn ngữ) - 5 Chặng
 * Mỗi chặng có đủ 3 phần: Kiến thức cốt lõi, Bảng từ vựng mở rộng (6-8 từ), 5 câu hỏi trắc nghiệm kèm giải thích chi tiết!
 */

const IELTS_ROADMAP = [
  // =========================================================================
  // GIAI ĐOẠN 1: KHỞI ĐỘNG (BAND 5.0 - XÂY GỐC VỮNG CHẮC) - 5 BÀI
  // =========================================================================
  {
    bandId: "phase-1",
    bandTitle: "Giai Đoạn 1: Khởi Động (Target Band 5.0 - 5.5)",
    bandDesc: "Chuẩn hóa phát âm IPA, kỹ thuật Paraphrase cơ bản và làm chủ phản xạ Speaking Part 1",
    badgeColor: "#d97706",
    lessons: [
      {
        id: "stage-1",
        stageNum: 1,
        title: "Kỹ Thuật Paraphrasing & Bộ 30 Synonyms Kinh Điển",
        skill: "Writing & Speaking",
        skillIcon: "✍️",
        duration: "15 phút",
        xp: 50,
        summary: "Bí quyết diễn đạt một ý bằng nhiều cách để tránh lặp từ và nâng điểm Lexical Resource ngay lập tức.",
        content: `
          <h3>🎯 1. Bản chất của Paraphrasing trong bài thi IELTS</h3>
          <p>Giám khảo IELTS luôn quan sát khả năng biến hóa từ vựng và cấu trúc câu của thí sinh. Khi đề bài đưa ra một câu hỏi, việc lặp lại nguyên văn từ ngữ của đề bài sẽ khiến bạn bị chặn điểm ở mức Band 5.0.</p>
          
          <div class="theory-box">
            <h4>💡 3 Phương pháp Paraphrase kinh điển nhất:</h4>
            <ul>
              <li><b>Phương pháp 1 - Dùng từ đồng nghĩa (Synonyms):</b> Thay thế từ đơn giản bằng từ học thuật có cùng trường nghĩa.<br>
                <i>Ví dụ:</i> "Air pollution is a <b>big problem</b>" ➔ "Atmospheric contamination represents a <b>grave issue</b>."</li>
              <li><b>Phương pháp 2 - Chuyển đổi từ loại (Word Family):</b> Chuyển từ động từ sang danh từ hoặc tính từ sang trạng từ.<br>
                <i>Ví dụ:</i> "Technology <b>develops rapidly</b>" ➔ "The <b>rapid development</b> of technology."</li>
              <li><b>Phương pháp 3 - Đổi thể chủ động sang bị động (Active to Passive):</b><br>
                <i>Ví dụ:</i> "Human activities destroy the environment" ➔ "The environment is heavily devastated by anthropogenic activities."</li>
            </ul>
          </div>
          <p><b>Lời khuyên từ giám khảo:</b> Chỉ paraphrase khi bạn chắc chắn 100% ngữ cảnh phù hợp. Tránh nhồi nhét từ vựng lạ khiến câu văn trở nên gượng gạo và sai lệch nghĩa gốc.</p>
        `,
        vocab: [
          { word: "Crucial", ipa: "/ˈkruː.ʃəl/", pos: "adj", vi: "Cực kỳ quan trọng, sống còn", example: "Early intervention plays a crucial role in curbing diseases.", synonyms: "Vital, pivotal, essential" },
          { word: "Substantial", ipa: "/səbˈstæn.ʃəl/", pos: "adj", vi: "Đáng kể, to lớn", example: "The factory reported a substantial reduction in waste.", synonyms: "Considerable, significant" },
          { word: "Beneficial", ipa: "/ˌben.ɪˈfɪʃ.əl/", pos: "adj", vi: "Có lợi, mang lại hiệu quả tốt", example: "Regular physical exercise is beneficial for heart health.", synonyms: "Advantageous, wholesome" },
          { word: "Tackle", ipa: "/ˈtæk.əl/", pos: "verb", vi: "Giải quyết, đối phó bài toán khó", example: "Governments must collaborate to tackle global warming.", synonyms: "Address, combat, confront" },
          { word: "Detrimental", ipa: "/ˌdet.rɪˈmen.təl/", pos: "adj", vi: "Có hại, gây tổn hại lớn", example: "Smoking exerts detrimental effects on pulmonary capacity.", synonyms: "Harmful, damaging" },
          { word: "Mitigate", ipa: "/ˈmɪt.ɪ.ɡeɪt/", pos: "verb", vi: "Giảm nhẹ tác hại, làm dịu", example: "Solar panels mitigate the burden on national electrical grids.", synonyms: "Alleviate, diminish" },
          { word: "Ubiquitous", ipa: "/juːˈbɪk.wɪ.təs/", pos: "adj", vi: "Phổ biến khắp mọi nơi", example: "Mobile payment has become ubiquitous in metropolitan centers.", synonyms: "Pervasive, widespread" }
        ],
        quizzes: [
          {
            q: "Từ nào đồng nghĩa và nâng band tốt nhất cho từ 'Important' trong bài luận học thuật?",
            opts: ["Crucial", "Big", "Nice", "Heavy"],
            correct: 0,
            exp: "'Crucial' mang nghĩa cực kỳ quan trọng, có tính sống còn, chuẩn phong cách IELTS Academic."
          },
          {
            q: "Cách paraphrase nào đổi từ loại đúng cho câu: 'The economy expanded rapidly last year'?",
            opts: ["The rapid expansion of the economy occurred last year", "The economy was big last year", "Rapid economy expand last year", "The economy expand quickly"],
            correct: 0,
            exp: "Đổi động từ 'expanded rapidly' sang cụm danh từ 'rapid expansion' là kỹ thuật biến đổi từ loại chuẩn xác."
          },
          {
            q: "Chọn từ trái nghĩa với 'Beneficial' (Có lợi):",
            opts: ["Detrimental (Có hại)", "Advantageous (Có lợi)", "Crucial (Quan trọng)", "Helpful (Hữu ích)"],
            correct: 0,
            exp: "'Detrimental' nghĩa là gây hại, tổn hại, đối lập hoàn toàn với 'Beneficial'."
          },
          {
            q: "Từ nào thay thế tốt nhất cho từ 'Solve' trong cụm 'solve the problem of traffic'?",
            opts: ["Tackle", "Do", "Make", "Hold"],
            correct: 0,
            exp: "'Tackle the problem' là collocation học thuật rất phổ biến trong đề thi Writing & Speaking."
          },
          {
            q: "Khi paraphrase, nguyên tắc nào sau đây là BẮT BUỘC?",
            opts: ["Phải giữ nguyên ý nghĩa cốt lõi của câu gốc", "Phải dùng từ dài nhất có thể", "Bắt buộc đổi 100% tất cả các từ", "Dịch từng từ sang tiếng Việt"],
            correct: 0,
            exp: "Bảo toàn ý nghĩa nguyên vẹn của câu là tiêu chuẩn số 1, không được làm méo mó thông điệp."
          }
        ]
      },
      {
        id: "stage-2",
        stageNum: 2,
        title: "Speaking Part 1: Bí Kíp Mở Rộng Ý Với Công Thức A.R.E.A",
        skill: "Speaking",
        skillIcon: "🗣️",
        duration: "15 phút",
        xp: 50,
        summary: "Không bao giờ bí ý hay trả lời cộc lốc nhờ công thức Answer - Reason - Example - Alternative.",
        content: `
          <h3>🎯 1. Sai lầm kinh điển: Trả lời cộc lốc</h3>
          <p>Khi giám khảo hỏi <i>'Do you like reading books?'</i>, thí sinh Band 5.0 thường chỉ đáp: <i>'Yes, I like reading books very much because it is interesting.'</i> rồi im bặt. Câu trả lời này quá ngắn và nghèo nàn cấu trúc.</p>

          <div class="theory-box">
            <h4>🏆 Công thức 4 bước A.R.E.A:</h4>
            <ul>
              <li><b>A (Answer - Trả lời trực diện):</b> Trả lời thẳng thắn kèm từ vựng nâng cấp.<br>
                <i>'Yes, without a doubt, I would consider myself an avid bibliophile.'</i></li>
              <li><b>R (Reason - Nêu lý do):</b> Giải thích nguyên nhân sâu xa.<br>
                <i>'Because immersing myself in fiction allows me to decompress after grueling working hours.'</i></li>
              <li><b>E (Example - Đưa ví dụ minh họa):</b> Dẫn chứng thói quen thực tế.<br>
                <i>'For instance, I make it a habit to devour at least two chapters before bedtime.'</i></li>
              <li><b>A (Alternative - Giả định ngược lại):</b> Giả sử nếu không có điều đó thì sao.<br>
                <i>'If I didn't cultivate this habit, my daily routine would feel rather monotonous.'</i></li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Avid", ipa: "/ˈæv.ɪd/", pos: "adj", vi: "Đam mê, khao khát nhiệt thành", example: "She is an avid reader of historical biographies.", synonyms: "Keen, enthusiastic, passionate" },
          { word: "Grueling", ipa: "/ˈɡruː.ə.lɪŋ/", pos: "adj", vi: "Căng thẳng, vắt kiệt sức lực", example: "After a grueling 10-hour shift, he rested completely.", synonyms: "Exhausting, arduous, punishing" },
          { word: "Decompress", ipa: "/ˌdiː.kəmˈpres/", pos: "verb", vi: "Xả hơi, giải tỏa căng thẳng", example: "Listening to soft jazz helps me decompress.", synonyms: "Unwind, relax" },
          { word: "Monotonous", ipa: "/məˈnɒt.ən.əs/", pos: "adj", vi: "Đơn điệu, tẻ nhạt nhàm chán", example: "Clerical filing can quickly become monotonous.", synonyms: "Tedious, repetitive, boring" },
          { word: "Devour", ipa: "/dɪˈvaʊ.ər/", pos: "verb", vi: "Ngấu nghiến đọc hết cuốn sách", example: "He devoured the entire trilogy over one weekend.", synonyms: "Consume eagerly, read ravenously" },
          { word: "Bibliophile", ipa: "/ˈbɪb.li.ə.faɪl/", pos: "noun", vi: "Người mê đọc sách, mọt sách", example: "As a bibliophile, his shelves are overflowing with classics.", synonyms: "Book lover, avid reader" },
          { word: "Sedentary", ipa: "/ˈsed.ən.tər.i/", pos: "adj", vi: "Ít vận động, ngồi nhiều", example: "Office workers must counter a sedentary lifestyle with exercise.", synonyms: "Desk-bound, inactive" }
        ],
        quizzes: [
          {
            q: "Chữ cái 'R' trong công thức A.R.E.A đại diện cho bước nào?",
            opts: ["Reason (Nêu lý do giải thích)", "Reading", "Repetition", "Relaxation"],
            correct: 0,
            exp: "'Reason' là bước nêu lý do tại sao bạn lại có sở thích hay quan điểm đó."
          },
          {
            q: "Từ nào dùng để miêu tả một công việc 'cực kỳ mệt mỏi và kiệt sức'?",
            opts: ["Grueling", "Sedentary", "Avid", "Monotonous"],
            correct: 0,
            exp: "'Grueling' có nghĩa là gây kiệt sức, đầy gian khổ và áp lực."
          },
          {
            q: "Bước 'Alternative' (Giả định ngược lại) giúp câu trả lời thể hiện điều gì?",
            opts: ["Năng lực dùng câu điều kiện và ngữ pháp phức tạp", "Nói dài lê thê không mục đích", "Lặp lại câu hỏi của giám khảo", "Đổi chủ đề câu hỏi"],
            correct: 0,
            exp: "Bước Alternative thường dùng câu điều kiện (If I didn't...) giúp tăng điểm Grammatical Range."
          },
          {
            q: "Từ đồng nghĩa với 'Unwind / Relax' (giải tỏa căng thẳng) là từ nào?",
            opts: ["Decompress", "Devour", "Tackle", "Congest"],
            correct: 0,
            exp: "'Decompress' là từ vựng rất hay mang nghĩa xả hơi, phục hồi tinh thần sau áp lực."
          },
          {
            q: "Độ dài lý tưởng cho một câu trả lời Speaking Part 1 là bao nhiêu câu?",
            opts: ["3 - 4 câu phát triển trọn vẹn", "Chỉ 1 câu duy nhất", "10 - 15 câu như bài thuyết trình", "Càng ngắn càng tốt"],
            correct: 0,
            exp: "Trong Part 1, độ dài chuẩn là 3-4 câu (khoảng 15-20 giây) vừa đủ ý mà không bị lan man."
          }
        ]
      },
      {
        id: "stage-3",
        stageNum: 3,
        title: "Reading: Kỹ Thuật Skimming & Scanning Định Vị Từ Khóa",
        skill: "Reading",
        skillIcon: "📖",
        duration: "15 phút",
        xp: 50,
        summary: "Đọc nhanh 3 bài văn dài 2700 từ trong 60 phút mà không cần dịch từng câu chữ.",
        content: `
          <h3>🎯 1. Hai vũ khí tối thượng của bài thi IELTS Reading</h3>
          <p>Thí sinh thất bại trong bài đọc IELTS 80% là do thiếu thời gian. Bạn không thể đọc từng từ một (word-by-word reading). Bạn cần làm chủ 2 thao tác mắt:</p>

          <div class="theory-box">
            <h4>📖 Phân biệt Skimming và Scanning:</h4>
            <ul>
              <li><b>Skimming (Đọc lướt nhanh lấy ý chính):</b> Mắt lướt nhanh qua tiêu đề, đoạn mở đầu, câu đầu tiên (Topic Sentence) và câu kết của từng đoạn để nắm sơ đồ tư duy toàn bài trong 2-3 phút.</li>
              <li><b>Scanning (Quét tìm từ khóa cụ thể):</b> Mắt quét như tính năng Ctrl+F trên máy tính, chỉ tìm kiếm các dấu mốc bất biến: Tên riêng (viết hoa), Năm tháng, Số liệu, Thuật ngữ chuyên ngành.</li>
            </ul>
          </div>
          <p><b>Bẫy thường gặp (Distractors):</b> Chú ý các từ phủ định hoặc chuyển hướng như <i>'However, Although, Despite, In contrast'</i> vì đáp án thật thường nằm ngay sau những từ này.</p>
        `,
        vocab: [
          { word: "Skim", ipa: "/skɪm/", pos: "verb", vi: "Đọc lướt nhanh nắm bắt ý chính", example: "Skim the passage before checking the multiple choice options.", synonyms: "Browse, glance through" },
          { word: "Scan", ipa: "/skæn/", pos: "verb", vi: "Quét mắt tìm từ khóa cụ thể", example: "Scan the article for dates, monetary figures, and names.", synonyms: "Search, pinpoint" },
          { word: "Distractor", ipa: "/dɪˈstræk.tər/", pos: "noun", vi: "Thông tin gây nhiễu, bẫy trắc nghiệm", example: "Multiple choice options always contain plausible distractors.", synonyms: "Trap, deceptive option" },
          { word: "Deduce", ipa: "/dɪˈdʒuːs/", pos: "verb", vi: "Suy luận logic từ bằng chứng", example: "Readers can deduce the author's stance from contextual clues.", synonyms: "Infer, conclude" },
          { word: "Empirical", ipa: "/ɪmˈpɪr.ɪ.kəl/", pos: "adj", vi: "Dựa trên thực nghiệm, số liệu thực tế", example: "The researchers gathered empirical evidence to support their claim.", synonyms: "Observed, experimental" },
          { word: "Corroborate", ipa: "/kəˈrɒb.ə.reɪt/", pos: "verb", vi: "Chứng thực, xác minh bằng chứng", example: "Recent satellite data corroborates earlier climate predictions.", synonyms: "Confirm, verify, substantiate" },
          { word: "Ambiguous", ipa: "/æmˈbɪɡ.ju.əs/", pos: "adj", vi: "Mơ hồ, đa nghĩa, không rõ ràng", example: "The conclusion was ambiguous, leading to varied interpretations.", synonyms: "Equivocal, obscure, vague" }
        ],
        quizzes: [
          {
            q: "Kỹ năng 'Scanning' được áp dụng tối ưu nhất khi làm gì?",
            opts: ["Tìm tên riêng, con số hoặc năm tháng cụ thể", "Đọc thưởng thức văn chương", "Học thuộc lòng từ mới", "Dịch toàn bộ bài đọc"],
            correct: 0,
            exp: "Scanning dùng để quét nhanh tìm các từ khóa dễ nhận diện như số liệu, năm, tên riêng."
          },
          {
            q: "Khi 'Skimming' một đoạn văn, vị trí nào quan trọng nhất cần chú ý?",
            opts: ["Câu đầu tiên và câu cuối cùng của đoạn", "Chỉ các từ ngữ ở giữa đoạn", "Dòng cuối cùng của cả trang", "Các dấu chấm phẩy"],
            correct: 0,
            exp: "Câu đầu (Topic sentence) và câu cuối thường thâu tóm luận điểm chính của cả đoạn."
          },
          {
            q: "Từ nào đồng nghĩa với 'Infer / Conclude' (suy luận)?",
            opts: ["Deduce", "Distract", "Devour", "Degrade"],
            correct: 0,
            exp: "'Deduce' có nghĩa là suy luận logic dựa trên những dữ kiện đã có."
          },
          {
            q: "Từ 'Distractor' trong bài thi Reading chỉ điều gì?",
            opts: ["Lựa chọn bẫy đánh lừa thí sinh", "Câu trả lời đúng", "Tên của tác giả", "Hình vẽ minh họa"],
            correct: 0,
            exp: "Distractors là các phương án gây nhiễu, trông có vẻ đúng nhưng thực chất chứa thông tin sai lệch."
          },
          {
            q: "Từ nào chỉ bằng chứng 'dựa trên thực nghiệm và quan sát thực tế'?",
            opts: ["Empirical", "Ambiguous", "Avid", "Grueling"],
            correct: 0,
            exp: "'Empirical' (thực nghiệm) mô tả kiến thức thu được qua kiểm chứng thực tế thay vì lý thuyết suông."
          }
        ]
      },
      {
        id: "stage-4",
        stageNum: 4,
        title: "Listening: Nhận Diện Bẫy Distractors & Chuyển Hướng",
        skill: "Listening",
        skillIcon: "🎧",
        duration: "15 phút",
        xp: 50,
        summary: "Bắt trọn thông tin sửa sai tự nhiên của người bản xứ và tránh mất điểm ngớ ngẩn trong Part 1 & 2.",
        content: `
          <h3>🎯 1. Bẫy tự sửa (Self-correction) trong IELTS Listening</h3>
          <p>Trong thực tế giao tiếp, người bản xứ thường buột miệng nói một con số, sau đó lập tức đính chính lại. Đề thi IELTS Listening Part 1 và Part 2 khai thác bẫy này với tần suất cực kỳ cao.</p>

          <div class="theory-box">
            <h4>🎧 Ví dụ bẫy kinh điển:</h4>
            <p><b>Người nói:</b> <i>"I'll book the room for Tuesday the 14th... Oh wait, sorry, my schedule is packed, let's make it Thursday the 16th instead."</i></p>
            <p>➔ Thí sinh vội vàng ghi <b>14th</b> sẽ mất điểm. Đáp án chính xác phải là <b>16th</b>!</p>
            <h4>Dấu hiệu nhận biết sắp có thông tin lật ngược:</h4>
            <ul>
              <li><i>"Actually, ...", "No, wait a second...", "I almost forgot...", "Instead of that..."</i></li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Correction", ipa: "/kəˈrek.ʃən/", pos: "noun", vi: "Sự đính chính, sửa lại cho đúng", example: "Listen carefully for any mid-sentence corrections.", synonyms: "Revision, amendment" },
          { word: "Spontaneous", ipa: "/spɒnˈteɪ.ni.əs/", pos: "adj", vi: "Tự phát, tự nhiên không chuẩn bị trước", example: "Spontaneous dialogues often contain pauses and hesitations.", synonyms: "Unplanned, natural" },
          { word: "Synonymous", ipa: "/sɪˈnɒn.ɪ.məs/", pos: "adj", vi: "Đồng nghĩa, tương đương", example: "Audio cues are rarely identical; they use synonymous terms.", synonyms: "Equivalent, interchangeable" },
          { word: "Precondition", ipa: "/ˌpriː.kənˈdɪʃ.ən/", pos: "noun", vi: "Điều kiện tiên quyết", example: "Familiarity with numbers is a precondition for Section 1.", synonyms: "Prerequisite, requirement" },
          { word: "Monologue", ipa: "/ˈmɒn.əl.ɒɡ/", pos: "noun", vi: "Đoạn độc thoại (đặc trưng Section 2 & 4)", example: "Section 4 presents an academic monologue on anthropology.", synonyms: "Solo speech, address" },
          { word: "Signpost", ipa: "/ˈsaɪn.pəʊst/", pos: "noun", vi: "Từ chỉ dẫn chuyển đoạn bài nói", example: "Signpost words like 'Turning now to...' signal transition.", synonyms: "Indicator, verbal cue" },
          { word: "Discrepancy", ipa: "/dɪˈskrep.ən.si/", pos: "noun", vi: "Sự sai lệch, bất nhất", example: "Identify the discrepancy between the recording and the form.", synonyms: "Inconsistency, divergence" }
        ],
        quizzes: [
          {
            q: "Khi người nói trong audio phát âm: 'Actually, let's make it 5 PM instead', thông tin nào là đáp án đúng?",
            opts: ["5 PM", "Giờ họ nói trước từ 'Actually'", "Cả hai giờ đều sai", "Không có đáp án"],
            correct: 0,
            exp: "Từ 'Actually' hoặc 'Instead' báo hiệu sự đính chính, thông tin sau đó mới là đáp án cuối cùng."
          },
          {
            q: "Từ 'Signpost words' trong Listening dùng để làm gì?",
            opts: ["Báo hiệu người nói đang chuyển sang ý tiếp theo", "Khen ngợi người nghe", "Kết thúc bài thi", "Báo lỗi mic"],
            correct: 0,
            exp: "Signpost words (từ chỉ đường) giúp thí sinh bám sát cấu trúc bài giảng để không bị 'lạc trôi'."
          },
          {
            q: "Đặc trưng của bài nghe Section 4 trong IELTS Listening là gì?",
            opts: ["Một bài độc thoại học thuật không có nghỉ giữa chừng", "Cuộc trò chuyện giữa hai người bạn", "Một bài hát pop", "Hỏi đường đơn giản"],
            correct: 0,
            exp: "Section 4 là một bài giảng học thuật (Academic monologue) kéo dài liên tục 10 câu không ngắt quãng."
          },
          {
            q: "Từ nào đồng nghĩa với 'Prerequisite' (điều kiện tiên quyết)?",
            opts: ["Precondition", "Distractor", "Correction", "Monologue"],
            correct: 0,
            exp: "'Precondition' là điều kiện bắt buộc cần có trước khi thực hiện bước tiếp theo."
          },
          {
            q: "Cách tốt nhất để tận dụng 30 giây trước mỗi Section là gì?",
            opts: ["Đọc lướt câu hỏi và gạch chân từ khóa chỉ dẫn", "Ngồi thư giãn nhắm mắt", "Xem lại câu hỏi của Section cũ", "Ghi tên vào phiếu trả lời"],
            correct: 0,
            exp: "Đọc trước câu hỏi và dự đoán loại từ cần điền (danh từ, số liệu, tính từ) là chiến thuật quyết định điểm cao."
          }
        ]
      },
      {
        id: "stage-5",
        stageNum: 5,
        title: "Grammar: 6 Thì Động Từ Trọng Điểm Trong IELTS",
        skill: "Grammar",
        skillIcon: "⚡",
        duration: "15 phút",
        xp: 50,
        summary: "Không cần học thuộc 12 thì rắc rối, chỉ cần làm chủ 6 thì động từ phủ sóng 95% bài thi IELTS.",
        content: `
          <h3>🎯 1. Đơn giản hóa ngữ pháp: Tập trung vào thực chiến</h3>
          <p>Nhiều người học mất hàng năm trời học cả 12 thì tiếng Anh nhưng khi viết Task 1 hay nói Speaking vẫn sai thì cơ bản. Trong IELTS, chỉ có 6 thì sau là thực sự trọng tâm:</p>

          <div class="theory-box">
            <h4>Bảng ứng dụng 6 thì trong kỳ thi IELTS:</h4>
            <ul>
              <li><b>1. Hiện tại đơn (Present Simple):</b> Nêu sự thật hiển nhiên, khái niệm khoa học trong Writing Task 2.</li>
              <li><b>2. Quá khứ đơn (Past Simple):</b> Vũ khí số 1 cho Writing Task 1 miêu tả biểu đồ các năm đã qua.</li>
              <li><b>3. Hiện tại hoàn thành (Present Perfect):</b> Nêu xu hướng kéo dài từ quá khứ đến nay: <i>'Carbon emissions have skyrocketed.'</i></li>
              <li><b>4. Quá khứ hoàn thành (Past Perfect):</b> So sánh mốc thời gian trước - sau trong Task 1: <i>'By 2010, the figure had doubled.'</i></li>
              <li><b>5. Tương lai đơn / Dự báo (Future & Predictions):</b> Miêu tả xu hướng dự báo tương lai: <i>'Sales are projected to surge.'</i></li>
              <li><b>6. Hiện tại tiếp diễn (Present Continuous):</b> Miêu tả các xu hướng đang biến chuyển trong xã hội hiện đại.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Projected", ipa: "/prəˈdʒek.tɪd/", pos: "adj", vi: "Được dự phóng, ước tính trong tương lai", example: "Urban population is projected to exceed 10 million by 2035.", synonyms: "Estimated, anticipated, forecast" },
          { word: "Skyrocket", ipa: "/ˈskaɪˌrɒk.ɪt/", pos: "verb", vi: "Tăng vọt cực kỳ nhanh chóng", example: "Housing prices skyrocketed following infrastructure upgrades.", synonyms: "Surge, soar, escalate" },
          { word: "Plateau", ipa: "/ˈplæt.əʊ/", pos: "noun / verb", vi: "Đạt mức bình ổn, đi ngang không tăng giảm", example: "After a decade of growth, birth rates plateaued.", synonyms: "Level off, stabilize" },
          { word: "Plummet", ipa: "/ˈplʌm.ɪt/", pos: "verb", vi: "Lao dốc thẳng đứng, sụt giảm mạnh", example: "Coal consumption plummeted as renewables expanded.", synonyms: "Tumble, dive, drop sharply" },
          { word: "Fluctuate", ipa: "/ˈflʌk.tʃu.eɪt/", pos: "verb", vi: "Biến động lên xuống thất thường", example: "Oil prices fluctuated wildly during the crisis.", synonyms: "Oscillate, vary, waver" },
          { word: "Steadily", ipa: "/ˈsted.əl.i/", pos: "adv", vi: "Một cách đều đặn, ổn định vững chắc", example: "Renewable energy adoption has risen steadily.", synonyms: "Consistently, progressively" },
          { word: "Substantially", ipa: "/səbˈstæn.ʃəl.i/", pos: "adv", vi: "Một cách đáng kể, rõ rệt", example: "Air quality improved substantially after factory closures.", synonyms: "Significantly, considerably" }
        ],
        quizzes: [
          {
            q: "Trong Writing Task 1 với biểu đồ từ năm 2000 đến 2015, thì nào là chủ đạo?",
            opts: ["Quá khứ đơn (Past Simple)", "Hiện tại tiếp diễn", "Tương lai đơn", "Hiện tại hoàn thành"],
            correct: 0,
            exp: "Dữ liệu các năm đã kết thúc trong quá khứ bắt buộc chia thì Quá khứ đơn."
          },
          {
            q: "Điền dạng đúng của động từ: 'By the end of 2020, solar installations ______ (increase) threefold.'",
            opts: ["had increased", "increase", "will increase", "are increasing"],
            correct: 0,
            exp: "Cụm 'By the end of [thời điểm quá khứ]' là dấu hiệu bắt buộc của thì Quá khứ hoàn thành (had + V3)."
          },
          {
            q: "Từ nào đồng nghĩa với việc 'tăng vọt lên mây xanh'?",
            opts: ["Skyrocket", "Plateau", "Plummet", "Fluctuate"],
            correct: 0,
            exp: "'Skyrocket' mang nghĩa tăng phi mã, tăng vọt cực kỳ mạnh mẽ."
          },
          {
            q: "Khi số liệu đi ngang và giữ mức ổn định, ta dùng động từ nào?",
            opts: ["Plateau / Level off", "Plummet", "Surge", "Soar"],
            correct: 0,
            exp: "'Plateau' nghĩa là đạt mức bình ổn sau giai đoạn biến động."
          },
          {
            q: "Cụm từ nào dùng để diễn đạt dự báo trong tương lai?",
            opts: ["Is projected to + V", "Has been + V-ing", "Had been + V", "Was + V-ed"],
            correct: 0,
            exp: "'Is projected to / anticipated to' là cấu trúc bị động học thuật để dự báo xu hướng tương lai."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // GIAI ĐOẠN 2: TĂNG TỐC (BAND 6.0 - TƯ DUY PHẢN BIỆN) - 5 BÀI
  // =========================================================================
  {
    bandId: "phase-2",
    bandTitle: "Giai Đoạn 2: Tăng Tốc (Target Band 6.0 - 6.5)",
    bandDesc: "Phát triển cấu trúc đoạn văn luận điểm PEEL, làm chủ Task 1 xu hướng và dạng bài True/False/Not Given",
    badgeColor: "#b45309",
    lessons: [
      {
        id: "stage-6",
        stageNum: 6,
        title: "Writing Task 1: Chiến Thuật Miêu Tả Biểu Đồ Xu Hướng",
        skill: "Writing",
        skillIcon: "📊",
        duration: "18 phút",
        xp: 60,
        summary: "Cấu trúc 4 đoạn chuẩn xác: Overview đắt giá, gom nhóm dữ liệu thông minh và vốn từ tăng giảm Band 7.0.",
        content: `
          <h3>🎯 1. Overview - Đoạn văn quan trọng nhất của Task 1</h3>
          <p>Nếu thiếu đoạn Tổng quan (Overview), điểm Task Achievement của bạn sẽ bị giới hạn ở Band 5.0. Đoạn Overview phải nêu được 2 đặc điểm nổi bật nhất: Xu hướng tổng thể (tăng/giảm) và đối tượng có giá trị cao nhất/thấp nhất.</p>

          <div class="theory-box">
            <h4>Bố cục 4 đoạn chuẩn mực (150 từ trong 20 phút):</h4>
            <ul>
              <li><b>Đoạn 1: Mở bài (Introduction):</b> Paraphrase đề bài trong 1 câu duy nhất.<br>
                <i>'The line graph illustrates the consumption of three types of meat in a European nation between 1980 and 2010.'</i></li>
              <li><b>Đoạn 2: Tổng quan (Overview):</b> Nêu 2 xu hướng bao quát nhất.<br>
                <i>'Overall, while chicken experienced a substantial upward trajectory, beef and lamb plummeted steadily over the period.'</i></li>
              <li><b>Đoạn 3: Thân bài 1 (Body 1):</b> Miêu tả chi tiết nhóm đối tượng tăng.</li>
              <li><b>Đoạn 4: Thân bài 2 (Body 2):</b> Miêu tả chi tiết nhóm đối tượng giảm hoặc biến động.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Trajectory", ipa: "/trəˈdʒek.tər.i/", pos: "noun", vi: "Quỹ đạo phát triển, đường hướng xu thế", example: "Renewable energy maintains an unmistakably upward trajectory.", synonyms: "Course, pathway, trend" },
          { word: "Surpass", ipa: "/səˈpɑːs/", pos: "verb", vi: "Vượt qua, vượt trội hơn", example: "By 2015, solar energy surpassed hydroelectric generation.", synonyms: "Exceed, outstrip, overtake" },
          { word: "Marginally", ipa: "/ˈmɑː.dʒɪ.nəl.i/", pos: "adv", vi: "Một cách nhẹ nhàng, không đáng kể", example: "Prices rose marginally by a mere two percent.", synonyms: "Slightly, minimally" },
          { word: "Respectively", ipa: "/rɪˈspek.tɪv.li/", pos: "adv", vi: "Lần lượt theo thứ tự đã nêu", example: "Coal and gas accounted for 40% and 25% respectively.", synonyms: "In that order, correspondingly" },
          { word: "Outnumber", ipa: "/ˌaʊtˈnʌm.bər/", pos: "verb", vi: "Đông hơn về số lượng", example: "Female graduates outnumbered males in humanities disciplines.", synonyms: "Exceed in number" },
          { word: "Proportion", ipa: "/prəˈpɔː.ʃən/", pos: "noun", vi: "Tỷ lệ phần trăm trong tổng thể", example: "A substantial proportion of revenue was earmarked for R&D.", synonyms: "Percentage, ratio, fraction" },
          { word: "Dip", ipa: "/dɪp/", pos: "noun / verb", vi: "Sụt giảm nhẹ tạm thời rồi phục hồi", example: "The market experienced a brief dip before rallying.", synonyms: "Drop, decline slightly" }
        ],
        quizzes: [
          {
            q: "Nếu một bài viết Writing Task 1 KHÔNG có đoạn Overview (Tổng quan), điểm tiêu chí Task Achievement tối đa là bao nhiêu?",
            opts: ["Band 5.0", "Band 6.0", "Band 7.0", "Band 8.0"],
            correct: 0,
            exp: "Theo tiêu chí chấm thi chính thức (Band Descriptors), thiếu Overview sẽ bị khống chế tối đa Band 5.0."
          },
          {
            q: "Từ 'Respectively' dùng đúng nhất trong trường hợp nào?",
            opts: ["Khi liệt kê số liệu tương ứng theo thứ tự của các chủ thể", "Ở cuối câu chào kết bài", "Khi bài không có số liệu", "Khi so sánh hai người"],
            correct: 0,
            exp: "'Respectively' (lần lượt là) dùng để gán các giá trị số liệu tương ứng với danh sách chủ ngữ đã kể."
          },
          {
            q: "Cụm 'Upward trajectory' mang nghĩa là gì?",
            opts: ["Xu hướng đi lên, gia tăng", "Xu hướng đi xuống", "Xu hướng đứng yên", "Hình tròn"],
            correct: 0,
            exp: "'Upward trajectory' nghĩa là quỹ đạo / xu hướng phát triển đi lên."
          },
          {
            q: "Từ nào đồng nghĩa với 'Overtake / Exceed' (vượt qua)?",
            opts: ["Surpass", "Dip", "Marginally", "Plateau"],
            correct: 0,
            exp: "'Surpass' có nghĩa là vượt qua về mặt số lượng hoặc chất lượng."
          },
          {
            q: "Thời gian làm bài tối ưu nhất cho Writing Task 1 là bao lâu?",
            opts: ["20 phút", "40 phút", "50 phút", "60 phút"],
            correct: 0,
            exp: "Tổng thời gian Writing là 60 phút, bạn nên dành 20 phút cho Task 1 và 40 phút cho Task 2."
          }
        ]
      },
      {
        id: "stage-7",
        stageNum: 7,
        title: "Writing Task 2: Mô Hình Cấu Trúc Đoạn Văn PEEL",
        skill: "Writing",
        skillIcon: "✍️",
        duration: "18 phút",
        xp: 60,
        summary: "Viết thân bài luận điểm sắc bén, mạch lạc chuẩn tiêu chí Coherence & Cohesion.",
        content: `
          <h3>🎯 1. Công thức xây dựng thân bài vững như bàn thạch</h3>
          <p>Nhiều bài luận Task 2 bị trừ điểm Coherence & Cohesion nặng nề vì liệt kê quá nhiều ý lụn vụn nhưng không đào sâu phân tích. Mô hình PEEL giải quyết triệt để vấn đề này:</p>

          <div class="theory-box">
            <h4>Bốn bước PEEL chuẩn quốc tế:</h4>
            <ul>
              <li><b>P (Point - Câu chủ đề):</b> Tuyên bố luận điểm rõ ràng trong câu đầu tiên.<br>
                <i>'First and foremost, remote working substantially cuts corporate operating expenses.'</i></li>
              <li><b>E (Explanation - Giải thích chiều sâu):</b> Phân tích cơ chế vì sao lại như vậy.<br>
                <i>'This is because firms no longer need to lease sprawling metropolitan commercial properties or subsidize exorbitant commuter allowances.'</i></li>
              <li><b>E (Example - Bằng chứng thực nghiệm):</b> Đưa dẫn chứng thực tế củng cố.<br>
                <i>'For instance, recent labor surveys in Vietnam reveal that tech companies saved up to 25% on facility overheads after adopting hybrid models.'</i></li>
              <li><b>L (Link - Câu kết luận liên kết):</b> Khẳng định lại câu trả lời cho đề bài.<br>
                <i>'Consequently, transitioning to telecommuting constitutes a highly viable financial strategy for enterprises.'</i></li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Viable", ipa: "/ˈvaɪ.ə.bəl/", pos: "adj", vi: "Khả thi, có khả năng thành công cao", example: "Solar powered microgrids represent a viable rural solution.", synonyms: "Feasible, workable, practical" },
          { word: "Exorbitant", ipa: "/ɪɡˈzɔː.bɪ.tənt/", pos: "adj", vi: "Cắt cổ, đắt đỏ vô lý quá mức", example: "Exorbitant tuition fees deter underprivileged applicants.", synonyms: "Extortionate, sky-high, excessive" },
          { word: "Subsidize", ipa: "/ˈsʌb.sɪ.daɪz/", pos: "verb", vi: "Trợ cấp kinh phí từ ngân sách", example: "Municipalities subsidize public bus fares to spur ridership.", synonyms: "Fund, sponsor, underwrite" },
          { word: "Consequently", ipa: "/ˈkɒn.sɪ.kwənt.li/", pos: "adv", vi: "Hệ quả là, kết quả tất yếu là", example: "Deforestation accelerated; consequently, landslides grew frequent.", synonyms: "As a consequence, therefore" },
          { word: "Sprawling", ipa: "/ˈsprɔː.lɪŋ/", pos: "adj", vi: "Rộng lớn trải dài ngổn ngang", example: "Sprawling warehouses occupy cheap suburban land.", synonyms: "Spreading, expansive" },
          { word: "Incur", ipa: "/ɪnˈkɜːr/", pos: "verb", vi: "Gánh chịu hậu quả hoặc chi phí phát sinh", example: "Fossil fuel dependency incurs massive long-term environmental costs.", synonyms: "Sustain, suffer, bring upon oneself" },
          { word: "Overhead", ipa: "/ˈəʊ.və.hed/", pos: "noun", vi: "Chi phí vận hành cố định", example: "Digitization reduces recurring office administrative overheads.", synonyms: "Operating expense, fixed costs" }
        ],
        quizzes: [
          {
            q: "Chữ 'E' thứ hai trong mô hình PEEL đại diện cho điều gì?",
            opts: ["Example (Ví dụ / Dẫn chứng cụ thể)", "Exercise", "Essay", "Examination"],
            correct: 0,
            exp: "Chữ 'E' thứ hai là Example, dùng ví dụ thực tế để minh họa luận điểm."
          },
          {
            q: "Từ nào đồng nghĩa với 'Feasible / Workable' (khả thi)?",
            opts: ["Viable", "Exorbitant", "Sprawling", "Monotonous"],
            correct: 0,
            exp: "'Viable' mang nghĩa khả thi, có khả năng tồn tại và phát triển tốt."
          },
          {
            q: "Từ 'Exorbitant' miêu tả điều gì?",
            opts: ["Giá cả đắt đỏ quá mức, cắt cổ", "Một bài hát vui vẻ", "Đường sá rộng rãi", "Khí hậu ôn hòa"],
            correct: 0,
            exp: "'Exorbitant prices' dùng để chỉ giá cả đắt đỏ trên trời, không hợp lý."
          },
          {
            q: "Tại sao nên có câu 'L' (Link) ở cuối mỗi đoạn thân bài?",
            opts: ["Để chốt lại luận điểm và kết nối trực tiếp về câu hỏi của đề bài", "Để bài viết đủ số lượng từ", "Để dịch câu đầu sang tiếng Việt", "Để hỏi giám khảo"],
            correct: 0,
            exp: "Câu Link giúp thâu tóm đoạn văn và chứng minh đoạn này trả lời đúng yêu cầu đề bài."
          },
          {
            q: "Một bài viết Writing Task 2 nên có bao nhiêu đoạn thân bài chính?",
            opts: ["2 đoạn thân bài sâu sắc", "5 - 7 đoạn ngắn ngủi", "Chỉ 1 đoạn duy nhất", "Càng nhiều càng tốt"],
            correct: 0,
            exp: "Cấu trúc chuẩn của Task 2 gồm Mở bài - 2 Thân bài - Kết bài (tổng cộng 4 đoạn)."
          }
        ]
      },
      {
        id: "stage-8",
        stageNum: 8,
        title: "Speaking Part 2: Kỹ Thuật Lập Dàn Ý 1 Phút",
        skill: "Speaking",
        skillIcon: "🗣️",
        duration: "18 phút",
        xp: 60,
        summary: "Bí kíp nói liền mạch 2 phút không vấp nhờ kỹ thuật dòng thời gian Past - Present - Future.",
        content: `
          <h3>🎯 1. Chiến thuật sống còn cho 1 phút chuẩn bị</h3>
          <p>Trong Speaking Part 2, thí sinh có đúng 60 giây để chuẩn bị cho bài nói 2 phút. Lỗi sai phổ biến là cố viết cả câu hoàn chỉnh dẫn đến hết giờ khi mới viết được 2 dòng. Bạn chỉ được viết <b>Từ khóa (Keywords)</b> theo trục thời gian:</p>

          <div class="theory-box">
            <h4>Kỹ thuật dòng thời gian 3 hồi:</h4>
            <ul>
              <li><b>Hồi 1 - Quá khứ (Past context):</b> Kể bối cảnh sự việc bắt đầu thế nào, cảm xúc thuở ban đầu.<br>
                <i>Từ khóa nháp:</i> 2 years ago, university, hesitant, initial struggle.</li>
              <li><b>Hồi 2 - Hiện tại / Diễn biến chính (Present / Climax):</b> Chi tiết cao trào của sự việc, cảm xúc bùng nổ.<br>
                <i>Từ khóa nháp:</i> Breakthrough, mentor guidance, triumphant feeling.</li>
              <li><b>Hồi 3 - Tương lai / Đúc kết (Future & Impact):</b> Bài học rút ra và ảnh hưởng đến cuộc đời bạn sau này.<br>
                <i>Từ khóa nháp:</i> Lifelong lesson, boost resilience, aspire to continue.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Hesitant", ipa: "/ˈhez.ɪ.tənt/", pos: "adj", vi: "Do dự, lưỡng lự chưa quyết", example: "Initially, I was hesitant about venturing overseas alone.", synonyms: "Reluctant, tentative, uncertain" },
          { word: "Triumphant", ipa: "/traɪˈʌm.fənt/", pos: "adj", vi: "Thắng lợi vẻ vang, hân hoan chiến thắng", example: "She felt triumphant after defending her master's thesis.", synonyms: "Victorious, exultant, jubilant" },
          { word: "Resilience", ipa: "/rɪˈzɪl.jəns/", pos: "noun", vi: "Khả năng kiên cường phục hồi sau nghịch cảnh", example: "Overcoming hardship cultivated inner resilience and courage.", synonyms: "Fortitude, toughness, endurance" },
          { word: "Pivotal", ipa: "/ˈpɪv.ə.təl/", pos: "adj", vi: "Then chốt, đóng vai trò bản lề", example: "Meeting that professor proved a pivotal milestone in my career.", synonyms: "Crucial, decisive, momentous" },
          { word: "Aspire", ipa: "/əˈspaɪər/", pos: "verb", vi: "Khao khát, nuôi hoài bão lớn", example: "He aspires to become an environmental advocate.", synonyms: "Aim, strive, yearn" },
          { word: "Reminisce", ipa: "/ˌrem.ɪˈnɪs/", pos: "verb", vi: "Hồi tưởng, nhớ lại kỷ niệm xưa", example: "Old colleagues gathered to reminisce about past expeditions.", synonyms: "Recall, look back, recollect" },
          { word: "Bittersweet", ipa: "/ˌbɪtəˈswiːt/", pos: "adj", vi: "Vừa vui vừa tiếc nuối", example: "Packing my bags for departure was a bittersweet affair.", synonyms: "Mixed emotion, joyful yet sorrowful" }
        ],
        quizzes: [
          {
            q: "Trong 1 phút chuẩn bị của Speaking Part 2, bạn nên làm gì?",
            opts: ["Chỉ ghi từ khóa quan trọng và cấu trúc theo dòng thời gian", "Cố viết thành từng câu hoàn chỉnh", "Ngồi im nghe nhạc", "Hỏi chuyện giám khảo"],
            correct: 0,
            exp: "Chỉ ghi từ khóa (Keywords) và thành ngữ hay, không bao giờ viết cả câu hoàn chỉnh vì sẽ hết giờ."
          },
          {
            q: "Từ nào đồng nghĩa với 'Crucial / Decisive' (mang tính then chốt)?",
            opts: ["Pivotal", "Hesitant", "Sedentary", "Monotonous"],
            correct: 0,
            exp: "'Pivotal' có nghĩa là then chốt, mang tính chất bản lề quyết định cục diện."
          },
          {
            q: "Khi giám khảo chưa ngắt lời, bạn nên làm gì?",
            opts: ["Tiếp tục nói cho đến khi giám khảo giơ tay dừng (đủ 2 phút)", "Dừng lại sau 40 giây vì thấy đủ rồi", "Hỏi giám khảo xem nói thế được chưa", "Im lặng nhìn đồng hồ"],
            correct: 0,
            exp: "Nhiệm vụ của bạn là nói liên tục cho đến khi giám khảo chủ động dừng bạn (khoảng 1 phút 50 giây đến 2 phút)."
          },
          {
            q: "Từ 'Resilience' miêu tả phẩm chất nào của con người?",
            opts: ["Sự kiên cường phục hồi sau khó khăn", "Tính lười biếng", "Khả năng nói nhanh", "Sự nhút nhát"],
            correct: 0,
            exp: "'Resilience' là bản lĩnh kiên cường, khả năng vượt qua nghịch cảnh để vươn lên."
          },
          {
            q: "Kỹ thuật phân chia 3 hồi theo thời gian bao gồm những mốc nào?",
            opts: ["Quá khứ - Diễn biến cao trào - Tương lai / Bài học", "Hiện tại - Hiện tại - Hiện tại", "Chỉ nói về ngày mai", "Kể chuyện cổ tích"],
            correct: 0,
            exp: "Cấu trúc Quá khứ -> Diễn biến -> Tương lai giúp bài nói mạch lạc tự nhiên và bao quát nhiều thì động từ."
          }
        ]
      },
      {
        id: "stage-9",
        stageNum: 9,
        title: "Reading: Chinh Phục Dạng Bài True / False / Not Given",
        skill: "Reading",
        skillIcon: "📖",
        duration: "18 phút",
        xp: 60,
        summary: "Phân biệt ranh giới mong manh giữa FALSE (thông tin trái ngược) và NOT GIVEN (thông tin không đề cập).",
        content: `
          <h3>🎯 1. Nỗi ám ảnh lớn nhất của thí sinh Reading</h3>
          <p>Dạng bài True/False/Not Given (hoặc Yes/No/Not Given) khiến hàng ngàn sĩ tử mất điểm oan vì suy diễn cá nhân. Hãy nhớ quy tắc vàng:</p>

          <div class="theory-box">
            <h4>Quy tắc phân loại bất di bất dịch:</h4>
            <ul>
              <li><b>TRUE:</b> Thông tin trong câu hỏi khớp 100% về mặt ngữ nghĩa với bài đọc (thường được paraphrase lại bằng từ đồng nghĩa).</li>
              <li><b>FALSE:</b> Bài đọc có đề cập đến chủ đề đó, nhưng có một chi tiết <b>MÂU THUẪN / ĐỐI NGHỊCH TRỰC TIẾP</b> với câu hỏi (ngược nghĩa hoàn toàn).</li>
              <li><b>NOT GIVEN:</b> Bài đọc hoàn toàn <b>KHÔNG ĐỀ CẬP</b> hoặc chỉ nói một phần nhưng không thể khẳng định được vế còn lại. Tuyệt đối không dùng kiến thức đời sống bên ngoài để tự suy diễn!</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Contradict", ipa: "/ˌkɒn.trəˈdɪkt/", pos: "verb", vi: "Mâu thuẫn, phủ nhận, trái ngược với", example: "Survey findings contradict earlier optimistic economic forecasts.", synonyms: "Refute, counter, oppose" },
          { word: "Assertion", ipa: "/əˈsɜː.ʃən/", pos: "noun", vi: "Lời khẳng định, tuyên bố chắc nịch", example: "The essayist substantiated her bold scientific assertion.", synonyms: "Claim, declaration, contention" },
          { word: "Substantiate", ipa: "/səbˈstæn.ʃi.eɪt/", pos: "verb", vi: "Chứng minh có cơ sở bằng chứng", example: "Archival letters substantiate the historian's thesis.", synonyms: "Verify, corroborate, authenticate" },
          { word: "Infer", ipa: "/ɪnˈfɜːr/", pos: "verb", vi: "Suy luận gián tiếp từ gợi ý ngầm", example: "Do not infer facts that the author never explicitly penned.", synonyms: "Deduce, surmise" },
          { word: "Explicit", ipa: "/ɪkˈsplɪs.ɪt/", pos: "adj", vi: "Rõ ràng, tường minh không úp mở", example: "The laboratory protocol gives explicit handling instructions.", synonyms: "Clear, unequivocal, direct" },
          { word: "Ambiguity", ipa: "/ˌæm.bɪˈɡjuː.ə.ti/", pos: "noun", vi: "Sự mơ hồ, không rõ ràng", example: "Eliminate lexical ambiguity from academic research summaries.", synonyms: "Vagueness, obscurity" },
          { word: "Inconclusive", ipa: "/ˌɪn.kəŋˈkluː.sɪv/", pos: "adj", vi: "Chưa đi đến kết luận chắc chắn", example: "Preliminary clinical trials yielded inconclusive metrics.", synonyms: "Indecisive, unsettled" }
        ],
        quizzes: [
          {
            q: "Nếu một thông tin trong câu hỏi hoàn toàn KHÔNG tìm thấy trong bài đọc, đáp án là gì?",
            opts: ["NOT GIVEN", "FALSE", "TRUE", "CANNOT SAY"],
            correct: 0,
            exp: "Không có thông tin xác nhận trong bài thì đáp án chuẩn xác là NOT GIVEN."
          },
          {
            q: "Sự khác biệt cốt lõi giữa FALSE và NOT GIVEN là gì?",
            opts: ["FALSE có thông tin mâu thuẫn trái ngược, còn NOT GIVEN không thể tìm thấy cơ sở xác thực", "FALSE và NOT GIVEN là một", "FALSE chỉ dành cho số liệu", "NOT GIVEN luôn là câu trả lời đúng"],
            correct: 0,
            exp: "FALSE phải có bằng chứng đối nghịch trực diện trong văn bản; nếu không có căn cứ so sánh thì là NOT GIVEN."
          },
          {
            q: "Từ nào đồng nghĩa với 'Mâu thuẫn, phản bác lại'?",
            opts: ["Contradict", "Substantiate", "Explicit", "Hesitant"],
            correct: 0,
            exp: "'Contradict' nghĩa là mâu thuẫn hoặc phủ nhận lại một tuyên bố trước đó."
          },
          {
            q: "Bạn có nên dùng kiến thức thực tế bên ngoài để trả lời câu hỏi Reading không?",
            opts: ["Tuyệt đối KHÔNG, chỉ dựa vào văn bản đã cho", "CÓ, kiến thức thực tế quan trọng hơn bài đọc", "Chỉ dùng khi làm phần thi Speaking", "Tùy tâm trạng"],
            correct: 0,
            exp: "IELTS Reading kiểm tra kỹ năng đọc hiểu văn bản đã cho, không kiểm tra kiến thức bách khoa của bạn."
          },
          {
            q: "Từ 'Explicit' có nghĩa là gì?",
            opts: ["Rõ ràng, minh bạch, được nói thẳng ra", "Bị che giấu", "Sai ngữ pháp", "Khó hiểu"],
            correct: 0,
            exp: "'Explicit' miêu tả điều gì đó được nêu ra trực tiếp, rõ ràng, không mập mờ."
          }
        ]
      },
      {
        id: "stage-10",
        stageNum: 10,
        title: "Vocabulary: Collocations Chủ Đề Môi Trường & Khí Hậu",
        skill: "Vocabulary",
        skillIcon: "🌱",
        duration: "18 phút",
        xp: 60,
        summary: "Nắm vững bộ 15 cụm từ kết hợp tự nhiên (Collocations) xuất hiện trong 90% đề thi Writing Task 2.",
        content: `
          <h3>🎯 1. Sức mạnh của Collocations trong việc bứt phá Band 6.5</h3>
          <p>Học từng từ đơn lẻ sẽ khiến bạn ghép câu ngây ngô kiểu tiếng Việt dịch sang tiếng Anh. Người bản xứ ghép từ theo cặp cố định (Collocations). Hãy làm chủ các cụm sau:</p>

          <div class="theory-box">
            <h4>Các Collocations ăn điểm chủ đề Môi trường:</h4>
            <ul>
              <li><i>To inflict irreversible damage on:</i> Gây ra tổn hại không thể đảo ngược cho thiên nhiên.</li>
              <li><i>To deplete finite natural resources:</i> Làm cạn kiệt nguồn tài nguyên thiên nhiên hữu hạn.</li>
              <li><i>To advocate for sustainable practices:</i> Kêu gọi áp dụng các biện pháp bền vững.</li>
              <li><i>To impose stringent environmental regulations:</i> Ban hành luật lệ môi trường nghiêm ngặt.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Irreversible", ipa: "/ˌɪr.ɪˈvɜː.sə.bəl/", pos: "adj", vi: "Không thể đảo ngược hay cứu vãn", example: "Glacier melting risks causing irreversible sea level rise.", synonyms: "Permanent, unalterable" },
          { word: "Stringent", ipa: "/ˈstrɪn.dʒənt/", pos: "adj", vi: "Nghiêm ngặt, khắt khe", example: "Authorities enacted stringent bans on single-use plastics.", synonyms: "Rigorous, strict, severe" },
          { word: "Finite", ipa: "/ˈfaɪ.naɪt/", pos: "adj", vi: "Hữu hạn, có giới hạn số lượng", example: "Fossil hydrocarbons are finite reserves that will inevitably dry up.", synonyms: "Limited, restricted" },
          { word: "Inflict", ipa: "/ɪnˈflɪkt/", pos: "verb", vi: "Gây ra (nỗi đau, tổn hại, thảm họa)", example: "Toxic spills inflict devastating damage on coastal wetlands.", synonyms: "Impose, mete out, cause" },
          { word: "Catastrophic", ipa: "/ˌkæt.əˈstrɒf.ɪk/", pos: "adj", vi: "Mang tính thảm họa khôn lường", example: "Failure to cool reactors could trigger catastrophic fallout.", synonyms: "Disastrous, calamitous" },
          { word: "Advocate", ipa: "/ˈæd.və.keɪt/", pos: "verb / noun", vi: "Ủng hộ, tán thành, người ủng hộ", example: "Youth activists advocate for rapid renewable subsidies.", synonyms: "Champion, endorse, support" },
          { word: "Ecosystem", ipa: "/ˈiː.kəʊˌsɪs.təm/", pos: "noun", vi: "Hệ sinh thái tự nhiên", example: "Coral reefs harbor the most biodiverse marine ecosystems.", synonyms: "Biological network, environment" }
        ],
        quizzes: [
          {
            q: "Từ nào điền vào chỗ trống chuẩn nhất: 'Pollution inflicts ______ damage on coral reefs' (tổn hại không thể đảo ngược)?",
            opts: ["irreversible", "hesitant", "sprawling", "sedentary"],
            correct: 0,
            exp: "'Irreversible damage' là collocation kinh điển nghĩa là tổn hại vĩnh viễn không thể khôi phục."
          },
          {
            q: "Cụm 'Stringent regulations' mang nghĩa là gì?",
            opts: ["Các quy định, luật lệ nghiêm ngặt", "Luật lệ lỏng lẻo", "Sách hướng dẫn nấu ăn", "Bài hát nhẹ nhàng"],
            correct: 0,
            exp: "'Stringent regulations / laws' chỉ hệ thống quy định pháp luật vô cùng khắt khe, chặt chẽ."
          },
          {
            q: "Từ trái nghĩa với 'Infinite' (vô tận) là từ nào?",
            opts: ["Finite (Hữu hạn)", "Beneficial", "Crucial", "Substantial"],
            correct: 0,
            exp: "'Finite' có nghĩa là có giới hạn, hữu hạn (như tài nguyên than đá, dầu mỏ)."
          },
          {
            q: "Động từ 'Advocate for' có nghĩa là gì?",
            opts: ["Lên tiếng ủng hộ cho một chính sách", "Phản đối gay gắt", "Trốn tránh trách nhiệm", "Lãng phí thời gian"],
            correct: 0,
            exp: "'Advocate for' nghĩa là bảo vệ, tán thành hoặc thúc đẩy một giải pháp tích cực."
          },
          {
            q: "Từ đồng nghĩa với 'Disastrous' (thảm họa) là từ nào?",
            opts: ["Catastrophic", "Viable", "Avid", "Pivotal"],
            correct: 0,
            exp: "'Catastrophic' mang nghĩa thảm họa, tai ương nặng nề."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // GIAI ĐOẠN 3: BỨT PHÁ (BAND 7.0 - LẬP LUẬN ĐA CHIỀU) - 5 BÀI
  // =========================================================================
  {
    bandId: "phase-3",
    bandTitle: "Giai Đoạn 3: Bứt Phá (Target Band 7.0 - 7.5)",
    bandDesc: "Lập luận đa chiều Task 2 (Discuss Both Views), phân tích vấn đề xã hội Speaking Part 3 và kỹ thuật Matching Headings",
    badgeColor: "#059669",
    lessons: [
      {
        id: "stage-11",
        stageNum: 11,
        title: "Writing Task 2: Dạng Bài Thảo Luận Hai Quan Điểm",
        skill: "Writing",
        skillIcon: "✍️",
        duration: "20 phút",
        xp: 70,
        summary: "Bí kíp thảo luận khách quan cả 2 góc nhìn (Discuss Both Views) và thể hiện lập trường cá nhân đanh thép.",
        content: `
          <h3>🎯 1. Chiến thuật cân bằng và đưa quan điểm cá nhân</h3>
          <p>Dạng bài <i>'Discuss both views and give your own opinion'</i> đòi hỏi thí sinh phải phân tích công bằng lý lẽ của cả 2 phía trước khi chốt lại quan điểm cá nhân. Tuyệt đối không được thiên vị một phía mà bỏ quên phía còn lại.</p>

          <div class="theory-box">
            <h4>Bố cục thân bài mẫu mực:</h4>
            <ul>
              <li><b>Thân bài 1:</b> Phân tích lý do vì sao một số người ủng hộ quan điểm A (dù mình có thể không đồng tình).<br>
                <i>'On the one hand, proponents of view A argue that...'</i></li>
              <li><b>Thân bài 2:</b> Phân tích lý do vì sao quan điểm B thuyết phục hơn (và đây cũng là quan điểm của chính bạn).<br>
                <i>'On the other hand, I side with those who champion view B because...'</i></li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Proponent", ipa: "/prəˈpəʊ.nənt/", pos: "noun", vi: "Người đề xướng, người ủng hộ quan điểm", example: "Proponents of nuclear energy tout its minimal carbon output.", synonyms: "Advocate, champion, supporter" },
          { word: "Opponent", ipa: "/əˈpəʊ.nənt/", pos: "noun", vi: "Người phản đối, đối thủ phản biện", example: "Opponents voice grave concerns regarding hazardous radioactive waste.", synonyms: "Critic, adversary, dissenter" },
          { word: "Tout", ipa: "/taʊt/", pos: "verb", vi: "Ca ngợi, chào mời công dụng hết lời", example: "Marketing campaigns tout artificial supplements as miracle remedies.", synonyms: "Praise, endorse, promote" },
          { word: "Compelling", ipa: "/kəmˈpel.ɪŋ/", pos: "adj", vi: "Có sức thuyết phục mãnh liệt, không thể chối cãi", example: "The defense mounted a compelling factual rebuttal.", synonyms: "Persuasive, cogent, forceful" },
          { word: "Overstate", ipa: "/ˌəʊ.vəˈsteɪt/", pos: "verb", vi: "Nói quá, cường điệu hóa sự việc", example: "The urgency of climate action cannot be overstated.", synonyms: "Exaggerate, overemphasize" },
          { word: "Legitimate", ipa: "/ləˈdʒɪt.ə.mət/", pos: "adj", vi: "Hợp pháp, chính đáng, có cơ sở xác đáng", example: "Residents raised legitimate grievances regarding airport noise.", synonyms: "Valid, justifiable, lawful" },
          { word: "Rebuttal", ipa: "/rɪˈbʌt.əl/", pos: "noun", vi: "Sự bác bỏ lý lẽ phản bác của đối phương", example: "His crisp rebuttal demolished the opposing council's premise.", synonyms: "Refutation, counter-argument" }
        ],
        quizzes: [
          {
            q: "Trong dạng bài 'Discuss both views and give your opinion', bạn phải đưa ra quan điểm cá nhân ở đâu?",
            opts: ["Trong cả Mở bài, Thân bài 2 và Kết bài", "Chỉ duy nhất ở dòng cuối cùng", "Không được nêu quan điểm cá nhân", "Chỉ nêu trong nháp"],
            correct: 0,
            exp: "Theo tiêu chuẩn Band 7.0+, quan điểm cá nhân (clear position) phải được thể hiện xuyên suốt từ Mở bài đến Kết bài."
          },
          {
            q: "Từ nào đồng nghĩa với 'Supporter / Advocate' (người ủng hộ)?",
            opts: ["Proponent", "Opponent", "Distractor", "Hesitant"],
            correct: 0,
            exp: "'Proponent' là từ học thuật cao cấp chỉ người nhiệt thành ủng hộ một tư tưởng hoặc giải pháp."
          },
          {
            q: "Cụm từ 'Compelling argument' mang nghĩa là gì?",
            opts: ["Một lập luận có sức thuyết phục mãnh liệt", "Một câu nói đùa", "Một lời cãi nhau vô lý", "Một bài hát ngắn"],
            correct: 0,
            exp: "'Compelling' có nghĩa là đầy sức thuyết phục, khó có thể bác bỏ."
          },
          {
            q: "Từ 'Opponent' chỉ ai?",
            opts: ["Người phản đối quan điểm", "Người đứng ngoài cuộc", "Giám khảo chấm thi", "Thí sinh cùng phòng"],
            correct: 0,
            exp: "'Opponent' là người đối lập, phản biện hoặc không đồng tình với một chính sách."
          },
          {
            q: "Nếu bạn chỉ bàn luận 1 quan điểm mà bỏ quên quan điểm còn lại trong đề 'Discuss both views', điểm Task Achievement sẽ bị phạt thế nào?",
            opts: ["Bị trừ điểm nặng và khống chế tối đa Band 5.0", "Vẫn được Band 8.0 bình thường", "Được cộng thêm điểm sáng tạo", "Giám khảo không để ý"],
            correct: 0,
            exp: "Bỏ quên một phần của đề bài sẽ khiến bạn bị trừ điểm nặng ở tiêu chí Task Achievement."
          }
        ]
      },
      {
        id: "stage-12",
        stageNum: 12,
        title: "Speaking Part 3: Kỹ Năng Phân Tích Vấn Đề Xã Hội",
        skill: "Speaking",
        skillIcon: "🗣️",
        duration: "20 phút",
        xp: 70,
        summary: "Nâng tầm bài nói từ trải nghiệm cá nhân hạn hẹp lên tầm vóc vĩ mô của toàn xã hội.",
        content: `
          <h3>🎯 1. Khác biệt một trời một vực giữa Part 1 và Part 3</h3>
          <p>Part 1 hỏi về thói quen cá nhân của bạn (I, me, my). Nhưng sang <b>Part 3</b>, câu hỏi chuyển sang tầm vĩ mô của cộng đồng và nhân loại. Dùng từ <i>'I think'</i> liên tục sẽ giam cầm bạn ở Band 6.0.</p>

          <div class="theory-box">
            <h4>Kỹ thuật mở rộng góc nhìn vĩ mô:</h4>
            <ul>
              <li><b>Góc độ kinh tế (Economic perspective):</b> Bàn về chi phí, việc làm, ngân sách quốc gia.</li>
              <li><b>Góc độ xã hội & tâm lý (Sociological / Psychological):</b> Bàn về lối sống, sự gắn kết cộng đồng, áp lực tinh thần.</li>
              <li><b>Góc độ công nghệ & tương lai (Technological):</b> Bàn về sự tự động hóa và xu hướng số hóa.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Societal", ipa: "/səˈsaɪ.ə.təl/", pos: "adj", vi: "Thuộc về quy mô toàn xã hội", example: "Rapid automation creates profound societal shifts.", synonyms: "Social, communal, civic" },
          { word: "Disproportionate", ipa: "/ˌdɪs.prəˈpɔː.ʃən.ət/", pos: "adj", vi: "Không cân xứng, bất đối xứng nghiêm trọng", example: "Inflation imposes a disproportionate burden on low-wage workers.", synonyms: "Unequal, uneven, asymmetric" },
          { word: "Paradoxical", ipa: "/ˌpær.əˈdɒk.sɪ.kəl/", pos: "adj", vi: "Nghịch lý, có vẻ mâu thuẫn nhưng lại đúng", example: "It is paradoxical that hyper-connected youth feel increasingly isolated.", synonyms: "Contradictory, ironic" },
          { word: "Imperative", ipa: "/ɪmˈper.ə.tɪv/", pos: "adj / noun", vi: "Cấp bách, bắt buộc khẩn cấp", example: "Digital literacy is an imperative for 21st-century citizens.", synonyms: "Vital, urgent, mandatory" },
          { word: "Manifest", ipa: "/ˈmæn.ɪ.fest/", pos: "verb", vi: "Biểu hiện rõ rệt ra bên ngoài", example: "Chronic stress manifests in physical symptoms like migraines.", synonyms: "Demonstrate, exhibit, reveal" },
          { word: "Polarize", ipa: "/ˈpəʊ.lə.raɪz/", pos: "verb", vi: "Phân cực xã hội sâu sắc thành 2 thái cực", example: "Algorithms polarize public opinion into echo chambers.", synonyms: "Divide, split, sever" },
          { word: "Prevalent", ipa: "/ˈprev.əl.ənt/", pos: "adj", vi: "Thịnh hành, phổ biến lan rộng", example: "Sedentary entertainment has become prevalent among adolescents.", synonyms: "Widespread, ubiquitous" }
        ],
        quizzes: [
          {
            q: "Trong Speaking Part 3, chủ ngữ nào bạn nên HẠN CHẾ lạm dụng nhất?",
            opts: ["I / Me (Tôi - quá thiên về cá nhân)", "People / Citizens (Mọi người / Công dân)", "Governments (Chính phủ)", "The youth (Giới trẻ)"],
            correct: 0,
            exp: "Part 3 yêu cầu bàn luận vấn đề xã hội vĩ mô, nên hạn chế chỉ nói về bản thân mình ('I / In my house')."
          },
          {
            q: "Từ 'Paradoxical' mô tả điều gì?",
            opts: ["Một nghịch lý trông có vẻ mâu thuẫn nhưng lại có thật", "Một bài toán dễ", "Một món ăn ngon", "Một ngày nắng đẹp"],
            correct: 0,
            exp: "'Paradoxical' (nghịch lý) miêu tả hai sự thật tưởng như đối lập nhau nhưng cùng tồn tại."
          },
          {
            q: "Từ nào đồng nghĩa với 'Vital / Urgent' (cấp bách, thiết yếu)?",
            opts: ["Imperative", "Sedentary", "Hesitant", "Monotonous"],
            correct: 0,
            exp: "'Imperative' vừa là tính từ (cấp bách), vừa là danh từ (mệnh lệnh thiết yếu)."
          },
          {
            q: "Để trả lời câu hỏi 'How has technology changed family life?', bạn nên tiếp cận theo hướng nào?",
            opts: ["So sánh giữa quá khứ và hiện tại từ góc độ giao tiếp trong bữa ăn", "Chỉ nói về chiếc điện thoại của riêng bạn", "Kể tên các hãng điện thoại", "Im lặng"],
            correct: 0,
            exp: "So sánh sự chuyển biến thế hệ và tác động tới sự tương tác gia đình thể hiện tư duy Band 7.5+."
          },
          {
            q: "Từ 'Disproportionate' mang ý nghĩa gì?",
            opts: ["Thiếu cân xứng, chênh lệch bất công", "Rất cân đối", "Rất nhỏ bé", "Được trợ cấp"],
            correct: 0,
            exp: "'Disproportionate' chỉ sự bất đối xứng, không cân bằng (ví dụ: gánh nặng đè nặng lên người nghèo)."
          }
        ]
      },
      {
        id: "stage-13",
        stageNum: 13,
        title: "Reading: Xử Lý Dạng Bài Khó Matching Headings",
        skill: "Reading",
        skillIcon: "📖",
        duration: "20 phút",
        xp: 70,
        summary: "Bắt trọn ý nghĩa khái quát của cả đoạn văn thay vì bị lừa bởi những từ vựng đơn lẻ.",
        content: `
          <h3>🎯 1. Bản chất của dạng bài nối tiêu đề (Matching Headings)</h3>
          <p>Tiêu đề (Heading) là bản tóm tắt khái quát nhất của toàn bộ đoạn văn. Bẫy tinh vi nhất của giám khảo là nhét 1 từ vựng xuất hiện trong bài vào một tiêu đề sai, khiến thí sinh vội vàng chọn ngay.</p>

          <div class="theory-box">
            <h4>Quy trình 3 bước xử lý:</h4>
            <ul>
              <li><b>Bước 1:</b> Luôn đọc danh sách Headings trước và gạch chân các từ khóa cốt lõi trong từng Heading.</li>
              <li><b>Bước 2:</b> Đọc câu đầu, câu thứ hai và câu kết của đoạn văn để xác định thông điệp bao trùm.</li>
              <li><b>Bước 3:</b> Tự tóm tắt đoạn văn bằng 1 câu ngắn trong đầu, sau đó đối chiếu tìm Heading tương đương nhất.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Overarching", ipa: "/ˌəʊ.vərˈɑː.tʃɪŋ/", pos: "adj", vi: "Bao quát, chi phối toàn cục", example: "The overarching theme of the treatise is human sustainability.", synonyms: "Comprehensive, dominant, overall" },
          { word: "Synopsis", ipa: "/sɪˈnɒp.sɪs/", pos: "noun", vi: "Bản tóm tắt cô đọng súc tích", example: "The executive provided a lucid synopsis of the market report.", synonyms: "Summary, abstract, outline" },
          { word: "Differentiate", ipa: "/ˌdɪf.əˈren.ʃi.eɪt/", pos: "verb", vi: "Phân biệt sự khác nhau tinh tế", example: "Candidates must differentiate between main ideas and supporting details.", synonyms: "Distinguish, discern" },
          { word: "Superficial", ipa: "/ˌsuː.pəˈfɪʃ.əl/", pos: "adj", vi: "Nông cạn, chỉ ở bề mặt bên ngoài", example: "Relying on keyword matches results in superficial analysis.", synonyms: "Shallow, surface-level" },
          { word: "Substantiate", ipa: "/səbˈstæn.ʃi.eɪt/", pos: "verb", vi: "Cung cấp chứng cứ chứng minh", example: "Paragraph C substantiates the claims outlined in the introduction.", synonyms: "Corroborate, support" },
          { word: "Pervasive", ipa: "/pəˈveɪ.sɪv/", pos: "adj", vi: "Lan tỏa khắp nơi, thâm nhập mọi ngõ ngách", example: "Microplastic pollution exerts a pervasive influence on ecosystems.", synonyms: "Widespread, ubiquitous" },
          { word: "Prevalent", ipa: "/ˈprev.əl.ənt/", pos: "adj", vi: "Phổ biến rộng rãi", example: "Such misconceptions were prevalent throughout the Middle Ages.", synonyms: "Common, rampant" }
        ],
        quizzes: [
          {
            q: "Tại sao không nên chọn một Heading chỉ vì nó chứa từ y hệt trong đoạn văn?",
            opts: ["Vì đó thường là bẫy của giám khảo (từ xuất hiện trong ví dụ phụ chứ không phải ý chính)", "Vì từ đó viết sai chính tả", "Vì tiêu đề luôn dùng tiếng Pháp", "Vì đoạn văn đó không có nghĩa"],
            correct: 0,
            exp: "Giám khảo thường đặt các từ nổi bật vào chi tiết phụ để gài bẫy những thí sinh chỉ tìm từ khóa máy móc."
          },
          {
            q: "Từ 'Overarching theme' mang nghĩa là gì?",
            opts: ["Chủ đề bao quát, chi phối toàn bộ bài viết", "Một mái vòm cổ kính", "Một câu chuyện ngắn", "Một lỗi ngữ pháp"],
            correct: 0,
            exp: "'Overarching' có nghĩa là bao trùm, bao quát toàn thể."
          },
          {
            q: "Nếu một đoạn văn kể câu chuyện một nhà khoa học thất bại 5 lần nhưng kết luận là phát minh ra bóng đèn, Heading đúng sẽ nói về gì?",
            opts: ["Thành tựu đột phá cuối cùng (Ý chính bao quát)", "Chi tiết chiếc bóng đèn bị vỡ lần 1", "Tên người vợ của nhà khoa học", "Giá tiền mua dây tóc"],
            correct: 0,
            exp: "Heading phải tóm tắt thông điệp trung tâm (sự kiên trì dẫn đến đột phá) chứ không lấy chi tiết phụ."
          },
          {
            q: "Từ nào đồng nghĩa với 'Distinguish / Discern' (phân biệt)?",
            opts: ["Differentiate", "Devour", "Sedentary", "Monotonous"],
            correct: 0,
            exp: "'Differentiate' là phân biệt sự khác nhau giữa các đối tượng."
          },
          {
            q: "Nên làm dạng bài Matching Headings ở thời điểm nào của bài thi?",
            opts: ["Nên làm đầu tiên của bài đọc đó (vì giúp nắm cấu trúc toàn bài)", "Để lại làm sau khi hết giờ", "Bỏ qua không làm", "Làm vào tờ nháp"],
            correct: 0,
            exp: "Làm Matching Headings đầu tiên giúp bạn đọc lướt toàn bài, tạo tiền đề giải nhanh các câu hỏi chi tiết phía sau."
          }
        ]
      },
      {
        id: "stage-14",
        stageNum: 14,
        title: "Grammar: Mệnh Đề Quan Hệ Rút Gọn & Phân Từ",
        skill: "Grammar",
        skillIcon: "⚡",
        duration: "20 phút",
        xp: 70,
        summary: "Cô đọng câu văn học thuật và nâng điểm tiêu chí Grammatical Range & Accuracy lên mức tối đa.",
        content: `
          <h3>🎯 1. Bí thuật biến câu ghép rườm rà thành câu đơn cao cấp</h3>
          <p>Thí sinh Band 5.0 - 6.0 thường lạm dụng quá nhiều đại từ quan hệ <i>'which, who, that'</i> khiến câu văn dài dòng và nặng nề. Người viết học thuật Band 8.0 sử dụng <b>Mệnh đề phân từ rút gọn (Participle Clauses)</b>:</p>

          <div class="theory-box">
            <h4>Hai dạng rút gọn kinh điển:</h4>
            <ul>
              <li><b>1. Dạng chủ động (V-ing):</b><br>
                <i>Câu thường:</i> The policy which aims to curb emissions was enacted.<br>
                ➔ <i>Rút gọn C1:</i> <b>The policy aiming to curb emissions</b> was enacted.</li>
              <li><b>2. Dạng bị động (V-ed / V3):</b><br>
                <i>Câu thường:</i> The funds which were allocated for education were spent.<br>
                ➔ <i>Rút gọn C1:</i> <b>The funds allocated for education</b> were spent.</li>
              <li><b>3. Phân từ đầu câu (Having + V3):</b> Nhấn mạnh hành động xảy ra trước.<br>
                ➔ <i>Ví dụ:</i> <b>Having depleted their fiscal reserves</b>, municipalities turned to foreign loans.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Concise", ipa: "/kənˈsaɪs/", pos: "adj", vi: "Ngắn gọn, súc tích, không thừa chữ", example: "Academic abstracts must be both concise and substantive.", synonyms: "Succinct, pithy, terse" },
          { word: "Substantive", ipa: "/səbˈstæn.tɪv/", pos: "adj", vi: "Có thực chất, có trọng lượng nội dung", example: "The summit achieved substantive progress on tariff reductions.", synonyms: "Meaningful, significant, real" },
          { word: "Redundancy", ipa: "/rɪˈdʌn.dən.si/", pos: "noun", vi: "Sự rườm rà dư thừa chữ nghĩa", example: "Eliminate grammatical redundancy to enhance prose rhythm.", synonyms: "Superfluity, wordiness" },
          { word: "Clause", ipa: "/klɔːz/", pos: "noun", vi: "Mệnh đề trong câu ngữ pháp", example: "Participle clauses compress intricate ideas elegantly.", synonyms: "Grammatical sentence unit" },
          { word: "Syntactic", ipa: "/sɪnˈtæk.tɪk/", pos: "adj", vi: "Thuộc về cú pháp và cấu trúc câu", example: "Examiners evaluate syntactic variety across essay bodies.", synonyms: "Structural, grammatical" },
          { word: "Succinct", ipa: "/səkˈsɪŋkt/", pos: "adj", vi: "Cô đọng, mạch lạc gãy gọn", example: "Her succinct response captured the essence of the problem.", synonyms: "Concise, compact, brief" },
          { word: "Pithy", ipa: "/ˈpɪθ.i/", pos: "adj", vi: "Đậm đà ý nghĩa sâu cay ngắn gọn", example: "The philosopher was famed for pithy maxims.", synonyms: "Epigrammatic, trenchant" }
        ],
        quizzes: [
          {
            q: "Rút gọn câu chủ động: 'The government enacted a law which bans plastic bags' thành câu nào đúng?",
            opts: ["The government enacted a law banning plastic bags", "The government enacted a law banned plastic bags", "The government enacted a law to ban plastic bags", "The government enacted a law ban plastic bags"],
            correct: 0,
            exp: "Mệnh đề quan hệ chủ động (which bans) rút gọn thành hiện tại phân từ V-ing (banning)."
          },
          {
            q: "Rút gọn câu bị động: 'Vehicles which are equipped with sensors avoid crashes' thành câu nào?",
            opts: ["Vehicles equipped with sensors avoid crashes", "Vehicles equipping with sensors avoid crashes", "Vehicles equip with sensors avoid crashes", "Vehicles to equip with sensors"],
            correct: 0,
            exp: "Mệnh đề quan hệ bị động (which are equipped) rút gọn thành quá khứ phân từ V3/ed (equipped)."
          },
          {
            q: "Từ nào đồng nghĩa với 'Concise / Brief' (ngắn gọn, súc tích)?",
            opts: ["Succinct", "Redundant", "Sprawling", "Hesitant"],
            correct: 0,
            exp: "'Succinct' miêu tả phong cách viết cô đọng, đi thẳng vào vấn đề không lan man."
          },
          {
            q: "Từ 'Redundancy' trong viết học thuật chỉ lỗi gì?",
            opts: ["Lỗi thừa thãi từ ngữ lặp đi lặp lại", "Lỗi sai chính tả", "Lỗi thiếu dấu chấm câu", "Lỗi viết ngắn quá"],
            correct: 0,
            exp: "'Redundancy' là sự dư thừa thông tin hoặc lặp từ không cần thiết."
          },
          {
            q: "Cấu trúc 'Having + V3' đứng đầu câu dùng để làm gì?",
            opts: ["Nhấn mạnh một hành động đã hoàn thành trọn vẹn trước hành động kia", "Nói về tương lai xa", "Đặt câu hỏi phỏng vấn", "Xin phép ra ngoài"],
            correct: 0,
            exp: "'Having completed / Having seen...' là phân từ hoàn thành (Perfect Participle) chỉ hành động xảy ra trước."
          }
        ]
      },
      {
        id: "stage-15",
        stageNum: 15,
        title: "Vocabulary: Cụm Từ Học Thuật Về AI & Công Nghệ Số",
        skill: "Vocabulary",
        skillIcon: "🚀",
        duration: "20 phút",
        xp: 70,
        summary: "Nạp trọn bộ 15 từ vựng công nghệ hiện đại nhất xuất hiện dày đặc trong đề thi IELTS gần đây.",
        content: `
          <h3>🎯 1. Bắt kịp xu hướng đề thi thế kỷ 21</h3>
          <p>Các đề thi IELTS gần đây liên tục ra chủ đề Trí tuệ nhân tạo (AI), Tự động hóa và Đô thị thông minh. Nếu bạn chỉ dùng những từ đơn giản như <i>'computer, robot, modern machine'</i>, bạn không thể vượt qua Band 6.0.</p>

          <div class="theory-box">
            <h4>Các cụm từ vựng định hình tư duy công nghệ:</h4>
            <ul>
              <li><i>To automate routine clerical workflows:</i> Tự động hóa quy trình hành chính bàn giấy lặp lại.</li>
              <li><i>To democratize access to education:</i> Bình đẳng hóa, phổ cập cơ hội tiếp cận tri thức cho mọi người.</li>
              <li><i>To harbor algorithmic bias:</i> Chứa đựng định kiến ngầm trong thuật toán máy học.</li>
              <li><i>To supersede obsolete manual systems:</i> Thay thế hoàn toàn các hệ thống thủ công lỗi thời.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Supersede", ipa: "/ˌsuː.pəˈsiːd/", pos: "verb", vi: "Thay thế, thế chỗ cái cũ lỗi thời", example: "Digital payment platforms have largely superseded paper checks.", synonyms: "Replace, displace, supplant" },
          { word: "Obsolete", ipa: "/ˌɒb.səlˈiːt/", pos: "adj", vi: "Lỗi thời, không còn giá trị sử dụng", example: "Floppy disks became entirely obsolete within a decade.", synonyms: "Outdated, archaic, outmoded" },
          { word: "Democratize", ipa: "/dɪˈmɒk.rə.taɪz/", pos: "verb", vi: "Phổ cập, bình đẳng hóa cơ hội cho đại chúng", example: "Online repositories democratize access to academic papers.", synonyms: "Popularize, open up" },
          { word: "Algorithmic", ipa: "/ˌæl.ɡəˈrɪð.mɪk/", pos: "adj", vi: "Thuộc về thuật toán máy tính", example: "Algorithmic trading executes thousands of stock orders per second.", synonyms: "Computational, coded" },
          { word: "Proprietary", ipa: "/prəˈpraɪə.tər.i/", pos: "adj", vi: "Độc quyền sở hữu trí tuệ", example: "The company zealously protects its proprietary chip architecture.", synonyms: "Patented, trademarked" },
          { word: "Cognitive", ipa: "/ˈkɒɡ.nə.tɪv/", pos: "adj", vi: "Liên quan đến nhận thức và trí tuệ", example: "Autonomous agents mimic basic human cognitive functions.", synonyms: "Intellectual, mental" },
          { word: "Ubiquitous", ipa: "/juːˈbɪk.wɪ.təs/", pos: "adj", vi: "Phổ biến ở khắp mọi ngõ ngách", example: "High-speed broadband is now ubiquitous across cities.", synonyms: "Omnipresent, pervasive" }
        ],
        quizzes: [
          {
            q: "Từ nào mang nghĩa 'thay thế hoàn toàn cái cũ đã lỗi thời'?",
            opts: ["Supersede", "Sedentary", "Hesitant", "Monotonous"],
            correct: 0,
            exp: "'Supersede' có nghĩa là thay thế hoàn toàn một hệ thống hoặc công nghệ cũ không còn hợp thời."
          },
          {
            q: "Từ 'Obsolete' miêu tả một thiết bị như thế nào?",
            opts: ["Lỗi thời, cổ lỗ sĩ không còn ai dùng", "Rất hiện đại", "Có giá triệu đô", "Mới tinh tươm"],
            correct: 0,
            exp: "'Obsolete' nghĩa là lỗi thời, bị đào thải theo thời gian."
          },
          {
            q: "Cụm 'Democratize access to knowledge' nghĩa là gì?",
            opts: ["Bình đẳng hóa, giúp ai cũng tiếp cận được tri thức", "Giấu kín bí mật", "Bán sách giá đắt", "Cấm học sinh dùng mạng"],
            correct: 0,
            exp: "'Democratize' trong ngữ cảnh công nghệ nghĩa là phổ cập hóa, mở rộng quyền tiếp cận cho tất cả mọi người."
          },
          {
            q: "Từ 'Algorithmic bias' chỉ hiện tượng gì trong AI?",
            opts: ["Sự thiên lệch, định kiến ngầm do dữ liệu huấn luyện thuật toán", "Thuật toán chạy nhanh", "Máy tính hỏng màn hình", "Mạng bị ngắt kết nối"],
            correct: 0,
            exp: "'Algorithmic bias' là định kiến của thuật toán khi dữ liệu đầu vào chứa các yếu tố thiên lệch về giới tính hoặc sắc tộc."
          },
          {
            q: "Từ nào đồng nghĩa với 'Pervasive / Everywhere' (có mặt ở khắp nơi)?",
            opts: ["Ubiquitous", "Stringent", "Crucial", "Vulnerable"],
            correct: 0,
            exp: "'Ubiquitous' là từ Band 8.0 chỉ sự phổ biến rộng khắp mọi nơi."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // GIAI ĐOẠN 4: CHINH PHỤC (BAND 8.0+ - LÀM CHỦ NGÔN NGỮ) - 5 BÀI
  // =========================================================================
  {
    bandId: "phase-4",
    bandTitle: "Giai Đoạn 4: Chinh Phục (Target Band 8.0 - 8.5+)",
    bandDesc: "Cấu trúc Đảo ngữ (Inversion), kỹ thuật Hedging học thuật, phản xạ linh hoạt bản xứ và chiến lược Full Mock Test",
    badgeColor: "#047857",
    lessons: [
      {
        id: "stage-16",
        stageNum: 16,
        title: "Grammar: Cấu Trúc Đảo Ngữ (Inversion) & Câu Chẻ",
        skill: "Writing & Grammar",
        skillIcon: "⚡",
        duration: "25 phút",
        xp: 80,
        summary: "Vũ khí bí mật tạo ấn tượng thị giác mạnh mẽ cho giám khảo ngay từ câu luận điểm đầu tiên.",
        content: `
          <h3>🎯 1. Đảo ngữ - Đỉnh cao phong cách viết học thuật</h3>
          <p>Đảo ngữ (Inversion) là hiện tượng đảo trợ động từ lên trước chủ ngữ khi đưa các cụm từ phủ định hoặc giới hạn lên đầu câu. Chỉ cần đặt đúng 1-2 câu đảo ngữ trong bài luận Task 2, điểm Grammatical Range của bạn sẽ chạm ngưỡng Band 8.0+.</p>

          <div class="theory-box">
            <h4>3 Công thức Đảo ngữ ăn khách nhất:</h4>
            <ul>
              <li><b>1. Not only... but also (Không những mà còn):</b><br>
                ➔ <i><b>Not only do</b> autonomous vehicles reduce traffic fatalities, <b>but they also curb</b> urban emissions substantially.</i></li>
              <li><b>2. Seldom / Rarely / Under no circumstances (Hiếm khi / Trong bất kỳ hoàn cảnh nào cũng không):</b><br>
                ➔ <i><b>Under no circumstances should</b> governments sacrifice primary rainforests for short-term mining profits.</i></li>
              <li><b>3. Câu chẻ nhấn mạnh (Cleft Sentences với 'It is... that'):</b><br>
                ➔ <i><b>It is</b> the reckless consumerist culture, <b>rather than</b> manufacturing capacity, <b>that</b> fuels oceanic plastic contamination.</i></li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Inversion", ipa: "/ɪnˈvɜː.ʃən/", pos: "noun", vi: "Hiện tượng đảo ngữ nhấn mạnh", example: "Syntactic inversion lends dramatic gravitas to formal prose.", synonyms: "Grammatical reversal" },
          { word: "Gravitas", ipa: "/ˈɡræv.ɪ.tæs/", pos: "noun", vi: "Sự trang nghiêm, sức nặng uy nghi của văn phong", example: "Her lecture possessed intellectual gravitas that captivated audiences.", synonyms: "Dignity, solemnity, weightiness" },
          { word: "Reckless", ipa: "/ˈrek.ləs/", pos: "adj", vi: "Liều lĩnh, thiếu cẩn trọng, bừa bãi", example: "Reckless commercial expansion threatens pristine wilderness.", synonyms: "Rash, careless, heedless" },
          { word: "Pristine", ipa: "/ˈprɪs.tiːn/", pos: "adj", vi: "Nguyên sơ, thuần khiết chưa bị con người làm hỏng", example: "Expeditions explored pristine Antarctic glacial formations.", synonyms: "Untouched, unspoiled, immaculate" },
          { word: "Sacrifice", ipa: "/ˈsæk.rɪ.faɪs/", pos: "verb / noun", vi: "Hi sinh, đánh đổi", example: "Do not sacrifice public health on the altar of economic growth.", synonyms: "Forfeit, surrender" },
          { word: "Solemn", ipa: "/ˈsɒl.əm/", pos: "adj", vi: "Trang trọng, nghiêm trang", example: "The chancellor made a solemn pledge to slash university fees.", synonyms: "Serious, grave, earnest" },
          { word: "Cleft sentence", ipa: "/kleft ˈsen.təns/", pos: "noun phrase", vi: "Câu chẻ nhấn mạnh chủ ngữ/tân ngữ", example: "Cleft sentences highlight the decisive agent in historical events.", synonyms: "Focusing construction" }
        ],
        quizzes: [
          {
            q: "Hoàn thành câu đảo ngữ: 'Seldom ______ such a radical paradigm shift in telecommunications.'",
            opts: ["have we witnessed", "we witnessed", "we have witnessed", "witnessed we"],
            correct: 0,
            exp: "Khi 'Seldom' đứng đầu câu, trợ động từ (have) phải đảo lên trước chủ ngữ (we) ➔ 'have we witnessed'."
          },
          {
            q: "Viết lại bằng câu chẻ: 'Human greed causes environmental destruction.'",
            opts: ["It is human greed that causes environmental destruction", "That is human greed causes", "Human greed is which causes", "Because human greed"],
            correct: 0,
            exp: "Cấu trúc câu chẻ chuẩn là 'It is [đối tượng nhấn mạnh] that + V'."
          },
          {
            q: "Từ 'Pristine environment' miêu tả một môi trường như thế nào?",
            opts: ["Hoàn toàn nguyên sơ, chưa hề bị ô nhiễm hay can thiệp", "Bị ô nhiễm nặng", "Đông đúc người qua lại", "Trong phòng thí nghiệm"],
            correct: 0,
            exp: "'Pristine' có nghĩa là nguyên sơ, tinh khôi, hoàn toàn không tì vết."
          },
          {
            q: "Từ nào đồng nghĩa với 'Sự trang trọng, sức nặng uy nghiêm' của phong cách học thuật?",
            opts: ["Gravitas", "Redundancy", "Distractor", "Hesitant"],
            correct: 0,
            exp: "'Gravitas' là từ ngữ vương giả miêu tả sự trang nghiêm, có chiều sâu của văn phong."
          },
          {
            q: "Sau cụm từ 'Under no circumstances' (Dù trong bất cứ hoàn cảnh nào cũng không), ngữ pháp sẽ là gì?",
            opts: ["Đảo trợ động từ lên trước chủ ngữ", "Giữ nguyên thứ tự câu bình thường", "Dùng câu hỏi đuôi", "Không cần động từ"],
            correct: 0,
            exp: "Tất cả các trạng từ mang nghĩa phủ định khi đứng đầu câu đều bắt buộc đảo trợ động từ lên trước chủ ngữ."
          }
        ]
      },
      {
        id: "stage-17",
        stageNum: 17,
        title: "Writing: Kỹ Thuật Hedging (Thận Trọng Học Thuật)",
        skill: "Writing",
        skillIcon: "✍️",
        duration: "25 phút",
        xp: 80,
        summary: "Nói giảm nói tránh mang tính khoa học, tránh khẳng định tuyệt đối để đạt điểm Task Response tối đa.",
        content: `
          <h3>🎯 1. Tại sao khẳng định tuyệt đối là tự sát trong bài luận?</h3>
          <p>Các nhà khoa học không bao giờ nói: <i>'Watching TV makes children violent 100%'</i> vì điều đó mang tính vơ đũa cả nắm (overgeneralization). Người viết Band 8.0 - 9.0 luôn sử dụng ngôn ngữ <b>Hedging (Thận trọng học thuật)</b>:</p>

          <div class="theory-box">
            <h4>Các cấp độ ngôn ngữ Hedging:</h4>
            <ul>
              <li><b>1. Dùng động từ tình thái (Modal Verbs):</b> Thay <i>will / is</i> bằng <i>may, might, could, can tend to</i>.<br>
                <i>'Excessive screen exposure <b>could potentially impair</b> juvenile attention spans.'</i></li>
              <li><b>2. Dùng trạng từ xác suất (Probability Adverbs):</b> <i>arguably, presumably, ostensibly, conceivably</i>.<br>
                <i>'This policy is <b>arguably</b> the most pragmatic compromise.'</i></li>
              <li><b>3. Dùng cụm từ khoảng cách (Distance Phrases):</b><br>
                <i>'Evidence <b>suggests that</b>...', 'It is <b>widely believed that</b>...'</i></li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Pragmatic", ipa: "/præɡˈmæt.ɪk/", pos: "adj", vi: "Thực tế, thực dụng, có ích thay vì lý thuyết suông", example: "Urban planners must adopt pragmatic approaches to mass transit.", synonyms: "Practical, realistic, down-to-earth" },
          { word: "Arguably", ipa: "/ˈɑːɡ.ju.ə.bli/", pos: "adv", vi: "Có thể lập luận rằng (từ Hedging kinh điển)", example: "Electric vehicles are arguably the greenest automotive alternative.", synonyms: "Feasibly, plausibly" },
          { word: "Presumably", ipa: "/prɪˈzjuː.mə.bli/", pos: "adv", vi: "Có lẽ, có thể phỏng đoán là", example: "The missing archives were presumably destroyed in the blaze.", synonyms: "Likely, apparently, probably" },
          { word: "Overgeneralization", ipa: "/ˌəʊ.vəˌdʒen.ər.əl.aɪˈzeɪ.ʃən/", pos: "noun", vi: "Sự vơ đũa cả nắm, khái quát hóa thái quá", example: "Avoid overgeneralization when discussing gender roles in employment.", synonyms: "Sweeping statement, stereotyping" },
          { word: "Nuance", ipa: "/ˈnjuː.ɑːns/", pos: "noun", vi: "Sắc thái ý nghĩa tinh tế, khác biệt nhỏ", example: "Band 8.0 essayists articulate delicate philosophical nuances.", synonyms: "Subtlety, refinement, shading" },
          { word: "Tentative", ipa: "/ˈten.tə.tɪv/", pos: "adj", vi: "Ướm chừng, thận trọng thăm dò, chưa khẳng định 100%", example: "Researchers announced tentative conclusions pending peer review.", synonyms: "Provisional, cautious, hesitant" },
          { word: "Plausible", ipa: "/ˈplɔː.zə.bəl/", pos: "adj", vi: "Hợp lý, đáng tin cậy có cơ sở", example: "Biologists proposed a plausible model explaining avian migration.", synonyms: "Credible, reasonable" }
        ],
        quizzes: [
          {
            q: "Kỹ thuật 'Hedging' trong viết học thuật có mục đích chính là gì?",
            opts: ["Thể hiện sự thận trọng khoa học, tránh khẳng định vơ đũa cả nắm", "Để bài viết dài hơn", "Để làm người đọc hoang mang", "Để giấu ý kiến cá nhân"],
            correct: 0,
            exp: "Hedging thể hiện sự cẩn trọng của học giả, thừa nhận các khả năng ngoại lệ thay vì phán xét tuyệt đối."
          },
          {
            q: "Từ nào là trạng từ Hedging kinh điển có nghĩa 'có thể lập luận rằng'?",
            opts: ["Arguably", "Definitely", "Always", "Never"],
            correct: 0,
            exp: "'Arguably' là từ đắt giá giúp câu văn mềm mại và học thuật hơn rất nhiều."
          },
          {
            q: "Câu nào áp dụng kỹ thuật Hedging tốt nhất?",
            opts: ["Technology could potentially transform traditional pedagogies", "Technology will definitely destroy all schools immediately", "Technology always kills students", "Schools are 100% useless now"],
            correct: 0,
            exp: "Dùng 'could potentially transform' thể hiện sự thận trọng học thuật đạt điểm tiêu chí cao nhất."
          },
          {
            q: "Từ 'Pragmatic solution' miêu tả một giải pháp thế nào?",
            opts: ["Giải pháp thực tiễn, khả thi và có ích trong đời sống", "Giải pháp mơ mộng viển vông", "Giải pháp tốn hàng tỷ đô", "Giải pháp chưa từng làm"],
            correct: 0,
            exp: "'Pragmatic' có nghĩa là thực tiễn, hướng vào kết quả thực tế thay vì lý thuyết giáo điều."
          },
          {
            q: "Từ 'Nuance' chỉ điều gì?",
            opts: ["Sắc thái ý nghĩa tinh tế", "Một lỗi chính tả lớn", "Đoạn văn kết bài", "Một con số khổng lồ"],
            correct: 0,
            exp: "'Nuance' là sắc thái tinh tế, sự khác biệt nhỏ nhưng đắt giá trong cách dùng từ."
          }
        ]
      },
      {
        id: "stage-18",
        stageNum: 18,
        title: "Speaking: Lexical Flexibility & Độ Nhạy Bản Xứ",
        skill: "Speaking",
        skillIcon: "🗣️",
        duration: "25 phút",
        xp: 80,
        summary: "Sử dụng từ vựng đa tầng, linh hoạt biến chuyển thành ngữ và giữ nhịp điệu tự nhiên như người bản xứ.",
        content: `
          <h3>🎯 1. Phá vỡ rào cản từ vựng để vươn tới Band 8.5</h3>
          <p>Sự khác biệt giữa Band 7.0 và Band 8.5 không nằm ở việc dùng từ 'đao to búa lớn', mà nằm ở <b>Độ linh hoạt (Flexibility)</b> và <b>Khả năng diễn đạt tự nhiên (Natural Collocations)</b>. Bạn có thể diễn tả những sắc thái cảm xúc phức tạp một cách nhẹ nhàng như hơi thở.</p>

          <div class="theory-box">
            <h4>Các cụm diễn đạt tự nhiên chuẩn bản xứ:</h4>
            <ul>
              <li><i>To strike a chord with someone:</i> Chạm đúng vào cảm xúc, gây đồng cảm sâu sắc.<br>
                <i>'That melody really struck a chord with me during turbulent times.'</i></li>
              <li><i>To have a penchant for something:</i> Có sở thích đặc biệt, thiên hướng yêu thích cái gì.<br>
                <i>'I have always had a penchant for mid-century minimalist architecture.'</i></li>
              <li><i>To look on the bright side of things:</i> Luôn giữ thái độ lạc quan trong nghịch cảnh.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Penchant", ipa: "/ˈpɑ̃ːŋ.ʃɑ̃ːŋ/", pos: "noun", vi: "Sở thích đặc biệt, thiên hướng đam mê", example: "He has a well-known penchant for vintage mechanical timepieces.", synonyms: "Predilection, fondness, inclination" },
          { word: "Turbulent", ipa: "/ˈtɜː.bjə.lənt/", pos: "adj", vi: "Đầy biến động sóng gió, bất ổn", example: "The airline survived turbulent financial quarters.", synonyms: "Tumultuous, stormy, chaotic" },
          { word: "Effortlessly", ipa: "/ˈef.ət.ləs.li/", pos: "adv", vi: "Một cách thanh thoát nhẹ nhàng như không tốn sức", example: "She spoke effortlessly across three international tongues.", synonyms: "Fluidly, smoothly, naturally" },
          { word: "Spontaneous", ipa: "/spɒnˈteɪ.ni.əs/", pos: "adj", vi: "Tự phát, ngẫu hứng tự nhiên", example: "The crowd erupted in spontaneous, thunderous applause.", synonyms: "Unprompted, instinctual" },
          { word: "Eloquence", ipa: "/ˈel.ə.kwəns/", pos: "noun", vi: "Tài hùng biện lưu loát, lời ăn tiếng nói truyền cảm", example: "The diplomat was revered for his statesmanlike eloquence.", synonyms: "Articulateness, rhetoric, fluency" },
          { word: "Intricate", ipa: "/ˈɪn.trɪ.kət/", pos: "adj", vi: "Tỉ mỉ, phức tạp, tinh xảo nhiều tầng", example: "The novel weaves an intricate web of character relationships.", synonyms: "Complex, detailed, elaborate" },
          { word: "Charming", ipa: "/ˈtʃɑː.mɪŋ/", pos: "adj", vi: "Quyến rũ, duyên dáng làm say lòng người", example: "The seaside village possesses a charming, serene aura.", synonyms: "Enchanting, delightful, captivating" }
        ],
        quizzes: [
          {
            q: "Thành ngữ 'To strike a chord with someone' có nghĩa là gì?",
            opts: ["Chạm vào cảm xúc, gợi lên sự đồng cảm sâu sắc", "Đánh rơi cây đàn guitar", "Gây sự đánh nhau", "Bị đứt dây đàn"],
            correct: 0,
            exp: "'Strike a chord' là thành ngữ bản xứ tuyệt đẹp chỉ việc một câu nói hay bài hát chạm đúng vào tâm can ai đó."
          },
          {
            q: "Từ 'Penchant' đồng nghĩa với từ nào?",
            opts: ["A strong liking / Fondness (Sở thích đặc biệt)", "Dislike", "Hatred", "Anger"],
            correct: 0,
            exp: "'Have a penchant for' mang nghĩa có sở thích sâu đậm hay thiên hướng đam mê cái gì."
          },
          {
            q: "Từ 'Eloquence' miêu tả phẩm chất gì của diễn giả?",
            opts: ["Tài ăn nói lưu loát, hùng biện truyền cảm", "Tính hay quên", "Nói nhanh không thở", "Giọng nói lí nhí"],
            correct: 0,
            exp: "'Eloquence' là sự hùng biện lưu loát, khả năng dùng từ truyền cảm hứng đỉnh cao."
          },
          {
            q: "Để đạt điểm Lexical Resource Band 8.5 trong Speaking, yếu tố nào quan trọng nhất?",
            opts: ["Dùng từ ngữ chính xác ngữ cảnh, uyển chuyển và tự nhiên như người bản xứ", "Dùng từ càng cổ càng tốt", "Nói không ngừng dù sai ngữ pháp", "Bắt chước giọng robot"],
            correct: 0,
            exp: "Độ chuẩn xác ngữ cảnh và sự tinh tế trong việc kết hợp từ (collocations) là tiêu chí số 1."
          },
          {
            q: "Từ 'Turbulent period' miêu tả một giai đoạn như thế nào?",
            opts: ["Giai đoạn đầy sóng gió, biến động bất ổn", "Thời kỳ hòa bình", "Một buổi chiều êm ả", "Một kỳ nghỉ mát"],
            correct: 0,
            exp: "'Turbulent' nghĩa là sóng gió, biến động hỗn loạn."
          }
        ]
      },
      {
        id: "stage-19",
        stageNum: 19,
        title: "Reading: Bẫy Suy Luận Ngầm & Summary Completion",
        skill: "Reading",
        skillIcon: "📖",
        duration: "25 phút",
        xp: 80,
        summary: "Bẻ khóa dạng bài tóm tắt đoạn văn (Summary Completion) có từ cho sẵn và chinh phục Passage 3 khó nhất.",
        content: `
          <h3>🎯 1. Giải mã dạng bài điền từ vào bản tóm tắt</h3>
          <p>Passage 3 luôn là 'cơn ác mộng' vì chứa các bài nghiên cứu trừu tượng (triết học, lịch sử cổ đại, tâm lý học thần kinh). Dạng bài <b>Summary Completion with a box</b> đòi hỏi bạn không chỉ tìm từ trong bài mà còn phải tìm <b>từ đồng nghĩa trong bảng lựa chọn</b>.</p>

          <div class="theory-box">
            <h4>3 Bước xử lý bẫy Summary Completion:</h4>
            <ul>
              <li><b>1. Xác định ngữ pháp chỗ trống:</b> Chỗ trống cần loại từ gì (Danh từ số ít/nhiều? Động từ thì quá khứ? Tính từ miêu tả?).</li>
              <li><b>2. Định vị đoạn văn gốc:</b> Quét từ khóa xung quanh chỗ trống để tìm đúng đoạn chứa thông tin trong bài đọc.</li>
              <li><b>3. Tìm từ đồng nghĩa trong hộp:</b> So sánh nghĩa của từ gốc trong bài với danh sách các từ A, B, C, D... trong hộp để chọn đáp án tương đương.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Epitomize", ipa: "/ɪˈpɪt.ə.maɪz/", pos: "verb", vi: "Là hình mẫu thu nhỏ điển hình nhất", example: "Her groundbreaking thesis epitomizes analytical rigor.", synonyms: "Typify, embody, personify" },
          { word: "Rigor", ipa: "/ˈrɪɡ.ər/", pos: "noun", vi: "Sự nghiêm ngặt, chuẩn xác khắt khe", example: "Academic peer review ensures scientific rigor and honesty.", synonyms: "Thoroughness, strictness" },
          { word: "Disillusioned", ipa: "/ˌdɪs.ɪˈluː.ʒənd/", pos: "adj", vi: "Vỡ mộng, tỉnh ngộ sau ảo tưởng", example: "Voters grew disillusioned with unfulfilled campaign pledges.", synonyms: "Disenchanted, disappointed" },
          { word: "Underpin", ipa: "/ˌʌn.dəˈpɪn/", pos: "verb", vi: "Làm nền tảng chống đỡ phía dưới", example: "Extensive empirical research underpins this economic theory.", synonyms: "Support, bolster, buttress" },
          { word: "Nuanced", ipa: "/ˈnjuː.ɑːnst/", pos: "adj", vi: "Đa tầng nghĩa, tinh tế nhiều khía cạnh", example: "The professor offered a nuanced appraisal of colonial history.", synonyms: "Subtle, multifaceted" },
          { word: "Concur", ipa: "/kənˈkɜːr/", pos: "verb", vi: "Đồng thuận, cùng chung quan điểm", example: "Eminent historians concur with this revised chronological timeline.", synonyms: "Agree, accord" },
          { word: "Discrepancy", ipa: "/dɪˈskrep.ən.si/", pos: "noun", vi: "Sự sai lệch, độ chênh giữa 2 nguồn", example: "The auditor flagged an inexplicable financial discrepancy.", synonyms: "Inconsistency, divergence" }
        ],
        quizzes: [
          {
            q: "Trong dạng bài Summary Completion có hộp từ cho sẵn (A, B, C...), các từ trong hộp có giống y hệt từ trong bài không?",
            opts: ["Không, từ trong hộp là các từ đồng nghĩa (synonyms) của từ trong bài", "Giống y hệt 100%", "Là từ vựng tiếng Pháp", "Luôn là tên riêng"],
            correct: 0,
            exp: "Trong dạng này, từ đúng trong hộp là từ đồng nghĩa được paraphrase từ ngữ của bài đọc gốc."
          },
          {
            q: "Từ 'Underpin' có nghĩa là gì?",
            opts: ["Làm nền tảng cốt lõi chống đỡ cho một lý thuyết", "Ghim giấy tờ", "Phá hủy công trình", "Chạy trốn"],
            correct: 0,
            exp: "'Underpin' nghĩa là làm bệ phóng, làm nền tảng chống đỡ cho một hệ thống quan điểm."
          },
          {
            q: "Từ 'Epitomize' đồng nghĩa với từ nào?",
            opts: ["Typify / Embody (Là hiện thân điển hình)", "Contradict", "Plummet", "Hesitate"],
            correct: 0,
            exp: "'Epitomize' có nghĩa là hình mẫu thu nhỏ tiêu biểu nhất cho một đức tính hoặc hiện tượng."
          },
          {
            q: "Bước đầu tiên quan trọng nhất khi nhìn vào chỗ trống cần điền là gì?",
            opts: ["Xác định từ loại (Noun, Verb, Adj, Adv) và dạng số ít/nhiều", "Điền bừa từ đầu tiên trong hộp", "Đọc to câu hỏi", "Hỏi bài bạn bên cạnh"],
            correct: 0,
            exp: "Xác định từ loại giúp bạn loại bỏ ngay 70% các từ không phù hợp ngữ pháp trong hộp lựa chọn."
          },
          {
            q: "Từ 'Concur' đồng nghĩa với từ nào?",
            opts: ["Agree (Đồng thuận, tán thành)", "Disagree", "Hesitate", "Plummet"],
            correct: 0,
            exp: "'Concur with' là từ học thuật cao cấp có nghĩa là đồng thuận quan điểm với ai đó."
          }
        ]
      },
      {
        id: "stage-20",
        stageNum: 20,
        title: "Mastery: Chiến Lược Full Mock Test & Tâm Lý Phòng Thi",
        skill: "Mastery",
        skillIcon: "👑",
        duration: "25 phút",
        xp: 100,
        summary: "Phân bổ sức lực tối ưu trong 3 giờ thi căng thẳng và bẻ gãy mọi áp lực tâm lý để đạt đỉnh cao phong độ.",
        content: `
          <h3>🎯 1. Chiến thắng được quyết định bởi tâm lý phòng thi</h3>
          <p>Nhiều thí sinh làm đề ở nhà được 7.5 nhưng vào phòng thi rớt xuống 6.0 chỉ vì run tay và hoảng loạn khi lỡ mất một câu Listening. Để chạm tới Band 8.0 - 8.5, bạn cần xây dựng <b>Chiến lược quản trị năng lượng</b>:</p>

          <div class="theory-box">
            <h4>Bản lĩnh của một Master IELTS:</h4>
            <ul>
              <li><b>1. Nguyên tắc 'Bỏ qua ngay lập tức' trong Listening:</b> Nếu lỡ mất 1 câu, vứt nó đi ngay lập tức! Mắt nhìn ngay sang câu tiếp theo. Đừng ngồi tiếc nuối câu cũ để rồi bị trôi mất 3 câu sau.</li>
              <li><b>2. Quản lý thời gian Reading nghiêm ngặt:</b> Passage 1 (15 phút) ➔ Passage 2 (20 phút) ➔ Passage 3 (25 phút). Hết giờ là chuyển đoạn, không dây dưa.</li>
              <li><b>3. Giữ thần thái tự tin trong Speaking:</b> Coi giám khảo như một người bạn tri thức phương Tây lâu ngày không gặp để trò chuyện cởi mở, mắt nhìn thẳng (Eye-contact), mỉm cười tự nhiên.</li>
            </ul>
          </div>
        `,
        vocab: [
          { word: "Mastery", ipa: "/ˈmɑː.stər.i/", pos: "noun", vi: "Sự tinh thông, làm chủ bậc thầy", example: "Linguistic mastery requires years of deliberate, reflective practice.", synonyms: "Expertise, supremacy, proficiency" },
          { word: "Composure", ipa: "/kəmˈpəʊ.ʒər/", pos: "noun", vi: "Sự điềm tĩnh, ung dung tự chủ", example: "The candidate maintained pristine composure despite harsh cross-examination.", synonyms: "Equanimity, self-control, poise" },
          { word: "Deliberate", ipa: "/dɪˈlɪb.ər.ət/", pos: "adj", vi: "Có chủ đích, được suy tính thận trọng", example: "Deliberate practice focuses on eliminating specific weaknesses.", synonyms: "Intentional, calculated, conscious" },
          { word: "Unwavering", ipa: "/ʌnˈweɪ.vər.ɪŋ/", pos: "adj", vi: "Kiên định, không bao giờ nao núng", example: "Her unwavering dedication culminated in a stunning Band 8.5 triumph.", synonyms: "Steadfast, resolute, tireless" },
          { word: "Culminate", ipa: "/ˈkʌl.mɪ.neɪt/", pos: "verb", vi: "Đơm hoa kết trái, đạt tới đỉnh cao tột bực", example: "Months of grueling preparation culminated in academic victory.", synonyms: "Peak, climax, conclude" },
          { word: "Formidable", ipa: "/fɔːˈmɪd.ə.bəl/", pos: "adj", vi: "Đáng nể phục, ghê gớm, cừ khôi", example: "She proved a formidable debater on international stages.", synonyms: "Daunting, impressive, mighty" },
          { word: "Equanimity", ipa: "/ˌek.wəˈnɪm.ə.ti/", pos: "noun", vi: "Tâm thế bình thản trước mọi sóng gió", example: "Meditative breathing instills equanimity under exam room pressures.", synonyms: "Calmness, tranquility, poise" }
        ],
        quizzes: [
          {
            q: "Nếu bạn bị lỡ mất một câu trả lời trong phần thi Listening, bạn nên làm gì?",
            opts: ["Bỏ qua ngay lập tức và tập trung đọc câu tiếp theo", "Ngồi ngẫm nghĩ lại câu vừa lỡ", "Bấm nút tạm dừng audio", "Bỏ cả bài thi"],
            correct: 0,
            exp: "Audio không bao giờ dừng lại. Tiếc nuối một câu sẽ khiến bạn mất tập trung và lỡ tiếp 3-4 câu kế tiếp."
          },
          {
            q: "Từ 'Composure' miêu tả trạng thái tinh thần nào?",
            opts: ["Sự điềm tĩnh, ung dung, tự chủ trước áp lực", "Sự sợ hãi tột cùng", "Cơn giận dữ", "Cơn buồn ngủ"],
            correct: 0,
            exp: "'Composure' là sự điềm đạm, giữ vững bản lĩnh và bình tĩnh trong mọi tình huống căng thẳng."
          },
          {
            q: "Phân bổ thời gian lý tưởng cho 3 bài đọc Reading (60 phút) là gì?",
            opts: ["Passage 1: 15 phút, Passage 2: 20 phút, Passage 3: 25 phút", "Mỗi bài đúng 20 phút", "Dành 50 phút cho bài 1", "Chỉ làm bài 3"],
            correct: 0,
            exp: "Passage 1 dễ nhất nên giải quyết nhanh trong 15 phút để dành 25 phút cho Passage 3 trừu tượng."
          },
          {
            q: "Từ 'Culminate in' mang ý nghĩa là gì?",
            opts: ["Dẫn đến đỉnh cao thành công, đơm hoa kết trái", "Bị sụt giảm mạnh", "Bắt đầu từ đầu", "Dừng lại giữa chừng"],
            correct: 0,
            exp: "'Culminate in' có nghĩa là đạt tới đỉnh cao viên mãn sau một quá trình dài nỗ lực."
          },
          {
            q: "Thái độ tốt nhất khi bước vào phòng thi Speaking với giám khảo là gì?",
            opts: ["Tự tin, mỉm cười, duy trì ánh mắt (Eye-contact) và trò chuyện cởi mở", "Cúi gằm mặt nhìn sàn nhà", "Nói lí nhí trong miệng", "Căng thẳng nghiêm nghị"],
            correct: 0,
            exp: "Giao tiếp bằng mắt, sự tự tin và nụ cười tự nhiên giúp bạn giải tỏa áp lực và tạo ấn tượng xuất sắc với giám khảo."
          }
        ]
      }
    ]
  }
];
