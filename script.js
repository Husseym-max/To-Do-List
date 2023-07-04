document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("taskInput");
    var addButton = document.getElementById("addButton");
    var taskList = document.getElementById("taskList");
    var countElement = document.getElementById("count");
    var totalTasks = 0;
  
    function addTask() {
      var taskText = taskInput.value.trim();
      if (taskText !== "") {
        var taskItem = document.createElement("li");
        taskItem.innerHTML = `
          <input type="checkbox" class="checkbox">
          <span class="task-text">${taskText}</span>
          <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(taskItem);
        totalTasks++;
        countElement.textContent = totalTasks;
        taskInput.value = "";
      }
    }
  
    function toggleTaskStatus(taskItem) {
      var checkbox = taskItem.querySelector(".checkbox");
      var taskText = taskItem.querySelector(".task-text");
  
      checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
          taskText.classList.add("completed");
        } else {
          taskText.classList.remove("completed");
        }
      });
    }
  
    addButton.addEventListener("click", function() {
      addTask();
    });
  
    taskInput.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
        addTask();
        event.preventDefault();
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-button")) {
        var taskItem = event.target.parentNode;
        taskList.removeChild(taskItem);
        totalTasks--;
        countElement.textContent = totalTasks;
      }
    });
  
    taskList.addEventListener("change", function(event) {
      if (event.target.classList.contains("checkbox")) {
        var taskItem = event.target.parentNode;
        toggleTaskStatus(taskItem);
      }
    });
  });
  