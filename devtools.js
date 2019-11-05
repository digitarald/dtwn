browser.devtools.panels.create(
  "What's New",
  '/whatsnew.svg',
  '/panel.html'
);

browser.storage.local.get().then(async ({ dismissed }) => {
  if (dismissed) {
    return;
  }
});
