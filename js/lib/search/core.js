import Fuse from 'fuse.js';
import { getCombinedData } from '../../api/dataService.js';
import { FUSE_OPTIONS } from './config.js';
import { stripHtml } from './utils.js';

let fuseInstance = null;

/**
 * Initializes the search index. Fetches data, processes it, and creates a Fuse instance.
 * This is designed to run only once.
 */
export async function initializeSearch() {
    if (fuseInstance) return;

    const { articles } = await getCombinedData();
    
    const articlesForSearch = articles.map(article => ({
        ...article,
        textContent: stripHtml(article.content) // Pre-process for better searching
    }));

    fuseInstance = new Fuse(articlesForSearch, FUSE_OPTIONS);
}

/**
 * Performs a search against the initialized Fuse index.
 * @param {string} query - The search term.
 * @returns {Promise<Array>} A promise resolving to an array of result items.
 */
export async function performSearch(query) {
    // Ensure initialization is complete before searching
    await initializeSearch();
    
    const results = fuseInstance.search(query);
    return results.map(result => result.item);
}
[END_FILE]