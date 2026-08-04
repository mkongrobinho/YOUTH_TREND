import { Router } from 'express'
import { getPosts, createPost } from '../controllers/postController.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()
router.get('/', getPosts)
router.post('/', requireAuth, createPost)

export default router