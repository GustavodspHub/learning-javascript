function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia){
    this.preco += quantia
};

Produto.prototype.desconto = function (quantia){
    this.preco -= quantia;
};

const produto1 = new Produto("gen", 100);
console.log(produto1);

function Camiseta (nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camisa1 = new Camiseta("Regata", 10, "verde");
// camisa1.aumento(10)
 console.log(camisa1);


function Caneca (nome, preco, cor, estoque){
    Produto.call(this,nome,preco);
    this.cor = cor;
    
    Object.defineProperty(this, 'estoque',{

        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    });
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca1 = new Caneca("Caneca Hello world", 30, "Branco e Preto", 15);

console.log(caneca1);
