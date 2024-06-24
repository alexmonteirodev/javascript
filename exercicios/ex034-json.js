// JSON (JavaScript Object Notation) basicamente é uma formatação do documento para transitar dados entre API ou de um front para um back.(formato para intercambio de dados entre servidor e cliente)
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

//para enviar dados, usar o stringfy
const ToDoJSON = JSON.stringify(ToDo) //isso converte a lista ToDo para uma string em formato JSON (Tem que usar o formato JSON porque não consegue mandar em formato JS para um servidor)
console.log(ToDoJSON)


//quando estiver recebendo, usar o parse porque ele converte para lista e a lista podemos manipular com JS
const ToDoList = JSON.parse(ToDoJSON) //transformar para lista
console.log(ToDoList)