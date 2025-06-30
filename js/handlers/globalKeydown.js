/**
 * Initializes a global keydown listener, primarily for the 'Escape' key.
 * @param {Object} actions - An object containing functions to call on Escape.
 * @param {Function} actions.closeModal - Function to close the modal.
 * @param {Function} actions.closeSearch - Function to close the search overlay.
 */
export function initGlobalKeydown({ closeModal, closeSearch }) {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeSearch();
        }
    });
}
[END_FILE]