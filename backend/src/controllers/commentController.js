// controllers/commentController.js
import pool from '../config/db.js'

export const getCommentsForPost = async (req, res) => {
  const { postId } = req.params
  try {
    const result = await pool.query(
      `SELECT comments.*, users.full_name FROM comments
       JOIN users ON comments.user_id = users.id
       WHERE post_id = $1 ORDER BY created_at ASC`,
      [postId]
    )
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createComment = async (req, res) => {
  const { postId } = req.params
  const { content } = req.body
  const userId = req.user.id
  try {
    const result = await pool.query(
      'INSERT INTO comments (post_id, user_id, content) VALUES ($1,$2,$3) RETURNING *',
      [postId, userId, content]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}