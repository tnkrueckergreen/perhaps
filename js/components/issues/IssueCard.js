/**
 * Renders a card for a single PDF issue.
 * @param {Object} issue - An object containing issue data (e.g., name).
 * @returns {string} HTML string for an issue card.
 */
export function IssueCard(issue) {
    // A placeholder URL, as the original data was static.
    const pdfUrl = 'https://andoverview.net/wp-content/uploads/2023/02/issue-4_andoverview_final.pdf';
    const filename = `${issue.name.replace(/ /g, '_')}.pdf`;

    return `
        <div class="issue-card">
            <div>
                <div class="icon">
                    <img src="assets/icons/document-download.svg" alt="Download Icon">
                </div>
                <h4>${issue.name}</h4>
            </div>
            <div class="issue-actions">
                <a href="${pdfUrl}" target="_blank" rel="noopener noreferrer" class="issue-btn view-btn">View</a>
                <button class="issue-btn download-btn" data-url="${pdfUrl}" data-filename="${filename}">Download</button>
            </div>
        </div>
    `;
}
[END_FILE]