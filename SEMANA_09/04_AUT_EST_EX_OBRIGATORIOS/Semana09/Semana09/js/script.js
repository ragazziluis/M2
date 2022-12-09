//Valor presente e futuro:
function trocaValor() {
    let troca = document.getElementById('troca');
    let select = document.getElementById('tipo').value;
    
    if(select == 'pv') {
        troca.innerHTML = 'Valor Futuro: R$<input type="number" id="valor" placeholder="FV">';
    }else {
        troca.innerHTML = 'Valor Presente: R$<input type="number" id="valor" placeholder="PV">'
    }
}

function valorpvfv() {
    let tipo = document.getElementById('tipo').value;
    let valor = document.getElementById('valor').value;
    let i = document.getElementById('i').value;
    let n = document.getElementById('n').value;
    i = i/100;
    let resultado = document.getElementById('resultado');
    let conta = 1;
    let parenteses = 1 + i;
    parenteses = Math.pow(parenteses, n);

    if(tipo == 'pv') {
        conta = valor / parenteses;
        resultado.innerHTML = `<p>PV = ${conta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>`;
    }else if(tipo == 'fv') {
        conta = valor * parenteses;
        resultado.innerHTML = `<p>FV = ${conta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>`;
    }

}

//Juros Simples:
function jurossimples() {
    let p = document.getElementById('p').value;
    let i = document.getElementById('i').value;
    let n = document.getElementById('n').value;
    let resultado = document.getElementById('resultado');

    i = parseFloat(i)/100;

    console.log(typeof(i));
    console.log(typeof(p));
    console.log(typeof(n));

    let juros = p * i * n;
    let montante = p * juros;

    resultado.innerHTML = `<p>Juros = ${parseFloat(juros).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p><p>Montante = ${parseFloat(montante).toLocaleString('pt-br', {style:'currency', currency:'BRL'})}</p>`;
}

function calculaJuros(p, i, n) {
    return p * i * n;
}

//Impressao Maluca

function imprimir() {
    let texto = document.getElementById('texto').value;
    let resultado = document.getElementById('result');
    texto = texto.split('');
    resultado.innerHTML = '';
    let anterior = resultado.innerHTML;
    let contador = 0;

    texto.forEach(caracter => {
        if(caracter != ' '){
            resultado.innerHTML = anterior + `<p style="margin-left: ${contador}px;">${caracter}</p>`;
            anterior = resultado.innerHTML;
            contador += 10;
        }else{
            resultado.innerHTML = anterior + `<br>`;
            anterior = resultado.innerHTML;
            contador += 10;
        }
    });

    document.getElementById('texto').value = '';
}

//Conversao decimal-binario:
function converter(){
    let base10 = document.getElementById('numero').value; 
    let resultado = document.getElementById('resultado');
    let binario = new Array();
    let numero = base10;
    let resto = null;

    if(base10 <= 256){
        while(numero >= 1) {
            resto = numero % 2;
            numero /= 2;
            numero = parseInt(numero);

            binario.push(resto);
        }

        binario.reverse();

        resultado.innerHTML = `<p>${base10} = ${binario.join('')}</p>`;
    }else {
        resultado.innerHTML = '<p>Não suportamos números maiores que 256</p>';
    }
}