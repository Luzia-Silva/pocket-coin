import axios from 'axios'
import baseUrlGlobal from './baseUrlGlobal'
import { queries } from './queries'

type SignInRequestData = {
  email: string
  password: string
}

export async function signInRequest(data: SignInRequestData) {
  const { data: dataUser } = await baseUrlGlobal.post('v1/login', data)
  localStorage.setItem('userId', dataUser.user._id)
  return dataUser
}

export async function recoverUserInformation() {
  const userId = localStorage.getItem('userId')
  const { data: dataUser } = await baseUrlGlobal.get(`v1/users/${userId}`)
  return dataUser
}
