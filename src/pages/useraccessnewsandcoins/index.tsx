import { Box, Center, Link, Text } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useContext, useEffect, useState } from 'react'
import AllNews from '../../Components/AllNews'
import Amount from '../../Components/Amount'
import CategoryNewsTabList from '../../Components/CategoryNewsTabList'
import DataLoading from '../../Components/DataLoading'
import { AuthContext } from '../../Context/AuthContext'
import { IAmounts } from '../../interface'
import { queries } from '../../services/queries'

const UserAccessNewsAndCoins = () => {
  const { data: news, isError, isLoading} = queries.GetNews()
  const { data: amount } = queries.GetAmounts()
  
  const [coins, setCoins] = useState<string>()
  const [amountUser, setAmountUser] = useState<IAmounts[]>()

  useEffect(() => {
    const dataLocalStorage = localStorage.getItem('amount')
    setCoins(dataLocalStorage || '')
  }, [])

  const { user } = useContext(AuthContext)
  if (user) {
    const { data } = queries.GetAmountUser(user?.amount?.join())
    return setAmountUser(data)
  }

  if (!coins || !news)
    return (
      <DataLoading isLoading={isLoading} isError={isError} coins={false} />
    )

  return (
    <>
      <Box>
        {user ? (
          <>
            /
            <Amount amounts={amountUser || []} coins={coins || ''} />
            <CategoryNewsTabList user={user} newsAll={news || []} />
          </>
        ) : (
          <>
            <Amount amounts={amount || []} coins={coins || ''} />
            <AllNews news={news || []} />
          </>
        )}
      </Box>
    </>
  )
}
export default UserAccessNewsAndCoins
