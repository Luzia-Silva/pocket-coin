import { 
Stack,
Flex, 
Container,
StatLabel,
Stat,
StatNumber,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react'
import ThreeTierPricingHorizontal from '../Components/Header'
import Navbar from '../Components/Navbar'
import News from '../Components/News'
import Title from '../Components/Title'
import { useRouter } from 'next/router';


const Result = () =>{
  const router = useRouter();

  const [coins, setCoins] = useState<any[]>([]);
  const [amount, setAmount] = useState<string>(String(router.query?.amount));
  console.log(router.query?.amount)

  useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,JPY-EUR' || process.env.API_COINS)
    .then( async response => {
      const json = await response.json();
      const arrayAmount:any = Object.entries(json).map(([key, value]) => ({'coin': key, 'elements': value }));
      setCoins(arrayAmount)
    })
    }, [])

    if (!coins) return <div>Loading...</div>

    return (
      <>
        <Navbar />
            <Box background="#beb9b959" p={3}>
            <ThreeTierPricingHorizontal text={amount}/>
              <Flex 
                justify={["center"]} 
                p={2}>
                <Container maxW="container.xl" centerContent>
                  <Stack direction={['column', 'row']} spacing='24px'>
                    {coins.map(e => (
                    <Stat 
                      p={5}
                      background="white"
                      key={e.coin}
                      borderRadius='lg'
                      w='9rem'>
                            <StatLabel>{e.elements.code}</StatLabel>
                          <StatNumber>${Math.floor(Number(amount) / e.elements.bid)}</StatNumber>
                        </Stat>
                      ))}
                    </Stack>
                </Container>
              </Flex>
            </Box>
          <Title/>
      <News/>

      </>
     )
    }
export default Result