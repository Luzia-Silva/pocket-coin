import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'pocketcoin-token': token } = parseCookies()

const baseUrlGlobal = axios.create({
  baseURL: 'https://pocketcoin-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

export default baseUrlGlobal
