document.addEventListener('DOMContentLoaded', function() {
    const email = localStorage.getItem('email');

    document.getElementById('userEmail').textContent = email;
    document.getElementById('displayEmail').textContent = email;
    
});