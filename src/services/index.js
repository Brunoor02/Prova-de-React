function calcularGramas(gramas) {
    try {
        let total = 0;
        let msg = '';


        if (gramas > 1000) {
            total = (gramas / 100) * 3
            msg = 'O total a pagar é R$' + total;
        }
        else if (gramas <= 0) {
            msg = 'Peso inválido'
        }
        else {
            total = (gramas / 100) * 3.50
            msg = 'O total a pagar é R$' + total;
        }
        return msg;
    }
    catch (err) {
        return (err.message)
    }
}

function seuSigno(dia, mes) {

    try {
        if (mes == 'Setembro' && dia >= 23 || mes == 'Outubro' && dia <= 22) {
            return ('Sim :)')
        }
        else if (mes == 'setembro' && dia >= 23 || mes == 'outubro' && dia <= 22) {
            return ('Sim :)')
        }
        else if (mes == 'SETEMBRO' && dia >= 23 || mes == 'OUTUBRO' && dia <= 22) {
            return ('Sim :)')
        }
        else {
            return ('Não :(')
        }
    }
    catch (err) {
        return (err.message)
    }
}

function calcularAcai(qtdP, qtdM, qtdG, desc) {
    try {

        let total = qtdP * 13.50 + qtdM * 15 + qtdG * 17.50;
        let desconto = total * desc / 100;
        let final = total - desconto;

        let msg = 'O valor total é R$' + final;

        if (qtdP < 0 || qtdM < 0 || qtdG < 0 || desc < 0) {
            msg = 'Valor inválido'
        }

        return (msg)
    }
    catch (err) {
        return (err.message)
    }
}

function SalarioLiq(salario, bonus, desc) {
    try {
        let sal = salario * bonus / 100;
        let total = salario + sal - desc;
        let msg = "seu salário liquído é de R$ " + total;

        if (salario < 0 || bonus < 0 || desc < 0) {
            msg = "Valor inválido"

        }
        return msg;

    }
    catch (err) {
        return (err.message)
    }
}

function Paradas(capac, consumo, dist) {
    try {
        let litros = dist / consumo;
        let qtdParadas = litros / capac;

        qtdParadas = Math.ceil(qtdParadas);

        let msg = "Você precisará fazer " + qtdParadas + " paradas para abastecer."
        if (capac <= 0 || consumo <= 0 || dist <= 0) {
            msg = "Valor inválido"
        }
        return msg;

    }
    catch (err) {
        return (err.message)
    }
}

function Febre(temperatura) {
    try {
        let msg = ""

        if(temperatura >= 41) {
            msg = "A situação para temperatura é Hipertermia"

        }
        else if(temperatura >= 39.6 && temperatura < 41) {
            msg = "A situação para sua temperatura é Febre Alta"
        }
        else if (temperatura >= 37.5 && temperatura < 39.6 ) {
            msg = "A situação para sua temperatura é Febre"
        }
        else if (temperatura >= 36 && temperatura < 37.5 )  {
            msg = "A situação para sua temperatura é Normal"
        }
        else {
            msg = "Hipotermia"
        }
        return msg;
    }
    catch (err) {
        return (err.message)
    }
}

function CalcularIngresso(inteiras, meias, dia, tipo) {
    try {
        let valor = 0;

        if (inteiras === 0 && meias === 0) {
            throw new Error('Digite a quantidade de ingressos!')
        }
        if (inteiras < 0 || meias < 0) {
            throw new Error('Digite uma quantidade válida!')
        }



        if (dia === 'Quarta-feira' && tipo === false) {
            valor = (inteiras * 14.25) + (meias * 14.25)
        }
        else if (tipo === true) {
            valor = (inteiras * 5) + (meias * 5)
        }
        else {
            valor = (inteiras * 28.50) + (meias * 28.50 / 2)
        }
        return valor;
    }
    catch (err) {
        return (err.message)
    }

}

function orcamento(ganhos, gastos) {
    try {
        let valor = (gastos / ganhos) * 100;
        let msg = '';
        if (gastos > ganhos) {
            msg = 'Orçamento Comprometido! Hora de rever seus gastos!'
        }
        else if (valor >= 81 && valor <= 100) {
            msg = 'Cuidado, seu orçamento pode ficar comprometido!'
        }
        else if (valor >= 51 && valor <= 80) {
            msg = 'Atenção, melhor conter seus gastos!'
        }
        else if (valor >= 21 && valor <= 50) {
            msg = 'Muito bem, seus gastos não ultrapassam metade dos ganhos!'
        }
        else if (valor >= 0 && valor <= 20) {
            msg = 'Parabéns, você está gerenciando bem seu orçamento'
        }
        else {
            msg = 'Insira algum valor!'
        }
        console.log(valor)
        return msg;
    } catch (err) {
        return (err.message)
    }
}



function contar(inicio, fim) {
    let arr = []
   

    for(let i = inicio; i <= fim; i++) {
        arr.push(' '+i)
            
    }
    
    return arr;
}



function linha(limite) {
    let arr = []
    for(let i = 1; i <= limite; i++ ) {
        arr.push(' *')
    }
    return arr;    
}

function retangulo(altura, largura) {
    
    let arr = []

    for(let linha = 0; linha < altura; linha++){
        for(let coluna = 0; coluna < largura; coluna++){
            arr.push('*') 
            
        } 
        
    }
   return arr;

    
}

let x = retangulo(2, 4)
console.log(x);





export { calcularGramas, seuSigno, calcularAcai, SalarioLiq, Paradas, Febre, CalcularIngresso, orcamento, contar, linha }