import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "../contexts/auth";
import Dashboard from "./Dashboard/Dashboard";
import { Login } from "./login/Login";
import { Home } from "./login/Register";

export function AppRoutes() {
  const Private = ({ children }: any) => {
    const { isAuthenticated, loading } = useContext(AuthContext);

    if(loading){
      return <div> <h1>Loading...</h1></div>
    }
    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <Private> 
                <Dashboard />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
