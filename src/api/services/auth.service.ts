import { useNavigate } from 'react-router-dom';
import { api } from "./auth-headers";

export interface LoginProps {
  username: string;
  password: string;
}
interface RegisterProps {
  name: string;
  username: string;
  password: string;
}

class AuthService {
  async login({ username, password }: LoginProps) {
    const user = `username=${username}&password=${password}`;
    const response = await api.post("login", user);
    return { token: response.data.access_token, user: { username, password } };
  }

  logout() {
    const navigate = useNavigate();
    // destroyCookie(null, "fin_auth_token");
    navigate("/");  
  }

  register({ name, username, password }: RegisterProps) {
    return api.post("user", {
      name,
      username,
      password,
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user_token");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}
export default new AuthService();
