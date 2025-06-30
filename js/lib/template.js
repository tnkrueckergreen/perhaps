/**
 * Renders a list of items by applying a template function to each item.
 * @param {Array<Object>} items - The array of data objects.
 * @param {Function} templateFn - A function that takes an item and returns an HTML string.
 * @returns {string} A concatenated HTML string of all rendered items.
 */
export function renderList(items, templateFn) {
    if (!items || items.length === 0) return '';
    return items.map(templateFn).join('');
}

/**
 * Conditionally renders content.
 * @param {boolean} condition - The condition to check.
 * @param {string|Function} content - The content to render if true. Can be a string or a function that returns a string.
 * @returns {string} The rendered content or an empty string.
 */
export function renderIf(condition, content) {
    if (!condition) return '';
    return typeof content === 'function' ? content() : content;
}
[END_FILE]