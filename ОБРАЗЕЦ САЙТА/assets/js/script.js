// Пример скрипта для анимации навигационного меню
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if(navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('is-active');
        });
    }
});

// Пример скрипта для валидации формы
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#contact-form');

    if(form) {
        form.addEventListener('submit', function(event) {
            const emailInput = document.querySelector('#email');
            const emailValue = emailInput.value;

            if(!isValidEmail(emailValue)) {
                event.preventDefault();
                alert('Пожалуйста, введите корректный email адрес.');
            }
        });
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
});
