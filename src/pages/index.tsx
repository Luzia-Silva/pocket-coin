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
import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import WithSpeechBubbles from '../Components/Testimonials';
import LoggedUser from '../Components/LoggedUser';
import { Users } from '../mock';



const Home: NextPage = () => {
  const router = useRouter();
  const [amount,  setAmount] = useState<number>()
  const [ loggedInUser, setLoggedInUser] = useState(false)
  const {loggeduser } = router.query
  useEffect(() => {
    if(Users.id === loggeduser) setLoggedInUser(true)
  }, [loggeduser, router.query])

  const sendAmount =  () => {
    router.push('/result/?amount=' + amount )
  }
  
  return (
    <>
   {loggedInUser && <LoggedUser username={String(Users.surname)} avatarUser="https://avatars.dicebear.com/api/big-smile/your-custom-seed.svg?b=%23ff00d0" />}
    <Flex 
    justify={["center"]} 
    marginTop={{ base: '0', md: '4rem', lg: '4rem' }}
    w="100vw"
    >
     <Container maxW="container.sm" centerContent>
      <Stack direction='row' m={4}>
        <Image
          boxSize={{ base: '50px', md: '60px', lg: '60px' }}
          objectFit='cover'
          src='../logo.png'
          alt='Logo money'
        />
         <Text textAlign="center"
            fontSize={{ base: '2rem', md: '3rem', lg: '3rem' }}
            color='black'
            fontWeight="bold">
            Pocket Coin
        </Text>
        </Stack>
        <InputGroup flexDirection="column"  >
          <Stack spacing={0} direction="row">
            <Input  
            h='40px'
            width="100%"
            variant="filled" 
            type='number'
            name='amount'
            value={amount}
            onChange={(e)=> setAmount(Number(e.target.value))}
            focusBorderColor='#6b46c1'
             _placeholder={{ opacity: 1, fontSize:'13px', color: 'gray.500', }}
            placeholder="Digite um valor para conversão" />
            <InputRightElement w={95}>
              <Button
              type="submit"
              colorScheme='purple'
              color=''
              h='40px'
              isDisabled={!amount}
              onClick={sendAmount}
              >
              Pesquisar
              </Button>
             </InputRightElement>
          </Stack>
        </InputGroup>         
      </Container>
    </Flex>
  <WithSpeechBubbles/>
  </>
  )
}

export default Home;