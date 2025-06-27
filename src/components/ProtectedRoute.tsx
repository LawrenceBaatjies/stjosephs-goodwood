import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, roleRequired }) => {
  const userRole = localStorage.getItem("user_role");

  if (!userRole || userRole !== roleRequired) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
