function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate first name and last name to ensure they do not contain numbers
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(firstName)) {
        alert("First Name must not contain numbers or special characters.");
        return false;
    }
    if (!namePattern.test(lastName)) {
        alert("Last Name must not contain numbers or special characters.");
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate password: should contain at least one lowercase, one uppercase, one number, and one special character
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false;
    }

    // Option 1: Show success message on the same page
    document.getElementById('formContainer').classList.add('hidden');
    document.getElementById('successContainer').classList.remove('hidden');

    // Option 2: Redirect to a new success page (uncomment this line if you prefer a redirect)
    // window.location.href = "success.html";

    return false; // Prevent actual form submission for this demo
}
