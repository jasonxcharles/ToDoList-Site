const inputBox = document.getElementById("input-box");
const dueDateInput = document.getElementById("due-date");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector(".form-group button");

addButton.addEventListener("click", function(event){
event.preventDefault();
if(!inputBox.value.trim()){
    alert("You must write something!");
} else{
    addTask();
}
});


function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        if (dueDateInput.value !== '') {
            let dueDate = document.createElement("span");
            dueDate.innerHTML = " -Due Date: " + dueDateInput.value;
            li.appendChild(dueDate);
        }

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = "";
        dueDateInput.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();