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
        $(document).ready(function () {
            // Initialize Bootstrap carousel
            $('#fullPageCarousel').carousel({
                interval: 3000 // Slide every 3 seconds
            });
            
            // Initialize Owl Carousel
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });
        });
        