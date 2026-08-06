import { AuthProvider } from './context/AuthContext'
import App from './App'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)