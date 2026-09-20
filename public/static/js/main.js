/* KITONGA-ICT — site behaviour v2 */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  const catBy = (slug) => CATEGORIES.find((c) => c.slug === slug);
  const svcIn = (slug) => SERVICES.filter((s) => s.cat === slug);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- shared chrome ---------- */
  function initChrome() {
    // text bindings
    $$('[data-k]').forEach((el) => { const v = KITONGA[el.dataset.k]; if (v != null) el.textContent = v; });
    $$('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
    $$('[data-wa-general]').forEach((a) => (a.href = waLink('Hello KITONGA-ICT, I would like to enquire about a service.')));
    $$('[data-wa-print]').forEach((a) => (a.href = waLink('Hello KITONGA-ICT, I would like to order a print / apparel job.')));
    $$('[data-tel]').forEach((a) => (a.href = 'tel:+' + KITONGA.phone));
    $$('[data-mail]').forEach((a) => (a.href = 'mailto:' + KITONGA.email));
    $$('[data-social]').forEach((a) => { const u = KITONGA.social[a.dataset.social]; if (u && u !== '#') a.href = u; else a.remove(); });

    // mega menu
    const mega = $('#mega');
    if (mega) {
      mega.innerHTML = CATEGORIES.map((c) => `
        <a href="/services#${c.slug}" role="menuitem">
          <span class="ic" style="background:${c.tint}"><i class="fas ${c.icon}"></i></span>
          <span>${esc(c.label)}<small>${esc(c.summary)}</small></span>
        </a>`).join('');
      const li = $('#nav-services'), btn = $('button', li);
      let t;
      const open = (v) => { li.classList.toggle('open', v); btn.setAttribute('aria-expanded', v); };
      li.addEventListener('mouseenter', () => { clearTimeout(t); open(true); });
      li.addEventListener('mouseleave', () => { t = setTimeout(() => open(false), 120); });
      btn.addEventListener('click', () => open(!li.classList.contains('open')));
      document.addEventListener('keydown', (e) => e.key === 'Escape' && open(false));
      document.addEventListener('click', (e) => { if (!li.contains(e.target)) open(false); });
    }

    // mobile nav
    const mnav = $('#mnav'), tog = $('#nav-toggle'), cls = $('#nav-close');
    if (mnav) {
      const cats = $('#mnav-cats');
      if (cats) cats.innerHTML = CATEGORIES.map((c) => `<a href="/services#${c.slug}" style="background:${c.tint}"><i class="fas ${c.icon}"></i>${esc(c.label)}</a>`).join('');
      const set = (v) => { mnav.classList.toggle('open', v); document.body.classList.toggle('locked', v); tog.setAttribute('aria-expanded', v); };
      tog.addEventListener('click', () => set(true));
      cls.addEventListener('click', () => set(false));
      $$('a', mnav).forEach((a) => a.addEventListener('click', () => set(false)));
      document.addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
    }

    // footer cats
    const fc = $('#foot-cats');
    if (fc) fc.innerHTML = CATEGORIES.map((c) => `<a href="/services#${c.slug}">${esc(c.label)}</a>`).join('');

    // hide header on scroll down
    const header = $('#site-header');
    let last = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      header.classList.toggle('hide', y > 160 && y > last && !document.body.classList.contains('locked'));
      last = y;
    }, { passive: true });
  }

  /* ---------- reveal + counters ---------- */
  function initReveal() {
    const els = $$('.rv, .stagger');
    if (!('IntersectionObserver' in window) || reduced) { els.forEach((e) => e.classList.add('in')); runCounters(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((e) => io.observe(e));
    runCounters(false);
  }
  function runCounters(instant) {
    $$('[data-count]').forEach((el) => {
      const target = +el.dataset.count;
      if (instant) { el.textContent = target; return; }
      const io = new IntersectionObserver((en) => {
        if (!en[0].isIntersecting) return; io.disconnect();
        const t0 = performance.now(), dur = 1100;
        const step = (t) => { const p = Math.min(1, (t - t0) / dur); el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
        el.textContent = '0'; requestAnimationFrame(step);
      }, { threshold: .4 });
      io.observe(el);
    });
  }

  /* ---------- service row ---------- */
  function svcRow(s) {
    return `
      <div class="svc">
        <div><div class="n">${esc(s.name)}</div><div class="d">${esc(s.desc)}</div></div>
        <div class="meta">
          <span class="turn">${esc(s.turn)}</span>
          <span class="price">${kshFmt(s.price)}${s.unit ? `<small>${esc(s.unit)}</small>` : ''}</span>
          <a class="wa" href="${waRequest(s)}" target="_blank" rel="noopener" aria-label="Order ${esc(s.name)} on WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>`;
  }

  /* ---------- home ---------- */
  function initHome() {
    if (!$('#cats')) return;

    // video toggle
    $$('[data-toggle-video]').forEach((b) => {
      const v = $('video', b.parentElement);
      b.addEventListener('click', () => {
        const paused = v.paused; paused ? v.play() : v.pause();
        b.innerHTML = `<i class="fas ${paused ? 'fa-pause' : 'fa-play'}"></i>`;
        b.setAttribute('aria-label', paused ? 'Pause video' : 'Play video');
      });
    });

    // marquee
    const logos = [
      ['eCitizen', 'ecitizen.png'], ['KRA iTax', 'kra.png'], ['HELB', 'helb.png'], ['NTSA TIMS', 'ntsa.png'],
      ['SHA', 'sha.svg'], ['NSSF', 'nssf.png'], ['TSC', 'tsc.png'], ['KUCCPS', 'kuccps.png']
    ];
    const m = $('#marquee');
    const items = logos.map(([n, f]) => `<span class="logo"><img src="${ASSET}logos/${f}" alt="" loading="lazy">${n}</span>`).join('');
    m.innerHTML = items + items;

    // categories + expanding panel
    const grid = $('#cats');
    grid.innerHTML = CATEGORIES.map((c) => `
      <button class="cat" type="button" data-cat="${c.slug}" aria-expanded="false" aria-controls="panel" style="--tint:${c.tint}">
        <span class="ic"><i class="fas ${c.icon}"></i></span>
        <span class="cnt">${svcIn(c.slug).length}</span>
        <span><h3>${esc(c.label)}</h3><p>${esc(c.summary)}</p></span>
        <span class="go">Open <i class="fas fa-arrow-right"></i></span>
      </button>`).join('') + `<div class="panel" id="panel" role="region" aria-live="polite"></div>`;

    const panel = $('#panel');
    let openSlug = null;
    const cols = () => getComputedStyle(grid).gridTemplateColumns.split(' ').length;

    function place(btn) {
      // move panel to end of the row containing btn
      const btns = $$('.cat', grid), i = btns.indexOf(btn), n = cols();
      const rowEnd = Math.min(btns.length, (Math.floor(i / n) + 1) * n);
      grid.insertBefore(panel, btns[rowEnd] || null);
    }
    function render(slug) {
      const c = catBy(slug), list = svcIn(slug);
      panel.innerHTML = `
        <div class="panel-inner">
          <div class="panel-side">
            <span class="ic" style="background:${c.tint}"><i class="fas ${c.icon}"></i></span>
            <h3>${esc(c.name)}</h3>
            <p>${esc(c.detail)}</p>
            ${c.portals.length ? `<div class="portals">${c.portals.map((p) => `<span>${esc(p)}</span>`).join('')}</div>` : ''}
            <a class="btn btn-dark" href="/services#${c.slug}">All ${list.length} services <i class="fas fa-arrow-right"></i></a>
          </div>
          <div class="svc-list">${list.slice(0, 6).map(svcRow).join('')}
            ${list.length > 6 ? `<div class="panel-more"><a class="btn btn-ghost btn-sm" href="/services#${c.slug}">+ ${list.length - 6} more</a></div>` : ''}
          </div>
        </div>`;
    }
    function setOpen(slug, btn) {
      $$('.cat', grid).forEach((b) => b.setAttribute('aria-expanded', 'false'));
      if (!slug) { panel.classList.remove('open'); panel.style.maxHeight = '0px'; openSlug = null; return; }
      btn.setAttribute('aria-expanded', 'true');
      place(btn); render(slug);
      panel.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      openSlug = slug;
      setTimeout(() => {
        const r = panel.getBoundingClientRect();
        if (r.top < 90 || r.bottom > innerHeight) panel.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest' });
      }, 350);
    }
    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat'); if (!btn) return;
      const slug = btn.dataset.cat;
      setOpen(slug === openSlug ? null : slug, btn);
    });
    window.addEventListener('resize', () => { if (openSlug) { place($(`.cat[data-cat="${openSlug}"]`, grid)); panel.style.maxHeight = panel.scrollHeight + 'px'; } });
    // open print by default if hash requests it
    if (location.hash === '#print') { const b = $('.cat[data-cat="print"]', grid); if (b) setOpen('print', b); }

    // print chips
    $('#print-chips').innerHTML = svcIn('print').slice(0, 6).map((s) =>
      `<a href="${waRequest(s)}" target="_blank" rel="noopener">${esc(s.name)} <b>${kshFmt(s.price)}${s.unit || ''}</b></a>`).join('');

    // work grid: 6 tiles
    const picks = [PORTFOLIO[0], PORTFOLIO[2], PORTFOLIO[6], PORTFOLIO[4], PORTFOLIO[10], PORTFOLIO[7]].filter(Boolean);
    $('#work-grid').innerHTML = picks.map((p, i) => `
      <a href="/portfolio" class="${i === 0 ? 'tall' : i === 4 ? 'wide' : ''}">
        <img src="${ASSET}portfolio/${p.img}" alt="${esc(p.title)}" loading="lazy">
        <span class="cap"><span>${esc(p.title)}</span><i class="fas fa-arrow-up-right-from-square"></i></span>
      </a>`).join('');

    // request form
    const f = $('#request-form'), cat = $('#rf-cat'), svc = $('#rf-svc'), sum = $('#req-summary');
    cat.innerHTML = CATEGORIES.map((c) => `<option value="${c.slug}">${esc(c.label)}</option>`).join('');
    const fill = () => {
      svc.innerHTML = svcIn(cat.value).map((s) => `<option value="${s.id}">${esc(s.name)} — ${kshFmt(s.price)}${s.unit || ''}</option>`).join('');
      upd();
    };
    const upd = () => {
      const s = SERVICES.find((x) => x.id === svc.value);
      sum.innerHTML = s ? `<i class="fas fa-clock"></i> Turnaround: <b>${esc(s.turn)}</b> · <b>${kshFmt(s.price)}${s.unit || ''}</b>` : '';
    };
    cat.addEventListener('change', fill); svc.addEventListener('change', upd); fill();
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const s = SERVICES.find((x) => x.id === svc.value);
      const name = $('#rf-name').value.trim(), notes = $('#rf-notes').value.trim();
      let msg = `Hello KITONGA-ICT${name ? ', my name is ' + name : ''}. I would like to request: ${s.name} (${kshFmt(s.price)}${s.unit || ''}).`;
      if (notes) msg += ` Notes: ${notes}`;
      msg += ' What documents do you need from me?';
      window.open(waLink(msg), '_blank', 'noopener');
    });
  }

  /* ---------- directory page ---------- */
  function initDirectory() {
    const rail = $('#dir-rail'); if (!rail) return;
    const body = $('#dir-body'), search = $('#dir-search'), meta = $('#dir-meta');
    const tabs = [{ slug: 'all', label: 'All services', icon: 'fa-grip', tint: '#eef0f4' }, ...CATEGORIES];
    rail.innerHTML = tabs.map((c) => `
      <button class="dir-tab" type="button" role="tab" data-cat="${c.slug}" aria-selected="false" style="--tint:${c.tint}">
        <i class="fas ${c.icon}"></i>${esc(c.label)}<span class="c">${c.slug === 'all' ? SERVICES.length : svcIn(c.slug).length}</span>
      </button>`).join('');
    let cur = 'all';
    function render() {
      const q = search.value.trim().toLowerCase();
      const cats = cur === 'all' ? CATEGORIES : [catBy(cur)];
      let total = 0;
      body.innerHTML = cats.map((c) => {
        const list = svcIn(c.slug).filter((s) => !q || (s.name + ' ' + s.desc).toLowerCase().includes(q));
        total += list.length;
        if (!list.length) return '';
        return `<section class="dir-group" id="${c.slug}">
          <h3><i class="fas ${c.icon}" style="background:${c.tint}"></i>${esc(c.name)}</h3>
          <div class="svc-list">${list.map(svcRow).join('')}</div>
        </section>`;
      }).join('') || `<p class="dir-meta">No services match "${esc(q)}".</p>`;
      meta.textContent = `${total} service${total === 1 ? '' : 's'}${q ? ` matching "${q}"` : ''}`;
      $$('.dir-tab', rail).forEach((b) => b.setAttribute('aria-selected', b.dataset.cat === cur));
    }
    rail.addEventListener('click', (e) => {
      const b = e.target.closest('.dir-tab'); if (!b) return;
      cur = b.dataset.cat; history.replaceState(null, '', cur === 'all' ? '/services' : '/services#' + cur); render();
      b.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    });
    search.addEventListener('input', render);
    const h = location.hash.slice(1); if (catBy(h)) cur = h;
    render();
    if (cur !== 'all') setTimeout(() => window.scrollTo({ top: 0 }), 0);
  }

  /* ---------- portfolio page ---------- */
  function initPortfolio() {
    const grid = $('#pf-grid'); if (!grid) return;
    const chips = $('#pf-chips'), lb = $('#lightbox');
    chips.innerHTML = PORTFOLIO_CATS.map((c) => `<button class="chip" type="button" data-cat="${c.slug}" aria-pressed="${c.slug === 'all'}">${esc(c.name)}</button>`).join('');
    let items = PORTFOLIO, idx = 0;
    function render(slug) {
      items = slug === 'all' ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === slug);
      grid.innerHTML = items.map((p, i) => `
        <a href="${ASSET}portfolio/${p.img}" data-i="${i}" class="${p.portrait ? 'tall' : p.wide ? 'wide' : ''}">
          <img src="${ASSET}portfolio/${p.img}" alt="${esc(p.title)}" loading="lazy">
          <span class="cap"><b>${esc(p.title)}</b><span>${esc(p.client)}</span></span>
        </a>`).join('');
      grid.classList.add('stagger'); requestAnimationFrame(() => grid.classList.add('in'));
    }
    chips.addEventListener('click', (e) => {
      const b = e.target.closest('.chip'); if (!b) return;
      $$('.chip', chips).forEach((x) => x.setAttribute('aria-pressed', x === b)); render(b.dataset.cat);
    });
    render('all');

    // lightbox
    const img = $('#lb-img'), title = $('#lb-title'), client = $('#lb-client'), order = $('#lb-order'), count = $('#lb-count');
    function show(i) {
      idx = (i + items.length) % items.length; const p = items[idx];
      img.src = ASSET + 'portfolio/' + p.img; img.alt = p.title; title.textContent = p.title; client.textContent = p.client;
      order.href = waLink(`Hello KITONGA-ICT, I would like something similar to "${p.title}".`);
      count.textContent = `${idx + 1} / ${items.length}`;
    }
    const open = (i) => { show(i); lb.classList.add('open'); document.body.classList.add('locked'); $('#lb-close').focus(); };
    const close = () => { lb.classList.remove('open'); document.body.classList.remove('locked'); };
    grid.addEventListener('click', (e) => { const a = e.target.closest('a'); if (!a) return; e.preventDefault(); open(+a.dataset.i); });
    $('#lb-close').addEventListener('click', close);
    $('#lb-prev').addEventListener('click', () => show(idx - 1));
    $('#lb-next').addEventListener('click', () => show(idx + 1));
    lb.addEventListener('click', (e) => e.target === lb && close());
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(idx - 1); if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  document.addEventListener('DOMContentLoaded', () => { initChrome(); initHome(); initDirectory(); initPortfolio(); initReveal(); });
})();
