const box = document.querySelector('.bracket-box');

let visible = true;

setInterval(() => {
  visible = !visible;
  box.style.opacity = visible ? '1' : '0';
}, 2000);
