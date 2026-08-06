import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

function ProtectedRoute({ children, allowedRoles }) {
  const role = getUserRole();

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default ProtectedRoute;