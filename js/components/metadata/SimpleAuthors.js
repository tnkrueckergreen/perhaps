import { formatAuthorNamesSummary, formatAuthorNamesFull } from '../../lib/formatters.js';

/**
 * Renders a simple, text-only author display.
 * @param {Array} writers - Array of writer objects.
 * @param {Object} options - Display options.
 * @returns {string} HTML string for the simple author text.
 */
export function SimpleAuthors(writers, { size = 'large', fullNames = false, className = 'author-meta' }) {
    const formattedNames = fullNames 
        ? formatAuthorNamesFull(writers) 
        : formatAuthorNamesSummary(writers);

    return `<p class="${className} ${className}-${size}">By ${formattedNames}</p>`;
}
[END_FILE]