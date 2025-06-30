import { createIssuesView } from './issues/view.js';

/**
 * Renders the "Past Issues" page.
 * @param {HTMLElement} container - The main content container element.
 */
export function render(container) {
    container.innerHTML = createIssuesView();
}
[END_FILE]