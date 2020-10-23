//DOM elements
const time = document.getElementById('time'),
  dataInfo = document.getElementById('data'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus'),
  showAmPm = true;

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
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

// show weather
async function getWeather() {
  let promise = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=0e4043b05d572b6ae940f8ae8e46eac8&units=metric`,
  );
  promise
    .then((response) => response.json())
    .then((weatherData) => {
      this.configureWeather(weatherData);
      this.setWeather(weatherData);
      this.focusHandler();
    })
    .catch(() => {
      let error = document.createElement('span');
      error.classList.add('error');
      error.textContent = 'Такого города не существует!';
      momentumObject.classes.headerWeather.appendChild(error);
      this.hideError();
    });
}

function configureWeather(weatherData) {
  console.log(weatherData);
  weatherIcon.className = 'weather-icon owf';
  city.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
  temp.innerHTML = `${weatherData.main.temp.toFixed(0)}<span>°c</span>`;
  weatherIcon.classList.add(`owf-${weatherData.weather[0].id}`);
  weatherDesc.textContent = weatherData.weather[0].description;
  wind.textContent = weatherData.wind.speed + 'м/c';
  humidityInfo.textContent = weatherData.main.humidity + '%';
}

function citySearching() {
  searchTown.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
      this.getWeatherData(momentumObject.classes.searchTown.value);
    }
  });
}

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
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 1:
      document.body.style.backgroundImage = "url('../assets/img/02n.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 2:
      document.body.style.backgroundImage = "url('../assets/img/03n.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 3:
      document.body.style.backgroundImage = "url('../assets/img/04n.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 4:
      document.body.style.backgroundImage = "url('../assets/img/06n.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 5:
      document.body.style.backgroundImage = "url('../assets/img/07n.jpg')";
      greeting.textContent = 'Good Night !, ';
      document.body.style.color = 'white';
      break;
    case 6:
      document.body.style.backgroundImage = "url('../assets/img/01m.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 7:
      document.body.style.backgroundImage = "url('../assets/img/morning/02m.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 8:
      document.body.style.backgroundImage = "url('../assets/img/morning/03m.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 9:
      document.body.style.backgroundImage = "url('../assets/img/morning/04m.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 10:
      document.body.style.backgroundImage = "url('../assets/img/morning/05m.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 11:
      document.body.style.backgroundImage = "url('../assets/img/morning/06m.jpg')";
      greeting.textContent = 'Good Morning !, ';
      document.body.style.color = 'aqua';
      break;
    case 12:
      document.body.style.backgroundImage = "url('../assets/img/day/01d.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'aqua';
      break;
    case 13:
      document.body.style.backgroundImage = "url('../assets/img/day/02d.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'white';
      break;
    case 14:
      document.body.style.backgroundImage = "url('../assets/img/day/03d.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'white';
      break;
    case 15:
      document.body.style.backgroundImage = "url('../assets/img/day/04d.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'white';
      break;
    case 16:
      document.body.style.backgroundImage = "url('../assets/img/day/05d.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'white';
      break;
    case 17:
      document.body.style.backgroundImage = "url('../assets/img/day/06d.jpg')";
      greeting.textContent = 'Good Afternoon !, ';
      document.body.style.color = 'white';
      break;
    case 18:
      document.body.style.backgroundImage = "url('../assets/img/evening/01e.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;
    case 19:
      document.body.style.backgroundImage = "url('../assets/img/evening/02e.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;

    case 20:
      document.body.style.backgroundImage = "url('../assets/img/03e.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;
    case 21:
      document.body.style.backgroundImage = "url('../assets/img/04e.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;
    case 22:
      document.body.style.backgroundImage = "url('../assets/img/06e.jpg')";
      greeting.textContent = 'Good Evening !, ';
      document.body.style.color = 'white';
      break;
    case 23:
      document.body.style.backgroundImage = "url('../assets/img/07e.jpg')";
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

function handlerFocusContent() {
  name.addEventListener('click', () => {
    name.textContent = '';
  });
  focus.addEventListener('click', () => {
    focus.textContent = '';
  });
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
handlerFocusContent();
getQuote();
getWeather();
citySearching();
