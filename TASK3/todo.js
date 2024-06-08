document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            deleteTodoItem(e.target);
        } else if (e.target.tagName === 'LI') {
            toggleCompleteTodoItem(e.target);
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    }

    function deleteTodoItem(button) {
        const li = button.parentElement;
        todoList.removeChild(li);
    }

    function toggleCompleteTodoItem(li) {
        li.classList.toggle('completed');
    }
});