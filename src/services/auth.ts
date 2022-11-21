import { useEffect } from 'react'
import baseUrlGlobal from './baseUrlGlobal'
import { queries } from './queries'

type SignInRequestData = {
  email: string
  password: string
}
const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  const { data: dataUser } = await baseUrlGlobal.post('v1/login', data)
  localStorage.setItem('userId', dataUser.user._id)
  return dataUser
}

export async function recoverUserInformation(userId: string) {
  const { data: dataUser } = await baseUrlGlobal.get(`v1/users/${userId}`)
  return dataUser
}
