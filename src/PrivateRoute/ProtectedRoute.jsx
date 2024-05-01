import { Navigate } from "react-router-dom";
import useAuthProvider from "../AuthProvider/useAuthProvider";

const ProtectedRoute = ({ children }) => {
  const { users } = useAuthProvider();

  if (users) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default ProtectedRoute;
