import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import fs from 'fs'

export default async function handler(req, res) {
  const { username, password } = req.body

  // Load the user data from the JSON file
  const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'))

  // Find the user with the matching email
  const user = users.find(u => u.username === username)

  // Verify the password using bcrypt
  const isValidPassword = await bcrypt.compare(password, user.password)

  if (isValidPassword) {
    // If the password is valid, generate a JWT token and send it back to the client
    const token = jwt.sign({ username: user.username, role:user.role }, process.env.JWT_SECRET)
    res.status(200).json({ token })
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=Strict`);
  } else {
    // If the password is invalid, send an error response
    res.status(401).json({ message: 'Invalid username or password' })
  }
}
