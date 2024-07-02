import Project from './Project.js';
import { saveToStorage, loadFromStorage } from './storage.js';

class ProjectManager {
  constructor() {
    const storedProjects = loadFromStorage('projects') || [];
    this.projects = storedProjects.map(projectData => new Project(
      projectData.name,
      projectData.description,
      projectData.dueDate,
      projectData.tasks
    ));
  }

  addNewProject(name, description, dueDate) {
    const newProject = new Project(name, description, dueDate);
    this.projects.push(newProject);
    saveToStorage('projects', this.projects);
  }

  getProjects() {
    return this.projects;
  }

  saveProjects() {
    saveToStorage('projects', this.projects);
  }
}

export default ProjectManager;
