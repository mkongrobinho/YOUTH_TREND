import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import pool from '../config/db.js'

export const register = async (req, res) => {
  const { full_name, email, university, password } = req.body
  try {
    const hash = await bcrypt.hash(password, 10)
    const result = await pool.query(
      'INSERT INTO users (full_name, email, university, password_hash) VALUES ($1,$2,$3,$4) RETURNING id, full_name, email, university',
      [full_name, email, university, hash]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    const user = result.rows[0]
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.json({ token, user: { id: user.id, full_name: user.full_name, email: user.email } })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}