import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  ButtonGroup, Checkbox, Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement, Progress,
  Stack, Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text, Th,
  Thead,
  Tr,
  useCheckboxGroup, useToast,
  Image
} from '@chakra-ui/react'
import { useState } from 'react'

import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TfiStatsDown, TfiStatsUp } from 'react-icons/tfi'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { IUser } from '../../interface'
import { queries } from '../../services/queries'
const schema = yup
  .object({
    name: yup.string().required(() => toast.success("informe o seu nome!")),
    email: yup.string().email().required(),
    password: yup.string().required().min(5),
    surname: yup.string().required(),
    amount: yup.array().required(),
    category: yup.array().required()
  })
  .required()

const SignUp = () => {
  const router = useRouter()
  const toasts = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<IUser>({
    defaultValues: {
      category: ['All'],
      amount: ['All']

    }
  })
  const { data: coins } = queries.GetAmounts()
  const { data: newsAll } = queries.GetNews()
  const { value, getCheckboxProps } = useCheckboxGroup()
  const news = newsAll?.map((news) => news.category)
  const newsCategory = news?.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  })
  const { mutate } = queries.CreateUser({
    onSuccess: () => {
      router.push('/welcome')
    },
    onError: (error: AxiosError) => {
      switch (error.code) {
        case 'ERR_BAD_REQUEST':
          toast.warning('Esse usuário já existe em nossa base!')
          break
        default:
          toast.error('Ocorreu um erro!')
          break
      }
    },
  })
  const onSubmit: SubmitHandler<IUser> = (data) => mutate(data)
  return (
    <Box m={6}>
      <Stack spacing={4} m="10px auto" >
        <Flex justifyContent="center">
          <Image
            boxSize={{ base: '50px', md: '60px', lg: '60px' }}
            objectFit='cover'
            src='../logo.png'
            alt='Logo money'
          />
          <Text
            textAlign='center'
            fontSize={{ base: '2rem', md: '3rem', lg: '3rem' }}
            color='black'
            fontWeight='bold'
          >
            Pocket Coin
          </Text>
        </Flex>
      </Stack>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth="2xl"
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          size="sm"
          colorScheme="purple"
          isAnimated></Progress>
        {step === 1 ? (
          <Stack spacing={2}>
            <HStack>
              <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input type='text' {...register('name')} />
              </FormControl>
              <FormControl >
                <FormLabel>Apelido </FormLabel>
                <Input type='text' {...register('surname')} />
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Email </FormLabel>
              <Input type='email' {...register('email')} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input
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
            </FormControl>
          </Stack>
        ) : step === 2 ? (
          <TableContainer>
            <Table size='sm' scrollMarginRight={'-0.1'}>
              <Thead>
                <Tr>
                  <Th>Moedas</Th>
                  <Th isNumeric>Compra</Th>
                  <Th isNumeric>Variação</Th>
                  <Th isNumeric>Máximo <Icon as={TfiStatsUp} /> </Th>
                  <Th isNumeric>Mínimo <Icon as={TfiStatsDown} /></Th>
                </Tr>
              </Thead>
              <Tbody>
                {coins?.map((coin, index) =>
                  <Tr key={index}>
                    <Td >
                      <Checkbox colorScheme="green"
                        {...register("amount")}
                        {...getCheckboxProps
                          ({ value: coin.elements.code.concat("-", coin.elements.codein) })}>
                        <Text fontSize='xs'>{coin.elements.name}</Text>
                      </Checkbox>
                    </Td>
                    <Td isNumeric>{coin.elements.ask}</Td>
                    <Td isNumeric>{coin.elements.varBid}</Td>
                    <Td isNumeric>{coin.elements.high}</Td>
                    <Td isNumeric>{coin.elements.low}</Td>
                  </Tr>
                )}

              </Tbody>
            </Table>
          </TableContainer >) : (
          <TableContainer>
            <Table size='xs'>
              <TableCaption>Escolha quais categorias de você deseja de notícias</TableCaption>
              <Thead>
                <Tr>
                  <Th>Categorias</Th>
                </Tr>
              </Thead>
              <Tbody>
                {newsCategory?.map((news, index) =>
                  <Tr key={index}>
                    <Td>
                      <Checkbox colorScheme="purple"
                        {...register("category")}
                        {...getCheckboxProps
                          ({ value: news })}
                      >
                        <Text fontSize='md'>{news}</Text>
                      </Checkbox>
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>)}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="purple"
                variant="solid"
                w="7rem"
                mr="5%">
                Voltar
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="purple"
                variant="outline">
                Continuar
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit(onSubmit)}>
                Enviar
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Box >
  )
}
export default SignUp

