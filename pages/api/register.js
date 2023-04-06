import fs from 'fs';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const { firstName, lastName, username, password, role } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to a JSON file
    const user = {
        firstName,
        lastName,
        username,
        password : hashedPassword,
        role    
    }
    const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'))
    users.push(user)
    fs.writeFileSync('users.json', JSON.stringify(users))

    res.status(201).json({ message: 'User created' })

  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}