const todoList = [
    {name : 'Learn JavaScript', dueDate : '2023-10-03'},
    {name : 'Watch World Cup', dueDate : '2023-10-09'}
];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `<div> ${name} </div>
        <div> ${dueDate} </div>
        <button
            class="delete-todo-button"
        > Delete
        </button>
        `;
    todoListHtml += html;
    });
    
    let todoListViewItem = document.getElementById('todo-list-view');
    todoListViewItem.innerHTML = todoListHtml;

    document.querySelectorAll('.delete-todo-button').forEach((deleteBtn, i) => {
        deleteBtn.addEventListener('click', () => {
            todoList.splice(i, 1);
            renderTodoList();
        });
    });
}

function addTodo() {
    const todoInputText = document.getElementById('todo-input-text');
    const todoTextValue = todoInputText.value;

    const todoInputDate = document.getElementById('todo-input-date');
    const todoDateValue = todoInputDate.value;

    if (todoTextValue === '' || todoDateValue === '') {
        alert('Please Enter The Name and Date');
    } else {
        todoList.push({name : todoTextValue, dueDate : todoDateValue});
        todoInputText.value = '';
        todoInputDate.value = '';
        renderTodoList();
    }
}

document.getElementById("add-todo-button").addEventListener("click", () => addTodo());