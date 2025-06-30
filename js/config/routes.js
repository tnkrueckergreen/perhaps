import { render as renderHome } from '../pages/home.js';
import { render as renderAbout } from '../pages/about.js';
import { render as renderContact } from '../pages/contact.js';
import { render as renderArticleList } from '../pages/articleList.js';
import { render as renderSingleArticle } from '../pages/singleArticle.js';
import { render as renderIssues } from '../pages/issues.js';
import { render as renderSearchResults } from '../pages/searchResults.js';
import { render as renderSubscribe } from '../pages/subscribe.js';

const mainContent = document.getElementById('main-content');

/**
 * Defines the application's routes, mapping a path to a render function.
 */
export const routes = {
    'home-page': () => renderHome(mainContent),
    'about-page': () => renderAbout(mainContent),
    'contact': () => renderContact(mainContent),
    'articles-page-all': () => renderArticleList(mainContent, 'all'),
    'articles-page-community': () => renderArticleList(mainContent, 'community'),
    'articles-page-sports': () => renderArticleList(mainContent, 'sports'),
    'articles-page-arts': () => renderArticleList(mainContent, 'arts'),
    'articles-page-opinion': () => renderArticleList(mainContent, 'opinion'),
    'articles-page-editorial': () => renderArticleList(mainContent, 'editorial'),
    'issues-page': () => renderIssues(mainContent),
    'subscribe': () => renderSubscribe(mainContent),
    'search': (param) => renderSearchResults(mainContent, param),
    'single-article-page': (param) => renderSingleArticle(mainContent, param),
};
[END_FILE]