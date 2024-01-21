import { post, get } from "./api.js"
import { userHelper } from "./userHelper.js"

const userEndpoints = {
    login: "users/login",
    register: "users/register",
    logout: "users/logout"
}

async function register(email, userName, password){
    const data = await post(userEndpoints.register, {email, userName, password});
    userHelper.setUserData(data);

}

async function login(email, password){
  const data = await post(userEndpoints.login, {email, password});
  userHelper.setUserData(data);
}

async function logout(){
    const data = await get(userEndpoints.logout);
    userHelper.cleareUserData()
}

export const userService = {
      register,
      login,
      logout
}