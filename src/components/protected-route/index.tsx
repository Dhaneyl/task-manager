// import { useAuth } from "../../app/auth/auth.context";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();

  if (isLoading) return <div>Loading</div>;

  return isAuthenticated ?
    <>{children}</> :
    <Navigate to="/login" state={{ from: location }} replace />;
};
