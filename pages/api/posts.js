import data from '../../posts.json';

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(data.posts);
      break;
    case 'POST':
      const newPost = req.body;
      newPost.id = (data.posts.length + 1).toString();
      data.posts.push(newPost);
      res.status(201).json(newPost);
      break;
    case 'PUT':
      const updatedPost = req.body;
      const index = data.posts.findIndex((post) => post.id === updatedPost.id);
      if (index === -1) {
        res.status(404).json({ message: `Post with ID ${updatedPost.id} not found.` });
      } else {
        data.posts[index] = updatedPost;
        res.status(200).json(updatedPost);
      }
      break;
    case 'DELETE':
      const id = req.query.id;
      const postIndex = data.posts.findIndex((post) => post.id === id);
      if (postIndex === -1) {
        res.status(404).json({ message: `Post with ID ${id} not found.` });
      } else {
        data.posts.splice(postIndex, 1);
        res.status(200).json({ message: `Post with ID ${id} deleted.` });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ message: `Method ${method} not allowed.` });
  }
}
