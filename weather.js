const weather = document.querySelector(".js-weather");

const ApiKey= "087c8b79b4d66a67fd59190c5189a49a";
const coords = "coords";

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${ApiKey}&units=metric`)
.then(function (response){
    return response.json();
})
.then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;
});
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function saveCoords(coordsObj){
    localStorage.setItem(coords, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };    
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function askForCords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCords(){
    const loadedCords= localStorage.getItem(coords);
    if(loadedCords === null){
        askForCords();
    }
    else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}


function init(){
    loadCords();
}

init();