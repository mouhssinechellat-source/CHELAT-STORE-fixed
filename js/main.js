/* ==========================================================
   js/main.js - CHELAT STORE application logic
   ========================================================== */
'use strict';

// ==================== Icon file map (app name -> file in assets/images/icons) ====================
const fileMap = {
    // Slider Apps
    'PUBG Mobile': 'pubg_mobile.jpg',
    'FIFA Mobile': 'Fifa.jpg',
    'Netflix': 'Netflix.png',
    // Social Media
 'WhatsApp': 'WhatsApp.jpg',
    'Instagram': 'Instagram.jpg',
    'Telegram': 'Telegram.jpg',
    'Snapchat': 'snapchat.jpg',
    'TikTok': 'tiktok.webp',
    'Facebook': 'Facebook.jpg',
    'Messenger': 'Messenger.jpg',
    'Twitter': 'twitter.png',
    'LinkedIn': 'linkedin.png',
    'Pinterest': 'Pinterest.jpg',
    'Threads': 'Threads.jpg',
    'Discord': 'discord.png',
    'Reddit': 'reddit.png',
    'Viber': 'viber.png',
    'IMO': 'imo.png',
    'Line': 'line.png',
    'WeChat': 'wechat.png',
    'Telegram X': 'telegram_x.jpg',
    'Instagram Lite': 'instagram_lite.jpg',
    'TikTok Lite': 'tiktok_lite.jpg',
    
    // Games
    'Free Fire': 'freefire.jpg',
    'Call of Duty': 'CD.jpg',
    'Clash of Clans': 'clash.webp',
    'Minecraft': 'Minecraft.jpg',
    'Roblox': 'roblox.png',
    'Among Us': 'AmongUs.jpg',
    'Subway Surfers': 'SubwaySurfers.jpg',
    'Candy Crush': 'CandyCrush.jpg',
    'eFootball PES': 'eFootball.jpg',
    '8 Ball Pool': 'pool-balls (1).png',
    'Ludo King': 'LudoKing.jpg',
    'Asphalt 9': 'Asphalt9.jpg',
    'Snake': 'Snake.jpg',
    'Free Fire MAX': 'freefire_max.jpg',
    
    // Music & Video
    'Spotify': 'Spotify.jpg',
    'YouTube Music': 'YouTube.jpg',
    'SoundCloud': 'SoundCloud.jpg',
    'Deezer': 'Deezer.jpg',
    'VLC Player': 'vlc.png',
    'MX Player': 'MXPlayer.jpg',
    'InShot': 'InShot.jpg',
    'KineMaster': 'KineMaster.jpg',
    
    // Streaming
    'Shahid': 'Shahid.jpg',
    'OSN+': 'OSN.jpg',
    'Yacine TV': 'yacine-tv.png',
    'beIN CONNECT': 'beIN.jpg',
    'Kooora Live': 'KoooraLive.jpg',
    
    // Tools & Productivity
    'Google Translate': 'Google Translate.jpg',
    'Google Chrome': 'GoogleChrome.jpg',
    'Microsoft Office': 'MicrosoftOffice.jpg',
    'Adobe Acrobat': 'AdobeAcrobat.jpg',
    'CamScanner': 'CamScanner.jpg',
    'Dropbox': 'dropbox.png',
    'Google Drive': 'google-drive.png',
    'Google Photos': 'google-photos.png',
    'Firefox': 'firefox.png',
    'Brave Browser': 'BraveBrowser.jpg',
    'SHAREit': 'SHAREit.jpg',
    'Truecaller': 'Truecaller.jpg',
    'Flashlight': 'Flashlight.jpg',
    'Calculator': 'Calculator.jpg',
    'Google Play': 'google-play.png',
    'Google': 'google.png',
    'Google Pay': 'google-pay.png',
    'Google Maps': 'google-maps.png',
    
    // Shopping
    'Amazon': 'Amazon.jpg',
    'AliExpress': 'AliExpress.jpg',
    'Noon': 'Noon.jpg',
    'Jumia': 'Jumia.jpg',
    'Temu': 'Temu.jpg',
    'Shopify': 'Shopify.jpg',
    'eBay': 'eBay.jpg',
    
    // Food & Delivery
    'Uber Eats': 'UberEats.jpg',
    'Talabat': 'Talabat.jpg',
    'Glovo': 'Glovo.jpg',
    'Mrsool': 'Mrsool.jpg',
    
    // Finance
    'PayPal': 'paypal.png',
    'Binance': 'binance.png',
    'Western Union': 'western-union.png',
    'Coinbase': 'Coinbase.jpg',
    
    // News
    'Sky News Arabia': 'SkyNews.jpg',
    'Al Arabiya': 'AlArabiya.jpg',
    
    // Health & Fitness
    'MyFitnessPal': 'MyFitnessPal.jpg',
    'Nike Training': 'NikeTraining.jpg',
    'Strava': 'Strava.jpg',
    
    // Education
    'Duolingo': 'Duolingo.jpg',
    'Khan Academy': 'KhanAcademy.jpg',
    'Udemy': 'Udemy.jpg',
    
    // Design & Creativity
    'Canva': 'Canva.jpg',
    'Picsart': 'Picsart.png',
    'Adobe Photoshop': 'AdobePhotoshop.jpg',
    
    // Navigation & Travel
    'Waze': 'Waze.jpg',
    'Booking.com': 'Booking.jpg',
    'Airbnb': 'Airbnb.jpg',
    
    // Security
    'Avast Antivirus': 'Avast.jpg',
    'Norton Security': 'Norton.jpg',
    
    // Religious
    'Quran': 'quran.png',
    'Khatma': 'Khatma.png',
    'Salaat First': 'salaat_first.jpg',
    
    // AI & Assistants
    'ChatGPT': 'hatgpt.jpg',
    'Google Gemini': 'Google-Gemini.jpg',
    'Microsoft Copilot': 'Copilot.jpg',
    'Google Assistant': 'google_assistant.jpg',
    
    // Entertainment
    'Koora': 'Koora.jpg',
    'Ostoura': 'Ostoura.png',
    'Partshisi': 'Partshisi.png',
    'SnapTube': 'snaptube.png',
    'Opera': 'opera.jpeg',
    'HatGPT': 'hatgpt.jpg',
   'Kooora Live': 'KoooraLive.png',
    
    // Other
    'Uber': 'Uber.jpg',
    'Fiverr': 'Fiverr - Freelance Service.jpg',
    'Lightroom': 'LightroomideoEditor.png',
'Roblox': 'roblox.png',
'Minecraft': 'minecraft.png',
'Call of Duty': 'callofduty.png',
'8 Ball Pool': '8ball-pool.png',
'eFootball PES': 'efootball.png',
'Subway Surfers': 'subwaysurfers.png',
'Ludo King': 'ludoking.png',
'SoundCloud': 'soundcloud.png',
'Microsoft Office': 'microsoft-office.png',
'Truecaller': 'truecaller.png',
'SHAREit': 'shareit.png',
'eBay': 'ebay.png',
'Glovo': 'glovo.png',
'Nike Training': 'niketraining.png',
'MyFitnessPal': 'myfitnesspal.png',
'Udemy': 'udemy.png',
'beIN CONNECT': 'beinconnect.png',
'Shahid': 'shahid.png',
'Uber': 'uber.png'};

