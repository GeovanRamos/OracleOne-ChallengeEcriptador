function encriptar() {
    let texto = document.getElementById("text-area").value;
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    document.getElementById("mensagem").value = texto;
    document.getElementById("text-area").value = "";
    document.querySelector(".mensagem-exibida").style.display = "inline";
    document.querySelector(".mensagem-nao-exibida").style.display = "none";
}

function descriptar() {
    let texto = document.getElementById("text-area").value;
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    document.getElementById("mensagem").value = texto;
    document.getElementById("text-area").value = "";
    document.querySelector(".mensagem-exibida").style.display = "inline";
    document.querySelector(".mensagem-nao-exibida").style.display = "none";
}

function copiar() {
    let outputText = document.getElementById("mensagem");
    outputText.select();
    document.execCommand("copy");
}