// Shared header/footer for all pages. No build step: pages include this file,
// then call renderHeader()/renderFooter() into placeholder divs.
// Adding a page (e.g. blog.html) later only means updating NAV_ITEMS here.

const ICONS = {
  home: '<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
  about: '<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l2.5 2.5"/></svg>',
  work: '<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  blog: '<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h9l5 5v13H6z"/><path d="M15 3v5h5"/></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.71.08-.71 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.2.68.8.56A10.53 10.53 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5z"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.5c0-1.3-.02-3-1.85-3-1.85 0-2.13 1.4-2.13 2.9V21H9z"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg>',
};

const NAV_ITEMS = [
  { key: 'home', href: 'index.html', iconOnly: true },
  { key: 'about', href: 'about.html', label: 'About' },
  { key: 'work', href: 'work.html', label: 'Work' },
  { key: 'blog', href: 'blog.html', label: 'Blog' },
];

const SOCIAL_LINKS = [
  { key: 'github', href: 'https://github.com/collinsbrefo123' },
  { key: 'linkedin', href: 'https://www.linkedin.com/in/collins-gyamera-99a98a196/' },
  { key: 'mail', href: 'mailto:gyamcoll123@gmail.com' },
];

function renderHeader(active) {
  const navHtml = NAV_ITEMS.map(item => {
    const isActive = item.key === active;
    if (item.iconOnly) {
      const cls = isActive ? 'bg-white/10 text-white' : 'text-[#c4c4c4] hover:text-white';
      return `<a href="${item.href}" class="flex items-center justify-center w-7 h-7 rounded-full ${cls}">${ICONS[item.key]}</a>`;
    }
    const cls = isActive ? 'bg-white/10 text-white' : 'text-[#c4c4c4] hover:text-white';
    return `<a href="${item.href}" class="flex items-center gap-1.5 px-3 h-7 rounded-full ${cls} text-[13px]">${ICONS[item.key]}${item.label}</a>`;
  }).join('');

  document.getElementById('site-header').innerHTML = `
    <div class="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-5 text-xs text-[#8a8a8a] z-50">
      <span>America/Toronto</span>
      <nav class="flex items-center gap-0.5 bg-[#141414] border border-white/10 rounded-full px-1.5 py-1.5 shadow-lg">
        ${navHtml}
      </nav>
      <span></span>
    </div>
  `;
}

function renderFooter({ maxWidth = '960px', credit = true, borderTop = false } = {}) {
  const socialHtml = SOCIAL_LINKS.map(link => {
    const target = link.key === 'mail' ? '' : ' target="_blank" rel="noopener"';
    return `<a href="${link.href}"${target} class="hover:text-white">${ICONS[link.key]}</a>`;
  }).join('');

  document.getElementById('site-footer').innerHTML = `
    <footer class="w-full mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#7a7a7a]${borderTop ? ' border-t border-white/10' : ''}" style="max-width:${maxWidth}">
      <p>© 2026 / Collins Gyamera${credit ? ' / Build your portfolio with <span class="brand">Once UI</span>' : ''}</p>
      <div class="flex items-center gap-4">${socialHtml}</div>
    </footer>
  `;
}
