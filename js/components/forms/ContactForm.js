import { FormField } from './FormField.js';

/**
 * Assembles the contact form using FormField components.
 * @returns {string} HTML string for the complete contact form.
 */
export function ContactForm() {
    return `
        <form id="contact-form" novalidate>
            ${FormField({
                id: 'contact-name',
                label: 'Name (required)',
                type: 'text',
                required: true,
                warningMessage: 'Please enter your name.'
            })}
            ${FormField({
                id: 'contact-email',
                label: 'Email (required)',
                type: 'email',
                required: true,
                warningMessage: 'Please enter a valid email address.'
            })}
            ${FormField({
                id: 'contact-website',
                label: 'Website',
                type: 'url',
                placeholder: 'https://example.com',
                warningMessage: 'Please enter a valid URL.'
            })}
            ${FormField({
                id: 'contact-message',
                label: 'Message (required)',
                type: 'textarea',
                rows: 5,
                required: true,
                warningMessage: 'Please enter your message.'
            })}
            <button type="submit" class="button-primary">Send Message</button>
        </form>
    `;
}
[END_FILE]