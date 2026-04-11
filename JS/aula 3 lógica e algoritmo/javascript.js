// Um algoritmo é um conjunto de passos ordenados para resolver um problema.
// Exemplo prático: calcular a média de três notas.

function calcularMedia(nota1, nota2, nota3) {
    // Passo 1: somar as notas
    const soma = nota1 + nota2 + nota3;
    // Passo 2: dividir pelo número de notas
    const media = soma / 3;
    // Passo 3: retornar o resultado
    return media;
}

const notaA = 8;
const notaB = 7;
const notaC = 9;
const resultado = calcularMedia(notaA, notaB, notaC);

console.log('A média é', resultado);