slideCard = document.querySelector('.slide__card');
let isDown = false;
let startX;
let startY;
let scrollLeft;

slideCard.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});
