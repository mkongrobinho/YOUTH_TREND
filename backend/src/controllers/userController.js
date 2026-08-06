import pool from '../config/db.js'

export const getCurrentUser = async (req, res) => {
  const userId = req.user.id
  try {
    const result = await pool.query(
      'SELECT id, full_name, email, university, bio, photo_url, location, created_at FROM users WHERE id = $1',
      [userId]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateCurrentUser = async (req, res) => {
  const userId = req.user.id
  const { full_name, university, bio, photo_url, location } = req.body
  try {
    const result = await pool.query(
      `UPDATE users
       SET full_name = COALESCE($1, full_name),
           university = COALESCE($2, university),
           bio = COALESCE($3, bio),
           photo_url = COALESCE($4, photo_url),
           location = COALESCE($5, location)
       WHERE id = $6
       RETURNING id, full_name, email, university, bio, photo_url, location`,
      [full_name, university, bio, photo_url, location, userId]
    )
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}