/**
 * Configuration options for the Fuse.js search instance.
 * Weights are assigned to prioritize matches in certain fields.
 */
export const FUSE_OPTIONS = {
    keys: [
        { name: 'title', weight: 0.4 },
        { name: 'textContent', weight: 0.2 },
        { name: 'tags', weight: 0.2 },
        { name: 'writers.name', weight: 0.1 },
        { name: 'category', weight: 0.05 },
        { name: 'date', weight: 0.05 }
    ],
    includeScore: true,
    minMatchCharLength: 2,
    threshold: 0.3, // Adjust for stricter/looser matching
    ignoreLocation: true, // Search the entire string
};
[END_FILE]