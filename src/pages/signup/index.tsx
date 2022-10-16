import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Inscreva-se
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'} textAlign='center'>
            Seja <b>Pocket coin forever</b> e aproveite todas as novidades
            quentinhas 😍✨
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id='firstName' isRequired>
                  <FormLabel>Nome</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='surname'>
                  <FormLabel>Apelido </FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id='email' isRequired>
              <FormLabel>Email </FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button loadingText='Submitting' size='lg' colorScheme='purple'>
                Confirmar
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Text align={'center'} textAlign='center'>
          Já está cadastrado ?
          <Link
            color='purple.500'
            href='login'
            fontWeight={700}
            fontSize='md'
          >
            {' '}
            Login
          </Link>
        </Text>
      </Stack>
    </Flex>
  )
}
export default SignUp
