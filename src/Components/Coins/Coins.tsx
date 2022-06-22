import { 
Stack,
Flex, 
Container,
StatLabel,
Stat,
StatNumber,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const ResultCoins = () => {
  const [coins, setCoins] = useState<any[]>([]);
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
                 border='3px solid #ecc94b'>
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
