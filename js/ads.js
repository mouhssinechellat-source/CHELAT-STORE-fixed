/* ==========================================================
   js/ads.js - Ad integration layer (Google AdSense ready)

   HOW TO GO LIVE:
   1) Get your AdSense approval, then set  enabled: true
   2) Put your publisher ID in  client  (ca-pub-XXXXXXXXXXXXXXXX)
   3) Create 5 ad units in AdSense and paste each unit's slot ID below
   4) Put the same pub ID in /ads.txt
   Preview the layout at any time (no real ads) with:  /index.html?adpreview
   ========================================================== */
const ADS_CONFIG = {
    enabled: false,                         // master switch
    client: 'ca-pub-XXXXXXXXXXXXXXXX',      // <-- your AdSense publisher ID
    slots: {
        top:     '0000000001',              // leaderboard under the search/hero (above the fold)
        infeed:  '0000000002',              // between category sections
        sidebar: '0000000003',              // inside the side menu
        footer:  '0000000004',              // above the footer
        anchor:  '0000000005'               // mobile sticky bottom banner
    },
    infeedFirstAfter: 2,                    // first in-feed ad after the 2nd category
    infeedEvery: 4,                         // then one every 4 categories
    maxInfeed: 3                            // hard cap, keeps ad density low
};

const QSAds = (() => {
    const params = new URLSearchParams(location.search);
    const preview = params.has('adpreview');
    const active = ADS_CONFIG.enabled || preview;
    const LABELS = { ar: 'إعلان', en: 'Advertisement', fr: 'Publicité' };
    let scriptLoaded = false;

    function label() {
        return LABELS[document.documentElement.lang] || LABELS.en;
    }

    function consent() {
        try { return localStorage.getItem('qs_consent'); } catch (e) { return null; }
    }

    // Builds an ad slot element. Returns null when ads are off (so no empty gaps appear).
    function create(name) {
        if (!active) return null;
        const box = document.createElement('div');
        box.className = 'ad-slot ad-' + name;
        box.dataset.label = label();
        box.dataset.adName = name;
        box.setAttribute('role', 'complementary');
        box.setAttribute('aria-label', label());

        if (ADS_CONFIG.enabled && !preview) {
            const ins = document.createElement('ins');
            ins.className = 'adsbygoogle';
            ins.dataset.adClient = ADS_CONFIG.client;
            ins.dataset.adSlot = ADS_CONFIG.slots[name];
            ins.dataset.adFormat = 'auto';
            ins.dataset.fullWidthResponsive = 'true';
            box.appendChild(ins);
        } else {
            const ph = document.createElement('div');
            ph.className = 'ad-placeholder';
            ph.textContent = 'AD SLOT · ' + name;
            box.appendChild(ph);
        }
        return box;
    }

    // Replace <div data-ad="top"> placeholders in the HTML with real slots
    function hydrate(root) {
        (root || document).querySelectorAll('[data-ad]').forEach(holder => {
            const slot = create(holder.dataset.ad);
            if (slot) holder.replaceWith(slot); else holder.remove();
        });
    }

    function loadScript() {
        if (scriptLoaded || !ADS_CONFIG.enabled || preview) return;
        scriptLoaded = true;
        if (consent() === 'essential') {
            window.adsbygoogle = window.adsbygoogle || [];
            window.adsbygoogle.requestNonPersonalizedAds = 1;
        }
        const s = document.createElement('script');
        s.async = true;
        s.crossOrigin = 'anonymous';
        s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(ADS_CONFIG.client);
        s.onload = pushAll;
        document.head.appendChild(s);
    }

    // Each <ins> is pushed exactly once (never re-pushed => no ad refresh policy issues)
    function pushAll() {
        document.querySelectorAll('ins.adsbygoogle:not([data-pushed])').forEach(ins => {
            if (!ins.offsetWidth) return;                         // hidden (search / desktop-only) -> try later
            if (ins.closest('.sidebar:not(.active)')) return;     // sidebar ad loads when the menu is first opened
            ins.dataset.pushed = '1';
            try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { /* ignore */ }
        });
    }

    // Lazy: only start loading the ad script once the user has interacted / scrolled
    function startWhenIdle() {
        if (!ADS_CONFIG.enabled || preview) return;
        if (!consent()) return;                      // wait for the consent choice
        const go = () => { loadScript(); if (scriptLoaded) pushAll(); };
        let done = false;
        const once = () => { if (done) return; done = true; go(); };
        ['scroll', 'pointerdown', 'keydown'].forEach(ev => addEventListener(ev, once, { once: true, passive: true }));
        setTimeout(once, 4000);
    }

    function initConsentBanner(texts) {
        if (!ADS_CONFIG.enabled && !preview) return;
        if (consent() && !preview) return;
        const t = texts();
        const el = document.createElement('div');
        el.className = 'consent';
        el.setAttribute('role', 'dialog');
        el.setAttribute('aria-label', t.consentTitle);
        el.innerHTML = '<p></p><div class="consent-actions"><button class="accept" type="button"></button><button class="essential" type="button"></button></div>';
        el.querySelector('p').textContent = t.consentText;
        el.querySelector('.accept').textContent = t.consentAccept;
        el.querySelector('.essential').textContent = t.consentEssential;
        const choose = value => {
            try { localStorage.setItem('qs_consent', value); } catch (e) { /* ignore */ }
            el.remove();
            startWhenIdle();
        };
        el.querySelector('.accept').addEventListener('click', () => choose('all'));
        el.querySelector('.essential').addEventListener('click', () => choose('essential'));
        document.body.appendChild(el);
    }

    // Mobile sticky banner (dismissible, shown once per session)
    function initAnchor() {
        if (!active) return;
        try { if (sessionStorage.getItem('qs_anchor_closed')) return; } catch (e) { /* ignore */ }
        const slot = create('anchor');
        if (!slot) return;
        slot.classList.add('ad-anchor');
        const btn = document.createElement('button');
        btn.className = 'ad-close';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Close');
        btn.textContent = '✕';
        btn.addEventListener('click', () => {
            slot.remove();
            document.body.classList.remove('has-anchor');
            try { sessionStorage.setItem('qs_anchor_closed', '1'); } catch (e) { /* ignore */ }
        });
        slot.appendChild(btn);
        document.body.appendChild(slot);
        slot.classList.add('ready');
        document.body.classList.add('has-anchor');
    }

    function relabel() {
        document.querySelectorAll('.ad-slot').forEach(s => { s.dataset.label = label(); s.setAttribute('aria-label', label()); });
    }

    return { active, create, hydrate, pushAll, startWhenIdle, initConsentBanner, initAnchor, relabel, config: ADS_CONFIG };
})();
