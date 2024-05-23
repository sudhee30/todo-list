function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value.trim();
    if (task !== "") {
      var li = document.createElement("li");
      li.innerHTML = task + ' <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
      taskList.appendChild(li);
      taskInput.value = "";
    } else {
      alert("Please add a task!");
    }
  }
  
  function deleteTask(element) {
    element.parentElement.remove();
  }
  
  function editTask(element) {
    var newText = prompt("Edit task", element.parentElement.firstChild.textContent.trim());
    if (newText !== null) {
      element.parentElement.firstChild.textContent = newText;
    }
  }
  