/**
 * Parses the frontmatter and content from an article's raw text.
 * @param {string} txt - The raw text content of an article file.
 * @param {string} filename - The filename of the article.
 * @returns {Object} A structured article object.
 */
export function parseArticleTxt(txt, filename) {
    const article = { id: filename.split('.')[0] };
    const lines = txt.split('\n');
    const contentIndex = lines.findIndex(line => line.trim() === '---');
    
    const frontmatter = lines.slice(0, contentIndex).join('\n');
    article.content = lines.slice(contentIndex + 1).join('\n');

    frontmatter.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            const key_ = key.trim().toLowerCase();
            const value = valueParts.join(':').trim();
            
            if (key_ === 'tags' || key_ === 'author') {
                article[key_] = value.split(',').map(item => item.trim());
            } else {
                article[key_] = value;
            }
        }
    });

    return article;
}
[END_FILE]