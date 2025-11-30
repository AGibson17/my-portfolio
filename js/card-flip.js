/* =================================================================
   CARD FLIP INTERACTION
   ================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Handle card flip interactions
     */
    function initCardFlip() {
        const workCards = document.querySelectorAll('.work-card');
        
        workCards.forEach(card => {
            // Flip card on click (but not if clicking a link or button)
            card.addEventListener('click', function(e) {
                // Don't flip if clicking the close button or CTA
                if (e.target.closest('.card-back-close') || 
                    e.target.closest('.btn') || 
                    e.target.closest('a')) {
                    return;
                }
                
                // Toggle flip state
                this.classList.toggle('flipped');
            });
            
            // Close button on back of card
            const closeBtn = card.querySelector('.card-back-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    card.classList.remove('flipped');
                });
            }
        });
    }
    
    /**
     * Handle ESC key to close flipped cards
     */
    function initEscapeKey() {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const flippedCards = document.querySelectorAll('.work-card.flipped');
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                });
            }
        });
    }
    
    // Initialize
    initCardFlip();
    initEscapeKey();
    
    console.log('Card flip initialized ✓');
});
