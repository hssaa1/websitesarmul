// login.js
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate sending data to the server
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(response => {
        if (response.ok) {
            alert('Login successful.');
            // Redirect to another page or perform some action upon successful login
        } else {
            alert('Invalid username or password.');
        }
    });
});
  