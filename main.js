const fomr = document.getElementById('form').addEventListener('submit', submitForm);
const msg = document.querySelector('.msg');
const username = document.getElementById('username');

const password = document.getElementById('password');

function submitForm(e) {
  e.preventDefault();
  if (username.value == '' || password.value == '') {
    msg.style.backgroudColor = 'green';
    msg.textContent = "please fill the field";
    setTimeout(() => msg.remove(), 3000);
  } else {
    window.location = 'register.html';
  }
  // if (username == 'taijul' &&
  //   password === '1234') {
  //   window.location('register.html');
  // }
}