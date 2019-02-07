const todoform = document.querySelector(".js-todoform"),
    todoinput = todoform.querySelector("input"),
    todolist = document.querySelector(".js-todolist");

const todos = "todos";

let toDos= [];



function DeleteToDo(){
    const btn = event.target;
    const li = btn.parentNode;
    todolist.removeChild(li);
    const cleanToDos=toDos.filter(function (toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();

}

function saveToDos(){
    localStorage.setItem(todos,JSON.stringify(toDos)); // object -> string
}

function paintToDo(text){
    const li = document.createElement("li");
    const deletebutton = document.createElement("button");
    const newid=toDos.length +1;
    const span = document.createElement("span");
    deletebutton.innerText = "ⓧ";
    deletebutton.addEventListener("click",DeleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deletebutton);
    li.id = newid;
    todolist.appendChild(li);
    const todoobj = {
        text: text,
        id: newid
    };
    toDos.push(todoobj);
    saveToDos();
}

function todohandle(event){
    event.preventDefault();
    const currentvalues = todoinput.value;
    paintToDo(currentvalues);
    todoinput.value="";
}

function loadtodos(){
    const loadedToDos = localStorage.getItem(todos);
    if(todos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){paintToDo(toDo.text)});
    }
    
}

function init(){
    loadtodos();
    todoform.addEventListener("submit", todohandle);
}
init();