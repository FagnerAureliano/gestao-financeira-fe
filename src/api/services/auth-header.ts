// import axios from "axios";
// import { parseCookies } from "nookies";

// export const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL
// }) 
// const {"fin_auth_token": token} = parseCookies(); 
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// if (token) { 
//   console.log(token)
//   api.defaults.headers.common['Authorization'] =  `Bearer ${token}`
//   console.log(api.defaults.headers.common['Authorization'] )
//   // return token
// } 


import { parseCookies } from "nookies";

export function authHeader() {
  const {'fin_auth_token': token} = parseCookies(); 
  if (token) { 
    return token;
  }
}

//  export function authHeader() {
//   const userStr = localStorage.getItem("user_token");
//   let user;
//   if (userStr) {
//     user = JSON.parse(userStr);
//     return user.access_token;
//   }
// }
 
// let user = null;
// if (userStr)
//   user = JSON.parse(userStr);

// if (user && user.access_token) {
//   return user.access_token
//   return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
//   // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
// } else {
//   return {};
// }
