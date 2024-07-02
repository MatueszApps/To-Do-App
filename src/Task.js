class Task {
    constructor(name, description, dueDate, priority) {
      this.name = name;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  
    getTaskInfo() {
      return `Task: ${this.name}\nDescription: ${this.description}\nDue Date: ${this.dueDate}\nPriority: ${this.priority}`;
    }
  }
  
  export default Task;
  