import { subscribe, setEmail, listen as listenToSubscription } from '../lib/subscriptionState.js';

/**
 * Initializes the behavior of the subscription form in the footer.
 */
export function initFooterSubscription() {
    const formContainer = document.getElementById('footer-form-container');
    if (!formContainer) return;

    const subscribeForm = document.getElementById('subscribe-form-footer');
    const successMessage = document.getElementById('subscribe-success-message-footer');
    const emailInput = document.getElementById('subscribe-email-footer');

    // Update UI based on central subscription state
    listenToSubscription((state) => {
        if (emailInput.value !== state.email) {
            emailInput.value = state.email;
        }
        if (state.isSubscribed) {
            subscribeForm.classList.add('hidden');
            successMessage.classList.add('active');
        }
    });

    // Update central state when user types
    emailInput.addEventListener('input', (e) => {
        setEmail(e.target.value);
    });

    // Finalize subscription on submit
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (emailInput.value && emailInput.checkValidity()) {
            subscribe();
        }
    });
}
[END_FILE]