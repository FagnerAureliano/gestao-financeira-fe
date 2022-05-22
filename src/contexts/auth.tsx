import { createContext, useEffect, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api/api-headers";
import authService, { LoginProps } from "../utils/auth/auth.service";
import userService, { User } from "../services/user.service";

interface AuthContextTye {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (data: LoginProps) => Promise<void>;
  loading: boolean;
  logout: ()=> void;
}

export const AuthContext = createContext({} as AuthContextTye);

export function AuthProvider({ children }: any) {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { fin_auth_token: token } = parseCookies();
    if (token) {
      const _token = JSON.parse(token);
      setUser(_token.user);
    }
    setLoading(false);
  }, []);

  async function signIn({ username, password }: LoginProps) {
    //chamada API com os dados informados pela pág login
    const { token, user } = await authService.login({ username, password });

    //salva o token recebido em un cookie
    setCookie(undefined, "fin_auth_token", JSON.stringify(token), {
      maxAge: 60 * 60 * 1, // 1h expire
    });

    //Para atualizar o token no Header sempre que for feito o login
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    //grava o user no estado e redireciona
    setUser(user);
    navigate("/dashboard");
  }
  async  function logout(){
    const users = await userService.getUsers()
    console.log(users)
    // const navigate = useNavigate();
    // console.log('Logout...')
    // //  authService.logout()
    // destroyCookie(null, "fin_auth_token");
    // navigate("/");  
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
