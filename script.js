const butt = document.getElementsByClassName('search')[0];
const input = document.getElementsByClassName("textfield")[0];
console.log(butt);
function ChangeTemperature(temp){
    const temperature = document.getElementsByClassName('temp')[0];
    temperature.innerHTML = `${temp}° C`;
}
function ChangeWindSpeed(winding){
    const wind = document.getElementsByClassName('wind-speed')[0];
    wind.innerHTML = `${winding} km/h`;
}
function ChangeHumidity(humidity){
    const hum = document.getElementsByClassName('humidity-percent')[0];
    hum.innerHTML = `${humidity}%`;
}
function ChangePicture(weather){
    const weth = document.getElementsByClassName('clouds')[0];
    weth.src=`./images/${weather}.png`;
    console.log(weth);
}
function updatingData(){
    const city = document.getElementsByClassName('textfield')[0].value;
    const str = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=893757c42eb9f0c124f0ec5ecd042c4a&units=metric`;
    fetch(str).then((response) =>{
        return response.json();
    }).then((data)=>{
        if(data.cod == 404){
            alert('city not found');
        }
        else{
            const change = document.getElementsByClassName('city')[0];
            change.innerHTML = data.name;
            console.log(data);
            console.log(data.main.temp);
            ChangeTemperature(data.main.temp);
            console.log(data.wind.speed);
            ChangeWindSpeed(data.wind.speed);
            console.log(data.main.humidity);
            ChangeHumidity(data.main.humidity);
            console.log(data.weather[0].main);
            ChangePicture(data.weather[0].main);
            input.value = "";
        }
    });
}
butt.addEventListener('click', updatingData);
input.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        updatingData();
    }
});
