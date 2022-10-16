import { json } from 'stream/consumers'

import { createUseUserskey } from './keys'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { IAmount } from '../../../interface'
import { api } from '..'
export const GetAmount = (
  typecoins: string,
  options?: UseQueryOptions<IAmount>
) => {
  return useQuery(
    createUseUserskey(),
    () =>
      api.get(`/${typecoins}`).then((response) => response.data),
    options
  )
}
