import { api,    } from "../utils/api/api-headers";
import { RegisterProps } from "../utils/auth/auth.service";

export interface User {
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
      const response = await api.get("user");
      return response.data;
    } catch (error) {
      return error;
    }
  }
  async getUser(username: string | undefined) { 
    try {
      const response = await api.get("user/" + `${username}`);
      return response.data;
    } catch (error) {
      console.log("error " + error);
      return error;
    }
  }
  async registerUser({ name, username, password }: RegisterProps) { 
    try {
      return api.post("user", {
        name,
        username,
        password,
      });
    } catch (error) {
      console.log("error " + error);
      return error;
    }
  }
}

export default new UserService();
