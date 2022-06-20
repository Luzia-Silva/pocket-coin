import { 
Box,
Stack,
Heading, 
Text, 
Flex, 
Container
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const ResultCoins = () => {
  const [coins, setCoins] = useState<any[]>([]);
  useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,USD-XOF')
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
          w="100vw"
          p={2}>
          <Container maxW="container.sm" centerContent>
            <Text textAlign="center"
            fontSize='2rem'
            color='black'
            p={5}>
            Você pode comprar com $100
            </Text>
            <Stack direction={['column', 'row']} spacing='24px'>
              {coins.map(e => (
                <Box p={4} 
                    shadow='Outline'
                    borderWidth='1.8px' 
                    min-height={10} 
                    w={300} 
                    borderRadius={20} 
                    key={e.coin}>
                      <Heading 
                      fontSize='2rem' 
                      textAlign='center'  
                      marginBottom={4}>
                      ${e.elements.bid}
                      </Heading>
                      <Text
                      textAlign="center"
                      fontSize='1rem'> 
                      {e.elements.name} 
                      </Text>
                  </Box>
                ))}
            </Stack>
          </Container>
        </Flex>
     )
}
export default ResultCoins
