import { useMutation } from '@tanstack/react-query'
import { IUser } from '../../../interface'
import baseUrlGlobal from '../../baseUrlGlobal'

export const CreateUser = (props: Object) => {
  return useMutation(async (data: IUser) => {
    await baseUrlGlobal.post('/v1/user', data)
  }, props)
}
