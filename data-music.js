/**
 * IELTS BEE 🐝 - KHO BÀI HÁT "NGHE NHẠC ĐIỀN TỪ" (MUSIC GAP-FILL)
 * 10 bản hit US-UK đầy đủ với lyrics dài 15-20 dòng, đục lỗ 8-10 từ/idioms,
 * kèm mục "Giải mã từ lóng & Idioms trong bài" phục vụ IELTS Speaking Band 7.5 - 8.5+.
 */

const MUSIC_GAMES_DATA = [
  {
    id: "song-1",
    title: "Die With A Smile",
    artist: "Bruno Mars & Lady Gaga",
    genre: "Soulful Ballad • Romantic Idioms",
    youtubeId: "WcIcVapfqXw",
    xpReward: 80,
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "I, I just woke up from a dream where you and I had to say ",
        target: "goodbye",
        suffix: ".\n",
        hint: "Từ 7 chữ cái: Lời từ biệt sâu sắc",
        options: ["goodbye", "hello", "forever", "nothing"]
      },
      {
        prefix: "And I don't know what it means, but I couldn't stop myself from crying.\nIt was like the whole world stopped and I was losing my ",
        target: "mind",
        suffix: ".\n",
        hint: "Cụm 'lose one's mind': Mất trí, hoảng loạn",
        options: ["heart", "mind", "sight", "breath"]
      },
      {
        prefix: "If the party was over and our time on Earth was through,\nI'd wanna hold you just for a while and ",
        target: "die with a smile",
        suffix: ".\n",
        hint: "Thành ngữ tựa đề: Ra đi mãn nguyện, không hối tiếc",
        options: ["cry in the dark", "die with a smile", "dance with tears", "sleep forever"]
      },
      {
        prefix: "If the world was ending, I'd wanna be ",
        target: "next to you",
        suffix: ".\n",
        hint: "Cụm từ 3 chữ: Bên cạnh bạn",
        options: ["far away", "next to you", "on my own", "out of town"]
      },
      {
        prefix: "Right beside you, when the stars fall from the sky.\nOur journey together was never a matter of ",
        target: "chance",
        suffix: ".\n",
        hint: "Từ 6 chữ cái: Sự tình cờ, may rủi",
        options: ["luck", "time", "chance", "fate"]
      },
      {
        prefix: "Every single breath we shared was worth the endless ",
        target: "sacrifice",
        suffix: ".\n",
        hint: "Từ 10 chữ cái: Sự hy sinh cao cả",
        options: ["sacrifice", "compromise", "trouble", "argument"]
      },
      {
        prefix: "Even if darkness falls, our love will shine through the ",
        target: "shadows",
        suffix: ".\n",
        hint: "Từ số nhiều: Những bóng đêm, bóng tối",
        options: ["clouds", "shadows", "mirrors", "waters"]
      },
      {
        prefix: "We built an unbreakable bond that will endure for ",
        target: "eternity",
        suffix: ".\n",
        hint: "Danh từ Band 8.0: Sự vĩnh hằng, mãi mãi",
        options: ["a decade", "a season", "eternity", "yesterday"]
      }
    ],
    speakingIdioms: [
      {
        idiom: "Die with a smile",
        meaning: "Mãn nguyện, thanh thản, sống trọn vẹn không còn gì tiếc nuối.",
        speakingContext: "IELTS Speaking Part 2 khi miêu tả mục tiêu lớn nhất trong cuộc đời hoặc một quyết định dũng cảm.",
        sampleAnswer: "If I can dedicate my youth to developing meaningful tech solutions for society, I can truly die with a smile."
      },
      {
        idiom: "In the blink of an eye",
        meaning: "Trong nháy mắt, cực kỳ nhanh chóng.",
        speakingContext: "IELTS Speaking Part 1 & 3 khi nói về sự thay đổi nhanh chóng của công nghệ hoặc thời gian trôi qua.",
        sampleAnswer: "Urban infrastructure across Vietnam has undergone massive transformation in the blink of an eye."
      },
      {
        idiom: "Lose one's mind",
        meaning: "Trở nên căng thẳng tột độ hoặc hoảng loạn vì áp lực.",
        speakingContext: "IELTS Speaking Part 1 khi kể về thói quen học tập hoặc cảm giác khi sắp thi cử.",
        sampleAnswer: "Whenever multiple deadlines converge, I feel like I am about to lose my mind unless I take a brisk walk."
      }
    ],
    vocabToSave: [
      { word: "Die with a smile", ipa: "/daɪ wɪð ə smaɪl/", vi: "Mãn nguyện, không còn gì hối tiếc", example: "Live authentically so you can die with a smile." },
      { word: "Eternity", ipa: "/ɪˈtɜː.nə.ti/", vi: "Sự vĩnh cửu, trường tồn vô tận", example: "True classical literature withstands the test of eternity." },
      { word: "Sacrifice", ipa: "/ˈsæk.rɪ.faɪs/", vi: "Sự hy sinh, cống hiến quên mình", example: "Parents make immense sacrifices for their children's future." },
      { word: "Bittersweet", ipa: "/ˌbɪtəˈswiːt/", vi: "Buồn vui lẫn lộn, ngọt ngào xen tiếc nuối", example: "Finishing university is a bittersweet milestone." }
    ]
  },

  {
    id: "song-2",
    title: "Espresso",
    artist: "Sabrina Carpenter",
    genre: "Disco-Pop • Casual English & Slang",
    youtubeId: "eVli-tstM5E",
    xpReward: 80,
    cover: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "Now he's thinkin' 'bout me every night, oh\nIs it that sweet? I guess so\nSay you can't sleep, baby, I know\nThat's that me, ",
        target: "espresso",
        suffix: ".\n",
        hint: "Tên một loại cà phê đậm đặc làm tỉnh táo",
        options: ["cappuccino", "espresso", "americano", "latte"]
      },
      {
        prefix: "Move it up, down, left, right, oh\n",
        target: "switch it up",
        suffix: " like Nintendo.\n",
        hint: "Phrasal verb: Thay đổi luân phiên, làm mới phong cách",
        options: ["turn it off", "switch it up", "give it up", "run away"]
      },
      {
        prefix: "Say you can't sleep, baby, I know, that's that me, espresso.\nMy honey bee, come and get a taste of this ",
        target: "energy",
        suffix: ".\n",
        hint: "Từ 6 chữ cái: Năng lượng, sinh khí tràn đầy",
        options: ["sugar", "melody", "energy", "coffee"]
      },
      {
        prefix: "Soft skin, looking charming, keeping everyone ",
        target: "captivated",
        suffix: ".\n",
        hint: "Tính từ Band 7.5: Bị cuốn hút, mê hoặc hoàn toàn",
        options: ["bored", "captivated", "worried", "distracted"]
      },
      {
        prefix: "Walked into the lounge looking effortlessly ",
        target: "nonchalant",
        suffix: ".\n",
        hint: "Tính từ Band 8.0: Thản nhiên, bình thản cực ngầu",
        options: ["nervous", "hysterical", "nonchalant", "hesitant"]
      },
      {
        prefix: "I don't chase, I attract, that's my personal ",
        target: "philosophy",
        suffix: ".\n",
        hint: "Từ 10 chữ cái: Triết lý sống",
        options: ["strategy", "philosophy", "schedule", "routine"]
      },
      {
        prefix: "Too bad your new romance is so utterly ",
        target: "predictable",
        suffix: ".\n",
        hint: "Tính từ Band 6.5: Dễ đoán trước, nhạt nhẽo",
        options: ["exciting", "predictable", "mysterious", "intense"]
      },
      {
        prefix: "While my magnetic charm remains entirely ",
        target: "unrivaled",
        suffix: ".\n",
        hint: "Tính từ Band 8.5: Vô song, không đối thủ sánh bằng",
        options: ["ordinary", "unrivaled", "common", "weak"]
      }
    ],
    speakingIdioms: [
      {
        idiom: "Switch it up",
        meaning: "Làm mới, thay đổi phương thức hoặc thói quen để không bị nhàm chán.",
        speakingContext: "IELTS Speaking Part 1 về chủ đề hobbies, thời trang hoặc thói quen cuối tuần.",
        sampleAnswer: "Whenever I get stuck in a creative rut, I like to switch it up by studying in a cozy outdoor café."
      },
      {
        idiom: "Effortlessly chic / Nonchalant",
        meaning: "Phong thái tự nhiên mà vẫn vô cùng cuốn hút, sang trọng không cần gồng.",
        speakingContext: "IELTS Speaking Part 2 miêu tả một người có gu ăn mặc hoặc phong cách bạn ngưỡng mộ.",
        sampleAnswer: "She has an effortlessly nonchalant demeanor that instantly commands respect in boardroom meetings."
      },
      {
        idiom: "Hit the spot",
        meaning: "Chính xác là thứ tôi cần (đặc biệt là đồ ăn, thức uống ngon).",
        speakingContext: "IELTS Speaking Part 1 về đồ uống ưa thích (coffee/tea).",
        sampleAnswer: "A warm cup of black coffee never fails to hit the spot during exhausting morning commutes."
      }
    ],
    vocabToSave: [
      { word: "Nonchalant", ipa: "/ˌnɒn.ʃəl.ənt/", vi: "Thản nhiên, điềm tĩnh cực ngầu", example: "He gave a nonchalant shrug when asked about the controversy." },
      { word: "Captivated", ipa: "/ˈkæp.tɪ.veɪ.tɪd/", vi: "Bị cuốn hút, mê đắm", example: "The audience was captivated by her speech." },
      { word: "Unrivaled", ipa: "/ʌnˈraɪ.vəld/", vi: "Vô song, không gì sánh bằng", example: "The company maintains an unrivaled market share in tech." },
      { word: "Predictable", ipa: "/prɪˈdɪk.tə.bəl/", vi: "Dễ đoán, không có gì bất ngờ", example: "The plot of the movie was rather predictable." }
    ]
  },

  {
    id: "song-3",
    title: "Anti-Hero",
    artist: "Taylor Swift",
    genre: "Synth-Pop • Psychological & Idiomatic Vocab",
    youtubeId: "b1kbLwvqugk",
    xpReward: 80,
    cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "I have this thing where I get older but just never ",
        target: "wiser",
        suffix: ".\n",
        hint: "Tính từ so sánh hơn: Khôn ngoan hơn, từng trải hơn",
        options: ["taller", "smarter", "wiser", "faster"]
      },
      {
        prefix: "Midnights become my afternoons.\nWhen my depression works the ",
        target: "graveyard shift",
        suffix: ".\n",
        hint: "Idiom 2 từ: Ca trực đêm khuya từ nửa đêm đến sáng",
        options: ["morning shift", "graveyard shift", "lunch break", "overtime hours"]
      },
      {
        prefix: "There the people I've ghosted stand in the room.\nIt's me, hi, I'm the ",
        target: "problem",
        suffix: ", it's me.\n",
        hint: "Từ 7 chữ cái: Vấn đề, rắc rối",
        options: ["solution", "problem", "villain", "queen"]
      },
      {
        prefix: "At tea time, everybody ",
        target: "agrees",
        suffix: ".\n",
        hint: "Động từ số ít: Đồng tình, nhất trí",
        options: ["disagrees", "agrees", "leaves", "complains"]
      },
      {
        prefix: "I'll stare directly at the sun but never in the ",
        target: "mirror",
        suffix: ".\n",
        hint: "Từ 6 chữ cái: Tấm gương soi bóng",
        options: ["mirror", "window", "shadow", "water"]
      },
      {
        prefix: "It must be exhausting always rooting for the ",
        target: "anti-hero",
        suffix: ".\n",
        hint: "Cụm danh từ: Nhân vật phản anh hùng (đầy khuyết điểm)",
        options: ["superhero", "anti-hero", "champion", "underdog"]
      },
      {
        prefix: "Sometimes I hallucinate a covert narcissism disguised as ",
        target: "altruism",
        suffix: ".\n",
        hint: "Danh từ Band 8.5: Lòng vị tha, hy sinh vì người khác",
        options: ["optimism", "altruism", "pessimism", "realism"]
      },
      {
        prefix: "Like some kind of congressman Tale as old as ",
        target: "time",
        suffix: ".\n",
        hint: "Idiom: Chuyện xưa như trái đất, có từ muôn thuở",
        options: ["history", "earth", "time", "centuries"]
      }
    ],
    speakingIdioms: [
      {
        idiom: "Graveyard shift",
        meaning: "Ca làm việc đêm muộn (thường từ 11h đêm đến sáng sớm).",
        speakingContext: "IELTS Speaking Part 1 chủ đề Work & Routines.",
        sampleAnswer: "Working the graveyard shift can severely disrupt one's circadian rhythm and productivity."
      },
      {
        idiom: "Tale as old as time",
        meaning: "Câu chuyện xưa như trái đất, chân lý muôn thuở đã lặp đi lặp lại qua nhiều thế hệ.",
        speakingContext: "IELTS Speaking Part 3 khi bình luận về xung đột thế hệ hoặc thói quen con người.",
        sampleAnswer: "The generational gap regarding digital habits is a tale as old as time."
      },
      {
        idiom: "Root for someone",
        meaning: "Cổ vũ, ủng hộ nhiệt thành cho ai đó giành chiến thắng.",
        speakingContext: "IELTS Speaking Part 1 về chủ đề Thể thao hoặc Bạn bè.",
        sampleAnswer: "I was loudly rooting for the national football team during the championship finals."
      }
    ],
    vocabToSave: [
      { word: "Anti-hero", ipa: "/ˌæn.tiˈhɪə.rəʊ/", vi: "Nhân vật phản anh hùng (nhiều góc khuất)", example: "Modern television drama favors realistic anti-heroes over flawless protagonists." },
      { word: "Altruism", ipa: "/ˈæl.tru.ɪ.zəm/", vi: "Lòng vị tha, đức hy sinh không vụ lợi", example: "Genuine altruism is an essential human virtue." },
      { word: "Covert", ipa: "/ˈkəʊ.vɜːt/", vi: "Bí mật, che đậy kín đáo", example: "The agency conducted a covert investigation." },
      { word: "Exhausting", ipa: "/ɪɡˈzɔː.stɪŋ/", vi: "Làm kiệt sức, vô cùng mệt mỏi", example: "Preparing for professional examinations is an exhausting process." }
    ]
  },

  {
    id: "song-4",
    title: "Flowers",
    artist: "Miley Cyrus",
    genre: "Disco-Funk • Self-Love & Independence",
    youtubeId: "G7KNmW9a75Y",
    xpReward: 80,
    cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "We were good, we were gold, kinda dream that can't be ",
        target: "sold",
        suffix: ".\n",
        hint: "Phân từ hai: Bán đi, đánh đổi",
        options: ["bought", "sold", "lost", "broken"]
      },
      {
        prefix: "We were right 'til we weren't, built a home and watched it ",
        target: "burn",
        suffix: ".\n",
        hint: "Động từ nguyên mẫu: Bốc cháy, thiêu rụi",
        options: ["fall", "burn", "fade", "sink"]
      },
      {
        prefix: "I can buy myself ",
        target: "flowers",
        suffix: ".\n",
        hint: "Từ số nhiều: Những bông hoa tươi thắm",
        options: ["diamonds", "flowers", "dresses", "jewels"]
      },
      {
        prefix: "Write my name in the ",
        target: "sand",
        suffix: ".\n",
        hint: "Từ 4 chữ cái: Cát trên bãi biển",
        options: ["book", "wall", "sand", "sky"]
      },
      {
        prefix: "Talk to myself for hours, say things you don't ",
        target: "understand",
        suffix: ".\n",
        hint: "Động từ: Thấu hiểu, hiểu rõ",
        options: ["appreciate", "remember", "understand", "forgive"]
      },
      {
        prefix: "I can take myself dancing, and I can hold my own ",
        target: "hand",
        suffix: ".\n",
        hint: "Từ 4 chữ cái: Bàn tay",
        options: ["arm", "hand", "breath", "head"]
      },
      {
        prefix: "Yeah, I can love me better than you ",
        target: "can",
        suffix: ".\n",
        hint: "Trợ động từ chỉ khả năng",
        options: ["will", "can", "do", "should"]
      },
      {
        prefix: "Paint my nails cherry red, match the roses that you ",
        target: "left",
        suffix: ".\n",
        hint: "Quá khứ của leave: Để lại, bỏ lại",
        options: ["sent", "bought", "left", "threw"]
      }
    ],
    speakingIdioms: [
      {
        idiom: "Stand on one's own two feet",
        meaning: "Tự lập, tự đứng vững trên đôi chân của mình mà không phụ thuộc vào ai.",
        speakingContext: "IELTS Speaking Part 2 về bài học trưởng thành hoặc độc lập tài chính.",
        sampleAnswer: "Moving out for university taught me how to stand on my own two feet."
      },
      {
        idiom: "Blessing in disguise",
        meaning: "Trong cái rủi có cái may, điều tưởng chừng tồi tệ lại đem đến kết quả tốt.",
        speakingContext: "IELTS Speaking Part 2 khi kể về một thất bại nhưng mang lại bài học quý giá.",
        sampleAnswer: "Failing that job interview turned out to be a blessing in disguise because it led me to a better career."
      },
      {
        idiom: "Turn over a new leaf",
        meaning: "Bắt đầu lại một trang mới của cuộc đời với lối sống tích cực hơn.",
        speakingContext: "IELTS Speaking Part 1 về chủ đề thói quen hoặc kế hoạch năm mới.",
        sampleAnswer: "After undergoing a major lifestyle change, I decided to turn over a new leaf and prioritize fitness."
      }
    ],
    vocabToSave: [
      { word: "Independence", ipa: "/ˌɪn.dɪˈpen.dəns/", vi: "Sự độc lập, tự chủ", example: "Financial independence affords individuals greater personal freedom." },
      { word: "Resilience", ipa: "/rɪˈzɪl.jəns/", vi: "Khả năng phục hồi, kiên cường vượt nghịch cảnh", example: "Resilience is indispensable when navigating career setbacks." },
      { word: "Rejuvenate", ipa: "/rɪˈdʒuː.vən.eɪt/", vi: "Làm trẻ lại, tiếp thêm sinh khí mới", example: "Solo travel provides ample opportunity to rejuvenate one's mind." },
      { word: "Self-worth", ipa: "/ˌselfˈwɜːθ/", vi: "Giá trị bản thân, lòng tự trọng", example: "Never allow external criticism to diminish your self-worth." }
    ]
  },

  {
    id: "song-5",
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: "Dancehall-Pop • Socializing & Dating Vocab",
    youtubeId: "JGwWNGJdvx8",
    xpReward: 80,
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "The club isn't the best place to find a lover, so the bar is where I ",
        target: "go",
        suffix: ".\n",
        hint: "Động từ nguyên mẫu chỉ sự di chuyển",
        options: ["stay", "go", "wait", "hide"]
      },
      {
        prefix: "Me and my friends at the table doing shots, drinking fast and then we talk ",
        target: "slow",
        suffix: ".\n",
        hint: "Trạng từ trái nghĩa với fast: Chậm rãi",
        options: ["loud", "slow", "quiet", "much"]
      },
      {
        prefix: "Come over and start up a conversation with just me, and trust me I'll give it a ",
        target: "chance",
        suffix: ".\n",
        hint: "Cụm 'give it a chance': Cho một cơ hội thử sức",
        options: ["shot", "try", "chance", "moment"]
      },
      {
        prefix: "Took my hand, stop, put Van the Man on the ",
        target: "jukebox",
        suffix: ".\n",
        hint: "Danh từ: Máy phát nhạc tự động bằng tiền xu",
        options: ["radio", "stereo", "jukebox", "speaker"]
      },
      {
        prefix: "Girl, you know I want your love. Your love was handmade for somebody like ",
        target: "me",
        suffix: ".\n",
        hint: "Đại từ nhân xưng tân ngữ ngôi thứ nhất",
        options: ["you", "him", "me", "us"]
      },
      {
        prefix: "Come on now, follow my lead. I may be crazy, don't mind ",
        target: "me",
        suffix: ".\n",
        hint: "Cụm 'follow my lead': Hãy làm theo sự hướng dẫn của tôi",
        options: ["it", "them", "me", "that"]
      },
      {
        prefix: "I'm in love with the shape of you. We push and pull like a ",
        target: "magnet",
        suffix: " do.\n",
        hint: "Danh từ 6 chữ cái: Nam châm có sức hút đối nghịch",
        options: ["wave", "magnet", "mirror", "pendulum"]
      },
      {
        prefix: "Although my heart is falling too, I'm in love with your ",
        target: "body",
        suffix: ".\n",
        hint: "Từ 4 chữ cái: Thân hình, vóc dáng",
        options: ["smile", "soul", "body", "voice"]
      }
    ],
    speakingIdioms: [
      {
        idiom: "Break the ice",
        meaning: "Phá vỡ sự ngại ngùng ban đầu để bắt đầu cuộc trò chuyện tự nhiên.",
        speakingContext: "IELTS Speaking Part 1 & 2 khi nói về kỹ năng giao tiếp hoặc kết bạn mới.",
        sampleAnswer: "A lighthearted joke is often the most effective tool to break the ice in social gatherings."
      },
      {
        idiom: "Hit it off",
        meaning: "Hợp cạ ngay từ lần gặp đầu tiên, nhanh chóng trở thành bạn thân.",
        speakingContext: "IELTS Speaking Part 2 khi miêu tả một người bạn thân hoặc đồng nghiệp ăn ý.",
        sampleAnswer: "We met at an academic workshop and immediately hit it off due to our shared enthusiasm for AI."
      },
      {
        idiom: "Follow someone's lead",
        meaning: "Làm theo chỉ dẫn hoặc hành động gương mẫu của người khác.",
        speakingContext: "IELTS Speaking Part 3 về vai trò của người lãnh đạo hoặc người truyền cảm hứng.",
        sampleAnswer: "Team members are always willing to follow their manager's lead if clear guidance is provided."
      }
    ],
    vocabToSave: [
      { word: "Conversation", ipa: "/ˌkɒn.vəˈseɪ.ʃən/", vi: "Cuộc đối thoại, trò chuyện", example: "Engaging in daily conversations enhances oral fluency." },
      { word: "Spontaneous", ipa: "/spɒnˈteɪ.ni.əs/", vi: "Tự phát, ngẫu hứng không toan tính", example: "Spontaneous weekend getaways help alleviate workday fatigue." },
      { word: "Magnetism", ipa: "/ˈmæɡ.nə.tɪ.zəm/", vi: "Sức hút lôi cuốn, sự hấp dẫn đặc biệt", example: "Great public speakers possess remarkable personal magnetism." },
      { word: "Compatibility", ipa: "/kəmˌpæt.əˈbɪl.ə.ti/", vi: "Sự tương thích, hợp nhau", example: "Personality compatibility is essential in collaborative projects." }
    ]
  },

  {
    id: "song-6",
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Synthwave • Urban Atmosphere",
    youtubeId: "4NRXx6U8ABQ",
    xpReward: 80,
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "I've been on my own for long enough.\nMaybe you can show me how to ",
        target: "love",
        suffix: ", maybe.\n",
        hint: "Động từ 4 chữ cái: Yêu thương, rung động",
        options: ["live", "love", "smile", "care"]
      },
      {
        prefix: "I'm going through withdrawals.\nYou don't even have to do too much, you can turn me on with just a ",
        target: "touch",
        suffix: ", baby.\n",
        hint: "Từ 5 chữ cái: Cú chạm nhẹ, sự tiếp xúc",
        options: ["word", "glance", "touch", "smile"]
      },
      {
        prefix: "I look around and Sin City's cold and empty.\nNo one's around to ",
        target: "judge",
        suffix: " me.\n",
        hint: "Động từ: Phán xét, đánh giá định kiến",
        options: ["help", "judge", "save", "notice"]
      },
      {
        prefix: "I can't see clearly when you're ",
        target: "gone",
        suffix: ".\n",
        hint: "Tính từ: Đi vắng, rời xa",
        options: ["here", "near", "gone", "lost"]
      },
      {
        prefix: "I said, ooh, I'm blinded by the ",
        target: "lights",
        suffix: ".\n",
        hint: "Từ số nhiều tựa đề: Những ngọn đèn rực sáng",
        options: ["stars", "lights", "signs", "screens"]
      },
      {
        prefix: "No, I can't sleep until I feel your ",
        target: "touch",
        suffix: ".\n",
        hint: "Từ 5 chữ cái lặp lại: Cái chạm thân quen",
        options: ["warmth", "touch", "voice", "presence"]
      },
      {
        prefix: "I'm running out of time, 'cause I can see the sun light up the ",
        target: "sky",
        suffix: ".\n",
        hint: "Từ 3 chữ cái: Bầu trời buổi sớm",
        options: ["sea", "city", "sky", "road"]
      },
      {
        prefix: "So I hit the road in overdrive, baby. The city lights reflect my lonely ",
        target: "state",
        suffix: ".\n",
        hint: "Danh từ: Tâm trạng, trạng thái cảm xúc",
        options: ["mind", "state", "place", "hour"]
      }
    ],
    speakingIdioms: [
      {
        idiom: "Run out of time",
        meaning: "Hết thời gian, gấp gáp không kịp hoàn thành.",
        speakingContext: "IELTS Speaking Part 2 khi kể về việc hoàn thành bài tập dự án sát nút deadline.",
        sampleAnswer: "During the final exam, I was genuinely terrified that I would run out of time on the essay section."
      },
      {
        idiom: "In overdrive",
        meaning: "Hoạt động hết công suất, chạy với cường độ cực đại.",
        speakingContext: "IELTS Speaking Part 3 khi nói về thị trường lao động hoặc công nghệ tăng tốc.",
        sampleAnswer: "The digital economy went into overdrive during the pandemic as remote work surged."
      },
      {
        idiom: "See someone through",
        meaning: "Giúp đỡ, đồng hành cùng ai đó vượt qua giai đoạn khó khăn.",
        speakingContext: "IELTS Speaking Part 2 nói về sự ủng hộ của gia đình hoặc thầy cô.",
        sampleAnswer: "My mentor’s encouragement saw me through the most grueling phase of my thesis."
      }
    ],
    vocabToSave: [
      { word: "Withdrawal", ipa: "/wɪðˈdrɔː.əl/", vi: "Cảm giác bồn chồn trống vắng khi thiếu vắng điều gì", example: "He experienced caffeine withdrawal after quitting coffee cold turkey." },
      { word: "Overdrive", ipa: "/ˈəʊ.və.draɪv/", vi: "Trạng thái tăng tốc tối đa công suất", example: "My brain kicked into overdrive as the presentation began." },
      { word: "Nocturnal", ipa: "/nɒkˈtɜː.nəl/", vi: "Về đêm, hoạt động lúc trời tối", example: "Urban environments have distinct nocturnal lifestyles." },
      { word: "Desolation", ipa: "/ˌdes.əˈleɪ.ʃən/", vi: "Cảnh cô quạnh, vắng vẻ tiêu điều", example: "The deserted streets at 3 AM carried an eerie desolation." }
    ]
  },

  {
    id: "song-7",
    title: "As It Was",
    artist: "Harry Styles",
    genre: "Indie Pop • Nostalgia & Change",
    youtubeId: "P3cffdsEXXw",
    xpReward: 80,
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "Hold on, ring-ring, goes the telephone.\nBell rings, someone's at the ",
        target: "door",
        suffix: ".\n",
        hint: "Từ 4 chữ cái: Cánh cửa ra vào",
        options: ["gate", "window", "door", "desk"]
      },
      {
        prefix: "In this world, it's just us, you know it's not the same as it ",
        target: "was",
        suffix: ".\n",
        hint: "Quá khứ của to be ngôi thứ ba: Đã từng như vậy",
        options: ["is", "was", "will", "did"]
      },
      {
        prefix: "Answer the phone, Harry, you're no good ",
        target: "alone",
        suffix: ".\n",
        hint: "Tính từ: Một mình, đơn độc",
        options: ["awake", "alone", "afraid", "asleep"]
      },
      {
        prefix: "Why are you sitting at home on the ",
        target: "floor",
        suffix: "?\n",
        hint: "Từ 5 chữ cái: Sàn nhà",
        options: ["sofa", "bed", "floor", "chair"]
      },
      {
        prefix: "What kind of pills are you on? Ringing the bell and nobody's ",
        target: "coming",
        suffix: ".\n",
        hint: "Dạng V-ing: Đang đến, đang tới",
        options: ["running", "calling", "coming", "waiting"]
      },
      {
        prefix: "Go home, get ahead, light-speed internet.\nJust try not to get too ",
        target: "attached",
        suffix: ".\n",
        hint: "Tính từ Band 7.0: Quá gắn bó, quá lụy vào điều gì",
        options: ["distracted", "attached", "confused", "upset"]
      },
      {
        prefix: "You know it's not the same as it was, in this world, it's just ",
        target: "us",
        suffix: ".\n",
        hint: "Đại từ tân ngữ chỉ 'chúng ta'",
        options: ["me", "them", "us", "you"]
      },
      {
        prefix: "Life evolves relentlessly, leaving our past memories ",
        target: "behind",
        suffix: ".\n",
        hint: "Giới từ: Ở lại phía sau",
        options: ["ahead", "behind", "away", "along"]
      }
    ],
    speakingIdioms: [
      {
        idiom: "Not the same as it was",
        meaning: "Không còn như xưa nữa, mọi sự đã đổi thay.",
        speakingContext: "IELTS Speaking Part 3 khi so sánh cuộc sống ngày xưa và thời đại số ngày nay.",
        sampleAnswer: "With the rise of smartphones, traditional family dinners are simply not the same as they were."
      },
      {
        idiom: "Get ahead",
        meaning: "Tiến bộ, gặt hái thành công và vươn lên vị trí dẫn đầu trong sự nghiệp.",
        speakingContext: "IELTS Speaking Part 1 & 3 về mục tiêu công việc hoặc học tập.",
        sampleAnswer: "Mastering English fluency is crucial if you genuinely want to get ahead in multinational corporations."
      },
      {
        idiom: "Take something with a grain of salt",
        meaning: "Tiếp nhận thông tin có sự chọn lọc, không tin tưởng 100% ngay.",
        speakingContext: "IELTS Speaking Part 3 về mạng xã hội và tin tức trực tuyến.",
        sampleAnswer: "Young internet users should always take viral TikTok trends with a grain of salt."
      }
    ],
    vocabToSave: [
      { word: "Nostalgia", ipa: "/nɒsˈtæl.dʒə/", vi: "Nỗi hoài niệm về quá khứ", example: "Old pop melodies invoke deep feelings of nostalgia." },
      { word: "Relentless", ipa: "/rɪˈlent.ləs/", vi: "Không ngừng nghỉ, dồn dập quyết liệt", example: "Technological progress moves forward at a relentless pace." },
      { word: "Attached", ipa: "/əˈtætʃt/", vi: "Gắn bó tha thiết, quyến luyến", example: "Children often become deeply attached to their childhood toys." },
      { word: "Transformation", ipa: "/ˌtræns.fəˈmeɪ.ʃən/", vi: "Sự chuyển biến toàn diện", example: "The metropolitan area underwent an astounding digital transformation." }
    ]
  },

  {
    id: "song-8",
    title: "Cruel Summer",
    artist: "Taylor Swift",
    genre: "Electropop • High-intensity Emotion",
    youtubeId: "ic8j13piAhQ",
    xpReward: 80,
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "Fever dream high in the quiet of the night, you know that I ",
        target: "caught",
        suffix: " it.\n",
        hint: "Quá khứ của catch: Bắt lấy, cảm nhận được",
        options: ["missed", "caught", "lost", "kept"]
      },
      {
        prefix: "Bad, bad boy, shiny toy with a price, you know that I ",
        target: "bought",
        suffix: " it.\n",
        hint: "Quá khứ của buy: Đã mua, đã trả giá",
        options: ["sold", "bought", "broke", "took"]
      },
      {
        prefix: "Killing me slow, out the window, I'm always waiting for you to be ",
        target: "waiting",
        suffix: " below.\n",
        hint: "Dạng V-ing: Đang chờ đợi",
        options: ["standing", "waiting", "looking", "calling"]
      },
      {
        prefix: "Devils roll the dice, angels roll their ",
        target: "eyes",
        suffix: ".\n",
        hint: "Idiom 'roll one's eyes': Đảo mắt tỏ vẻ chán nản",
        options: ["wings", "hands", "eyes", "tears"]
      },
      {
        prefix: "What doesn't kill me makes me want you ",
        target: "more",
        suffix: ".\n",
        hint: "Từ so sánh hơn: Nhiều hơn nữa",
        options: ["less", "more", "now", "here"]
      },
      {
        prefix: "And it's new, the shape of your body, it's ",
        target: "blue",
        suffix: ", the feeling I've got.\n",
        hint: "Từ 4 chữ cái chỉ màu xanh/nỗi u sầu",
        options: ["red", "blue", "gold", "dark"]
      },
      {
        prefix: "And it's a cruel summer, it's cool, that's what I tell 'em, no ",
        target: "rules",
        suffix: " in breakable heaven.\n",
        hint: "Từ số nhiều: Những quy tắc, điều luật",
        options: ["fears", "rules", "dreams", "hopes"]
      },
      {
        prefix: "I scream for whatever it's worth: 'I love you, ain't that the ",
        target: "worst",
        suffix: " thing you ever heard?'\n",
        hint: "Tính từ so sánh nhất của bad: Tồi tệ nhất",
        options: ["best", "worst", "first", "last"]
      }
    ],
    speakingIdioms: [
      {
        idiom: "Roll one's eyes",
        meaning: "Đảo tròn mắt tỏ vẻ ngao ngán, bất lực hoặc không đồng tình.",
        speakingContext: "IELTS Speaking Part 1 miêu tả cảm xúc hoặc phản ứng của bạn trước tin đồn vô lý.",
        sampleAnswer: "Whenever colleagues repeat baseless rumors, I simply roll my eyes and focus on my duties."
      },
      {
        idiom: "For whatever it's worth",
        meaning: "Dù điều này có quan trọng hay hữu ích với bạn hay không (thể hiện sự chân thành khi góp ý).",
        speakingContext: "IELTS Speaking Part 3 khi đưa ra quan điểm cá nhân khiêm tốn.",
        sampleAnswer: "For whatever it's worth, I firmly believe that prioritizing mental wellness yields better academic scores."
      },
      {
        idiom: "Fever dream",
        meaning: "Trải nghiệm kỳ lạ, dồn dập và choáng ngợp như một cơn mê sảng.",
        speakingContext: "IELTS Speaking Part 2 kể về một chuyến đi hoặc sự kiện đầy kịch tính.",
        sampleAnswer: "My first international business trip felt like an exhilarating fever dream from start to finish."
      }
    ],
    vocabToSave: [
      { word: "Unbreakable", ipa: "/ʌnˈbreɪ.kə.bəl/", vi: "Không thể phá vỡ, kiên định", example: "The team forged an unbreakable camaraderie through tough trials." },
      { word: "Vulnerability", ipa: "/ˌvʌl.nər.əˈbɪl.ə.ti/", vi: "Sự dễ bị tổn thương, yếu mềm", example: "Embracing vulnerability is a sign of emotional maturity." },
      { word: "Intoxication", ipa: "/ɪnˌtɒk.sɪˈkeɪ.ʃən/", vi: "Cảm giác say sưa ngây ngất", example: "The intoxication of initial success can cloud long-term judgment." },
      { word: "Turbulent", ipa: "/ˈtɜː.bjə.lənt/", vi: "Nhiều sóng gió, biến động dữ dội", example: "The aviation industry endured a turbulent financial quarter." }
    ]
  },

  {
    id: "song-9",
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    genre: "Piano Ballad • Emotional Vulnerability",
    youtubeId: "zABLecsR5UE",
    xpReward: 80,
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "I'm going under and this time I fear there's no one to ",
        target: "save",
        suffix: " me.\n",
        hint: "Động từ: Cứu giúp, giải thoát",
        options: ["hear", "save", "stop", "see"]
      },
      {
        prefix: "This all or nothing really got a way of driving me ",
        target: "crazy",
        suffix: ".\n",
        hint: "Tính từ: Phát cuồng, mất kiên nhẫn",
        options: ["wild", "crazy", "tired", "busy"]
      },
      {
        prefix: "I need somebody to heal, somebody to know, somebody to ",
        target: "have",
        suffix: ".\n",
        hint: "Động từ: Có được, sở hữu",
        options: ["hold", "have", "love", "meet"]
      },
      {
        prefix: "Somebody to hold, it's easy to say, but it's never the ",
        target: "same",
        suffix: ".\n",
        hint: "Từ 4 chữ cái: Giống nhau, như cũ",
        options: ["case", "true", "same", "easy"]
      },
      {
        prefix: "I guess I kinda liked the way you numbed all the ",
        target: "pain",
        suffix: ".\n",
        hint: "Từ 4 chữ cái: Nỗi đau đớn, thương tổn",
        options: ["rain", "pain", "fear", "loss"]
      },
      {
        prefix: "Now the day bleeds into nightfall, and you're not here to get me through it ",
        target: "all",
        suffix: ".\n",
        hint: "Từ 3 chữ cái: Tất cả mọi chuyện",
        options: ["out", "now", "all", "far"]
      },
      {
        prefix: "I let my guard down, and then you pulled the ",
        target: "rug",
        suffix: ".\n",
        hint: "Idiom 'pull the rug': Đột ngột rút đi chỗ dựa",
        options: ["rope", "rug", "door", "curtain"]
      },
      {
        prefix: "I was getting kinda used to being someone you ",
        target: "loved",
        suffix: ".\n",
        hint: "Quá khứ của love tựa đề: Đã từng yêu thương",
        options: ["knew", "loved", "sought", "helped"]
      }
    ],
    speakingIdioms: [
      {
        idiom: "Let one's guard down",
        meaning: "Hạ thấp sự phòng thủ, mở lòng tin tưởng và chia sẻ tâm sự.",
        speakingContext: "IELTS Speaking Part 2 về việc chia sẻ cảm xúc thật với người thân tín.",
        sampleAnswer: "It took me months to let my guard down and confide in my university counselor."
      },
      {
        idiom: "Pull the rug out from under someone",
        meaning: "Bất ngờ rút đi sự hỗ trợ, khiến ai đó lâm vào cảnh hụt hẫng bơ vơ.",
        speakingContext: "IELTS Speaking Part 3 khi thảo luận về biến động kinh tế hoặc bất ổn thị trường.",
        sampleAnswer: "Sudden policy shifts can pull the rug out from under early-stage startups."
      },
      {
        idiom: "Drive someone crazy",
        meaning: "Làm ai đó vô cùng bực bội, phát điên lên vì khó chịu.",
        speakingContext: "IELTS Speaking Part 1 về ô nhiễm tiếng ồn đô thị hoặc tắc đường.",
        sampleAnswer: "Constant honking during rush hours drives me crazy whenever I commute through downtown."
      }
    ],
    vocabToSave: [
      { word: "Numb", ipa: "/nʌm/", vi: "Làm tê dại, giảm bớt đau đớn cảm giác", example: "Cold compress helps numb dental pain." },
      { word: "Vulnerable", ipa: "/ˈvʌl.nər.ə.bəl/", vi: "Dễ bị tổn thương", example: "Small businesses are particularly vulnerable during financial recessions." },
      { word: "Reassurance", ipa: "/ˌriː.əˈʃɔː.rəns/", vi: "Sự bảo đảm an lòng, lời động viên trấn an", example: "Patients require constant reassurance from medical staff." },
      { word: "Solitude", ipa: "/ˈsɒl.ɪ.tʃuːd/", vi: "Sự thanh tịnh một mình (tích cực)", example: "He sought solace in the quiet solitude of the mountain cabin." }
    ]
  },

  {
    id: "song-10",
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    genre: "Pop-Punk • Fast-paced Relationship Dilemma",
    youtubeId: "b73BI9eUkjM",
    xpReward: 80,
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&auto=format&fit=crop&q=60",
    lyricsGaps: [
      {
        prefix: "I do the same thing I told you that I never ",
        target: "would",
        suffix: ".\n",
        hint: "Trợ động từ quá khứ: Đã hứa sẽ không làm",
        options: ["could", "would", "should", "might"]
      },
      {
        prefix: "I told you I'd change, even when I knew I never ",
        target: "could",
        suffix: ".\n",
        hint: "Trợ động từ: Không thể làm được",
        options: ["did", "could", "tried", "saw"]
      },
      {
        prefix: "Know that I can't find nobody else as good as ",
        target: "you",
        suffix: ".\n",
        hint: "Đại từ nhân xưng: Tốt như chính bạn",
        options: ["them", "you", "me", "her"]
      },
      {
        prefix: "I need you to stay, need you to ",
        target: "stay",
        suffix: ", hey.\n",
        hint: "Động từ tựa đề: Ở lại bên cạnh",
        options: ["wait", "stay", "come", "smile"]
      },
      {
        prefix: "I get drunk, wake up, I'm wasted ",
        target: "still",
        suffix: ".\n",
        hint: "Trạng từ: Vẫn còn đang say",
        options: ["now", "still", "here", "yet"]
      },
      {
        prefix: "I realize the time that I wasted ",
        target: "here",
        suffix: ".\n",
        hint: "Trạng từ chỉ nơi chốn: Tại nơi này",
        options: ["there", "here", "away", "back"]
      },
      {
        prefix: "I feel like I can't breathe when you're not by my ",
        target: "side",
        suffix: ".\n",
        hint: "Cụm 'by my side': Ở cạnh bên tôi",
        options: ["door", "side", "hand", "arms"]
      },
      {
        prefix: "Tell me that you'll stay and heal this broken heart of ",
        target: "mine",
        suffix: ".\n",
        hint: "Đại từ sở hữu: Của chính tôi",
        options: ["ours", "mine", "yours", "his"]
      }
    ],
    speakingIdioms: [
      {
        idiom: "By someone's side",
        meaning: "Sát cánh, kề vai đồng hành cùng ai đó qua mọi hoàn cảnh.",
        speakingContext: "IELTS Speaking Part 2 về người bạn trung thành hoặc gia đình.",
        sampleAnswer: "My parents remained steadfastly by my side when I took the risk to launch my own project."
      },
      {
        idiom: "Live up to a promise",
        meaning: "Giữ đúng lời hứa, thực hiện trọn vẹn cam kết của mình.",
        speakingContext: "IELTS Speaking Part 3 về chữ tín và tính trách nhiệm trong công việc.",
        sampleAnswer: "Corporate brands must live up to their promises regarding environmental sustainability."
      },
      {
        idiom: "Catch someone red-handed",
        meaning: "Bắt quả tang ai đó đang làm điều sai trái ngay tại trận.",
        speakingContext: "IELTS Speaking Part 1 & 2 khi kể về kỷ niệm thời thơ ấu hoặc tình huống bất ngờ.",
        sampleAnswer: "My mother caught me red-handed sneaking snacks from the kitchen late at night."
      }
    ],
    vocabToSave: [
      { word: "Steadfastly", ipa: "/ˈsted.fɑːst.li/", vi: "Kiên định, không hề dao động", example: "She worked steadfastly towards achieving her dream score." },
      { word: "Commitment", ipa: "/kəˈmɪt.mənt/", vi: "Sự cam kết, gắn kết nghiêm túc", example: "Achieving IELTS 8.0 demands unyielding commitment." },
      { word: "Remorse", ipa: "/rɪˈmɔːs/", vi: "Sự ăn năn, hối hận sâu sắc", example: "He expressed genuine remorse for his hasty decisions." },
      { word: "Irreplaceable", ipa: "/ˌɪr.ɪˈpleɪ.sə.bəl/", vi: "Không thể thay thế được", example: "Personal trust is an irreplaceable element in client partnerships." }
    ]
  }
];
