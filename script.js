// add new task

document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('add__new-task');
    addButton.addEventListener('click', function() {
        var newTaskValue = document.getElementById('new-task').value;
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
        }
    });
});