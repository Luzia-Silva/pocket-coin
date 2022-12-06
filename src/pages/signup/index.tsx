import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Progress,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useCheckboxGroup,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { AxiosError } from "axios";

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { TfiStatsDown, TfiStatsUp } from "react-icons/tfi";
import { toast } from "react-toastify";
import * as yup from "yup";
import DataLoading from "../../Components/DataLoading";
import { IUser } from "../../interface";
import { queries } from "../../services/queries";
const schema = yup
  .object({
    name: yup.string().required("Nome"),
    email: yup.string().email().required("E-mail"),
    password: yup.string().required("Senha").min(5),
    surname: yup.string(),
    amount: yup.array()
      .min(1, "Você precisa escolher pelo menos um tipo de moeda.")
      .max(8, "Você pode escolher somente 8 tipos de moedas.")
      .required("Informe o tipo de moedas que você deseja.")
      .nullable(),
    category: yup.array()
      .min(1, "Você precisaescolher no mínimo 1 tipo de categoria")
      .required("Informe o tipo de categorias de notícias que você deseja.")
      .nullable(),
  })
  .required();

const SignUp = () => {
  const {
    data: coins,
    isLoading: isLoadingCoins,
    isError: isErrorCoins,
  } = queries.GetAmountList();
  const {
    data: newsAll,
    isLoading: isLoandingNewsAll,
    isError: isErrorNewsAll,
  } = queries.GetNews();

  const { value, getCheckboxProps } = useCheckboxGroup();

  const toasts = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  const { mutate } = queries.CreateUser({
    onSuccess: () => {
      toast.info("Os seus dados foram enviados com sucesso!");
      router.push("/welcome");
    },
    onError: (error: AxiosError) => {
      switch (error.request.code) {
        case 404:
          toast.warning("Esse usuário já existe em nossa base!");
          router.push("/login");
          break;
        default:
          toast.error("Ocorreu um erro!");
          break;
      }
    },
  });
  const onSubmit: SubmitHandler<IUser> = (data) => mutate(data)
  
  useEffect(() => {
   if(errors.name && errors.email && errors.password) toast.warning("Informe o seu nome, e-mail e senha para prosseguirmos!") 
   else if(errors.amount) toast.warning(errors.amount?.message)
   else  if (errors.category) toast.warning(errors.category?.message)
   else if (Object.values(errors).length > 0)
      toast.error("Ocorreu um erro!");
  }, [errors]);
  const news = newsAll?.map((news) => news.category);
  const newsCategory = news?.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });

  if (!coins || !newsAll)
    return (
      <DataLoading
        isLoading={isLoadingCoins || isLoandingNewsAll}
        isError={isErrorCoins || isErrorNewsAll}
      />
    );

  return (
    <Box m={6}>
      <Stack spacing={4} m="10px auto">
        <Flex justifyContent="center">
          <Image
            boxSize={{ base: "50px", md: "60px", lg: "60px" }}
            objectFit="cover"
            src="../logo.png"
            alt="Logo money"
          />
          <Text
            textAlign="center"
            fontSize={{ base: "2rem", md: "3rem", lg: "3rem" }}
            color="black"
            fontWeight="bold"
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
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          size="sm"
          colorScheme="purple"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Stack spacing={2}>
            <HStack flexDirection={["column", "row"]}>
              <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input type="text" {...register("name")} />
              </FormControl>
              <FormControl>
                <FormLabel>Apelido </FormLabel>
                <Input type="text" {...register("surname")} />
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Email </FormLabel>
              <Input type="email" {...register("email")} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    type="submit"
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
            <Table size="sm" scrollMarginRight={"-0.1"}>
              <Thead>
                <Tr>
                  <Th>Moedas</Th>
                  <Th isNumeric>Compra</Th>
                  <Th isNumeric>Variação</Th>
                  <Th isNumeric>
                    Máximo <Icon as={TfiStatsUp} />{" "}
                  </Th>
                  <Th isNumeric>
                    Mínimo <Icon as={TfiStatsDown} />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {coins?.map((coin, index) => (
                  <Tr key={index}>
                    <Td>
                      <Checkbox
                        colorScheme="green"
                        {...register("amount")}
                        {...getCheckboxProps({
                          value: coin.elements.code.concat(
                            "-",
                            coin.elements.codein
                          ),
                        })}
                      >
                        <Text fontSize="xs">{coin.elements.name}</Text>
                      </Checkbox>
                    </Td>
                    <Td isNumeric>{coin.elements.ask}</Td>
                    <Td isNumeric>{coin.elements.varBid}</Td>
                    <Td isNumeric>{coin.elements.high}</Td>
                    <Td isNumeric>{coin.elements.low}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer>
            <Table size="xs">
              <TableCaption>
                Escolha quais categorias de você deseja de notícias
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Categorias</Th>
                </Tr>
              </Thead>
              <Tbody>
                {newsCategory?.map((news, index) => (
                  <Tr key={index}>
                    <Td>
                      <Checkbox
                        colorScheme="purple"
                        {...register("category")}
                        {...getCheckboxProps({ value: news })}
                      >
                        <Text fontSize="md">{news}</Text>
                      </Checkbox>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex
            w="100%"
            justifyContent="space-between"
            flexDirection={["column", "row"]}
            gap={[3, 0]}
          >
            <Flex flexDirection={["column-reverse", "row"]} gap={[3, 0]}>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="purple"
                variant="outline"
                w={["", "7rem"]}
                mr={["", "5%"]}
              >
                Voltar
              </Button>
              <Button
                w={["", "7rem"]}
                mr={["", "5%"]}
                display={step === 3 ? "none" : ""}
                colorScheme="purple"
                variant="solid"
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
              >
                Continuar
              </Button>
              {step === 3 ? (
                <Button
                  w={["", "7rem"]}
                  mr={["", "5%"]}
                  colorScheme="red"
                  variant="solid"
                  onClick={handleSubmit(onSubmit)}
                >
                  Enviar
                </Button>
              ) : null}
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
export default SignUp;
