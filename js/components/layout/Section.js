/**
 * A generic section wrapper component.
 * @param {Object} options - Configuration for the section.
 * @param {string} [options.id=''] - The ID for the section element.
 * @param {string} [options.className='page'] - CSS classes for the section.
 * @param {string} [options.content=''] - The inner HTML content.
 * @returns {string} HTML string for the section.
 */
export function Section({ id = '', className = 'page', content = '' }) {
    return `
        <section ${id ? `id="${id}"` : ''} class="${className}">
            ${content}
        </section>
    `;
}
[END_FILE]