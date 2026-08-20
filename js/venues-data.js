// Complete Destination & Venue Database for Mahmoud Khattab Private Tours
// Includes Cairo, Giza, Alexandria, White & Black Desert Safari, Aswan, Luxor

const DESTINATIONS_DATA = [
  {
    id: 'cairo',
    name: {
      ru: 'Каир (Исторический & Исламский)',
      en: 'Cairo (Historic & Islamic)',
      zh: '开罗（历史与伊斯兰文化）'
    },
    tagline: {
      ru: 'Город тысячи минаретов, восточных базаров и древних сокровищ',
      en: 'The city of a thousand minarets, vibrant bazaars, and treasures',
      zh: '千塔之城、繁华市集与千年宝藏'
    },
    coverImage: 'assets/photos/photo_25.jpg',
    badge: {
      ru: '10 Достопримечательностей',
      en: '10 Iconic Venues',
      zh: '10大精选景点'
    },
    venues: [
      {
        id: 'cairo-saladin-citadel',
        name: {
          ru: 'Цитадель Саладина и Алебастровая Мечеть Мухаммеда Али',
          en: 'Saladin Citadel & Mohamed Ali Alabaster Mosque',
          zh: '萨拉丁城堡与穆罕默德·阿里雪花石膏清真寺'
        },
        duration: '2 - 2.5 hours',
        highlight: {
          ru: 'Панорамный вид на весь Каир и шедевр османской архитектуры XIX века',
          en: 'Panoramic bird-eye view of Cairo and a masterpiece of 19th-century Ottoman architecture',
          zh: '俯瞰开罗全景，19世纪奥斯曼建筑杰作'
        },
        description: {
          ru: 'Средневековая крепость XII века, построенная великим полководцем Саладином для защиты от крестоносцев. Главное украшение цитадели — величественная Алебастровая мечеть Мухаммеда Али с высокими минаретами и роскошным куполом.',
          en: 'A 12th-century medieval fortress built by the legendary commander Saladin to defend against crusaders. Crowned by the stunning Alabaster Mosque of Muhammad Ali Pasha.',
          zh: '由12世纪著名将领萨拉丁建造的中世纪要塞，顶部坐落着壮丽的穆罕默德·阿里雪花石膏清真寺。'
        },
        included: {
          ru: ['Сопровождение русскоговорящего гида', 'Экскурсия по крепостным стенам', 'Вход в мечеть Мухаммеда Али', 'Панорамная смотровая площадка'],
          en: ['Private English/Russian Guide', 'Citadel Fortifications tour', 'Mohamed Ali Mosque Entry', 'Panoramic viewpoint'],
          zh: ['专业导游讲解', '古要塞城墙游览', '清真寺内部参观', '开罗全景俯瞰点']
        }
      },
      {
        id: 'cairo-egyptian-museum-tahrir',
        name: {
          ru: 'Старый Египетский Музей на площади Тахрир',
          en: 'Old Egyptian Museum in Tahrir Square',
          zh: '埃及博物馆（解放广场老馆）'
        },
        duration: '2.5 - 3 hours',
        highlight: {
          ru: 'Более 120,000 античных экспонатов, саркофаги, статуи и папирусы',
          en: 'Over 120,000 ancient masterworks, sarcophagi, statues, and papyri',
          zh: '馆藏逾12万件法老时代珍贵文物、石棺与雕像'
        },
        description: {
          ru: 'Легендарный неоклассический музей, открытый в 1902 году. Здесь собраны шедевры Старого, Среднего и Нового царств Египта, включая статуи фараонов Хафра, Менкаура и редчайшие артефакты династий.',
          en: 'The legendary neoclassical museum opened in 1902. Housing priceless masterworks of Old, Middle, and New Kingdoms including statues of Khafre, Menkaure, and ancient papyri.',
          zh: '建于1902年的新古典主义传奇博物馆，典藏古王国、中王国与新王国时期的巅峰文物。'
        },
        included: {
          ru: ['Детальный рассказ об эпохах фараонов', 'Обзор главных залов и статуй', 'Помощь с билетами без очередей'],
          en: ['Comprehensive historical tour', 'Highlights of pharaonic masterworks', 'Skip-the-line assistance'],
          zh: ['深度历史文化讲解', '重点展厅与雕像导览', '免排队协助']
        }
      },
      {
        id: 'cairo-hanging-church-coptic',
        name: {
          ru: 'Висячая Церковь (Аль-Муаллака) и Коптский Каир',
          en: 'The Hanging Church (Al-Muallaqa) & Coptic Cairo',
          zh: '悬空教堂与科普特老开罗'
        },
        duration: '1.5 - 2 hours',
        highlight: {
          ru: 'Древнейший христианский храм III века над римскими воротами крепости Вавилон',
          en: 'Ancient 3rd-century Christian basilica suspended over Roman Babylon fortress',
          zh: '建于3世纪罗马巴比伦城堡上方的古老基督教悬空大教堂'
        },
        description: {
          ru: 'Уникальный район Древнего Каира: Висячая церковь святой Девы Марии, церковь святых Сергия и Вакха (где скрывалось Святое Семейство во время бегства в Египет) и древняя синагога Бен-Эзра.',
          en: 'The heart of religious heritage: St. Virgin Mary Hanging Church, Church of Saints Sergius & Bacchus (Holy Family refuge), and Ben Ezra Synagogue.',
          zh: '宗教圣地：圣母玛利亚悬空教堂、圣塞尔吉乌斯与巴克斯教堂（圣家庭避难所）与本·以斯拉犹太会堂。'
        },
        included: {
          ru: ['История христианства в Египте', 'Посещение грота Святого Семейства', 'Прогулка по тихим улочкам коптского квартала'],
          en: ['Coptic Christian history tour', 'Visit Holy Family Crypt', 'Quiet stroll in historic alleys'],
          zh: ['科普特基督教历史解密', '圣家庭避难洞穴参观', '古街区步行漫游']
        }
      },
      {
        id: 'cairo-sultan-hassan-mosque',
        name: {
          ru: 'Мечеть-Медресе Султана Хасана',
          en: 'Mosque-Madrasa of Sultan Hassan',
          zh: '苏丹·哈桑清真寺与宗教学院'
        },
        duration: '1 - 1.5 hours',
        highlight: {
          ru: 'Грандиозный шедевр мамлюкской архитектуры XIV века с гигантским айваном',
          en: 'Monumental 14th-century Mamluk architectural triumph with soaring iwans',
          zh: '14世纪马木留克建筑巅峰，宏伟庭院与高耸穹顶'
        },
        description: {
          ru: 'Построена между 1356 и 1363 годами. Считается одним из самых выдающихся памятников исламского зодчества в мире благодаря колоссальным масштабам и виртуозной резьбе по камню.',
          en: 'Erected between 1356 and 1363, revered globally as one of the finest gems of Islamic stone craftsmanship and majestic proportions.',
          zh: '建于1356至1363年，被誉为伊斯兰建筑史上的奇迹，规模宏大，石雕精湛绝伦。'
        },
        included: {
          ru: ['Экскурсия с гидом-искусствоведом', 'Архитектурный разбор 4 школ ислама', 'Уникальная акустика главного зала'],
          en: ['Architectural insights', 'Story of 4 Sunni schools of law', 'Incredible acoustic demonstration'],
          zh: ['专业建筑艺术讲解', '四大教法学派历史解密', '回音大厅声学体验']
        }
      },
      {
        id: 'cairo-ibn-tulun-mosque',
        name: {
          ru: 'Мечеть Ахмеда Ибн Тулуна',
          en: 'Mosque of Ahmad Ibn Tulun',
          zh: '伊本·图伦清真寺'
        },
        duration: '1 hour',
        highlight: {
          ru: 'Старейшая мечеть Каира, сохранившаяся в первозданном виде с 879 года',
          en: 'Oldest surviving intact mosque in Cairo dating back to 879 AD',
          zh: '开罗现存最古老且保持原貌的清真寺（公元879年）'
        },
        description: {
          ru: 'Огромный внутренний двор с ажурными арками и уникальным спиральным минаретом в самаррском стиле. На минарет можно подняться для потрясающей круговой панорамы старого Каира.',
          en: 'Famous for its vast peaceful courtyard, stucco friezes, and rare spiral external staircase minaret offering 360-degree views.',
          zh: '以宁静开阔的庭院、精致石膏浮雕及罕见的螺旋形外部台阶宣礼塔闻名，可登顶俯瞰全景。'
        },
        included: {
          ru: ['Подъем на спиральный минарет', 'Фотосессия на фоне древних арок', 'Исторический экскурс в эпоху Тулунидов'],
          en: ['Spiral minaret climb', 'Photo session in ancient arcades', 'Tulunid dynasty history tour'],
          zh: ['登螺旋宣礼塔', '复古石拱长廊摄影', '图伦王朝历史讲解']
        }
      },
      {
        id: 'cairo-gayer-anderson-museum',
        name: {
          ru: 'Музей Гайера-Андерсона (Бейт эль-Критлия)',
          en: 'Gayer-Anderson Museum (Bayt al-Kritliyya)',
          zh: '盖尔-安德森博物馆（克里特屋）'
        },
        duration: '1 - 1.5 hours',
        highlight: {
          ru: 'Роскошный османский особняк XVI-XVII вв. с коллекцией древностей и место съемок Джеймса Бонда',
          en: 'Opulent 16th/17th-century Ottoman mansion, orientalist art, and James Bond film location',
          zh: '16-17世纪奥斯曼风格豪宅，融合东方艺术收藏与007电影取景地'
        },
        description: {
          ru: 'Два соединенных мостиком старинных дома, бережно отреставрированных британским врачом Гайером-Андерсоном. Узорные деревянные решетки машрабия, восточные залы и тайные комнаты.',
          en: 'Two interconnected historic homes restored by British major Gayer-Anderson, filled with mashrabiya woodwork, damascene furniture, and oriental curiosities.',
          zh: '由英国军医盖尔-安德森修缮的两座历史古宅，内含精美木格窗、大马士革古董家具与藏宝密室。'
        },
        included: {
          ru: ['Посещение гарема и террас', 'Коллекция восточной мебели и ковров', 'Кинематографические истории'],
          en: ['Harem and rooftop visit', 'Antique oriental furnishings', 'Film lore & secrets'],
          zh: ['内室与屋顶天台参观', '东方古董家具鉴赏', '电影拍摄幕后故事']
        }
      },
      {
        id: 'cairo-nmec-civilization-mummies',
        name: {
          ru: 'Национальный Музей Египетской Цивилизации (NMEC)',
          en: 'National Museum of Egyptian Civilization (NMEC)',
          zh: '埃及文明国家博物馆（NMEC & 皇家木乃伊馆）'
        },
        duration: '2 - 2.5 hours',
        highlight: {
          ru: 'Зал Королевских Мумий Рамсеса II, Хатшепсут, Сети I в сверхсовременном музее',
          en: 'Royal Mummies Hall with Ramses II, Hatshepsut, and Seti I in a world-class modern museum',
          zh: '世界顶尖现代展馆，藏有拉美西斯二世、哈特谢普苏特等法老王室木乃伊'
        },
        description: {
          ru: 'Главный современный музей Каира, открытый после торжественного «Парада фараонов». Демонстрирует 5000 лет непрерывной истории Египта от додинастического периода до наших дней.',
          en: 'Opened with the grandiose Pharaohs Golden Parade. Showcases 5,000 years of civilization from predynastic times, pharaonic, Greco-Roman, Coptic, and Islamic eras.',
          zh: '“法老黄金游行”后盛大开幕，全景展示埃及从史前、法老、希腊罗马到伊斯兰时期的五千年文明。'
        },
        included: {
          ru: ['Билеты в Зал Царских Мумий', 'Хронологический гид-тур', 'Озеро Айн эль-Сира и лаунж-зона'],
          en: ['Royal Mummies Hall entry', 'Chronological expert tour', 'Ain El Sira lakefront stroll'],
          zh: ['皇家木乃伊展厅专享导览', '五千年文明编年史精讲', '人工湖畔景观漫步']
        }
      },
      {
        id: 'cairo-khan-el-khalili',
        name: {
          ru: 'Исторический Рынок Хан эль-Халили (Старый Каир)',
          en: 'Khan el-Khalili Historic Grand Bazaar',
          zh: '汗·哈利利大巴扎（老开罗市集）'
        },
        duration: '1.5 - 2 hours',
        highlight: {
          ru: 'Атмосфера восточной сказки XIV века, аромат пряностей, медная чеканка и кафе El Fishawy',
          en: '14th-century Arabian Nights bazaar, spice scents, brass lamps, and historic El Fishawy Cafe',
          zh: '14世纪一千零一夜阿拉伯风情市集，香料、手工铜灯与200年历史费沙维咖啡馆'
        },
        description: {
          ru: 'Один из старейших рынков Ближнего Востока. Лабиринты узких переулков с лавками специй, натуральных масел, ювелирных украшений и кованых светильников. Чаепитие в знаменитом кафе El Fishawy.',
          en: 'One of the oldest bazaars in the world. A labyrinth of treasures, perfumes, hand-carved silver, and spices. We stop for authentic mint tea at 200-year-old cafe.',
          zh: '中东最古老繁华的市集之一。穿梭于香料、天然精油、银饰手工艺品巷陌，品尝地道埃及薄荷红茶。'
        },
        included: {
          ru: ['Безопасный маршрут без навязчивых торговцев', 'Помощь в честном торге и покупках', 'Традиционный египетский чай'],
          en: ['Safe guided route with no tourist pressure', 'Bargaining & shopping assistance', 'Authentic Egyptian tea'],
          zh: ['安心导览路线（杜绝强买强卖）', '协助砍价与选购优质特产', '赠送地道薄荷茶体验']
        }
      },
      {
        id: 'cairo-el-moez-street',
        name: {
          ru: 'Улица Аль-Муизз (Музей Исламской Архитектуры под открытым небом)',
          en: 'El Moez Street (Open-Air Islamic Architecture Museum)',
          zh: '穆兹街（伊斯兰建筑露天博物馆）'
        },
        duration: '1.5 - 2 hours',
        highlight: {
          ru: 'Самая высокая концентрация средневековых памятников архитектуры в мире',
          en: 'The greatest concentration of medieval architectural treasures in the world',
          zh: '全球中世纪伊斯兰建筑遗存密度最高的步行街区'
        },
        description: {
          ru: 'Пешеходная улица X века длиной 1 км, основанная династией Фатимидов. Ворота Баб аль-Футух, комплекс султана Калауна, медресе Баркук и великолепная вечерняя подсветка.',
          en: 'A 1km pedestrian promenade dating back to 969 AD with monumental gates (Bab al-Futuh), Qalawun complex, Barquq madrasa, illuminated majestically at dusk.',
          zh: '始建于公元969年的1公里步行街，拥有征服之门、盖拉温综合体与巴尔库克学院，夜幕下璀璨夺目。'
        },
        included: {
          ru: ['Пешая прогулка с историком', 'Вход в комплекс Калаун', 'Лучшие фотолокации средневекового Каира'],
          en: ['Walking tour with historian', 'Qalawun Complex entry', 'Best photo spots of Old Cairo'],
          zh: ['历史学家深度步行导览', '盖拉温建筑群内部参观', '绝佳复古大片拍摄机位']
        }
      },
      {
        id: 'cairo-mohamed-ali-palace-manial',
        name: {
          ru: 'Дворец Принца Мухаммеда Али (Дворец Маниал)',
          en: 'Prince Mohamed Ali Palace (Manial Palace)',
          zh: '穆罕默德·阿里王子宫殿（马尼亚尔宫）'
        },
        duration: '1.5 - 2 hours',
        highlight: {
          ru: 'Смесь стилей рококо, барокко, османского и мавританского с уникальным ботаническим садом',
          en: 'Eclectic royal residence blending Rococo, Baroque, Ottoman, and Moorish styles with rare gardens',
          zh: '融合洛可可、巴洛克、奥斯曼与摩尔风格的皇家宫殿及热带植物园'
        },
        description: {
          ru: 'Дворцовый комплекс начала XX века, окруженный редкими пальмами и баньянами. Тронный зал, Золотой зал, музей охотничьих трофеев и потрясающие потолки из резного дерева.',
          en: 'An exquisite early 20th-century royal estate nestled inside lush botanical gardens. Featuring the Gold Hall, Throne Room, Trophy Hall, and painted ceilings.',
          zh: '20世纪初奢华王室庄园，被稀有棕榈和古树环绕。含金色大厅、宝座大厅与珍宝馆。'
        },
        included: {
          ru: ['Экскурсия по всем 5 павильонам', 'Прогулка по ботаническому саду', 'История египетской королевской династии'],
          en: ['All 5 palace pavilions tour', 'Botanical garden walk', 'Egyptian royal dynasty lore'],
          zh: ['五大宫殿展厅深度参观', '珍稀植物园漫步', '埃及近代王室传奇解密']
        }
      }
    ]
  },
  {
    id: 'giza',
    name: {
      ru: 'Гиза & Некрополи Фараонов',
      en: 'Giza & Ancient Pyramids',
      zh: '吉萨与法老金字塔金字塔群'
    },
    tagline: {
      ru: 'Семь чудес света, Великий Сфинкс и колыбель пирамидостроения',
      en: 'The Seven Wonders, the Great Sphinx, and the birthplace of pyramids',
      zh: '世界古代七大奇迹、狮身人面像与金字塔发源地'
    },
    coverImage: 'assets/photos/photo_26.jpg',
    badge: {
      ru: '5 Главных Локаций',
      en: '5 Historic Sites',
      zh: '5大必游圣地'
    },
    venues: [
      {
        id: 'giza-pyramids-sphinx',
        name: {
          ru: '3 Великие Пирамиды Гизы и Большой Сфинкс',
          en: 'The 3 Great Pyramids of Giza & The Great Sphinx',
          zh: '吉萨三大金字塔与狮身人面像'
        },
        duration: '3 - 4 hours',
        highlight: {
          ru: 'Пирамиды Хеопса, Хефрена, Микерина и страж плато — 4500-летний Сфинкс',
          en: 'Pyramids of Khufu, Khafre, Menkaure, and the 4,500-year-old enigmatic Sphinx',
          zh: '胡夫、哈夫拉、门卡拉金字塔与伫立4500年的狮身人面像'
        },
        description: {
          ru: 'Единственное уцелевшее из Семи чудес Древнего Мира. Махмуд расскажет вам инженерные тайны строительства, астрономическое выравнивание и покажет секретные панорамные точки для лучших фото.',
          en: 'The sole surviving Wonder of the Ancient World. Mahmoud reveals archaeological enigmas, astronomical alignments, and leads you to secret panoramic dunes away from crowds.',
          zh: '古代世界七大奇迹唯一幸存者。资深导游带您解密建造之谜、天文对齐，并探访独家避开人流的摄影沙丘。'
        },
        included: {
          ru: ['Авторская экскурсия без толп', 'Панорамная площадка на 9 пирамид', 'Храм долины и Большой Сфинкс', 'По желанию: катание на верблюдах/квадроциклах'],
          en: ['VIP crowd-avoiding itinerary', 'Panoramic lookout of all pyramids', 'Valley Temple & Great Sphinx', 'Optional Camel/ATV ride'],
          zh: ['专业错峰游览路线', '全景九座金字塔观测点', '河谷神庙与狮身人面像', '可选：骑骆驼或全地形车']
        }
      },
      {
        id: 'giza-grand-egyptian-museum-gem',
        name: {
          ru: 'Большой Египетский Музей (GEM — Grand Egyptian Museum)',
          en: 'Grand Egyptian Museum (GEM)',
          zh: '大埃及博物馆（GEM）'
        },
        duration: '2.5 - 3.5 hours',
        highlight: {
          ru: 'Крупнейший археологический музей планеты с видом на пирамиды',
          en: 'The worlds largest archaeological museum complex with direct pyramid vistas',
          zh: '全球规模最大的考古博物馆，直面吉萨金字塔群'
        },
        description: {
          ru: 'Новейший мега-проект мирового уровня. Монументальный атриум с 11-метровой статуей Рамсеса II, гигантская парадная лестница с 60 скульптурами богов и царей и интерактивные галереи.',
          en: 'The mega-museum masterpiece. Monumental atrium with the 11-meter colossus of Ramses II, Grand Staircase flanked by 60 royal statues, and futuristic exhibition halls.',
          zh: '世界级世纪工程。11米高的拉美西斯二世巨像、陈列60尊法老与神明雕像的宏伟天梯以及沉浸式主展厅。'
        },
        included: {
          ru: ['Гид-экскурсия по Атриуму и Большой Лестнице', 'Коммерческая галерея и смотровые террасы', 'Бронирование официальных билетов'],
          en: ['Grand Atrium & Grand Staircase tour', 'Panoramic terrace towards pyramids', 'Advance ticket assistance'],
          zh: ['宏伟大厅与主天梯深度导览', '直面金字塔景观天台', '官方门票预订协助']
        }
      },
      {
        id: 'giza-saqqara-djoser',
        name: {
          ru: 'Саккара — Ступенчатая Пирамида Джосера и Серапеум',
          en: 'Saqqara: Step Pyramid of Djoser & The Serapeum',
          zh: '塞加拉：左塞尔阶梯金字塔与塞拉比尤姆神庙'
        },
        duration: '2.5 - 3 hours',
        highlight: {
          ru: 'Первая в истории человечества каменная пирамида (4700 лет) и гробницы с яркими рельефами',
          en: 'Humanitys first monumental stone pyramid (4,700 yrs) and ultra-vivid tomb reliefs',
          zh: '人类历史上第一座巨石金字塔（4700年历史）及色彩如新的贵族彩绘墓室'
        },
        description: {
          ru: 'Древнейший некрополь Мемфиса. Шедевр зодчего Имхотепа — Ступенчатая пирамида Джосера, пирамида фараона Унаса с древнейшими «Текстами Пирамид», а также загадочный подземный Серапеум с гигантскими базальтовыми саркофагами.',
          en: 'Architect Imhoteps revolutionary step design, Pyramid of Unas featuring the earliest Pyramid Texts, and the subterranean Serapeum housing 70-ton granite sarcophagi.',
          zh: '建筑大师伊姆霍特普的旷世神作。探访刻有最早金字塔经文的乌纳斯金字塔，以及深埋地下重达70吨的花岗岩神牛石棺。'
        },
        included: {
          ru: ['Вход в комплекс Саккары', 'Осмотр Ступенчатой пирамиды', 'Посещение гробницы знати с цветными фресками', 'Посещение пирамиды Тети'],
          en: ['Saqqara complex entrance', 'Step pyramid exploration', 'Nobles painted tombs access', 'Pyramid of Teti entry'],
          zh: ['塞加拉景区通票', '阶梯金字塔外围与建筑群讲解', '精美彩色壁画贵族墓室入内', '特提金字塔探索']
        }
      },
      {
        id: 'giza-dahshur-pyramids',
        name: {
          ru: 'Дахшур — Ломаная и Розовая Пирамиды фараона Снофру',
          en: 'Dahshur: The Bent & Red Pyramids of King Sneferu',
          zh: '达舒尔：斯尼夫鲁法老的弯曲金字塔与红金字塔'
        },
        duration: '2 hours',
        highlight: {
          ru: 'Первая в мире настоящая гладкостенная пирамида и уникальная форма «Ломаной»',
          en: 'The worlds first successful true smooth-sided pyramid with tranquil desert vibes',
          zh: '世界上第一座真正完美的正锥形红金字塔与独特的双坡度弯曲金字塔'
        },
        description: {
          ru: 'Место грандиозного строительного эксперимента отца Хеопса — царя Снофру. Здесь почти нет туристов, атмосфера первозданной пустыни и возможность бесплатно спуститься внутрь погребальной камеры Розовой пирамиды!',
          en: 'Built by Pharaoh Sneferu (father of Khufu). Far from tourist masses, with pristine desert tranquility and the opportunity to climb deep inside the Red Pyramids burial chamber.',
          zh: '胡夫之父斯尼夫鲁法老的建筑试验场。人少清幽，可免费沿隧道深入红金字塔核心墓室。'
        },
        included: {
          ru: ['Спуск внутрь Розовой пирамиды', 'Осмотр уникальной геометрии Ломаной пирамиды', 'Спокойная атмосфера без толп'],
          en: ['Entry inside the Red Pyramid chamber', 'Close-up study of Bent Pyramid angles', 'Serene uncrowded desert exploration'],
          zh: ['深入红金字塔墓室探秘', '近距离观摩弯曲金字塔独特夹角', '荒漠秘境静心体验']
        }
      },
      {
        id: 'giza-memphis-capital',
        name: {
          ru: 'Мемфис — Древнейшая Столица и Колосс Рамсеса II',
          en: 'Memphis — Ancient Capital & Colossus of Ramses II',
          zh: '孟菲斯古都与拉美西斯二世巨型雕像'
        },
        duration: '1 hour',
        highlight: {
          ru: 'Первая столица Объединенного Египта (3100 г. до н.э.) и 10-метровый известняковый колосс',
          en: 'First capital of unified Egypt (3100 BC) and 10-meter limestone colossus of Ramses II',
          zh: '公元前3100年统一埃及的第一代首都，10米长拉美西斯二世整石雕像'
        },
        description: {
          ru: 'Музей под открытым небом в деревне Мит-Рахина на месте древнего города бога Птаха. Главные сокровища — гигантская лежащая статуя Рамсеса II и алебастровый Сфинкс.',
          en: 'Open-air museum at Mit Rahina, heart of the god Ptahs cult. Housing the colossal recumbent statue of Ramses the Great and the massive Alabaster Sphinx.',
          zh: '位于米特·拉辛纳村的露天博物馆。珍藏雕工极为精美的拉美西斯二世卧像与雪花石膏狮身人面像。'
        },
        included: {
          ru: ['Музей под открытым небом', 'Осмотр колосса Рамсеса II', 'Алебастровый сфинкс Мемфиса'],
          en: ['Open-air museum admission', 'Ramses II Colossus pavilion', 'Alabaster Sphinx of Memphis'],
          zh: ['露天博物馆参观', '拉美西斯二世巨像展厅', '孟菲斯雪花石膏斯芬克斯']
        }
      }
    ]
  },
  {
    id: 'alexandria',
    name: {
      ru: 'Александрия (Жемчужина Средиземноморья)',
      en: 'Alexandria (Pearl of the Mediterranean)',
      zh: '亚历山大（地中海明珠）'
    },
    tagline: {
      ru: 'Греко-римское наследие, морской бриз и город Александра Македонского',
      en: 'Greco-Roman heritage, sea breezes, and the legacy of Alexander the Great',
      zh: '希腊罗马遗韵、海风拂面与亚历山大大帝的传奇名城'
    },
    coverImage: 'assets/photos/photo_22.jpg',
    badge: {
      ru: '4 Главных Шедевра',
      en: '4 Coastal Gems',
      zh: '4大地中海地标'
    },
    venues: [
      {
        id: 'alex-catacombs-kom-el-shokafa',
        name: {
          ru: 'Катакомбы Ком эль-Шукафа',
          en: 'Catacombs of Kom El Shoqafa',
          zh: '孔翁索卡法地下墓穴'
        },
        duration: '1.5 hours',
        highlight: {
          ru: 'Одно из Семи чудес Средневековья: трехуровневый подземный некрополь II века',
          en: 'One of the Seven Wonders of the Middle Ages: 3-tier underground necropolis',
          zh: '中世纪世界七大奇迹之一：深达三层的2世纪地下岩石墓葬群'
        },
        description: {
          ru: 'Уникальное переплетение египетской, греческой и римской мифологий. Спиральная лестница ведет на глубину 35 метров, где расположены резные гробницы, триклиний для поминальных пиров и рельефы бога Анубиса в римских доспехах.',
          en: 'A fascinating fusion of pharaonic, Hellenistic, and Roman artistic styles. Spiral down 35m into rock-cut tombs, banquet triclinium, and reliefs of Anubis in Roman legionary armor.',
          zh: '古埃及、希腊与罗马文化的神秘交融。螺旋深阶直通地下35米，见证身着罗马军团铠甲的阿努比斯浮雕与宴饮石殿。'
        },
        included: {
          ru: ['Спуск в катакомбы с гидом', 'Расшифровка синкретических символов', 'Посещение Погребального зала'],
          en: ['Underground guided descent', 'Deciphering hybrid Greco-Egyptian myths', 'Main Burial Chamber'],
          zh: ['地下墓穴专业导览', '希腊-埃及融合神话符号解析', '主墓室参观']
        }
      },
      {
        id: 'alex-roman-amphitheatre',
        name: {
          ru: 'Римский Амфитеатр в Ком эль-Дикка',
          en: 'The Roman Amphitheatre at Kom El Dikka',
          zh: '罗马圆形剧场（孔代卡）'
        },
        duration: '1 hour',
        highlight: {
          ru: 'Единственный сохранившийся римский театр в Египте с мраморными трибунами и мозаиками',
          en: 'The only Roman amphitheatre ever unearthed in Egypt with marble seating and mosaics',
          zh: '埃及境内唯一发掘出的罗马圆形剧场，大理石看台与拜占庭马赛克完好如初'
        },
        description: {
          ru: 'Античный комплекс IV века с 13 рядами белого мрамора, вмещавший до 800 зрителей. Рядом расположены римские бани (термы), вилла Птиц с цветными напольными мозаиками и аудитории древней академии.',
          en: 'A 4th-century classical theatre with 13 semicircular marble tiers, Roman thermal baths, the "Villa of the Birds" mosaic floor, and ancient lecture auditoriums.',
          zh: '4世纪古典剧场，拥有13层半圆形白色大理石坐席、罗马浴场遗址、飞鸟别墅彩色马赛克地砖及古代大学讲堂。'
        },
        included: {
          ru: ['Экскурсия по трибунам и термам', 'Вилла Птиц с мозаиками', 'Античная история Александрии'],
          en: ['Theatre and bathhouses tour', 'Villa of the Birds mosaic floor', 'Greco-Roman city lore'],
          zh: ['剧场与浴场遗址导览', '飞鸟别墅马赛克艺术品鉴', '古典亚历山大历史讲解']
        }
      },
      {
        id: 'alex-qaitbay-citadel',
        name: {
          ru: 'Цитадель Кайтбай (на месте Александрийского Маяка)',
          en: 'Citadel of Qaitbay (Site of Pharos Lighthouse)',
          zh: '盖特贝城堡（亚历山大灯塔遗址）'
        },
        duration: '1.5 - 2 hours',
        highlight: {
          ru: 'Средневековая морская крепость XV века, возведенная из камней разрушенного Фаросского маяка',
          en: '15th-century maritime fortress built directly atop the rubble of the ancient Pharos Lighthouse',
          zh: '15世纪雄伟海防要塞，原址为古代世界七大奇迹之一的亚历山大灯塔'
        },
        description: {
          ru: 'Мощный оборонительный форт султана аль-Ашрафа Кайтбая на восточной оконечности острова Фарос. Отсюда открываются захватывающие виды на лазурные волны Средиземного моря и набережную Корниш.',
          en: 'Sultan Qaitbays imposing fortress guarding the eastern harbor on Pharos island. Offers breathtaking panoramic vistas over the turquoise Mediterranean Sea and Corniche.',
          zh: '苏丹盖特贝建于法罗斯岛东端的军事要塞。直面地中海碧波万顷，海滨大道风光尽收眼底。'
        },
        included: {
          ru: ['Прогулка по крепостным башням и бойницам', 'Морской бриз и панорама бухты', 'История Фаросского маяка'],
          en: ['Castle ramparts & watchtowers tour', 'Sea breeze & harbor panorama', 'Pharos lighthouse legend'],
          zh: ['城堡要塞与瞭望塔巡礼', '地中海海湾全景', '法罗斯古代灯塔前世今生']
        }
      },
      {
        id: 'alex-bibliotheca-alexandrina',
        name: {
          ru: 'Новая Александрийская Библиотека (Bibliotheca Alexandrina)',
          en: 'Bibliotheca Alexandrina (New Alexandria Library)',
          zh: '新亚历山大图书馆（Bibliotheca Alexandrina）'
        },
        duration: '1.5 - 2 hours',
        highlight: {
          ru: 'Триумф современной архитектуры в виде солнечного диска с надписями на всех языках мира',
          en: 'Architectural marvel shaped like a rising sun, engraved with characters of worlds alphabets',
          zh: '现代建筑奇迹，造型宛如冉冉升起的太阳，巨型花岗岩外墙刻满世界文字'
        },
        description: {
          ru: 'Возрождение легендарной античной библиотеки. Гигантский наклонный читальный зал на 2000 человек, музеи рукописей, музей древностей, планетарий и редкие художественные экспозиции.',
          en: 'A revival of the ancient seat of universal knowledge. Multi-tiered cascade reading room, Antiquities Museum, Manuscript Museum, planetarium, and art galleries.',
          zh: '古代知识殿堂的辉煌复兴。11层阶梯式浩瀚阅览大厅、珍贵古籍手稿博物馆、考古博物馆与天文馆。'
        },
        included: {
          ru: ['Гид-тур по главному читальному залу', 'Музей древностей внутри библиотеки', 'Архитектурный экскурс'],
          en: ['Main reading hall tour', 'Antiquities Museum admission', 'Architectural exploration'],
          zh: ['主阅览大厅参观', '馆内考古与古籍博物馆入内', '现代建筑与文化复兴精讲']
        }
      }
    ]
  },
  {
    id: 'safari',
    name: {
      ru: 'Сафари в Белую и Чёрную Пустыни',
      en: 'White & Black Desert Safari',
      zh: '黑白沙漠探险与星空露营'
    },
    tagline: {
      ru: 'Марсианские пейзажи, белоснежные известняковые скульптуры и ночь у костра под звездами',
      en: 'Martian landscapes, chalk sculptures, and nights under infinite Sahara stars',
      zh: '火星火山口地貌、如梦似幻的白色风蚀蘑菇石与绝美银河露营'
    },
    coverImage: 'assets/photos/photo_06.jpg',
    badge: {
      ru: '2 Дня / 1 Ночь или Однодневный',
      en: '2D/1N Camp or Day Trip',
      zh: '2天1晚露营或一日游'
    },
    venues: [
      {
        id: 'safari-white-desert',
        name: {
          ru: 'Белая Пустыня (Национальный парк Сахра аль-Бейда)',
          en: 'The White Desert National Park',
          zh: '白沙漠国家公园（自然风蚀雕塑）'
        },
        duration: 'Full Day / Overnight',
        highlight: {
          ru: 'Гигантские природные известняковые скульптуры: «Гриб и Цыпленок», «Сфинкс», «Верблюд»',
          en: 'Surreal natural chalk monoliths: "Mushroom & Chicken", "The Sphinx", "Ice Cream Cone"',
          zh: '大自然的鬼斧神工：著名的“蘑菇与小鸡”、“狮身人面”与白垩岩奇石'
        },
        description: {
          ru: 'Одно из самых сюрреалистических мест на планете. Миллионы лет назад здесь было дно океана; сегодня это ослепительно белая пустыня из мела и известняка, которая на закате окрашивается в нежно-розовые и золотые тона.',
          en: 'One of the most surreal landscapes on Earth. Ancient seabed turned into brilliant snow-white chalk sculptures sculpted by wind over millennia, glowing pink at sunset.',
          zh: '地球上最像外星的地方之一。远古海底演化为白垩岩雕塑，日落时分折射出粉紫与流金光泽。'
        },
        included: {
          ru: ['Джип-сафари 4x4 Toyota Land Cruiser', 'Пешие прогулки среди скульптур', 'Закатная фотосессия', 'Сэндбординг по дюнам'],
          en: ['4x4 Toyota Land Cruiser safari', 'Walking among giant chalk formations', 'Sunset photo expedition', 'Dune sandboarding'],
          zh: ['专业4x4越野巡洋舰穿越', '巨型白垩岩奇景漫步', '绝美日落大片拍摄', '高沙丘滑沙体验']
        }
      },
      {
        id: 'safari-black-desert',
        name: {
          ru: 'Чёрная Пустыня (Вулканические холмы)',
          en: 'The Black Desert (Volcanic Hills)',
          zh: '黑沙漠（火山岩锥丘与玄武岩奇观）'
        },
        duration: '2 - 3 hours',
        highlight: {
          ru: 'Конусообразные холмы, покрытые черным базальтом и железным песчаником',
          en: 'Eerie volcanic cone-shaped mountains dusted with black dolerite and basalt',
          zh: '数万年前火山喷发形成的黑色玄武岩锥形丘陵群'
        },
        description: {
          ru: 'Контраст черных вершин и оранжевого песка. Подъем на гору Английского флага (Gebel el-Ingliz) дарит панораму бесконечной черной пустыни, напоминающей марсианские кратеры.',
          en: 'Dramatic contrast of dark volcanic crust over golden sands. Climbing the English Mountain rewards you with an otherworldly panoramic sweep across volcanic peaks.',
          zh: '黑色火山碎屑与金黄沙漠的强烈视觉冲击。登顶英国山，尽览外星一般的壮阔熔岩旷野。'
        },
        included: {
          ru: ['Подъем на панорамную вершину', 'Остановка на фотолокациях', 'Рассказ о геологическом происхождении'],
          en: ['Panoramic peak ascent', 'Epic photo stops', 'Geological expedition insights'],
          zh: ['登顶观景丘陵俯瞰', '火星地貌绝佳打卡点', '火山地质奇观深度讲解']
        }
      },
      {
        id: 'safari-crystal-mountain-agabat',
        name: {
          ru: 'Хрустальная Гора и Долина Акабат (Valley of Agabat)',
          en: 'Crystal Mountain & The Valley of Agabat',
          zh: '水晶山与阿加巴特峡谷（砂岩金字塔山谷）'
        },
        duration: '2 hours',
        highlight: {
          ru: 'Природная арка из сверкающего кальцитового кварца и величественный каньон Акабат',
          en: 'Natural arch formed of sparkling calcite crystal and colossal sandstone canyons',
          zh: '由纯天然方解石水晶天然凝结的奇迹拱门与宏伟的阿加巴特峡谷'
        },
        description: {
          ru: 'Хрустальная гора — редчайшее геологическое образование из сияющих на солнце кристаллов. Долина Акабат («Трудная долина») впечатляет гигантскими скалами посреди шелковых барханов.',
          en: 'Crystal Mountain sparkles under direct sunlight like a diamond cave roof. Agabat valley features soaring standalone limestone pillars rising from pristine dunes.',
          zh: '水晶山在烈日下如钻石般熠熠生辉。阿加巴特峡谷巍峨的岩柱拔地而起，宛如沙漠中的天然神庙。'
        },
        included: {
          ru: ['Осмотр кристаллической арки', 'Экстремальное вождение по дюнам Акабат', 'Сбор фотоматериалов'],
          en: ['Crystal arch exploration', 'High-dune driving thrills in Agabat', 'Landscape photography'],
          zh: ['水晶拱门探奇', '阿加巴特沙丘越野冲沙', '风光大片拍摄指导']
        }
      },
      {
        id: 'safari-bedouin-camp-bahariya',
        name: {
          ru: 'Бедуинский Лагерь, Оазис Бахария и Горячие Источники',
          en: 'Bedouin Camp, Bahariya Oasis & Hot Springs',
          zh: '贝都因星空营地、巴哈利亚绿洲与地热温泉'
        },
        duration: 'Overnight experience',
        highlight: {
          ru: 'Ужин у костра под миллиардами звезд, бедуинский чай, традиционная еда Zarb и ночлег в шатрах',
          en: 'Campfire BBQ under Milky Way, aromatic Bedouin tea, Zarb subterranean cooking, desert tents',
          zh: '银河下的贝都因篝火晚宴、地道地坑烤肉（Zarb）、传统红茶与沙漠特色帐篷'
        },
        description: {
          ru: 'Настоящее погружение в атмосферу Сахары. Купание в природных минеральных источниках оазиса Бахария, свежие финики, бедуинские песни у ночного костра и абсолютная тишина вселенной.',
          en: 'Pure Saharan magic. Soak in warm sulfur hot springs at Bahariya oasis, feast on fresh dates and BBQ cooked under the sand, sleep under unpolluted starry skies.',
          zh: '纯正撒哈拉狂想曲。浸泡于巴哈利亚天然硫磺温泉，品尝新鲜椰枣与沙下焖烤美食，枕着银河星斗入眠。'
        },
        included: {
          ru: ['Все питание (обед, бедуинский ужин BBQ, завтрак)', 'Палатки, спальники, коврики', 'Горячие напитки и бутилированная вода', 'Купание в горячих источниках'],
          en: ['All meals (Lunch, Bedouin BBQ Dinner, Breakfast)', 'Tents, sleeping bags, mattresses', 'Tea, coffee, mineral water', 'Hot spring mineral bath'],
          zh: ['全程餐食（沙漠野餐、贝都因烤肉晚宴、早餐）', '高品质露营帐篷、睡袋及防潮垫', '现煮茶饮、咖啡与纯净水无限畅饮', '绿洲天然温泉疗养体验']
        }
      }
    ]
  },
  {
    id: 'aswan',
    name: {
      ru: 'Асуан & Нубийское Королевство',
      en: 'Aswan & Nubian Culture',
      zh: '阿斯旺与努比亚黄金国度'
    },
    tagline: {
      ru: 'Изумрудный Нил, островной храм богини Исиды и скальный шедевр Абу-Симбел',
      en: 'Emerald Nile, island temple of Isis, and monumental rock-cut Abu Simbel',
      zh: '翡翠般的尼罗河、伊西斯神庙秘境与震撼人心的阿布辛贝勒双神庙'
    },
    coverImage: 'assets/photos/photo_04.jpg',
    badge: {
      ru: '7 Великих Достопримечательностей',
      en: '7 Majestic Wonders',
      zh: '7大神庙与遗迹'
    },
    venues: [
      {
        id: 'aswan-philae-temple',
        name: {
          ru: 'Храм Филе — Святилище Богини Исиды',
          en: 'Philae Temple — Sanctuary of Goddess Isis',
          zh: '菲莱神庙（伊西斯女神神圣岛屿）'
        },
        duration: '2 - 2.5 hours',
        highlight: {
          ru: 'Романтичный островной храм посреди Нила, спасенный ЮНЕСКО от затопления',
          en: 'Romantic island temple complex dedicated to Isis, rescued stone-by-stone by UNESCO',
          zh: '坐落于尼罗河心岛屿的浪漫伊西斯神庙，由联合国教科文组织逐石迁移抢救'
        },
        description: {
          ru: 'Главный культовый центр богини материнства и магии Исиды. Перевезен на остров Агилкия. Великолепные колоннады Нектанеба, святилище Осириса и павильон Траяна на фоне бирюзовой воды.',
          en: 'The heart of Isis worship located on Agilkia Island. Featuring the majestic Colonnade of Nectanebo, the Hypostyle Hall, and Trajans Kiosk reflecting in the Nile.',
          zh: '献给爱与魔法之神伊西斯。漫步于阿吉勒基亚岛，欣赏图拉真凉亭与宏伟柱廊在碧波中的倒影。'
        },
        included: {
          ru: ['Живописная поездка на моторной лодке по Нилу', 'Экскурсия по всем святилищам острова', 'Посещение Павильона Траяна'],
          en: ['Scenic Nile motorboat cruise to the island', 'Complete island sanctuary tour', 'Trajans Kiosk exploration'],
          zh: ['尼罗河风景机动船往返接送', '岛上各主神殿深度导览', '图拉真凉亭拍照打卡']
        }
      },
      {
        id: 'aswan-high-dam',
        name: {
          ru: 'Асуанская Верхняя Плотина (High Dam)',
          en: 'Aswan High Dam (Sadd el-Aali)',
          zh: '阿斯旺大坝（现代工程奇迹）'
        },
        duration: '45 mins - 1 hour',
        highlight: {
          ru: 'Грандиозный инженерный проект XX века, создавший озеро Насер длиной 500 км',
          en: 'Colossal 20th-century engineering feat that created 500km Lake Nasser',
          zh: '20世纪人类水利工程奇迹，造就长达500公里的纳赛尔人工湖'
        },
        description: {
          ru: 'Построена при поддержке советских инженеров в 1960-1970 гг. Плотина спасла Египет от разрушительных наводнений и обеспечила страну электричеством. С вершины открывается вид на озеро Насер и памятник советско-египетской дружбе.',
          en: 'Constructed in 1960-1970 with Soviet engineers. Tamed the Nile river floods and supplies green hydro power. Panoramic views across Lake Nasser and the Lotus-shaped monument.',
          zh: '1960-1970年建造的巨型水坝，驯服了泛滥的尼罗河。登坝饱览纳赛尔湖壮阔水色与莲花形纪念碑。'
        },
        included: {
          ru: ['Осмотр плотины и озера Насер', 'История проектирования и строительства', 'Панорамная смотровая площадка'],
          en: ['Dam summit & Lake Nasser view', 'Engineering & historical narrative', 'Lookout terrace'],
          zh: ['大坝全景观光平台', '大坝建设与搬迁文物的壮烈历史', '纳赛尔湖广阔视野']
        }
      },
      {
        id: 'aswan-unfinished-obelisk',
        name: {
          ru: 'Незаконченный Обелиск царицы Хатшепсут',
          en: 'The Unfinished Obelisk of Queen Hatshepsut',
          zh: '未完成的方尖碑（古代采石场）'
        },
        duration: '1 hour',
        highlight: {
          ru: 'Крупнейший в мире древний монолит весом 1200 тонн прямо в гранитном карьере',
          en: 'Worlds heaviest ancient stone monolith (1,200 tons) still embedded in granite quarry',
          zh: '重达1200吨的全球最大古代整石方尖碑，至今仍连在红色花岗岩原生矿床中'
        },
        description: {
          ru: 'Каменоломня розового гранита, откуда фараоны брали камень для всех храмов и саркофагов Египта. Если бы 42-метровый обелиск был завершен, он стал бы самым высоким в истории.',
          en: 'The northern pink granite quarries that supplied every pharaoh with stone for temples and colossi. Shows precisely how ancient craftsmen chiseled granite using diorite balls.',
          zh: '古埃及皇家粉红花岗岩采石场。完整揭示42米高方尖碑如何利用闪长岩圆石与火烧水浇工艺开凿切割。'
        },
        included: {
          ru: ['Прогулка по античному карьеру', 'Объяснение технологий камнеобработки', 'Смотровые площадки над обелиском'],
          en: ['Quarry archaeological trail', 'Ancient quarrying technique explanation', 'Overlook viewpoints'],
          zh: ['采石场考古步道导览', '古埃及高超石雕黑科技解密', '俯瞰巨碑全景平台']
        }
      },
      {
        id: 'aswan-nubian-village',
        name: {
          ru: 'Красочная Нубийская Деревня и Нильская Прогулка',
          en: 'Colorful Nubian Village & Nile Felucca Boat Ride',
          zh: '彩色努比亚村庄与尼罗河三桅帆船'
        },
        duration: '2.5 - 3 hours',
        highlight: {
          ru: 'Яркие радужные дома, домашние крокодилы, чай из гибискуса каркаде и роспись хной',
          en: 'Vibrant rainbow houses, pet crocodiles, refreshing karkadeh tea, and henna body art',
          zh: '彩虹般绚烂的多彩房屋、驯养活体尼罗鳄、洛神花茶与贝都因海娜纹身'
        },
        description: {
          ru: 'Путешествие на катере мимо островов Элефантины и Нильских порогов в аутентичную деревню народа нубийцев. Знакомство с их уникальным языком, музыкой, культурой и гостеприимством.',
          en: 'A scenic boat ride through Nile cataracts and nature reserves to the cheerful Nubian village of Gharb Soheil. Experience ancient culture, music, spices, and tea inside a Nubian home.',
          zh: '乘船穿行于第一瀑布群自然保护区，抵达索海尔西岸努比亚村。走进色彩斑斓的居民庭院，感受悠扬音乐与热情待客之道。'
        },
        included: {
          ru: ['Поездка на лодке по Нилу среди гранитных валунов', 'Посещение нубийского традиционного дома', 'Угощение каркаде и знакомство с крокодилами'],
          en: ['Scenic boat ride through Nile nature reserve', 'Traditional Nubian home hospitality', 'Hibiscus tea & crocodile encounter'],
          zh: ['尼罗河风景游船往返', '探访传统努比亚彩绘家庭', '品尝正宗洛神花红茶与鳄鱼互动']
        }
      },
      {
        id: 'aswan-abu-simbel-temple',
        name: {
          ru: 'Скальные Храмы Абу-Симбел (Рамсес II и Нефертари)',
          en: 'Abu Simbel Temples (Ramses II & Queen Nefertari)',
          zh: '阿布辛贝勒神庙（拉美西斯二世与奈菲尔塔莉王后）'
        },
        duration: 'Full Day excursion (approx. 3h drive each way or flight)',
        highlight: {
          ru: 'Четыре 20-метровых колосса Рамсеса II, высеченных в скале на берегу озера Насер',
          en: 'Four 20-meter colossal seated statues carved into mountain overlooking Lake Nasser',
          zh: '依山开凿的四尊高达20米的拉美西斯二世巨型坐像，直面纳赛尔湖'
        },
        description: {
          ru: 'Величайший триумф древнеегипетского зодчества и непревзойденная спасательная операция ЮНЕСКО, переместившая храмы на 65 метров выше. Дважды в год луч солнца проникает в глубь святилища и озаряет лицо царя.',
          en: 'The crown jewel of pharaonic monuments. Saved from the rising waters by cutting entire temples into blocks. The solar alignment phenomenon illuminates the inner sanctuary twice a year.',
          zh: '古埃及历史最壮丽的神庙之一。联合国教科文组织将其切割成上千块巨石整体抬升65米。每年两次“太阳节”阳光直射圣殿深处。'
        },
        included: {
          ru: ['Организация комфортного трансфера с кондиционером или авиабилетов', 'Полный тур по Большому Храму Рамсеса II', 'Тур по Малому Храму царицы Нефертари'],
          en: ['Comfortable private AC van / domestic flight booking', 'Great Temple of Ramses II guided tour', 'Hathor Temple of Nefertari guided tour'],
          zh: ['豪华空调商务车/国内机票预订服务', '拉美西斯二世主神庙深度游', '奈菲尔塔莉哈托尔神庙游览']
        }
      },
      {
        id: 'aswan-kom-ombo-temple',
        name: {
          ru: 'Двойной Храм Ком-Омбо (Храм Собека и Гора)',
          en: 'Double Temple of Kom Ombo (Sobek & Haroeris)',
          zh: '考姆翁布双神庙（鳄鱼神索贝克与鹰神荷鲁斯）'
        },
        duration: '1.5 hours',
        highlight: {
          ru: 'Уникальный симметричный храм на изгибе Нила и Музей Мумифицированных Крокодилов',
          en: 'Unique symmetrical twin temple on the Nile bend + Crocodile Mummy Museum',
          zh: '尼罗河畔罕见对称双神殿与神秘木乃伊鳄鱼博物馆'
        },
        description: {
          ru: 'Посвящен сразу двум богам: крокодилоголовому Собеку и сокологоловому Гору Старшему. Здесь сохранились древнейшие в мире рельефы с хирургическими медицинскими инструментами и календарь.',
          en: 'Dedicated to two rival deities: Sobek the crocodile and Horus the falcon. Famous for the worlds earliest relief engravings of surgical medical instruments and ancient calendar.',
          zh: '同时供奉鳄鱼神与老鹰神。神殿墙壁上至今完整保留着世界上最早的古埃及外科手术器械浮雕与农历日历。'
        },
        included: {
          ru: ['Экскурсия по храму Ком-Омбо', 'Вход в Музей мумий крокодилов', 'Расшифровка древних медицинских барельефов'],
          en: ['Kom Ombo Temple guided tour', 'Crocodile Mummies Museum entry', 'Deciphering ancient surgical reliefs'],
          zh: ['考姆翁布双神殿导览', '鳄鱼木乃伊博物馆参观', '古埃及医学手术器械浮雕图解']
        }
      },
      {
        id: 'aswan-edfu-temple',
        name: {
          ru: 'Храм Гора в Эдфу',
          en: 'Temple of Horus at Edfu',
          zh: '埃德富荷鲁斯神庙'
        },
        duration: '2 hours',
        highlight: {
          ru: 'Самый грандиозный и лучше всего сохранившийся культовый храм во всем Египте',
          en: 'The most complete and best-preserved ancient temple in all of Egypt',
          zh: '全埃及保存最完整、气势最宏伟的托勒密王朝神庙'
        },
        description: {
          ru: 'Построен во времена Птолемеев (237–57 гг. до н.э.). Благодаря тому, что храм веками был засыпан речным песком, его 36-метровые пилоны, крыши, залы и гранитная статуя сокола Гора дошли до нас в идеальном виде.',
          en: 'Preserved under Nile silt and desert sand for millennia. Featuring colossal 36m pylons, pristine roofed hypostyle halls, and the famous black granite Falcon statue guarding the court.',
          zh: '因千年风沙掩埋而奇迹般完整保存。36米高的雄伟塔门、完好无损的屋顶石厅与黑花岗岩鹰神雕像令人叹为观止。'
        },
        included: {
          ru: ['Поездка на традиционной конной повозке Калеше', 'Экскурсия по всем 12 залам храма', 'Легенда о битве Гора и Сета'],
          en: ['Traditional horse-drawn carriage ride to temple', '12 monumental halls guided tour', 'Epic Myth of Horus & Seth battle'],
          zh: ['特色马车往返神庙接送', '12大宏伟殿堂深度巡礼', '荷鲁斯大战赛特神话史诗解密']
        }
      }
    ]
  },
  {
    id: 'luxor',
    name: {
      ru: 'Луксор — Фивы (Крупнейший Музей Мира)',
      en: 'Luxor — Ancient Thebes (Worlds Open-Air Capital)',
      zh: '卢克索（古都底比斯·世界最大露天博物馆）'
    },
    tagline: {
      ru: 'Величие Нового Царства: Карнак, Долина Царей и полет на шаре на рассвете',
      en: 'Grandeur of New Kingdom: Karnak, Valley of Kings, and sunrise ballooning',
      zh: '新王国法老荣耀：卡纳克、帝王谷与日出热气球'
    },
    coverImage: 'assets/photos/photo_20.jpg',
    badge: {
      ru: '9 Шедевров + Шар',
      en: '9 Wonders + Balloon',
      zh: '9大奇观+热气球'
    },
    venues: [
      {
        id: 'luxor-karnak-temple',
        name: {
          ru: 'Карнакский Храмовый Комплекс',
          en: 'Karnak Temple Complex',
          zh: '卡纳克神庙建筑群'
        },
        duration: '2.5 - 3 hours',
        highlight: {
          ru: 'Великий Гипостильный зал со 134 колоссальными колоннами высотой с 7-этажный дом',
          en: 'Great Hypostyle Hall with 134 colossal columns reaching 21 meters high',
          zh: '巨柱大厅：134根高达21米（约7层楼高）的参天石柱林'
        },
        description: {
          ru: 'Самое грандиозное религиозное сооружение в истории человечества, строившееся более 1500 лет более чем 30 фараонами. Аллея бараноголовых сфинксов, гигантские обелиски царицы Хатшепсут и священное озеро со скарабеем.',
          en: 'The largest religious complex ever constructed by mankind across 1,500 years by 30+ pharaohs. Ram-headed sphinxes, towering Hatshepsut obelisks, and the giant sacred scarab beetle.',
          zh: '人类历史上规模最浩大的宗教建筑群，历经30余位法老逾1500年扩建。羊头狮身神道、哈特谢普苏特方尖碑与圣湖圣甲虫。'
        },
        included: {
          ru: ['Гид-экскурсия по Главному святилищу Амона-Ра', 'Обелиски Хатшепсут и Тутмоса I', 'Ритуал исполнения желаний у священного Скарабея'],
          en: ['Temple of Amun-Ra in-depth tour', 'Obelisks of Hatshepsut & Thutmose I', 'Sacred Scarab wish-making ritual'],
          zh: ['阿蒙-拉主神殿深度精讲', '女王与图特摩斯一方尖碑', '绕圣甲虫祈福体验']
        }
      },
      {
        id: 'luxor-luxor-temple',
        name: {
          ru: 'Луксорский Храм Амона-Ра',
          en: 'Luxor Temple of Amun-Ra',
          zh: '卢克索神庙'
        },
        duration: '1.5 - 2 hours',
        highlight: {
          ru: 'Аллея Сфинксов длиной 2.7 км и завораживающая вечерняя подсветка',
          en: '2.7-kilometer restored Avenue of Sphinxes & dramatic night illumination',
          zh: '连接卡纳克的2.7公里狮身人面像大道与美轮美奂的夜间灯光'
        },
        description: {
          ru: 'Расположен прямо в центре города на берегу Нила. Построен Аменхотепом III и Рамсесом II для ежегодного праздника плодородия Опет. Вечером храм подсвечивается золотыми прожекторами, создавая мистическую атмосферу.',
          en: 'Located in the vibrant heart of the city right by the Nile. Built by Amenhotep III and Ramses II for the sacred Opet Festival. Magical when illuminated under evening skies.',
          zh: '坐落于尼罗河畔市中心。由阿蒙霍特普三世与拉美西斯二世为奥佩特节建造。夜晚金光映衬，宛若梦境。'
        },
        included: {
          ru: ['Вечерний тур с подсветкой', 'Осмотр статуй Рамсеса II и пилонов', 'Прогулка по началу Аллеи Сфинксов'],
          en: ['Night illumination guided walk', 'Colossi of Ramses II & grand pylon', 'Avenue of Sphinxes exploration'],
          zh: ['晚间梦幻灯光导览', '拉美西斯二世巨像与主塔门', '狮身人面像大道漫步']
        }
      },
      {
        id: 'luxor-luxor-museum',
        name: {
          ru: 'Луксорский Музей Древностей',
          en: 'Luxor Museum of Ancient Art',
          zh: '卢克索博物馆'
        },
        duration: '1.5 hours',
        highlight: {
          ru: 'Превосходная коллекция шедевров фиванской скульптуры и мумий великих воинов-фараонов',
          en: 'Curated masterworks of Theban royal sculpture, Tutankhamun items, and warrior mummies',
          zh: '馆藏极为精致的底比斯法老雕刻艺术品与图特摩斯三世等勇士法老木乃伊'
        },
        description: {
          ru: 'Один из самых красивых и элегантно оформленных музеев Египта. Здесь выставлены артефакты из тайника Луксорского храма, золотые украшения, военная колесница и мумии фараонов Яхмоса I и Рамсеса I.',
          en: 'One of the most impeccably curated museums in the world. Displays the stunning Luxor Cache statues, gold artifacts, royal bows, and royal mummies of Ahmose I and Ramses I.',
          zh: '全球策展陈列最精美考究的博物馆之一。展出卢克索神庙秘藏雕像、图坦卡蒙金饰、战车与王室木乃伊。'
        },
        included: {
          ru: ['Гид-экскурсия по залу шедевров', 'Осмотр залов мумий воинов', 'Анализ уникальных экспонатов тайника'],
          en: ['Masterpieces gallery walk', 'Royal warrior mummies hall', 'Luxor Temple Cachette treasures'],
          zh: ['雕像艺术巅峰展厅导览', '法老王室木乃伊馆精讲', '卢克索神庙藏宝库文物解析']
        }
      },
      {
        id: 'luxor-valley-of-the-kings',
        name: {
          ru: 'Долина Царей (Гробницы Фараонов)',
          en: 'Valley of the Kings (Royal Tombs)',
          zh: '帝王谷（法老地下陵墓）'
        },
        duration: '2.5 - 3 hours',
        highlight: {
          ru: 'Скрытые в скалах усыпальницы с яркими фресками, включая Тутанхамона и Рамсеса',
          en: 'Rock-hewn royal tombs with 3,300-year-old colors preserved as if painted yesterday',
          zh: '隐藏于荒山深处的法老陵墓，3300年前的彩色矿物壁画至今艳丽如初'
        },
        description: {
          ru: 'Место упокоения величайших правителей XVIII, XIX и XX династий: Тутмоса, Сети I, Рамсесов и знаменитого Тутанхамона (KV62). Стены подземных коридоров покрыты «Книгой мертвых» и «Книгой врат».',
          en: 'The royal burial ground of New Kingdom pharaohs (Tutankhamun, Seti I, Ramses VI). Corridor walls adorned with Book of Gates and cosmic ceiling maps.',
          zh: '新王国历代法老的长眠之所。沿地下甬道下潜，探访刻满《死亡之书》与璀璨星空图的墓室。'
        },
        included: {
          ru: ['Вход в 3 лучшие царские гробницы', 'Электрокар по территории долины', 'Возможность добавить гробницу Тутанхамона/Сети I'],
          en: ['Entry to 3 open royal tombs', 'Electric valley shuttle cart', 'Optional Tutankhamun / Seti I entry'],
          zh: ['精选3座开放法老王陵参观', '景区环保电瓶车接送', '可升级图坦卡蒙/塞提一世特展陵墓']
        }
      },
      {
        id: 'luxor-hatshepsut-temple',
        name: {
          ru: 'Заупокойный Храм Царицы Хатшепсут (Дейр-эль-Бахри)',
          en: 'Mortuary Temple of Queen Hatshepsut (Deir el-Bahari)',
          zh: '哈特谢普苏特女王神庙（代尔埃尔巴哈里）'
        },
        duration: '1.5 - 2 hours',
        highlight: {
          ru: 'Трехуровневый террасный шедевр архитектора Сененмута, встроенный в скалу',
          en: 'Dramatic 3-tiered colonnaded terraces designed by Senenmut built into limestone cliffs',
          zh: '由皇家建筑师塞宁穆特设计、依悬崖阶梯式筑起的3层宏伟柱廊神庙'
        },
        description: {
          ru: 'Храм единственной женщины-фараона, правившей Египтом в период его наивысшего расцвета. Известен барельефами об экспедиции в загадочную страну Пунт, часовнями богини Хатхор и бога Анубиса.',
          en: 'Dedicated to the most powerful female pharaoh. Famous for colorful reliefs of the trading expedition to the Land of Punt, birth myth colonnade, and Hathor sanctuary.',
          zh: '纪念古埃及唯一掌权女法老。以奔赴神秘蓬特之国的航海浮雕、哈托尔女神殿与阿努比斯圣坛闻名于世。'
        },
        included: {
          ru: ['Гид-экскурсия по 3 террасам', 'Барельефы экспедиции в Пунт', 'Святилища Хатхор и Анубиса'],
          en: ['Tour across all 3 grand terraces', 'Punt expedition colored reliefs', 'Hathor & Anubis chapels'],
          zh: ['三层宏伟大露台导览', '蓬特贸易舰队彩色壁画讲解', '哈托尔与阿努比斯小礼拜堂']
        }
      },
      {
        id: 'luxor-tombs-of-the-nobles',
        name: {
          ru: 'Гробницы Знати и Вельмож (Tombs of the Nobles)',
          en: 'Tombs of the Nobles',
          zh: '贵族墓（底比斯高官壁画墓群）'
        },
        duration: '1.5 hours',
        highlight: {
          ru: 'Живые сцены повседневной жизни: сбор винограда, охота в тростниках и танцы',
          en: 'Vivid snapshots of ancient daily life: grape harvesting, fishing, feasting, and banquets',
          zh: '极具生活气息的壁画长卷：采摘葡萄、尼罗河捕鱼打猎与古代宫廷乐舞'
        },
        description: {
          ru: 'В отличие от царских гробниц, посвященных загробному миру, в усыпальницах визирей, жрецов и художников (Рамосе, Нахт, Менна) изображена реальная жизнь древних египтян во всех деталях.',
          en: 'Unlike formal pharaoh tombs focused on underworld gods, noble tombs (Menna, Nakht, Ramose) depict joyful secular life: wine-making, agriculture, music, and family portraits.',
          zh: '与法老墓侧重阴间神灵不同，大臣与画师之墓（门纳、纳克特、拉摩斯）描绘古埃及真实农耕酿酒与人间烟火。'
        },
        included: {
          ru: ['Посещение гробниц Нахта и Менны', 'Уникальные бытовые сцены древности', 'Рассказ о жизни простых египтян'],
          en: ['Entry to selected noble tombs (Nakht/Menna)', 'Daily life murals deciphered', 'Social history insights'],
          zh: ['门纳与纳克特精选贵族墓入内', '古埃及日常生活壁画深度赏析', '平民与官僚社会风俗讲解']
        }
      },
      {
        id: 'luxor-carter-house',
        name: {
          ru: 'Дом Говарда Картера и Реплика Гробницы Тутанхамона',
          en: 'Howard Carter House & Tutankhamun Replica Tomb',
          zh: '霍华德·卡特故居与图坦卡蒙陵墓1:1复刻馆'
        },
        duration: '1 hour',
        highlight: {
          ru: 'Атмосфера археологической романтики 1922 года с подлинными вещами первооткрывателя',
          en: 'The 1922 archeology base camp with original instruments, darkroom, and facsimile tomb',
          zh: '1922年发掘图坦卡蒙基地的原貌复原，含卡特当年留声机、暗房与高科技1:1墓室'
        },
        description: {
          ru: 'Дом британского археолога Говарда Картера, совершившего открытие века. Рядом создана точнейшая факсимильная копия гробницы Тутанхамона со всеми росписями и саркофагом.',
          en: 'The modest mudbrick home where Carter lived during his historic quest. Includes his personal desk, photographic darkroom, and the high-tech Factum Arte tomb replica.',
          zh: '英国考古学家卡特在此度过发掘岁月。展出其打字机、探险日记以及由西班牙顶尖团队复刻的完美墓室。'
        },
        included: {
          ru: ['Осмотр дома Картера и фотолаборатории', 'Посещение точной копии гробницы', 'История великого открытия 1922 года'],
          en: ['Carter home & darkroom tour', 'Exact facsimile tomb entry', 'Story of 1922 tomb discovery'],
          zh: ['故居生活区与暗房游览', '图坦卡蒙复刻墓室探索', '1922年世纪考古发现回顾']
        }
      },
      {
        id: 'luxor-medinet-habu',
        name: {
          ru: 'Храм Мединет-Абу (Заупокойный храм Рамсеса III)',
          en: 'Medinet Habu (Mortuary Temple of Ramses III)',
          zh: '哈布城神庙（拉美西斯三世神庙）'
        },
        duration: '1.5 - 2 hours',
        highlight: {
          ru: 'Глубочайшие рельефы в Египте, сохранившие первозданные краски на потолках и колоннах',
          en: 'Deepest stone-carved relief inscriptions and vibrant ceiling colors in Egypt',
          zh: '全埃及雕刻最深、天花板色彩保留最浓郁震撼的法老神庙'
        },
        description: {
          ru: 'Один из самых впечатляющих храмов Западного берега. Стены и колонны покрыты глубокой резьбой, прославляющей победы над «Народами Моря», а внутренние залы сохранили ярко-синие и золотые пигменты.',
          en: 'A fortified temple city showcasing monumental battle scenes against the "Sea Peoples". The ceilings preserve astonishing royal blue and ochre paints untouched for 3,200 years.',
          zh: '宛如坚固城堡的神庙。墙壁上镌刻着击败“海上民族”的壮烈海战图，天顶保留3200年前的群青与明黄矿物原色。'
        },
        included: {
          ru: ['Экскурсия по крепостным воротам Мигдол', 'Колонные залы с сохранившейся краской', 'Сцены морских битв Рамсеса III'],
          en: ['Migdol gate fortification walk', 'Painted hypostyle courts tour', 'Sea Peoples naval battles narrative'],
          zh: ['米格多尔堡垒门楼参观', '浓彩天花板石柱庭院导览', '古代海上大战浮雕长卷解密']
        }
      },
      {
        id: 'luxor-hot-air-balloon',
        name: {
          ru: 'Полет на Воздушном Шаре на Рассвете над Луксором',
          en: 'Sunrise Hot Air Balloon Flight Over Luxor',
          zh: '卢克索日出热气球空中飞行体验'
        },
        duration: '45 - 60 mins flight (approx 2.5h total)',
        highlight: {
          ru: 'Птичий полет на высоте 500 метров над Нилом, Долиной Царей и храмами в первых лучах солнца',
          en: 'Float 500m above the Nile, Valley of Kings, and Hatshepsut as the Sahara sun rises',
          zh: '清晨迎着日出从500米高空俯瞰尼罗河两岸、帝王谷与女王神庙全貌'
        },
        description: {
          ru: 'Незабываемое приключение! Ранний трансфер на катере через Нил, чаепитие, взлет на рассвете и плавный парящий полет над зелеными полями, пустыней и древними храмами Фив.',
          en: 'An unforgettable bucket-list experience. Early morning motorboat crossing with tea, smooth takeoff at dawn, and serene drifting over green farmlands and ancient monuments.',
          zh: '一生必体验的震撼之旅。清晨专船渡过尼罗河，伴随第一缕晨光乘热气球冉冉升空，尽揽绿洲与千年古迹交织的壮丽画卷。'
        },
        included: {
          ru: ['Трансфер из отеля туда и обратно', 'Чай, кофе и легкие закуски', '45-60 минут полета с опытным пилотом', 'Сертификат о полете'],
          en: ['Hotel pickup & drop-off in private van', 'Pre-flight tea & refreshments', '45-60 min flight with licensed pilot', 'Flight certificate souvenir'],
          zh: ['酒店专车往返接送与渡船', '飞行前热茶、咖啡与茶点', '资深飞行长45-60分钟平稳飞行', '精美飞行荣誉证书']
        }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DESTINATIONS_DATA };
}
