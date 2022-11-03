import { useMutation, useQuery } from '@tanstack/react-query'
import { INews } from '../../interface'
import baseUrlGlobal from '../baseUrlGlobal'
import { IUser } from './../../interface/IUser/index'


const CreateUser = (props: Object) => {
  return useMutation(async (data: IUser) => {
    await baseUrlGlobal.post('/v1/user', data)
  }, props)
}
const GetNews = () => {
  return useQuery(['news'], () =>
   baseUrlGlobal.get<INews[]>('/v1/news').then(response => response.data)
  )
}
export const queries = { CreateUser, GetNews }
