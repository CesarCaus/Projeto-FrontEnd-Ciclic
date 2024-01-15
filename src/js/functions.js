export function showPageResults() {
    let novaPagina = 'results.html';
    window.location.href = novaPagina;
}

export function showPageSimulate() {
    let novaPagina = 'simulate.html';
    window.location.href = novaPagina;
}


export function showResults(name, monthlyPayment, result, years) {

    let element = document.getElementById('result-container');
    let paragrafo = document.createElement('p');

    result = result.toFixed(2);

    var message;

    if (years > 1) {
        message = `Olá ${name}, juntando R$${monthlyPayment} todo mês, você terá R$${result} em ${years} anos`;
    } else {
        message = `Olá ${name}, juntando R$${monthlyPayment} todo mês, você terá R$${result} em ${years} ano`;
    }

    paragrafo.innerText = message;
    element.appendChild(paragrafo);
}

export async function postAPI(expression) {
    let requestBody = {
        expr: expression
    };

    let requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    };

    let response = await fetch('http://api.mathjs.org/v4/', requestOptions);
    let result = await response.json();
}

export function saveDataResult(nameUser, monthlyPayment, result, years) {
    let data = {
        name: nameUser,
        monthlyPayment: monthlyPayment,
        result: result,
        years: years
    }

    localStorage.setItem('result', JSON.stringify(data))
}