// Add new Task
function addNewTask(element){
    const previous = element.previousElementSibling;
    const previousElementValue = previous.value;
    const tasks = document.querySelector(".tasksBlock");
    let taskViews = `
        <div class="input-group mb-3">
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" onclick="doneTask(this)">
            </div>
            <input type="text" class="form-control" value="${previousElementValue}" disabled>
            <button class="btn btn-outline-secondary" type="button" onclick="editTask(this)">Edit</button>
            <button class="btn btn-outline-danger" type="button" onclick="deleteTask(this)">Delete</button>
        </div>
    `
    tasks.innerHTML += taskViews;
    previous.value = "";
}

// Delete Task
function deleteTask(element){
    const tasks = document.querySelector(".tasksBlock");
    const parentElement = element.parentElement;
    tasks.removeChild(parentElement); 
}

// Done Task
function doneTask(element){
    if(element.checked){
        element.parentElement.nextElementSibling.disabled = true;
        element.parentElement.nextElementSibling.style.textDecoration = "line-through";
        element.parentElement.nextElementSibling.nextElementSibling.disabled = true;
    }
    else{
        element.parentElement.nextElementSibling.disabled = false;
        element.parentElement.nextElementSibling.style.textDecoration = "none";
        element.parentElement.nextElementSibling.nextElementSibling.disabled = false;
    }
}

// Edit Task
function editTask(element){
    const inputField = element.previousElementSibling;
    if(element.textContent === "Edit"){
        inputField.disabled = false;
        inputField.focus();
        element.textContent = "Save";
    } else {
        inputField.disabled = true;
        element.textContent = "Edit";
    }
}