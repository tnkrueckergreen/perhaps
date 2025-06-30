/**
 * A simple central state manager for the subscription process.
 * It tracks the email value and subscription status across components.
 */

const state = {
    email: '',
    isSubscribed: false
};

const listeners = new Set();

function notifyListeners() {
    listeners.forEach(listener => listener(state));
}

/**
 * Updates the email in the central state. Called on input.
 * @param {string} newEmail - The new value from an input field.
 */
export function setEmail(newEmail) {
    if (state.email !== newEmail) {
        state.email = newEmail;
        notifyListeners();
    }
}

/**
 * Finalizes the subscription state. Called on form submission.
 */
export function subscribe() {
    if (!state.isSubscribed) {
        state.isSubscribed = true;
        // In a real app, you might save this to localStorage here.
        notifyListeners();
    }
}

/**
 * Allows a component to listen for any changes to the subscription state.
 * @param {Function} callback - The function to call when state changes.
 */
export function listen(callback) {
    listeners.add(callback);
    // Immediately call with the current state when a listener is added.
    callback(state);
}
[END_FILE]