// ==================== Brand colours used for generated fallback icons ====================
const appColors = {
    'WhatsApp': '25D366',
    'Facebook': '1877F2',
    'Messenger': '00B2FF',
    'Call of Duty': 'FF6B6B',
    'Roblox': 'DE1212',
    'Minecraft': '5D8C3A',
    'Uber': '000000',
    'Microsoft Copilot': '00A4EF',
    'Netflix': 'E50914',
    'Spotify': '1DB954',
    'Instagram': 'E4405F',
    'Snapchat': 'FFFC00',
    'Telegram': '0088CC',
    'TikTok': '000000',
    'Pinterest': 'BD081C',
    'YouTube Music': 'FF0000',
    'Google Translate': '4285F4',
    'ChatGPT': '10A37F',
    'Google Play': '34A853',
    'Fiverr': '1DBF73',
    'Shopify': '96BF48',
    'Temu': 'FB7701',
    'Picsart': 'C209C2',
    'Free Fire': 'FFA500',
    'Clash of Clans': 'F1C40F',
    'Twitter': '1DA1F2',
    'LinkedIn': '0077B5',
    'Discord': '5865F2',
    'Reddit': 'FF4500',
    'Viber': '665CAC',
    'WeChat': '07C160',
    'Line': '00C300',
    'IMO': '2196F3',
    'VLC Player': 'FF8800',
    'Firefox': 'FF7139',
    'Google Maps': '4285F4',
    'Google Drive': '4285F4',
    'Google Photos': '4285F4',
    'Google Pay': '4285F4',
    'Google': '4285F4',
    'Dropbox': '0061FF',
    'PayPal': '003087',
    'Binance': 'F0B90B',
    'Western Union': 'FFDD00',
    '8 Ball Pool': '000000',
    'Amazon': 'FF9900',
    'Shahid': '0066CC',
    'Duolingo': '58CC02',
    'Canva': '00C4CC',
    'Airbnb': 'FF5A5F',
    'Waze': '33CCFF',
    'Uber Eats': '06C167',
    'Talabat': 'FF6B00',
    'Coinbase': '0052FF',
    'Avast Antivirus': 'FF7800',
    'Opera': 'FF1B2D'
};

