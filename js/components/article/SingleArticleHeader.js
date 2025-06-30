/**
 * Renders the main header for a single article page.
 * @param {Object} article - The article data object.
 * @returns {string} HTML string for the single article header.
 */
export function SingleArticleHeader(article) {
    return `
        <div class="article-meta-bar">
            <span class="category">${article.category}</span>
            <span class="date">${article.date}</span>
        </div>

        <header class="single-article-header">
            <h1>${article.title}</h1>
            <p class="single-article-description">${article.description}</p>
        </header>
    `;
}
[END_FILE]