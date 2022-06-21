import { 
Button, 
Flex, 
Input, 
InputGroup,
InputRightElement,
Stack,
Image,
Container,
Text } from '@chakra-ui/react'
import { useState } from 'react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [amount,  setAmount] = useState()

  const onChangeAmount = (e:any) => {
    setAmount(e.target.value)
  }
  const sendAmount = async (e:any) => {
    e.preventDefault(); 
  }
      console.log(amount)
  return (
    <Flex 
    justify={["center"]} 
    marginTop="6rem"
    w="100vw"
    >
     <Container maxW="container.sm" centerContent>
      <Stack direction='row' m={4}>
        <Image
          boxSize='60px'
          objectFit='cover'
          src='../logo.jpeg'
          alt='Logo money'
        />
         <Text textAlign="center"
            fontSize='3rem'
            color='black'
            fontWeight="bold">
            Pocket Coin
        </Text>
        </Stack>
        <InputGroup flexDirection="column"  >
          <Stack spacing={0} direction="row">
            <Input  
            h="40px" 
            width="100%"
            variant="filled" 
            type='number'
            name='amount'
            value={amount}
            onChange={onChangeAmount}
            placeholder='What your money?'/>
            <InputRightElement w={95}>
              <Button
              type="submit"
              colorScheme='yellow'
              h="40px"
               onClick={()=> {alert("Dados enviados com sucesso");}}>
              Pesquisar
              </Button>
             </InputRightElement>
          </Stack>
        </InputGroup>
      </Container>
    </Flex>
  )
}

export default Home;