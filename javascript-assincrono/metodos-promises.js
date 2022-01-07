//Promise.all Promise.race Promise.resolve Promise.reject

function rand (min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo){
    return new Promise ((resolve, reject) => {
        if(typeof msg !== "string") return reject("BAD ERROR")
        setTimeout( () => {
            resolve(msg)
        }, tempo);
    })
};

const promises = [  
    esperaAi("promose 5", 3000),
    esperaAi('Promose 2', 500),
    esperaAi(4, 1000),
]

Promise.all(promises).then( (valor) => {
    console.log(valor)
}).catch( (erro) => {
    console.log(erro)
})

Promise.race(promises).then( (valor) => {
    console.log(valor)
}).catch( (erro) => {
    console.log(erro)
})