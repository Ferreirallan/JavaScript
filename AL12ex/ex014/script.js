function carregar() {
const msg = window.document.getElementById("msg");
const img = window.document.getElementById("imagem");
const data = new Date();
const hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = "imagens/manha.png";
    document.body.style.background = "#e2cd9f";
    }else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
    }else{
        // Boa Noite!
    }
}