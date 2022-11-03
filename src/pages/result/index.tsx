import {
  Box,
  Container,
  Flex,
  Grid,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import ThreeTierPricingHorizontal from '../../Components/Header'
import LoggedUser from '../../Components/LoggedUser'
import AllNews from '../../Components/AllNews'
import { Users } from '../../mock'

import CategoryNews from '../../Components/categoryNews'
const Result = () => {
  const router = useRouter()
  const { amount } = router.query
  const { loggeduser } = router.query
  const [Logged, setLogged] = useState(false)

  useEffect(() => {
    if (Users._id === loggeduser) {
      setLogged(true)
    }
  }, [loggeduser, router.query])
  //

  return (
    <>
      {Logged && (
        <LoggedUser
          username={String(Users.surname)}
          avatarUser='https://avatars.dicebear.com/api/big-smile/your-custom-seed.svg?b=%23ff00d0'
        />
      )}
      <CategoryNews />
      {/* {Logged ? <CategoryNews /> : <AllNews />} */}
    </>
  )
}
export default Result
