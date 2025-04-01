import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    return <Navigate to="/absent-application" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
