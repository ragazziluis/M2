// ----------------------- Tabuada: ----------------------------

class Tabuada {
    constructor(numero, inicio, fim) {
        this.numero = numero;
        this.inicio = inicio;
        this.fim = fim;
    }

    mostraTabuada(){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        for(let i = this.inicio; i <= this.fim; i++) {
            let conteudo = resultado.innerHTML;
            resultado.innerHTML = conteudo + `<p>${this.numero} x ${i} = ${this.numero * i}</p>`;
        }
    }
}

function tabuada() {
    let numero = document.getElementById('numero').value;
    numero = numero === undefined || numero === null || numero == '' ? 1 : numero;
    let inicio = document.getElementById('inicio').value;
    inicio = inicio === undefined || inicio === null || inicio == '' ? 1 : inicio;
    let fim = document.getElementById('fim').value;
    fim = fim === undefined || fim === null || fim == '' ? 10 : fim;
    let table = new Tabuada(numero, inicio, fim);
    table.mostraTabuada();
}

// ----------------------- Palindromo: ----------------------------

function palindromo() {
    let numero = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let check = verificaPalindromo(numero);

    if(!check) {
        console.log('check');
        resultado.innerHTML = `<p>${numero} não é palíndromo! </p>`;
    }else {
        console.log('check');
        resultado.innerHTML = `<p>${numero} é palíndromo!</p>`;
    }
}

function verificaPalindromo(numero) {
    numero = parseInt(numero);
    let original = Array.from(String(numero), num => Number(num));
    let inverso = Array.from(String(numero), num => Number(num)).reverse();
    original = original.join('');
    inverso = inverso.join('');
    if(inverso == original) {
        return true;
    }
    return false;
}

// ----------------------- 1,2,3,pi: ----------------------------
function trespi(){
    let numero = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');
    let anterior = null;
    resultado.innerHTML = '';
    let multiplo = n => n % 3 == 0;
    let arr = new Array();
    for(let i = 0; i < numero; i++) {
        arr[i] = (i + 1);
    }
    resultado.innerHTML = '<p>';
    arr.forEach(n => {
        if(n == arr[numero - 1]) {
            if(multiplo(n)) {
                resultado.innerHTML += `${n} PI`;
            }else{
                resultado.innerHTML += `${n}`;
            }
        }else {
            if(multiplo(n)) {
                resultado.innerHTML += `${n} PI `;
            }else{
                resultado.innerHTML += `${n} - `;
            }
        }
    });
    resultado.innerHTML += '</p>'
}

// ----------------------- Reforma: ----------------------------

function azulejos() {
    let alturaAzulejo = document.getElementById('altura').value;
    let larguraAzulejo = document.getElementById('largura').value;
    let alturaParede = document.getElementById('alturaParede').value;
    let larguraParede = document.getElementById('larguraParede').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let horizontal = Math.ceil(larguraParede / larguraAzulejo);
    let vertical = Math.ceil(alturaParede / alturaAzulejo);

    let numeroAzulejos = horizontal * vertical;

    resultado.innerHTML = `<p>Horizontal: ${horizontal} azulejos.</p>`;
    resultado.innerHTML += `<p>Vertical: ${vertical} azulejos.</p>`;
    resultado.innerHTML += `<p>Total: ${numeroAzulejos} azulejos.</p>`;
    numeroAzulejos = Math.ceil(numeroAzulejos * 1.05);
    resultado.innerHTML += `<p>Total + 5%: ${numeroAzulejos} azulejos.</p>`;
}