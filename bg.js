const body = document.querySelector("body");

const imgnumber = 3;

function paintimage(imgnumber){
    const image = new Image();
    image.src = `images/${imgnumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * imgnumber);
    return number;
}

function init(){
    const randomNumber = genRandom(); 
    paintimage(randomNumber);
}

init();