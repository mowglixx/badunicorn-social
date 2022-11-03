import axios from 'axios'

export default axios.create({
    baseURL: process.env?.VITE_API_URI || "http://localhost:3001"
})