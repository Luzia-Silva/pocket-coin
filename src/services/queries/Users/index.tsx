import { useMutation } from '@tanstack/react-query'
import { ILogin, IUser } from '../../../interface'
import baseUrlGlobal from '../../baseUrlGlobal'

export const CreateUser = (props: Object) => {
  return useMutation(async (data: IUser) => {
    await baseUrlGlobal.post('/v1/user', data)
  }, props)
}
export const Login = (data: ILogin) => {
  return useMutation(async () => {
    await baseUrlGlobal.post<ILogin>('/v1/login', data)
  })
}
