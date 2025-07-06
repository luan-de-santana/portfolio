// Declaração de constantes
const tituloConteudo = "titulo-conteudo"
const imgContainer = "img-container"
const divSobre = "div-sobre"
const divFormacao = "div-formacao"
const divPortfolio = "div-portfolio"
const divContato = "div-contato"

// Funções para alternar o conteúdo entre as divs
function exibirSobre() {
    document.getElementById(tituloConteudo).innerHTML = '>> Sobre mim';
    document.getElementById(imgContainer).src = "imagens/Img1.jpg";
    document.getElementById(divSobre).style.display = "block";
    document.getElementById(divFormacao).style.display = "none";
    document.getElementById(divPortfolio).style.display = "none";
    document.getElementById(divContato).style.display = "none";
}

function exibirFormacao() {
    document.getElementById(tituloConteudo).innerHTML = '>> Minha formação';
    document.getElementById(imgContainer).src = "imagens/Img2.jpg";
    document.getElementById(divSobre).style.display = "none";
    document.getElementById(divFormacao).style.display = "block";
    document.getElementById(divPortfolio).style.display = "none";
    document.getElementById(divContato).style.display = "none";
}

function exibirPortfolio() {
    document.getElementById(tituloConteudo).innerHTML = '>> Meus trabalhos';
    document.getElementById(imgContainer).src = "imagens/Img3.jpg";
    document.getElementById(divSobre).style.display = "none";
    document.getElementById(divFormacao).style.display = "none";
    document.getElementById(divPortfolio).style.display = "block";
    document.getElementById(divContato).style.display = "none";
}

function exibirContato() {
    document.getElementById(tituloConteudo).innerHTML = '>> Entre em contato';
    document.getElementById(imgContainer).src = "imagens/Img4.jpg";
    document.getElementById(divSobre).style.display = "none";
    document.getElementById(divFormacao).style.display = "none";
    document.getElementById(divPortfolio).style.display = "none";
    document.getElementById(divContato).style.display = "block";
}

// Função para validar se os campos estão preenchidos
function enviarMensagem() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("textoarea").value;

    if (nome == "") {
        alert("Preencha seu nome!");
    } else if (email == "") {
        alert("Preencha seu e-mail!");
    } else if (mensagem == "" || mensagem.length < 10) {
        alert("Preencha sua mensagem!");
    } else {
        alert("Obrigado por entrar em contato, " + nome + "!");
    }
}