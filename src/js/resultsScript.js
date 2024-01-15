import { showResults, showPageSimulate } from "./functions.js";

// Constantes globais
const buttonNewSimulate = document.getElementById('new-simulate');
const dataResult = JSON.parse(localStorage.getItem('result'));

// Use as funções diretamente
showResults(dataResult.name, dataResult.monthlyPayment, dataResult.result, dataResult.years);

buttonNewSimulate.addEventListener('click', () => {
    localStorage.removeItem('result');
    showPageSimulate();
});