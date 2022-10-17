import { ICoins } from './../../../interface/ICoins/index';
import { createUseUserskey } from './keys'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { api } from '..'
export const GetCoins = (
  typecoins: string,
  options?: UseQueryOptions<ICoins>
) => {
  return useQuery(
    createUseUserskey(),
    () =>
      api.get<ICoins>(`/${typecoins}`).then((response) => response.data),
    options
  )
}
