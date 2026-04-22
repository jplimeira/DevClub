const element8 = document.querySelector("#main-input")
console.log(element8.placeholder)

// Este é um exemplo de como alterar um valor do HTML em JS

element8.placeholder = "Agora é esse texto"
console.log(element8.placeholder)

// Este é um exemplo de como mudar ou inserir um valor dentro do input

element8.value  = 12345

// já esse console.log já serve também de exemplo de como pegar o valor inserido em um input
console.log(element8.value)


// exemplos de manipulação de imagem de HTML em JS:

// mostrar no console o src da imagem
const element9 = document.querySelector("img")
console.log(element9.src)

// alteração de imagem através do src
element9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3O76hf98YzO9bK3DLPd7nV9lfNVtDQJYHVg&s"
console.log(element9.src)