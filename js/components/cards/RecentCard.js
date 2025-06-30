import { ArticleCard } from './ArticleCard.js';

/**
 * Recent article card component for the homepage.
 * A specific implementation of the base ArticleCard.
 * @param {Object} article - The article data object.
 * @returns {string} HTML string for the recent card.
 */
export function RecentCard(article) {
    return ArticleCard(article, {
        className: 'recent-card',
        titleTag: 'h4',
        titleClass: 'article-title-small',
        showExcerpt: true,
        showAuthors: true,
        imageLoading: 'lazy'
    });
}
[END_FILE]