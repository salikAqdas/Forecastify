
document.getElementById("search-btn").addEventListener('click',()=>{
    let inp = document.getElementById("cityinp").value.trim();
    if(inp == ""){
        alert("Please enter city first!");
    }
    else{
        fetchWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=11e581b6f928465ed9e84de5da387592`);
        
    }
});
async function fetchWeatherData( apiUrl){
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);

    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.ceil(data.main.temp-273.15)+"°C";
    document.getElementById("temp-type").innerHTML = data.weather[0].main;
    document.getElementById("humid-text").innerHTML = data.main.humidity+"%";
    document.getElementById("wind-text").innerHTML = data.wind.speed+" km/hr";
    let weather = data.weather[0].main;
    let src = "./images/sun.png";
    switch(weather){
        case "Mist": src = "./images/mist.png";break;
        case "Clear": src = "./images/sun.png";break;
        case "Rain": src = "./images/rain.png";break;
        case "Drizzle": src = "./images/drizzle.png";break;
        case "Clouds": src = "./images/cloudy.png";break;
    }
    document.getElementById("weather-icon").src = src;



}
