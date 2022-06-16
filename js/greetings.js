const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const link = document.querySelector('a');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(Husername);
  greeting.innerText = `Hello ${savedUsername}`;
}

function handleLinkClick(e) {
  e.preventDefault();
}

link.addEventListener('click', handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
