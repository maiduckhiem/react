import axios from "axios";

const instance = axios.create({
  baseURL: "https://6195bb7c74c1bd00176c6e55.mockapi.io",
  headers: {
    "Content-Type": "application/json"
  }
});
export default instance;
