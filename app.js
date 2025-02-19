// Função para atualizar a página
function paginaInicial(tag, texto) {
    let campo = document.querySelector(tag);
    if (campo) {
        campo.innerHTML = texto;
    }
}

// Define os textos iniciais
paginaInicial('h1', 'Calculadora');
paginaInicial('p', 'Escolha um dos botões:');

// Função para calcular o fatorial
function fazerFatorial() {
    let variante = parseInt(document.getElementById('inputFatorial').value);

    if (isNaN(variante) || variante < 0) {        
        paginaInicial('p', 'O número precisa ser positivo');        
    } else if (variante === 0) {
        paginaInicial('p', 'O fatorial de 0 é 1');
    } else {
        let resultadoFatorial = fatorial(variante);
        paginaInicial('p', `O fatorial de ${variante} é ${resultadoFatorial}`);
    }
}

// Função que calcula o fatorial de um número
function fatorial(numero1) {
    let resultado = 1;
    for (let i = 2; i <= numero1; i++) {
        resultado *= i;
    }
    return resultado;
}

// Função para calcular o IMC
function fazerImc() {  
    let variantAltura = parseFloat(document.getElementById('inputAltura').value);
    let variantePeso = parseFloat(document.getElementById('inputPeso').value);

    if (isNaN(variantAltura) || isNaN(variantePeso) || variantAltura <= 0 || variantePeso <= 0) {
        paginaInicial('p', 'Por favor, insira valores válidos para altura e peso.');
        return;
    }

    let resultadoIMC = variantePeso / (variantAltura ** 2);
    paginaInicial('p', `O seu IMC é ${resultadoIMC.toFixed(2)}`);
}
