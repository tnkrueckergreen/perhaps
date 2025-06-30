import { forceDownload } from '../lib/forceDownload.js';

/**
 * Initializes a global click listener to handle file downloads.
 * Uses event delegation to listen for clicks on '.download-btn'.
 */
export function initDownloadHandler() {
    document.body.addEventListener('click', async (e) => {
        const downloadBtn = e.target.closest('.download-btn');
        if (!downloadBtn) return;

        e.preventDefault();
        const url = downloadBtn.dataset.url;
        const filename = downloadBtn.dataset.filename;
        
        if (!url || !filename) return;

        const originalText = downloadBtn.textContent;
        downloadBtn.textContent = 'Downloading...';
        downloadBtn.disabled = true;

        try {
            await forceDownload(url, filename);
        } catch (error) {
            console.error('Download failed from handler:', error);
            // The alert is in forceDownload, but we could add more UI feedback here.
        } finally {
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
        }
    });
}
[END_FILE]