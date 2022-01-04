const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']
console.log(nomes)

console.log('------------------------------')

//Adicionando um valor em ultimo no array splice
nomes.splice(nomes.length, 0, 'Joe');
console.log(nomes)

console.log('------------------------------')

//Adicionando um valor em primeiro no array splice
nomes.splice(0, 0, 'Jean')
console.log(nomes)

console.log('------------------------------')

//Removendo o primeiro indice de um array splice
nomes.splice(0, 1)
console.log(nomes)

console.log('------------------------------')

//Removendo o ultimo indice de um array com splice
nomes.splice(-1, 1)
console.log(nomes)

console.log('------------------------------')
