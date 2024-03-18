

const todos = [
    { title: "title1", description: "test1" },
    { title: "title2", description: "test2" },
    { title: "title3", description: "test3" }
]

const toDoElement = document.getElementById('todoList')

function todosList() {
    setTimeout(() => {
        todoItem = ""
        todos.forEach((item) => {
            todoItem += `
            <li>
                <h1>${item.title}</h1>
                <p>${item.description}</p>
            </li>
            `
        })
        toDoElement.innerHTML = todoItem
    }, 1000)
}

function newTodo(todo, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            todos.push(todo)
            const e=true
            if(!e){
                resolve()
            }else{
                reject("Error404")
            }
            callback()
        }, 2000)
    })

}


newTodo({ title: "title4", description: "test4" }, todosList).then(resolve=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
})
// todosList()

const p1 = Promise.resolve("P1")
const p2=new Promise((resolve,reject) =>{
    })

const p3=fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data)
console.log(data);
// console.log(p3);

Promise.all([p1, p2, p3]).then((promises)=>{
    console.log('promises', promises);
})