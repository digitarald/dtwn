document.getElementById('dismiss').addEventListener('click', () => {
    browser.storage.local.set('dismissed', true);
})