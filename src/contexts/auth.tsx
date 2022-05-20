import { createContext, useEffect, useState } from "react";
import { setCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import authService, { LoginProps } from "../api/services/auth.service";
import { UserLog } from "../api/services/user.service";
import { api } from "../api/services/auth-headers";

interface AuthContextTye {
  user: any;
  isAuthenticated: boolean;
  signIn: (data: LoginProps) => Promise<void>;
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

  async function signIn({ username, password }: LoginProps) {
    const { token, user } = await authService.login({
      username,
      password,
    });

    //cria o token de acesso
    setCookie(undefined, "fin_auth_token", token, {
      maxAge: 60 * 60 * 1, // 1h expire
    });

    //Para atualizar o token sempre que for feito o login
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(user);
    navigate("/dashboard");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
