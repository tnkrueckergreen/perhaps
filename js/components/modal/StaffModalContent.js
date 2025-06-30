/**
 * Creates the HTML content for the body of the staff bio modal.
 * @param {Object} person - The staff member's data object.
 * @returns {string} HTML string for the modal's body.
 */
export function createStaffModalHTML(person) {
    return `
        <img src="${person.image}" alt="${person.name}" class="modal-img">
        <div class="modal-bio">
            <h2>${person.name}</h2>
            <h4>${person.role}</h4>
            <p>${person.bio}</p>
        </div>
    `;
}
[END_FILE]