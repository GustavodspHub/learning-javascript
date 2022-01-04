const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter( (valor)=>{
    return valor % 2 === 0
    
}).map( (valor) => {
    return valor * 2
}).reduce( (acomulador, valor) => {
    acomulador += valor
    return acomulador
}, );

console.log(numerosPares)