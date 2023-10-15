export async function filterPosts(filterOption, currentUser) {
    if (filterOption === "me") {
        const response = await fetch(`/social/posts?_author=${currentUser}`);
        const data = await response.json();
        return data;
    } else if (filterOption === "following") {
        const response = await fetch("/social/posts/following");
        const data = await response.json();
        return data;
    } else if (filterOption === "all") {
        const response = await fetch("/social/posts?limit=50");
        const data = await response.json();
        return data;
    } else {
        return [];
    }
}
  
  export default filterPosts;