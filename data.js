/**
 * DỮ LIỆU NỘI DUNG LỘ TRÌNH HỌC IELTS - CHILL & PLAY
 * Chia thành 3 Chủ đề lớn (Tracks):
 * 1. Âm nhạc US-UK (Hit songs, Lyrics, Idioms Speaking)
 * 2. Xu hướng Thời trang (Fashion trends, Báo Vogue/Elle, Academic Vocab)
 * 3. Tin tức Công nghệ & ITS (AI, Smart Cities, IELTS Reading format)
 */

const ROADMAP_DATA = [
  // ==========================================
  // TRACK 1: ÂM NHẠC US-UK (MUSIC TRACK)
  // ==========================================
  {
    id: "stage-1",
    track: "music",
    trackName: "Âm Nhạc US-UK",
    trackIcon: "🎵",
    title: "Die With A Smile",
    subtitle: "Bruno Mars & Lady Gaga",
    badge: "Pop Ballad • IELTS Speaking",
    level: "Band 6.5 - 7.5",
    xpReward: 50,
    youtubeId: "kPa7bsKwL-8", // Official video
    description: "Khám phá bản tình ca tỷ view làm mưa làm gió toàn cầu. Học các cụm từ đắt giá diễn tả cảm xúc thăng hoa và tình cảm chân thành cho phần thi IELTS Speaking Part 1 & 2.",
    contentType: "music",
    contentData: {
      lyricsSnippet: `I just woke up from a dream where you and I had to say goodbye.
And I don't wanna think about the world without you in my life.
If the world was ending, I'd wanna be next to you.
If the party was over and our time on Earth was through,
I'd wanna hold you just for a while and <span class="highlight-word" data-word="die with a smile">die with a smile</span>.`,
      highlightedExpressions: [
        {
          phrase: "Die with a smile",
          type: "Metaphorical Idiom",
          meaning: "Mãn nguyện, không còn gì hối tiếc trong đời",
          ieltsTip: "Dùng trong Speaking Part 2 khi kể về trải nghiệm đáng nhớ nhất cuộc đời ('If I accomplished this dream, I could die with a smile')."
        },
        {
          phrase: "In the blink of an eye",
          type: "Idiom",
          meaning: "Trong nháy mắt, cực kỳ nhanh chóng",
          ieltsTip: "Thay thế cho 'very quickly' trong Speaking Part 1 hoặc Part 3 ('Trends change in the blink of an eye')."
        },
        {
          phrase: "Bittersweet",
          type: "Adjective (Band 7.0)",
          meaning: "Buồn vui lẫn lộn, vừa ngọt ngào vừa tiếc nuối",
          ieltsTip: "Miêu tả cảm xúc ngày tốt nghiệp hoặc chia tay đồng nghiệp cũ ('It was a bittersweet moment')."
        }
      ]
    },
    vocabList: [
      {
        word: "Bittersweet",
        ipa: "/ˌbɪtəˈswiːt/",
        pos: "adj",
        meaning: "Buồn vui lẫn lộn, ngọt ngào xen lẫn tiếc nuối",
        example: "Graduating from university was a bittersweet moment for me.",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Serenade",
        ipa: "/ˌser.əˈneɪd/",
        pos: "v / n",
        meaning: "Hát bản tình ca, tán tỉnh bằng âm nhạc",
        example: "He played the acoustic guitar to serenade his girlfriend.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Unconditional",
        ipa: "/ˌʌn.kənˈdɪʃ.ən.əl/",
        pos: "adj",
        meaning: "Vô điều kiện, không đòi hỏi đáp lại",
        example: "Parents usually offer unconditional love and immense support.",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "In the blink of an eye",
        ipa: "/ɪn ðə blɪŋk əv ən aɪ/",
        pos: "idiom",
        meaning: "Trong chớp mắt, rất nhanh chóng",
        example: "Technology has evolved tremendously in the blink of an eye.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60"
      }
    ],
    matchingPairs: [
      { en: "Bittersweet", vi: "Vừa vui vừa tiếc nuối" },
      { en: "Serenade", vi: "Hát tình ca tán tỉnh" },
      { en: "Unconditional", vi: "Tình cảm vô điều kiện" },
      { en: "In the blink of an eye", vi: "Trong chớp mắt" },
      { en: "Die with a smile", vi: "Mãn nguyện không tiếc nuối" }
    ],
    gapFill: {
      question: "Hoàn thành câu hát nổi tiếng trong điệp khúc: 'If the world was ending, I'd wanna hold you just for a while and ______.'",
      options: ["dance in the rain", "die with a smile", "cry out loud", "sing all night"],
      correctIndex: 1,
      explanation: "Đáp án đúng là 'die with a smile' - ẩn dụ cho cảm giác mãn nguyện, trọn vẹn dù ngày tận thế có đến."
    }
  },

  {
    id: "stage-2",
    track: "music",
    trackName: "Âm Nhạc US-UK",
    trackIcon: "🎵",
    title: "Espresso",
    subtitle: "Sabrina Carpenter",
    badge: "Summer Hit • Slang & Casual English",
    level: "Band 6.0 - 7.0",
    xpReward: 60,
    youtubeId: "eVli-tstM5E",
    description: "Giai điệu disco-pop gây nghiện nhất mùa hè. Học cách nói dí dỏm, sự tự tin quyến rũ và những cách diễn đạt tự nhiên chuẩn bản xứ bè bạn phương Tây.",
    contentType: "music",
    contentData: {
      lyricsSnippet: `Now he's thinkin' 'bout me every night, oh
Is it that sweet? I guess so
Say you can't sleep, baby, I know
That's that me, <span class="highlight-word" data-word="espresso">espresso</span>
Move it up, down, left, right, oh
Switch it up like Nintendo.`,
      highlightedExpressions: [
        {
          phrase: "Wrap someone around your finger",
          type: "Idiom (Band 7.5)",
          meaning: "Khiến ai đó mê đắm và nghe theo mình răm rắp",
          ieltsTip: "Dùng để miêu tả sức hút cá nhân (charismatic personality) trong Speaking Part 2."
        },
        {
          phrase: "Switch it up",
          type: "Phrasal Verb",
          meaning: "Thay đổi phong cách, làm điều gì đó mới mẻ",
          ieltsTip: "Dùng khi nói về sở thích hoặc phong cách sống ('I like to switch it up occasionally')."
        },
        {
          phrase: "Nonchalant",
          type: "Adjective (Band 8.0)",
          meaning: "Thờ ơ, thản nhiên, tỏ vẻ ngầu và không màng thế sự",
          ieltsTip: "Từ vựng cực đắt giá miêu tả thái độ điềm tĩnh ('He remained surprisingly nonchalant')."
        }
      ]
    },
    vocabList: [
      {
        word: "Nonchalant",
        ipa: "/ˌnɒn.ʃəl.ənt/",
        pos: "adj",
        meaning: "Thản nhiên, điềm tĩnh, không lo âu",
        example: "She appeared delightfully nonchalant despite the tense situation.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Intoxicating",
        ipa: "/ɪnˈtɒk.sɪ.keɪ.tɪŋ/",
        pos: "adj",
        meaning: "Gây say mê, làm say đắm lòng người",
        example: "The aroma of freshly roasted coffee beans is truly intoxicating.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Caffeine rush",
        ipa: "/ˈkæf.iːn rʌʃ/",
        pos: "noun phrase",
        meaning: "Cơn bừng tỉnh năng lượng sau khi uống cà phê",
        example: "I need a morning caffeine rush before starting heavy spreadsheets.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Switch it up",
        ipa: "/swɪtʃ ɪt ʌp/",
        pos: "phrasal verb",
        meaning: "Đổi mới, thay đổi phong cách cho thú vị",
        example: "Instead of staying home, let's switch it up and dine at a rooftop café.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60"
      }
    ],
    matchingPairs: [
      { en: "Nonchalant", vi: "Thản nhiên, tỏ vẻ ngầu" },
      { en: "Intoxicating", vi: "Gây say đắm, mê hoặc" },
      { en: "Caffeine rush", vi: "Bừng tỉnh do cà phê" },
      { en: "Switch it up", vi: "Đổi mới phong cách" },
      { en: "Charisma", vi: "Sức hút cá nhân lôi cuốn" }
    ],
    gapFill: {
      question: "Sabrina Carpenter so sánh sự thu hút khó cưỡng của mình với thứ gì khiến đối phương mất ngủ cả đêm?",
      options: ["A cup of chamomile tea", "A shot of Espresso", "A bottle of vintage wine", "An energy drink"],
      correctIndex: 1,
      explanation: "'Espresso' chính là hình ảnh ẩn dụ xuyên suốt bài hát, biểu tượng cho năng lượng bùng nổ và sự cuốn hút mạnh mẽ."
    }
  },

  // ==========================================
  // TRACK 2: XU HƯỚNG THỜI TRANG (FASHION TRACK)
  // ==========================================
  {
    id: "stage-3",
    track: "fashion",
    trackName: "Thời Trang & Lifestyle",
    trackIcon: "👗",
    title: "Quiet Luxury & Old Money",
    subtitle: "Vogue & Harper's Bazaar Trend",
    badge: "Lifestyle • Academic Band 7.5+",
    level: "Band 7.0 - 8.0",
    xpReward: 70,
    youtubeId: "J2p5d3k_sN4", // fashion short/documentary
    description: "Giải mã cơn sốt 'Quiet Luxury' (Sang trọng thầm lặng) thống trị giới mộ điệu. Nạp trọn bộ tính từ C1-C2 miêu tả phong cách, thẩm mỹ và gu thưởng thức đỉnh cao.",
    contentType: "article",
    contentData: {
      title: "The Art of Understated Elegance: Why Quiet Luxury Still Reigns",
      author: "Vogue International • Style Column",
      readTime: "2 phút đọc",
      articleText: `In stark contrast to logomania and flashy neon statements, the fashion world has embraced <b>quiet luxury</b>—often termed the <i>Old Money aesthetic</i>. Rather than parading giant brand logos, connoisseurs invest in <b>bespoke tailoring</b>, sumptuous cashmere, and neutral palettes.

This trend celebrates <b>understated elegance</b>. It suggests that true sophistication whispers rather than shouts. Garments are crafted with immaculate attention to detail, featuring <b>timeless silhouettes</b> that withstand fleeting micro-trends.

Sociologists observe that in times of economic uncertainty, consumers naturally gravitate towards <b>sustainable craftsmanship</b> over fast-fashion consumerism.`,
      highlightedExpressions: [
        {
          phrase: "Understated elegance",
          type: "Collocation (Band 8.0)",
          meaning: "Vẻ thanh lịch kín đáo, sang trọng không phô trương",
          ieltsTip: "Cực kỳ ăn điểm khi miêu tả con người, kiến trúc hoặc phong cách sống trong IELTS Speaking & Writing."
        },
        {
          phrase: "Bespoke tailoring",
          type: "Collocation",
          meaning: "Trang phục may đo riêng theo số đo chuẩn xác",
          ieltsTip: "Dùng để thay thế cho cụm từ đơn giản 'custom-made clothes'."
        },
        {
          phrase: "Timeless silhouette",
          type: "Fashion Collocation",
          meaning: "Kiểu dáng kinh điển không bao giờ lỗi mốt",
          ieltsTip: "Áp dụng vào chủ đề Art & Culture trong IELTS Writing Task 2."
        }
      ]
    },
    vocabList: [
      {
        word: "Understated",
        ipa: "/ˌʌn.dəˈsteɪ.tɪd/",
        pos: "adj",
        meaning: "Kín đáo, tinh tế, không phô trương",
        example: "Her understated outfit exuded sheer class and refinement.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Bespoke",
        ipa: "/bɪˈspəʊk/",
        pos: "adj",
        meaning: "Đặt làm riêng, may đo riêng theo yêu cầu",
        example: "The executive wore a bespoke Italian suit to the gala dinner.",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Ostentatious",
        ipa: "/ˌɒs.tenˈteɪ.ʃəs/",
        pos: "adj (C2)",
        meaning: "Khoe khoang, phô trương kệch cỡm (ngược nghĩa understated)",
        example: "He avoided ostentatious jewelry to maintain a professional aura.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Connoisseur",
        ipa: "/ˌkɒn.əˈsɜːr/",
        pos: "noun (C2)",
        meaning: "Người sành sỏi, chuyên gia có mắt thẩm mỹ cao",
        example: "Fashion connoisseurs prioritize garment longevity over trend cycles.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60"
      }
    ],
    matchingPairs: [
      { en: "Understated", vi: "Tinh tế không phô trương" },
      { en: "Bespoke", vi: "May đo riêng theo yêu cầu" },
      { en: "Ostentatious", vi: "Khoe khoang lộ liễu" },
      { en: "Connoisseur", vi: "Người sành sỏi thẩm mỹ" },
      { en: "Silhouette", vi: "Kiểu dáng hình thể trang phục" }
    ],
    gapFill: {
      question: "Từ nào trong bài mang nghĩa trái ngược hoàn toàn với vẻ đẹp kín đáo của 'quiet luxury'?",
      options: ["Minimalist", "Ostentatious", "Bespoke", "Understated"],
      correctIndex: 1,
      explanation: "'Ostentatious' có nghĩa là phô trương, khoe của - đối lập hoàn toàn với tinh thần kín đáo của 'Quiet Luxury'."
    }
  },

  {
    id: "stage-4",
    track: "fashion",
    trackName: "Thời Trang & Lifestyle",
    trackIcon: "👗",
    title: "Sustainable Fashion & Circularity",
    subtitle: "Eco Chic • Green Living",
    badge: "IELTS Writing Task 2 Hot Topic",
    level: "Band 7.0 - 8.5",
    xpReward: 75,
    youtubeId: "5r8vUu5sQls",
    description: "Xu hướng thời trang xanh và kinh tế tuần hoàn. Đây là chủ đề xuất hiện với tần suất cực dày đặc trong đề thi IELTS Writing Task 2 và Reading thật.",
    contentType: "article",
    contentData: {
      title: "Rethinking What We Wear: The Rise of Circular Fashion",
      author: "Eco-Lifestyle Monitor",
      readTime: "2 phút đọc",
      articleText: `The relentless rise of fast fashion has incurred an alarming environmental toll. Textile production generates massive <b>carbon footprints</b> and fills landfills with non-degradable synthetic fibers.

To mitigate this crisis, pioneering brands are adopting a <b>circular economy</b> model. This paradigm promotes <b>upcycling</b>, biodegradable organic fabrics, and garment rental platforms. 

By curbing mindless impulse purchases and fostering <b>ethical consumerism</b>, modern shoppers are turning wardrobe curation into a potent environmental statement.`,
      highlightedExpressions: [
        {
          phrase: "Carbon footprint",
          type: "Key IELTS Collocation",
          meaning: "Lượng khí thải carbon thải ra môi trường",
          ieltsTip: "Cụm từ bắt buộc phải biết cho các bài luận về Environment & Industrialization."
        },
        {
          phrase: "Circular economy",
          type: "Economic Concept",
          meaning: "Nền kinh tế tuần hoàn (tái chế, giảm thiểu rác thải)",
          ieltsTip: "Dùng để đề xuất giải pháp bền vững trong Task 2 Problem-Solution essays."
        },
        {
          phrase: "Ethical consumerism",
          type: "Sociological Term",
          meaning: "Tiêu dùng có đạo đức (chỉ mua sản phẩm thân thiện xã hội/môi trường)",
          ieltsTip: "Cách diễn đạt Band 8.0 khi bàn về hành vi mua sắm của thế hệ trẻ."
        }
      ]
    },
    vocabList: [
      {
        word: "Biodegradable",
        ipa: "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/",
        pos: "adj",
        meaning: "Có thể phân hủy sinh học tự nhiên",
        example: "Many designers now turn to biodegradable fabrics made from pineapple leaves.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Upcycling",
        ipa: "/ˈʌpˌsaɪ.klɪŋ/",
        pos: "noun",
        meaning: "Tái chế nâng cấp (biến đồ cũ thành món đồ giá trị cao hơn)",
        example: "Upcycling vintage denim has become a lucrative craft for young artisans.",
        image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Mitigate",
        ipa: "/ˈmɪt.ɪ.ɡeɪt/",
        pos: "verb (Academic)",
        meaning: "Giảm nhẹ, xoa dịu tác hại",
        example: "Transitioning to solar power helps mitigate carbon emissions.",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Impulse purchase",
        ipa: "/ˈɪm.pʌls ˈpɜː.tʃəs/",
        pos: "collocation",
        meaning: "Mua sắm bốc đồng, không suy tính trước",
        example: "Social media ads are notoriously crafted to trigger impulse purchases.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60"
      }
    ],
    matchingPairs: [
      { en: "Biodegradable", vi: "Phân hủy sinh học" },
      { en: "Upcycling", vi: "Tái chế nâng cấp giá trị" },
      { en: "Mitigate", vi: "Làm dịu, giảm thiểu tác hại" },
      { en: "Impulse purchase", vi: "Mua sắm bốc đồng theo cảm xúc" },
      { en: "Carbon footprint", vi: "Dấu chân phát thải carbon" }
    ],
    gapFill: {
      question: "Hành động tái chế quần áo cũ thành các sản phẩm thời trang cao cấp, độc lạ được gọi là gì?",
      options: ["Downcycling", "Upcycling", "Fast-fashioning", "Landfilling"],
      correctIndex: 1,
      explanation: "'Upcycling' (tái chế nâng cấp) là biến đổi phế liệu hoặc sản phẩm cũ thành vật phẩm có công năng và giá trị thẩm mỹ cao hơn."
    }
  },

  // ==========================================
  // TRACK 3: CÔNG NGHỆ & TƯƠNG LAI SỐ (TECH & ITS TRACK)
  // ==========================================
  {
    id: "stage-5",
    track: "tech",
    trackName: "Công Nghệ & Tương Lai Số",
    trackIcon: "🚀",
    title: "AI Agents & Autonomous Work",
    subtitle: "The Next Era of Productivity",
    badge: "AI Frontier • IELTS Reading Format",
    level: "Band 7.5 - 8.5",
    xpReward: 80,
    youtubeId: "2b99k_2hYqw",
    description: "Sự bùng nổ của các Trợ lý AI tự hành (AI Agents). Nắm vững tư duy công nghệ hiện đại và vốn từ học thuật xuất hiện dày đặc trong các đề thi đọc hiểu học thuật.",
    contentType: "article",
    contentData: {
      title: "From Chatbots to Autonomous Agents: The New Paradigm of Work",
      author: "Global Tech Horizon • AI Research Digest",
      readTime: "2.5 phút đọc",
      articleText: `While early generative AI models operated purely as conversational respondents, the tech landscape has undergone a profound <b>paradigm shift</b> towards autonomous AI agents. 

Unlike passive chatbots, an agent possesses reasoning capabilities, tools, and memory. It can decompose intricate corporate objectives into <b>sequential workflows</b>, execute tasks without constant supervision, and learn dynamically from feedback.

Industry analysts predict this evolution will dramatically alleviate <b>cognitive burden</b> for sales, operations, and project managers. However, experts emphasize that human-in-the-loop oversight remains an indispensable cornerstone to prevent unintended hallucinations.`,
      highlightedExpressions: [
        {
          phrase: "Paradigm shift",
          type: "Academic Collocation (C2)",
          meaning: "Bước chuyển dịch mô hình căn bản, mang tính cách mạng",
          ieltsTip: "Cụm từ đỉnh cao cho câu mở bài hoặc kết bài IELTS Task 2 về Technology."
        },
        {
          phrase: "Cognitive burden",
          type: "Psychological / Tech Term",
          meaning: "Gánh nặng nhận thức, sự quá tải thông tin của não bộ",
          ieltsTip: "Dùng khi phân tích áp lực làm việc hiện đại trong Speaking Part 3."
        },
        {
          phrase: "Indispensable cornerstone",
          type: "Metaphorical Collocation",
          meaning: "Hòn đá tảng thiết yếu không thể thiếu",
          ieltsTip: "Thay thế cho cụm từ nhàm chán 'very important factor'."
        }
      ]
    },
    vocabList: [
      {
        word: "Paradigm shift",
        ipa: "/ˈpær.ə.daɪm ʃɪft/",
        pos: "noun phrase (C2)",
        meaning: "Bước ngoặt tư duy, sự biến đổi mang tính cách mạng",
        example: "The internet caused an irreversible paradigm shift in global communications.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Autonomous",
        ipa: "/ɔːˈtɒn.ə.məs/",
        pos: "adj (C1)",
        meaning: "Tự hành, tự chủ, không cần người điều khiển liên tục",
        example: "Autonomous vehicles rely on sophisticated LIDAR and computer vision algorithms.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Alleviate",
        ipa: "/əˈliː.vi.eɪt/",
        pos: "verb (Band 7.5+)",
        meaning: "Xoa dịu, giảm bớt đau đớn hoặc gánh nặng",
        example: "Automation tools alleviate the stress of repetitive clerical duties.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Hallucination",
        ipa: "/həˌluː.sɪˈneɪ.ʃən/",
        pos: "noun (AI Context)",
        meaning: "Ảo giác (trong AI: thông tin bịa đặt nghe rất thuyết phục)",
        example: "Engineers implement fact-checking layers to minimize AI hallucinations.",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=500&auto=format&fit=crop&q=60"
      }
    ],
    matchingPairs: [
      { en: "Paradigm shift", vi: "Bước chuyển biến mang tính cách mạng" },
      { en: "Autonomous", vi: "Tự hành, hoạt động độc lập" },
      { en: "Alleviate", vi: "Làm vơi đi gánh nặng áp lực" },
      { en: "Hallucination", vi: "Thông tin bịa đặt của mô hình AI" },
      { en: "Cornerstone", vi: "Hòn đá tảng nền móng thiết yếu" }
    ],
    gapFill: {
      question: "Thuật ngữ nào chỉ sự thay đổi tư duy mang tính bước ngoặt căn bản trong toàn bộ một lĩnh vực?",
      options: ["Gradual tweak", "Minor setback", "Paradigm shift", "Temporary pause"],
      correctIndex: 2,
      explanation: "'Paradigm shift' mô tả sự thay đổi căn bản trong khái niệm và thực tiễn cơ bản của một ngành nghề hay hệ tư tưởng."
    }
  },

  {
    id: "stage-6",
    track: "tech",
    trackName: "Công Nghệ & Tương Lai Số",
    trackIcon: "🚀",
    title: "Smart Cities & Intelligent Transport (ITS)",
    subtitle: "Modern Urban Mobility",
    badge: "Smart Cities • Infrastructure & IoT",
    level: "Band 7.5 - 8.5",
    xpReward: 90,
    youtubeId: "8xM-v0hFw9Y",
    description: "Giải pháp Giao thông thông minh (ITS) và Đô thị số. Chủ đề cực kỳ tâm điểm, gắn liền trực tiếp với các dự án công nghệ lớn và đề thi học thuật Quốc tế.",
    contentType: "article",
    contentData: {
      title: "How Intelligent Transportation Systems (ITS) Are Decongesting Megacities",
      author: "Urban Infrastructure Review",
      readTime: "2.5 phút đọc",
      articleText: `Rapid urbanization across Southeast Asia has exerted severe pressure on metropolitan infrastructure. In response, cities are deploying <b>Intelligent Transportation Systems (ITS)</b> to orchestrate urban mobility.

By synergizing real-time telemetry, automated toll collection (ETC), and AI-powered traffic lights, municipalities can dynamically <b>mitigate congestion</b>. Commuters benefit from reduced travel latency and fewer greenhouse emissions.

Furthermore, seamless data integration across public transit networks empowers authorities to anticipate traffic gridlocks and execute <b>preventative interventions</b> before gridlocks paralyze arterial roads.`,
      highlightedExpressions: [
        {
          phrase: "Mitigate congestion",
          type: "IELTS Collocation (Band 8.0)",
          meaning: "Giảm thiểu ùn tắc giao thông đô thị",
          ieltsTip: "Chuẩn bài mẫu giải pháp cho chủ đề Traffic & City Life trong IELTS Writing."
        },
        {
          phrase: "Arterial roads",
          type: "Urban Planning Term",
          meaning: "Các tuyến đường huyết mạch, trục xương sống đô thị",
          ieltsTip: "Nâng band điểm rõ rệt khi thay thế cho 'main roads' hoặc 'busy streets'."
        },
        {
          phrase: "Real-time telemetry",
          type: "Technical Collocation",
          meaning: "Dữ liệu đo đạc truyền về tức thời từ xa qua cảm biến",
          ieltsTip: "Dùng để bàn luận về công nghệ cảm biến và thành phố thông minh."
        }
      ]
    },
    vocabList: [
      {
        word: "Congestion",
        ipa: "/kənˈdʒes.tʃən/",
        pos: "noun",
        meaning: "Sự ùn tắc, tắc nghẽn (đặc biệt là giao thông)",
        example: "Smart traffic algorithms dynamically alleviate rush-hour congestion.",
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Metropolitan",
        ipa: "/ˌmet.rəˈpɒl.ɪ.tən/",
        pos: "adj",
        meaning: "Thuộc về đô thị lớn, vùng đô thị trung tâm",
        example: "Metropolitan residents increasingly demand efficient public transit options.",
        image: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Telemetry",
        ipa: "/təˈlem.ə.tri/",
        pos: "noun",
        meaning: "Hệ thống đo đạc và truyền dữ liệu tự động từ xa",
        example: "Toll gantries utilize radar telemetry to track moving vehicles accurately.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60"
      },
      {
        word: "Intervention",
        ipa: "/ˌɪn.təˈven.ʃən/",
        pos: "noun (Band 7.5+)",
        meaning: "Sự can thiệp kịp thời để giải quyết vấn đề",
        example: "Early traffic intervention prevented gridlocks on the arterial expressway.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&auto=format&fit=crop&q=60"
      }
    ],
    matchingPairs: [
      { en: "Congestion", vi: "Tình trạng ùn tắc giao thông" },
      { en: "Metropolitan", vi: "Thuộc vùng đô thị lớn" },
      { en: "Telemetry", vi: "Đo đạc truyền dữ liệu từ xa" },
      { en: "Intervention", vi: "Sự can thiệp kịp thời" },
      { en: "Arterial road", vi: "Tuyến đường huyết mạch" }
    ],
    gapFill: {
      question: "Thuật ngữ nào dùng để chỉ các tuyến đường huyết mạch, quan trọng nhất của mạng lưới giao thông thành phố?",
      options: ["Side alleys", "Arterial roads", "Pedestrian walkways", "Dead ends"],
      correctIndex: 1,
      explanation: "'Arterial roads' (đường huyết mạch - lấy từ chữ 'artery' là động mạch) chỉ các trục giao thông chính yếu vận chuyển lưu lượng xe lớn."
    }
  }
];

