
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const validEmail = "test@bughunter.local";
    const validPassword = "Test123!";

    if (email === validEmail && password === validPassword) {
        alert("Login successful! Welcome to BugHunter Shop.");

        // Save successful demo login session
        sessionStorage.setItem("bughunterLoggedIn", "true");

        // Redirect to Products page
        window.location.href = "products.html";
    } else {
        alert("Invalid email or password.");
    }
});
