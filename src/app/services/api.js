import Axios from "axios"

export default new (class Http {
  API_URL = "https://api.afrimash.com/"


  AxiosSetup = () => {
    const token = localStorage.getItem("session_token")
    const axiosInstance = Axios.create({
      baseURL: this.API_URL,
    })

    axiosInstance.defaults.headers.common.Authorization = token
    axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    return axiosInstance
  }

  post = async (urlpath, data, config) => {
    try {
      const response = await this.AxiosSetup().post(urlpath, data, config)
      if (
        response.data.status.msg ===
        "Login is required to access this resource!"
      ) {
        localStorage.removeItem("session_token")
        window.location.reload()
      }
      return response
    } catch (err) {
      return err
    }
  }

  put = async (urlpath, data, config) => {
    try {
      const response = await this.AxiosSetup().put(urlpath, data, config)
      if (
        response.data.status.msg ===
        "Login is required to access this resource!"
      ) {
        localStorage.removeItem("session_token")
        window.location.reload()
      }
      return response
    } catch (err) {
      return err
    }
  }

  get = async (urlpath) => {
    const url = `${urlpath}`
    try {
      const response = await this.AxiosSetup().get(url)
      if (
        response.data.status.msg ===
        "Login is required to access this resource!"
      ) {
        localStorage.removeItem("session_token")
        window.location.reload()
      }
      return response
    } catch (err) {
      return err
    }
  }

  delete = async (urlpath, data) => {
    try {
      const response = await this.AxiosSetup().delete(urlpath, data)
      if (
        response.data.status.msg ===
        "Login is required to access this resource!"
      ) {
        localStorage.removeItem("session_token")
        window.location.reload()
      }
      return response
    } catch (err) {
      return err
    }
  }
})()