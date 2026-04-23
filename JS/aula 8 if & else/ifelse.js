/* 
Controlador de fluxo
    -if(SE)
    -else(SE NÃO)

Operadores de comparação
    > maior que
    < menor que
    == igual a
*/

// Uma escola precisa de um sistema para saber se o aluno foi aprovado ou não

const notaDoAluno = 7
const notaDeCorte = 6


// compara a nota do aluno com a nota de corte
if (notaDoAluno > notaDeCorte) {
    // se for verdadeira a comparação acima, executa o código abaixo:
    console.log("Aprovado!!!")
}
    // se não for verdadeira a comparação, executa o código abaixo:
else {
    console.log("Não aprovado!!!")
}

// OUTRO EXEMPLO 

const senha = 123456
const senhadigitada = 123456

// compara a nota do aluno com a nota de corte
if (senha == senhadigitada) {
    // se for verdadeira a comparação acima, executa o código abaixo:
    console.log("Bem vindo!")
}
    // se não for verdadeira a comparação, executa o código abaixo:
else {
    console.log("Senha incorreta!")
}