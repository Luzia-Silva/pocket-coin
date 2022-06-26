import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Container><Box mt="0.5rem">{children}</Box></Container>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={5}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'md'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'14px'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src
}: {
  src: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src}  mb={4} bg="white" size="lg"/>
      <Stack spacing={-1} align={'center'}>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box>
      <Container maxW={'6xl'} py={8} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Sobre o buscador</TestimonialHeading>
              <TestimonialText>
                O Pocket Coin é um motor de busca nativo brasileiro feito para auxiliar
                investidores a fazer conversões das principais moedas em tempo real e simultaneamente
                fornecem notícias do mercado financeiro para auxiliar assim em decisões mais assertivas.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                   '../lampada5.png'
              }
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Real VS Moedas</TestimonialHeading>
              <TestimonialText>
              Ao inserir um valor em Real ocorre a conversão para 
              Dólar Americano, Euro, Iene Japonês e Bitcoin. O conversor de moedas agiliza os resultados dos valores do câmbio.
              Dessa maneira, é possível ter em mãos os valores de transações com muito mais eficiência.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                 'https://static.thenounproject.com/png/1304266-200.png'
              }
            />
          </Testimonial>
         
        </Stack>
      </Container>
    </Box>
  );
}