function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    const imc = peso / (altura * altura);
    let resultado = "";

    if (imc < 18.5) {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Seu peso está normal.`;
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`;
    } else if (imc >= 30 && imc <= 34.9) {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau I.`;
    } else if (imc >= 35 && imc <= 39.9) {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau II.`;
    } else {
        resultado = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau III.`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}
