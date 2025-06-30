/**
 * A simple container wrapper component.
 * @param {string} content - The inner HTML content to be wrapped.
 * @param {string} [className=''] - Optional additional CSS classes for the container.
 * @returns {string} HTML string for the container.
 */
export function Container(content, className = '') {
    return `
        <div class="container ${className}">
            ${content}
        </div>
    `;
}
[END_FILE]