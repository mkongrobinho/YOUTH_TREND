// routes/commentRoutes.js
import { Router } from 'express'
import { getCommentsForPost, createComment } from '../controllers/commentController.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()
router.get('/:postId', getCommentsForPost)
router.post('/:postId', requireAuth, createComment)

export default router