import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;