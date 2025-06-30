import { ArticleCard } from './ArticleCard.js';

/**
 * Small article card component for lists and search results.
 * A specific implementation of the base ArticleCard.
 * @param {Object} article - The article data object.
 * @returns {string} HTML string for the small card.
 */
export function SmallCard(article) {
    return ArticleCard(article, {
        className: 'article-card-small',
        titleTag: 'h4',
        titleClass: 'article-title-small',
        showExcerpt: true,
        showAuthors: true,
        imageLoading: 'lazy'
    });
}
[END_FILE]