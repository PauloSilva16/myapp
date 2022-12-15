import axios from "axios";
const api = axios.create({
    baseURL: "pvd.c3swsgunbume.us-east-1.rds.amazonaws.com/pvd",
  });
  
  export default api;