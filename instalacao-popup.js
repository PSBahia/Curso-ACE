let deferredPrompt;
const popup = document.getElementById('popupInstalacao');
const confirmarBtn = document.getElementById('confirmarInstalacao');
const fecharBtn = document.getElementById('fecharPopup');

function isAppInstalado() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

// Se já estiver instalado, nem mostra o popup
if (isAppInstalado()) {
  popup.style.display = 'none';
} else {
  // Só escuta o evento se o app não estiver instalado
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Adiciona um atraso para garantir que o DOM esteja pronto
    setTimeout(() => {
      popup.style.display = 'flex';
    }, 100); // pequena espera para o layout
  });
}

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
