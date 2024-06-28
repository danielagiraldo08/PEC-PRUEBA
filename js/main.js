let currentIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger-icon').addEventListener('click', function() {
        var menu = document.getElementById('mobile-menu');
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });
});

function moveSlide(sliderId, direction) {
    const slider = document.querySelector(`#${sliderId} .slider`);
    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;

    let currentSlide = parseInt(slider.getAttribute('data-current-slide')) || 0;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const newTransformValue = -currentSlide * 100;
    slider.style.transform = `translateX(${newTransformValue}%)`;
    slider.setAttribute('data-current-slide', currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.slider').forEach(slider => {
        slider.setAttribute('data-current-slide', 0);
    });

    document.querySelector('.prev-2').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.next-2').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
});

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slider-2').style.transform = `translateX(${offset}%)`;
}
