import { SmallCard } from '../../components/cards/SmallCard.js';
import { PageHeader } from '../../components/layout/PageHeader.js';
import { Container } from '../../components/layout/Container.js';
import { Section } from '../../components/layout/Section.js';
import { renderList, renderIf } from '../../lib/template.js';

/**
 * Creates the HTML view for the search results page.
 * @param {string} query - The decoded search query.
 * @param {Array<Object>} results - The array of article results.
 * @returns {string} The complete HTML string for the page.
 */
export function createSearchResultsView(query, results) {
    const hasResults = results.length > 0;
    
    const title = hasResults
        ? `Search results for '<span class="query">${query}</span>'`
        : `No results found for '<span class="query">${query}</span>'`;
    
    const subtitle = hasResults
        ? '' 
        : 'Try searching for something else, or check out our latest articles.';
    
    const articleCards = renderList(results, SmallCard);
    
    const content = Container(
        PageHeader(title, subtitle) +
        renderIf(hasResults, `<div class="article-grid">${articleCards}</div>`)
    );

    return Section({
        className: 'page article-grid-page search-results-page',
        content
    });
}
[END_FILE]