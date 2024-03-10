// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Assuming you have a backend endpoint for login
    fetch('https://yourbackend.com/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 200) {
            // Redirect to another page upon successful login
            window.location.href = 'dashboard.html';
        } else {
            alert('Login failed. Please try again.');
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Assuming you have a backend endpoint for registration
    fetch('https://yourbackend.com/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 200) {
            alert('Registration successful. You can now login.');
        } else {
            alert('Registration failed. Please try again.');
        }
    })
    .catch(error => console.error('Error:', error));
});
