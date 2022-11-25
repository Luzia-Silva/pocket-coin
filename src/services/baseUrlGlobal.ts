import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'pocketcoin-token': token } = parseCookies()

const baseUrlGlobal = axios.create({
  baseURL: process.env.API_POCKETCOIN|| 'http://localhost:7777',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

export default baseUrlGlobal
