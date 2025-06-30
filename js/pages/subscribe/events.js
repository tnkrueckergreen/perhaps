import { subscribe, setEmail, listen as listenToSubscription } from '../../lib/subscriptionState.js';

/**
 * Attaches event listeners to the subscribe page form.
 * Connects the form to the central subscription state.
 */
export function attachSubscribeFormListeners() {
    const formContainer = document.getElementById('form-container-page');
    if (!formContainer) return;

    const subscribeForm = document.getElementById('subscribe-form-page');
    const successMessage = document.getElementById('subscribe-success-message-page');
    const emailInput = document.getElementById('subscribe-email-page');

    // Listen to central state to update this form's UI
    listenToSubscription((state) => {
        if (emailInput.value !== state.email) {
            emailInput.value = state.email;
        }
        if (state.isSubscribed) {
            subscribeForm.classList.add('hidden');
            successMessage.classList.add('active');
        }
    });

    // Send this form's input changes to the central state
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