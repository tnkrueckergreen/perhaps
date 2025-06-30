/**
 * Renders a standard page header with an optional subtitle.
 * @param {string} title - The main page title (can include HTML).
 * @param {string} [subtitle=''] - The optional subtitle text.
 * @returns {string} HTML string for the page header.
 */
export function PageHeader(title, subtitle = '') {
    return `
        <header class="page-header">
            <h1>${title}</h1>
            ${subtitle ? `<p>${subtitle}</p>` : ''}
        </header>
    `;
}
[END_FILE]