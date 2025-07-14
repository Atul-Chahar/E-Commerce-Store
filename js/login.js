const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loginSubmitBtn = document.getElementById('login-submit');
const registerSubmitBtn = document.getElementById('register-submit');
const socialBtns = document.querySelectorAll('.social-login');

// Toggle between login/register UI (animation)
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Redirect to homepage when Login is clicked
loginSubmitBtn.addEventListener('click', () => {
    window.location.href = '../index.html'; // Adjust path if needed
});

// Redirect to homepage when Register is clicked
registerSubmitBtn.addEventListener('click', () => {
    window.location.href = '../index.html'; // Adjust path if needed
});

// Redirect when any social icon is clicked
socialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        window.location.href = '../index.html';
    });
});
