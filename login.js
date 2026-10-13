document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Inputs
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Error elements
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Clear previous errors
  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Password validation
  if (password.value === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // If all valid
  if (isValid) {
    // Simulate login success (replace with backend later)
    alert("Login successful! 🎉");
    window.location.href = "dashboard.html";
  }
});
