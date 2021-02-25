import axios from "axios";
import localStorageService from "./localStorageService";
import http from "./api"

class JwtAuthService {
  constructor (props){
  
  }
  
  loginWithEmailAndPassword = (userlog) => {
    console.log(userlog)
   return http
    .post("/afrimash/authenticate", userlog)
    .then((response)=>{
      if(response.jwt){
        this.setSession(response.jwt)
      }
    })
  }

  // You need to send http requst with existing token to your server to check token is valid
  // This method is being used when user logged in & app is reloaded
  loginWithToken = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.user);
      }, 100);
    }).then(data => {
      // Token is valid
      this.setSession(data.token);
      this.setUser(data);
      return data;
    });
  };

  loginWithEmailAndPassword = () => {
    http
    .post("/afrimash/authenticate")
    .then((response)=>{
      if(response.jwt){
        this.setSession(response.jwt)
      }
    })
  }

  logout = () => {
    this.setSession(null);
    this.removeUser();
  }

  // Set token to all http request header, so you don't need to attach everytime
  setSession = token => {
    if (token) {
      localStorage.setItem("jwt_token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      localStorage.removeItem("jwt_token");
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  // Save user to localstorage
  setUser = (user) => {    
    localStorageService.setItem("auth_user", user);
  }
  // Remove user from localstorage
  removeUser = () => {
    localStorage.removeItem("auth_user");
  }
}

export default new JwtAuthService();
