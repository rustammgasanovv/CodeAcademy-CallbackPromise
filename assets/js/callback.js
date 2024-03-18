const todos = [
    {title:"title1", description:"test1"},
    {title:"title2", description:"test2"},
    {title:"title3", description:"test3"}
]

const toDoElement=document.getElementById('todoList')

function todosList(){
    setTimeout(()=>{
        todoItem=""
        todos.forEach((item)=>{
            todoItem+=`
            <li>
                <h1>${item.title}</h1>
                <p>${item.description}</p>
            </li>
            `
        })
        toDoElement.innerHTML=todoItem
    }, 1000)
}

function newTodo(todo, callback){
    setTimeout(()=>{
        todos.push(todo)
        callback()
    },2000)
}


newTodo({title:"title4", description:"test4"}, todosList)
// todosList()
