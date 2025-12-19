let tasks = [];
let currentFilter = "all";
let taskIdCounter = 1;

const toggle = document.getElementById("toggle");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const tasksContainer = document.getElementById("tasksContainer");
const filterButtons = document.querySelectorAll(".filter-btn");
window.addEventListener("load", function () {
  loadTasksFromStorage();
  displayTasks();
});

toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    toggle.textContent = "☀️ Light Mode";
  } else {
    toggle.textContent = "🌙 Dark Mode";
  }
});


addTaskBtn.addEventListener("click", function () {
  const title = taskTitle.value.trim();
  const description = taskDescription.value.trim();
  const priority = taskPriority.value;

  if (title === "") {
    alert("Please enter a task title!");
    return;
  }

  const task = {
    id: taskIdCounter++,
    title: title,
    description: description,
    priority: priority,
  };

  tasks.push(task);

  saveTasksToStorage();

  taskTitle.value = "";
  taskDescription.value = "";
  taskPriority.value = "low";

  displayTasks();
});

function displayTasks() {
  let filteredTasks = tasks;
  if (currentFilter !== "all") {
    filteredTasks = tasks.filter((task) => task.priority !== currentFilter);
  }

  tasksContainer.innerHTML = "";

  if (filteredTasks.length === 0) {
    tasksContainer.innerHTML = '<div class="empty">No tasks found.</div>';
    return;
  }

  filteredTasks.forEach((task) => {
    const taskCard = createTaskCard(task);
    tasksContainer.appendChild(taskCard);
  });
}

function createTaskCard(task) {
  const card = document.createElement("div");
  card.className = `task-card ${task.priority}`;
  card.setAttribute("data-id", task.id);
  card.innerHTML = `
                <div class="task-header">
                    <span class="task-title">${task.title}</span>
                    <span class="task-priority priority-${
                      task.priority
                    }">${task.priority.toUpperCase()}</span>
                </div>
                <div class="task-description">${
                  task.description || "No description"
                }</div>
                <div class="task-actions">
                    <button class="edit-btn" onclick="editTask(${
                      task.id
                    })">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(${
                      task.id
                    })">Delete</button>
                </div>
            `;

  return card;
}

function editTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  const card = document.querySelector(`[data-id="${id}"]`);

  card.innerHTML = `
                <div class="form-group edit-input">
                    <label>Title:</label>
                    <input type="text" id="editTitle${id}" value="${
    task.title
  }">
                </div>
                <div class="form-group edit-input">
                    <label>Description:</label>
                    <textarea id="editDescription${id}">${
    task.description
  }</textarea>
                </div>
                <div class="form-group edit-input">
                    <label>Priority:</label>
                    <select id="editPriority${id}">
                        <option value="low" ${
                          task.priority === "low" ? "selected" : ""
                        }>Low</option>
                        <option value="medium" ${
                          task.priority === "medium" ? "selected" : ""
                        }>Medium</option>
                        <option value="high" ${
                          task.priority === "high" ? "selected" : ""
                        }>High</option>
                    </select>
                </div>
                <div class="task-actions">
                    <button class="save-btn" onclick="saveTask(${id})">Save</button>
                    <button class="cancel-btn" onclick="displayTasks()">Cancel</button>
                </div>
            `;
}

function saveTask(id) {
  const newTitle = document.getElementById(`editTitle${id}`).value.trim();
  const newDescription = document
    .getElementById(`editDescription${id}`)
    .value.trim();
  const newPriority = document.getElementById(`editPriority${id}`).value;

  if (newTitle === "") {
    alert("Title cannot be empty!");
    return;
  }

  const task = tasks.find((t) => t.id === id);
  task.title = newTitle;
  task.description = newDescription;
  task.priority = newPriority;

  saveTasksToStorage();

  displayTasks();
}

function deleteTask(id) {
  const confirmed = confirm("Are you sure you want to delete this task?");

  if (confirmed) {
    tasks = tasks.filter((t) => t.id !== id);

    saveTasksToStorage();

    displayTasks();
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    this.classList.add("active");

    currentFilter = this.getAttribute("data-filter");

    displayTasks();
  });
});

function saveTasksToStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("taskIdCounter", taskIdCounter);
}

function loadTasksFromStorage() {
  const savedTasks = localStorage.getItem("tasks");
  const savedCounter = localStorage.getItem("taskIdCounter");

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }

  if (savedCounter) {
    taskIdCounter = parseInt(savedCounter);
  }
}
