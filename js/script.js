//DOM elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus'),
  showAmPm = true;

//show time
function showTime() {
  let today = new Date(2020, 10, 20, 0, 30),
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
  let today = new Date(2020, 10, 20, 33, 30),
    hour = today.getHours();

  switch (hour) {
    case 0:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 1:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 2:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 3:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 4:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 5:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 6:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 7:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 8:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 9:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 10:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 11:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 12:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 13:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 14:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 15:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 16:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 17:
      document.body.style.backgroundImage = "url('../assets/img/day/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 18:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 19:
      document.body.style.backgroundImage = "url(../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 20:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 21:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 22:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
      break;
    case 23:
      document.body.style.backgroundImage = "url('../assets/img/night/01.jpg')";
      greeting.textContent = 'Good Evening, ';
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
  if (localStorage.getItem('name') === null) {
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
