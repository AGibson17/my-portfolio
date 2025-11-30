/**
 * Alpha Modal Handler
 * Manages the modals for Alpha Showcase projects
 */

(function() {
    'use strict';
    
    const overlay = document.getElementById('alphaModalOverlay');
    if (!overlay) return;
    
    const modals = overlay.querySelectorAll('.alpha-modal');
    const alphaCards = document.querySelectorAll('.alpha-card[data-alpha-modal]');
    
    /**
     * Open a specific modal
     */
    function openModal(modalId) {
        // Hide all modals first
        modals.forEach(modal => modal.classList.remove('active'));
        
        // Show overlay
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Show the target modal
        const targetModal = document.getElementById(`modal-${modalId}`);
        if (targetModal) {
            // Small delay for animation sequencing
            setTimeout(() => {
                targetModal.classList.add('active');
            }, 50);
        }
    }
    
    /**
     * Close all modals
     */
    function closeModal() {
        modals.forEach(modal => modal.classList.remove('active'));
        
        // Delay hiding overlay for animation
        setTimeout(() => {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }, 150);
    }
    
    // Click handlers for alpha cards
    alphaCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking a link inside the card
            if (e.target.closest('a')) return;
            
            const modalId = card.getAttribute('data-alpha-modal');
            if (modalId) {
                openModal(modalId);
            }
        });
    });
    
    // Click handlers for "Learn More" buttons
    document.querySelectorAll('.alpha-modal-trigger').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click from also firing
            const card = button.closest('.alpha-card');
            const modalId = card?.getAttribute('data-alpha-modal');
            if (modalId) {
                openModal(modalId);
            }
        });
    });
    
    // Close button handlers
    overlay.querySelectorAll('.alpha-modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal();
        });
    });
    
    // Click overlay to close (but not if clicking inside modal)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeModal();
        }
    });
    
})();
