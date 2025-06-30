import { getCombinedData } from '../api/dataService.js';
import { filterArticlesByCategory } from './articleList/logic.js';
import { createArticleListPageView } from './articleList/view.js';

/**
 * Renders the article list page for a given category.
 * @param {HTMLElement} container - The main content container element.
 * @param {string} [category='all'] - The category to filter by.
 */
export async function render(container, category = 'all') {
    const { articles } = await getCombinedData();
    const { articlesToDisplay, title } = filterArticlesByCategory(articles, category);
    
    container.innerHTML = createArticleListPageView(title, articlesToDisplay);
}
[END_FILE]