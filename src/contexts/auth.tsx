import { createContext } from "react";
import authService from "../api/services/auth.service";

interface AuthContextTye {
  isAuthenticated: boolean;
}
interface SignInData {
    username: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextTye);

async function signIn({username,password}:SignInData) {
    authService.login({ username, password })
}

export function AuthProvider({ children }: any) {
  const isAuthenticated = false;
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
