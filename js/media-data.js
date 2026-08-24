// Complete Media Database for Mahmoud Khattab Gallery
// 41 Photos + 5 Tour Videos (Total 46 Media Items)

const MEDIA_GALLERY = [
  // Videos (5 Tour Clips)
  {
    type: 'video',
    id: 'vid-1',
    src: 'assets/videos/video_01.mp4',
    poster: 'assets/photos/photo_26.jpg',
    category: 'videos',
    title: {
      ru: 'Экскурсия у Пирамид Гизы с Махмудом Хаттабом',
      en: 'Giza Pyramids Tour with Mahmoud Khattab',
      zh: '马哈茂德与客人在吉萨金字塔实景游览'
    },
    location: {
      ru: 'Гиза, Египет',
      en: 'Giza, Egypt',
      zh: '埃及吉萨'
    }
  },
  {
    type: 'video',
    id: 'vid-2',
    src: 'assets/videos/video_02.mp4',
    poster: 'assets/photos/photo_04.jpg',
    category: 'videos',
    title: {
      ru: 'Индивидуальный тур по древним храмам Луксора',
      en: 'Private Guided Tour in Ancient Luxor Temples',
      zh: '卢克索古神庙私人深度导览实录'
    },
    location: {
      ru: 'Луксор, Египет',
      en: 'Luxor, Egypt',
      zh: '埃及卢克索'
    }
  },
  {
    type: 'video',
    id: 'vid-3',
    src: 'assets/videos/video_03.mp4',
    poster: 'assets/photos/photo_13.jpg',
    category: 'videos',
    title: {
      ru: 'Экспедиция в Белую Пустыню и бедуинский вечер',
      en: 'White Desert Safari & Bedouin Experience',
      zh: '白沙漠越野探险与贝都因篝火体验'
    },
    location: {
      ru: 'Белая Пустыня, Сахара',
      en: 'White Desert, Sahara',
      zh: '撒哈拉白沙漠'
    }
  },
  {
    type: 'video',
    id: 'vid-4',
    src: 'assets/videos/video_04.mp4',
    poster: 'assets/photos/photo_05.jpg',
    category: 'videos',
    title: {
      ru: 'Прогулка по колоссам Карнакского храма',
      en: 'Walking through Colossi of Karnak Temple',
      zh: '卡纳克巨柱大厅实拍'
    },
    location: {
      ru: 'Карнак, Луксор',
      en: 'Karnak, Luxor',
      zh: '卢克索卡纳克'
    }
  },
  {
    type: 'video',
    id: 'vid-5',
    src: 'assets/videos/video_05.mp4',
    poster: 'assets/photos/photo_23.jpg',
    category: 'videos',
    title: {
      ru: 'Путешествие по Нилу и колорит Асуана',
      en: 'Nile River Boat Journey & Aswan Highlights',
      zh: '尼罗河泛舟与阿斯旺风情'
    },
    location: {
      ru: 'Асуан и Нил',
      en: 'Aswan & River Nile',
      zh: '阿斯旺尼罗河'
    }
  },

  // Photos (41 Full Gallery Photos)
  {
    type: 'photo',
    id: 'pic-01',
    src: 'assets/photos/photo_01.jpg',
    thumb: 'assets/photos/photo_01.jpg',
    category: 'pyramids',
    title: {
      ru: 'С гостями у Великой пирамиды Хеопса',
      en: 'With guests beside the Great Pyramid of Giza',
      zh: '与客人相聚吉萨大金字塔旁'
    },
    location: { ru: 'Плато Гиза', en: 'Giza Plateau', zh: '吉萨高地' }
  },
  {
    type: 'photo',
    id: 'pic-02',
    src: 'assets/photos/photo_02.jpg',
    thumb: 'assets/photos/photo_02.jpg',
    category: 'cairo',
    title: {
      ru: 'Экскурсия в Национальном Музее Цивилизации (NMEC)',
      en: 'Tour at National Museum of Egyptian Civilization',
      zh: '埃及文明国家博物馆深度讲解'
    },
    location: { ru: 'Фустат, Каир', en: 'Fustat, Cairo', zh: '开罗福斯塔特' }
  },
  {
    type: 'photo',
    id: 'pic-03',
    src: 'assets/photos/photo_03.jpg',
    thumb: 'assets/photos/photo_03.jpg',
    category: 'safari',
    title: {
      ru: 'Бескрайние просторы Белой пустыни',
      en: 'Endless expanses of the White Desert',
      zh: '辽阔壮美的撒哈拉白沙漠'
    },
    location: { ru: 'Белая Пустыня', en: 'White Desert', zh: '白沙漠' }
  },
  {
    type: 'photo',
    id: 'pic-04',
    src: 'assets/photos/photo_04.jpg',
    thumb: 'assets/photos/photo_04.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'Путешествие по храмам Верхнего Египта',
      en: 'A journey through Upper Egypt Temples',
      zh: '探访上埃及神庙古迹'
    },
    location: { ru: 'Асуан', en: 'Aswan', zh: '阿斯旺' }
  },
  {
    type: 'photo',
    id: 'pic-05',
    src: 'assets/photos/photo_05.jpg',
    thumb: 'assets/photos/photo_05.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'Читаем историю на стенах древнего храма',
      en: 'Reading history on ancient temple walls',
      zh: '从神庙墙壁读懂历史'
    },
    location: { ru: 'Эдфу / Верхний Египет', en: 'Edfu / Upper Egypt', zh: '埃德富/上埃及' }
  },
  {
    type: 'photo',
    id: 'pic-06',
    src: 'assets/photos/photo_06.jpg',
    thumb: 'assets/photos/photo_06.jpg',
    category: 'safari',
    title: {
      ru: 'Живые моменты пустынного приключения',
      en: 'Real moments from a desert adventure',
      zh: '沙漠旅途中的真实瞬间'
    },
    location: { ru: 'Египетская пустыня', en: 'Egyptian Desert', zh: '埃及沙漠' }
  },
  {
    type: 'photo',
    id: 'pic-07',
    src: 'assets/photos/photo_07.jpg',
    thumb: 'assets/photos/photo_07.jpg',
    category: 'pyramids',
    title: {
      ru: 'День у пирамид вместе с гостями',
      en: 'A day at the pyramids with our guests',
      zh: '与客人共游金字塔'
    },
    location: { ru: 'Плато Гиза', en: 'Giza Plateau', zh: '吉萨高地' }
  },
  {
    type: 'photo',
    id: 'pic-08',
    src: 'assets/photos/photo_08.jpg',
    thumb: 'assets/photos/photo_08.jpg',
    category: 'cairo',
    title: {
      ru: 'Небольшая пауза между открытиями',
      en: 'A relaxed break between discoveries',
      zh: '旅途中的轻松时刻'
    },
    location: { ru: 'Каир, Египет', en: 'Cairo, Egypt', zh: '埃及开罗' }
  },
  {
    type: 'photo',
    id: 'pic-09',
    src: 'assets/photos/photo_09.jpg',
    thumb: 'assets/photos/photo_09.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'Внутри расписной древней гробницы',
      en: 'Inside an ancient painted tomb',
      zh: '走进彩绘古墓'
    },
    location: { ru: 'Западный берег Луксора', en: 'Luxor West Bank', zh: '卢克索西岸' }
  },
  {
    type: 'photo',
    id: 'pic-10',
    src: 'assets/photos/photo_10.jpg',
    thumb: 'assets/photos/photo_10.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'История оживает в рассказе гида',
      en: 'History brought to life by your guide',
      zh: '让历史在讲解中鲜活起来'
    },
    location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' }
  },
  {
    type: 'photo',
    id: 'pic-11',
    src: 'assets/photos/photo_11.jpg',
    thumb: 'assets/photos/photo_11.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'Вместе во дворе древнего храма',
      en: 'Together in an ancient temple courtyard',
      zh: '共游古老神庙庭院'
    },
    location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' }
  },
  {
    type: 'photo',
    id: 'pic-12',
    src: 'assets/photos/photo_12.jpg',
    thumb: 'assets/photos/photo_12.jpg',
    category: 'pyramids',
    title: {
      ru: 'Между памятниками древнего Египта',
      en: 'Between the monuments of ancient Egypt',
      zh: '穿行在古埃及遗迹之间'
    },
    location: { ru: 'Гиза / Мемфис', en: 'Giza / Memphis', zh: '吉萨/孟菲斯' }
  },
  {
    type: 'photo',
    id: 'pic-13',
    src: 'assets/photos/photo_13.jpg',
    thumb: 'assets/photos/photo_13.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'У ворот древнего храма',
      en: 'At the gates of an ancient temple',
      zh: '古老神庙门前'
    },
    location: { ru: 'Луксор', en: 'Luxor', zh: '卢克索' }
  },
  {
    type: 'photo',
    id: 'pic-14',
    src: 'assets/photos/photo_14.jpg',
    thumb: 'assets/photos/photo_14.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'Среди колонн и тысячелетних историй',
      en: 'Among columns and stories thousands of years old',
      zh: '在古老石柱与千年故事之间'
    },
    location: { ru: 'Карнак, Луксор', en: 'Karnak, Luxor', zh: '卢克索卡纳克' }
  },
  {
    type: 'photo',
    id: 'pic-15',
    src: 'assets/photos/photo_16.jpg',
    thumb: 'assets/photos/photo_16.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'Встреча с колоссами Рамсеса II в Абу-Симбеле',
      en: 'Meeting the colossi of Ramesses II at Abu Simbel',
      zh: '阿布辛贝拉美西斯二世神庙前的珍贵回忆'
    },
    location: { ru: 'Абу-Симбел', en: 'Abu Simbel', zh: '阿布辛贝' }
  },
  {
    type: 'photo',
    id: 'pic-17',
    src: 'assets/photos/photo_17.jpg',
    thumb: 'assets/photos/photo_17.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'Истории, высеченные в камне',
      en: 'Stories carved and painted in stone',
      zh: '刻画在石壁上的故事'
    },
    location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' }
  },
  {
    type: 'photo',
    id: 'pic-19',
    src: 'assets/photos/photo_19.jpg',
    thumb: 'assets/photos/photo_19.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'Следующая глава путешествия — спальный поезд',
      en: 'The next chapter of the journey — Sleeper Train',
      zh: '开启旅程的下一站——卧铺列车'
    },
    location: { ru: 'Железнодорожный вокзал Луксора', en: 'Luxor Railway Station', zh: '卢克索火车站' }
  },
  {
    type: 'photo',
    id: 'pic-20',
    src: 'assets/photos/photo_20.jpg',
    thumb: 'assets/photos/photo_20.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'Террасы царицы Хатшепсут',
      en: 'The terraces of Queen Hatshepsut',
      zh: '哈特谢普苏特女王神庙台地'
    },
    location: { ru: 'Дейр-эль-Бахри, Луксор', en: 'Deir el-Bahari, Luxor', zh: '卢克索代尔巴哈里' }
  },
  {
    type: 'photo',
    id: 'pic-21',
    src: 'assets/photos/photo_21.jpg',
    thumb: 'assets/photos/photo_21.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'В священной комнате древнего храма',
      en: 'Inside a sacred ancient temple chamber',
      zh: '走进古老神庙的圣室'
    },
    location: { ru: 'Верхний Египет', en: 'Upper Egypt', zh: '上埃及' }
  },
  {
    type: 'photo',
    id: 'pic-22',
    src: 'assets/photos/photo_22.jpg',
    thumb: 'assets/photos/photo_22.jpg',
    category: 'cairo',
    title: {
      ru: 'Средиземноморский день в Александрии',
      en: 'A Mediterranean day in Alexandria',
      zh: '亚历山大的地中海时光'
    },
    location: { ru: 'Мост Стэнли, Александрия', en: 'Stanley Bridge, Alexandria', zh: '亚历山大斯坦利桥' }
  },
  {
    type: 'photo',
    id: 'pic-23',
    src: 'assets/photos/photo_23.jpg',
    thumb: 'assets/photos/photo_23.jpg',
    category: 'cairo',
    title: {
      ru: 'На стенах цитадели у моря',
      en: 'On the citadel walls by the sea',
      zh: '海边城堡之上'
    },
    location: { ru: 'Цитадель Кайт-Бей, Александрия', en: 'Qaitbay Citadel, Alexandria', zh: '亚历山大盖特贝城堡' }
  },
  {
    type: 'photo',
    id: 'pic-24',
    src: 'assets/photos/photo_24.jpg',
    thumb: 'assets/photos/photo_24.jpg',
    category: 'cairo',
    title: {
      ru: 'Прогулка по колоритному восточному рынку',
      en: 'Walking through a colorful Egyptian market',
      zh: '漫步充满色彩的埃及市集'
    },
    location: { ru: 'Хан эль-Халили, Каир', en: 'Khan el-Khalili, Cairo', zh: '开罗汗·哈利利' }
  },
  {
    type: 'photo',
    id: 'pic-25',
    src: 'assets/photos/photo_25.jpg',
    thumb: 'assets/photos/photo_25.jpg',
    category: 'cairo',
    title: {
      ru: 'Личная экскурсия среди шедевров фараонов',
      en: 'A private tour among pharaonic masterpieces',
      zh: '在法老珍宝间的私人讲解'
    },
    location: { ru: 'Египетский музей, Каир', en: 'Egyptian Museum, Cairo', zh: '开罗埃及博物馆' }
  },
  {
    type: 'photo',
    id: 'pic-26',
    src: 'assets/photos/photo_26.jpg',
    thumb: 'assets/photos/photo_26.jpg',
    category: 'pyramids',
    title: {
      ru: 'Частная экскурсия у Сфинкса и пирамид',
      en: 'A private visit to the Sphinx and pyramids',
      zh: '狮身人面像与金字塔私人之旅'
    },
    location: { ru: 'Плато Гиза', en: 'Giza Plateau', zh: '吉萨高地' }
  },
  {
    type: 'photo',
    id: 'pic-27',
    src: 'assets/photos/photo_27.jpg',
    thumb: 'assets/photos/photo_27.jpg',
    category: 'cairo',
    title: {
      ru: 'Разговор о римской Александрии',
      en: 'Discovering Roman Alexandria',
      zh: '探寻罗马时代的亚历山大'
    },
    location: { ru: 'Ком-эль-Дикка, Александрия', en: 'Kom el-Dikka, Alexandria', zh: '亚历山大考姆迪卡' }
  },
  {
    type: 'photo',
    id: 'pic-36',
    src: 'assets/hero/hero-desert-1920.jpg',
    thumb: 'assets/hero/hero-desert-800.jpg',
    category: 'pyramids',
    title: {
      ru: 'Панорама пирамид и пустыни на рассвете',
      en: 'Panoramic view of Pyramids and Sahara Desert',
      zh: '吉萨金字塔与大漠日出全景'
    },
    location: { ru: 'Плато Гиза', en: 'Giza Plateau', zh: '吉萨高地' }
  },
  {
    type: 'photo',
    id: 'pic-37',
    src: 'assets/hero/hero-horse-1920.jpg',
    thumb: 'assets/hero/hero-horse-800.jpg',
    category: 'pyramids',
    title: {
      ru: 'Арабский скакун перед Великой пирамидой',
      en: 'Arabian horse in front of the Great Pyramid',
      zh: '大金字塔前的阿拉伯骏马'
    },
    location: { ru: 'Гиза', en: 'Giza', zh: '吉萨' }
  },
  {
    type: 'photo',
    id: 'pic-38',
    src: 'assets/hero/hero-komombo-1920.jpg',
    thumb: 'assets/hero/hero-komombo-800.jpg',
    category: 'luxor-aswan',
    title: {
      ru: 'Монументальные колонны храма Ком-Омбо',
      en: 'Monumental columns of Kom Ombo Temple',
      zh: '考姆翁布双神庙雄伟石柱'
    },
    location: { ru: 'Ком-Омбо, Асуан', en: 'Kom Ombo, Aswan', zh: '阿斯旺考姆翁布' }
  },
  {
    type: 'photo',
    id: 'pic-39',
    src: 'assets/hero/hero-nile-1920.jpg',
    thumb: 'assets/hero/hero-nile-800.jpg',
    category: 'cairo',
    title: {
      ru: 'Набережная Нила в сердце Каира',
      en: 'Nile River Promenade in the Heart of Cairo',
      zh: '开罗市中心尼罗河畔风光'
    },
    location: { ru: 'Каир, Египет', en: 'Cairo, Egypt', zh: '开罗' }
  },
  {
    type: 'photo',
    id: 'pic-40',
    src: 'assets/hero/hero-tourist-1920.jpg',
    thumb: 'assets/hero/hero-tourist-800.jpg',
    category: 'safari',
    title: {
      ru: 'Эмоции и драйв в сердце Сахары',
      en: 'Pure joy and thrill in the heart of the Sahara',
      zh: '撒哈拉沙漠深处的欢畅时刻'
    },
    location: { ru: 'Белая Пустыня', en: 'White Desert', zh: '白沙漠' }
  },
  {
    type: 'photo',
    id: 'pic-41',
    src: '1.jpg',
    thumb: '1.jpg',
    category: 'cairo',
    title: {
      ru: 'Махмуд Хаттаб с гостями в путешествии',
      en: 'Mahmoud Khattab guiding guests in Egypt',
      zh: '马哈茂德带领游客游览'
    },
    location: { ru: 'Каир / Гиза', en: 'Cairo / Giza', zh: '开罗/吉萨' }
  },
  {
    type: 'photo',
    id: 'pic-43',
    src: 'assets/photos/Main-Mahmoud.jpeg',
    thumb: 'assets/photos/Main-Mahmoud.jpeg',
    category: 'cairo',
    title: {
      ru: 'Ваш персональный гид — Махмуд Хаттаб',
      en: 'Your Private Guide — Mahmoud Khattab',
      zh: '您的私人专属导游——马哈茂德'
    },
    location: { ru: 'Каир, Египет', en: 'Cairo, Egypt', zh: '埃及开罗' }
  }
