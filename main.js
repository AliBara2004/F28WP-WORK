// This function handles adding a new task
function addTask() {
    // Get the text from the task input field, and remove extra spaces
    const taskText = document.getElementById('newTask').value.trim();
    
    // Check if there's actually text in the input
    if (taskText !== '') {
        // Get the area where we display the tasks
        const taskList = document.getElementById('taskList');
        
        // Create a new item in the list for the task, including a checkbox and the task text
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <label>
                <input type="checkbox" name="task" /> ${taskText}
            </label>
        `;
        
        // Add this new task item to the list of tasks
        taskList.appendChild(listItem);
        
        // Clear the input field after adding the task
        document.getElementById('newTask').value = '';

        // Get the checkbox element within the task item
        const checkbox = listItem.querySelector('input[type="checkbox"]');
        
        // Listen for changes (like checking the checkbox) to handle task completion
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                // Ask the user for confirmation before removing a task
                const confirmation = confirm('Are you sure you want to remove this task?');
                
                // If the user says yes, remove the task from the list and show a message
                if (confirmation) {
                    taskList.removeChild(listItem);
                    alert('Task removed!');
                } else {
                    // If the user cancels, uncheck the checkbox
                    checkbox.checked = false; 
                }
            }
        });
    }
}

// Make the 'Add Task' button use the addTask function when clicked
document.getElementById('addTask').addEventListener('click', addTask);

// Allow users to add a task by pressing Enter in the input field
document.getElementById('newTask').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
