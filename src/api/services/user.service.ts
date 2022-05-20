import axios from "axios";
import { authHeader } from "./auth-header";

const baseURL = import.meta.env.VITE_API_URL;  
const AuthStr = "Bearer "+`${authHeader()}`;

export interface UserLog {
  id?: number;
  name?: string;
  username?: string;
  roles?: Role[];
  ativo?: boolean;
}

export interface Role {
  id?: number;
  name?: string;
}

class UserService {
  async getUsers() {
    try {
      const response = await axios.get(baseURL + "user", {
        headers: { Authorization: AuthStr },
      });
      console.log(response, "USERS");
      return response.data;
    } catch (error) {
      console.log("error " + error);
      return error;
    } 
  }
  async getUser(username: string | undefined) { 
    try {
      const response = await axios.get(baseURL + "user/" + `${username}`, {
        headers: { Authorization: AuthStr },
      });
      console.log(response)
      return response.data;
    } catch (error) {
      console.log("error " + error);
      return error;
    }
  }
}

export default new UserService();
