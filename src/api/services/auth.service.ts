import axios from "axios";
import userService from "./user.service";

const baseURL = import.meta.env.VITE_API_URL;
const _header = {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
};

interface HandleLoginProps {
  username: string;
  password: string;
}
interface RegisterProps {
  name: string;
  username: string;
  password: string;
}

class AuthService {
  async login({ username, password }: HandleLoginProps) {
    const user = `username=${username}&password=${password}`;
    const response = await axios.post(baseURL + "login", user, _header);
    const userLogued = await userService.getUser(username);

    if (response.data.access_token) {
      localStorage.setItem("user_token", JSON.stringify(response.data));
    }
    // console.log(user, userLogued, response.data);
    return { token: response.data, user: userLogued };
  }

  logout() {
    localStorage.removeItem("user_token");
  }

  register({ name, username, password }: RegisterProps) {
    return axios.post(
      baseURL + "user",
      {
        name,
        username,
        password,
      },
      _header
    );
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user_token");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}
export default new AuthService();
