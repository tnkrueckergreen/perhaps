import { getCombinedData } from '../api/dataService.js';
import { createHomeView } from './home/view.js';

/**
 * Renders the Home page.
 * Fetches article data, filters for featured/recent, and injects the view.
 * @param {HTMLElement} container - The main content container element.
 */
export async function render(container) {
    const { articles } = await getCombinedData();
    
    const featuredArticles = articles.filter(a => a.display === 'featured').slice(0, 2);
    const recentArticles = articles.filter(a => a.display === 'recent').slice(0, 6);
    
    container.innerHTML = createHomeView(featuredArticles, recentArticles);
}
[END_FILE]