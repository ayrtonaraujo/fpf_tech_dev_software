document.getElementById ("titulo").innerText = "Teste HTML";


//funcao muda cor
const coresNeon = ['#00ffe7', '#00bcd4','00ffc3', '#ff00cc', '#39ff14', '#f72585', '#3f51b5'];

const titulo = document.getElementById('titulo');

titulo.addEventListener('click', function() {
    const corAleatoria = coresNeon[Math.floor(Math.random() * coresNeon.length)];
    titulo.style.color = corAleatoria;
});


//funcao submit
document.getElementById('formulario-contato').addEventListener('submit', function (event) {
    event.preventDefault();

    const termosAceitos = document.getElementById('termos').checked;

    if (!termosAceitos) {
        alert('Você precisa aceitar os termos de uso para enviar o formulário.');
        return;
    }

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(
        "✅ Formulário enviado com sucesso!\n\n" +
        "📨 Nome: " + nome + "\n" +
        "📧 Email: " + email + "\n" +
        "📌 Assunto: " + assunto + "\n" +
        "📝 Mensagem: " + mensagem + "\n" +
        "📋 Termos aceitos: " + (termosAceitos ? "Sim" : "Não")
    );
    this.reset(); // Limpa o formulário após envio
});


//ano
document.getElementById('ano').textContent = new Date().getFullYear();

