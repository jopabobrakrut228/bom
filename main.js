let task = []

let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTask');
let taskList = document.getElementById('taskList')

function addTask(){
   let taskText = taskInput.value.trim()
   if (taskText  !== ""){
        task.push(taskText);
        taskInput.value = "";
        renderTasks(taskText);
   }else{
    alert("ты инвалид нормально делай")
   }
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener('keydown',function (e){
    if(e.key === 'Enter') {
        addTask();
    }
});

function renderTasks(){
    taskList.innerHTML = "";
    for(let i = 0; i < task.length; i++){
        let taskItem = document.createElement('li');
        taskItem.classList.add('tasks')
        taskItem.innerHTML = `<span>${task[i]}</span>
        <button class="deleteBtn" onclick="deleteTask(${i})">удалить</button>
        `;
        taskList.appendChild(taskItem);
    }
}


function deleteTask(index){
    task.splice(index, 1);
    renderTasks();
}

