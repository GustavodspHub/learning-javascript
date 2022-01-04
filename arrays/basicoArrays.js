//Valor por referência
const nomes = ['Eduardo', 'Maria', 'Joana'];
const nomes2 = new Array('a', 'b', 'c');

nomes[2] = 'Joao';
console.log(nomes)
console.log(nomes2)

console.log(" ")
console.log("--------------------------------------------------")

//Transformando uma String em um array
const nomeCompleto = "Gustavo dos Santos Pereira"
console.log(nomeCompleto)
const nomeSeparado = nomeCompleto.split(' ')
console.log(nomeSeparado);


console.log(" ")
console.log("--------------------------------------------------")


//Transformando um array em uma String
const ArrayDeNomeSeparado = ['Gustavo', 'dos', 'Santos', 'Pereira'] 
console.log(ArrayDeNomeSeparado)
const ArrayToString = ArrayDeNomeSeparado.join(' ')
console.log(ArrayToString);


console.log(" ")
console.log("--------------------------------------------------")


//Fatiando um array em pedaços
const arrayDeNomes1 = ['Jean', 'Emanoel', 'Davi', 'Limeres']
const novoArrayDeNomes = arrayDeNomes1.slice(0, 2);

console.log(arrayDeNomes1)
console.log(novoArrayDeNomes);

console.log(" ")
console.log("--------------------------------------------------")




