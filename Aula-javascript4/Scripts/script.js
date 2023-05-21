let valorNumeroUm = document.querySelector("#valorNumeroUm");
let valorNumeroDois = document.querySelector("#valorNumeroDois");
let numeroMaior = document.querySelector("#numeroMaior");

function selecionarMaior() {
    let num1 = Number(valorNumeroUm.value);
    let num2 = Number(valorNumeroDois.value);

    if (num1 > num2) {
        alert(valorNumeroUm.value);
    } else if (num2 > num1) {
        alert(valorNumeroDois.value);
    }
}

numeroMaior.onclick = function() {
    selecionarMaior();
};