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

export const GetAmountUser = (coins: string) => {
  return useQuery(['amountsUser'], () =>
    baseUrlGlobal
      .get<IAmounts[]>(`/v1/amount/${coins}`)
      .then((response) => response.data)
  )
}

export const GetAmountList = () => {
  return useQuery(['amountsUser'], () =>
    baseUrlGlobal
      .get<IAmounts[]>(`/v1/list`)
      .then((response) => response.data)
  )
}

