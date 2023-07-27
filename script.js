document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("taskInput");
    var addButton = document.getElementById("addButton");
    var taskList = document.getElementById("taskList");
    var countElement = document.getElementById("count");
    var totalTasks = 0;
  //Function for Add a task
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
  // Function to toggle the task status (completed or not completed)
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
   // Add event listeners

  // When the 'Add' button is clicked, call the addTask function
    addButton.addEventListener("click", function() {
      addTask();
    });
  // When the user presses 'Enter' in the input field, call the addTask function
    taskInput.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
        addTask();
        event.preventDefault();
      }
    });
  // When the user clicks on the 'Delete' button of a task item, remove the task item from the list and update the total task count
    taskList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-button")) {
        var taskItem = event.target.parentNode;
        taskList.removeChild(taskItem);
        totalTasks--;
        countElement.textContent = totalTasks;
      }
    });
  // When the user changes the status of a task item using the checkbox, call the toggleTaskStatus function
    taskList.addEventListener("change", function(event) {
      if (event.target.classList.contains("checkbox")) {
        var taskItem = event.target.parentNode;
        toggleTaskStatus(taskItem);
      }
    });
  });
  
