import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { Users } from '../../mock'
import { queries } from '../../services/queries'

interface IFormInputs {
  email: string
  password: string
}

const schema = yup
  .object({
    email: yup.string().email().required('Informe o seu email'),
    password: yup.string().required('Informe a sua senha'),
  })
  .required()

const Login = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const { mutate } = queries.Login({
    onSuccess: () => {
      toast.success('sucesso')
    },
    onError: (error: AxiosError) => {
      switch (error.code) {
        case 'ERR_BAD_REQUEST':
          toast.error('Não encontramos o seu login!')
          break
        case 'ERR_NETWORK':
          toast.error('Senha incorreta!')
          break
        default:
          toast.error('Ocorreu um erro!')
          break
      }
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IFormInputs) => mutate(data)

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
                  <InputGroup>
                    <Input
                      {...register('password')}
                      isInvalid={errors.email?.type ? true : false}
                      type={showPassword ? 'text' : 'password'}
                      {...register('password')}
                    />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        type='submit'
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
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