,

  // Instagram Photos from @mahmoud_makai (43 Items)
  {
    "type": "photo",
    "id": "ig-01",
    "src": "assets/photos/instagram_B8MH8MPn8Ys.jpg",
    "thumb": "assets/photos/instagram_B8MH8MPn8Ys.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Панорама пирамид Гизы с нашими гостями",
      "en": "Panoramic view of Giza Pyramids with travelers",
      "zh": "与客人在吉萨金字塔全景合影"
    },
    "location": {
      "ru": "Плато Гиза",
      "en": "Giza Plateau",
      "zh": "吉萨高地"
    }
  },
  {
    "type": "photo",
    "id": "ig-02",
    "src": "assets/photos/instagram_BeAUziGn9Xk.jpg",
    "thumb": "assets/photos/instagram_BeAUziGn9Xk.jpg",
    "category": "cairo",
    "title": {
      "ru": "Вечерняя набережная Нила в Каире",
      "en": "Evening Nile promenade in Cairo",
      "zh": "开罗尼罗河迷人夜色"
    },
    "location": {
      "ru": "Каир",
      "en": "Cairo",
      "zh": "开罗"
    }
  },
  {
    "type": "photo",
    "id": "ig-03",
    "src": "assets/photos/instagram_BezyK8LnNOv.jpg",
    "thumb": "assets/photos/instagram_BezyK8LnNOv.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Древние колоссы Карнакского храма",
      "en": "Ancient Colossi of Karnak Temple",
      "zh": "卡纳克神庙巨柱群"
    },
    "location": {
      "ru": "Луксор",
      "en": "Luxor",
      "zh": "卢克索"
    }
  },
  {
    "type": "photo",
    "id": "ig-04",
    "src": "assets/photos/instagram_Bh1zv3zgK2s.jpg",
    "thumb": "assets/photos/instagram_Bh1zv3zgK2s.jpg",
    "category": "safari",
    "title": {
      "ru": "Бескрайние дюны и закат в Сахаре",
      "en": "Endless dunes and sunset in the Sahara",
      "zh": "撒哈拉大漠绝美落日"
    },
    "location": {
      "ru": "Белая Пустыня",
      "en": "White Desert",
      "zh": "白沙漠"
    }
  },
  {
    "type": "photo",
    "id": "ig-05",
    "src": "assets/photos/instagram_Bh30QT9AWCU.jpg",
    "thumb": "assets/photos/instagram_Bh30QT9AWCU.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Махмуд Хаттаб на фоне пирамиды Хефрена",
      "en": "Mahmoud Khattab before the Pyramid of Khafre",
      "zh": "马哈茂德在哈夫拉金字塔前"
    },
    "location": {
      "ru": "Гиза",
      "en": "Giza",
      "zh": "吉萨"
    }
  },
  {
    "type": "photo",
    "id": "ig-06",
    "src": "assets/photos/instagram_BiChx4_g46f.jpg",
    "thumb": "assets/photos/instagram_BiChx4_g46f.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Храм царицы Хатшепсут в Луксоре",
      "en": "Temple of Queen Hatshepsut in Luxor",
      "zh": "卢克索哈特谢普苏特女王神庙"
    },
    "location": {
      "ru": "Дейр-эль-Бахри",
      "en": "Deir el-Bahari",
      "zh": "代尔巴哈里"
    }
  },
  {
    "type": "photo",
    "id": "ig-07",
    "src": "assets/photos/instagram_BiCiBKoAial.jpg",
    "thumb": "assets/photos/instagram_BiCiBKoAial.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Прогулка под парусом по Нилу на фелюге",
      "en": "Sailing the River Nile on a traditional felucca",
      "zh": "尼罗河传统三角帆船悠然巡游"
    },
    "location": {
      "ru": "Асуан",
      "en": "Aswan",
      "zh": "阿斯旺"
    }
  },
  {
    "type": "photo",
    "id": "ig-08",
    "src": "assets/photos/instagram_BiCiKXQgPaj.jpg",
    "thumb": "assets/photos/instagram_BiCiKXQgPaj.jpg",
    "category": "cairo",
    "title": {
      "ru": "Шедевры Каирского музея с гидом",
      "en": "Masterpieces of the Egyptian Museum with guide",
      "zh": "开罗国家博物馆珍宝深度讲解"
    },
    "location": {
      "ru": "Каир",
      "en": "Cairo",
      "zh": "开罗"
    }
  },
  {
    "type": "photo",
    "id": "ig-09",
    "src": "assets/photos/instagram_Bj7T1UVgndS.jpg",
    "thumb": "assets/photos/instagram_Bj7T1UVgndS.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Большой Сфинкс — хранитель вечности",
      "en": "Great Sphinx — Guardian of Eternity",
      "zh": "雄伟的吉萨狮身人面像"
    },
    "location": {
      "ru": "Гиза",
      "en": "Giza",
      "zh": "吉萨"
    }
  },
  {
    "type": "photo",
    "id": "ig-10",
    "src": "assets/photos/instagram_Bj7T83FALnn.jpg",
    "thumb": "assets/photos/instagram_Bj7T83FALnn.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Священные залы Луксорского храма",
      "en": "Sacred halls of Luxor Temple",
      "zh": "卢克索神庙千年圣殿"
    },
    "location": {
      "ru": "Луксор",
      "en": "Luxor",
      "zh": "卢克索"
    }
  },
  {
    "type": "photo",
    "id": "ig-11",
    "src": "assets/photos/instagram_Bj7U5C2gs7D.jpg",
    "thumb": "assets/photos/instagram_Bj7U5C2gs7D.jpg",
    "category": "safari",
    "title": {
      "ru": "Лагерь под звездным небом Белой пустыни",
      "en": "Camp under the starry sky of White Desert",
      "zh": "白沙漠星空下的贝都因露营"
    },
    "location": {
      "ru": "Сахара",
      "en": "Sahara",
      "zh": "撒哈拉"
    }
  },
  {
    "type": "photo",
    "id": "ig-12",
    "src": "assets/photos/instagram_Bj7UIywgaC0.jpg",
    "thumb": "assets/photos/instagram_Bj7UIywgaC0.jpg",
    "category": "cairo",
    "title": {
      "ru": "Атмосферный колорит базара Хан эль-Халили",
      "en": "Atmospheric vibes of Khan el-Khalili Bazaar",
      "zh": "汗·哈利利千年集市风情"
    },
    "location": {
      "ru": "Старый Каир",
      "en": "Historic Cairo",
      "zh": "开罗老城"
    }
  },
  {
    "type": "photo",
    "id": "ig-13",
    "src": "assets/photos/instagram_Bj7UPVzgPnu.jpg",
    "thumb": "assets/photos/instagram_Bj7UPVzgPnu.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Величие фасада храма Абу-Симбел",
      "en": "Grandeur of Abu Simbel Temple facade",
      "zh": "阿布辛贝大神庙宏伟立面"
    },
    "location": {
      "ru": "Абу-Симбел",
      "en": "Abu Simbel",
      "zh": "阿布辛贝"
    }
  },
  {
    "type": "photo",
    "id": "ig-14",
    "src": "assets/photos/instagram_Bj7UU9YAEdE.jpg",
    "thumb": "assets/photos/instagram_Bj7UU9YAEdE.jpg",
    "category": "cairo",
    "title": {
      "ru": "Мост Стэнли над лазурным Средиземным морем",
      "en": "Stanley Bridge over the azure Mediterranean",
      "zh": "地中海之滨亚历山大斯坦利桥"
    },
    "location": {
      "ru": "Александрия",
      "en": "Alexandria",
      "zh": "亚历山大"
    }
  },
  {
    "type": "photo",
    "id": "ig-15",
    "src": "assets/photos/instagram_Bj7Umzsg_kc.jpg",
    "thumb": "assets/photos/instagram_Bj7Umzsg_kc.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Поездка на верблюдах вокруг плато Гиза",
      "en": "Camel ride around the Giza Plateau",
      "zh": "骑骆驼穿行吉萨金字塔群"
    },
    "location": {
      "ru": "Плато Гиза",
      "en": "Giza Plateau",
      "zh": "吉萨高地"
    }
  },
  {
    "type": "photo",
    "id": "ig-16",
    "src": "assets/photos/instagram_Bj7UwBPA0Vq.jpg",
    "thumb": "assets/photos/instagram_Bj7UwBPA0Vq.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Рельефы и фрески храма Ком-Омбо",
      "en": "Carved reliefs and murals of Kom Ombo Temple",
      "zh": "考姆翁布神庙精美古壁画"
    },
    "location": {
      "ru": "Ком-Омбо",
      "en": "Kom Ombo",
      "zh": "考姆翁布"
    }
  },
  {
    "type": "photo",
    "id": "ig-17",
    "src": "assets/photos/instagram_BlDdWDZnt0r.jpg",
    "thumb": "assets/photos/instagram_BlDdWDZnt0r.jpg",
    "category": "cairo",
    "title": {
      "ru": "Цитадель Саладина и мечеть Мухаммеда Али",
      "en": "Saladin Citadel and Mosque of Muhammad Ali",
      "zh": "萨拉丁城堡与穆罕默德·阿里清真寺"
    },
    "location": {
      "ru": "Каир",
      "en": "Cairo",
      "zh": "开罗"
    }
  },
  {
    "type": "photo",
    "id": "ig-18",
    "src": "assets/photos/instagram_BomerbTHGKw.jpg",
    "thumb": "assets/photos/instagram_BomerbTHGKw.jpg",
    "category": "safari",
    "title": {
      "ru": "Джип-сафари по барханам Черной пустыни",
      "en": "4x4 Jeep safari through the Black Desert",
      "zh": "黑沙漠四驱越野冲沙探险"
    },
    "location": {
      "ru": "Черная пустыня",
      "en": "Black Desert",
      "zh": "黑沙漠"
    }
  },
  {
    "type": "photo",
    "id": "ig-19",
    "src": "assets/photos/instagram_Bq0HKPlhTtO.jpg",
    "thumb": "assets/photos/instagram_Bq0HKPlhTtO.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Ступенчатая пирамида Джосера в Саккаре",
      "en": "Step Pyramid of Djoser in Saqqara",
      "zh": "萨卡拉左塞尔阶梯金字塔"
    },
    "location": {
      "ru": "Саккара",
      "en": "Saqqara",
      "zh": "萨卡拉"
    }
  },
  {
    "type": "photo",
    "id": "ig-20",
    "src": "assets/photos/instagram_BqKzZoEBbfc.jpg",
    "thumb": "assets/photos/instagram_BqKzZoEBbfc.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Храм Исиды на острове Филе в лучах заката",
      "en": "Philae Temple of Isis at golden hour",
      "zh": "落日余晖中的菲莱伊西斯神庙"
    },
    "location": {
      "ru": "Асуан",
      "en": "Aswan",
      "zh": "阿斯旺"
    }
  },
  {
    "type": "photo",
    "id": "ig-21",
    "src": "assets/photos/instagram_Br8PGXFh1Lf.jpg",
    "thumb": "assets/photos/instagram_Br8PGXFh1Lf.jpg",
    "category": "pyramids",
    "title": {
      "ru": "У подножия Великой пирамиды с путешественниками",
      "en": "At the foot of the Great Pyramid with travelers",
      "zh": "与游客在大金字塔脚下"
    },
    "location": {
      "ru": "Гиза",
      "en": "Giza",
      "zh": "吉萨"
    }
  },
  {
    "type": "photo",
    "id": "ig-22",
    "src": "assets/photos/instagram_BrImCguh2rm.jpg",
    "thumb": "assets/photos/instagram_BrImCguh2rm.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Зал гипостилей в Карнаке — лес колонн",
      "en": "Great Hypostyle Hall in Karnak — forest of stone",
      "zh": "卡纳克神庙震撼的百柱大厅"
    },
    "location": {
      "ru": "Карнак",
      "en": "Karnak",
      "zh": "卡纳克"
    }
  },
  {
    "type": "photo",
    "id": "ig-23",
    "src": "assets/photos/instagram_BrImHsVhgQS.jpg",
    "thumb": "assets/photos/instagram_BrImHsVhgQS.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Прогулка по Долине Царей",
      "en": "Walking through the Valley of the Kings",
      "zh": "探访神秘的帝王谷陵墓群"
    },
    "location": {
      "ru": "Луксор",
      "en": "Luxor",
      "zh": "卢克索"
    }
  },
  {
    "type": "photo",
    "id": "ig-24",
    "src": "assets/photos/instagram_BrSO5mMBeeF.jpg",
    "thumb": "assets/photos/instagram_BrSO5mMBeeF.jpg",
    "category": "cairo",
    "title": {
      "ru": "Цитадель Кайт-Бей на берегу моря",
      "en": "Qaitbay Citadel on the Mediterranean shore",
      "zh": "盖特贝城堡与地中海海浪"
    },
    "location": {
      "ru": "Александрия",
      "en": "Alexandria",
      "zh": "亚历山大"
    }
  },
  {
    "type": "photo",
    "id": "ig-25",
    "src": "assets/photos/instagram_BrSPh8_BDvl.jpg",
    "thumb": "assets/photos/instagram_BrSPh8_BDvl.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Золотой час у пирамид Гизы",
      "en": "Golden hour at the Giza Pyramids",
      "zh": "吉萨金字塔金色黄昏"
    },
    "location": {
      "ru": "Гиза",
      "en": "Giza",
      "zh": "吉萨"
    }
  },
  {
    "type": "photo",
    "id": "ig-26",
    "src": "assets/photos/instagram_BrSPrQ1B7wP.jpg",
    "thumb": "assets/photos/instagram_BrSPrQ1B7wP.jpg",
    "category": "safari",
    "title": {
      "ru": "Причудливые меловые фигуры Белой пустыни",
      "en": "Whimsical chalk formations of White Desert",
      "zh": "白沙漠大自然鬼斧神工蘑菇岩"
    },
    "location": {
      "ru": "Белая пустыня",
      "en": "White Desert",
      "zh": "白沙漠"
    }
  },
  {
    "type": "photo",
    "id": "ig-27",
    "src": "assets/photos/instagram_BrxdeO5DQ82.jpg",
    "thumb": "assets/photos/instagram_BrxdeO5DQ82.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Храм Гора в Эдфу — лучший сохраненный храм",
      "en": "Temple of Horus at Edfu — most intact temple",
      "zh": "埃德富荷鲁斯神庙实景探索"
    },
    "location": {
      "ru": "Эдфу",
      "en": "Edfu",
      "zh": "埃德富"
    }
  },
  {
    "type": "photo",
    "id": "ig-28",
    "src": "assets/photos/instagram_BrxdpwIjYY7.jpg",
    "thumb": "assets/photos/instagram_BrxdpwIjYY7.jpg",
    "category": "cairo",
    "title": {
      "ru": "Колоритные улочки старого Каира",
      "en": "Vibrant alleys of Old Cairo",
      "zh": "开罗老城迷人生活气息"
    },
    "location": {
      "ru": "Каир",
      "en": "Cairo",
      "zh": "开罗"
    }
  },
  {
    "type": "photo",
    "id": "ig-29",
    "src": "assets/photos/instagram_Brxu9O1j1h8.jpg",
    "thumb": "assets/photos/instagram_Brxu9O1j1h8.jpg",
    "category": "safari",
    "title": {
      "ru": "Оазис Бахария — финиковые рощи и источники",
      "en": "Bahariya Oasis — date palms and natural springs",
      "zh": "巴哈里亚绿洲泉水与椰枣林"
    },
    "location": {
      "ru": "Бахария",
      "en": "Bahariya",
      "zh": "巴哈里亚"
    }
  },
  {
    "type": "photo",
    "id": "ig-30",
    "src": "assets/photos/instagram_Bt5S6mLBOJ4.jpg",
    "thumb": "assets/photos/instagram_Bt5S6mLBOJ4.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Счастливые моменты у Сфинкса",
      "en": "Joyful moments with guests by the Sphinx",
      "zh": "狮身人面像前客人的开怀笑脸"
    },
    "location": {
      "ru": "Гиза",
      "en": "Giza",
      "zh": "吉萨"
    }
  },
  {
    "type": "photo",
    "id": "ig-31",
    "src": "assets/photos/instagram_BtGuOVVh0iT.jpg",
    "thumb": "assets/photos/instagram_BtGuOVVh0iT.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Круизный лайнер на реке Нил",
      "en": "Luxury Nile cruise ship between Luxor and Aswan",
      "zh": "卢克索至阿斯旺尼罗河五星游轮"
    },
    "location": {
      "ru": "Река Нил",
      "en": "River Nile",
      "zh": "尼罗河"
    }
  },
  {
    "type": "photo",
    "id": "ig-32",
    "src": "assets/photos/instagram_BudpcqfB33S.jpg",
    "thumb": "assets/photos/instagram_BudpcqfB33S.jpg",
    "category": "cairo",
    "title": {
      "ru": "Национальный музей египетской цивилизации NMEC",
      "en": "National Museum of Egyptian Civilization NMEC",
      "zh": "埃及文明国家博物馆皇室木乃伊展区"
    },
    "location": {
      "ru": "Каир",
      "en": "Cairo",
      "zh": "开罗"
    }
  },
  {
    "type": "photo",
    "id": "ig-33",
    "src": "assets/photos/instagram_BudpjoGBV93.jpg",
    "thumb": "assets/photos/instagram_BudpjoGBV93.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Тайны Дахшура — Ломаная и Розовая пирамиды",
      "en": "Mysteries of Dahshur — Bent & Red Pyramids",
      "zh": "达舒尔弯曲金字塔与红金字塔"
    },
    "location": {
      "ru": "Дахшур",
      "en": "Dahshur",
      "zh": "达舒尔"
    }
  },
  {
    "type": "photo",
    "id": "ig-34",
    "src": "assets/photos/instagram_BudprVuhdlK.jpg",
    "thumb": "assets/photos/instagram_BudprVuhdlK.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Колоссы Мемнона на рассвете",
      "en": "Colossi of Memnon at daybreak",
      "zh": "晨曦中的门农巨像"
    },
    "location": {
      "ru": "Луксор",
      "en": "Luxor",
      "zh": "卢克索"
    }
  },
  {
    "type": "photo",
    "id": "ig-35",
    "src": "assets/photos/instagram_BxaS8y4haUP.jpg",
    "thumb": "assets/photos/instagram_BxaS8y4haUP.jpg",
    "category": "safari",
    "title": {
      "ru": "Песчаный сэндбординг в пустыне",
      "en": "Sandboarding on golden desert dunes",
      "zh": "撒哈拉大沙丘滑沙体验"
    },
    "location": {
      "ru": "Сахара",
      "en": "Sahara",
      "zh": "撒哈拉"
    }
  },
  {
    "type": "photo",
    "id": "ig-36",
    "src": "assets/photos/instagram_CFDQyd7hXHk.jpg",
    "thumb": "assets/photos/instagram_CFDQyd7hXHk.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Махмуд Хаттаб проводит экскурсию у пирамид",
      "en": "Mahmoud Khattab guiding private tour at Pyramids",
      "zh": "马哈茂德在金字塔为贵宾讲解"
    },
    "location": {
      "ru": "Гиза",
      "en": "Giza",
      "zh": "吉萨"
    }
  },
  {
    "type": "photo",
    "id": "ig-37",
    "src": "assets/photos/instagram_CV-K-7goWvx.jpg",
    "thumb": "assets/photos/instagram_CV-K-7goWvx.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Вечерняя иллюминация Луксорского храма",
      "en": "Night illumination of Luxor Temple",
      "zh": "夜幕灯光下震撼的卢克索神庙"
    },
    "location": {
      "ru": "Луксор",
      "en": "Luxor",
      "zh": "卢克索"
    }
  },
  {
    "type": "photo",
    "id": "ig-38",
    "src": "assets/photos/instagram_CcZP9-Lo1w7.jpg",
    "thumb": "assets/photos/instagram_CcZP9-Lo1w7.jpg",
    "category": "cairo",
    "title": {
      "ru": "Панорама Каира с башни Cairo Tower",
      "en": "Panorama of Cairo from the Cairo Tower",
      "zh": "开罗塔俯瞰开罗城市全景"
    },
    "location": {
      "ru": "Каир",
      "en": "Cairo",
      "zh": "开罗"
    }
  },
  {
    "type": "photo",
    "id": "ig-39",
    "src": "assets/photos/instagram_Ct61ZYOMuse.jpg",
    "thumb": "assets/photos/instagram_Ct61ZYOMuse.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Встреча рассвета на квадроциклах у пирамид",
      "en": "Quad bike sunrise adventure by the Pyramids",
      "zh": "吉萨金字塔日出沙滩车越野"
    },
    "location": {
      "ru": "Гиза",
      "en": "Giza",
      "zh": "吉萨"
    }
  },
  {
    "type": "photo",
    "id": "ig-40",
    "src": "assets/photos/instagram_CxTh8UdsbrT.jpg",
    "thumb": "assets/photos/instagram_CxTh8UdsbrT.jpg",
    "category": "luxor-aswan",
    "title": {
      "ru": "Полет на воздушном шаре над Луксором",
      "en": "Hot air balloon flight over Luxor at sunrise",
      "zh": "卢克索日出热气球俯瞰古迹"
    },
    "location": {
      "ru": "Луксор",
      "en": "Luxor",
      "zh": "卢克索"
    }
  },
  {
    "type": "photo",
    "id": "ig-41",
    "src": "assets/photos/instagram_Cxno9Qrswi1.jpg",
    "thumb": "assets/photos/instagram_Cxno9Qrswi1.jpg",
    "category": "cairo",
    "title": {
      "ru": "Восточные сладости и кофе в Хан эль-Халили",
      "en": "Traditional coffee & sweets at Khan el-Khalili",
      "zh": "汗·哈利利百年老店埃及咖啡"
    },
    "location": {
      "ru": "Каир",
      "en": "Cairo",
      "zh": "开罗"
    }
  },
  {
    "type": "photo",
    "id": "ig-42",
    "src": "assets/photos/instagram__PhTmlsfOe.jpg",
    "thumb": "assets/photos/instagram__PhTmlsfOe.jpg",
    "category": "pyramids",
    "title": {
      "ru": "Счастливая группа туристов с Махмудом Хаттабом",
      "en": "Happy travel group with Mahmoud Khattab in Egypt",
      "zh": "马哈茂德与客人们在埃及的合影留念"
    },
    "location": {
      "ru": "Египет",
      "en": "Egypt",
      "zh": "埃及"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MEDIA_GALLERY };
}


