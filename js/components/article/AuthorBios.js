/**
 * Renders the author biography section at the end of an article.
 * @param {Array<Object>} writers - Array of writer data objects.
 * @returns {string} HTML string for the author bios container.
 */
export function AuthorBios(writers) {
    if (!writers || writers.length === 0) {
        return '';
    }

    const authorProfilesHTML = writers.map(writer => `
        <div class="author-profile">
            <img src="${writer.image}" alt="${writer.name}">
            <div>
                <h4>About ${writer.name}</h4>
                <p>${writer.bio || 'This author has not yet provided a bio.'}</p>
            </div>
        </div>
    `).join('<hr class="author-separator">');

    return `<div class="author-bios-container">${authorProfilesHTML}</div>`;
}
[END_FILE]