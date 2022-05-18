import axios from "axios";
import { authHeader } from "./auth-header";

const baseURL = import.meta.env.VITE_API_URL;

const USER_TOKEN = authHeader();

const AuthStr = "Bearer ".concat(USER_TOKEN);

class UserService {
  async getUsers() {
    try {
      const response = await axios.get(baseURL + "user", {
        headers: { Authorization: AuthStr },
      });

      return response;
    } catch (error) {
      console.log("error " + error);
      return error;
    }
  }
}

export default new UserService();
