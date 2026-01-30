const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// When mouse enters left side
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

// When mouse leaves left side
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

// When mouse enters right side
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

// When mouse leaves right side
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});