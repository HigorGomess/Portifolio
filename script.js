// Formulário de Contato: Exibir alerta ao enviar
document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio padrão
    alert('Obrigado por entrar em contato! Responderemos em breve.');
    this.reset(); // Reseta o formulário
  });
  
