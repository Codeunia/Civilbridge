
function showForm() {
  document.getElementById('hero').classList.add('slide-left');
  setTimeout(() => {
    document.getElementById('formBox').classList.add('show');
    showLoginForm(); // Show login by default
  }, 600);
}

function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  const reg = document.getElementById("registerForm");
  reg.style.display = "block";
  reg.classList.add("register-slide-in");
}

function showLoginForm() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

async function submitRegister() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const password = document.getElementById("passwordReg").value.trim();

  if (!name || !email || !phone || !address || !password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5004/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, address, password })
    });

    const result = await response.json();
    alert(result.message || "Registered successfully!");
    showLoginForm();
  } catch (err) {
    console.error(err);
    alert("Registration failed: " + err.message);
  }
}

async function submitLogin() {
  const userInput = document.getElementById("Username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!userInput || !password) {
    alert("Please enter login credentials.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5004/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userInput, password })
    });

    const result = await response.json();

    if (result.message === 'Login successful') {
      alert("Login successful!");
      // Optional: window.location.href = "/dashboard.html";
    } else {
      alert(result.message || "Login failed.");
    }

  } catch (err) {
    console.error(err);
    alert("Login failed: " + err.message);
  }
}
