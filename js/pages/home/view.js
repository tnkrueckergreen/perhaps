import { FeaturedCard } from '../../components/cards/FeaturedCard.js';
import { RecentCard } from '../../components/cards/RecentCard.js';
import { renderList } from '../../lib/template.js';

/**
 * Creates the HTML view for the home page.
 * @param {Array<Object>} featuredArticles - Array of featured articles.
 * @param {Array<Object>} recentArticles - Array of recent articles.
 * @returns {string} The complete HTML string for the page.
 */
export function createHomeView(featuredArticles, recentArticles) {
    const featuredCards = renderList(featuredArticles, FeaturedCard);
    const recentCards = renderList(recentArticles, RecentCard);

    return `
        <div class="page" id="home-page">
            <div class="container">
                <section class="welcome-section">
                    <h1>News, features, and perspectives from the students of Andover High.</h1>
                </section>
                <hr class="main-divider">
            </div>
            <main class="container content-grid">
                <div class="featured-column">
                    <h2 class="section-title">Featured</h2>
                    <div class="featured-articles-wrapper">${featuredCards}</div>
                </div>
                <div class="recent-column">
                    <h2 class="section-title">Recent</h2>
                    <div class="recent-grid">${recentCards}</div>
                </div>
            </main>
        </div>
    `;
}
[END_FILE]