//DOM elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus'),
  showAmPm = true;

// show weather
async function getWeather() {
  const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=ec24a5c04be8551d1c9f69689b74b55e&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  const city = data.city.name;
  const temperature = data.list[0].main.temp;
  const temperature_feels_like = data.list[0].main.feels_like;
  const humidity = data.list[0].main.humidity;
  const wind = data.list[0].wind.speed;
  console.log(data, city, temperature, temperature_feels_like, wind, humidity);
  // console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
}
getWeather();

//show time
function showTime() {
  let today = new Date(),
    // 2020, 10, 20, 00, 30
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  switch (hour) {
    case 0:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 1:
      document.body.style.backgroundImage = "url('../assets/img/night/02.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 2:
      document.body.style.backgroundImage = "url('../assets/img/night/03.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 3:
      document.body.style.backgroundImage = "url('../assets/img/night/04.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 4:
      document.body.style.backgroundImage = "url('../assets/img/night/07.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 5:
      document.body.style.backgroundImage = "url('../assets/img/night/06.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 6:
      document.body.style.backgroundImage = "url('../assets/img/morning/01.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 7:
      document.body.style.backgroundImage = "url('../assets/img/morning/02.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 8:
      document.body.style.backgroundImage = "url('../assets/img/morning/03.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 9:
      document.body.style.backgroundImage = "url('../assets/img/morning/04.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 10:
      document.body.style.backgroundImage = "url('../assets/img/morning/05.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 11:
      document.body.style.backgroundImage = "url('../assets/img/morning/06.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 12:
      document.body.style.backgroundImage = "url('../assets/img/day/01.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'aqua';
      break;
    case 13:
      document.body.style.backgroundImage = "url('../assets/img/day/02.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'white';
      break;
    case 14:
      document.body.style.backgroundImage = "url('../assets/img/day/03.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'white';
      break;
    case 15:
      document.body.style.backgroundImage = "url('../assets/img/day/04.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'white';
      break;
    case 16:
      document.body.style.backgroundImage = "url('../assets/img/day/05.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'white';
      break;
    case 17:
      document.body.style.backgroundImage = "url('../assets/img/day/06.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'white';
      break;
    case 18:
      document.body.style.backgroundImage = "url('../assets/img/evening/01.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;
    case 19:
      document.body.style.backgroundImage = "url('../assets/img/evening/02.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;

    case 20:
      document.body.style.backgroundImage = "url('../assets/img/evening/03.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;
    case 21:
      document.body.style.backgroundImage = "url('../assets/img/evening/04.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;
    case 22:
      document.body.style.backgroundImage = "url('../assets/img/evening/07.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;
    case 23:
      document.body.style.backgroundImage = "url('../assets/img/evening/06.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

//Get Name
function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
