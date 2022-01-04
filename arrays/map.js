// //Dobre os valores
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const NumeroEmDobro = numeros.map(valor => valor * 2)
// console.log(NumeroEmDobro);


// //Retorne apenas uma string com o nome da pessoa
// //Retorne as pessoas com mais de 50 anos
// //Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];


// const nomePessoa = pessoas.map(obj => obj.nome)
// console.log(nomePessoa);

const pessoaSemNome = pessoas.map(function(obj){
    // delete obj.nome
    // return obj

    //Or
    return {idade: obj.idade}
});

console.log(pessoaSemNome)

const pessoaId = pessoas.map(function(obj, indice){
    obj.id = indice + 1;
    return obj
});

console.log(pessoaId)
