import axios from "axios";
import localStorageService from "./localStorageService";
import http from "./api";
import history from "history.js";


class JwtAuthService {
  constructor (props){
  
  }

  
  
 
  loginWithEmailAndPassword = (userlog) => {
   return http
    .post("/afrimash/authenticate", userlog)
    .then((response)=>{
      if(response.status === 200){
        const {jwt} = response.data
        this.setSession(jwt)
        http
        .get("/afrimash/users/logged-in-details")
        .then((response)=>{
          if(response.status === 200){
            history.push("/dashboard/analytics")
            this.setUser(response.data.object)
            return this.user
          } else if (response.data.errorMsg != null){
            return
          }
        })
      }
    })
  }

  // You need to send http requst with existing token to your server to check token is valid
  // This method is being used when user logged in & app is reloaded
  // loginWithToken = () => {
  //   return http
  //       .get("/afrimash/users/logged-in-details")
  //       .then((response)=>{
  //         if(response.status === 200){
  //           history.push("/dashboard/analytics")
  //           this.setUser(response.data.object)
  //           const jwt = localStorage.getItem("jwt_token");
  //           console.log(jwt)
  //           this.setSession(jwt)
  //         } else if (response.error != null){
  //           return
  //         }
  //       })
  // };

  // loginWithToken = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.user);
  //     }, 100);
  //   }).then(data => {
  //     // Token is valid
  //     this.setSession(data.token);
  //     this.setUser(data);
  //     return data;
  //   });
  // };


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