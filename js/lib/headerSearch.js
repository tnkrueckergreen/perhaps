/**
 * Initializes the behavior of the header search bar.
 * This includes opening, closing, clearing, and submitting the search.
 * @returns {Function} A function that can be called to close the search.
 */
export function initHeaderSearch() {
    const searchIconBtn = document.getElementById('search-icon-btn');
    const form = document.getElementById('header-search-form');
    const input = document.getElementById('header-search-input');
    const clearBtn = document.getElementById('header-search-clear-btn');

    if (!searchIconBtn || !form || !input || !clearBtn) return () => {};

    const openSearch = () => {
        document.body.classList.add('search-active');
        input.focus();
    };
    
    const closeSearch = () => {
        document.body.classList.remove('search-active');
        input.value = '';
        clearBtn.classList.remove('visible');
    };

    searchIconBtn.addEventListener('click', () => {
        document.body.classList.contains('search-active') ? closeSearch() : openSearch();
    });

    input.addEventListener('input', () => {
        clearBtn.classList.toggle('visible', input.value.length > 0);
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.classList.remove('visible');
        input.focus();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (query) {
            location.hash = `#search/${encodeURIComponent(query)}`;
            closeSearch();
        }
    });

    return closeSearch;
}
[END_FILE]