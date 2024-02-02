let screen = document.querySelector('#screen');
let buttons = document.querySelectorAll('.inputValue');

screen.style.color = '#d80f89';


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const inputValue = e.target.textContent;
        screen.textContent += inputValue;
    });
});
