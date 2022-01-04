function Produto (nome, preco, estoque){
    
    let estoquePrivado  = estoque

    Object.defineProperty(this, 'estoque',{
        enumerable: true, //Chave
        configurable: false, //Configuração
        get: function(){
            return estoquePrivado
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                throw new TypeError('Bad value')
                return;
            }
            estoquePrivado = valor
        } 
    });
    // Object.defineProperties(this, {
    //     nome:{
    //         enumerable: true,
    //         value: nome,
    //         writable: true,
    //         configurable: true
    //     },
    //     preco: {
    //         enumerable: true,
    //         value: preco,
    //         writable: true,
    //         configurable: true
    //     }
    // });
}

const produtoUm = new Produto('Camiseta', 10, 30);
produtoUm.estoque = "Oi"
console.log(produtoUm.estoque)
