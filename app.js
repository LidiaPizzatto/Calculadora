// Pagina Inicial

function paginaInicial(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    }
    
paginaInicial('h1', 'Calculadora');
paginaInicial('p1', 'Escolha um dos botões:');
paginaInicial('p2', 'Para fatorial digite um numero positivo');
paginaInicial('p3', 'Para achar o IMC digite altura e peso ex (1,71. 60)')


// Botão fatorial
function fazerFatorial () {
    let variante = document.querySelector ('input').value;
    if (variante < 0) {
        //console.log ('O numero precisa ser possitivo');
        paginaInicial('p3', 'O numero precisa ser possitivo');
        paginaInicial('p2', '');
} else { 
    if(variante == 0){
        paginaInicial('p3', 'O fatorial de 0 é 1');
        paginaInicial('p2', '');
}
else  {
    let resultadoFatorial = fatorial(variante);    
    paginaInicial('p3', `O Fatorial de ${variante} é ${resultadoFatorial}`);
    paginaInicial('p2', '');
}

      }
}

 function fatorial(numero1) {
    let resultado = 1;
for (let variante1 = 2; variante1 <= numero1; variante1++) {
   resultado *= variante1;
}
return resultado;
}

// Botão IMC
function AcharImc () {
    console.log ('oi')
}
