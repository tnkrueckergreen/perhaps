/**
 * Renders the contact details card with email and location information.
 * @returns {string} HTML string for the contact details card.
 */
export function ContactDetails() {
    return `
        <div class="contact-details-card">
            <h3>Get in Touch</h3>
            <ul class="contact-info-list">
                <li>
                    <img class="contact-icon" src="assets/icons/email.svg" alt="Email icon">
                    <span>andoverview@andoverma.us</span>
                </li>
                <li>
                    <img class="contact-icon" src="assets/icons/location.svg" alt="Location icon">
                    <span>80 Shawsheen Road<br>Andover, MA 01810<br>USA</span>
                </li>
            </ul>
        </div>
    `;
}
[END_FILE]