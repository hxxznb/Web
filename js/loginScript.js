document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;
        const user = localStorage.getItem(username);

        if (user && user === password) {
            window.location.href = 'home.html'; 
        } else {
            alert('Wrong username or password');
        }
    });
});
