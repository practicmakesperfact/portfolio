class ImageSlider {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.sliderContainer = this.container.querySelector('.slider-container');
        this.slider = this.container.querySelector('.slider');
        this.slides = this.container.querySelectorAll('.slide');
        this.dots = this.container.querySelectorAll('.slider-dot');
        this.prevButton = this.container.querySelector('.prev-button');
        this.nextButton = this.container.querySelector('.next-button');
        
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        
        this.init();
    }

    init() {
        // Add event listeners
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());
        
        // Add dot click events
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Optional: Auto play
        this.startAutoPlay();
    }

    updateSlider() {
        // Update slider position
        this.slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slideCount;
        this.updateSlider();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.updateSlider();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
    }

    startAutoPlay() {
        setInterval(() => this.nextSlide(), 5000); // Change slide every 5 seconds
    }
}
