import baseUrlGlobal from './baseUrlGlobal'

type SignInRequestData = {
  email: string
  password: string
}

export async function signInRequest(data: SignInRequestData) {
  const { data: dataUser, status } = await baseUrlGlobal.post('v1/login', data)
  localStorage.setItem('userId', dataUser.user._id)
  return dataUser
}

export async function recoverUserInformation(userId: string) {
  const { data: dataUser } = await baseUrlGlobal.get(`v1/users/${userId}`)
  return dataUser
}
