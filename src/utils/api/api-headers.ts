import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
api.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const { fin_auth_token: token } = parseCookies();
if (token) {
  const usr = JSON.parse(token);
  console.log(usr);
  
   api.defaults.headers.common["Authorization"] = `Bearer ${usr.token}`;
} 