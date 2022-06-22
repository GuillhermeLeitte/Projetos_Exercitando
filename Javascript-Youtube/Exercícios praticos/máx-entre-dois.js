// Escreva uma função que usa 2 números e retorna o maior entre eles

function maiorNum (num1 = 0, num2 = 0){
    if (num1>num2){
        console.log(`O ${num1} é o maior`)
    } else if (num2 > num1){
        console.log(`O ${num2} é o maior`)
    }else{
        console.log(`Os dois números são iguais`)
    }
}

console.log(maiorNum());
console.log(maiorNum(2,3));
console.log(maiorNum(1,2));

// Outra forma de fazer de fazer

function máx (numero1, numero2){
    if (numero1 > numero2){
        return numero1
    } else {
        return numero2
    }
}

let valorMaior = máx(13,13)
console.log(valorMaior)
