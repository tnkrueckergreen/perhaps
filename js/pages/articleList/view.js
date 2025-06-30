import { SmallCard } from '../../components/cards/SmallCard.js';
import { PageHeader } from '../../components/layout/PageHeader.js';
import { Container } from '../../components/layout/Container.js';
import { Section } from '../../components/layout/Section.js';
import { renderList } from '../../lib/template.js';

/**
 * Creates the HTML view for the article list page.
 * @param {string} title - The title of the page.
 * @param {Array<Object>} articles - The articles to display.
 * @returns {string} The complete HTML string for the page.
 */
export function createArticleListPageView(title, articles) {
    const articleCards = renderList(articles, SmallCard);

    const content = Container(
        PageHeader(title) +
        `<div class="article-grid">${articleCards}</div>`
    );

    return Section({
        className: 'page article-grid-page',
        content: content
    });
}
[END_FILE]