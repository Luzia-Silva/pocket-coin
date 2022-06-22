import { 
Stack,
Flex, 
Container,
StatLabel,
Stat,
StatNumber,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ResultCoins = () => {
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
                     <StatNumber>${e.elements.bid}</StatNumber>
                  </Stat>
                ))}
              </Stack>
          </Container>
        </Flex>
     )
}
export default ResultCoins
