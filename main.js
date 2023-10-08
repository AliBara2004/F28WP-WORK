function addTask() {
    const taskText = document.getElementById('newTask').value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <label>
                <input type="checkbox" name="task" /> ${taskText}
            </label>
        `;
        taskList.appendChild(listItem);
        document.getElementById('newTask').value = '';

        const checkbox = listItem.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskList.removeChild(listItem);
            }
        });
    }
}

document.getElementById('addTask').addEventListener('click', addTask);

document.getElementById('newTask').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
