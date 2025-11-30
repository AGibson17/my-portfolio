/* =================================================================
   NAVIGATION - Tag Nav Transition on Scroll
   ================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    const navBar = document.querySelector('.nav-bar');
    const tagNav = document.querySelector('.tag-nav');
    const tagButton = document.querySelector('.tag-nav-button');
    const tagMenu = document.querySelector('.tag-nav-menu');
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    // Scroll threshold for transition (in pixels)
    const SCROLL_THRESHOLD = 100;
    
    /**
     * Handle scroll events with requestAnimationFrame for performance
     */
    function handleScroll() {
        lastScrollY = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateNavigation();
                ticking = false;
            });
            
            ticking = true;
        }
    }
    
    /**
     * Update navigation visibility based on scroll position
     */
    function updateNavigation() {
        if (lastScrollY > SCROLL_THRESHOLD) {
            // User has scrolled down past threshold
            navBar.classList.add('hidden');
            tagNav.classList.add('visible');
        } else {
            // User is at top of page
            navBar.classList.remove('hidden');
            tagNav.classList.remove('visible');
            // Close tag menu if open
            tagNav.classList.remove('active');
        }
    }
    
    /**
     * Toggle tag menu open/closed
     */
    function toggleTagMenu() {
        tagNav.classList.toggle('active');
    }
    
    /**
     * Close tag menu when clicking a link
     */
    function closeTagMenu() {
        tagNav.classList.remove('active');
    }
    
    /**
     * Close tag menu when clicking outside
     */
    function handleClickOutside(event) {
        if (!tagNav.contains(event.target)) {
            tagNav.classList.remove('active');
        }
    }
    
    // Event Listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    tagButton.addEventListener('click', toggleTagMenu);
    
    // Close menu when clicking a link
    const tagLinks = tagMenu.querySelectorAll('a');
    tagLinks.forEach(link => {
        link.addEventListener('click', closeTagMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', handleClickOutside);
    
    // Initialize on page load
    updateNavigation();
});
