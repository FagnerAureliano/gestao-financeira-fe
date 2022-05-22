import { destroyCookie, parseCookies, setCookie } from 'nookies'; 
import { api } from "../api/api-headers"; 

export interface LoginProps {
  username: string;
  password: string;
}
export interface RegisterProps {
  name: string;
  username: string;
  password: string;
}

class AuthService {
  async login({ username, password }: LoginProps) {
    const user = `username=${username}&password=${password}`;
    const response = await api.post("login", user);
     
    return { token:{token: response.data.access_token, user: username}, user: { username, password } };
  }

  logout() { 
    destroyCookie(undefined, "fin_auth_token", {
      path: "/",
    }); 
  }

  getCurrentUser() {
    const { fin_auth_token: token } = parseCookies();
    if (token){
      const res = JSON.parse(token)
      return res.username;
    } 
    return null;
  }
}
export default new AuthService();
