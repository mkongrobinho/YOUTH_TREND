<<<<<<< HEAD
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <p>Loading...</p>
  return user ? children : <Navigate to="/login" replace />
}
=======
import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";


function ProtectedRoute({ children, allowedRoles }) {

  const role = getUserRole();


  if (!role) {
    return <Navigate to="/" replace />;
  }


  if (!allowedRoles.includes(role)) {
    return <Navigate to="/home" replace />;
  }


  return children;

}


export default ProtectedRoute;
>>>>>>> 91aadaf (Complete YouthTrend frontend updates: student features, events, leader and admin dashboards)
