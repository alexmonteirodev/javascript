// o que mais vai ver no dia a dia é uma lista com varios objetos

const ToDo = [
    {
        id: 1,
        description: 'Estudar Programação',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'ler',
        isCompleted: true,
    },
    {
        id: 3,
        description: 'treinar',
        isCompleted: true,
    },
]
console.log(ToDo)

const descriptionOfId3 = ToDo[2].description
console.log(descriptionOfId3)