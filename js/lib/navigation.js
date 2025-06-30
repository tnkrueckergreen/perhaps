/**
 * Updates the 'active-link' class on navigation links based on the current route.
 * @param {string} path - The current route path (e.g., 'about-page').
 */
export function updateActiveNavLink(path) {
    const navLinks = document.querySelectorAll('.main-nav a.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.hash.replace('#', '');
        
        // Direct match
        let isActive = (linkPath === path);
        
        // Special case: Highlight "Articles" for any category page
        if (path.startsWith('articles-page-') && linkPath === 'articles-page-all') {
            isActive = true;
        }
        
        // Special case: Highlight "Opinion" for "Editorial" page
        if (path === 'articles-page-editorial' && linkPath === 'articles-page-opinion') {
            isActive = true;
        }

        link.classList.toggle('active-link', isActive);
    });
}
[END_FILE]