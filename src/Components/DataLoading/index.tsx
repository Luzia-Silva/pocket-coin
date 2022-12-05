import { Center, Link, Spinner, Text } from '@chakra-ui/react'

type Props = {
  isLoading: boolean
  isError: boolean
  coins?: boolean
}
const DataLoading = ({ isError, isLoading, coins }: Props) => {
  if (isLoading)
    return (
      <Center mt={8}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='purple.300'
          size='xl'
        />
      </Center>
    )
  if (isError)
    return (
      <>
        <Text textAlign='center' fontSize='3xl' mt={6}>
          Ocorreu um erro!
        </Text>
      </>
    )

  if (!coins) return (
    <Center p={6}>
      <Text textAlign="center">
        Para podermos realizar a coversão é necessário informar um valor, por
        favor retorne a página Inicial{' '}
        <Link color='purple.500' href='/' textDecoration="underline">
          Clique Aqui
        </Link>
      </Text>
    </Center>
  )
    return <></>
}
export default DataLoading
