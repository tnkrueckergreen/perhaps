/**
 * Shows a validation warning message for a specific form field.
 * @param {HTMLElement} inputElement - The input element that failed validation.
 * @param {string} message - The warning message to display.
 */
export function showWarning(inputElement, message) {
    const warningEl = document.querySelector(`[data-warning-for="${inputElement.id}"]`);
    if (warningEl) {
        warningEl.textContent = message || warningEl.dataset.defaultMessage;
        warningEl.style.display = 'block';
    }
    inputElement.classList.add('invalid');
}

/**
 * Clears all validation warnings from a form.
 * @param {HTMLFormElement} form - The form element to clear.
 */
export function clearWarnings(form) {
    form.querySelectorAll('.warning-message').forEach(el => el.style.display = 'none');
    form.querySelectorAll('input, textarea').forEach(el => el.classList.remove('invalid'));
}

/**
 * Validates an email address using a simple regex.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email format is valid.
 */
export function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

/**
 * Checks if a field's value is not just empty whitespace.
 * @param {string} value - The value of the field.
 * @returns {boolean} True if the field has non-whitespace content.
 */
export function isFieldFilled(value) {
    return value.trim().length > 0;
}
[END_FILE]