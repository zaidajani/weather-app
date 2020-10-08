const place_name = document.getElementById("place_name");
const temperature = document.getElementById("temperature");
const environment = document.getElementById('environment');
const img = document.getElementById('image');
const time = new Date();
const card = document.getElementById('card');

function getLocationAndChangeContent() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = `${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=50d7db2c304ac0ca996e479a25b35713&units=metric`;
    console.log(apiUrl);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        place_name.innerText = data.name;
        temperature.innerText = data.main.temp + "°C";
        environment.innerText = data.weather[0].main;
        if(data.weather[0].main == 'Rain' || data.weather[0].main == 'Mist' || data.weather[0].main == 'Thunderstorm') {
          document.getElementById("image").src = "undraw_Raining_re_4b55.svg";
        } else if(data.weather[0].main == 'Clouds' || data.weather[0].main == 'Haze') {
          document.getElementById("image").src = "undraw_Lighthouse_frb8.svg";
        } else {
          document.getElementById("image").src = "undraw_air_support_wy1q.svg";
        }
      }); 
  });
}

getLocationAndChangeContent();
