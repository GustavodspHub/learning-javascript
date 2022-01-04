/**
Object.values
Object.entries
Object.getOwnPropertyDescriptor
Object.assign(desc, any)
... (spred)


Object.keys(Retorna as chaves)
Object.freeze(Congela o objeto)
Object.defineProperties (Define varias propriedades)
Object.defineProperty (Define uma propriedade)
 */

const nome1 = {nome: 'Gustavo ', sobrenome: 'Pereira', idade: 18};
const nome2 = {nome: 'Thamires ', sobrenome: 'Amanco', idade: 17};
const nome3 = {};
const nome4 = {};

console.log(Object.values(nome1));
console.log(Object.values(nome2));

console.log(" ");
console.log("------------------------");
console.log(" ");

console.log(Object.entries(nome1));
console.log(Object.entries(nome2));


console.log(" ");
console.log("------------------------");
console.log(" ");

console.log(Object.getOwnPropertyDescriptor(nome1, 'nome'));
console.log(Object.getOwnPropertyDescriptor(nome2, 'nome'));

console.log(" ");
console.log("------------------------");
console.log(" ");

console.log(Object.assign(nome3, nome1 ))
console.log(Object.assign(nome4, nome2 ))


console.log(" ");
console.log("------------------------");
console.log(" ");