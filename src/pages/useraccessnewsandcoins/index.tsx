import { Box } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import AllNews from '../../Components/AllNews'
import Amount from '../../Components/Amount'
import CategoryNewsTabList from '../../Components/CategoryNewsTabList'
import { AuthContext } from '../../Context/AuthContext'
import { queries } from '../../services/queries'

const UserAccessNewsAndCoins = () => {
  const { user } = useContext(AuthContext)
  const { data: news } = queries.GetNews()
  const { data: amount } = queries.GetAmounts()
  const { data: amountUser } = queries.GetAmountUser(user?.amount.join())
  const [coins, setCoins] = useState<any>()

  useEffect(() => {
    setCoins(localStorage.getItem('amount'))
  }, [])

  return (
    <Box>
      {user ? (
        <>
          <Amount amounts={amountUser || []} coins={coins} />
          <CategoryNewsTabList user={user} newsAll={news || []} />
        </>
      ) : (
        <>
          <Amount amounts={amount || []} coins={coins} />
          <AllNews news={news || []} />
        </>
      )}
    </Box>
  )
}
export default UserAccessNewsAndCoins
