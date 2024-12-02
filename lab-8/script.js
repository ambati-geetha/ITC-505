// Function to validate form fields
function validateForm() {
  // Get the form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check if fields are empty
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("All fields must be filled out.");
      return false;
  }

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
  }

  // XSS Protection: sanitize inputs
  document.getElementById("firstName").value = sanitizeInput(firstName);
  document.getElementById("lastName").value = sanitizeInput(lastName);
  document.getElementById("email").value = sanitizeInput(email);
  document.getElementById("password").value = sanitizeInput(password);
  document.getElementById("confirmPassword").value = sanitizeInput(confirmPassword);

  return true;  // Allow form submission
}

// Function to sanitize input (XSS Prevention)
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;  // Returns sanitized input
}
