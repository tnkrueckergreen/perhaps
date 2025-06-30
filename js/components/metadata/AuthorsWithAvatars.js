import { formatAuthorNamesSummary } from '../../lib/formatters.js';

/**
 * Renders author display with an avatar stack and names.
 * @param {Array} writers - Array of writer objects.
 * @param {Object} options - Display options.
 * @returns {string} HTML string for authors with avatars.
 */
export function AuthorsWithAvatars(writers, { size = 'large', className = 'author-meta' }) {
    const maxAvatars = 3;
    const visibleWriters = writers.slice(0, maxAvatars);
    const remainingCount = writers.length - maxAvatars;

    const avatars = visibleWriters.map(writer => 
        `<img src="${writer.image}" alt="${writer.name}" title="${writer.name}">`
    ).join('');

    const moreAvatar = remainingCount > 0 
        ? `<div class="avatar-more">+${remainingCount}</div>` 
        : '';

    const names = formatAuthorNamesSummary(writers);

    return `
        <div class="${className} ${size}">
            <div class="avatar-stack">
                ${avatars}
                ${moreAvatar}
            </div>
            <span>By ${names}</span>
        </div>
    `;
}
[END_FILE]