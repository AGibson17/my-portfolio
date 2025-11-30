/* =================================================================
   MAIN INTERACTIONS - Smooth Scrolling & Animations
   ================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Smooth scroll to anchor links
     */
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Don't prevent default if it's just "#"
                if (href === '#') return;
                
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navBarHeight = 80; // Adjust based on your nav height
                    const targetPosition = targetElement.offsetTop - navBarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    /**
     * Intersection Observer for fade-in animations
     */
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Optionally unobserve after animating
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all cards and sections
        const animatedElements = document.querySelectorAll('.work-card, .alpha-card, .about-content');
        animatedElements.forEach(el => observer.observe(el));
    }
    
    /**
     * Add active state to navigation based on scroll position
     */
    function initActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a, .fab-menu a');
        
        function updateActiveNav() {
            const scrollPosition = window.scrollY + 150;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveNav, { passive: true });
        updateActiveNav(); // Run on load
    }
    
    /**
     * Handle external links (open in new tab)
     */
    function initExternalLinks() {
        const externalLinks = document.querySelectorAll('a[href^="http"]');
        
        externalLinks.forEach(link => {
            // Don't modify if it's an internal link to your domain
            if (!link.href.includes(window.location.hostname)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }
    
    /**
     * Console easter egg (optional fun touch)
     */
    function initConsoleMessage() {
        console.log('%cHey there! 👋', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
        console.log('%cLooks like you\'re checking out the code. Nice!', 'font-size: 14px; color: #cbd5e1;');
        console.log('%cFeel free to reach out if you want to chat about learning design or development.', 'font-size: 14px; color: #cbd5e1;');
        console.log('%cBuilt with HTML, CSS, and vanilla JavaScript. No frameworks needed. 🚀', 'font-size: 12px; color: #94a3b8; font-style: italic;');
    }
    
    // Initialize all features
    initSmoothScroll();
    initScrollAnimations();
    initActiveNavigation();
    initExternalLinks();
    initConsoleMessage();
    
    console.log('Portfolio initialized ✓');
});
