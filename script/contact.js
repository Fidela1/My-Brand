const email = document.querySelector('.email');
const update = document.querySelector('.update');
email.addEventListener('input', inputEmail);

function inputEmail(e) {
  const input = e.target.value;
  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    update.textContent = 'Valid Email!';
    update.classList.add('success');
    update.classList.remove('failure');
  } else {
    update.textContent = 'email is invalid';
    update.classList.remove('success');
    update.classList.add('failure');
  }
};
var username = document.forms['form']['username'];
var message = document.forms['form']['message'];

var user_error = document.getElementById('user_error');
var mess_error = document.getElementById('mess_error');

username.addEventListener('textInput', user_verify);
message.addEventListener('textInput', mess_verify);

function validated() {
    if (username.value.length < 3) {
        username.style.border = "1px solid red";
        user_error.style.display = "block";
        username.focus();
        return false;
    }   
    if (message.value.length < 2) {
        message.style.border = "1px solid red";
        mess_error.style.display = "block";
        message.focus();
        return false;
    }   
    
}

function user_verify() {
    if (username.value.length >= 2) {
        username.style.border = "1px solid silver";
        user_error.style.display = "none";
        return true;
    }
}
function mess_verify() {
    if (message.value.length >= 1) {
        message.style.border = "1px solid silver";
        mess_error.style.display = "none";
        return true;
    }
}