// ==================== Translations ====================
const I18N = {
    ar: {
        title: 'CHELAT STORE | متجر تطبيقات وألعاب الأندرويد والآيفون',
        searchPlaceholder: 'ابحث عن تطبيق...',
        skip: 'انتقل إلى المحتوى',
        heroTitle: 'حمّل أشهر التطبيقات والألعاب بسهولة',
        heroText: 'اكتشف أكثر من {n} تطبيق ولعبة مختارة لأندرويد وآيفون، مرتبة حسب الفئة وبروابط تحميل من المتاجر الرسمية.',
        featuredTitle: '🔥 الأكثر تميزاً',
        featured: 'مميز',
        download: 'تحميل',
        downloadNow: 'تحميل الآن',
        appsCount: 'تطبيق',
        browse: 'تصفح الفئات',
        noResults: 'لا توجد نتائج مطابقة لبحثك',
        newsSection: 'أخبار التقنية',
        contactSection: 'تواصل معنا',
        whatsapp: 'واتساب',
        email: 'البريد الإلكتروني',
        phone: 'اتصل بنا',
        settingsSection: 'الإعدادات',
        darkMode: 'الوضع الليلي',
        language: 'اللغة',
        statsSection: 'إحصائيات المتجر',
        totalApps: 'تطبيق',
        avgRating: 'متوسط التقييم',
        privacy: 'سياسة الخصوصية',
        footer: 'جميع الحقوق محفوظة',
        disclaimer: 'جميع أسماء التطبيقات والشعارات هي علامات تجارية لأصحابها، وتُعرض هنا لأغراض التعريف فقط. روابط التحميل تقود إلى المتاجر الرسمية.',
        menu: 'فتح القائمة', closeMenu: 'إغلاق القائمة', theme: 'تبديل الوضع', changeLang: 'تغيير اللغة', clear: 'مسح البحث', top: 'إلى الأعلى',
        consentTitle: 'الخصوصية',
        consentText: 'نستخدم ملفات تعريف الارتباط لعرض إعلانات وتحسين تجربتك. يمكنك قبول الإعلانات المخصصة أو الاكتفاء بالإعلانات العامة.',
        consentAccept: 'قبول الكل',
        consentEssential: 'إعلانات عامة فقط',
        categories: {
            Social: 'التواصل الاجتماعي', Games: 'الألعاب', Music: 'الموسيقى', Video: 'الفيديو', Streaming: 'البث المباشر',
            Tools: 'الأدوات', Shopping: 'التسوق', Food: 'الطعام والتوصيل', Finance: 'المالية', News: 'الأخبار',
            Health: 'الصحة واللياقة', Education: 'التعليم', Design: 'التصميم', Navigation: 'الملاحة', Travel: 'السفر',
            Security: 'الأمان', Religious: 'ديني', AI: 'الذكاء الاصطناعي', Entertainment: 'الترفيه', Other: 'أخرى'
        }
    },
    en: {
        title: 'CHELAT STORE | Android & iPhone Apps and Games Store',
        searchPlaceholder: 'Search for an app...',
        skip: 'Skip to content',
        heroTitle: 'Download the most popular apps and games',
        heroText: 'Discover {n}+ handpicked apps and games for Android and iPhone, organised by category with links to the official stores.',
        featuredTitle: '🔥 Featured Apps',
        featured: 'Featured',
        download: 'Download',
        downloadNow: 'Download Now',
        appsCount: 'apps',
        browse: 'Browse categories',
        noResults: 'No apps match your search',
        newsSection: 'Tech News',
        contactSection: 'Contact Us',
        whatsapp: 'WhatsApp',
        email: 'Email',
        phone: 'Call us',
        settingsSection: 'Settings',
        darkMode: 'Dark mode',
        language: 'Language',
        statsSection: 'Store Stats',
        totalApps: 'Apps',
        avgRating: 'Avg. rating',
        privacy: 'Privacy Policy',
        footer: 'All rights reserved',
        disclaimer: 'All app names and logos are trademarks of their respective owners and are shown for identification only. Download links lead to the official stores.',
        menu: 'Open menu', closeMenu: 'Close menu', theme: 'Toggle theme', changeLang: 'Change language', clear: 'Clear search', top: 'Back to top',
        consentTitle: 'Privacy',
        consentText: 'We use cookies to show ads and improve your experience. You can accept personalised ads or keep to non-personalised ones.',
        consentAccept: 'Accept all',
        consentEssential: 'Non-personalised only',
        categories: {
            Social: 'Social', Games: 'Games', Music: 'Music', Video: 'Video', Streaming: 'Live Streaming',
            Tools: 'Tools', Shopping: 'Shopping', Food: 'Food & Delivery', Finance: 'Finance', News: 'News',
            Health: 'Health & Fitness', Education: 'Education', Design: 'Design', Navigation: 'Navigation', Travel: 'Travel',
            Security: 'Security', Religious: 'Religious', AI: 'Artificial Intelligence', Entertainment: 'Entertainment', Other: 'Other'
        }
    },
    fr: {
        title: 'CHELAT STORE | Boutique d’applications et jeux Android & iPhone',
        searchPlaceholder: 'Rechercher une application...',
        skip: 'Aller au contenu',
        heroTitle: 'Téléchargez les applis et jeux les plus populaires',
        heroText: 'Découvrez plus de {n} applications et jeux sélectionnés pour Android et iPhone, classés par catégorie, avec des liens vers les boutiques officielles.',
        featuredTitle: '🔥 En Vedette',
        featured: 'Vedette',
        download: 'Télécharger',
        downloadNow: 'Télécharger',
        appsCount: 'applis',
        browse: 'Parcourir les catégories',
        noResults: 'Aucune application ne correspond à votre recherche',
        newsSection: 'Actualités tech',
        contactSection: 'Contactez-nous',
        whatsapp: 'WhatsApp',
        email: 'E-mail',
        phone: 'Appelez-nous',
        settingsSection: 'Paramètres',
        darkMode: 'Mode sombre',
        language: 'Langue',
        statsSection: 'Statistiques',
        totalApps: 'Applis',
        avgRating: 'Note moyenne',
        privacy: 'Politique de confidentialité',
        footer: 'Tous droits réservés',
        disclaimer: 'Tous les noms et logos d’applications sont des marques de leurs propriétaires respectifs, affichés à titre d’identification uniquement. Les liens mènent aux boutiques officielles.',
        menu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', theme: 'Changer le thème', changeLang: 'Changer de langue', clear: 'Effacer', top: 'Haut de page',
        consentTitle: 'Confidentialité',
        consentText: 'Nous utilisons des cookies pour afficher des publicités et améliorer votre expérience. Vous pouvez accepter les publicités personnalisées ou rester sur des publicités non personnalisées.',
        consentAccept: 'Tout accepter',
        consentEssential: 'Non personnalisées',
        categories: {
            Social: 'Réseaux sociaux', Games: 'Jeux', Music: 'Musique', Video: 'Vidéo', Streaming: 'Streaming',
            Tools: 'Outils', Shopping: 'Shopping', Food: 'Repas & Livraison', Finance: 'Finance', News: 'Actualités',
            Health: 'Santé & Fitness', Education: 'Éducation', Design: 'Design', Navigation: 'Navigation', Travel: 'Voyage',
            Security: 'Sécurité', Religious: 'Religion', AI: 'Intelligence artificielle', Entertainment: 'Divertissement', Other: 'Autres'
        }
    }
};

