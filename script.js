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
            onclick= "
                    todoList.splice(${index}, 1);
                    renderTodoList();
            "
        > Delete
        </button>
        `;
    todoListHtml += html;
    });
    
    let todoListViewItem = document.getElementById('todo-list-view');
    todoListViewItem.innerHTML = todoListHtml;
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
