const addToDoButton = document.querySelector('#add-todo')
const input = document.querySelector('#new-todo')
const todoList = document.querySelector('.todo-list')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = () => {
    todoList.innerHTML = ''
    todos.forEach(({ text }) => {
        const li = document.createElement('li')
        li.textContent = text
        todoList.append(li)
    });
}

addToDoButton.addEventListener('click', () => {
    todos.push({ text: input.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))
    renderTodos()
    input.value = ''
})

 renderTodos()