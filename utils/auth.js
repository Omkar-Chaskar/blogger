import jwt from 'jsonwebtoken'

export function getUserIdFromToken(token) {
  const decodedToken = jwt.decode(token)
  return decodedToken.username
}