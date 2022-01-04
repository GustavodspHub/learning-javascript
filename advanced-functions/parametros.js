function funcao(a, b, c) {
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c)
}
funcao(1,2,3,4,5,6,7)


function argumento (...args){
    console.log(args)
}
argumento(1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9)