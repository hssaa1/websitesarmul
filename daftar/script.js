// auth.js
document.getElementById('registerButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a username first.');
        return;
    }

    // Generate a random code
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Display the random code in the input field
    document.getElementById('randomCode').value = randomCode;
});

document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const randomCode = document.getElementById('randomCode').value;

    if (!randomCode) {
        alert('Please generate your code first.');
        return;
    }

    // Simulate sending data to the server
    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, randomCode })
    }).then(response => {
        if (response.ok) {
            alert('User registered successfully.');
            // Clear the form
            document.getElementById('registrationForm').reset();
        } else {
            alert('Failed to register user.');
        }
    });
});
