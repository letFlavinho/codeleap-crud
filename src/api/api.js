import axios from "axios";
const api = axios.create({
  baseURL: "https://dev.codeleap.co.uk",
});

export default api;
