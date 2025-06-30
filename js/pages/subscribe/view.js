import { Section } from '../../components/layout/Section.js';
import { Container } from '../../components/layout/Container.js';

/**
 * Creates the HTML view for the subscribe page.
 * @returns {string} The complete HTML string for the page.
 */
export function createSubscribeView() {
    const content = `
        <div class="subscribe-content">
            <h1>Join the ANDOVERVIEW community.</h1>
            <p>Get the latest stories, features, and updates from our student journalists, sent straight to your inbox.</p>
            
            <div id="form-container-page" class="form-container">
                <form id="subscribe-form-page">
                    <input type="email" id="subscribe-email-page" placeholder="Enter your email address" required>
                    <button type="submit" class="button-subscribe">Subscribe</button>
                </form>
                <div id="subscribe-success-message-page" class="subscribe-success">
                    <span>Thank you for subscribing!</span>
                </div>
            </div>
        </div>
    `;

    return Section({
        className: 'page subscribe-page',
        content: Container(content)
    });
}
[END_FILE]