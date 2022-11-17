//1 -> Lançamento Vertical
const g = 10;

function lancamento() {
    let v0 = document.getElementById("v0").value;
    let resultado_tempo = document.getElementById("tempo");
    let resultado_altura = document.getElementById("altura");
    let ts = tempo(v0);
    let hm = altura(v0);

    resultado_tempo.innerHTML = `Tempo de Subida: ${ts}s`;
    resultado_altura.innerHTML = `Altura Máxima: ${hm}m`;
}

function tempo(velocidade){
    return velocidade / g;
}

function altura(velocidade){
    return (Math.pow(velocidade, 2) / (2 * g));
}

//2 -> Ponto Máximo e Mínimo:

function ponto(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let tipo_de_ponto = document.getElementById('tipo');
    let coordenadas = document.getElementById('ponto');

    let tp = tipo(a);
    let p = pontomaxmin(a, b, c);

    tipo_de_ponto.innerHTML = `Tipo de Ponto: ${tp}`;
    coordenadas.innerHTML = `Ponto ${tp}: ${p}`;
}

function tipo(a){
    if(a > 0){
        return 'Mínimo';
    }else if(a < 0){
        return 'Máximo';
    }
}

function pontomaxmin(a, b, c){
    let xv = (b / (2 * a)) * -1;
    let yv = ((Math.pow(b, 2) - (4 * a * c)) / (4 * a)) * -1;

    return `(${xv}, ${yv})`;
}

//3 -> Conversão de Temperatura:

function converter(){
    let temperatura = document.getElementById("temp").value;
    let ctof = document.getElementById('ctof');
    let ftoc = document.getElementById('ftoc');

    let f = fahrenheit(temperatura);
    let c = celcius(temperatura);

    ctof.innerHTML = `${temperatura}°C = ${f.toFixed(1)}°F`;
    ftoc.innerHTML = `${temperatura}°F = ${c.toFixed(1)}°C`;
}

function fahrenheit(temp){
    return (1.8 * temp) + 32;
}

function celcius(temp){
    return (temp - 32) / 1.8;
}

//4 -> Consumo de Energia:
function energia(){
    let consumo = document.getElementById('consumo').value;
    let valor_unitario = document.getElementById('valor').value;
    let total_gasto = document.getElementById('totalGasto');
    let taxa_adicional = document.getElementById('taxaAdicional');

    let t = total(consumo, valor_unitario);
    let tax = taxa(consumo);

    total_gasto.innerHTML = `Valor Total: ${t.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    taxa_adicional.innerHTML = `Taxa por Alto Consumo: ${tax}%`
}

function total(valor_consumido, valor_por_kwh){
    if(valor_consumido > 100 && valor_consumido <= 200){
        valor_por_kwh = valor_por_kwh * 1.25;
    }else if(valor_consumido > 200){
        valor_por_kwh = valor_por_kwh * 1.5;
    }

    return valor_consumido * valor_por_kwh;
}

function taxa(valor_consumido){
    if(valor_consumido > 100 && valor_consumido <= 200){
        return 25;
    }else if(valor_consumido > 200){
        return 50;
    }
    return 0;

}