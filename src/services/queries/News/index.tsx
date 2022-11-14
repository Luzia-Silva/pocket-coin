import { useQuery } from '@tanstack/react-query'
import { INews } from '../../../interface'
import baseUrlGlobal from '../../baseUrlGlobal'

export const GetNews = () => {
  return useQuery(['news'], () =>
    baseUrlGlobal.get<INews[]>('/v1/news').then((response) => response.data)
  )
}
