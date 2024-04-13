const apiKey = "add api key"
const apiUrl = 'add api url'

async function fetchingWeather(city){
    let data = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let response = await data.json()

    console.log(response)

    document.getElementById('region').innerHTML = `Weather in ${response.name}`
    document.getElementById('temp').innerHTML = `${response.main.temp}°C`
    document.getElementById('weather-info').innerHTML = `${response.weather[0].description}`
    document.getElementById('humidity').innerHTML = `Humidity: ${response.main.humidity}`
    document.getElementById('wind-speed').innerHTML = `Wind speed: ${response.wind.speed}`

}

let searchButton = document.getElementById('sbtn')

searchButton.addEventListener('click', ()=>{
    let city = document.getElementById('input').value;

    fetchingWeather(city)
    
})
