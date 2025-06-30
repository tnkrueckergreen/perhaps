import { PageHeader } from '../layout/PageHeader.js';

/**
 * Renders the header for the "Meet the Team" section.
 * @returns {string} HTML string for the team header.
 */
export function TeamHeader() {
    const title = '<h2>Meet the Team</h2>';
    const subtitle = 'The dedicated students behind every story. We are writers, editors, photographers, and leaders committed to bringing you the news that matters.';
    const headerHtml = PageHeader(title, subtitle);
    
    // Add a specific class for styling this header instance
    return headerHtml.replace('class="page-header"', 'class="page-header team-header"');
}
[END_FILE]