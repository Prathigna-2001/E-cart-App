
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated }) =>
  isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;

export default ProtectedRoute;
