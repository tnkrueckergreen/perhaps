import { SimpleAuthors } from './SimpleAuthors.js';
import { AuthorsWithAvatars } from './AuthorsWithAvatars.js';

/**
 * Renders author metadata. Delegates to a specific component based on options.
 * This acts as a factory or router for author components.
 * @param {Array} writers - Array of writer objects.
 * @param {Object} options - Display options.
 * @returns {string} HTML string for the chosen author component.
 */
export function Authors(writers, options = {}) {
    const { withAvatars = false } = options;

    if (!withAvatars) {
        return SimpleAuthors(writers, options);
    }

    return AuthorsWithAvatars(writers, options);
}
[END_FILE]