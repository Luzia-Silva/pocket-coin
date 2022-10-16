import {
  Box,
  Flex,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Container
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ThreeTierPricingHorizontal from '../../Components/Header'
import LoggedUser from '../../Components/LoggedUser'
import Title from '../../Components/Title'
import { Users } from '../../mock'
import { GetAmount } from '../../services'

const Result = () => {
  const router = useRouter()
  const { amount } = router.query
  const [loggedInUser, setLoggedInUser] = useState(false)
  const { loggeduser } = router.query
  useEffect(() => {
    if (Users.id === loggeduser) setLoggedInUser(true)
  }, [loggeduser, router.query])
  const { data, isLoading, isError } = GetAmount(String(Users.typeAmount))
  const ObjectCoinsValues = Object.values(Object(data))
  const coins = Object.entries(ObjectCoinsValues).map(([key, value]) => ({
    key: key,
    elements: value
  }))
  return (
    <>
      {loggedInUser && (
        <LoggedUser
          username={String(Users.surname)}
          avatarUser='https://avatars.dicebear.com/api/big-smile/your-custom-seed.svg?b=%23ff00d0'
        />
      )}
      <Box p={3} background={'#beb9b959'}>
        <ThreeTierPricingHorizontal text={String(amount)} />
        <Flex justify={['center']} p={2}>
          <Container maxW='container.xl' centerContent>
            <Stack direction={['column', 'row']} spacing='24px'>
              {coins.map((coin: any, index) => (
                <Stat
                  p={{ sm: '0.5rem', base: '1rem', md: '0.8rem', lg: '1rem' }}
                  backgroundColor='white'
                  key={coin.key}
                  borderRadius='lg'
                  w={{ sm: '100px', base: '380px', md: '150px', lg: '250px' }}
                  textAlign='center'
                >
                  <StatLabel
                    fontSize={{
                      sm: '12px',
                      base: '18px',
                      md: '14px',
                      lg: '14px'
                    }}
                  >
                    {String(coin.elements?.name)}
                  </StatLabel>
                  <StatNumber
                    fontSize={{
                      sm: '14px',
                      base: '20px',
                      md: '18px',
                      lg: '25px'
                    }}
                  >
                    {(index > 2 &&
                      ((Number(amount) / coin.elements.bid) * 0.001).toFixed(
                        5
                      )) ||
                      (index <= 2 &&
                        (Number(amount) / coin.elements.bid).toFixed(2))}
                  </StatNumber>
                  <StatHelpText
                    m={1}
                    fontSize={{
                      sm: '10px',
                      base: '16x',
                      md: '12px',
                      lg: '14px'
                    }}
                  >
                    {coin.elements.create_date}
                  </StatHelpText>
                </Stat>
              ))}
            </Stack>
          </Container>
        </Flex>
      </Box>
      <Title />
    </>
  )
}
export default Result
