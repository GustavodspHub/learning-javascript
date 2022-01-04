function meuEscopo () {
    const form = document.querySelector('.form');

    // form.onsubmit = function (evento){
    //     alert("Olá mundo");
    // };

    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log(`form enviado`)
    })
}

meuEscopo()