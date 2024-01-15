import * as func from './functions.js'

// Constantes globais
const buttonSimulate = document.getElementById('submit-form');
const buttonNewSimulate = document.getElementById('new-simulate');
const interestRate = 0.00517;

buttonSimulate.addEventListener('click', async (event) => {
    event.preventDefault();
    
    // Obter os valores dos campos de entrada
    let inputElements = document.querySelectorAll('input, select');
    let nameUser = inputElements[0].value;
    let monthlyPayment = parseFloat(inputElements[1].value);
    let years = parseInt(inputElements[2].value);

    // Expressão matemática corrigida para calcular os juros compostos
    let expression = `${monthlyPayment} * (((1 + ${interestRate}) ** (years * 12) - 1) / ${interestRate})`;

    await func.postAPI(expression);

    let resultExpression = monthlyPayment * (((1 + interestRate) ** (years * 12) - 1) / interestRate);

    func.saveDataResult(nameUser, monthlyPayment, resultExpression, years)

    func.showPageResults();
});

