function deleteTask(event) {
    var taskItem = event.target.parentElement;
    taskItem.remove();
    updateTaskCount();
}

function updateTaskCount() {
    const toDoListItems = document.querySelectorAll('.to-do-list_item');
    const toDoListTitle = document.querySelector('.to-do_container_task-list_title');
    toDoListTitle.textContent = `Tasks to do - ${toDoListItems.length}`;
}

function setupDeleteTaskButtons() {
    var deleteButtons = document.getElementsByClassName('delete_task');
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteTask);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('add__new-task');
    var newTaskInput = document.getElementById('new-task');

    function addNewTask() {
        var newTaskValue = newTaskInput.value;
        if (newTaskValue) {
            var ul = document.getElementById('to-do-list');
            var li = document.createElement('li');
            li.className = 'to-do-list_item';
            var span = document.createElement('span');
            span.className = 'task-to-do';
            span.textContent = newTaskValue;
            var addBtn = document.createElement('button');
            addBtn.className = 'add_task_to_done';
            var deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete_task';
            li.appendChild(span);
            li.appendChild(addBtn);
            li.appendChild(deleteBtn);
            ul.appendChild(li);

            newTaskInput.value = '';
            updateTaskCount();
            
            // delete task
            deleteBtn.addEventListener('click', deleteTask);
        }
    }

    addButton.addEventListener('click', addNewTask);

    newTaskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addNewTask();
        }
    });

    setupDeleteTaskButtons();
    updateTaskCount();
});

// add listener for new elements
var toDoList = document.getElementById('to-do-list');
toDoList.addEventListener('DOMNodeInserted', function(event) {
    if (event.target.classList.contains('to-do-list_item')) {
        var deleteBtn = event.target.querySelector('.delete_task');
        deleteBtn.addEventListener('click', deleteTask);
    }
});