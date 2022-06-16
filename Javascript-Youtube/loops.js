const cars = ["Ferrari", "Tesla", "Mercedes"]

// for (let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }

// Outra forma mais fácil

// for ( let car of cars){
//     console.log(car)
// } 

//Outra forma

// cars.forEach(function (car){
//     console.log(car)
// })

// A diferença é que no forEach podemos colocar outro parâmetro para descobrir cada posição.

// cars.forEach(function ( car, index){
//     console.log(car)
//     console.log(index)
// })

// Agora vamos aprender o While que significa enquanto

// let index = 0;

// while (index < 10){
//     console.log("Index é menor do que 10!")
//     index++
// }

// index = index + 1 é a mesma coisa que :
// index += 1 que é a mesma coisa que :
// index ++

// const sum = 1+3;

// if( sum === 2){
//     console.log("Sum igual a 2")
// } else if ( sum===3){
//     console.log("Sum igual a 3")
// } else {
//     console.log(`Sum é igual a: ${sum}`)
// }

// Operadores condicionais
// && = é ( as duas tem que ser verdadeiras)
// || = ou ( uma só verdadeira )

// const sum1 = 2 + 2;
// const sum2 = 3 + 3;

// if ( sum1 === 4 && sum2 === 6){
//     console.log(" Sum1 é 4 e sum2 é 6")
// }

// const sum1 = 2 + 2;
// const sum2 = 3 + 10;

// if ( sum1 === 4 && sum2 === 6){
//     console.log(" Sum1 é 4 e sum2 é 6")
// } else if (sum1===4 || sum2===6){
//     console.log("Sum1 é igual a 4 ou sum2 é igual a 6")
// }

// const sum = 1+3;

// let number;

// if ( sum === 2){
//     number= 2
// }else{
//     number=4
// }

// console.log(number)

// If ternário

// let sum = 1+3

// let number = sum === 2 ? 2 : 4;

// console.log(number)

// Switch 

// const car = "Mercedes"

// switch (car){
//     case "Mercedes":
//         console.log("Mercedes é linda")
//         break;
//     case "Tesla":
//         console.log("Tesla é tecnologica")
//         break;
// }

/* const x = "";
// FALSE */

/* const y = 0;
// é FALSE */

/* const a = null; // é FALSE
const b = undefined; // é FALSE */

/* const list = []
console.log(!!list) // é TRUE */

/* const objeto = {}
console.log(!!{}) // é TRUE */



