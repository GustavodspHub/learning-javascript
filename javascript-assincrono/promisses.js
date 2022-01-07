function rand (min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise ((resolve, reject) => {
        if(typeof msg !== "string") return reject("BAD ERROR")
        setTimeout( () => {
            resolve(msg)
        }, tempo);
    })
}

esperaAi(1, rand(1, 3)).then(
    resposta => {
        console.log(resposta)
        return esperaAi('frase 2', rand(1, 3)).then(
            resposta => {
                console.log(resposta)
                return esperaAi('frase 3', rand(1, 3)).then(
                    resposta => {
                        console.log(resposta)
                    }
                )
            }
        )
    }
).catch(e => {
    console.log(e)
})