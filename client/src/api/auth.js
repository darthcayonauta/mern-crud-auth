import axios from "axios";

//exportas el usuario hacia el backend
const API = 'http://localhost:4000/api'
export const registerRequest =  user =>  axios.post(`${API}/register`,user)