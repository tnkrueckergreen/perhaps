import { getStaff } from '../api/dataService.js';
import { createStaffModalHTML } from '../components/modal/StaffModalContent.js';

/**
 * Initializes all logic for the staff bio modal, including open/close listeners.
 * @returns {Function} A function that can be called to close the modal.
 */
export function initModal() {
    const modalOverlay = document.getElementById('staff-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBody = document.getElementById('modal-body-content');

    if (!modalOverlay || !modalCloseBtn || !modalBody) return () => {};

    const openModal = (person) => {
        modalBody.innerHTML = createStaffModalHTML(person);
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Use event delegation on a stable parent to open the modal
    document.getElementById('main-content').addEventListener('click', async (e) => {
        const card = e.target.closest('.staff-card');
        if (card) {
            const staffId = card.dataset.id;
            const staff = await getStaff();
            const person = staff.find(p => p.id == staffId);
            if (person) openModal(person);
        }
    });
    
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    return closeModal;
}
[END_FILE]