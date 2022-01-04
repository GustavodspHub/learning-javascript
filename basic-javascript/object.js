const pessoa =  {
    nome: "Gustavo",
    sobrenome: "Pereira",
    idade: 18
};

console.log(pessoa.sobrenome);


function pessoas (nome, sobrenome, idade){
    return {nome, sobrenome, idade}
}

const pessoa1 = pessoas('Gustavo', 'Pereira', 18);

console.log(pessoa1)


const humano = {
    nome: 'Gustavo',
    sobrenome: 'pereira',
    idade: 18,

    fala(){
        console.log(`Olá, o meu nome é ${this.nome} ${this.sobrenome} e a minha idade é ${this.idade}`)
    }
}

humano.fala()