        // Search Bar Toggle Script
        const searchButton = document.getElementById('toggleSearch');
        const searchBar = document.getElementById('searchBar');

        searchButton.addEventListener('click', () => {
            searchBar.classList.toggle('hidden');
        });

        // Dark Mode Toggle Script
        const themeToggle = document.getElementById('themeToggle');

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('bg-gray-800');
            document.body.classList.toggle('text-white');
            document.body.classList.toggle('bg-gray-100');
            document.body.classList.toggle('text-gray-800');

            if (themeToggle.innerHTML.includes('fa-moon')) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });

        // Get the navigation bar
const navbar = document.getElementById('navbar');

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add an event listener for scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
//slider
$(document).ready(function () {
    // Function to set equal heights
    function setEqualHeight() {
        const cards = $('.owl-carousel .card');
        let maxHeight = 0;

        // Reset height
        cards.css('height', 'auto');

        // Find the maximum height
        cards.each(function () {
            maxHeight = Math.max(maxHeight, $(this).outerHeight());
        });

        // Set all cards to the maximum height
        cards.css('height', maxHeight + 'px');
    }

    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                slideBy: 1 // Slide one card at a time
            },
            600: {
                items: 2,
                slideBy: 1 // Slide one card at a time
            },
            1000: {
                items: 4,
                slideBy: 1 // Slide one card at a time
            }
        },
        // Call setEqualHeight after initialization and resize
        onInitialized: setEqualHeight,
        onResized: setEqualHeight
    });
});

