/**
 * Filters a list of articles based on a category string.
 * Also determines the appropriate page title.
 * @param {Array<Object>} allArticles - The full list of articles.
 * @param {string} category - The category to filter by (e.g., 'sports', 'all').
 * @returns {{articlesToDisplay: Array<Object>, title: string}}
 */
export function filterArticlesByCategory(allArticles, category) {
    const lowerCategory = category.toLowerCase();
    let articlesToDisplay = [];
    let title = '';

    if (lowerCategory === 'all') {
        articlesToDisplay = allArticles;
        title = 'All Articles';
    } else if (lowerCategory === 'arts') {
        const cats = ['arts', 'reviews'];
        articlesToDisplay = allArticles.filter(a => cats.includes(a.category.toLowerCase()));
        title = 'Arts & Reviews';
    } else if (lowerCategory === 'opinion') {
        const cats = ['opinion', 'editorial'];
        articlesToDisplay = allArticles.filter(a => cats.includes(a.category.toLowerCase()));
        title = 'Opinion';
    } else {
        articlesToDisplay = allArticles.filter(a => a.category.toLowerCase() === lowerCategory);
        title = category.charAt(0).toUpperCase() + category.slice(1);
    }

    return { articlesToDisplay, title };
}
[END_FILE]