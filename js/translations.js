// Complete Multilingual Dictionary (Russian - Primary Focus, English, Chinese)
// For Mahmoud Khattab - Egyptian Tour Guide

const TRANSLATIONS = {
  ru: {
    pageTitle: 'Махмуд Хаттаб — Частный Русский Гид в Египте | VIP Экскурсии в Каире, Луксоре, Гизе',
    metaDescription: 'Махмуд Хаттаб — лицензированный русскоговорящий частный гид в Египте с 20-летним опытом. Индивидуальные VIP туры по Каиру, Пирамидам Гизы, Луксору, Асуану, Александрии и Белой пустыне.',

    // Navigation
    navHome: 'Главная',
    navAbout: 'О гиде',
    navServices: 'Услуги',
    navDestinations: 'Направления & Локации',
    navTripBuilder: 'Спланировать поездку',
    navReviews: 'Отзывы туристов',
    navGallery: 'Галерея & Видео',
    navContact: 'Контакты',
    btnPlanTrip: 'Связаться',
    brandTagline: 'Ваш личный гид в Египте',
    
    // Top Bar & Badges
    topExperience: '20 лет опыта в туризме (с 2007 г.)',
    topLanguages: 'Языки: Русский • English • 中文 • العربية',
    topWeather: 'Каир: 34°C, солнечно',
    topContactQuick: 'Связаться с гидом: WhatsApp / Telegram / Viber / Line',
    phoneDisplay: '+20 100 968 6874',
    
    // Hero Section
    heroBadge: 'Ваш личный гид в Египте',
    heroTitle: 'Увидеть Египет с Махмудом.',
    heroSubtitle: 'Личное путешествие в вашем ритме',
    heroTagline: 'Я лицензированный частный гид. Покажу Каир, Гизу, Луксор, Асуан и Александрию спокойно, понятно и без туристических ловушек.',
    heroPhotoCaption: 'Махмуд с гостями в Гизе',
    heroStatExp: '20 Лет Опыта',
    heroStatExpSub: 'Гид в 3-м поколении',
    heroBadgeExp: '20 ЛЕТ',
    heroStatRating: '5.0 Рейтинг',
    heroStatRatingSub: 'NeedGuide & Тонкости',
    heroStatLang: '4 Языка',
    heroStatLangSub: 'Свободный русский',
    heroStatTours: '2500+ Туров',
    heroStatToursSub: 'Счастливые туристы',
    
    btnHeroWhatsApp: 'Написать в WhatsApp',
    btnHeroTelegram: 'Написать в Telegram',
    btnHeroChat: 'Написать Махмуду',
    contactChooserTitle: 'Связаться с Махмудом',
    contactChooserStatus: 'Выберите удобный канал связи',
    contactCall: 'Позвонить',
    btnHeroCustomTrip: 'Как всё устроено',
    btnHeroCall: 'Позвонить +20 100 968 6874',

    // Film
    filmEyebrow: 'ЕГИПЕТ В ДВИЖЕНИИ',
    filmTitle: 'МЕСТО, ГДЕ ИСТОРИЯ ВСЁ ЕЩЁ ЖИВА',
    filmDescription: 'Несколько минут, чтобы почувствовать масштаб, свет и ритм Египта.',
    filmCredit: 'Фильм Beautiful Destinations',
    filmWatch: 'Смотреть фильм на YouTube',
    
    // Quick Trust Highlights
    trustEyebrow: 'МОИ ГАРАНТИИ',
    trustHeading: 'Почему со мной спокойно',
    trustSafetyLabel: 'Полная безопасность',
    trustSafety: '100% Безопасность и забота 24/7',
    trustSafetySub: 'На связи круглосуточно — на протяжении всего путешествия',
    trustNoShopLabel: 'Честный тур',
    trustNoShopping: 'Никаких навязанных магазинов и скрытых доплат',
    trustNoShoppingSub: 'Никаких скрытых комиссий — только чистый опыт',
    trustCustomLabel: 'VIP подход',
    trustCustom: 'Индивидуальный маршрут под ваши интересы',
    trustCustomSub: 'Программа составляется лично для каждого гостя',
    trustComfortLabel: 'Премиум трансфер',
    trustComfort: 'Новые авто с кондиционером и VIP трансферы',
    trustComfortSub: 'Современные VIP-автомобили с климат-контролем',
    trustSeal: 'Официальная лицензия Министерства туризма и древностей Египта · 20 лет опыта · 2500+ туров',
    
    // Services Section
    servicesTitle: 'Я рядом на каждом этапе',
    servicesSubtitle: 'От встречи в аэропорту до истории у стен древнего храма — всё лично, спокойно и без посредников.',

    quickPlanEyebrow: 'ПЛАНИРОВАНИЕ БЕЗ АНКЕТ',
    quickPlanTitle: 'Просто напишите мне. Остальное я организую.',
    quickPlanSubtitle: 'Достаточно трёх вещей — примерных дат, количества гостей и мест, которые вас вдохновляют.',
    quickPlanDate: 'Когда вы планируете поездку',
    quickPlanGuests: 'Сколько будет гостей',
    quickPlanPlaces: 'Что вы хотите увидеть',
    quickPlanCall: 'Позвонить Махмуду',
    contactHumanQuote: '«Расскажите, каким вы представляете свой день в Египте — я отвечу лично и предложу маршрут.»',
    
    srvTransfersTitle: 'Трансферы из/в аэропорт',
    srvTransfersDesc: 'Встреча с табличкой в аэропорту Каира, Луксора, Хургады, Шарм-эль-Шейха. Комфортабельные седаны и минивэны с кондиционером, пунктуально и безопасно.',
    
    srvFlightsTitle: 'Внутренние авиарейсы',
    srvFlightsDesc: 'Помощь с бронированием и покупкой внутренних авиабилетов: Каир ⇄ Луксор, Каир ⇄ Асуан, Шарм / Хургада ⇄ Каир по лучшим тарифам.',
    
    srvTrainsTitle: 'Поезда и Спальные вагоны',
    srvTrainsDesc: 'Бронирование билетов на комфортабельные поезда и ночные спальные поезда (Sleeper Train) Каир ⇄ Луксор / Асуан с питанием.',
    
    srvCruisesTitle: 'Круизы по Нилу 5★',
    srvCruisesDesc: 'Эксклюзивные круизы на 5-звездочных лайнерах между Луксором и Асуаном (3, 4 или 7 ночей) с полным пансионом и экскурсионной программой.',
    
    srvSafariTitle: 'Сафари в Белую и Чёрную Пустыни',
    srvSafariDesc: 'Джип-экспедиции 4x4, причудливые меловые скульптуры, оазисы, горячие источники и бедуинский ужин под бесконечным звездным небом Сахары.',
    
    srvCustomTitle: 'Авторские и VIP маршруты',
    srvCustomDesc: 'Индивидуальные программы для соло-путешественников, пар, семей с детьми и закрытых групп с учетом темпа, бюджета и пожеланий.',

    // Destinations Section
    destinationsTitle: 'Куда отправимся?',
    destinationsSubtitle: 'Каждая локация продумана до мелочей: вход без очередей, глубокие исторические факты и лучшие ракурсы',
    destinationChatCta: 'Спросить Махмуда об этом маршруте',
    tabAll: 'Все направления',
    tabCairo: 'Каир (10 локаций)',
    tabGiza: 'Гиза & Пирамиды (5 локаций)',
    tabAlexandria: 'Александрия (4 локации)',
    tabSafari: 'Белая & Черная Пустыни',
    tabAswan: 'Асуан (7 локаций)',
    tabLuxor: 'Луксор & Воздушный шар (9+)',
    
    btnViewVenues: 'Смотреть все локации',
    btnBookVenue: 'Заказать эту экскурсию',
    includedTitle: 'Что включено:',
    durationTitle: 'Длительность:',
    highlightTitle: 'Главная фишка:',

    // Custom Trip Builder Section
    builderTitle: 'Соберите своё путешествие',
    builderSubtitle: 'Выберите города, достопримечательности, даты и транспорт. Получите готовый детальный расчет прямо в WhatsApp или Telegram!',
    
    step1Title: '1. Выберите города и места, которые хотите посетить:',
    step2Title: '2. Детали поездки и даты:',
    step3Title: '3. Транспорт и размещение:',
    step4Title: '4. Контактные данные для расчета:',
    
    lblDurationDays: 'Количество дней тура:',
    lblTravelDate: 'Ориентировочная дата поездки:',
    lblAdults: 'Взрослых:',
    lblChildren: 'Детей (до 12 лет):',
    lblLanguage: 'Предпочитаемый язык гида:',
    
    optLangRu: 'Русский язык (Основной)',
    optLangEn: 'English',
    optLangZh: '中文 (Chinese)',
    
    lblTransportOptions: 'Дополнительный транспорт & опции:',
    optAirportTransfer: 'Трансфер из/в аэропорт',
    optDomesticFlight: 'Внутренний перелет (Каир-Луксор/Асуан)',
    optSleeperTrain: 'Билеты на спальный поезд (Sleeper Train)',
    optNileCruise: '5-звездочный круиз по Нилу (Луксор-Асуан)',
    optHotAirBalloon: 'Полет на воздушном шаре в Луксоре на рассвете',
    optDesertCamp: 'Ночевка в бедуинском лагере в Белой пустыне',
    
    lblName: 'Ваше имя:',
    lblContactType: 'Удобный мессенджер:',
    lblContactValue: 'Номер телефона / Никнейм:',
    lblNotes: 'Особые пожелания (отель, темп, дети, питание):',
    
    btnGenerateTripWhatsApp: 'Отправить маршрут в WhatsApp (+201009686874)',
    btnGenerateTripTelegram: 'Отправить маршрут в Telegram',
    btnGenerateTripViber: 'Отправить в Viber',
    btnGenerateTripLine: 'Отправить в Line',
    builderSummaryTitle: 'Ваш сформированный маршрут:',
    builderSummaryPlaceholder: 'Выберите направления и опции выше, чтобы увидеть сводку...',
    
    // Reviews Section
    reviewsTitle: 'Слова наших гостей',
    reviewsSubtitle: 'Реальные впечатления гостей из России, Беларуси, Казахстана и всего мира с порталов NeedGuide.net и Тонкости Туризма',
    reviewBadgeVerified: 'Проверенный отзыв NeedGuide.net / Тонкости',
    reviewVerifiedTag: '✓ Проверенный отзыв',
    reviewsSliderPrev: 'Предыдущий отзыв',
    reviewsSliderNext: 'Следующий отзыв',
    btnReadMoreReviews: 'Все отзывы на NeedGuide.net (ID 11159)',
    metricRatingLabel: 'Рейтинг гида',
    metricPositiveLabel: 'Положительных отзывов',
    metricExperienceVal: '20 Лет',
    metricExperienceLabel: 'Гидом с 2007 года',
    metricToursLabel: 'Проведено экскурсий',
    
    // Gallery & Videos Section
    galleryTitle: 'Настоящие моменты путешествий',
    gallerySubtitle: 'Живые кадры с нашими туристами у пирамид, в древних храмах, на Ниле и в глубине Сахары',
    galleryStoryHorse: 'Приключения у пирамид',
    galleryStoryJoy: 'Эмоции в Сахаре',
    galleryStoryGuests: 'С гидом Махмудом',
    galTabAll: 'Все медиа (88)',
    galTabVideos: 'Видеоролики (5)',
    galTabPyramids: 'Гиза и Пирамиды',
    galTabCairo: 'Каир и Музеи',
    galTabLuxorAswan: 'Луксор и Асуан',
    galTabSafari: 'Пустынное Сафари',
    
    // About Section
    aboutTitle: 'Ваш человек в Египте',
    aboutSubtitle: 'Профессиональный гид-историк, переводчик и ваш надежный проводник в мир древнего и современного Египта',
    aboutP1: 'Здравствуйте, дорогие друзья! Меня зовут Махмуд Хаттаб. Я родился и вырос в Египте, в семье потомственных гидов-экскурсоводов. Работаю в туристической сфере с 2007 года — за моими плечами 20 лет практического опыта и тысячи счастливых туристов со всех уголков планеты.',
    aboutP2: 'Я имею высшее образование в области туризма и права. Свободно владею четырьмя языками: русским, английским, китайским и арабским. Русский язык для меня особенно дорог: я жил и обучался в России (Санкт-Петербург), отлично понимаю менталитет, культурный контекст и чувство юмора русскоязычных гостей.',
    aboutP3: 'Мой главный принцип работы — **честность, интеллигентность и абсолютный комфорт клиента**. Я никогда не трачу драгоценное время гостей на бесконечные магазины сувениров или папирусные фабрики. Моя цель — показать вам настоящий, живой, безопасный и величественный Египет, в который вы влюбитесь навсегда.',
    
    aboutBadge1: 'Высшее профильное образование (Туризм & Право)',
    aboutBadge2: 'Лицензия Министерства Туризма и Древностей Египта',
    aboutBadge3: 'Собственный комфортабельный автопарк с кондиционером',
    aboutBadge4: 'Без посредников — прямая связь 24/7 с гидом',
    
    // Contact & Footer
    contactTitle: 'Есть вопрос? Свяжитесь с нами',
    contactSubtitle: 'Вы общаетесь напрямую со мной. Просто выберите удобный канал и напишите короткое сообщение.',
    contactPhone: '+2 01009686874',
    contactPhoneIntl: '+201009686874',
    contactWhatsApp: 'WhatsApp: +2 01009686874',
    contactTelegram: 'Telegram: @Mahmoud_Guide_Egypt',
    contactViber: 'Viber: +2 01009686874',
    contactLine: 'Line ID / Chat',
    contactFastReply: 'Быстрый ответ',
    contactBase: 'Базирование: Каир & Луксор, Египет',
    
    formName: 'Ваше имя',
    formPhone: 'Телефон / Мессенджер',
    formEmail: 'Email (по желанию)',
    formMsg: 'Опишите ваши планы (даты, количество человек, города)...',
    formSubmit: 'Отправить запрос гиду',
    formSuccess: 'Спасибо! Ваше сообщение отправлено. Махмуд свяжется с вами в ближайшее время.',
    
    footerCopyright: '© 2026 Махмуд Хаттаб — Профессиональный русский гид в Египте. Все права защищены.',
    footerLegal: 'Лицензированный гид • Министерство Туризма Египта • NeedGuide ID 11159'
  },

  en: {
    pageTitle: 'Mahmoud Khattab — Private Tour Guide in Egypt | VIP Cairo, Luxor & Giza Tours',
    metaDescription: 'Mahmoud Khattab — Licensed private Egyptian tour guide with 20+ years experience. Tailored VIP tours across Cairo, Giza Pyramids, Luxor, Aswan, Alexandria, and White Desert.',

    // Navigation
    navHome: 'Home',
    navAbout: 'About Me',
    navServices: 'Services',
    navDestinations: 'Destinations',
    navTripBuilder: 'Plan a trip',
    navReviews: 'Reviews',
    navGallery: 'Gallery & Videos',
    navContact: 'Contact',
    btnPlanTrip: 'Contact',
    brandTagline: 'Your private tour guide in Egypt',
    
    // Top Bar & Badges
    topExperience: '20 Years of Tourism Experience (Since 2007)',
    topLanguages: 'Languages: Russian • English • Chinese (中文) • Arabic',
    topWeather: 'Cairo: 34°C, sunny',
    topContactQuick: 'Direct Connect: WhatsApp / Telegram / Viber / Line',
    phoneDisplay: '+20 100 968 6874',
    
    // Hero Section
    heroBadge: 'Your private tour guide in Egypt',
    heroTitle: 'See Egypt with Mahmoud.',
    heroSubtitle: 'A private journey at your pace',
    heroTagline: 'I\'m a licensed private guide for Cairo, Giza, Luxor, Aswan and Alexandria—relaxed, personal, and free of tourist traps.',
    heroPhotoCaption: 'Mahmoud with guests in Giza',
    heroStatExp: '20 Years Exp',
    heroStatExpSub: '3rd Generation Guide',
    heroBadgeExp: '20 YEARS',
    heroStatRating: '5.0 Rating',
    heroStatRatingSub: 'NeedGuide & Tonkosti',
    heroStatLang: '4 Languages',
    heroStatLangSub: 'Russian / Eng / Chinese',
    heroStatTours: '2,500+ Tours',
    heroStatToursSub: 'Delighted Travelers',
    
    btnHeroWhatsApp: 'Chat on WhatsApp',
    btnHeroTelegram: 'Chat on Telegram',
    btnHeroChat: 'Message Mahmoud',
    contactChooserTitle: 'Contact Mahmoud',
    contactChooserStatus: 'Choose your preferred channel',
    contactCall: 'Call Mahmoud',
    btnHeroCustomTrip: 'How it works',
    btnHeroCall: 'Call +20 100 968 6874',

    // Film
    filmEyebrow: 'EGYPT IN MOTION',
    filmTitle: 'WHERE HISTORY STILL FEELS ALIVE',
    filmDescription: 'A few minutes to feel the scale, light, and rhythm of Egypt.',
    filmCredit: 'A film by Beautiful Destinations',
    filmWatch: 'Watch the film on YouTube',
    
    // Quick Trust Highlights
    trustEyebrow: 'MY GUARANTEES',
    trustHeading: 'Why You Can Travel with Total Peace of Mind',
    trustSafetyLabel: 'Full Safety',
    trustSafety: '100% Safety & 24/7 Personal Care',
    trustSafetySub: 'Always reachable — throughout your entire journey',
    trustNoShopLabel: 'Honest Tour',
    trustNoShopping: 'Zero Forced Shopping & No Hidden Extras',
    trustNoShoppingSub: 'No hidden commissions — just a pure travel experience',
    trustCustomLabel: 'VIP Approach',
    trustCustom: '100% Tailor-Made Private Itineraries',
    trustCustomSub: 'Your itinerary is crafted personally for every guest',
    trustComfortLabel: 'Premium Transfer',
    trustComfort: 'Modern AC Luxury Vehicles & VIP Transfers',
    trustComfortSub: 'Latest-model VIP vehicles with full climate control',
    trustSeal: 'Official License from Egypt\'s Ministry of Tourism & Antiquities · 20+ Years Experience · 2,500+ Tours',

    // Services Section
    servicesTitle: 'I\'m with you at every step',
    servicesSubtitle: 'From meeting you at the airport to sharing a story beside an ancient temple—personally arranged, relaxed, and without middlemen.',

    quickPlanEyebrow: 'NO FORMS, JUST A CONVERSATION',
    quickPlanTitle: 'Send me a message. I\'ll handle the rest.',
    quickPlanSubtitle: 'All I need is a rough date, your group size, and the places that inspire you.',
    quickPlanDate: 'When you may travel',
    quickPlanGuests: 'How many guests',
    quickPlanPlaces: 'What you want to see',
    quickPlanCall: 'Call Mahmoud',
    contactHumanQuote: '"Tell me what your ideal day in Egypt feels like. I\'ll reply personally and suggest a route."',
    
    srvTransfersTitle: 'Airport VIP Transfers',
    srvTransfersDesc: 'Airport meet & greet in Cairo, Luxor, Hurghada, Sharm El Sheikh. Modern air-conditioned sedans and private vans, always punctual.',
    
    srvFlightsTitle: 'Domestic Flight Bookings',
    srvFlightsDesc: 'Fast booking of EgyptAir domestic flights: Cairo ⇄ Luxor, Cairo ⇄ Aswan, Red Sea ⇄ Cairo at the best rates.',
    
    srvTrainsTitle: 'Train & Sleeper Train Tickets',
    srvTrainsDesc: 'First-class train and overnight Sleeper Train tickets (Cairo ⇄ Luxor / Aswan) with dinner and breakfast included.',
    
    srvCruisesTitle: '5-Star Nile River Cruises',
    srvCruisesDesc: 'Luxury 5-star Nile cruise ship bookings between Luxor and Aswan (3, 4, or 7 nights) with full board and shore excursions.',
    
    srvSafariTitle: 'White & Black Desert 4x4 Safari',
    srvSafariDesc: 'Off-road 4x4 expeditions, otherworldly chalk monoliths, natural hot springs, and Bedouin campfires under Sahara stars.',
    
    srvCustomTitle: 'Custom & VIP Private Programs',
    srvCustomDesc: 'Bespoke itineraries tailored for solo travelers, couples, families, and private groups with flexible pacing and budgets.',

    // Destinations Section
    destinationsTitle: 'Where should we go?',
    destinationsSubtitle: 'Every single venue is meticulously planned: skip-the-line entry, deep historical insights, and prime photo spots',
    destinationChatCta: 'Ask Mahmoud about this route',
    tabAll: 'All Destinations',
    tabCairo: 'Cairo (10 Sites)',
    tabGiza: 'Giza & Pyramids (5 Sites)',
    tabAlexandria: 'Alexandria (4 Sites)',
    tabSafari: 'White & Black Desert',
    tabAswan: 'Aswan (7 Sites)',
    tabLuxor: 'Luxor & Balloon (9+)',
    
    btnViewVenues: 'Explore Venues',
    btnBookVenue: 'Book This Excursion',
    includedTitle: 'Whats Included:',
    durationTitle: 'Duration:',
    highlightTitle: 'Key Highlight:',

    // Custom Trip Builder Section
    builderTitle: 'Build your own journey',
    builderSubtitle: 'Select your preferred cities, attractions, dates, and transport. Receive an instant quote directly on WhatsApp or Telegram!',
    
    step1Title: '1. Choose your destinations & iconic sites:',
    step2Title: '2. Trip duration & dates:',
    step3Title: '3. Transport & accommodation options:',
    step4Title: '4. Your contact details:',
    
    lblDurationDays: 'Number of Days:',
    lblTravelDate: 'Approximate Travel Date:',
    lblAdults: 'Adults:',
    lblChildren: 'Children (under 12):',
    lblLanguage: 'Preferred Guide Language:',
    
    optLangRu: 'Russian (Русский)',
    optLangEn: 'English',
    optLangZh: 'Chinese (中文)',
    
    lblTransportOptions: 'Additional transport & experiences:',
    optAirportTransfer: 'Airport VIP Transfer',
    optDomesticFlight: 'Domestic Flights (Cairo ⇄ Luxor/Aswan)',
    optSleeperTrain: 'Overnight Sleeper Train Tickets',
    optNileCruise: '5-Star Nile River Cruise (Luxor ⇄ Aswan)',
    optHotAirBalloon: 'Sunrise Hot Air Balloon in Luxor',
    optDesertCamp: 'Overnight Bedouin Camp in White Desert',
    
    lblName: 'Your Name:',
    lblContactType: 'Preferred Messenger:',
    lblContactValue: 'Phone / Username:',
    lblNotes: 'Special requests (hotels, pace, dietary, family):',
    
    btnGenerateTripWhatsApp: 'Send Itinerary to WhatsApp (+201009686874)',
    btnGenerateTripTelegram: 'Send Itinerary to Telegram',
    btnGenerateTripViber: 'Send to Viber',
    btnGenerateTripLine: 'Send to Line',
    builderSummaryTitle: 'Your Customized Itinerary Summary:',
    builderSummaryPlaceholder: 'Select destinations and options above to view summary...',
    
    // Reviews Section
    reviewsTitle: 'Words from our guests',
    reviewsSubtitle: 'Genuine feedback from travelers worldwide verified on NeedGuide.net (ID 11159) and Tonkosti Turizma',
    reviewBadgeVerified: 'Verified Review (NeedGuide.net / Tonkosti)',
    reviewVerifiedTag: '✓ Verified Review',
    reviewsSliderPrev: 'Previous review',
    reviewsSliderNext: 'Next review',
    btnReadMoreReviews: 'View Profile on NeedGuide.net',
    metricRatingLabel: 'Guide Rating',
    metricPositiveLabel: 'Positive Reviews',
    metricExperienceVal: '20 Years',
    metricExperienceLabel: 'Guiding Since 2007',
    metricToursLabel: 'Tours Delivered',
    
    // Gallery & Videos Section
    galleryTitle: 'Real moments from the road',
    gallerySubtitle: 'Authentic moments with our travelers at the Pyramids, historic temples, the Nile, and the Sahara desert',
    galleryStoryHorse: 'Giza adventure',
    galleryStoryJoy: 'Desert joy',
    galleryStoryGuests: 'With Mahmoud',
    galTabAll: 'All Media (88)',
    galTabVideos: 'Tour Videos (5)',
    galTabPyramids: 'Giza & Pyramids',
    galTabCairo: 'Cairo & Museums',
    galTabLuxorAswan: 'Luxor & Aswan',
    galTabSafari: 'Desert Safari',
    
    // About Section
    aboutTitle: 'Your person in Egypt',
    aboutSubtitle: 'Professional licensed tour guide, translator, and your passionate host to ancient and modern Egypt',
    aboutP1: 'Hello and welcome! My name is Mahmoud Khattab. I was born and raised in Egypt into a family of heritage tour guides. I have been guiding travelers since 2007, bringing 20 years of real-world expertise and thousands of unforgettable memories for guests from all over the world.',
    aboutP2: 'I hold academic degrees in Tourism and Law. I am fluent in Russian, English, Chinese, and Arabic. Having lived and studied in Russia (Saint Petersburg), I understand the nuances, expectations, and cultural warmth of international and Russian-speaking guests.',
    aboutP3: 'My core ethos is **integrity, cultured storytelling, and uncompromised client comfort**. I never subject travelers to forced souvenir shopping or overpriced tourist traps. My mission is to show you the genuine, enchanting, and safe Egypt that will stay in your heart forever.',
    
    aboutBadge1: 'Degrees in Tourism & Law',
    aboutBadge2: 'Licensed by Egypt Ministry of Tourism & Antiquities',
    aboutBadge3: 'Private fleet of modern AC vehicles',
    aboutBadge4: 'Direct 24/7 personal communication with your guide',
    
    // Contact & Footer
    contactTitle: 'Have a question? Contact us',
    contactSubtitle: 'You speak directly with me. Just choose a channel and send a short message.',
    contactPhone: '+2 01009686874',
    contactPhoneIntl: '+201009686874',
    contactWhatsApp: 'WhatsApp: +2 01009686874',
    contactTelegram: 'Telegram: @Mahmoud_Guide_Egypt',
    contactViber: 'Viber: +2 01009686874',
    contactLine: 'Line ID / Chat',
    contactFastReply: 'Fastest reply',
    contactPhone: 'Phone',
    contactGalleryTitle: 'Photo gallery',
    contactGallerySub: 'A quick look at Mahmoud\'s trips and guest moments.',
        contactBase: 'Based in: Cairo & Luxor, Egypt',
    
    formName: 'Your Name',
    formPhone: 'Phone / Messenger',
    formEmail: 'Email (optional)',
    formMsg: 'Tell me about your plans (dates, group size, preferred cities)...',
    formSubmit: 'Send Request',
    formSuccess: 'Thank you! Your request has been sent. Mahmoud will contact you shortly.',
    
    footerCopyright: '© 2026 Mahmoud Khattab — Professional Private Tour Guide in Egypt. All rights reserved.',
    footerLegal: 'Licensed Tour Guide • Ministry of Tourism & Antiquities • NeedGuide ID 11159'
  },

  zh: {
    pageTitle: '马哈茂德·哈塔卜 — 埃及官方认证中文私人导游 | 开罗、卢克索、吉萨金字塔定制游',
    metaDescription: '马哈茂德·哈塔卜（Mahmoud Khattab）—— 埃及国家旅游局认证资深私人导游，20年丰富带团经验。提供开罗、吉萨金字塔、卢克索、阿斯旺、亚历山大及黑白沙漠专属VIP定制游。',

    // Navigation
    navHome: '首页',
    navAbout: '关于向导',
    navServices: 'VIP服务',
    navDestinations: '目的地与景点',
    navTripBuilder: '规划行程',
    navReviews: '客人真实评价',
    navGallery: '实景相册与视频',
    navContact: '联系方式',
    btnPlanTrip: '联系',
    brandTagline: '您的埃及私人导游',
    
    // Top Bar & Badges
    topExperience: '20年埃及旅游专业经验（始于2007年）',
    topLanguages: '精通语言：俄语 • 英语 • 中文 (普通话) • 阿拉伯语',
    topWeather: '开罗：34°C 晴',
    topContactQuick: '直接联系向导：WhatsApp / Telegram / Viber / Line',
    phoneDisplay: '+20 100 968 6874',
    
    // Hero Section
    heroBadge: '您的埃及私人导游',
    heroTitle: '和马哈茂德一起看埃及。',
    heroSubtitle: '按您的节奏，开启私人旅程',
    heroTagline: '我是持证私人导游，带您轻松游览开罗、吉萨、卢克索、阿斯旺与亚历山大，不赶路，也不进购物店。',
    heroPhotoCaption: '马哈茂德与客人在吉萨',
    heroStatExp: '20年从业经验',
    heroStatExpSub: '三代导游世家传承',
    heroBadgeExp: '20 年',
    heroStatRating: '5.0满分好评',
    heroStatRatingSub: 'NeedGuide & 权威口碑',
    heroStatLang: '精通4门语言',
    heroStatLangSub: '俄语 / 英语 / 中文',
    heroStatTours: '2,500+次带团',
    heroStatToursSub: '服务全球无数游客',
    
    btnHeroWhatsApp: 'WhatsApp在线咨询',
    btnHeroTelegram: 'Telegram在线咨询',
    btnHeroChat: '联系马哈茂德',
    contactChooserTitle: '联系马哈茂德',
    contactChooserStatus: '选择您喜欢的联系方式',
    contactCall: '电话联系',
    btnHeroCustomTrip: '了解规划方式',
    btnHeroCall: '拨打电话 +20 100 968 6874',

    // Film
    filmEyebrow: '流动中的埃及',
    filmTitle: '历史依然鲜活的地方',
    filmDescription: '用几分钟感受埃及的尺度、光影与节奏。',
    filmCredit: 'Beautiful Destinations 出品',
    filmWatch: '在 YouTube 观看影片',
    
    // Quick Trust Highlights
    trustEyebrow: '服务保障',
    trustHeading: '为什么选择我，让您倍感安心',
    trustSafetyLabel: '全面安全',
    trustSafety: '100% 安全保障与24小时贴心服务',
    trustSafetySub: '全程随时联系，陪伴您的每一步旅程',
    trustNoShopLabel: '诚信之旅',
    trustNoShopping: '绝无强制购物与任何隐形消费',
    trustNoShoppingSub: '无任何隐性费用，纯粹享受旅行体验',
    trustCustomLabel: 'VIP 专属',
    trustCustom: '根据您的喜好量身定制专属路线',
    trustCustomSub: '为每位宾客个性化打造专属行程',
    trustComfortLabel: '尊享接送',
    trustComfort: '全新高品质空调商务车与VIP接送',
    trustComfortSub: '最新款VIP车辆，配备全套空调系统',
    trustSeal: '埃及旅游与文物部官方执照 · 20余年向导经验 · 2500+次行程',

    // Services Section
    servicesTitle: '旅程每一步，我都在身边',
    servicesSubtitle: '从机场见面，到古老神庙旁的故事分享，全程由我亲自安排，轻松自在，没有中间商。',

    quickPlanEyebrow: '无需填写表格，直接聊聊',
    quickPlanTitle: '给我发条消息，其余交给我。',
    quickPlanSubtitle: '只需告诉我大致日期、同行人数和您最想看的地方。',
    quickPlanDate: '大概什么时候出发',
    quickPlanGuests: '一共有几位客人',
    quickPlanPlaces: '最想看哪些地方',
    quickPlanCall: '致电马哈茂德',
    contactHumanQuote: '"告诉我您心中理想的埃及一天是什么样子，我会亲自回复并为您建议路线。"',
    
    srvTransfersTitle: '机场VIP专车接送',
    srvTransfersDesc: '开罗、卢克索、阿斯旺、红海赫尔格达与沙姆沙伊赫机场举牌接机，全新冷气商务车，准时安全。',
    
    srvFlightsTitle: '埃及境内机票代订',
    srvFlightsDesc: '埃及航空（EgyptAir）国内航线代订：开罗 ⇄ 卢克索、开罗 ⇄ 阿斯旺、红海 ⇄ 开罗，享最优团队折扣票价。',
    
    srvTrainsTitle: '火车与豪华夜卧列车票',
    srvTrainsDesc: '开罗 ⇄ 卢克索 / 阿斯旺空调头等座及双人豪华卧铺火车票代订（含早晚餐服务）。',
    
    srvCruisesTitle: '五星级尼罗河豪华游轮',
    srvCruisesDesc: '卢克索至阿斯旺（4天3晚或5天4晚）五星级豪华游轮预订，含全包式餐饮与沿途古神庙岸上观光。',
    
    srvSafariTitle: '黑白沙漠4x4越野探险',
    srvSafariDesc: '专业四驱越野巡洋舰冲沙、白垩岩蘑菇石奇景、天然地热温泉与贝都因星空篝火帐篷晚宴。',
    
    srvCustomTitle: '私人VIP专属行程定制',
    srvCustomDesc: '专为家庭、情侣、独行客及精品小团量身设计，节奏随心，深度领略千年埃及文明。',

    // Destinations Section
    destinationsTitle: '下一站去哪里？',
    destinationsSubtitle: '每个景点均由资深历史向导带领：免排队VIP快速通道、生动历史讲解与独家机位拍照',
    destinationChatCta: '向马哈茂德咨询这条路线',
    tabAll: '全部目的地',
    tabCairo: '开罗（10大经典）',
    tabGiza: '吉萨与金字塔群（5大胜地）',
    tabAlexandria: '亚历山大（4大地标）',
    tabSafari: '黑白沙漠探险',
    tabAswan: '阿斯旺（7大神庙）',
    tabLuxor: '卢克索与热气球（9+奇观）',
    
    btnViewVenues: '查看所有景点',
    btnBookVenue: '预订此线路',
    includedTitle: '包含项目：',
    durationTitle: '建议游览时间：',
    highlightTitle: '核心看点：',

    // Custom Trip Builder Section
    builderTitle: '定制您的埃及旅程',
    builderSubtitle: '勾选您想去的城市、景点、出行日期与交通方式，一键生成完整方案并直发WhatsApp或Telegram！',
    
    step1Title: '1. 选择您感兴趣的目的地与景点：',
    step2Title: '2. 旅行时间与人数：',
    step3Title: '3. 交通与特色体验选择：',
    step4Title: '4. 接收方案的联系方式：',
    
    lblDurationDays: '预计旅行天数：',
    lblTravelDate: '计划出行日期：',
    lblAdults: '成人人数：',
    lblChildren: '儿童人数（12岁以下）：',
    lblLanguage: '导游首选语言：',
    
    optLangRu: '俄语 (Русский)',
    optLangEn: '英语 (English)',
    optLangZh: '中文 (普通话)',
    
    lblTransportOptions: '交通与升级体验：',
    optAirportTransfer: '机场VIP专车接送',
    optDomesticFlight: '埃及境内段机票（开罗 ⇄ 卢克索/阿斯旺）',
    optSleeperTrain: '夜间卧铺火车票（Sleeper Train）',
    optNileCruise: '五星级尼罗河游轮（卢克索 ⇄ 阿斯旺）',
    optHotAirBalloon: '卢克索日出热气球高空飞行',
    optDesertCamp: '白沙漠贝都因特色星空露营',
    
    lblName: '您的称呼：',
    lblContactType: '首选沟通方式：',
    lblContactValue: '手机号 / 账号：',
    lblNotes: '特别需求（酒店标准、游览节奏、老人儿童、饮食习惯）：',
    
    btnGenerateTripWhatsApp: '发送定制需求到WhatsApp (+201009686874)',
    btnGenerateTripTelegram: '发送定制需求到Telegram',
    btnGenerateTripViber: '发送到Viber',
    btnGenerateTripLine: '发送到Line',
    builderSummaryTitle: '您的定制行程清单：',
    builderSummaryPlaceholder: '在上方勾选景点和项目，此处将自动汇总您的专属行程...',
    
    // Reviews Section
    reviewsTitle: '听听客人怎么说',
    reviewsSubtitle: '来自NeedGuide.net（ID 11159）与俄罗斯旅游门户Tonkosti的真实满分好评',
    reviewBadgeVerified: '官方认证真实住客评价（NeedGuide / Tonkosti）',
    reviewVerifiedTag: '✓ 真实认证评价',
    reviewsSliderPrev: '上一条评价',
    reviewsSliderNext: '下一条评价',
    btnReadMoreReviews: '查看NeedGuide主页全部评价 (ID 11159)',
    metricRatingLabel: '导游评分',
    metricPositiveLabel: '好评率',
    metricExperienceVal: '20 年',
    metricExperienceLabel: '自2007年执业',
    metricToursLabel: '完成行程数',
    
    // Gallery & Videos Section
    galleryTitle: '旅途中的真实瞬间',
    gallerySubtitle: '金字塔前、神庙长廊、尼罗河游船与大漠星空下的难忘瞬间',
    galleryStoryHorse: '吉萨金字塔探险',
    galleryStoryJoy: '撒哈拉沙漠的喜悦',
    galleryStoryGuests: '与导游马哈茂德',
    galTabAll: '全部媒体 (88)',
    galTabVideos: '带团实拍视频 (5)',
    galTabPyramids: '吉萨金字塔群',
    galTabCairo: '开罗与博物馆',
    galTabLuxorAswan: '卢克索与阿斯旺',
    galTabSafari: '黑白沙漠探险',
    
    // About Section
    aboutTitle: '您在埃及的贴心伙伴',
    aboutSubtitle: '资深官方认证历史学导游、翻译家，带您领略真实壮丽的埃及',
    aboutP1: '亲爱的朋友们，大家好！我是马哈茂德·哈塔卜（Mahmoud Khattab）。我出生于埃及的导游世家，自2007年起从事专业旅游接待工作，至今已积累了20年的深厚行业经验，曾接待过来自全球数千位尊贵客人。',
    aboutP2: '我拥有旅游学与法学双学士学位，精通俄语、英语、中文和母语阿拉伯语。我曾在俄罗斯圣彼得堡生活和学习，深刻了解不同国家游客的文化习惯、服务期望与旅行痛点。',
    aboutP3: '我的执业核心原则是：**诚信至上、文化深度与绝对舒适**。我坚决抵制任何形式的强制购物店与隐形消费。我的唯一使命，是为您呈现一个真实、安全、震撼且充满温度的伟大埃及！',
    
    aboutBadge1: '旅游学与法学双专业学术背景',
    aboutBadge2: '埃及旅游与文物部官方注册执业向导',
    aboutBadge3: '自营高品质空调专属车队',
    aboutBadge4: '无中间商赚差价，向导本人24小时一对一服务',
    
    // Contact & Footer
    contactTitle: '有问题吗？请联系我们',
    contactSubtitle: '您会直接和我沟通。请选择一种方式，发来一句简短消息即可。',
    contactPhone: '+2 01009686874',
    contactPhoneIntl: '+201009686874',
    contactWhatsApp: 'WhatsApp: +2 01009686874',
    contactTelegram: 'Telegram: @Mahmoud_Guide_Egypt',
    contactViber: 'Viber: +2 01009686874',
    contactLine: 'Line ID / 微信即时沟通',
    contactFastReply: '最快回复',
    contactBase: '驻地：埃及开罗 & 卢克索',
    
    formName: '您的姓名',
    formPhone: '手机号码 / 微信号 / 即时通讯',
    formEmail: '电子邮箱（选填）',
    formMsg: '请简要说明您的出行计划（预计日期、人数、想去的城市）...',
    formSubmit: '提交定制需求',
    formSuccess: '感谢您的咨询！需求已成功送达，马哈茂德将尽快与您联系。',
    
    footerCopyright: '© 2026 Mahmoud Khattab — 埃及金牌私家导游。保留所有权利。',
    footerLegal: '埃及旅游与文物部注册金牌导游 • NeedGuide ID 11159'
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRANSLATIONS };
}
