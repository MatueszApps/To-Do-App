/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n\nclass Project {\n  constructor(name, description, dueDate, tasks = []) {\n    this.name = name;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.tasks = tasks.map(taskData => new _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](taskData.name, taskData.description, taskData.dueDate, taskData.priority));\n  }\n  addTask(name, description, dueDate, priority) {\n    const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, description, dueDate, priority);\n    this.tasks.push(newTask);\n    if (this.dueDate > Project.dueDate) alert(\"Please put correct date\");\n    console.log(\"Task added:\", newTask); // Debug: wyświetlanie dodanego zadania\n  }\n  removeTask(taskIndex) {\n    this.tasks.splice(taskIndex, 1);\n  }\n  getProjectInfo() {\n    const tasksInfo = this.tasks.map(task => task.getTaskInfo()).join('\\n\\n');\n    return `Project: ${this.name}\\nDescription: ${this.description}\\nDue Date: ${this.dueDate}\\nTasks:\\n${tasksInfo}`;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://to-do-app/./src/Project.js?");

/***/ }),

/***/ "./src/ProjectManager.js":
/*!*******************************!*\
  !*** ./src/ProjectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nclass ProjectManager {\n  constructor() {\n    const storedProjects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadFromStorage)('projects') || [];\n    this.projects = storedProjects.map(projectData => new _Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectData.name, projectData.description, projectData.dueDate, projectData.tasks));\n  }\n  addNewProject(name, description, dueDate) {\n    const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, description, dueDate);\n    this.projects.push(newProject);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)('projects', this.projects);\n  }\n  getProjects() {\n    return this.projects;\n  }\n  saveProjects() {\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)('projects', this.projects);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);\n\n//# sourceURL=webpack://to-do-app/./src/ProjectManager.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n\nclass Task {\n  constructor(name, description, dueDate, priority) {\n    this.name = name;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n  getTaskInfo() {\n    return `Task: ${this.name}\\nDescription: ${this.description}\\nDue Date: ${this.dueDate}\\nPriority: ${this.priority}`;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to-do-app/./src/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectManager.js */ \"./src/ProjectManager.js\");\n\n\nconst manager = new _ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n// Elementy DOM\nconst overlay = document.getElementById('overlay');\nconst projectForm = document.getElementById('project-form');\nconst allProjectsLink = document.getElementById('all-projects-link');\nconst addNewProjectLink = document.getElementById('add-new-project-link');\nconst canvas = document.getElementById('canvas');\nconst cancelButton = document.getElementById('cancel-button');\nconst taskOverlay = document.getElementById('task-overlay');\nconst taskForm = document.getElementById('task-form');\nconst taskCancelButton = document.getElementById('task-cancel-button');\nlet currentProject = null;\n\n// Funkcje\nfunction showOverlay() {\n  overlay.style.display = 'flex';\n}\nfunction hideOverlay() {\n  overlay.style.display = 'none';\n}\nfunction showTaskOverlay() {\n  taskOverlay.style.display = 'flex';\n}\nfunction hideTaskOverlay() {\n  taskOverlay.style.display = 'none';\n}\nfunction showError(message) {\n  const errorDiv = document.createElement('div');\n  errorDiv.className = 'error-message';\n  errorDiv.textContent = message;\n  document.body.appendChild(errorDiv);\n  setTimeout(() => {\n    errorDiv.remove();\n  }, 3000);\n}\nfunction displayAllProjects() {\n  canvas.innerHTML = ''; // Czyszczenie canvas\n  manager.getProjects().forEach((project, index) => {\n    const projectDiv = document.createElement('div');\n    projectDiv.className = 'project';\n    projectDiv.innerHTML = `\n            <h3>${project.name}</h3>\n            <p>${project.description}</p>\n            <p>Due Date: ${project.dueDate}</p>\n            <button onclick=\"deleteProject(${index})\">Delete Project</button>\n        `;\n    projectDiv.querySelector('h3').addEventListener('click', () => displayProjectTasks(index)); // Dodanie event listenera do nazwy projektu\n    canvas.appendChild(projectDiv);\n  });\n}\nfunction displayProjectTasks(index) {\n  currentProject = manager.getProjects()[index];\n  console.log(\"Current Project:\", currentProject); // Debug: wyświetlanie currentProject\n  canvas.innerHTML = `<h2>${currentProject.name}</h2>`;\n  const tasksDiv = document.createElement('div');\n  currentProject.tasks.forEach((task, taskIndex) => {\n    const taskDiv = document.createElement('div');\n    taskDiv.className = 'task';\n    taskDiv.innerHTML = `\n            <h4>${task.name}</h4>\n            <p>${task.description}</p>\n            <p>Due Date: ${task.dueDate}</p>\n            <p>Priority: ${task.priority}</p>\n            <button onclick=\"deleteTask(${index}, ${taskIndex})\">Delete Task</button>\n        `;\n    tasksDiv.appendChild(taskDiv);\n  });\n  const addTaskButton = document.createElement('button');\n  addTaskButton.textContent = 'Add New Task';\n  addTaskButton.className = 'add-task-button'; // Dodanie klasy dla stylizacji\n  addTaskButton.addEventListener('click', showTaskOverlay);\n  tasksDiv.appendChild(addTaskButton);\n  canvas.appendChild(tasksDiv);\n}\n\n// Funkcja do usuwania projektu\nwindow.deleteProject = index => {\n  manager.getProjects().splice(index, 1);\n  manager.saveProjects();\n  displayAllProjects();\n};\n\n// Funkcja do usuwania zadania\nwindow.deleteTask = (projectIndex, taskIndex) => {\n  manager.getProjects()[projectIndex].tasks.splice(taskIndex, 1);\n  manager.saveProjects();\n  displayProjectTasks(projectIndex);\n};\n\n// Event Listeners\naddNewProjectLink.addEventListener('click', showOverlay);\ncancelButton.addEventListener('click', hideOverlay);\nallProjectsLink.addEventListener('click', displayAllProjects);\nprojectForm.addEventListener('submit', e => {\n  e.preventDefault();\n  const name = document.getElementById('project-name').value;\n  const description = document.getElementById('project-description').value;\n  const dueDate = document.getElementById('project-dueDate').value;\n  manager.addNewProject(name, description, dueDate);\n  manager.saveProjects();\n  hideOverlay();\n  displayAllProjects();\n});\ntaskCancelButton.addEventListener('click', hideTaskOverlay);\ntaskForm.addEventListener('submit', e => {\n  e.preventDefault();\n  console.log(\"Form Submitted\"); // Debug: Formularz został przesłany\n  if (currentProject) {\n    const name = document.getElementById('task-name').value;\n    const description = document.getElementById('task-description').value;\n    const dueDate = document.getElementById('task-dueDate').value;\n    const priority = document.getElementById('task-priority').value;\n\n    // Sprawdzanie terminu zadania\n    const projectDueDate = new Date(currentProject.dueDate);\n    const taskDueDate = new Date(dueDate);\n    if (taskDueDate > projectDueDate) {\n      showError('Task due date cannot be later than project due date.');\n      return;\n    }\n    console.log(\"Task Details:\", {\n      name,\n      description,\n      dueDate,\n      priority\n    }); // Debug: wyświetlanie szczegółów zadania\n    currentProject.addTask(name, description, dueDate, priority);\n    console.log(\"Tasks after adding:\", currentProject.tasks); // Debug: wyświetlanie zadań po dodaniu\n    manager.saveProjects();\n    hideTaskOverlay();\n    displayProjectTasks(manager.getProjects().indexOf(currentProject));\n  }\n});\n\n// Inicjalizacja: Wyświetlenie wszystkich projektów na początku\ndisplayAllProjects();\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadFromStorage: () => (/* binding */ loadFromStorage),\n/* harmony export */   saveToStorage: () => (/* binding */ saveToStorage)\n/* harmony export */ });\n// Zapisz dane do localStorage\nfunction saveToStorage(key, data) {\n  localStorage.setItem(key, JSON.stringify(data));\n}\n\n// Odczytaj dane z localStorage\nfunction loadFromStorage(key) {\n  const data = localStorage.getItem(key);\n  return data ? JSON.parse(data) : null;\n}\n\n//# sourceURL=webpack://to-do-app/./src/storage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Ogólne style */\r\nbody, html {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, sans-serif;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n}\r\n\r\n/* Kontener */\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-color: #f0f0f0;\r\n    overflow: hidden; /* Dodane aby usunac szary pasek */\r\n}\r\n\r\n/* Logo */\r\n.logo {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 10%;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    margin: 0; /* Dodane aby usunac margines */\r\n    padding: 0; /* Dodane aby usunac padding */\r\n}\r\n\r\n.logo h2 {\r\n    margin: 0;\r\n}\r\n\r\n/* Main content */\r\n.main_content {\r\n    display: flex;\r\n    height: 90%;\r\n    width: 100%;\r\n    margin: 0; /* Dodane aby usunac margines */\r\n    padding: 0; /* Dodane aby usunac padding */\r\n}\r\n\r\n/* Side menu */\r\n#side_menu {\r\n    width: 10%;\r\n    background-color: #333;\r\n    color: white;\r\n    padding: 10px;\r\n}\r\n\r\n#side_menu ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n#side_menu ul li {\r\n    padding: 10px;\r\n    margin: 5px 0;\r\n    background-color: #444;\r\n    cursor: pointer;\r\n}\r\n\r\n#side_menu ul li:hover {\r\n    background-color: #555;\r\n}\r\n\r\n/* Canvas */\r\n#canvas {\r\n    width: 90%;\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    overflow-y: auto;\r\n    margin: 0; /* Dodane aby usunac margines */\r\n}\r\n\r\n/* Dodanie stylu dla <h2> wewnątrz #canvas */\r\n#canvas h2 {\r\n    background-color: #333;\r\n    color: white;\r\n    border-radius: 5px; /* Opcjonalnie: dodaj zaokrąglone rogi */\r\n    padding: 20px 0;\r\n    padding-left: 10px;\r\n}\r\n\r\n/* Task and project styles */\r\n.task, .project {\r\n    border: 1px solid #ccc;\r\n    padding: 10px;\r\n    margin: 10px 0;\r\n    border-radius: 5px;\r\n    background-color: #fafafa;\r\n}\r\n\r\n.task button, .project button {\r\n    margin-left: 10px;\r\n    background-color: red;\r\n    color: white;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\n\r\n.task button:hover, .project button:hover {\r\n    background-color: darkred;\r\n}\r\n\r\n/* Dodanie stylu dla przycisku \"Add New Task\" */\r\nbutton.add-task-button {\r\n    padding: 10px 20px;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n}\r\n\r\nbutton.add-task-button:hover {\r\n    background-color: #45a049;\r\n}\r\n\r\n/* Dodanie kursora dla nazwy projektu */\r\n.project h3 {\r\n    cursor: pointer;\r\n}\r\n\r\n/* Overlay */\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* Form container */\r\n.form-container {\r\n    background: white;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n    width: 80%;\r\n    max-width: 400px;\r\n}\r\n\r\n.form-container div {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/* Form inputs */\r\n.form-container input, .form-container textarea, .form-container select {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin: 5px 0 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    box-sizing: border-box; /* Upewnij się, że padding jest uwzględniany wewnątrz szerokości i wysokości */\r\n}\r\n\r\n.form-container button {\r\n    padding: 10px 20px;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-container button:hover {\r\n    background-color: #45a049;\r\n}\r\n\r\n.form-container button#cancel-button, .form-container button#task-cancel-button {\r\n    background-color: #f44336;\r\n}\r\n\r\n.form-container button#cancel-button:hover, .form-container button#task-cancel-button:hover {\r\n    background-color: #e53935;\r\n}\r\n\r\n.add-task-button{\r\n    padding: 20px 0;\r\n    padding-left: 10px;\r\n}\r\n\r\n.error-message {\r\n    position: fixed;\r\n    top: 20px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background-color: red;\r\n    color: white;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    z-index: 1000;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;