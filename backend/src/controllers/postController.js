import pool from '../config/db.js'

export const getPosts = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT posts.*, users.full_name FROM posts
       JOIN users ON posts.user_id = users.id
       ORDER BY posts.created_at DESC`
    )
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createPost = async (req, res) => {
  const { content } = req.body
  const userId = req.user.id // from auth middleware
  try {
    const result = await pool.query(
      'INSERT INTO posts (user_id, content) VALUES ($1,$2) RETURNING *',
      [userId, content]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}