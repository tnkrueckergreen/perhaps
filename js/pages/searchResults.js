import { performSearch } from '../lib/search.js';
import { createSearchResultsView } from './searchResults/view.js';

/**
 * Renders the search results page.
 * @param {HTMLElement} container - The main content container element.
 * @param {string} query - The URL-encoded search query.
 */
export async function render(container, query) {
    const decodedQuery = decodeURIComponent(query || '');
    const results = decodedQuery ? await performSearch(decodedQuery) : [];
    
    container.innerHTML = createSearchResultsView(decodedQuery, results);
}
[END_FILE]