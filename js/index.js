

function weatherApp(){
    const Apikey = "305179b93f8f8acf49605497c4dba9b2";
    const inputValue = document.getElementById("location").Value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${Apikey}')
    .then(response => response.ok ? response.json(): console.log("could fetch Api"))
    .then(data => {
        
        const Des = data.weather[0].description;
        const icoweather = data.weather[0].icon;

        document.getElementById("des").innerHTML = Des;
        document.getElementById("image").src = 'https://openweathermap.org/img/wn/${icoWeather}.png'

    })
}