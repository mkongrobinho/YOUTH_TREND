import { useEffect, useState } from 'react'
import { fetchPosts, createPost } from '../services/postService'
import { useAuth } from '../hooks/useAuth'

function Feed() {
  const [posts, setPosts] = useState([])
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const { user, logout } = useAuth()

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const data = await fetchPosts()
      setPosts(data)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!content.trim()) return
    try {
      await createPost(content)
      setContent('')
      loadPosts()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Feed</h1>
        <div>
          <span>{user?.full_name}</span>
          <button onClick={logout}>Log out</button>
        </div>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's happening on campus?"
        />
        <button type="submit">Post</button>
      </form>

      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ borderBottom: '1px solid #ccc', padding: '8px 0' }}>
            <strong>{post.full_name}</strong>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed