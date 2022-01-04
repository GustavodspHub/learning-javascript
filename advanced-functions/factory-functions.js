function criaPessoa(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,
        
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },

        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const pessoa1 = criaPessoa('Gustavo', 'Pereira', 1.7, 75);
pessoa1.nomeCompleto = 'Gustavo dos Santos Pereira';
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.imc)