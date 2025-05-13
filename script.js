
function mostrarFormulario() {
  document.getElementById("formulario").style.display = "block";
}

function enviarWhatsApp() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const situacao = document.getElementById("situacao").value;
  const contato = document.getElementById("contato").value;

  const mensagem = `*Relato de Vulnerabilidade:*\n\n` +
    `*Nome:* ${nome}\n` +
    `*Endereço:* ${endereco}\n` +
    `*Situação:* ${situacao}\n` +
    (contato ? `*Contato de quem relata:* ${contato}\n` : "");

  const numeroDestino = "5575999073162"; // Substitua pelo número de WhatsApp desejado
  const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
