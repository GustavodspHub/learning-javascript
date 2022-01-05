class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instância
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    //Método Estático
    static soma(x,y){
        console.log(x + y)
    }
}

const controle1 = new ControleRemoto('LG')
ControleRemoto.soma(10, 10)