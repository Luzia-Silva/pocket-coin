
import { createUseUserskey } from './keys'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { api } from '..'
import { INews } from '../../../interface'

export const GetNews = (
  options?: UseQueryOptions<INews[]>
) => {
  return useQuery(
    createUseUserskey(),
    () =>
      api.get("http://demo1831233.mockable.io/default/news").then((response) => response.data),
    options
  )
}
