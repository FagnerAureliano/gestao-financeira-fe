export function authHeader() {
  const userStr = localStorage.getItem("user_token");
  let user;
  if (userStr) {
    user = JSON.parse(userStr);
    return user.access_token;
  }
}
 
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
