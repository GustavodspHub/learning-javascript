function Pessoa (nome, sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function (){
        console.log(`${this.nome}: Está falando`)
    }
}

const pessoa1 = new Pessoa('Gustavo', 'Pereira');
pessoa1.metodo()