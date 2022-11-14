import axios from 'axios'

const baseUrlGlobal = axios.create({
  baseURL: 'http://localhost:7777',
  headers: {
    'Content-Type': 'application/json'
  }
})
export default baseUrlGlobal
