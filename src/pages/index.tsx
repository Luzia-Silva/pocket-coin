import { 
Button, 
Flex, 
Input, 
InputGroup,
InputRightElement,
Stack,
Text, 
Container } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Flex 
    justify={["center"]} 
    marginTop="8rem"
    w="100vw"
    >
     <Container maxW="container.sm" centerContent>
        <Text textAlign="center"
          fontSize='3rem'
          color='white'
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
  )
}

export default Home;