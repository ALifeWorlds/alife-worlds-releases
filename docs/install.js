const tabList = document.querySelector('[role="tablist"]');
const tabs = [...tabList.querySelectorAll('[role="tab"]')];

function showGuide(selectedTab, updateHash) {
  for (const tab of tabs) {
    const selected = tab === selectedTab;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  }

  if (updateHash) {
    const edition = selectedTab.id.slice('tab-'.length);
    history.replaceState(null, '', '#' + edition);
  }
}

function tabFromHash() {
  const fragment = location.hash.slice(1);
  const panel = document.getElementById(fragment)?.closest('[role="tabpanel"]');
  const tabId = panel?.getAttribute('aria-labelledby') || 'tab-' + fragment;
  return tabs.find((tab) => tab.id === tabId) || tabs[0];
}

tabList.addEventListener('click', (event) => {
  const tab = event.target.closest('[role="tab"]');
  if (tab) showGuide(tab, true);
});

tabList.addEventListener('keydown', (event) => {
  const index = tabs.indexOf(event.target);
  if (index === -1) return;

  const destinations = {
    ArrowLeft: (index + tabs.length - 1) % tabs.length,
    ArrowRight: (index + 1) % tabs.length,
    Home: 0,
    End: tabs.length - 1,
  };
  const next = tabs[destinations[event.key]];
  if (!next) return;

  event.preventDefault();
  showGuide(next, true);
  next.focus();
});

window.addEventListener('hashchange', () => showGuide(tabFromHash(), false));
showGuide(tabFromHash(), false);
tabList.hidden = false;
