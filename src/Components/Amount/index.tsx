import {
  Container,
  Flex,
  Grid,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import { IAmounts } from '../../interface'
import Header from '../Header'

type Props = {
  amounts: IAmounts[]
  coins: string
}
const Amount = ({ amounts, coins }: Props) => {
  return (
    <Flex justify={['center']} p={2}>
      <Container maxW='container.xl' centerContent>
        <Header text={coins} />
        <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }} gap={6}>
          {amounts.map((amount) => (
            <Stat
              p={{ sm: '0.5rem', base: '1rem', md: '0.8rem', lg: '1rem' }}
              backgroundColor='white'
              key={amount.coin}
              borderRadius='lg'
              w={{ sm: '100%', base: '380px', md: '150px', lg: '250px' }}
              textAlign='center'
              bgColor="gray.100"
            >
              <StatLabel
                fontSize={{ sm: '12px', base: '18px', md: '14px', lg: '14px' }}
              >
                {amount.elements.name}
              </StatLabel>
              <StatNumber
                fontSize={{ sm: '14px', base: '20px', md: '18px', lg: '25px' }}
              >
                {(Number(coins) / Number(amount.elements.bid)).toFixed(2)}
              </StatNumber>
              <StatHelpText
                m={1}
                fontSize={{ sm: '10px', base: '16x', md: '12px', lg: '14px' }}
              >
                {amount.elements.create_date}
              </StatHelpText>
            </Stat>
          ))}
        </Grid>
      </Container>
    </Flex>
  )
}
export default Amount
