import { getStaff } from '../api/dataService.js';
import { MissionStatement } from '../components/about/MissionStatement.js';
import { TeamHeader } from '../components/about/TeamHeader.js';
import { StaffGrid } from '../components/about/StaffGrid.js';
import { PageHeader } from '../components/layout/PageHeader.js';
import { Section } from '../components/layout/Section.js';
import { Container } from '../components/layout/Container.js';

/**
 * Renders the About page by fetching staff data and assembling components.
 * @param {HTMLElement} containerEl - The main content container element.
 */
export async function render(containerEl) {
    const staff = await getStaff();
    
    const content = Container(
        PageHeader('About ANDOVERVIEW') +
        MissionStatement() +
        TeamHeader() +
        StaffGrid(staff)
    );
    
    containerEl.innerHTML = Section({ id: 'about-page', content });
}
[END_FILE]