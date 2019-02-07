const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");
const user = "currentuser",showing="showing";

function savename(text)
{
    localStorage.setItem(user, text);
}

function ask(){
    form.classList.add(showing);
    form.addEventListener("submit", handlesubmit);

}

function handlesubmit(event)
{
    event.preventDefault();
    const currentvalue = input.value;
    paintgreeting(currentvalue);
    savename(currentvalue);
}

function paintgreeting(text){
    form.classList.remove(showing);
    greeting.classList.add(showing);
    greeting.innerText = `Hello ${text}`;
}

function loadname()
{
    const currentuser = localStorage.getItem(user);
    if(currentuser === null){
        ask();
    }
    else{
        paintgreeting(currentuser);
    }
}

function init()
{
    loadname();
}
init();
