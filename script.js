function deleteTask(event) {
    var taskItem = event.target.parentElement;
    taskItem.remove();
    updateToDoTaskCount();
}

function updateToDoTaskCount() {
    const toDoListItems = document.querySelectorAll('.to-do-list_item');
    const toDoListTitle = document.querySelector('.to-do_container_task-list_title');
    toDoListTitle.textContent = `Tasks to do - ${toDoListItems.length}`;
}

function updateDoneTaskCount() {
    const doneListItems = document.querySelectorAll('.is-done-list_item');
    const doneListTitle = document.querySelector('.is-done_container_task-list_title');
    doneListTitle.textContent = `Done - ${doneListItems.length}`;
}

function moveTaskToDone(taskToDo) {
    var newTaskItem = document.createElement('li');
    newTaskItem.classList.add('is-done-list_item');
    newTaskItem.textContent = taskToDo.querySelector('.task-to-do').textContent;
    document.querySelector('.is-done-list').appendChild(newTaskItem);

    taskToDo.remove(); // remove task
    
    updateToDoTaskCount(); // update to_do counter
    updateDoneTaskCount(); // update is_done counter
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
            updateToDoTaskCount();

            // delete task
            deleteBtn.addEventListener('click', deleteTask);

            // move task to Done
            addBtn.addEventListener('click', function() {
                moveTaskToDone(li);
            });
        }
    }

    addButton.addEventListener('click', addNewTask);

    newTaskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addNewTask();
        }
    });

    setupDeleteTaskButtons();
    updateToDoTaskCount();

    function setupMoveTaskToDoneButtons() {
        var addButtons = document.getElementsByClassName('add_task_to_done');
        for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener('click', function() {
                var taskItem = this.parentElement;
                moveTaskToDone(taskItem);
            });
        }
    }

    setupMoveTaskToDoneButtons();
    updateDoneTaskCount();
});