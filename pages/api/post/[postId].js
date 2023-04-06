import fs from 'fs';

export default async function handler(req, res) {
  const { postId } = req.query;

  if (req.method === 'GET') {
    // Get the post from the JSON file based on the postId
    const posts = JSON.parse(fs.readFileSync('posts.json', 'utf-8')).posts;
    const post = posts.find(post => post.id === postId);

    if (!post) {
      res.status(404).json({ message: `Post with ID ${postId} not found` });
    } else {
      res.status(200).json(post);
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
