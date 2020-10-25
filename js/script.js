//DOM elements
const time = document.getElementById('time'),
  dataInfo = document.getElementById('data'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus'),
  city = document.getElementById('city'),
  showAmPm = true;

// show weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=ec24a5c04be8551d1c9f69689b74b55e&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
//show time
function showTime() {
  let days = ['Sunday', 'Monday', 'Tue', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'January',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    today = new Date(),
    day = today.getDay(),
    month = today.getMonth(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  dataInfo.innerHTML = `<span>${days[day]}</span>, <span class='day'>${day}</span> <span class='months'>${months[month]}</span>`;
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

function getQuote() {
  let url = 'https://favqs.com/api/qotd',
    quoteAuthor = document.getElementById('author'),
    quoteText = document.getElementById('text');
  fetch(url)
    .then((response) => response.json())
    .then((quoteData) => {
      quoteText.textContent = ` \"${quoteData.quote.body}\"(c)`;
      quoteAuthor.textContent = quoteData.quote.author;
    });
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
      document.body.style.backgroundImage = "url('../assets/img/01n.jpg')";
      greeting.textContent = 'Good Night ! ';
      document.body.style.color = 'white';
      break;
    case 1:
      document.body.style.backgroundImage = "url('../assets/img/02n.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 2:
      document.body.style.backgroundImage = "url('../assets/img/03n.jpg')";
      greeting.textContent = 'Good Night ! ';
      document.body.style.color = 'white';
      break;
    case 3:
      document.body.style.backgroundImage = "url('../assets/img/04n.jpg')";
      greeting.textContent = 'Good Night ! ';
      document.body.style.color = 'white';
      break;
    case 4:
      document.body.style.backgroundImage = "url('../assets/img/06n.jpg')";
      greeting.textContent = 'Good Night ! ';
      document.body.style.color = 'white';
      break;
    case 5:
      document.body.style.backgroundImage = "url('../assets/img/07n.jpg')";
      greeting.textContent = 'Good Night ! ';
      document.body.style.color = 'wh';
      break;
    case 6:
      document.body.style.backgroundImage = "url('../assets/img/01m.jpg')";
      greeting.textContent = 'Good Morning ! ';
      document.body.style.color = 'aqua';
      break;
    case 7:
      document.body.style.backgroundImage = "url('../assets/img/02m.jpg')";
      greeting.textContent = 'Good Morning ! ';
      document.body.style.color = 'aqua';
      break;
    case 8:
      document.body.style.backgroundImage = "url('../assets/img/03m.jpg')";
      greeting.textContent = 'Good Morning ! ';
      document.body.style.color = 'aqua';
      break;
    case 9:
      document.body.style.backgroundImage = "url('../assets/img/04m.jpg')";
      greeting.textContent = 'Good Morning ! ';
      document.body.style.color = 'aqua';
      break;
    case 10:
      document.body.style.backgroundImage = "url('../assets/img/05m.jpg')";
      greeting.textContent = 'Good Morning ! ';
      document.body.style.color = 'aqua';
      break;
    case 11:
      document.body.style.backgroundImage = "url('../assets/img/06m.jpg')";
      greeting.textContent = 'Good Morning ! ';
      document.body.style.color = 'aqua';
      break;
    case 12:
      document.body.style.backgroundImage = "url('../assets/img/01d.jpg')";
      greeting.textContent = 'Good Afternoon ! ';
      document.body.style.color = 'aqua';
      break;
    case 13:
      document.body.style.backgroundImage = "url('../assets/img/02d.jpg')";
      greeting.textContent = 'Good Afternoon ! ';
      document.body.style.color = 'white';
      break;
    case 14:
      document.body.style.backgroundImage = "url('../assets/img/03d.jpg')";
      greeting.textContent = 'Good Afternoon ! ';
      document.body.style.color = 'white';
      break;
    case 15:
      document.body.style.backgroundImage = "url('../assets/img/04d.jpg')";
      greeting.textContent = 'Good Afternoon ! ';
      document.body.style.color = 'white';
      break;
    case 16:
      document.body.style.backgroundImage = "url('../assets/img/05d.jpg')";
      greeting.textContent = 'Good Afternoon ! ';
      document.body.style.color = 'white';
      break;
    case 17:
      document.body.style.backgroundImage = "url('../assets/img/06d.jpg')";
      greeting.textContent = 'Good Afternoon ! ';
      document.body.style.color = 'white';
      break;
    case 18:
      document.body.style.backgroundImage = "url('../assets/img/01e.jpg')";
      greeting.textContent = 'Good Evening ! ';
      document.body.style.color = 'white';
      break;
    case 19:
      document.body.style.backgroundImage = "url('../assets/img/02e.jpg')";
      greeting.textContent = 'Good Evening ! ';
      document.body.style.color = 'white';
      break;

    case 20:
      document.body.style.backgroundImage = "url('../assets/03e.jpg')";
      greeting.textContent = 'Good Evening ! ';
      document.body.style.color = 'white';
      break;
    case 21:
      document.body.style.backgroundImage = "url('../assets/04e.jpg')";
      greeting.textContent = 'Good Evening ! ';
      document.body.style.color = 'white';
      break;
    case 22:
      document.body.style.backgroundImage = "url('../assets/img/06e.jpg')";
      greeting.textContent = 'Good Evening ! ';
      document.body.style.color = 'white';
      break;
    case 23:
      document.body.style.backgroundImage = "url('../assets/img/07e.jpg')";
      greeting.textContent = 'Good Evening ! ';
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
// Set the City
function setTheCity(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('city', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('city', e.target.innerText);
  }
}

//Get Name
function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') == '') {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null || localStorage.getItem('focus') == '') {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}
// Get the City
function getTheCity() {
  if (localStorage.getItem('city') === null || localStorage.getItem('city') == '') {
    city.textContent = '[Enter the City]';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

function handlerFocusContent() {
  name.addEventListener('click', () => {
    name.textContent = '';
  });
  focus.addEventListener('click', () => {
    focus.textContent = '';
  });
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);
// refresh button
const base = '../assets/img/';
const images = [
  '01n.jpg',
  '02n.jpg',
  '03n.jpg',
  '04n.jpg',
  '06n.jpg',
  '07n.jpg',
  '01m.jpg',
  '02m.jpg',
  '03m.jpg',
  '04m.jpg',
  '05m.jpg',
  '06m.jpg',
  '01d.jpg',
  '02d.jpg',
  '03d.jpg',
  '04d.jpg',
  '05d.jpg',
  '06d.jpg',
  '01e.jpg',
  '02e.jpg',
  '03e.jpg',
  '04e.jpg',
  '06e.jpg',
  '07e.jpg',
];
let i = 0;

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}
function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function () {
    btn.disabled = false;
  }, 1000);
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
city.addEventListener('keypress', setTheCity);
city.addEventListener('blur', setTheCity);

// Run
showTime();
setBgGreet();
getName();
getFocus();
getTheCity();
handlerFocusContent();
getQuote();
getWeather();
