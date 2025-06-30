import { getCombinedData } from '../api/dataService.js';
import { createSingleArticleView } from './singleArticle/view.js';

/**
 * Renders the single article page.
 * Fetches the specific article data and injects the HTML into the container.
 * @param {HTMLElement} container - The main content container element.
 * @param {string} articleId - The ID of the article to render.
 */
export async function render(container, articleId) {
    const { articles } = await getCombinedData();
    const article = articles.find(a => a.id == articleId);
    
    if (article) {
        container.innerHTML = createSingleArticleView(article);
    } else {
        container.innerHTML = `<div class="container page"><p>Article not found.</p></div>`;
    }
}
[END_FILE]