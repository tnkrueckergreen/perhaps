import { showWarning, clearWarnings, isValidEmail, isFieldFilled } from '../../lib/formValidation.js';

/**
 * Attaches submit event listener to the contact form for validation.
 */
export function attachContactFormListeners() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const successMessage = document.getElementById('contact-success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearWarnings(form);

        const name = document.getElementById('contact-name');
        const email = document.getElementById('contact-email');
        const message = document.getElementById('contact-message');
        
        let isValid = true;
        if (!isFieldFilled(name.value)) {
            isValid = false;
            showWarning(name, 'Please enter your name.');
        }
        if (!isFieldFilled(email.value)) {
            isValid = false;
            showWarning(email, 'Please enter your email.');
        } else if (!isValidEmail(email.value)) {
            isValid = false;
            showWarning(email, 'Please enter a valid email address.');
        }
        if (!isFieldFilled(message.value)) {
            isValid = false;
            showWarning(message, 'Please enter your message.');
        }

        if (isValid) {
            form.hidden = true;
            successMessage.hidden = false;
        }
    });
}
[END_FILE]