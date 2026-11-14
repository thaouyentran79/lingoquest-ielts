/**
 * IELTS BEE 🐝 - KHO BẢN TIN BẮT TREND & BÀI ĐỌC CHUẨN IELTS READING
 * 12 bài đọc chuyên sâu (250-350 từ/bài) bao quát Thời trang Quốc tế, Công nghệ Thế giới & Công nghệ Việt Nam.
 * Mỗi bài báo tích hợp:
 *  - Từ vựng học thuật Band 6.5 - 8.5 bôi đậm có tra nghĩa tức thì & phát âm.
 *  - 3 câu hỏi Đọc hiểu chuẩn format IELTS (True/False/Not Given hoặc Trắc nghiệm) kèm đáp án & giải thích chi tiết.
 *  - Hệ thống nguồn RSS feeds công khai tự động fetch tin mới mỗi ngày.
 */

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

const DEFAULT_NEWS_ARTICLES = [
  // ========================================================
  // NHÓM 1: THỜI TRANG QUỐC TẾ (FASHION & LIFESTYLE) - 4 BÀI
  // ========================================================
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
    content: `The contemporary fashion landscape has recently embraced a profound paradigm shift towards quiet luxury—an aesthetic philosophy frequently identified as the 'Old Money' trend. Rather than parading ostentatious brand monograms or garish designer prints, discerning connoisseurs increasingly gravitate towards bespoke tailoring, neutral color palettes, and sumptuous cashmere garments.

This aesthetic celebration champions understated elegance, proving that true social status and sophistication whisper rather than scream. Garments are crafted with immaculate attention to detail, boasting timeless silhouettes that effortlessly transcend ephemeral micro-trends propagated by fast fashion conglomerates.

Furthermore, environmental sociologists emphasize that sustainable craftsmanship is becoming an indispensable cornerstone of ethical consumerism in modern society. When affluent buyers purchase enduring, high-quality attire intended to last decades rather than weeks, they actively counteract the environmental devastation caused by rampant textile waste. Consequently, quiet luxury represents far more than an elitist stylistic preference; it heralds a conscientious return to mindful consumption, garment longevity, and authentic artisanal value.`,
    readingQuiz: [
      {
        question: "Theo đoạn văn 1, đặc điểm chính của xu hướng 'Quiet Luxury' là gì?",
        options: [
          "Phô trương logo và họa tiết rực rỡ của các nhà mốt nổi tiếng",
          "Ưu tiên đồ may đo thủ công, gam màu trung tính và chất liệu thượng hạng",
          "Săn đón các trào lưu thời trang nhanh ngắn hạn trên mạng xã hội",
          "Mua sắm số lượng lớn trang phục giá rẻ mỗi mùa"
        ],
        correct: 1,
        explanation: "Đoạn 1 nêu rõ: 'discerning connoisseurs increasingly gravitate towards bespoke tailoring, neutral color palettes, and sumptuous cashmere garments' thay vì khoe mẽ logo."
      },
      {
        question: "Từ 'ephemeral' trong đoạn 2 đồng nghĩa nhất với từ nào sau đây?",
        options: ["Short-lived (ngắn ngủi, chóng tàn)", "Permanent (vĩnh cửu)", "Expensive (đắt đỏ)", "Traditional (truyền thống)"],
        correct: 0,
        explanation: "'Ephemeral' nghĩa là phù du, chóng tàn, đối lập với 'timeless silhouettes' và đồng nghĩa với 'short-lived'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'Quiet luxury helps reduce the environmental footprint caused by textile waste.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 0,
        explanation: "TRUE: Đoạn 3 khẳng định người mua đồ chất lượng bền lâu 'actively counteract the environmental devastation caused by rampant textile waste'."
      }
    ]
  },

  {
    id: "news-fashion-2",
    category: "fashion",
    categoryName: "Thời Trang Quốc Tế",
    categoryIcon: "👗",
    title: "Circular Fashion: Tái Sinh Rác Thải Dệt May Thành Thời Trang Cao Cấp",
    author: "Global Eco-Textile Review",
    published: "Hôm qua",
    coverImg: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=60",
    summary: "Mô hình kinh tế tuần hoàn biến vải vụn, chai nhựa tái sinh và sợi sinh học thành những bộ sưu tập couture đẳng cấp trên sàn diễn Paris.",
    content: `For decades, the global apparel industry operated on a strictly linear economic framework colloquially summarized as 'take, make, dispose'. This obsolete approach generated colossal landfills brimming with non-biodegradable synthetic polymers. Today, however, the concept of circular fashion has emerged as a revolutionary antidote to industrial pollution.

Circular fashion operates on closed-loop principles where every component is explicitly engineered for recyclability, durability, and biodegradation. Cutting-edge bio-laboratories now collaborate with visionary European fashion houses to synthesize high-performance textiles from agricultural waste, ocean plastics, and post-consumer regenerated cotton fibers.

Importantly, luxury couture brands have demonstrated that sustainability does not demand stylistic compromise. Avant-garde designers at Paris Fashion Week have showcased exquisite evening gowns constructed entirely from bio-fabricated fungal mycelium leather and recycled silk yarn. Consumer behavior research reveals that Gen Z shoppers demonstrate an unprecedented willingness to patronize brands demonstrating authentic environmental stewardship. Ultimately, closing the loop within fashion production is no longer a peripheral marketing gimmick, but an existential imperative for the entire retail ecosystem.`,
    readingQuiz: [
      {
        question: "Mô hình thời trang truyền thống trước đây vận hành theo cơ chế nào?",
        options: [
          "Mô hình tuần hoàn khép kín tự tái chế hoàn toàn",
          "Mô hình tuyến tính một chiều: khai thác - sản xuất - vứt bỏ",
          "Chỉ sử dụng nguyên liệu da nấm sinh học",
          "Từ chối hoàn toàn các loại sợi nhân tạo tổng hợp"
        ],
        correct: 1,
        explanation: "Đoạn 1 nêu rõ: 'linear economic framework colloquially summarized as take, make, dispose'."
      },
      {
        question: "Vật liệu đột phá nào đã được các nhà thiết kế tại Paris Fashion Week ứng dụng để may đầm dạ hội?",
        options: [
          "Kim loại quý mạ vàng nguyên chất",
          "Da nhân tạo làm từ hệ sợi nấm sinh học (mycelium) và tơ lụa tái chế",
          "Nhựa công nghiệp hóa thạch nguyên chất",
          "Vải lanh tự nhiên thô sơ chưa qua xử lý"
        ],
        correct: 1,
        explanation: "Đoạn 3 chỉ ra: 'gowns constructed entirely from bio-fabricated fungal mycelium leather and recycled silk yarn'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'Most Gen Z consumers prefer cheaper clothes even if they harm the environment.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 1,
        explanation: "FALSE: Đoạn 3 khẳng định người trẻ Gen Z sẵn lòng ủng hộ các thương hiệu có trách nhiệm bảo vệ môi trường ('willingness to patronize brands demonstrating authentic environmental stewardship')."
      }
    ]
  },

  {
    id: "news-fashion-3",
    category: "fashion",
    categoryName: "Thời Trang Quốc Tế",
    categoryIcon: "👗",
    title: "Tủ Đồ Con Nhộng (Capsule Wardrobe): Nghệ Thuật Tối Giản Đầy Khí Chất",
    author: "Minimalist Life Magazine",
    published: "2 ngày trước",
    coverImg: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=60",
    summary: "Chỉ với 25 - 30 món đồ thiết yếu được chọn lọc kỹ lưỡng, bạn có thể biến hóa hàng trăm bộ trang phục thanh lịch cho mọi bối cảnh.",
    content: `The modern urban professional often experiences decision fatigue every morning when confronting a wardrobe overflowing with impulsive, disconnected purchases. In response to this psychological friction, the capsule wardrobe paradigm has gained immense traction worldwide.

Originally coined by London boutique proprietor Susie Faux in the 1970s, a capsule wardrobe entails curating an intentional, highly versatile collection comprising roughly 25 to 35 interchangeable staple pieces. These include well-structured blazers, crisp white poplin shirts, tailored dark trousers, versatile trench coats, and minimalist leather footwear.

By prioritizing modularity and chromatic harmony, individuals eliminate stylistic dilemmas while maximizing aesthetic impact. Economic analyses reveal that adopting a capsule wardrobe significantly lowers personal expenditure over five-year cycles, as consumers cease wasting funds on fleeting micro-fashions. Psychologically, shedding clutter fosters immense tranquility and mental clarity. Therefore, building a capsule wardrobe is not an exercise in deprivation, but rather a deliberate celebration of aesthetic mindfulness and personal discernment.`,
    readingQuiz: [
      {
        question: "Mục đích ban đầu của việc xây dựng 'Capsule Wardrobe' là gì?",
        options: [
          "Tích trữ càng nhiều quần áo đắt tiền càng tốt",
          "Giải quyết tình trạng quá tải quyết định và lộn xộn trang phục mỗi sáng",
          "Loại bỏ hoàn toàn áo vest và giày da công sở",
          "Để tham gia vào các cuộc thi thời trang quốc tế"
        ],
        correct: 1,
        explanation: "Đoạn 1 nêu rõ: 'In response to this psychological friction [decision fatigue when confronting a wardrobe overflowing...]'."
      },
      {
        question: "Số lượng món đồ điển hình trong một tủ đồ con nhộng là bao nhiêu?",
        options: ["Khoảng 5 đến 10 món", "Khoảng 25 đến 35 món đồ chủ lực", "Hơn 100 món đa dạng", "Không giới hạn số lượng"],
        correct: 1,
        explanation: "Đoạn 2 chỉ ra: 'collection comprising roughly 25 to 35 interchangeable staple pieces'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'A capsule wardrobe can save consumers money over a five-year period.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 0,
        explanation: "TRUE: Đoạn 3 khẳng định 'significantly lowers personal expenditure over five-year cycles'."
      }
    ]
  },

  {
    id: "news-fashion-4",
    category: "fashion",
    categoryName: "Thời Trang Quốc Tế",
    categoryIcon: "👗",
    title: "Digital Haute Couture: Khi Trí Tuệ Nhân Tạo Lên Sàn Diễn",
    author: "Fashion-Tech Quarterly",
    published: "3 ngày trước",
    coverImg: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=60",
    summary: "Các thuật toán Generative AI và công nghệ 3D rendering đang giúp các nhà thiết kế tạo ra những bộ trang phục siêu thực chưa từng có trong lịch sử.",
    content: `The intersection of artificial intelligence and fashion design has birthed a dazzling new creative frontier known as digital haute couture. Armed with generative diffusion algorithms and parametric rendering engines, visionary couturiers can now synthesize hyper-realistic fabrics that defy terrestrial gravity and physical material constraints.

Rather than waiting weeks for manual fabric sampling and physical alterations, virtual 3D prototyping enables fashion creators to evaluate garment draping, structural tension, and movement dynamics instantaneously on digital avatars. This digital workflow eradicates up to 80% of traditional textile prototyping waste.

Moreover, major luxury conglomerates are staging hybrid phygital runway exhibitions where physical models walk alongside holographic garments rendered in real time. Critics who initially dismissed virtual fashion as mere technological indulgence now concede that AI empowers human designers to explore unprecedented conceptual frontiers. By democratizing avant-garde aesthetics and optimizing sustainable production, digital fashion is fundamentally redefining creative expression in the twenty-first century.`,
    readingQuiz: [
      {
        question: "Công nghệ 3D và AI giúp các nhà mốt cắt giảm được điều gì đáng kể nhất?",
        options: [
          "Cắt giảm 100% nhân sự thiết kế thời trang",
          "Giảm tới 80% lượng vải rác thải từ khâu làm mẫu thử nghiệm vật lý",
          "Loại bỏ hoàn toàn các buổi trình diễn catwalk truyền thống",
          "Giảm giá thành sản phẩm couture xuống mức bình dân"
        ],
        correct: 1,
        explanation: "Đoạn 2 nêu rõ: 'virtual 3D prototyping enables... eradicates up to 80% of traditional textile prototyping waste'."
      },
      {
        question: "Thuật ngữ 'phygital' trong đoạn 3 ám chỉ điều gì?",
        options: [
          "Chỉ dành riêng cho trò chơi điện tử trực tuyến",
          "Sự kết hợp đồng thời giữa yếu tố vật lý thực tế (Physical) và kỹ thuật số (Digital)",
          "Trang phục được may hoàn toàn từ kim loại",
          "Phương thức thanh toán bằng tiền ảo"
        ],
        correct: 1,
        explanation: "Đoạn 3 giải thích 'hybrid phygital runway exhibitions where physical models walk alongside holographic garments'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'Most traditional fashion critics still completely reject AI in haute couture.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 1,
        explanation: "FALSE: Đoạn 3 chỉ ra những người trước đây hoài nghi giờ đã thừa nhận giá trị của AI ('now concede that AI empowers human designers to explore unprecedented conceptual frontiers')."
      }
    ]
  },

  // ========================================================
  // NHÓM 2: CÔNG NGHỆ THẾ GIỚI (WORLD TECH & AI) - 4 BÀI
  // ========================================================
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
    content: `Artificial intelligence has decisively transcended the era of simplistic question-and-answer chatbots. Today, enterprise technology leaders are aggressively deploying autonomous AI agents capable of multistep reasoning, persistent contextual memory, and autonomous API execution.

Unlike antecedent language models that simply waited passively for human prompts, modern agentic systems decompose overarching operational goals into granular, sequential tasks. When instructed to conduct market research or audit financial spreadsheets, the agent independently reads internal databases, invokes third-party software, verifies empirical accuracy, and compiles comprehensive visual reports.

Consequently, enterprise productivity metrics have witnessed unprecedented surges. By delegating mundane bureaucratic routines to autonomous digital agents, corporate workforces can pivot entirely towards strategic negotiations, creative innovation, and empathetic client engagement. Nonetheless, senior cybersecurity architects caution that implementing rigorous algorithmic guardrails and continuous oversight remains imperative to prevent unauthorized operations and safeguard enterprise proprietary data.`,
    readingQuiz: [
      {
        question: "Điểm khác biệt cốt lõi giữa AI Agent tự hành và Chatbot truyền thống là gì?",
        options: [
          "Chatbot trả lời nhanh hơn AI Agent",
          "AI Agent có khả năng tự chia nhỏ mục tiêu, suy luận nhiều bước và chủ động gọi phần mềm để thực thi công việc",
          "Chatbot không cần mạng internet để vận hành",
          "AI Agent chỉ làm được các phép tính số học đơn giản"
        ],
        correct: 1,
        explanation: "Đoạn 2 nêu rõ: 'Unlike antecedent language models that simply waited passively... agentic systems decompose overarching operational goals into granular, sequential tasks... invokes third-party software'."
      },
      {
        question: "Lợi ích lớn nhất mà doanh nghiệp nhận được khi triển khai AI Agent là gì?",
        options: [
          "Giải tán toàn bộ bộ máy nhân sự công ty",
          "Giải phóng nhân viên khỏi các việc giấy tờ nhàm chán để tập trung vào chiến lược và sáng tạo",
          "Không cần chi trả tiền điện và phần cứng máy chủ",
          "Ngăn chặn hoàn toàn mọi rủi ro an ninh mạng mà không cần giám sát"
        ],
        correct: 1,
        explanation: "Đoạn 3 nêu: 'By delegating mundane bureaucratic routines... corporate workforces can pivot entirely towards strategic negotiations, creative innovation'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'Cybersecurity experts advise against having any human oversight over AI agents.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 1,
        explanation: "FALSE: Đoạn cuối khẳng định 'rigorous algorithmic guardrails and continuous oversight remains imperative' (sự giám sát liên tục là bắt buộc)."
      }
    ]
  },

  {
    id: "news-tech-world-2",
    category: "tech-world",
    categoryName: "Công Nghệ Thế Giới",
    categoryIcon: "🌐",
    title: "Điện Toán Lượng Tử (Quantum Computing): Ranh Giới Mới Của Khoa Học",
    author: "Frontiers in Physics",
    published: "1 ngày trước",
    coverImg: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
    summary: "Các bộ vi xử lý lượng tử hàng nghìn Qubit đang giải quyết những bài toán phức tạp mà siêu máy tính cổ điển phải mất hàng triệu năm.",
    content: `The theoretical boundaries of digital computational power are undergoing radical redefinition through quantum computing. Classical computers rely fundamentally on binary bits that exist strictly in states of either 0 or 1. In stark contrast, quantum processors leverage the quantum mechanical principles of superposition and entanglement, utilizing quantum bits (qubits) that can embody multiple states simultaneously.

This fundamental architectural departure enables quantum algorithms to tackle intractable computational puzzles at exponential speeds. Molecular researchers are already utilizing quantum simulators to map complex protein folding mechanisms, potentially accelerating pharmaceutical drug discovery from decades to mere months. Furthermore, logistics giants leverage quantum annealing to optimize global freight routes with zero computational latency.

However, the impending arrival of commercially viable quantum supremacy presents formidable dilemmas for international cryptography. Quantum computers could theoretically unravel widely deployed RSA encryption algorithms within seconds. To preempt catastrophic data breaches, cybersecurity consortia worldwide are currently racing to standardize post-quantum cryptographic standards to fortify global digital transactions.`,
    readingQuiz: [
      {
        question: "Nguyên lý vật lý nào giúp Qubit vượt trội hơn Bit cổ điển?",
        options: [
          "Nguyên lý siêu dẫn nhiệt độ phòng và từ tính",
          "Nguyên lý chồng chập (superposition) và liên đới lượng tử (entanglement)",
          "Tốc độ ánh sáng truyền trong môi trường chân không",
          "Cấu trúc bán dẫn silicon truyền thống"
        ],
        correct: 1,
        explanation: "Đoạn 1 nêu: 'quantum processors leverage the quantum mechanical principles of superposition and entanglement'."
      },
      {
        question: "Lĩnh vực y dược hưởng lợi gì từ công nghệ mô phỏng lượng tử?",
        options: [
          "Thay thế hoàn toàn bác sĩ phẫu thuật",
          "Rút ngắn thời gian nghiên cứu cấu trúc protein và phát triển thuốc từ hàng thập kỷ xuống chỉ vài tháng",
          "Sản xuất vắc xin nhân tạo miễn phí cho toàn dân",
          "Xóa bỏ hoàn toàn nhu cầu thử nghiệm lâm sàng"
        ],
        correct: 1,
        explanation: "Đoạn 2 nêu rõ: 'potentially accelerating pharmaceutical drug discovery from decades to mere months'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'Quantum computing poses no risk to existing digital encryption systems.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 1,
        explanation: "FALSE: Đoạn 3 cảnh báo 'Quantum computers could theoretically unravel widely deployed RSA encryption algorithms within seconds'."
      }
    ]
  },

  {
    id: "news-tech-world-3",
    category: "tech-world",
    categoryName: "Công Nghệ Thế Giới",
    categoryIcon: "🌐",
    title: "Lưới Điện Thông Minh (Smart Microgrids): Khai Phá Năng Lượng Xanh",
    author: "Clean Energy International",
    published: "2 ngày trước",
    coverImg: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60",
    summary: "Hệ thống pin lưu trữ thế hệ mới kết hợp thuật toán AI cân bằng phụ tải giúp các siêu đô thị vận hành 100% năng lượng tái tạo ổn định.",
    content: `As metropolitan centers strive aggressively toward net-zero carbon emissions, traditional centralized electrical grids are increasingly proving insufficient. Because solar radiation and wind gusts fluctuate unpredictably, feeding massive volumes of renewable power into brittle legacy grids frequently induces catastrophic blackouts.

To resolve this infrastructural vulnerability, energy engineers are pioneering autonomous smart microgrids. A smart microgrid functions as a localized, self-sufficient energy ecosystem that seamlessly harmonizes rooftop solar panels, commercial battery energy storage systems (BESS), and electric vehicle charging hubs.

Powered by predictive machine learning algorithms, the microgrid continuously forecasts local weather conditions and household energy consumption patterns. During periods of peak solar generation, surplus energy is automatically channeled into utility-scale storage or redirected to industrial plants. During peak evening demand, the microgrid smoothly discharges stored reserves without drawing power from polluting fossil fuel generators. Experts project that decentralized microgrid networks will serve as the indispensable backbone of resilient, decarbonized smart cities.`,
    readingQuiz: [
      {
        question: "Nhược điểm lớn nhất của các nguồn năng lượng tái tạo như mặt trời và gió đối với lưới điện truyền thống là gì?",
        options: [
          "Chi phí sản xuất quá cao không ai mua được",
          "Tính chất biến thiên bất thường có thể gây quá tải hoặc sập lưới điện cũ",
          "Sản sinh ra quá nhiều khí thải nhà kính",
          "Chỉ hoạt động được vào mùa đông"
        ],
        correct: 1,
        explanation: "Đoạn 1 chỉ ra: 'Because solar radiation and wind gusts fluctuate unpredictably... frequently induces catastrophic blackouts'."
      },
      {
        question: "Bộ phận nào đóng vai trò dự trữ năng lượng dư thừa trong mô hình lưới điện vi mô thông minh?",
        options: [
          "Các máy phát điện chạy bằng dầu diesel cổ điển",
          "Hệ thống pin tích trữ năng lượng quy mô công nghiệp (BESS)",
          "Các tuabin hơi nước đốt than",
          "Cột điện cao thế truyền tải liên tỉnh"
        ],
        correct: 1,
        explanation: "Đoạn 2 & 3 nói đến: 'commercial battery energy storage systems (BESS)'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'Smart microgrids use machine learning to predict local power consumption.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 0,
        explanation: "TRUE: Đoạn 3 nêu: 'Powered by predictive machine learning algorithms, the microgrid continuously forecasts... energy consumption patterns'."
      }
    ]
  },

  {
    id: "news-tech-world-4",
    category: "tech-world",
    categoryName: "Công Nghệ Thế Giới",
    categoryIcon: "🌐",
    title: "Giao Diện Não - Máy Tính (BCI): Cầu Nối Giữa Y Học & Tương Lai",
    author: "Neuroscience Advances",
    published: "4 ngày trước",
    coverImg: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop&q=60",
    summary: "Vi mạch cấy ghép vi mô đọc tín hiệu nơ-ron thần kinh giúp bệnh nhân liệt tứ chi điều khiển máy tính và phục hồi khả năng giao tiếp.",
    content: `The frontier of neural engineering achieved a monumental milestone with recent clinical trials of implantable brain-computer interfaces (BCIs). By placing biocompatible microelectrode arrays directly adjacent to the motor cortex, scientists can intercept synaptic electrical impulses that encode a human being's motor intent.

Advanced neural decoding algorithms rapidly interpret these complex firing patterns, translating biological thoughts into digital cursor movements, robotic limb actuations, or synthetic vocal speech. For individuals experiencing severe paralysis caused by spinal cord trauma or amyotrophic lateral sclerosis (ALS), BCIs offer a miraculous gateway to regain functional autonomy.

Patients equipped with experimental neural implants have successfully browsed the internet, drafted electronic correspondence, and operated smart household appliances solely using cognitive intentionality. While ethical committees deliberate meticulously over neural privacy and cognitive consent protocols, clinical neurosurgeons assert that BCIs will soon revolutionize restorative medicine and establish unprecedented human-machine symbiosis.`,
    readingQuiz: [
      {
        question: "Thiết bị BCI ghi nhận tín hiệu nào từ cơ thể người để chuyển đổi thành lệnh điều khiển?",
        options: [
          "Nhịp đập của tim và áp lực mạch máu",
          "Xung điện synap truyền giữa các tế bào nơ-ron tại vỏ não vận động",
          "Sóng nhiệt phát ra từ lòng bàn tay",
          "Âm thanh từ thanh quản người nói"
        ],
        correct: 1,
        explanation: "Đoạn 1 nêu rõ: 'intercept synaptic electrical impulses that encode a human being's motor intent'."
      },
      {
        question: "Bệnh nhân mắc chứng bệnh nào được hưởng lợi trực tiếp từ công nghệ BCI?",
        options: [
          "Bệnh nhân cận thị và loạn thị nhẹ",
          "Bệnh nhân bại liệt nặng do chấn thương tủy sống hoặc xơ cứng teo cơ (ALS)",
          "Bệnh nhân bị gãy xương bàn chân thông thường",
          "Người bị mất ngủ kinh niên"
        ],
        correct: 1,
        explanation: "Đoạn 2 nêu: 'For individuals experiencing severe paralysis caused by spinal cord trauma or amyotrophic lateral sclerosis (ALS)'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'Patients with neural implants can already control robotic limbs using thoughts.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 0,
        explanation: "TRUE: Đoạn 2 khẳng định giải mã tín hiệu não thành 'robotic limb actuations' (chuyển động của chi robot)."
      }
    ]
  },

  // ========================================================
  // NHÓM 3: CÔNG NGHỆ VIỆT NAM (VIETNAM TECH & INNOVATION) - 4 BÀI
  // ========================================================
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
    content: `Rapid metropolitan urbanization across Ho Chi Minh City and Hanoi has exerted unprecedented strain on arterial transportation corridors. To preempt catastrophic gridlock, municipal authorities and leading Vietnamese telecommunications enterprises (such as ELCOM and Viettel) are actively constructing nationwide Intelligent Transportation Systems (ITS).

At the heart of this digital transformation is the complete operationalization of non-stop Electronic Toll Collection (ETC) networks, automated weigh-in-motion sensors, and high-definition AI optical cameras. Rather than decelerating at physical toll booths, vehicles equipped with RFID tags glide across expressways at full operational speeds, curbing travel latency by over 70%.

Simultaneously, centralized traffic command headquarters aggregate real-time telemetry from thousands of intersection sensors. Machine learning algorithms dynamically re-time adaptive traffic signals to optimize vehicular throughput during rush hour peaks. Municipal transit reports confirm that modern ITS deployments have significantly alleviated bottlenecks, curtailed vehicular carbon emissions, and established a resilient foundation for Vietnam's thriving smart city ecosystem.`,
    readingQuiz: [
      {
        question: "Lợi ích nổi bật nhất của hệ thống thu phí không dừng ETC trên các tuyến cao tốc là gì?",
        options: [
          "Bắt buộc tài xế phải dừng lại trả tiền mặt",
          "Xe lưu thông liên tục với tốc độ cao, giảm thời gian chờ đợi hơn 70%",
          "Cấm tất cả các phương tiện xe tải nặng đi vào cao tốc",
          "Chỉ hoạt động vào ban ngày"
        ],
        correct: 1,
        explanation: "Đoạn 2 nêu: 'glide across expressways at full operational speeds, curbing travel latency by over 70%'."
      },
      {
        question: "Trung tâm điều hành giao thông thông minh sử dụng công nghệ gì để điều tiết đèn tín hiệu giờ cao điểm?",
        options: [
          "Cảnh sát bấm nút thủ công từng nút giao",
          "Thuật toán máy học tự động điều chỉnh thời lượng đèn dựa trên dữ liệu cảm biến thời gian thực",
          "Tắt toàn bộ đèn giao thông để xe tự di chuyển",
          "Dùng đồng hồ cơ học hẹn giờ cố định"
        ],
        correct: 1,
        explanation: "Đoạn 3 chỉ ra: 'Machine learning algorithms dynamically re-time adaptive traffic signals to optimize vehicular throughput'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'ITS deployments in Vietnam have increased carbon emissions from vehicles.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 1,
        explanation: "FALSE: Đoạn 3 khẳng định ITS giúp giảm khí thải ('curtailed vehicular carbon emissions')."
      }
    ]
  },

  {
    id: "news-tech-vn-2",
    category: "tech-vn",
    categoryName: "Công Nghệ Việt Nam",
    categoryIcon: "🇻🇳",
    title: "Chiến Lược Bán Dẫn Quốc Gia: Việt Nam Định Vị Trung Tâm Công Nghệ Cao",
    author: "Vietnam Tech Economy",
    published: "1 ngày trước",
    coverImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    summary: "Với làn sóng đầu tư hàng tỷ USD từ các tập đoàn toàn cầu, Việt Nam đang bứt phá mạnh mẽ trong chuỗi cung ứng vi mạch và đóng gói bán dẫn.",
    content: `Vietnam is rapidly solidifying its strategic stature as a critical linchpin within the global semiconductor supply chain. Recognizing that microchips constitute the indispensable bedrock of modern digital economies, the Vietnamese government has ratified a comprehensive National Semiconductor Strategy aiming to cultivate 50,000 highly qualified semiconductor engineers by 2030.

Multinational semiconductor giants—including Intel, Amkor, Hana Micron, and NVIDIA—have poured billions of dollars into sprawling packaging, testing, and IC design facilities across Da Nang, Bac Ninh, and Saigon Hi-Tech Park. Concurrently, domestic tech titans are establishing state-of-the-art semiconductor design laboratories to fabricate custom integrated circuits for IoT devices and telecommunications equipment.

Academic institutions across Hanoi and Ho Chi Minh City have inaugurated specialized semiconductor curricula in partnership with leading global universities. By synergizing geopolitical stability, competitive operational expenditures, and an exceptionally youthful, mathematically adept workforce, Vietnam is uniquely poised to ascend from low-tier assembly toward high-value architectural chip design.`,
    readingQuiz: [
      {
        question: "Mục tiêu chiến lược nhân sự ngành bán dẫn của Việt Nam đến năm 2030 là gì?",
        options: [
          "Đào tạo 10.000 công nhân lắp ráp cơ bản",
          "Đào tạo 50.000 kỹ sư bán dẫn có trình độ chuyên môn cao",
          "Nhập khẩu 100% kỹ sư nước ngoài về vận hành nhà máy",
          "Không đặt mục tiêu cụ thể nào"
        ],
        correct: 1,
        explanation: "Đoạn 1 nêu rõ mục tiêu: 'cultivate 50,000 highly qualified semiconductor engineers by 2030'."
      },
      {
        question: "Những thành phố/khu công nghệ cao nào tại Việt Nam đang thu hút các tập đoàn bán dẫn lớn?",
        options: [
          "Chỉ duy nhất ở vùng nông thôn đồng bằng sông Cửu Long",
          "Đà Nẵng, Bắc Ninh và Khu Công nghệ cao TP.HCM (SHTP)",
          "Chỉ tập trung tại các đảo ngoài khơi",
          "Chỉ có các văn phòng đại diện ở nước ngoài"
        ],
        correct: 1,
        explanation: "Đoạn 2 nêu tên: 'Da Nang, Bac Ninh, and Saigon Hi-Tech Park'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'Vietnam is transitioning from low-tier assembly to high-value chip design.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 0,
        explanation: "TRUE: Đoạn cuối khẳng định 'uniquely poised to ascend from low-tier assembly toward high-value architectural chip design'."
      }
    ]
  },

  {
    id: "news-tech-vn-3",
    category: "tech-vn",
    categoryName: "Công Nghệ Việt Nam",
    categoryIcon: "🇻🇳",
    title: "Cách Mạng Fintech & Kinh Tế Không Tiền Mặt Bùng Nổ Tại Việt Nam",
    author: "Finance Asia Vietnam",
    published: "2 ngày trước",
    coverImg: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=60",
    summary: "Mã QR chuẩn quốc gia VietQR, thanh toán không chạm và ví điện tử số hóa đang thúc đẩy thanh toán không dùng tiền mặt đạt kỷ lục 85% tại các thành phố lớn.",
    content: `Vietnam is currently witnessing one of the fastest financial technology transformations in Southeast Asia. The ubiquitous proliferation of standardized VietQR codes, interoperable digital wallets, and mobile banking applications has orchestrated a near-cashless environment across urban metropolises.

From upscale department stores to unassuming street-food vendors in vibrant alleys, consumers seamlessly execute peer-to-peer financial transfers with a simple smartphone scan. State Bank of Vietnam statistics indicate that digital payment transactions have surged by triple-digit percentages annually, with digital payment penetration exceeding 85% among urban demographics.

This financial inclusion boom has unlocked tremendous capital efficiency for micro-entrepreneurs. Small merchants who historically lacked collateral to secure traditional banking credit can now substantiate their creditworthiness through verifiable digital transaction histories. Bolstered by advanced biometric facial authentication and AI anti-fraud protocols, Vietnam's digital banking ecosystem is providing a stellar blueprint for emergent economies globally.`,
    readingQuiz: [
      {
        question: "Yếu tố nào giúp người dân Việt Nam thanh toán thuận tiện từ cửa hàng lớn đến quầy hàng vỉa hè?",
        options: [
          "Việc sử dụng séc ngân hàng bằng giấy",
          "Mã VietQR chuẩn hóa và các ứng dụng ví điện tử liên thông",
          "Máy quẹt thẻ tín dụng cồng kềnh dùng dây điện thoại",
          "Đổi sang giao dịch hoàn toàn bằng vàng miếng"
        ],
        correct: 1,
        explanation: "Đoạn 1 nêu: 'ubiquitous proliferation of standardized VietQR codes, interoperable digital wallets, and mobile banking applications'."
      },
      {
        question: "Lợi ích lớn mà các tiểu thương nhỏ lẻ nhận được từ việc sử dụng thanh toán số là gì?",
        options: [
          "Được nhà nước miễn trừ 100% mọi loại chi phí sinh hoạt",
          "Có lịch sử giao dịch minh bạch để chứng minh năng lực tín dụng và tiếp cận vốn vay ngân hàng",
          "Không bao giờ bị hỏng điện thoại",
          "Được ngân hàng tặng tiền miễn phí hàng tháng"
        ],
        correct: 1,
        explanation: "Đoạn 3 nêu: 'Small merchants... can now substantiate their creditworthiness through verifiable digital transaction histories'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'Cashless payment penetration has dropped in Vietnamese urban areas recently.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 1,
        explanation: "FALSE: Ngược lại, tỷ lệ thâm nhập thanh toán số đã vượt mốc 85% ('penetration exceeding 85% among urban demographics')."
      }
    ]
  },

  {
    id: "news-tech-vn-4",
    category: "tech-vn",
    categoryName: "Công Nghệ Việt Nam",
    categoryIcon: "🇻🇳",
    title: "Nông Nghiệp Công Nghệ Cao (Agritech) Thích Ứng Biến Đổi Khí Hậu Tại Miền Tây",
    author: "Mekong Delta Agricultural Journal",
    published: "3 ngày trước",
    coverImg: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&auto=format&fit=crop&q=60",
    summary: "Cảm biến đo độ mặn IoT, máy bay không người lái gieo hạt và hệ thống tưới tiêu thông minh giúp nông dân Đồng bằng sông Cửu Long bội thu lúa gạo chất lượng cao.",
    content: `The Mekong Delta—historically celebrated as Vietnam's primary rice bowl—has confronted severe climate emergencies, including upstream damming, prolonged droughts, and catastrophic saltwater intrusion during dry seasons. In response, progressive agricultural cooperatives are embracing agritech innovations to safeguard agrarian productivity.

Farmers now install autonomous IoT telemetry probes across irrigation waterways to continuously monitor soil salinity, temperature, and nitrogen levels. Data is wirelessly transmitted to farmers' smartphones in real time, automatically triggering automated sluice gates to shut before corrosive saline surges contaminate fertile paddy fields.

Furthermore, autonomous agricultural drones conduct precision aerial spraying and seeded crop sowing, curtailing chemical fertilizer usage by 35% while slashing labor expenditures. By adopting low-carbon, high-yield rice varieties verified under strict international ecological certifications, Vietnamese agribusinesses are proving that technology-driven adaptation can triumph over severe climatic adversity.`,
    readingQuiz: [
      {
        question: "Nông dân Đồng bằng sông Cửu Long dùng cảm biến IoT để theo dõi điều gì?",
        options: [
          "Tốc độ gió bão ở ngoài biển Đông",
          "Độ mặn của nước, nhiệt độ và nồng độ đạm trong đất thời gian thực",
          "Lượng cá bơi trong ao hàng ngày",
          "Thời gian máy bay thương mại cất cánh"
        ],
        correct: 1,
        explanation: "Đoạn 2 nêu rõ: 'monitor soil salinity, temperature, and nitrogen levels'."
      },
      {
        question: "Máy bay không người lái (drone) trong nông nghiệp giúp mang lại lợi ích gì?",
        options: [
          "Tăng lượng phân bón hóa học lên gấp đôi",
          "Phun thuốc và gieo mạ chính xác, cắt giảm 35% phân bón và tiết kiệm chi phí nhân công",
          "Thay thế hoàn toàn xe chở lúa về nhà máy",
          "Tạo ra các cơn mưa nhân tạo trên toàn vùng"
        ],
        correct: 1,
        explanation: "Đoạn 3 chỉ ra: 'precision aerial spraying... curtailing chemical fertilizer usage by 35% while slashing labor expenditures'."
      },
      {
        question: "Nhận định sau là True, False hay Not Given: 'Saltwater intrusion is no longer a challenge in the Mekong Delta.'",
        options: ["TRUE", "FALSE", "NOT GIVEN"],
        correct: 1,
        explanation: "FALSE: Đoạn 1 nêu rõ việc nhiễm mặn nghiêm trọng ('catastrophic saltwater intrusion during dry seasons') vẫn là thách thức mà công nghệ đang phải đối phó."
      }
    ]
  }
];
