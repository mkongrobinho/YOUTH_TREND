import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import authRoutes from './src/routes/authRoutes.js'
import postRoutes from './src/routes/postRoutes.js'
import commentRoutes from './src/routes/commentRoutes.js'
import { errorHandler } from './src/middleware/errorHandler.js'

const app = express()
const port = process.env.PORT || 5000

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/comments', commentRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Backend running on port ${port}`))