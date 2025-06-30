/**
 * Renders a single form field group, including label, input/textarea, and warning message.
 * @param {Object} options - Field configuration.
 * @returns {string} HTML string for a form field.
 */
export function FormField(options) {
    const {
        id,
        label,
        type = 'text',
        required = false,
        placeholder = '',
        rows,
        warningMessage
    } = options;

    const isTextarea = type === 'textarea';
    const reqAttr = required ? 'required' : '';
    const phAttr = placeholder ? `placeholder="${placeholder}"` : '';
    
    const input = isTextarea
        ? `<textarea id="${id}" name="${id.replace('contact-', '')}" rows="${rows}" ${reqAttr}></textarea>`
        : `<input type="${type}" id="${id}" name="${id.replace('contact-', '')}" ${reqAttr} ${phAttr}>`;

    return `
        <div class="form-group">
            <label for="${id}">${label}</label>
            ${input}
            <span class="warning-message" data-warning-for="${id}">${warningMessage}</span>
        </div>
    `;
}
[END_FILE]