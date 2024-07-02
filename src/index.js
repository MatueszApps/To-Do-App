import './styles.css';
import ProjectManager from './ProjectManager.js';

const manager = new ProjectManager();

// Elementy DOM
const overlay = document.getElementById('overlay');
const projectForm = document.getElementById('project-form');
const allProjectsLink = document.getElementById('all-projects-link');
const addNewProjectLink = document.getElementById('add-new-project-link');
const canvas = document.getElementById('canvas');
const cancelButton = document.getElementById('cancel-button');

const taskOverlay = document.getElementById('task-overlay');
const taskForm = document.getElementById('task-form');
const taskCancelButton = document.getElementById('task-cancel-button');

let currentProject = null;

// Funkcje
function showOverlay() {
    overlay.style.display = 'flex';
}

function hideOverlay() {
    overlay.style.display = 'none';
}

function showTaskOverlay() {
    taskOverlay.style.display = 'flex';
}

function hideTaskOverlay() {
    taskOverlay.style.display = 'none';
}

function displayAllProjects() {
    canvas.innerHTML = ''; // Czyszczenie canvas
    manager.getProjects().forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p>Due Date: ${project.dueDate}</p>
            <button onclick="deleteProject(${index})">Delete Project</button>
        `;
        projectDiv.querySelector('h3').addEventListener('click', () => displayProjectTasks(index)); // Dodanie event listenera do nazwy projektu
        canvas.appendChild(projectDiv);
    });
}

function displayProjectTasks(index) {
    currentProject = manager.getProjects()[index];
    console.log("Current Project:", currentProject); // Debug: wyświetlanie currentProject
    canvas.innerHTML = `<h2>${currentProject.name}</h2>`;
    const tasksDiv = document.createElement('div');
    currentProject.tasks.forEach((task, taskIndex) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <h4>${task.name}</h4>
            <p>${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
            <button onclick="deleteTask(${index}, ${taskIndex})">Delete Task</button>
        `;
        tasksDiv.appendChild(taskDiv);
    });

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add New Task';
    addTaskButton.className = 'add-task-button'; // Dodanie klasy dla stylizacji
    addTaskButton.addEventListener('click', showTaskOverlay);
    tasksDiv.appendChild(addTaskButton);

    canvas.appendChild(tasksDiv);
}

// Funkcja do usuwania projektu
window.deleteProject = (index) => {
    manager.getProjects().splice(index, 1);
    manager.saveProjects();
    displayAllProjects();
};

// Funkcja do usuwania zadania
window.deleteTask = (projectIndex, taskIndex) => {
    manager.getProjects()[projectIndex].tasks.splice(taskIndex, 1);
    manager.saveProjects();
    displayProjectTasks(projectIndex);
};

// Event Listeners
addNewProjectLink.addEventListener('click', showOverlay);
cancelButton.addEventListener('click', hideOverlay);
allProjectsLink.addEventListener('click', displayAllProjects);

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('project-name').value;
    const description = document.getElementById('project-description').value;
    const dueDate = document.getElementById('project-dueDate').value;
    manager.addNewProject(name, description, dueDate);
    manager.saveProjects();
    hideOverlay();
    displayAllProjects();
});

taskCancelButton.addEventListener('click', hideTaskOverlay);

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form Submitted"); // Debug: Formularz został przesłany
    if (currentProject) {
        const name = document.getElementById('task-name').value;
        const description = document.getElementById('task-description').value;
        const dueDate = document.getElementById('task-dueDate').value;
        const priority = document.getElementById('task-priority').value;
        console.log("Task Details:", { name, description, dueDate, priority }); // Debug: wyświetlanie szczegółów zadania
        currentProject.addTask(name, description, dueDate, priority);
        console.log("Tasks after adding:", currentProject.tasks); // Debug: wyświetlanie zadań po dodaniu
        manager.saveProjects();
        hideTaskOverlay();
        displayProjectTasks(manager.getProjects().indexOf(currentProject));
    }
});

// Inicjalizacja: Wyświetlenie wszystkich projektów na początku
displayAllProjects();
