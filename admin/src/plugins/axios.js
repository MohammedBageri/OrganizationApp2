import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_URL  || "http://localhost:3000"
axios.defaults.withCredentials = true

const http = axios
export default axios
// export const http = axios.create({
//     baseURL: 'http://localhost:3000',
//     withCredentials: true

// })