// Dữ liệu tin tức cập nhật tự động (Mô phỏng nguồn tin RSS công nghệ & đời sống)
const LIVE_TRENDS_FEED = [
  {
    category: "Công Nghệ & AI",
    tag: "Hot Update",
    title: "Mô hình AI mới đạt điểm kỷ lục trong bài kiểm tra tư duy phức tạp",
    snippet: "Các nhà khoa học vừa công bố bước đột phá giúp hệ thống AI tự suy luận nhiều tầng mà không tốn nhiều năng lượng.",
    keyVocab: ["Breakthrough (Đột phá)", "Multistep reasoning (Tư duy nhiều bước)"]
  },
  {
    category: "Âm Nhạc US-UK",
    tag: "Trending Song",
    title: "Ca khúc mới thống trị bảng xếp hạng Billboard Hot 100 tuần này",
    snippet: "Sự kết hợp bất ngờ giữa pop thập niên 80 và âm hưởng hiện đại tiếp tục tạo nên cơn sốt streaming toàn cầu.",
    keyVocab: ["Chart-topping (Đứng đầu BXH)", "Viral sensation (Hiện tượng mạng)"]
  },
  {
    category: "Thời Trang Quốc Tế",
    tag: "Street Style",
    title: "Gam màu đất và phong cách tối giản trở thành tâm điểm tuần lễ thời trang",
    snippet: "Các nhà mốt hàng đầu chuyển hướng sang các chất liệu tái chế thân thiện và phong cách thanh lịch vượt thời gian.",
    keyVocab: ["Earthy palette (Bảng màu đất)", "Timeless elegance (Thanh lịch bất biến)"]
  }
];
