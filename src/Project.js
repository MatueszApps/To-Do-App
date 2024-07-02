import Task from './Task.js';

class Project {
  constructor(name, description, dueDate, tasks = []) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.tasks = tasks.map(taskData => new Task(
      taskData.name,
      taskData.description,
      taskData.dueDate,
      taskData.priority
    ));
  }

  addTask(name, description, dueDate, priority) {
    const newTask = new Task(name, description, dueDate, priority);
    this.tasks.push(newTask);
    console.log("Task added:", newTask); // Debug: wyświetlanie dodanego zadania
  }

  removeTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  }

  getProjectInfo() {
    const tasksInfo = this.tasks.map(task => task.getTaskInfo()).join('\n\n');
    return `Project: ${this.name}\nDescription: ${this.description}\nDue Date: ${this.dueDate}\nTasks:\n${tasksInfo}`;
  }
}

export default Project;
