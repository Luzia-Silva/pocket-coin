import { useQuery } from '@tanstack/react-query'
import { IAmounts } from '../../../interface'
import baseUrlGlobal from '../../baseUrlGlobal'

export const GetAmounts = () => {
  return useQuery(['amounts'], () =>
    baseUrlGlobal
      .get<IAmounts[]>('/v1/amount')
      .then((response) => response.data)
  )
}
