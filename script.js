// Função para enviar o formulário de agendamento
document.getElementById("agendamento-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Consulta agendada com sucesso!");
    this.reset(); // Limpar formulário
});

// Função para enviar o formulário de contato
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sua mensagem foi enviada com sucesso!");
    this.reset(); // Limpar formulário
});
