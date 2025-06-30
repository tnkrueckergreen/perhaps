const footerCTA = document.getElementById('footer-cta');

/**
 * Hides or shows the main footer call-to-action banner
 * based on the current page route.
 * @param {string} currentPath - The current route's path.
 */
export function handleFooterVisibility(currentPath) {
    if (!footerCTA) return;
    
    const pagesToHideFooterOn = ['subscribe', 'contact'];
    const shouldHide = pagesToHideFooterOn.includes(currentPath);
    
    footerCTA.classList.toggle('hidden', shouldHide);
}
[END_FILE]