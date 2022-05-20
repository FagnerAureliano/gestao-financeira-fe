import { api, authHeader } from "./auth-headers";

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
    authHeader();
    try {
      const response = await api.get("user");
      console.log(response, "USERS");
      return response.data;
    } catch (error) {
      console.log("error " + error);
      return error;
    }
  }
  async getUser(username: string | undefined) {
    authHeader();
    try {
      const response = await api.get("user/" + `${username}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log("error " + error);
      return error;
    }
  }
}

export default new UserService();
