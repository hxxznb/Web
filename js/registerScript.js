document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const newUsernameInput = document.getElementById('newUsername');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailInput = document.getElementById('email');

    const backToLoginBtn = document.getElementById('backToLoginBtn');
        backToLoginBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newUsername = newUsernameInput.value;
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const email = emailInput.value;

        if (newPassword !== confirmPassword) {
            alert('The password entered twice is inconsistent');
            return;
        }

        if (localStorage.getItem(newUsername)) {
            alert('The username already exists');
        } else {
            localStorage.setItem(newUsername, newPassword);
            localStorage.setItem('email', email);
            alert('Registration is successful, please log in');
            window.location.href = 'index.html'; 
        }

        
    });
});
