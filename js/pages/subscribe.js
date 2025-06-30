import { createSubscribeView } from './subscribe/view.js';
import { attachSubscribeFormListeners } from './subscribe/events.js';

/**
 * Renders the subscribe page and attaches its event listeners.
 * @param {HTMLElement} container - The main content container element.
 */
export function render(container) {
    container.innerHTML = createSubscribeView();
    attachSubscribeFormListeners();
}
[END_FILE]