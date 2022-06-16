const clock = document.querySelector('#clock');

clock.innerText = 'lalalal';

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if (hours > 12) {
    clock.innerText = `${String(hours - 12).padStart(2, '0')} : ${String(
      minutes
    ).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
  } else {
    clock.innerText = `${String(hours).padStart(2, '0')} : ${String(
      minutes
    ).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
  }
}
getClock();
setInterval(getClock, 1000);
