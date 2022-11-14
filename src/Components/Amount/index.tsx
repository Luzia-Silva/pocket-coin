import {
  Container,
  Flex,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import { IAmounts } from '../../interface'

type Props = {
  amounts: IAmounts[]
}
const Amount = ({ amounts }: Props) => {
  return (
    <Flex justify={['center']} p={2}>
      <Container maxW='container.xl' centerContent>
        <Stack direction={['column', 'row']} spacing='24px'>
          {amounts.map((amount) => (
            <Stat
              p={5}
              background='white'
              key={amount.coin}
              borderRadius='lg'
              w='9rem'
            >
              <StatLabel>{amount?.elements?.code}</StatLabel>
              <StatNumber>${amount?.elements?.bid}</StatNumber>
            </Stat>
          ))}
        </Stack>
      </Container>
    </Flex>
  )
}
export default Amount
