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

 const todosJSON = JSON.stringify(todos)// Aqui transformei a lista em JSON
// console.log(todosJSON)

// E o contrario, quando for transformar json para lista

const jsonList = JSON.parse(todosJSON);
// console.log(jsonList)

