function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for demo purposes
    if (username === "user" && password === "password") {
        alert('Login successful');
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('currencySection').style.display = 'block';
    } else {
        alert('Login failed. Please try again.');
    }
}

function captureCurrency() {
    // Simulate currency capture result
    const currencyResult = "Recognized: $20";

    // Display result
    document.getElementById('currencyResult').innerText = currencyResult;
}
k