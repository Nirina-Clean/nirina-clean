
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Tabs
document.querySelectorAll('[data-tabs]').forEach(tabs => {
  const tabButtons = tabs.querySelectorAll('[role="tab"]');
  const panels = tabs.querySelectorAll('[role="tabpanel"]');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.setAttribute('aria-selected', 'false'));
      panels.forEach(p => p.hidden = true);
      btn.setAttribute('aria-selected', 'true');
      const panel = tabs.querySelector('#' + btn.getAttribute('aria-controls'));
      if (panel) panel.hidden = false;
    });
  });
});
