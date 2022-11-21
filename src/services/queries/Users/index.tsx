import { useMutation } from '@tanstack/react-query'
import { IAuth, IUser } from '../../../interface'
import baseUrlGlobal from '../../baseUrlGlobal'

export const CreateUser = (props: Object) => {
  return useMutation(async (data: IUser) => {
    await baseUrlGlobal.post('/v1/user', data)
  }, props)
}
export const Login = (props: Object) => {
  return useMutation(async (data: IAuth) => {
    await baseUrlGlobal.post('/v1/login', data)
  }, props)
}
