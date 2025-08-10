function showLoginForm() {
  document.querySelector('.forms-container').style.transform = 'translateX(0%)';
}

function showRegisterForm() {
  document.querySelector('.forms-container').style.transform = 'translateX(-50%)';
}

function submitLogin() {
  alert("Login Successful!");
  window.location.href = "dashboard.html"; // Redirect after login
}

function submitRegister() {
  alert("Signup Successful!");
  window.location.href = "dashboard.html"; // Redirect after signup
}
