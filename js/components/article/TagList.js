/**
 * Renders the list of tags for an article.
 * Each tag is a link to a search for that tag.
 * @param {Array<string>} tags - Array of tag strings.
 * @returns {string} HTML string for the tag list.
 */
export function TagList(tags) {
    if (!tags || tags.length === 0) return '';
    
    const tagItems = tags.map(tag => `
        <a href="#search/${encodeURIComponent(tag)}" class="tag-item">${tag}</a>
    `).join('');

    return `<div class="tag-list">${tagItems}</div>`;
}
[END_FILE]