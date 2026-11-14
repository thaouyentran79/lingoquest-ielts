/**
 * IELTS BEE 🐝 - KHO TỪ VỰNG HỌC THUẬT (110+ TỪ VỰNG CHUẨN BAND 6.5 - 8.5)
 * Phân chia theo 8 chủ đề thiết yếu nhất trong kỳ thi IELTS:
 * 1. Công nghệ & Trí tuệ nhân tạo (Technology & AI)
 * 2. Môi trường & Phát triển bền vững (Environment & Ecology)
 * 3. Kinh doanh, Kinh tế & Khởi nghiệp (Business & Economics)
 * 4. Xã hội & Đô thị hóa (Society & Urbanization)
 * 5. Giáo dục & Phát triển con người (Education & Academics)
 * 6. Phong cách sống & Thời trang (Fashion & Lifestyle)
 * 7. Tâm lý học & Sức khỏe (Psychology & Well-being)
 * 8. Cụm từ liên kết & Lập luận học thuật (Academic Cohesive Phrases)
 */

const MASTER_VOCABULARY_POOL = [
  // ==========================================
  // CHỦ ĐỀ 1: CÔNG NGHỆ & AI (15 TỪ)
  // ==========================================
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Autonomous",
    ipa: "/ɔːˈtɒn.ə.məs/",
    pos: "adj",
    vi: "Tự hành, hoạt động độc lập không cần can thiệp",
    example: "Autonomous drones monitor crop health across vast agricultural lands.",
    synonyms: "Self-governing, independent, automated"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Paradigm shift",
    ipa: "/ˈpær.ə.daɪm ʃɪft/",
    pos: "noun phrase",
    vi: "Bước chuyển dịch mô hình mang tính cách mạng",
    example: "Generative AI has caused an unprecedented paradigm shift in knowledge work.",
    synonyms: "Revolutionary change, fundamental transformation"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Cognitive burden",
    ipa: "/ˈkɒɡ.nə.tɪv ˈbɜː.dən/",
    pos: "noun phrase",
    vi: "Gánh nặng nhận thức, sự quá tải của não bộ",
    example: "Intelligent workflows dramatically alleviate cognitive burden for operators.",
    synonyms: "Mental overload, information fatigue"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Hallucination",
    ipa: "/həˌluː.sɪˈneɪ.ʃən/",
    pos: "noun",
    vi: "Thông tin bịa đặt của mô hình ngôn ngữ lớn (AI)",
    example: "Fact-checking guardrails prevent large language model hallucinations.",
    synonyms: "Fabrication, false generation"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Telemetry",
    ipa: "/təˈlem.ə.tri/",
    pos: "noun",
    vi: "Hệ thống đo đạc và truyền dữ liệu tự động từ xa",
    example: "Sensors transmit telemetry data to monitor bridge structural integrity.",
    synonyms: "Remote measurement, automated tracking"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Cybersecurity",
    ipa: "/ˌsaɪ.bə.sɪˈkjʊə.rə.ti/",
    pos: "noun",
    vi: "An ninh mạng, bảo mật hệ thống thông tin",
    example: "Financial institutions invest heavily in proactive cybersecurity measures.",
    synonyms: "Information security, network defense"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Algorithm",
    ipa: "/ˈæl.ɡə.rɪ.ðəm/",
    pos: "noun",
    vi: "Thuật toán, bộ quy tắc giải quyết vấn đề",
    example: "Social media algorithms curate content based on user interaction patterns.",
    synonyms: "Computational procedure, code routine"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Exponential",
    ipa: "/ˌek.spəˈnen.ʃəl/",
    pos: "adj",
    vi: "Gia tăng theo cấp số nhân, cực kỳ nhanh chóng",
    example: "Data generation has witnessed exponential growth in the digital era.",
    synonyms: "Rapid, meteoric, skyrocketing"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Disruptive",
    ipa: "/dɪsˈrʌp.tɪv/",
    pos: "adj",
    vi: "Mang tính đột phá thay đổi toàn bộ cuộc chơi",
    example: "Electric mobility is a disruptive technology challenging fossil fuels.",
    synonyms: "Groundbreaking, game-changing"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Interoperability",
    ipa: "/ˌɪn.təˌrɒp.ər.əˈbɪl.ə.ti/",
    pos: "noun",
    vi: "Khả năng tương tác kết nối giữa các hệ thống",
    example: "Standard protocols enhance interoperability across smart city devices.",
    synonyms: "Cross-compatibility, integration"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Multistep reasoning",
    ipa: "/ˌmʌl.ti.step ˈriː.zən.ɪŋ/",
    pos: "noun phrase",
    vi: "Tư duy suy luận đa bước logic",
    example: "New AI agent models demonstrate advanced multistep reasoning capabilities.",
    synonyms: "Complex deduction, sequential logic"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Automation",
    ipa: "/ˌɔː.təˈmeɪ.ʃən/",
    pos: "noun",
    vi: "Sự tự động hóa các thao tác thủ công",
    example: "Robotic process automation eliminates monotonous data entry tasks.",
    synonyms: "Computerization, mechanization"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Latency",
    ipa: "/ˈleɪ.tən.si/",
    pos: "noun",
    vi: "Độ trễ truyền tải tín hiệu mạng",
    example: "5G infrastructure guarantees ultra-low latency for autonomous driving.",
    synonyms: "Lag, delay, buffer"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Catalyst",
    ipa: "/ˈkæt.əl.ɪst/",
    pos: "noun",
    vi: "Chất xúc tác thúc đẩy quá trình chuyển đổi",
    example: "Cloud computing acts as a prime catalyst for business digitization.",
    synonyms: "Trigger, stimulant, impulse"
  },
  {
    topic: "tech",
    topicName: "Công Nghệ & AI",
    word: "Scalability",
    ipa: "/ˌskeɪ.ləˈbɪl.ə.ti/",
    pos: "noun",
    vi: "Khả năng mở rộng quy mô linh hoạt",
    example: "Microservice architecture ensures seamless platform scalability.",
    synonyms: "Expandability, extensibility"
  },

  // ==========================================
  // CHỦ ĐỀ 2: MÔI TRƯỜNG & PHÁT TRIỂN BỀN VỮNG (15 TỪ)
  // ==========================================
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Biodegradable",
    ipa: "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/",
    pos: "adj",
    vi: "Có khả năng phân hủy sinh học tự nhiên",
    example: "Supermarkets should mandate biodegradable packaging to curb landfill waste.",
    synonyms: "Compostable, decomposable, eco-friendly"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Mitigate",
    ipa: "/ˈmɪt.ɪ.ɡeɪt/",
    pos: "verb",
    vi: "Làm dịu, giảm thiểu mức độ nghiêm trọng",
    example: "Transitioning to solar power helps mitigate atmospheric greenhouse gases.",
    synonyms: "Alleviate, diminish, moderate"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Carbon footprint",
    ipa: "/ˌkɑː.bən ˈfʊt.prɪnt/",
    pos: "noun phrase",
    vi: "Dấu chân carbon (lượng phát thải CO2)",
    example: "Air travel incurs a disproportionately large carbon footprint per passenger.",
    synonyms: "Emissions impact, environmental toll"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Renewable",
    ipa: "/rɪˈnjuː.ə.bəl/",
    pos: "adj",
    vi: "Có thể tái tạo (năng lượng vô tận)",
    example: "Investment in renewable resources such as wind and solar continues to rise.",
    synonyms: "Sustainable, inexhaustible"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Biodiversity",
    ipa: "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
    pos: "noun",
    vi: "Sự đa dạng sinh học trong tự nhiên",
    example: "Deforestation poses an existential threat to tropical rainforest biodiversity.",
    synonyms: "Ecological variety, species richness"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Deforestation",
    ipa: "/diːˌfɒr.ɪˈsteɪ.ʃən/",
    pos: "noun",
    vi: "Nạn chặt phá rừng bừa bãi",
    example: "Unchecked deforestation accelerates global climate instability.",
    synonyms: "Forest clearance, logging"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Sustainable",
    ipa: "/səˈsteɪ.nə.bəl/",
    pos: "adj",
    vi: "Bền vững, không làm tổn hại tương lai",
    example: "Modern architectural design prioritizes sustainable energy consumption.",
    synonyms: "Eco-responsible, viable"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Ecological equilibrium",
    ipa: "/ˌiː.kəˈlɒdʒ.ɪ.kəl ˌek.wɪˈlɪb.ri.əm/",
    pos: "noun phrase",
    vi: "Sự cân bằng sinh thái học",
    example: "Overfishing disrupts the delicate ecological equilibrium of marine habitats.",
    synonyms: "Environmental balance, nature harmony"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Degradation",
    ipa: "/ˌdeɡ.rəˈdeɪ.ʃən/",
    pos: "noun",
    vi: "Sự suy thoái, xuống cấp của môi trường",
    example: "Soil degradation compromises food production across drought-stricken continents.",
    synonyms: "Deterioration, decay, decline"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Emissions",
    ipa: "/iˈmɪʃ.ənz/",
    pos: "noun",
    vi: "Khí thải công nghiệp và phương tiện",
    example: "Tougher automobile regulations have curbed toxic tailpipe emissions.",
    synonyms: "Effluents, exhaust gases, pollutants"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Conservation",
    ipa: "/ˌkɒn.səˈveɪ.ʃən/",
    pos: "noun",
    vi: "Sự bảo tồn tài nguyên và động vật hoang dã",
    example: "Wildlife conservation reserves protect endangered tigers from poaching.",
    synonyms: "Preservation, protection, safeguarding"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Depletion",
    ipa: "/dɪˈpliː.ʃən/",
    pos: "noun",
    vi: "Sự cạn kiệt nguồn tài nguyên",
    example: "Groundwater depletion creates acute agricultural crises in arid regions.",
    synonyms: "Exhaustion, drain, reduction"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Combustion",
    ipa: "/kəmˈbʌs.tʃən/",
    pos: "noun",
    vi: "Quá trình đốt cháy nhiên liệu",
    example: "The combustion of fossil fuels remains the primary driver of global warming.",
    synonyms: "Burning, ignition"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Upcycling",
    ipa: "/ˈʌpˌsaɪ.klɪŋ/",
    pos: "noun",
    vi: "Tái chế nâng cấp giá trị vật phẩm",
    example: "Upcycling industrial plastic into high-end furniture reduces waste.",
    synonyms: "Creative reuse, value-added recycling"
  },
  {
    topic: "environment",
    topicName: "Môi Trường & Sinh Thái",
    word: "Contamination",
    ipa: "/kənˌtæm.ɪˈneɪ.ʃən/",
    pos: "noun",
    vi: "Sự ô nhiễm hóa chất độc hại",
    example: "Industrial runoff led to severe chemical contamination of local rivers.",
    synonyms: "Pollution, poisoning, defilement"
  },

  // ==========================================
  // CHỦ ĐỀ 3: KINH DOANH & KINH TẾ (15 TỪ)
  // ==========================================
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Substantial",
    ipa: "/səbˈstæn.ʃəl/",
    pos: "adj",
    vi: "Đáng kể, to lớn, có giá trị cao",
    example: "The technology firm reported a substantial increase in quarterly earnings.",
    synonyms: "Considerable, significant, sizable"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Tackle",
    ipa: "/ˈtæk.əl/",
    pos: "verb",
    vi: "Giải quyết, đối phó bài toán khó",
    example: "Multinational corporations must tackle wage inequality across supply chains.",
    synonyms: "Address, confront, handle"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Unprecedented",
    ipa: "/ʌnˈpres.ɪ.den.tɪd/",
    pos: "adj",
    vi: "Chưa từng có tiền lệ trong lịch sử",
    example: "The e-commerce sector witnessed unprecedented expansion during the lockdown.",
    synonyms: "Groundbreaking, historic, singular"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Fiscal policy",
    ipa: "/ˌfɪs.kəl ˈpɒl.ə.si/",
    pos: "noun phrase",
    vi: "Chính sách tài khóa của chính phủ",
    example: "Prudent fiscal policy stabilizes volatile exchange rates during recessions.",
    synonyms: "Budgetary strategy, taxation framework"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Inflationary",
    ipa: "/ɪnˈfleɪ.ʃən.ər.i/",
    pos: "adj",
    vi: "Có tính chất lạm phát tăng giá",
    example: "Spiraling energy tariffs exert severe inflationary pressure on households.",
    synonyms: "Price-hiking, value-diluting"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Viable",
    ipa: "/ˈvaɪ.ə.bəl/",
    pos: "adj",
    vi: "Khả thi, có thể thực hiện thành công",
    example: "Green hydrogen is emerging as a commercially viable clean fuel source.",
    synonyms: "Feasible, workable, practicable"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Monopoly",
    ipa: "/məˈnɒp.əl.i/",
    pos: "noun",
    vi: "Sự độc quyền thị trường",
    example: "Antitrust regulations prevent big tech monopolies from stifling rivals.",
    synonyms: "Exclusive control, market domination"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Lucrative",
    ipa: "/ˈluː.krə.tɪv/",
    pos: "adj",
    vi: "Sinh lời béo bở, đem lại lợi nhuận cao",
    example: "Mobile application development has evolved into an exceptionally lucrative trade.",
    synonyms: "Profitable, remunerative, rewarding"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Diversify",
    ipa: "/daɪˈvɜː.sɪ.faɪ/",
    pos: "verb",
    vi: "Đa dạng hóa danh mục đầu tư/sản phẩm",
    example: "Exporting nations must diversify their product portfolios to cushion external shocks.",
    synonyms: "Broaden, vary, branch out"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Competitive edge",
    ipa: "/kəmˈpet.ɪ.tɪv edʒ/",
    pos: "noun phrase",
    vi: "Lợi thế cạnh tranh vượt trội",
    example: "Proprietary AI algorithms grant the logistics platform a vital competitive edge.",
    synonyms: "Strategic advantage, unique selling proposition"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Venture capital",
    ipa: "/ˈven.tʃə ˌkæp.ɪ.təl/",
    pos: "noun phrase",
    vi: "Vốn đầu tư mạo hiểm cho khởi nghiệp",
    example: "Early-stage biotech ventures rely heavily on venture capital funding.",
    synonyms: "Startup seed money, risk investment"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Consumerism",
    ipa: "/kənˈsjuː.mə.rɪ.zəm/",
    pos: "noun",
    vi: "Chủ nghĩa tiêu dùng, mua sắm liên tục",
    example: "Mindless consumerism depletes raw earth minerals at alarming velocities.",
    synonyms: "Materialism, buying culture"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Discrepancy",
    ipa: "/dɪˈskrep.ən.si/",
    pos: "noun",
    vi: "Sự chênh lệch, không đồng nhất số liệu",
    example: "Auditors identified a significant discrepancy between logged sales and tax filings.",
    synonyms: "Inconsistency, divergence, variance"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Overhead",
    ipa: "/ˈəʊ.və.hed/",
    pos: "noun",
    vi: "Chi phí vận hành cố định (mặt bằng, điện nước)",
    example: "Remote operational policies slash administrative overheads substantially.",
    synonyms: "Operating expenses, running costs"
  },
  {
    topic: "business",
    topicName: "Kinh Doanh & Kinh Tế",
    word: "Entrepreneurial",
    ipa: "/ˌɒn.trə.prəˈnɜː.ri.əl/",
    pos: "adj",
    vi: "Mang tinh thần dám nghĩ dám làm khởi nghiệp",
    example: "Vietnam fosters an intensely entrepreneurial climate among Gen Z graduates.",
    synonyms: "Innovative, business-minded, daring"
  },

  // ==========================================
  // CHỦ ĐỀ 4: ĐÔ THỊ HÓA & XÃ HỘI (15 TỪ)
  // ==========================================
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Metropolitan",
    ipa: "/ˌmet.rəˈpɒl.ɪ.tən/",
    pos: "adj",
    vi: "Thuộc về khu vực đại đô thị trung tâm",
    example: "Metropolitan planners must expand rail transit to decongest arterial highways.",
    synonyms: "Urban, civic, cosmopolitan"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Arterial",
    ipa: "/ɑːˈtɪə.ri.əl/",
    pos: "adj",
    vi: "Huyết mạch, trọng điểm (tuyến đường chính)",
    example: "Ring roads alleviate rush-hour pressure on inner-city arterial corridors.",
    synonyms: "Main, central, trunk"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Congestion",
    ipa: "/kənˈdʒes.tʃən/",
    pos: "noun",
    vi: "Tình trạng ùn tắc giao thông, nghẽn mạng",
    example: "Intelligent toll gantries dynamically adjust rates to mitigate traffic congestion.",
    synonyms: "Gridlock, traffic jam, bottleneck"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Infrastructure",
    ipa: "/ˈɪn.frəˌstrʌk.tʃər/",
    pos: "noun",
    vi: "Cơ sở hạ tầng vật chất (đường sá, cầu cống)",
    example: "Developing economies allocate substantial budgetary portions to transit infrastructure.",
    synonyms: "Public works, basic facilities"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Gentrification",
    ipa: "/ˌdʒen.trɪ.fɪˈkeɪ.ʃən/",
    pos: "noun",
    vi: "Quá trình chỉnh trang nâng cấp đô thị (đẩy người thu nhập thấp ra xa)",
    example: "Urban gentrification revitalizes old quarters but inflates local housing rents.",
    synonyms: "Urban renewal, neighborhood upgrading"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Demographic",
    ipa: "/ˌdem.əˈɡræf.ɪk/",
    pos: "adj / noun",
    vi: "Thuộc về nhân khẩu học (độ tuổi, giới tính)",
    example: "Shifting demographics indicate that several nations face rapidly aging populations.",
    synonyms: "Population statistics, census data"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Egalitarian",
    ipa: "/ɪˌɡæl.ɪˈteə.ri.ən/",
    pos: "adj",
    vi: "Bình đẳng xã hội, ai cũng có quyền lợi như nhau",
    example: "Public schooling should serve as an egalitarian gateway for every youth.",
    synonyms: "Democratic, fair, equal"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Marginalize",
    ipa: "/ˈmɑː.dʒɪ.nəl.aɪz/",
    pos: "verb",
    vi: "Gạt ra ngoài lề xã hội, cô lập",
    example: "Social safety nets must prevent vulnerable migrants from being marginalized.",
    synonyms: "Isolate, disenfranchise, sideline"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Urban sprawl",
    ipa: "/ˈɜː.bən sprɔːl/",
    pos: "noun phrase",
    vi: "Sự mở rộng tự phát thiếu quy hoạch của đô thị",
    example: "Unrestricted urban sprawl encroaches relentlessly upon fertile agricultural valleys.",
    synonyms: "City expansion, suburban spread"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Civic",
    ipa: "/ˈsɪv.ɪk/",
    pos: "adj",
    vi: "Thuộc về công dân, bổn phận công dân",
    example: "Volunteering instills deep civic responsibility in young adolescents.",
    synonyms: "Community, public, municipal"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Affluence",
    ipa: "/ˈæf.lu.əns/",
    pos: "noun",
    vi: "Sự giàu có, sung túc thịnh vượng",
    example: "The neighborhood was renowned for stately villas and ostentatious affluence.",
    synonyms: "Wealth, prosperity, opulence"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Deprivation",
    ipa: "/ˌdep.rɪˈveɪ.ʃən/",
    pos: "noun",
    vi: "Sự thiếu thốn các nhu cầu cơ bản",
    example: "Severe nutritional deprivation during early childhood causes lasting cognitive harms.",
    synonyms: "Poverty, hardship, destitution"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Integration",
    ipa: "/ˌɪn.tɪˈɡreɪ.ʃən/",
    pos: "noun",
    vi: "Sự hòa nhập vào cộng đồng",
    example: "Language workshops accelerate the seamless social integration of new immigrants.",
    synonyms: "Assimilation, inclusion, synthesis"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Segregation",
    ipa: "/ˌseɡ.rɪˈɡeɪ.ʃən/",
    pos: "noun",
    vi: "Sự phân biệt đối xử, chia rẽ cách ly",
    example: "Progressive policies eradicated systemic racial segregation across institutions.",
    synonyms: "Separation, discrimination, partition"
  },
  {
    topic: "society",
    topicName: "Đô Thị & Xã Hội",
    word: "Commute",
    ipa: "/kəˈmjuːt/",
    pos: "noun / verb",
    vi: "Quãng đường/thời gian di chuyển đi làm mỗi ngày",
    example: "A grueling two-hour daily commute severely compromises work-life balance.",
    synonyms: "Daily travel, journey to work"
  },

  // ==========================================
  // CHỦ ĐỀ 5: GIÁO DỤC & HỌC THUẬT (12 TỪ)
  // ==========================================
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Pedagogy",
    ipa: "/ˈped.ə.ɡɒdʒ.i/",
    pos: "noun",
    vi: "Phương pháp giảng dạy, sư phạm học",
    example: "Modern educational pedagogy champions active student inquiry over rote memorization.",
    synonyms: "Teaching methodology, instruction science"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Curriculum",
    ipa: "/kəˈrɪk.jə.ləm/",
    pos: "noun",
    vi: "Khung chương trình học tập bài bản",
    example: "The high school curriculum incorporates computational thinking and coding.",
    synonyms: "Course of study, syllabus"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Cognitive",
    ipa: "/ˈkɒɡ.nə.tɪv/",
    pos: "adj",
    vi: "Liên quan đến nhận thức và tư duy não bộ",
    example: "Bilingual upbringing enhances flexible cognitive abilities in early infancy.",
    synonyms: "Intellectual, mental, reasoning"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Rote memorization",
    ipa: "/rəʊt ˌmem.ər.aɪˈzeɪ.ʃən/",
    pos: "noun phrase",
    vi: "Học vẹt, học thuộc lòng sáo rỗng",
    example: "Examiners penalize rote memorization in favor of authentic linguistic reflexes.",
    synonyms: "Mechanical recall, parrot learning"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Holistic",
    ipa: "/həʊˈlɪs.tɪk/",
    pos: "adj",
    vi: "Toàn diện, xem xét tổng thể bức tranh",
    example: "Universities adopt holistic admissions reviewing artistic talents and character.",
    synonyms: "Comprehensive, all-encompassing, well-rounded"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Aptitude",
    ipa: "/ˈæp.tɪ.tʃuːd/",
    pos: "noun",
    vi: "Năng khiếu bẩm sinh, sở trường tự nhiên",
    example: "The student exhibited exceptional natural aptitude for mathematical proofs.",
    synonyms: "Talent, flair, gift"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Discipline",
    ipa: "/ˈdɪs.ə.plɪn/",
    pos: "noun",
    vi: "Tính kỷ luật tự giác / Ngành học",
    example: "Consistent self-discipline is indispensable for achieving an IELTS Band 8.0.",
    synonyms: "Rigor, self-control, branch of knowledge"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Vocational",
    ipa: "/vəʊˈkeɪ.ʃən.əl/",
    pos: "adj",
    vi: "Thuộc về đào tạo hướng nghiệp dạy nghề",
    example: "Vocational colleges equip apprentices with hands-on mechanical skills.",
    synonyms: "Trade-based, occupational, practical"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Empower",
    ipa: "/ɪmˈpaʊ.ər/",
    pos: "verb",
    vi: "Trao quyền, nâng cao năng lực cho ai đó",
    example: "Digital literacy workshops empower senior citizens to access health portals.",
    synonyms: "Enable, emancipate, authorize"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Acquisition",
    ipa: "/ˌæk.wɪˈzɪʃ.ən/",
    pos: "noun",
    vi: "Sự tiếp thu (kiến thức, ngôn ngữ)",
    example: "Natural language acquisition thrives in immersive communicative contexts.",
    synonyms: "Attainment, mastering, absorption"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Scholastic",
    ipa: "/skəˈlæs.tɪk/",
    pos: "adj",
    vi: "Thuộc về học vấn, học viện nghiên cứu",
    example: "The scholar received awards honoring outstanding scholastic achievements.",
    synonyms: "Academic, scholarly, intellectual"
  },
  {
    topic: "education",
    topicName: "Giáo Dục & Học Thuật",
    word: "Competence",
    ipa: "/ˈkɒm.pɪ.təns/",
    pos: "noun",
    vi: "Năng lực, khả năng hoàn thành xuất sắc công việc",
    example: "Linguistic competence reflects both grammatical accuracy and communicative fluency.",
    synonyms: "Proficiency, capability, skill"
  },

  // ==========================================
  // CHỦ ĐỀ 6: PHONG CÁCH SỐNG & THỜI TRANG (12 TỪ)
  // ==========================================
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Understated",
    ipa: "/ˌʌn.dəˈsteɪ.tɪd/",
    pos: "adj",
    vi: "Kín đáo, tinh tế, sang trọng không phô trương",
    example: "Her understated evening gown radiated supreme sophistication.",
    synonyms: "Subtle, discreet, refined"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Ostentatious",
    ipa: "/ˌɒs.tenˈteɪ.ʃəs/",
    pos: "adj",
    vi: "Khoe khoang, phô trương kệch cỡm (ngược nghĩa understated)",
    example: "He avoided ostentatious accessories during boardroom negotiations.",
    synonyms: "Flashy, pretentious, gaudy"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Bespoke",
    ipa: "/bɪˈspəʊk/",
    pos: "adj",
    vi: "May đo riêng theo đơn đặt hàng độc bản",
    example: "The diplomat stepped out in a bespoke Savile Row wool suit.",
    synonyms: "Tailor-made, custom-built, personalized"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Connoisseur",
    ipa: "/ˌkɒn.əˈsɜːr/",
    pos: "noun",
    vi: "Chuyên gia sành sỏi có mắt thẩm mỹ cao",
    example: "Vintage watch connoisseurs appreciate intricate Swiss mechanical movements.",
    synonyms: "Expert, maven, specialist"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Silhouette",
    ipa: "/ˌsɪl.uˈet/",
    pos: "noun",
    vi: "Phom dáng, đường nét hình thể trang phục",
    example: "Oversized blazers dominate the contemporary street style silhouette.",
    synonyms: "Outline, profile, contour"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Sartorial",
    ipa: "/sɑːˈtɔː.ri.əl/",
    pos: "adj",
    vi: "Thuộc về may mặc và phong cách ăn mặc",
    example: "Milan is renowned worldwide as a global capital of sartorial excellence.",
    synonyms: "Tailoring, stylistic, apparel-related"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Avant-garde",
    ipa: "/ˌæv.ɑ̃ːˈɡɑːd/",
    pos: "adj / noun",
    vi: "Tiên phong, đi trước thời đại, phá cách",
    example: "The runway collection showcased audacious avant-garde metallic garments.",
    synonyms: "Innovative, radical, experimental"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Minimalism",
    ipa: "/ˈmɪn.ɪ.məl.ɪ.zəm/",
    pos: "noun",
    vi: "Chủ nghĩa tối giản, bớt rườm rà",
    example: "Scandinavian minimalism champions neutral tones and practical silhouettes.",
    synonyms: "Simplicity, austerity, restraint"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Eclectic",
    ipa: "/ekˈlek.tɪk/",
    pos: "adj",
    vi: "Pha trộn đa dạng từ nhiều nguồn cảm hứng",
    example: "Her eclectic interior decor marries mid-century wooden crafts with pop art.",
    synonyms: "Diverse, multifaceted, wide-ranging"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Fleeting",
    ipa: "/ˈfliː.tɪŋ/",
    pos: "adj",
    vi: "Phù du, thoáng qua, nhanh chóng biến mất",
    example: "Conscious shoppers avoid squandering savings on fleeting viral micro-trends.",
    synonyms: "Transitory, ephemeral, short-lived"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Timeless",
    ipa: "/ˈtaɪm.ləs/",
    pos: "adj",
    vi: "Vượt thời gian, không bao giờ lỗi mốt",
    example: "A trench coat in trench beige represents a timeless wardrobe staple.",
    synonyms: "Enduring, classic, ageless"
  },
  {
    topic: "lifestyle",
    topicName: "Thời Trang & Phong Cách Sống",
    word: "Aesthetic",
    ipa: "/esˈθet.ɪk/",
    pos: "noun / adj",
    vi: "Gu thẩm mỹ, phong cách nghệ thuật thị giác",
    example: "The coffee shop boasts a cozy vintage aesthetic that draws young photographers.",
    synonyms: "Visual appeal, artistic charm, style"
  },

  // ==========================================
  // CHỦ ĐỀ 7: TÂM LÝ & SỨC KHỎE (12 TỪ)
  // ==========================================
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Resilience",
    ipa: "/rɪˈzɪl.jəns/",
    pos: "noun",
    vi: "Khả năng kiên cường phục hồi sau nghịch cảnh",
    example: "Mental resilience allows high-performers to thrive under acute pressure.",
    synonyms: "Fortitude, toughness, buoyancy"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Sedentary",
    ipa: "/ˈsed.ən.tər.i/",
    pos: "adj",
    vi: "Ít vận động, ngồi một chỗ nhiều giờ",
    example: "A sedentary office lifestyle significantly escalates cardiovascular risks.",
    synonyms: "Inactive, desk-bound, couch-potato"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Detrimental",
    ipa: "/ˌdet.rɪˈmen.təl/",
    pos: "adj",
    vi: "Có hại, gây tổn hại khôn lường",
    example: "Chronic sleep deprivation exerts deeply detrimental effects on memory consolidation.",
    synonyms: "Harmful, damaging, injurious"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Beneficial",
    ipa: "/ˌben.ɪˈfɪʃ.əl/",
    pos: "adj",
    vi: "Có lợi, mang lại hiệu quả tốt",
    example: "Regular aerobic exercise is exceptionally beneficial for cognitive longevity.",
    synonyms: "Advantageous, salutary, wholesome"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Burnout",
    ipa: "/ˈbɜːn.aʊt/",
    pos: "noun",
    vi: "Tình trạng kiệt sức cả thể chất lẫn tinh thần",
    example: "Unreasonable overtime demands trigger professional burnout among junior medical staff.",
    synonyms: "Exhaustion, chronic fatigue"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Well-being",
    ipa: "/ˌwelˈbiː.ɪŋ/",
    pos: "noun",
    vi: "Tình trạng khỏe khoắn, hạnh phúc an lành",
    example: "Workplace meditation seminars foster psychological well-being and team harmony.",
    synonyms: "Wellness, prosperity, contentment"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Vulnerable",
    ipa: "/ˈvʌl.nər.ə.bəl/",
    pos: "adj",
    vi: "Dễ bị tổn thương, yếu thế trước rủi ro",
    example: "Young toddlers and elderly retirees are especially vulnerable to respiratory infections.",
    synonyms: "Susceptible, defenseless, exposed"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Prevalent",
    ipa: "/ˈprev.əl.ənt/",
    pos: "adj",
    vi: "Phổ biến rộng rãi, thịnh hành khắp nơi",
    example: "Anxiety disorders have become increasingly prevalent among adolescent demographics.",
    synonyms: "Widespread, ubiquitous, rampant"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Therapeutic",
    ipa: "/ˌθer.əˈpjuː.tɪk/",
    pos: "adj",
    vi: "Có tính trị liệu, chữa lành tâm hồn",
    example: "Gardening yields profound therapeutic benefits for patients recovering from depression.",
    synonyms: "Curative, healing, restorative"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Predisposition",
    ipa: "/ˌpriː.dɪs.pəˈzɪʃ.ən/",
    pos: "noun",
    vi: "Khuynh hướng thiên bẩm / Tiền sử bệnh di truyền",
    example: "Genetic predisposition accounts for varying vulnerability to diabetes.",
    synonyms: "Inclination, susceptibility, tendency"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Acute",
    ipa: "/əˈkjuːt/",
    pos: "adj",
    vi: "Cấp tính, dữ dội, nguy cấp",
    example: "Doctors administered oxygen to treat acute respiratory distress.",
    synonyms: "Severe, critical, piercing"
  },
  {
    topic: "health",
    topicName: "Tâm Lý & Sức Khỏe",
    word: "Immunity",
    ipa: "/ɪˈmjuː.nə.ti/",
    pos: "noun",
    vi: "Hệ miễn dịch, sức đề kháng",
    example: "Vaccination protocols establish durable community immunity against epidemics.",
    synonyms: "Resistance, defense, protection"
  },

  // ==========================================
  // CHỦ ĐỀ 8: LIÊN KẾT & LẬP LUẬN HỌC THUẬT (15 TỪ)
  // ==========================================
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Crucial",
    ipa: "/ˈkruː.ʃəl/",
    pos: "adj",
    vi: "Cực kỳ quan trọng, mang tính quyết định",
    example: "Early intervention plays a crucial role in curbing environmental degradation.",
    synonyms: "Pivotal, vital, essential"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Consequently",
    ipa: "/ˈkɒn.sɪ.kwənt.li/",
    pos: "adv",
    vi: "Hệ quả là, kết quả tất yếu là",
    example: "He squandered study hours; consequently, he scored below his target band.",
    synonyms: "As a result, therefore, hence"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Inversion",
    ipa: "/ɪnˈvɜː.ʃən/",
    pos: "noun",
    vi: "Hiện tượng đảo ngữ nhấn mạnh câu",
    example: "Inversion lends dramatic gravitas and grammatical sophistication to academic essays.",
    synonyms: "Syntactic reversal, grammatical transposition"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Subsequent",
    ipa: "/ˈsʌb.sɪ.kwənt/",
    pos: "adj",
    vi: "Xảy ra sau đó, tiếp theo",
    example: "Initial failures paved the way for subsequent groundbreaking scientific discoveries.",
    synonyms: "Following, succeeding, ensuing"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Cornerstone",
    ipa: "/ˈkɔː.nə.stəʊn/",
    pos: "noun",
    vi: "Hòn đá tảng nền móng thiết yếu",
    example: "Critical thinking remains the cornerstone of independent scholarship.",
    synonyms: "Bedrock, foundation, pillar"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Indispensable",
    ipa: "/ˌɪn.dɪˈspen.sə.bəl/",
    pos: "adj",
    vi: "Không thể thiếu, tuyệt đối cần thiết",
    example: "Air filtration systems are indispensable in sterile medical facilities.",
    synonyms: "Vital, requisite, imperative"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Squander",
    ipa: "/ˈskwɒn.dər/",
    pos: "verb",
    vi: "Lãng phí hoang phí tài nguyên/thời gian",
    example: "Developing municipalities cannot afford to squander fiscal reserves on vanity landmarks.",
    synonyms: "Dissipate, waste, fritter away"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Prominent",
    ipa: "/ˈprɒm.ɪ.nənt/",
    pos: "adj",
    vi: "Nổi bật, xuất chúng, có tầm ảnh hưởng lớn",
    example: "She is a prominent bioethicist consulting international policy bodies.",
    synonyms: "Eminent, distinguished, renowned"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Curb",
    ipa: "/kɜːb/",
    pos: "verb",
    vi: "Kìm hãm, hạn chế, kìm nén tác hại",
    example: "Strict municipal zoning laws curb reckless high-rise construction.",
    synonyms: "Restrain, restrict, rein in"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Notwithstanding",
    ipa: "/ˌnɒt.wɪðˈstæn.dɪŋ/",
    pos: "prep / adv",
    vi: "Mặc dù, bất chấp điều gì",
    example: "Notwithstanding initial public skepticism, the tramway system proved a runaway triumph.",
    synonyms: "Despite, in spite of, regardless of"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Albeit",
    ipa: "/ɔːlˈbiː.ɪt/",
    pos: "conjunction",
    vi: "Mặc dù là, dẫu cho",
    example: "The policy achieved measurable gains, albeit at considerable fiscal expense.",
    synonyms: "Although, even though, though"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Exemplify",
    ipa: "/ɪɡˈzem.plɪ.faɪ/",
    pos: "verb",
    vi: "Làm ví dụ điển hình minh chứng cho",
    example: "Her academic career exemplifies perseverance in the face of daunting adversity.",
    synonyms: "Illustrate, epitomize, typify"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Substantiate",
    ipa: "/səbˈstæn.ʃi.eɪt/",
    pos: "verb",
    vi: "Chứng minh, củng cố bằng bằng chứng xác thực",
    example: "Academic essayists must substantiate empirical assertions with credible citations.",
    synonyms: "Validate, corroborate, verify"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Plausible",
    ipa: "/ˈplɔː.zə.bəl/",
    pos: "adj",
    vi: "Hợp lý, đáng tin cậy, có cơ sở",
    example: "Astronomers formulated a plausible hypothesis explaining atmospheric shifts.",
    synonyms: "Credible, believable, feasible"
  },
  {
    topic: "academic",
    topicName: "Lập Luận & Liên Kết Học Thuật",
    word: "Ubiquitous",
    ipa: "/juːˈbɪk.wɪ.təs/",
    pos: "adj",
    vi: "Phổ biến ở khắp mọi nơi",
    example: "Smartphone connectivity has become ubiquitous across even rural communities.",
    synonyms: "Omnipresent, pervasive, universal"
  }
];

// Tạo từ điển tra cứu nhanh cho tính năng Tooltip
const ACADEMIC_VOCAB_DB = {};
MASTER_VOCABULARY_POOL.forEach(v => {
  ACADEMIC_VOCAB_DB[v.word.toLowerCase()] = {
    ipa: v.ipa,
    pos: v.pos,
    vi: v.vi,
    example: v.example,
    synonyms: v.synonyms
  };
});
