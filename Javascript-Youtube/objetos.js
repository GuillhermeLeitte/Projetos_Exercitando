const person = {
    firstName: "Guilherme",
    lastName: "Vieira Leite",
    age: 30,
    hobbies: ["Assistir jogo de futebol", "Assistir com minha esposa", "Ler - Estudar"],
    dog: {
        name: "Simba",
        age: 4,
    },

};

/* const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies; */

/* console.log(`Meu nome completo é: ${firstName} ${lastName}, minha idade é: ${age} anos e gosto de ${hobbies} no meu tempo livre`) */
//console.log(person.hobbies[1])

/* const { firstName:primeiroNome, lastName, age,  hobbies } = person;
  */// Aqui vai colocar cada propriedade como variável.

/* console.log(primeiroNome)
 */

// person.dog = "Simba" // essa é uma forma de adicionar uma nova propriedade

// Tambem posso adicionar um objeto dentro do meu objeto. Adicionei direto no meu obejto um outro objeto.

// Como tornar cada propriedade do objeto dog que esta dentro do objeto person, em variável?

/* const {name, age} = person.dog
console.log(name, age) */ // Aqui eu transformei cada propriedade do objeto dog em variável

const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: true,
    },
];

//Como acessar o ultimo obejto dentro dessa lista acima?

// console.log(todos[2].description)
// ou
// const descriptionId = todos[2].description









