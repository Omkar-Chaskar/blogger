import fs from 'fs';

export default async function handler(req, res) {
  const { userId } = req.query;

  if (req.method === 'GET') {
    // Get the user from the JSON file based on the userId
    const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'))
    const user = users.find(user => user.username === userId)

    if (!user) {
      res.status(404).json({ message: `User with username ${userId} not found` })
    } else {
      res.status(200).json(user)
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
