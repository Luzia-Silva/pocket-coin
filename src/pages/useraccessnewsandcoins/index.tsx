import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import Amount from '../../Components/Amount'
import CardNews from '../../Components/CardNews'
import CategoryNewsTabList from '../../Components/CategoryNewsTabList'
import { Users } from '../../mock'
import { queries } from '../../services/queries'

const UserAccessNewsAndCoins = () => {
  const { data: news } = queries.GetNews()
  const { data: coins } = queries.GetAmounts()
  const [amount, setAmount] = useState<string>('')
  useEffect(() => {
    return setAmount(localStorage.getItem('amount') || '')
  }, [])
  return (
    <>
      <Amount amounts={coins || []} />
      <CategoryNewsTabList user={Users} newsAll={news || []} />
    </>
  )
}
export default UserAccessNewsAndCoins
