import { ContactForm } from '../../components/forms/ContactForm.js';
import { ContactDetails } from '../../components/common/ContactDetails.js';
import { PageHeader } from '../../components/layout/PageHeader.js';
import { Container } from '../../components/layout/Container.js';
import { Section } from '../../components/layout/Section.js';

/**
 * Creates the HTML view for the contact page.
 * @returns {string} The complete HTML string for the page.
 */
export function createContactView() {
    const formSection = `
        <div class="contact-form-wrapper">
            <h3>Send Us a Message</h3>
            <p>Use this form to submit your club for club of the month, pitch an article, ask us to cover a topic, write a letter to the editor, or send us any other message.</p>
            
            <div id="contact-form-container">
                ${ContactForm()}
                <div id="contact-success-message" hidden>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent. We'll get back to you shortly.</p>
                </div>
            </div>
        </div>
    `;

    const pageTitle = 'Contact Us';
    const pageSubtitle = 'Letters to the editor and guest commentaries are encouraged. Don\'t hesitate to reach out!';
    const grid = `<div class="contact-grid">${formSection}${ContactDetails()}</div>`;
    
    const content = Container(PageHeader(pageTitle, pageSubtitle) + grid);
    return Section({ className: 'page contact-page', content });
}
[END_FILE]