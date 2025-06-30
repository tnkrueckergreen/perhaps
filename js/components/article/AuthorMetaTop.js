import { formatAuthorNamesFull } from '../../lib/formatters.js';

/**
 * Renders the author metadata displayed above the article image.
 * @param {Array<Object>} writers - Array of writer data objects.
 * @returns {string} HTML string for the top author metadata section.
 */
export function AuthorMetaTop(writers) {
    if (!writers || writers.length === 0) return '';

    const authorAvatars = writers.map(writer => 
        `<img src="${writer.image}" alt="${writer.name}">`
    ).join('');
    
    const authorNames = formatAuthorNamesFull(writers);

    return `
        <div class="single-article-meta-top">
            <div class="avatar-stack">${authorAvatars}</div>
            <span>By ${authorNames}</span>
        </div>
    `;
}
[END_FILE]