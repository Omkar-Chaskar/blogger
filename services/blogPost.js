export const getBlogPosts= async () => {
    try {
        const response = await fetch('http://localhost:3000/api/posts');
        const posts = await response.json();
        return posts;
      } catch (error) {
        return error;
      }
}