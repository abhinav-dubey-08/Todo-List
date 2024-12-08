function startApp() {
    const nameInput = document.getElementById('userName');
    if (nameInput.value.trim() !== '') {
        document.getElementById('nameInput').style.display = 'none';
        document.getElementById('taskSection').style.display = 'block';
        document.getElementById('addTaskSection').style.display = 'block';
        document.getElementById('userNameDisplay').innerText = `${nameInput.value}'s To-Do List`;

        // Display current date, day, and time
        displayDateTime();
    }
}

function displayDateTime() {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    const now = new Date();
    dateTimeDisplay.innerText = `${now.toDateString()} ${now.toLocaleTimeString()}`;
    setInterval(() => {
        const now = new Date();
        dateTimeDisplay.innerText = `${now.toDateString()} ${now.toLocaleTimeString()}`;
    }, 1000);
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');

        // Tick button
        const tickButton = document.createElement('span');
        tickButton.innerHTML = '&#10003;';
        tickButton.classList.add('tick');
        tickButton.onclick = () => {
            taskItem.classList.toggle('completed');
        };

        // Task text
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        taskText.style.flexGrow = 1;

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => {
            taskItem.remove();
        };

        taskItem.appendChild(tickButton);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = ''; // Clear input after adding
    }
}

function downloadPDF() {
    const element = document.getElementById('todoApp');
    html2pdf(element);
}
