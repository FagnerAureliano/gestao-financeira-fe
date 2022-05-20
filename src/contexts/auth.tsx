import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import authService from "../api/services/auth.service";
import userService, { UserLog } from "../api/services/user.service"; 

interface SignInData {
  username: string;
  password: string;
}
export interface User {
  username: string;
  password: string;
}
interface AuthContextTye {
  user: any;
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextTye);

export function AuthProvider({ children }: any) {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserLog | null>(null);
  const isAuthenticated = !!user;

  // useEffect(() => {
  //   const token = authHeader();
  //   if (token) {     
  //     // userService.getUser(user?.username).then((res) => {
  //     //   setUser(res)
  //     // }); 
  //   }
  //   console.log(user)
  // });

  async function signIn({ username, password }: SignInData) {
    const { token, user } = await authService.login({
      username,
      password,
    });
    
    setCookie(undefined, "fin_auth_token", token, {
      maxAge: 60 * 60 * 1, // 1h expire
    });
    setUser(user);
    navigate("/dashboard");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
