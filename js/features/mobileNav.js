/**
 * Initializes the mobile navigation toggle and link-click behavior.
 */
export function initMobileNav() {
    const mainHeader = document.querySelector('.main-header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (!mainHeader || !mobileToggle || !mainNav) return;

    // Toggle the 'nav-open' class on the header to show/hide mobile menu
    mobileToggle.addEventListener('click', () => {
        mainHeader.classList.toggle('nav-open');
    });

    // Close the mobile menu when any link inside it is clicked
    mainNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mainHeader.classList.remove('nav-open');
        }
    });
}
[END_FILE]