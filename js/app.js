import { initRouter } from './router.js';
import { initModal } from './lib/modal.js';
import { initHeaderSearch } from './lib/headerSearch.js';
import { initFooterSubscription } from './features/footerSubscription.js';
import { initDownloadHandler } from './handlers/downloadHandler.js';
import { initMobileNav } from './features/mobileNav.js';
import { initGlobalKeydown } from './handlers/globalKeydown.js';

/**
 * Main application entry point.
 * Initializes all primary features and the router.
 */
function init() {
    // Initialize features that return a "close" function
    const closeModal = initModal();
    const closeSearch = initHeaderSearch();
    
    // Initialize other features
    initFooterSubscription();
    initDownloadHandler();
    initMobileNav();
    
    // Initialize global event listeners
    initGlobalKeydown({ closeModal, closeSearch });
    
    // Start the router
    initRouter();
}

document.addEventListener('DOMContentLoaded', init);
[END_FILE]