const LANGS = ['ar', 'en', 'fr'];
const store = {
    get(k, d) { try { return localStorage.getItem(k) ?? d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
};

let currentLang = LANGS.includes(store.get('qs_lang')) ? store.get('qs_lang') : 'ar';
const T = () => I18N[currentLang];

// ==================== Helpers ====================
function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
}

// Locally generated SVG fallback icon (no external requests)
function fallbackIcon(name) {
    const hex = appColors[name] || '2d3748';
    const r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16);
    const fg = (0.299 * r + 0.587 * g + 0.114 * b) > 170 ? '#1a202c' : '#ffffff';
    const initials = name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">' +
        '<rect width="96" height="96" rx="22" fill="#' + hex + '"/>' +
        '<text x="48" y="61" font-size="38" font-family="Arial,sans-serif" font-weight="700" fill="' + fg + '" text-anchor="middle">' +
        initials.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function getImagePath(name) {
    const file = fileMap[name];
    return file ? 'assets/images/icons/' + encodeURIComponent(file) : null;
}

// Real link if provided, otherwise the official Google Play search for the app
function getDownloadLink(app) {
    if (app.downloadLink && app.downloadLink !== '#') return app.downloadLink;
    return 'https://play.google.com/store/search?c=apps&q=' + encodeURIComponent(app.name);
}

function createCard(app, featured) {
    const card = el('article', featured ? 'slider-card' : 'app-card');
    card.dataset.search = (app.name + ' ' + app.category).toLowerCase();
    if (featured) card.dataset.badge = T().featured;

    const img = el('img', 'app-icon');
    const size = featured ? 96 : 70;
    img.width = size; img.height = size;
    img.alt = app.name;
    img.decoding = 'async';
    img.loading = featured ? 'eager' : 'lazy';
    const fb = fallbackIcon(app.name);
    img.addEventListener('error', () => { if (img.src !== fb) img.src = fb; }, { once: true });
    img.src = getImagePath(app.name) || fb;

    const rating = el('div', 'app-rating');
    const full = Math.round(app.rating);
    rating.textContent = app.rating + ' ' + '★'.repeat(full) + '☆'.repeat(5 - full);
    rating.setAttribute('aria-label', app.rating + ' / 5');

    const btn = el('a', 'download-btn');
    btn.href = getDownloadLink(app);
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.dataset.key = featured ? 'downloadNow' : 'download';
    btn.dataset.app = app.name;

    card.append(img, el('h3', 'app-name', app.name), rating, btn);
    return card;
}

// ==================== Rendering (runs ONCE - search only toggles visibility) ====================
const ui = { sections: [], chips: [] };

function renderApps() {
    const sliderEl = document.getElementById('sliderContainer');
    const catEl = document.getElementById('categoriesContainer');
    const chipsEl = document.getElementById('chips');

    const featuredFrag = document.createDocumentFragment();
    appsData.filter(a => a.isFeatured).forEach(a => featuredFrag.appendChild(createCard(a, true)));
    sliderEl.appendChild(featuredFrag);

    const byCat = {};
    appsData.filter(a => !a.isFeatured).forEach(a => { (byCat[a.category] = byCat[a.category] || []).push(a); });

    const keys = Object.keys(categories).filter(k => byCat[k]);
    Object.keys(byCat).forEach(k => { if (!keys.includes(k)) keys.push(k); });

    const cfg = QSAds.config;
    let adsPlaced = 0;

    keys.forEach((key, i) => {
        const info = categories[key] || { icon: 'fa-box' };

        const section = el('section', 'category-section');
        section.id = 'cat-' + key;
        section.dataset.cat = key;

        const head = el('div', 'category-header');
        const icon = el('i', 'fas ' + info.icon);
        icon.setAttribute('aria-hidden', 'true');
        head.append(icon, el('h2'), el('span', 'category-count'));

        const grid = el('div', 'apps-grid');
        const frag = document.createDocumentFragment();
        byCat[key].forEach(a => frag.appendChild(createCard(a, false)));
        grid.appendChild(frag);

        section.append(head, grid);
        catEl.appendChild(section);
        ui.sections.push(section);

        const chip = el('a', 'chip');
        chip.href = '#cat-' + key;
        chip.dataset.cat = key;
        const ci = el('i', 'fas ' + info.icon);
        ci.setAttribute('aria-hidden', 'true');
        chip.append(ci, el('span'));
        chipsEl.appendChild(chip);

        // In-feed ads: between sections, capped, never right next to download buttons
        const n = i + 1;
        if (adsPlaced < cfg.maxInfeed && n >= cfg.infeedFirstAfter && (n - cfg.infeedFirstAfter) % cfg.infeedEvery === 0 && n < keys.length) {
            const ad = QSAds.create('infeed');
            if (ad) { catEl.appendChild(ad); adsPlaced++; }
        }
    });

    const empty = el('div', 'no-results');
    empty.id = 'noResults';
    empty.hidden = true;
    const ei = el('i', 'fas fa-search');
    ei.setAttribute('aria-hidden', 'true');
    empty.append(ei, el('p'));
    catEl.appendChild(empty);
}

// ==================== Language ====================
function applyLanguage(lang) {
    currentLang = lang;
    store.set('qs_lang', lang);
    const t = T();
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.title;

    document.querySelectorAll('[data-key]').forEach(node => {
        const v = t[node.dataset.key];
        if (typeof v === 'string') node.textContent = v.replace('{n}', appsData.length);
    });
    document.querySelectorAll('[data-aria]').forEach(node => node.setAttribute('aria-label', t[node.dataset.aria]));
    document.getElementById('searchInput').placeholder = t.searchPlaceholder;
    document.querySelectorAll('.slider-card').forEach(c => { c.dataset.badge = t.featured; });
    document.querySelectorAll('.download-btn').forEach(b => {
        b.setAttribute('aria-label', t[b.dataset.key] + ' ' + b.dataset.app);
    });

    ui.sections.forEach(sec => { sec.querySelector('h2').textContent = t.categories[sec.dataset.cat] || sec.dataset.cat; });
    document.querySelectorAll('.chip').forEach(c => { c.querySelector('span').textContent = t.categories[c.dataset.cat] || c.dataset.cat; });
    document.querySelector('#noResults p').textContent = t.noResults;
    updateCounts();

    const next = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
    document.querySelector('#langToggle .lang-text').textContent = next.toUpperCase();
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    QSAds.relabel();
}

function updateCounts() {
    const t = T();
    ui.sections.forEach(sec => {
        const n = sec.querySelectorAll('.app-card:not([hidden])').length;
        sec.querySelector('.category-count').textContent = n + ' ' + t.appsCount;
    });
}

// ==================== Search (toggles visibility - no re-render, so ads never reload) ====================
function applySearch(raw) {
    const term = raw.toLowerCase().trim();
    const t = T();
    let visible = 0;

    document.querySelectorAll('.slider-card, .app-card').forEach(card => {
        const hay = card.dataset.search + ' ' + (t.categories[card.closest('.category-section')?.dataset.cat] || '').toLowerCase();
        const match = !term || hay.includes(term);
        card.hidden = !match;
        if (match) visible++;
    });

    ui.sections.forEach(sec => { sec.hidden = !sec.querySelector('.app-card:not([hidden])'); });

    const anyFeatured = !!document.querySelector('.slider-card:not([hidden])');
    document.getElementById('featuredHeading').hidden = !anyFeatured;
    document.getElementById('sliderContainer').hidden = !anyFeatured;
    document.getElementById('chips').hidden = !!term;
    document.querySelectorAll('.ad-infeed').forEach(a => { a.hidden = !!term; });
    document.getElementById('noResults').hidden = visible > 0;
    document.getElementById('searchClear').classList.toggle('visible', !!term);

    updateCounts();
    if (!term) QSAds.pushAll();

    const url = new URL(location.href);
    if (term) url.searchParams.set('q', raw.trim()); else url.searchParams.delete('q');
    history.replaceState(null, '', url);
}

// ==================== Boot ====================
document.addEventListener('DOMContentLoaded', () => {
    if (typeof appsData === 'undefined' || !appsData.length) {
        const c = document.getElementById('categoriesContainer');
        if (c) c.appendChild(el('p', 'no-results', 'Data failed to load.'));
        return;
    }

    QSAds.hydrate();
    renderApps();

    // ---------- Header height (for scroll offset) ----------
    const header = document.querySelector('.site-header');
    const setHeaderH = () => document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    setHeaderH();
    if ('ResizeObserver' in window) new ResizeObserver(setHeaderH).observe(header);

    // ---------- Sidebar ----------
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('sidebarClose');

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('sidebar-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        closeBtn.focus();
        setTimeout(QSAds.pushAll, 400);   // load the sidebar ad only once it is actually visible
    }
    function closeSidebar() {
        if (!sidebar.classList.contains('active')) return;
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
    }
    menuToggle.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });
    sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setTimeout(closeSidebar, 250)));

    // ---------- Theme ----------
    const themeToggle = document.getElementById('themeToggle');
    const darkToggle = document.getElementById('darkModeToggle');
    function setTheme(theme, persist) {
        document.documentElement.dataset.theme = theme;
        if (persist) store.set('qs_theme', theme);
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun" aria-hidden="true"></i>' : '<i class="fas fa-moon" aria-hidden="true"></i>';
        darkToggle.checked = theme === 'dark';
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = theme === 'dark' ? '#0f172a' : '#aab4c8';
    }
    const flip = () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
    setTheme(document.documentElement.dataset.theme || 'light', false);
    themeToggle.addEventListener('click', flip);
    darkToggle.addEventListener('change', flip);
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', e => {
            if (!store.get('qs_theme')) setTheme(e.matches ? 'dark' : 'light', false);
        });
    }

    // ---------- Language ----------
    document.getElementById('langToggle').addEventListener('click', () => {
        applyLanguage(LANGS[(LANGS.indexOf(currentLang) + 1) % LANGS.length]);
    });
    document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLanguage(b.dataset.lang)));
    applyLanguage(currentLang);

    // ---------- Search ----------
    const input = document.getElementById('searchInput');
    let timer;
    input.addEventListener('input', e => {
        clearTimeout(timer);
        timer = setTimeout(() => applySearch(e.target.value), 200);
    });
    document.getElementById('searchClear').addEventListener('click', () => {
        input.value = '';
        applySearch('');
        input.focus();
    });
    const q = new URLSearchParams(location.search).get('q');
    if (q) { input.value = q; applySearch(q); }

    // ---------- Stats ----------
    document.getElementById('statTotal').textContent = appsData.length + '+';
    const avg = appsData.reduce((s, a) => s + a.rating, 0) / appsData.length;
    document.getElementById('statRating').textContent = avg.toFixed(1) + '★';

    // ---------- Back to top ----------
    const toTop = document.getElementById('toTop');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => { toTop.classList.toggle('show', window.scrollY > 700); ticking = false; });
    }, { passive: true });
    toTop.addEventListener('click', () => window.scrollTo({ top: 0 }));

    // ---------- Ads ----------
    QSAds.initAnchor();
    QSAds.initConsentBanner(T);
    QSAds.startWhenIdle();
});
