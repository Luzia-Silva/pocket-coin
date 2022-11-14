import {
  Container,
  Flex,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import { IAmounts } from '../../interface'
import Title from '../Title'

type Props = {
  amounts: IAmounts[]
  amountUser: string
}
const Amount = ({ amounts, amountUser }: Props) => {
  return (
    <Flex justify={['center']} p={2}>
      <Container maxW='container.xl' centerContent>
        <Stack direction={['column', 'row']} spacing='24px'>
          {amounts.map((amount) => (
            <Stat
              p={{ sm: '0.5rem', base: '1rem', md: '0.8rem', lg: '1rem' }}
              backgroundColor='white'
              key={amount.coin}
              borderRadius='lg'
              w={{ sm: '100px', base: '380px', md: '150px', lg: '250px' }}
              textAlign='center'
            >
              <StatLabel
                fontSize={{ sm: '12px', base: '18px', md: '14px', lg: '14px' }}
              >
                {amount.elements.name}
              </StatLabel>
              <StatNumber
                fontSize={{ sm: '14px', base: '20px', md: '18px', lg: '25px' }}
              >
                {(Number(amountUser) / Number(amount.elements.bid)).toFixed(2)}
              </StatNumber>
              <StatHelpText
                m={1}
                fontSize={{ sm: '10px', base: '16x', md: '12px', lg: '14px' }}
              >
                {amount.elements.create_date}
              </StatHelpText>
            </Stat>
          ))}
        </Stack>
      </Container>
    </Flex>
  )
}
export default Amount
