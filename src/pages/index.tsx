import { 
Button, 
Flex, 
Input, 
InputGroup,
InputRightElement,
Stack,
Text, 
Container } from '@chakra-ui/react'
import { useState } from 'react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [amount,  setAmount] = useState('')

  const onChangeAmount = (e:any) => {
    setAmount(e.target.value)
  }
  const sendAmount = async (e:any) => {
    e.preventDefault();
    console.log(amount)
    
  }
  return (
    <form onSubmit={sendAmount} method='post'>
    <Flex 
    justify={["center"]} 
    marginTop="8rem"
    w="100vw"
    >
     <Container maxW="container.sm" centerContent>
        <Text textAlign="center"
          fontSize='3rem'
          color='black'
          fontWeight="bold">
          Pocket Coin
        </Text>
        <InputGroup flexDirection="column"  >
          <Stack spacing={0} direction="row">
            <Input  
            h="40px" 
            width="100%"
            variant="filled" 
            type='number'
            name='amount'
            value={amount}
            onChange={()=> {alert("Eu sou um alert!");}}
            placeholder='What your money?'/>
            <InputRightElement w={95}>
              <Button
              type="submit"
              colorScheme='yellow'
              h="40px">
              Pesquisar
              </Button>
             </InputRightElement>
          </Stack>
        </InputGroup>
      </Container>
    </Flex>
    </form>
  )
}

export default Home;