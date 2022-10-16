import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  useColorModeValue,
  Text
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import YupPassword from 'yup-password'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { Users } from '../../mock'
import React from 'react'
import { useRouter } from 'next/router'

interface IFormInputs {
  email: string
  password: string
}

const schema = yup
  .object({
    email: yup
      .string()
      .email()
      .required('Informe o seu email'),
    password: yup.string().required('Informe a sua senha')
  })
  .required()

const Login = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })
  const onSubmit = (data: IFormInputs) => {
    if (Users.email === data.email && Users.password === data.password)
      router.push('/?loggeduser=' + Users.id)
    else if (Users.email === data.email && Users.password !== data.password)
      toast.error('Senha incorreta! ', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    else
      toast.error('Não encontramos o seu cadastro!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
  }

  return (
    <Container>
      <Flex align={'center'} justify={'center'}>
        <Stack spacing={8} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'} textAlign='center'>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Faça login em sua conta</Heading>
            </Stack>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl id='email'>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='email'
                    {...register('email')}
                    isInvalid={errors.email?.type ? true : false}
                  />
                  <Text fontSize={'xs'} color='red'>
                    {errors.email?.message}
                  </Text>
                </FormControl>
                <FormControl id='password'>
                  <FormLabel>Senha</FormLabel>
                  <Input
                    type='password'
                    {...register('password')}
                    isInvalid={errors.email?.type ? true : false}
                  />
                  <Text fontSize={'xs'} color='red'>
                    {errors.password?.message}
                  </Text>
                </FormControl>

                <Stack spacing={10}>
                  <Button type='submit' colorScheme='purple'>
                    Entrar
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>

          <Link
            color='purple.500'
            href='forgotPasswordform'
            textAlign='center'
            fontWeight={700}
            fontSize='md'
          >
            Esqueceu a senha?
          </Link>
        </Stack>
      </Flex>
    </Container>
  )
}
export default Login
