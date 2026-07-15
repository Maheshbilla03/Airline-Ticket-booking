// Buttons
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

const switchSignup = document.querySelector(".switchSignup");
const switchLogin = document.querySelector(".switchLogin");

// Forms
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Show Signup Form
signupBtn.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
});

// Show Login Form
loginBtn.addEventListener("click", () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// Switch to Signup
switchSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
});

// Switch to Login
switchLogin.addEventListener("click", () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// Signup Form Submit
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account Created Successfully!");

    signupForm.reset();

    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// Login Form Submit
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        alert("Login Successful!");

        // Open Dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong Email or Password");
    }
});