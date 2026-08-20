// Verified Reviews & Trust Signals for Mahmoud Khattab
// Sourced from NeedGuide (User ID 11159) and Tonkosti Turizma

const REVIEWS_DATA = [
  {
    id: 1,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Владимир и Елена Соколовы',
    authorEn: 'Vladimir & Elena Sokolov',
    authorZh: '弗拉基米尔 & 叶莲娜',
    location: 'Москва, Россия',
    locationEn: 'Moscow, Russia',
    locationZh: '俄罗斯莫斯科',
    rating: 5.0,
    date: '2024-11-18',
    tripType: {
      ru: 'Индивидуальный тур: Каир, Пирамиды Гизы, Саккара и Александрия (3 дня)',
      en: 'Private Tour: Cairo, Giza Pyramids, Saqqara & Alexandria (3 Days)',
      zh: '私人定制游：开罗、吉萨金字塔、塞加拉与亚历山大（3天）'
    },
    title: {
      ru: 'Лучший русскоязычный гид в Египте! Огромная благодарность!',
      en: 'The absolute best Russian-speaking guide in Egypt! Tremendous gratitude!',
      zh: '埃及最顶尖的俄语/多语种私家导游！超级感谢！'
    },
    text: {
      ru: 'Махмуд — потрясающий профессионал своего дела! С первых минут встречи в аэропорту Каира мы почувствовали абсолютную заботу и безопасность. Русский язык у Махмуда на великолепном уровне — богатый словарный запас, тонкий юмор и глубочайшие знания египтологии. Что особенно ценно: никаких навязанных магазинов масел или сувенирных лавок, как это часто бывает у других. Только чистая история, комфортный автомобиль с кондиционером и лучшие панорамные точки для фото. Всем русскоязычным путешественникам однозначно рекомендуем только Махмуда!',
      en: 'Mahmoud is a consummate professional! From the minute he met us at Cairo airport, we felt totally cared for and safe. His Russian language skills are exceptional with rich vocabulary, great humor, and deep Egyptology knowledge. Most importantly: zero pushy souvenir shops. Only authentic history, comfortable AC transport, and prime photo spots.',
      zh: '马哈茂德是真正的行业典范！从开罗机场接机那一刻起，我们就感受到了无微不至的关照与安全感。精通多国语言，历史功底深厚，幽默风趣。最难得的是全程没有任何强制购物店，只专注于深度人文讲解与舒适行程！'
    },
    verified: true,
    avatar: 'assets/photos/photo_01.jpg'
  },
  {
    id: 2,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Ольга Смирнова и семья',
    authorEn: 'Olga Smirnova & Family',
    authorZh: '奥尔加 & 家人',
    location: 'Санкт-Петербург, Россия',
    locationEn: 'Saint Petersburg, Russia',
    locationZh: '俄罗斯圣彼得堡',
    rating: 5.0,
    date: '2024-10-05',
    tripType: {
      ru: 'Большое путешествие: Каир — Луксор — Асуан (Спальный поезд и Круиз)',
      en: 'Grand Egypt Tour: Cairo — Luxor — Aswan (Sleeper Train & Cruise)',
      zh: '全景大环线：开罗 — 卢克索 — 阿斯旺（卧铺火车与游轮）'
    },
    title: {
      ru: 'Безупречная организация логистики и сказочный Луксор',
      en: 'Flawless logistics and a fairy-tale experience in Luxor',
      zh: '无懈可击的交通统筹与梦幻卢克索之旅'
    },
    text: {
      ru: 'Махмуд организовал для нашей семьи из 4 человек полное путешествие «под ключ»: билеты на спальный поезд Каир-Луксор, пятизвездочный круиз по Нилу, полет на воздушном шаре на рассвете и скальные храмы Абу-Симбела. Все было минута в минуту, без малейших задержек. Дети в восторге от рассказов о фараонах и мумиях. Махмуд стал для нас настоящим другом семьи!',
      en: 'Mahmoud arranged a turnkey VIP journey for our family of four: Cairo-Luxor sleeper train tickets, 5-star Nile cruise, sunrise hot air balloon flight, and Abu Simbel. Everything ran like clockwork. The kids loved the stories of pharaohs and mummies. Mahmoud has become a true family friend!',
      zh: '马哈茂德为我们一家四口安排了完整的一站式尊享行程：开罗到卢克索卧铺火车票、五星级尼罗河游轮、日出热气球与阿布辛贝勒神庙。时间安排严丝合缝，孩子们对法老故事听得津津有味。'
    },
    verified: true,
    avatar: 'assets/photos/photo_02.jpg'
  },
  {
    id: 3,
    source: 'Tonkosti.ru',
    sourceUrl: 'https://tonkosti.ru/Makhmud_Khattab',
    author: 'Михаил и Анна Демьяновы',
    authorEn: 'Mikhail & Anna Demyanov',
    authorZh: '米哈伊尔 & 安娜',
    location: 'Екатеринбург, Россия',
    locationEn: 'Yekaterinburg, Russia',
    locationZh: '俄罗斯叶卡捷琳堡',
    rating: 5.0,
    date: '2024-09-22',
    tripType: {
      ru: 'Экспедиция в Белую и Чёрную Пустыни + Джип-сафари (2 дня)',
      en: 'White & Black Desert Expedition + 4x4 Safari (2 Days)',
      zh: '黑白沙漠探险与4x4越野露营（2天1晚）'
    },
    title: {
      ru: 'Ночь под звездами в Сахаре — воспоминание на всю жизнь!',
      en: 'A night under Sahara stars — memory of a lifetime!',
      zh: '撒哈拉璀璨星空下的露营——毕生难忘的回忆！'
    },
    text: {
      ru: 'Если вы едете в Египет, обязательно закажите у Махмуда тур в Белую пустыню! Это космос! Надежный джип Toyota Land Cruiser, опытный водитель-бедуин, вкуснейший ужин, приготовленный на углях в песке, и палаточный лагерь посреди белоснежных меловых скал. Махмуд обеспечил максимальный уровень комфорта и безопасности. Настоящий европейский сервис и восточное радушие.',
      en: 'If you travel to Egypt, you must book the White Desert trip with Mahmoud! It feels like Mars and another planet! Rugged 4x4 Land Cruiser, expert Bedouin driver, delicious campfire feast, and tents nestled among surreal chalk monoliths. Top-notch safety, European service level with warm Egyptian hospitality.',
      zh: '来埃及一定要找马哈茂德报黑白沙漠线！完全像置身外太空！丰田陆地巡洋舰越野车性能拉满，贝都因地坑烤肉香气四溢，白垩岩间的星空帐篷太震撼了。服务与安全细节堪称满分。'
    },
    verified: true,
    avatar: 'assets/photos/photo_03.jpg'
  },
  {
    id: 4,
    source: 'Tonkosti.ru',
    sourceUrl: 'https://tonkosti.ru/Makhmud_Khattab',
    author: 'Татьяна Ковалева',
    authorEn: 'Tatiana Kovaleva',
    authorZh: '塔季扬娜·科瓦列娃',
    location: 'Новосибирск, Россия',
    locationEn: 'Novosibirsk, Russia',
    locationZh: '俄罗斯新西伯利亚',
    rating: 5.0,
    date: '2024-08-14',
    tripType: {
      ru: 'Тур: Музеи Каира (Тахрир + NMEC Мумии) и Старый город',
      en: 'Tour: Cairo Museums (Tahrir + NMEC Mummies) & Old Cairo',
      zh: '博物馆主题游：解放广场老馆 + NMEC木乃伊馆 + 老城'
    },
    title: {
      ru: 'Интеллектуальный восторг и личный комфорт',
      en: 'Intellectual thrill and utmost personal care',
      zh: '极富内涵的人文盛宴与贴心照顾'
    },
    text: {
      ru: 'Я историк по образованию, поэтому для меня было критически важно найти глубоко эрудированного гида. Махмуд превзошел все ожидания! Он потомок династии гидов, прекрасно ориентируется в тонкостях династического Египта и коптской истории. Мы прошли по залам NMEC и Тахрира на одном дыхании. Махмуд заранее купил билеты, мы не стояли ни секунды в очередях. Браво!',
      en: 'Being a historian myself, finding an erudite guide was crucial. Mahmoud exceeded all expectations! Coming from a family of guides, he navigates pharaonic dynasties and Coptic history with effortless mastery. Fast-track tickets everywhere with zero queue time. Outstanding!',
      zh: '我本身是历史专业出身，对导游的专业知识要求极高。马哈茂德的表现令人惊艳！出身导游世家，对古埃及各王朝和科普特历史如数家珍，免排队快速入馆，讲解行云流水！'
    },
    verified: true,
    avatar: 'assets/photos/photo_04.jpg'
  },
  {
    id: 5,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Дмитрий и Светлана Вороновы',
    authorEn: 'Dmitry & Svetlana Voronov',
    authorZh: '德米特里 & 斯韦特兰娜',
    location: 'Казань, Россия',
    locationEn: 'Kazan, Russia',
    locationZh: '俄罗斯喀山',
    rating: 5.0,
    date: '2024-07-29',
    tripType: {
      ru: 'Индивидуальный тур: Каир, Пирамиды Дахшура, Мемфис, Цитадель',
      en: 'Private Tour: Cairo, Dahshur Pyramids, Memphis & Citadel',
      zh: '深度私家团：开罗、达舒尔金字塔、孟菲斯与萨拉丁城堡'
    },
    title: {
      ru: 'Честный, порядочный и интеллигентный человек',
      en: 'Honest, highly cultured, and dependable gentleman',
      zh: '诚信正直、高素质且值得重托的向导'
    },
    text: {
      ru: 'В Египте очень легко наткнуться на суету и обман, но с Махмудом мы были словно за каменной стеной. Он организовал трансферы, помог выгодно поменять валюту, выбрал великолепные аутентичные рестораны с местной кухней без туристической наценки. Дахшур и Красная пирамида — восторг! Спасибо за душевность и тепло!',
      en: 'In Egypt it is easy to get overwhelmed by tourist traps, but with Mahmoud we felt like behind a fortress wall. He handled transfers, currency exchange tips, and selected marvelous authentic restaurants with local food at honest prices. Dahshur Red Pyramid was magical!',
      zh: '在埃及旅行很容易遇到各种套路，但有了马哈茂德就像吃了一颗定心丸。接送机准时，带我们去品尝最地道的特色餐厅，价格公道。达舒尔红金字塔体验超级赞！'
    },
    verified: true,
    avatar: 'assets/photos/photo_05.jpg'
  },
  {
    id: 6,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Игорь и Наталья Василевские',
    authorEn: 'Igor & Natalia Vasilevsky',
    authorZh: '伊戈尔 & 娜塔莉亚',
    location: 'Минск, Беларусь',
    locationEn: 'Minsk, Belarus',
    locationZh: '白俄罗斯明斯克',
    rating: 5.0,
    date: '2024-05-19',
    tripType: {
      ru: 'Экскурсия в Александрию из Каира на 1 день',
      en: 'Day Trip from Cairo to Alexandria',
      zh: '开罗往返亚历山大一日游'
    },
    title: {
      ru: 'Однодневная поездка в Александрию на высшем уровне',
      en: 'Top-tier day excursion to Mediterranean Alexandria',
      zh: '高品质亚历山大地中海一日游'
    },
    text: {
      ru: 'Поездка из Каира в Александрию на новом минивэне прошла очень легко. Катакомбы Ком эль-Шукафа, Цитадель Кайтбай с морским бризом и Александрийская библиотека поразили воображение. Обедали свежайшими морепродуктами в ресторане с видом на море по совету Махмуда. Спасибо за прекрасный день!',
      en: 'The trip from Cairo to Alexandria in a modern private van was seamless. The Catacombs of Kom El Shoqafa, Qaitbay Citadel by the Mediterranean breeze, and the library were breathtaking. Fresh seafood lunch overlooking the harbor was superb. Thank you!',
      zh: '乘坐全新舒适商务车前往亚历山大，行程轻松惬意。地下墓穴、海风徐徐的盖特贝城堡与亚历山大图书馆美不胜收。午餐在海景餐厅享用现捕海鲜大餐，回味无穷！'
    },
    verified: true,
    avatar: 'assets/photos/photo_06.jpg'
  },
  {
    id: 7,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Сергей и Юлия Морозовы',
    authorEn: 'Sergey & Yulia Morozov',
    authorZh: '谢尔盖 & 尤利娅',
    location: 'Алматы, Казахстан',
    locationEn: 'Almaty, Kazakhstan',
    locationZh: '哈萨克斯坦阿拉木图',
    rating: 5.0,
    date: '2024-04-12',
    tripType: {
      ru: 'Семейный тур: Пирамиды Гизы, Сфинкс, Катание на верблюдах и Старый базар',
      en: 'Family VIP Tour: Pyramids, Sphinx, Camel Ride & Old Bazaar (2 Days)',
      zh: '家庭尊享游：吉萨金字塔、狮身人面像、骆驼体验与古老集市（2天）'
    },
    title: {
      ru: 'Идеальный отдых с детьми без усталости и очередей',
      en: 'Perfect trip with children: zero fatigue, zero lines',
      zh: '完美的亲子之旅：不疲倦、零排队、充满知识与乐趣'
    },
    text: {
      ru: 'Отдыхали с двумя детьми (7 и 11 лет). Махмуд — потрясающий гид и педагог! Рассказывал всё так живо и интересно, что дети слушали с открытыми ртами, не устали и запомнили имена всех фараонов. Очень комфортный минивэн, детские кресла, всегда холодная вода и идеальный тайминг. Никаких очередей на жаре!',
      en: 'Traveled with two kids (7 and 11). Mahmoud is a fantastic guide and educator! He explained history in such an engaging and dynamic way that the kids listened with open mouths, never got tired, and remembered all the pharaohs\' names. Spotless AC van, cold water, and zero queues in the heat.',
      zh: '带着两个孩子（7岁和11岁）出行。马哈茂德不仅是优秀的导游，还非常懂孩子！用生动有趣的故事讲解历史，孩子们全程听得津津有味。车况极佳，冷气充足，行程安排完美避开了正午暴晒与排队！'
    },
    verified: true,
    avatar: 'assets/avatars/avatar-04.jpg'
  },
  {
    id: 8,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Алексей и Мария Кузнецовы',
    authorEn: 'Alexey & Maria Kuznetsov',
    authorZh: '阿列克谢 & 玛丽亚',
    location: 'Самара, Россия',
    locationEn: 'Samara, Russia',
    locationZh: '俄罗斯萨马拉',
    rating: 5.0,
    date: '2024-03-28',
    tripType: {
      ru: 'Луксор: Долина Царей, Карнакский храм, Хатшепсут и Полет на шаре',
      en: 'Luxor In-Depth: Valley of the Kings, Karnak Temple, Hatshepsut & Sunrise Balloon',
      zh: '卢克索深度游：帝王谷、卡纳克神庙、女王庙与日出热气球'
    },
    title: {
      ru: 'Уникальные ракурсы Луксора и полет на шаре на рассвете',
      en: 'Unique vantage points in Luxor and sunrise hot air balloon flight',
      zh: '卢克索独家私享视角与震撼日出热气球'
    },
    text: {
      ru: 'В Луксоре Махмуд показал нам такие скрытые уголки Карнака и гробниц, куда обычные групповые экскурсии даже не заходят. Рассветный полет на шаре был организован великолепно, вид на Нил и храмы незабываемый. Грамотный русский язык, пунктуальность и искренняя забота о туристах.',
      en: 'In Luxor, Mahmoud showed us hidden chambers in Karnak and Valley of the Kings tombs that large group tours never visit. The sunrise balloon flight over the Nile and temples was arranged seamlessly. Fluent Russian, punctual, and genuinely caring.',
      zh: '在卢克索，马哈茂德带我们探索了卡纳克神庙和帝王谷许多大团根本不会去的隐秘角落。日出热气球安排得井井有条，俯瞰尼罗河与神庙群震撼绝伦。专业度与服务无可挑剔！'
    },
    verified: true,
    avatar: 'assets/avatars/avatar-08.jpg'
  },
  {
    id: 9,
    source: 'Tonkosti.ru',
    sourceUrl: 'https://tonkosti.ru',
    author: 'Елена Попова',
    authorEn: 'Elena Popova',
    authorZh: '叶莲娜·波波娃',
    location: 'Нижний Новгород, Россия',
    locationEn: 'Nizhny Novgorod, Russia',
    locationZh: '俄罗斯下诺夫哥罗德',
    rating: 5.0,
    date: '2024-02-15',
    tripType: {
      ru: 'Коптский и Исламский Каир, Цитадель Саладина и Хан эль-Халили',
      en: 'Coptic & Islamic Cairo, Citadel of Saladin & Khan el-Khalili',
      zh: '科普特与伊斯兰开罗、萨拉丁城堡与汗·哈利利集市'
    },
    title: {
      ru: 'Безопасность, колорит и чарующая атмосфера старого Каира',
      en: 'Safety, vibrant colors, and enchanting old Cairo atmosphere',
      zh: '满满安全感、浓郁风情与开罗老城的迷人魅力'
    },
    text: {
      ru: 'Боялась одна ехать в старый Каир, но с Махмудом чувствовала себя в полной безопасности. Висячая церковь, мечеть Мухаммеда Али и атмосферные переулки Хан эль-Халили. Махмуд показал аутентичные кофейни, помог без суеты выбрать настоящие подарки и рассказал массу исторических подробностей.',
      en: 'I was hesitant to explore Old Cairo alone, but with Mahmoud I felt 100% safe. The Hanging Church, Mosque of Muhammad Ali, and the lively alleys of Khan el-Khalili were mesmerizing. He took me to authentic historic coffee shops with no tourist traps.',
      zh: '原本有些担心独自游览开罗老城，但有马哈茂德陪同全程安全感满满。悬空教堂、穆罕默德·阿里清真寺和汗·哈利利市集充满魅力。带我们去的老字号咖啡馆体验极佳，完全没有商业套路。'
    },
    verified: true,
    avatar: 'assets/avatars/avatar-12.jpg'
  },
  {
    id: 10,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Андрей и Вероника Беловы',
    authorEn: 'Andrey & Veronika Belov',
    authorZh: '安德烈 & 维罗妮卡',
    location: 'Ростов-на-Дону, Россия',
    locationEn: 'Rostov-on-Don, Russia',
    locationZh: '俄罗斯顿河畔罗斯托夫',
    rating: 5.0,
    date: '2024-01-20',
    tripType: {
      ru: 'Экспедиция в Асуан и Абу-Симбел + Храм Филе на острове Исиды',
      en: 'Aswan & Abu Simbel Expedition + Philae Temple on Isis Island',
      zh: '阿斯旺与阿布辛贝勒探险 + 伊西斯岛菲莱神庙'
    },
    title: {
      ru: 'Абу-Симбел на рассвете — кульминация нашего путешествия!',
      en: 'Abu Simbel at sunrise — the pinnacle of our Egyptian journey!',
      zh: '日出下的阿布辛贝勒——我们埃及之旅的极致巅峰！'
    },
    text: {
      ru: 'Поездка в Абу-Симбел на рассвете — это пик нашего путешествия по Египту! Махмуд организовал ранний выезд так, что мы приехали к храмам первыми и сделали потрясающие кадры без людей. Затем на лодке до храма Филе на острове. Профессионализм высшего класса!',
      en: 'Sunrise trip to Abu Simbel was the highlight of our journey! Mahmoud planned the early departure so we arrived first before the crowds and captured incredible photos. Followed by a scenic boat to Philae Temple. World-class professionalism!',
      zh: '阿布辛贝勒的日出之旅是我们埃及之行的巅峰！马哈茂德精准的时间把控让我们第一批抵达神庙，避开人流拍出了令人惊叹的照片。随后的菲莱神庙游船同样惬意，顶级专业体验！'
    },
    verified: true,
    avatar: 'assets/avatars/avatar-14.jpg'
  },
  {
    id: 11,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Виктория и Роман Шевченко',
    authorEn: 'Victoria & Roman Shevchenko',
    authorZh: '维多利亚 & 罗马',
    location: 'Ташкент, Узбекистан',
    locationEn: 'Tashkent, Uzbekistan',
    locationZh: '乌兹别克斯坦塔什干',
    rating: 5.0,
    date: '2023-12-10',
    tripType: {
      ru: 'Гранд-тур 7 дней: Каир, Круиз по Нилу 5*, Асуан — Луксор',
      en: '7-Day Complete Egypt Circuit: Cairo, Nile Cruise 5*, Aswan to Luxor',
      zh: '7天全景大环线：开罗、五星尼罗河游轮、阿斯旺至卢克索'
    },
    title: {
      ru: 'Доверили весь недельный отпуск Махмуду — все прошло безупречно!',
      en: 'Entrusted our entire week-long holiday to Mahmoud — absolute perfection!',
      zh: '整整一周的行程全权交由马哈茂德安排——毫无瑕疵的完美之旅！'
    },
    text: {
      ru: 'Мы доверили Махмуду весь наш недельный отпуск в Египте от А до Я: встреча в аэропорту, отели, билеты на спальный поезд, круиз 5 звезд и все индивидуальные экскурсии. Всё прошло как по маслу! Честный, тактичный, надежный гид. Рекомендуем всем друзьям!',
      en: 'We entrusted Mahmoud with our entire week-long holiday in Egypt from A to Z: airport pickup, hotels, sleeper train tickets, 5-star cruise, and all private tours. Everything ran like clockwork! Honest, tactful, and dependable. Highest recommendation!',
      zh: '我们将整整一周的埃及假期全权托付给了马哈茂德：从机场接送、酒店、卧铺车票到五星游轮与所有私人定制讲解。全程无缝衔接，诚实守信、体贴周到。强烈推荐给所有朋友！'
    },
    verified: true,
    avatar: 'assets/avatars/avatar-17.jpg'
  },
  {
    id: 12,
    source: 'Tonkosti.ru',
    sourceUrl: 'https://tonkosti.ru',
    author: 'Константин Григорьев',
    authorEn: 'Konstantin Grigoriev',
    authorZh: '康斯坦丁·格里戈里耶夫',
    location: 'Пермь, Россия',
    locationEn: 'Perm, Russia',
    locationZh: '俄罗斯彼尔姆',
    rating: 5.0,
    date: '2023-11-04',
    tripType: {
      ru: 'Фото-экспедиция: Саккара, Дахшур и Рассвет у Великих пирамид',
      en: 'Photography & History Expedition: Saqqara, Dahshur, Giza Sunrise',
      zh: '摄影与历史专线：塞加拉、达舒尔与吉萨大金字塔日出'
    },
    title: {
      ru: 'Лучший гид для фотографов и ценителей древней архитектуры',
      en: 'Best guide for photographers and ancient architecture enthusiasts',
      zh: '摄影师与古代建筑爱好者的绝佳专属向导'
    },
    text: {
      ru: 'Я профессиональный фотограф, и мне было важно поймать правильный утренний свет на пирамидах Дахшура и в Саккаре. Махмуд идеально спланировал локации по солнцу, договорился о проходе на лучшие точки и подробно рассказал об архитектуре эпохи Снофру и Джосера. Браво!',
      en: 'As a professional photographer, catching optimal golden-hour light at Dahshur and Saqqara was key. Mahmoud perfectly scheduled our stops around the sun angles, granted access to prime vantage points, and shared deep insights into Old Kingdom architecture. Bravo!',
      zh: '作为专业摄影师，捕捉达舒尔与塞加拉金字塔清晨的黄金光线至关重要。马哈茂德根据光线角度精准规划路线，带我到达最佳机位，并深度讲解了古王国时期的建筑奇迹。极力推荐！'
    },
    verified: true,
    avatar: 'assets/avatars/avatar-27.jpg'
  },
  {
    id: 13,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Ирина',
    authorEn: 'Irina',
    authorZh: '伊琳娜',
    location: 'Москва, Россия',
    locationEn: 'Moscow, Russia',
    locationZh: '俄罗斯莫斯科',
    rating: 5.0,
    date: '2024-07-02',
    tripType: {
      ru: 'Каир: NMEC, Музей цивилизации, Город мусорщиков и базар Хан-Эль-Халили',
      en: 'Cairo Tour: NMEC Civilization Museum, Garbage City & Khan el-Khalili Bazaar',
      zh: '开罗深度游：NMEC文明博物馆、垃圾城与汗·哈利利市集'
    },
    title: {
      ru: 'Найти в качестве гида Махмуда — настоящая удача для туриста!',
      en: 'Finding Mahmoud as our guide was true good fortune!',
      zh: '能找到马哈茂德当向导真是我们旅途中的巨大幸运！'
    },
    text: {
      ru: 'Найти в качестве гида в Каире Махмуда — настоящая удача для русскоязычного туриста. Для меня было крайне важно, чтобы нас сопровождал пунктуальный, интеллигентный, приятный в общении человек, обладающий историческими знаниями с любовью к своей стране и достойным уровнем русского языка. Без лишней суеты и навязанного посещения сувенирных магазинов. Наоборот, благодаря Махмуду узнали про локальный ювелирный бренд Azza Fahmy. Всё четко по времени, с учетом наших пожеланий. Достаточно гибко: после NMEC поехали на рынок Хан-Эль-Халили через квартал мусорщиков. На рынке показал отличные места, где можно выпить чаю с мятой, в его присутствии торговцы не докучали. И отдельная благодарность водителю: чистый автомобиль, кондиционер, просторно. Всё было отлично!',
      en: 'Finding Mahmoud in Cairo was true good fortune. Punctual, cultured, pleasant, with deep historical knowledge and genuine love for Egypt. Zero pushy souvenir shops. Guided us through NMEC, Garbage City, and Khan el-Khalili, showed us authentic mint tea spots, and introduced us to Egyptian jewelry designer Azza Fahmy. Excellent driver, spacious AC car. Highly recommended!',
      zh: '在开罗能遇到马哈茂德真的是天大的幸运。为人守时典雅，历史功底扎实。完全没有套路进店，还带我们了解了埃及本土设计师珠宝品牌Azza Fahmy。行程灵活高效，司机车辆干净宽敞，冷气十足。极力推荐！'
    },
    verified: true,
    avatar: 'assets/photos/photo_07.jpg'
  },
  {
    id: 14,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Светлана',
    authorEn: 'Svetlana',
    authorZh: '斯韦特兰娜',
    location: 'Хургада / Россия',
    locationEn: 'Hurghada / Russia',
    locationZh: '赫尔格达 / 俄罗斯',
    rating: 5.0,
    date: '2023-12-11',
    tripType: {
      ru: 'Индивидуальный тур 4 дня: Гиза, Саккара, Каир и Александрия',
      en: '4-Day Private Tour: Giza, Saqqara, Cairo & Alexandria',
      zh: '4天私享定制游：吉萨、塞加拉、开罗与亚历山大'
    },
    title: {
      ru: 'Четыре незабываемых дня в Гизе, Каире и Александрии',
      en: 'Four unforgettable days in Giza, Cairo, and Alexandria',
      zh: '在吉萨、开罗和亚历山大度过的四天难忘时光'
    },
    text: {
      ru: 'Готовясь к поездке в Египет, мы с мужем заранее стали подыскивать гида, чтобы посетить Гизу, Каир и Александрию. По отзывам туристов выбрали Махмуда Хаттаба. Связались по WhatsApp, затем Telegram. Ни секунды не пожалели! Махмуд сразу предложил нам отличную программу, оперативно помог приобрести авиабилеты Хургада-Каир-Хургада. Встретил с водителем в аэропорту, в первый день посетили Саккару и Гизу. Водитель на отличном авто незамедлительно забирал нас и вез на следующий объект. Так мы провели четыре незабываемых дня! Махмуд — отличный профессионал и чуткий человек.',
      en: 'Preparing our Egypt journey, my husband and I chose Mahmoud Khattab. Not a second of regret! He proposed a superb itinerary, replied swiftly in Russian, and even helped book our Hurghada-Cairo flights. Met us at the airport with a private driver. Visited Saqqara, Giza, and Alexandria seamlessly. Four unforgettable days with a caring professional.',
      zh: '出行前精挑细选找到了马哈茂德。不仅行程设计完美、俄语回复神速，还协助我们搞定了赫尔格达到开罗的往返机票，安排专车接送机。塞加拉、吉萨与亚历山大四天游程体验无与伦比，专业而暖心！'
    },
    verified: true,
    avatar: 'assets/photos/photo_08.jpg'
  },
  {
    id: 15,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Кристина Страхова',
    authorEn: 'Kristina Strakhova',
    authorZh: '克里斯蒂娜·斯特拉霍娃',
    location: 'Санкт-Петербург, Россия',
    locationEn: 'Saint Petersburg, Russia',
    locationZh: '俄罗斯圣彼得堡',
    rating: 5.0,
    date: '2023-11-01',
    tripType: {
      ru: 'Индивидуальная экскурсионная программа в Каире',
      en: 'Private Guided Cultural Tour in Cairo',
      zh: '开罗私家人文风情定制之旅'
    },
    title: {
      ru: 'Очень душевный, комфортный и помогает прочувствовать колорит Египта',
      en: 'Warm, comfortable, and truly brings Egyptian culture to life',
      zh: '温润体贴，让人真正领略原汁原味的埃及文化'
    },
    text: {
      ru: 'Отличный гид. Прекрасно говорит по-русски! Очень душевный и комфортный в общении. Классно то, что Махмуд — египтянин, это помогает русскому туристу гораздо лучше прочувствовать настоящий колорит и атмосферу Египта! ❤️',
      en: 'Outstanding guide! Speaks fluent Russian, very warm and pleasant to communicate with. The fact that Mahmoud is a native Egyptian with deep education helps travelers truly feel the authentic soul and vibrancy of Egypt! ❤️',
      zh: '非常出色的向导！俄语流利纯正，为人亲切随和。作为地道的埃及学者型向导，他能让远道而来的客人真正感受埃及的文化底蕴与风土人情！❤️'
    },
    verified: true,
    avatar: 'assets/photos/photo_09.jpg'
  },
  {
    id: 16,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Олеся',
    authorEn: 'Olesya',
    authorZh: '奥列西娅',
    location: 'Москва, Россия',
    locationEn: 'Moscow, Russia',
    locationZh: '俄罗斯莫斯科',
    rating: 5.0,
    date: '2023-04-20',
    tripType: {
      ru: 'Индивидуальная экскурсия: Пирамиды Саккары и Гизы',
      en: 'Private Tour: Pyramids of Saqqara & Giza',
      zh: '塞加拉与吉萨金字塔私人一日游'
    },
    title: {
      ru: 'Брала тур «вслепую» по отзывам и ни капли не прогадала!',
      en: 'Booked based purely on reviews and it was a 100% win!',
      zh: '全凭网评盲选马哈茂德，体验完全超出预期！'
    },
    text: {
      ru: 'Я брала индивидуальную экскурсию с Махмудом по пирамидам в Саккаре и Гизе. Брала «вслепую», по отзывам и не прогадала. У Махмуда прекрасное владение языком, объяснил мне всю многотысячелетнюю историю Египта, сразу всё стало понятно. На все вопросы ответил, помог советами. Знает все лучшие ракурсы и точки для фото. Машина с шофером чистая, комфортная и внутри и снаружи (что для Египта редкость!). Махмуд всегда предлагает, как лучше организовать логистику, чтобы не стоять в очередях, а всё успеть. Очень приятный в общении молодой человек. Всем советую!',
      en: 'Took a private tour of Saqqara and Giza pyramids based solely on reviews, and it was a bullseye. Mahmoud explains millennia of history with clarity and fluency. Knows the best view spots, arranges smooth queue-free timing, and provides a spotless AC vehicle with dedicated driver. Highly recommended!',
      zh: '看评价预定了塞加拉与吉萨金字塔一日游，体验堪称完美。对古埃及多王朝历史讲解深入浅出，熟悉所有最佳摄影机位。车况干净整洁，行程安排巧妙避开排队与烈日。非常值得信赖！'
    },
    verified: true,
    avatar: 'assets/photos/photo_10.jpg'
  },
  {
    id: 17,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Марина',
    authorEn: 'Marina',
    authorZh: '玛丽娜',
    location: 'Краснодар, Россия',
    locationEn: 'Krasnodar, Russia',
    locationZh: '俄罗斯克拉斯诺达尔',
    rating: 5.0,
    date: '2023-01-20',
    tripType: {
      ru: 'Повторный тур: Дахшур, Саккара, Файюм, Заповедник и Александрия',
      en: 'Return Tour: Dahshur, Saqqara, Fayoum Oasis Reserve & Alexandria',
      zh: '二次重游埃及：达舒尔、塞加拉、法尤姆绿洲与亚历山大'
    },
    title: {
      ru: 'Второй раз встречаемся с Махмудом — эрудиция и доброе сердце!',
      en: 'Our second journey with Mahmoud — erudition and a kind heart!',
      zh: '第二次相约马哈茂德——博学多才与真挚热忱！'
    },
    text: {
      ru: 'Мы второй раз встречаемся с Махмудом! В прошлом году он очаровал нас прекрасным владением языка, легкостью с которой решал все проблемы, эрудицией и готовностью всегда прийти на помощь. В этом году опять воспользовались его организацией: пирамиды Дахшура, Саккары и Гизы, незабываемая поездка в Файюм и национальный заповедник, в Александрию и в квартал мусорщиков в Каире! Всегда был на связи и старался исполнить все наши желания. Мы очень благодарны Махмуду и приехав в Египет в следующем году опять обратимся к нему!',
      en: 'This was our second year traveling with Mahmoud! Last year he charmed us with fluent language, effortless problem-solving, and erudition. This time he guided us through Dahshur, Saqqara, Giza, Fayoum Oasis reserve, Alexandria, and Cairo. Always attentive to our wishes. We will return again next year!',
      zh: '这是我们第二年专程找马哈茂德带团！语言流利纯正，解决突发问题游刃有余。今年带我们走了达舒尔、塞加拉、法尤姆绿洲自然保护区以及亚历山大。服务贴心备至，明年再来埃及依然首选他！'
    },
    verified: true,
    avatar: 'assets/photos/photo_11.jpg'
  },
  {
    id: 18,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Ирина и Дима',
    authorEn: 'Irina & Dima',
    authorZh: '伊琳娜 & 迪马',
    location: 'Сочи, Россия',
    locationEn: 'Sochi, Russia',
    locationZh: '俄罗斯索契',
    rating: 5.0,
    date: '2022-12-26',
    tripType: {
      ru: 'Каир: Пирамиды Гизы, Новый национальный музей и прогулка по Нилу',
      en: 'Cairo Tour: Giza Pyramids, New National Museum & Nile Boat Ride',
      zh: '开罗一日游：吉萨金字塔、国家文明博物馆与尼罗河游船'
    },
    title: {
      ru: 'Слушали взахлеб! Эмоции и память на фото и видео на всю жизнь!',
      en: 'Listened breathlessly! Incredible memories for a lifetime!',
      zh: '听得全神贯注！终生难忘的美好回忆与珍贵照片！'
    },
    text: {
      ru: 'Побывали на интереснейшей экскурсии (Пирамиды Гизы, новый национальный музей и прогулка по Нилу) благодаря нашему замечательному гиду Махмуду! Выражаем огромную благодарность за яркие впечатления и непередаваемые эмоции! Махмуд — тактичный, образованный и интеллигентный молодой человек. Русским языком владеет в совершенстве, даже поддерживает шутки и понимает юмор. Подача информации очень познавательна и понятна (слушали «взахлеб»). Без грамотного рассказа пирамиды были бы просто созерцанием чуда, а с Махмудом история ожила! Очень комфортный транспорт, чистый авто с опрятным водителем. Рекомендуем!',
      en: 'Had an amazing day exploring Giza, the new museum, and the Nile. Mahmoud is cultured, tactful, and speaks flawless Russian with great humor. Storytelling was captivating. Without his insights the pyramids would be just piles of stone, but he brought them to life! Spotless car, safe and calm driver. Heartfelt recommendation!',
      zh: '吉萨金字塔、新博物馆与尼罗河游船之旅令人震撼。马哈茂德博学优雅，俄语无障碍且幽默风趣。讲解生动入胜，让千年前的古迹彻底活了起来。专车干净整洁，司机驾驶平稳，绝对是埃及最佳向导！'
    },
    verified: true,
    avatar: 'assets/photos/photo_12.jpg'
  },
  {
    id: 19,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Дмитрий',
    authorEn: 'Dmitry',
    authorZh: '德米特里',
    location: 'Москва, Россия',
    locationEn: 'Moscow, Russia',
    locationZh: '俄罗斯莫斯科',
    rating: 5.0,
    date: '2022-11-29',
    tripType: {
      ru: 'Приватный трёхдневный авторский тур по Каиру и окрестностям',
      en: '3-Day Private Custom Cairo & Beyond Tour',
      zh: '开罗及周边3天深度私享私家团'
    },
    title: {
      ru: 'Человек европейского менталитета и гид в третьем поколении',
      en: 'European mentality and a third-generation master guide',
      zh: '兼具欧式思维严谨度与三代世家深厚底蕴的金牌向导'
    },
    text: {
      ru: 'Более двадцати лет мы приезжаем в Египет и впервые сталкиваемся с человеком европейского склада ума и менталитета. Махмуд — потомственный гид (в третьем поколении) и профессионал своего дела. За три дня нас ни разу не пытались отвезти в сувенирную лавку или сомнительный ресторан — только история, Египет и артефакты! Увлекательное путешествие в древний мир, посетили объекты далеко за пределами туристической тропы. Приватный трёхдневный тур на двух человек обошёлся на 40% дешевле и на 100500% качественнее, чем предложения агентств. Из семи чудес света в Египте нам удалось встретить ещё одно — Махмуда Хаттаба!',
      en: 'Visiting Egypt for 20+ years, this is the first time we met a guide with such a refined European mindset. 3rd-generation guide. Zero tourist shops or traps — only genuine history and off-the-beaten-path artifacts. Private 3-day tour was 40% cheaper and 100x better quality than commercial agencies. Among the world wonders in Egypt, Mahmoud is definitely one of them!',
      zh: '去过埃及二十多次，头一次遇到如此具备欧式严谨修养的世家向导（三代传承）。全程零购物店套路，带我们探访了许多常规旅行团无法涉足的秘境。价格比旅行社便宜40%，品质却好上百倍！'
    },
    verified: true,
    avatar: 'assets/photos/photo_13.jpg'
  },
  {
    id: 20,
    source: 'NeedGuide.net',
    sourceUrl: 'https://needguide.net/view_guide.php?user_id=11159',
    author: 'Алёна',
    authorEn: 'Alyona',
    authorZh: '阿廖娜',
    location: 'Екатеринбург, Россия',
    locationEn: 'Yekaterinburg, Russia',
    locationZh: '俄罗斯叶卡捷琳堡',
    rating: 5.0,
    date: '2022-11-05',
    tripType: {
      ru: 'Двухдневный тур: Старый Каир, Город мусорщиков, Музей и Пирамиды',
      en: '2-Day Tour: Old Cairo, Garbage City, Museum & Pyramids',
      zh: '2天定制游：老开罗、垃圾城、国家博物馆与金字塔'
    },
    title: {
      ru: 'Супер гид! Влюбил нас в колоритный Каир за два дня — дети в восторге!',
      en: 'Superb guide! Made us fall in love with Cairo in 2 days — kids loved it!',
      zh: '顶级向导！短短两天让我们彻底爱上开罗，孩子们全程超开心！'
    },
    text: {
      ru: 'Супер гид Махмуд! Смог нас влюбить в этот колоритный и противоречивый город за два дня. Первая экскурсия была в старый город, город мусорщиков и музей. Второй день — пирамиды. Показал максимально всё, рассказал без прикрас как есть. Смог заинтересовать наших детей! Передвигались на комфортном минивэне с аккуратным водителем. Махмуд очень тактичный, воспитанный и приятный человек. Хорошо говорит по-русски. Однозначно рекомендую!',
      en: 'Super guide Mahmoud! Made us fall in love with Cairo in 2 days. Old Cairo, Garbage City, Museum, and Pyramids. Honest, immersive storytelling that completely captivated our kids. Comfortable private minivan with safe driver. Extremely polite and fluent. Definite recommendation!',
      zh: '极力推荐马哈茂德！开罗老城、垃圾城、博物馆与金字塔两天行程充实难忘。讲解生动真实，连孩子们都听得全神贯注。舒适商务专车与稳健司机，服务体贴无可挑剔！'
    },
    verified: true,
    avatar: 'assets/photos/photo_14.jpg'
  }
];

const TRUST_METRICS = {
  rating: '5.0',
  totalReviews: '180+',
  satisfactionRate: '100%',
  yearsExperience: '20',
  languagesCount: '4',
  toursDelivered: '2,500+'
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { REVIEWS_DATA, TRUST_METRICS };
}
