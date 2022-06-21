import { 
Text, 
Flex, 
Container,
Grid,
Link,
GridItem
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const ResultCoins = () => {
  
  const [coins, setCoins] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,USD-XOF')
    .then( async response => {
      const json = await response.json();
      const arrayAmount:any = Object.entries(json).map(([key, value]) => ({'coin': key, 'elements': value }));
      setCoins(arrayAmount)
    })
    }, [])

    useEffect(() => {
    fetch('http://localhost:3333/crawler')
    .then( async response => {
      const json = await response.json();
      setNews(json)
    })
    }, [])
    
    
    if (!coins) return <div>Loading...</div>

    return (
        <Container maxW="container.xl"  p={4} centerContent> 
        <Flex 
         direction={['column', 'row']}
          p={2}
        hidden={false}>
          <Grid  templateRows="repeat(2, 1fr)" templateColumns='repeat(3, 1fr)' gap={2} >
            {news.map(e => (
            <GridItem
            rowSpan={2} colSpan={1}
              maxW={'320px'}
              w={'full'}
              borderWidth='1.8px' 
              borderRadius='lg'
              p={4}
              textAlign={'center'} 
              key={e.coin}>
                <Link href={e.link} color={'gray.600'}>
                {e.title}
                </Link>
              </GridItem>
                ))}

  
          </Grid>
        </Flex>
        </Container>
        )
}
export default ResultCoins
