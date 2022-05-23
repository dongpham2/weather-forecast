const modal = document.querySelector(".modal");
const closeModal = document.querySelectorAll(".icon-close");
const openModal = document.querySelector(".header__user");

// popup modal
openModal.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

closeModal.forEach((e) => {
  e.addEventListener("click", () => {
    modal.classList.remove("show-modal");
  });
});

// login signup

const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const subSignup = document.querySelector("#sub-signup");
const subLogin = document.querySelector("#sub-login");

subLogin.addEventListener("click", (e) => {
  e.preventDefault();
  login.classList.add("active");
  signup.classList.remove("active");
});

subSignup.addEventListener("click", (e) => {
  e.preventDefault();
  login.classList.remove("active");
  signup.classList.add("active");
});

// api
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=325808773b12fc1d3e509f8649e19d10`;
  const res = await fetch(url);
  const weather = await res.json();
  // console.log(weather);
  changeWeather(weather);
}

const locations = document.querySelectorAll(".location");
const temps = document.querySelectorAll(".temp");
const descs = document.querySelectorAll(".desc");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility");
const wind = document.querySelector(".wind");
const sea = document.querySelector(".sea");
const videos = document.querySelector("#myVideo");
const mainHeader = document.querySelector(".main__header");
function changeWeather(weather) {
  locations.forEach((location) => {
    location.textContent = weather.name + " " + weather.sys.country;
  });

  temps.forEach((temp) => {
    let tem = Math.round(weather.main.temp - 273.15);
    temp.textContent = tem;
    if (tem <= 26) {
      videos.src =
        "/images/29002959_heavy-dark-cloudy-sky-with-fluffy-clouds-natural-sky-background-weather-forecast-concept_by_grigory_bruev_preview.mp4";
    } else {
      videos.src = "/images/nang.mp4";
    }
  });

  descs.forEach((desc) => {
    desc.textContent = weather.weather[0].description;
  });

  humidity.textContent = weather.main.humidity + "%";

  visibility.textContent = weather.visibility + "m";

  wind.textContent = weather.wind.speed + "m/s";

  sea.textContent = weather.main.pressure + "m";
}

const inputCity = document.querySelector(".main__search input");
window.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    let city = inputCity.value;
    getWeather(city);
  }
});

getWeather("ha noi");
