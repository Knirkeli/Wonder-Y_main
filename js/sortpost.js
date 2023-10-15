/**
 * Sorts an array of posts based on the selected option.
 *
 * @param {Array} posts - The array of posts to sort.
 * @param {string} option - The selected option.
 * @returns {Array} - The sorted array of posts.
 */
export function sortPosts(posts, sortOption) {
    if (!posts) return [];

    switch (sortOption) {
        case "date":
            return posts.sort((a, b) => new Date(b.created) - new Date(a.created));
        case "title":
            return posts.sort((a, b) => a.title.localeCompare(b.title));
        case "author":
            return posts.sort((a, b) => a.author.name.localeCompare(b.author.name));
        default:
            return posts;
    }
}