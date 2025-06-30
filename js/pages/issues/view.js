import { PageHeader } from '../../components/layout/PageHeader.js';
import { Container } from '../../components/layout/Container.js';
import { Section } from '../../components/layout/Section.js';
import { IssueCard } from '../../components/issues/IssueCard.js';
import { renderList } from '../../lib/template.js';

/**
 * Creates the HTML view for the "Past Issues" page.
 * @returns {string} The complete HTML string for the page.
 */
export function createIssuesView() {
    // Static data for demonstration purposes.
    const issues = [
        { name: 'November 2024 Issue' }, { name: 'October 2024 Issue' },
        { name: 'September 2024 Issue' }, { name: 'May 2024 Issue' },
        { name: 'April 2024 Issue' }, { name: 'March 2024 Issue' },
    ];
    
    const issueCards = renderList(issues, IssueCard);
    const title = 'Past Issues';
    const subtitle = 'Browse and download PDF versions of our print newspaper. Perfect for offline reading or seeing our layout design.';

    const content = Container(
        PageHeader(title, subtitle) +
        `<div class="issue-list">${issueCards}</div>`
    );

    return Section({ id: 'issues-page', content });
}
[END_FILE]