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
