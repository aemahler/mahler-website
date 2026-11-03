// Pixels per second each band drifts. Lower is slower.
const DRIFT_SPEED = 22;

const bands = document.querySelectorAll('.band');

// Each band is a strip of covers that loops seamlessly: its covers are
// repeated until one set is wider than the screen, then that set is
// doubled and the strip slides by exactly half its width. The copies
// are hidden from screen readers and keyboard navigation.
function layoutBand(band) {
  band.querySelectorAll('[data-clone]').forEach(c => c.remove());
  const originals = Array.from(band.children);
  const setWidth = band.scrollWidth;
  if (!originals.length || !setWidth) return;

  const repeats = Math.max(1, Math.ceil(window.innerWidth / setWidth));
  for (let copy = 1; copy < repeats * 2; copy++) {
    originals.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('data-clone', '');
      clone.setAttribute('aria-hidden', 'true');
      clone.setAttribute('tabindex', '-1');
      band.appendChild(clone);
    });
  }

  // Same steady pace for every band, however many covers it holds.
  const scale = window.innerWidth <= 480 ? 0.6 : window.innerWidth <= 768 ? 0.75 : 1;
  band.style.setProperty('--scroll-speed', (setWidth * repeats / (DRIFT_SPEED * scale)) + 's');
}

const layoutAll = () => bands.forEach(layoutBand);

// Re-lay out as covers finish loading (their widths aren't known until
// then) and when the window is resized.
let layoutTimer;
const queueLayout = () => {
  clearTimeout(layoutTimer);
  layoutTimer = setTimeout(layoutAll, 150);
};

document.querySelectorAll('.band img').forEach(img => {
  // A cover whose image can't be loaded is dropped rather than shown broken.
  const drop = () => { img.closest('.cover-link').remove(); queueLayout(); };
  if (img.complete) {
    if (img.naturalWidth === 0) drop();
  } else {
    img.addEventListener('load', queueLayout);
    img.addEventListener('error', drop);
  }
});

layoutAll();
window.addEventListener('load', layoutAll);
let lastWidth = window.innerWidth;
window.addEventListener('resize', () => {
  // Ignore height-only changes (mobile address bar showing and hiding).
  if (window.innerWidth !== lastWidth) { lastWidth = window.innerWidth; queueLayout(); }
});

document.getElementById('year').textContent = new Date().getFullYear();
