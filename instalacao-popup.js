let deferredPrompt;
const popup = document.getElementById('popupInstalacao');
const confirmarBtn = document.getElementById('confirmarInstalacao');
const fecharBtn = document.getElementById('fecharPopup');

function isAppInstalado() {
  return (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true);
}

window.addEventListener('beforeinstallprompt', (e) => {
  if (!isAppInstalado()) {
    e.preventDefault();
    deferredPrompt = e;
    popup.style.display = 'flex';
  } else {
    popup.style.display = 'none';
  }
});

confirmarBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou instalar');
      } else {
        console.log('Usuário recusou instalar');
      }
      deferredPrompt = null;
    });
  }
});

fecharBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
