const numeros = [1, 45, 532, 342, 432, 34, 342, 432, 64]

const somaDosNumeros = numeros.reduce( (acomulador, valor) =>{
    acomulador += valor
    return acomulador
}, 0);

console.log(somaDosNumeros)

const pessoas = [
    {nome: 'Gustavo', idade: 50},
    {nome: 'Gustavo', idade: 100},
    {nome: 'Gustavo', idade: 80},
    {nome: 'Gustavo', idade: 90}
];

const maisVelha = pessoas.reduce( (acomulador, valor) => {
    if(acomulador.idade > valor.idade) return acomulador
    return valor
});

console.log(maisVelha)