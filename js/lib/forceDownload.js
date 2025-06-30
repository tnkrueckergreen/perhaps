/**
 * Fetches a file from a URL and triggers a browser download prompt.
 * @param {string} url - The URL of the file to download.
 * @param {string} filename - The desired name for the downloaded file.
 */
export async function forceDownload(url, filename) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        const anchor = document.createElement('a');
        anchor.style.display = 'none';
        anchor.href = blobUrl;
        anchor.download = filename;
        
        document.body.appendChild(anchor);
        anchor.click();
        
        document.body.removeChild(anchor);
        window.URL.revokeObjectURL(blobUrl);

    } catch (error) {
        console.error('Download failed:', error);
        alert('Could not download the file. Please try again later.');
        throw error; // Re-throw for the caller to handle if needed
    }
}
[END_FILE]