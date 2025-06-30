import { ArticleCard } from './ArticleCard.js';

/**
 * Featured article card component for the homepage.
 * It's a specific implementation of the base ArticleCard.
 * @param {Object} article - The article data object.
 * @returns {string} HTML string for the featured card.
 */
export function FeaturedCard(article) {
    return ArticleCard(article, {
        className: 'featured-card',
        titleTag: 'h3',
        titleClass: 'article-title-large',
        showExcerpt: true,
        showAuthors: true,
        imageLoading: 'eager' // Eager load for above-the-fold content
    });
}
[END_FILE]