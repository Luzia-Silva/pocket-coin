import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { event } from 'react-ga'

type IEmailconfirm = {
  target: {
    value: string
  }
}
const ForgotPasswordForm = () => {
  const [email, setEmail] = React.useState('')
  const handleChange = (emailconfirm: IEmailconfirm) =>
    setEmail(emailconfirm.target.value)
  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading
          lineHeight={1.1}
          fontSize={{ base: '2xl', md: '3xl' }}
          textAlign='center'
        >
          Esqueceu sua senha?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}
        >
          Você receberá um e-mail com um link de redefinição
        </Text>
        <FormControl id='email'>
          <Input
            placeholder='seu-email@example.com'
            _placeholder={{ color: 'gray.500' }}
            type='email'
            value={email}
            onChange={handleChange}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button colorScheme='purple' color={'white'}>
            Confirmar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
export default ForgotPasswordForm
