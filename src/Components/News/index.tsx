import { 
Flex, 
Container,
Grid,
Link,
GridItem
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const ResultCoins = () => {
  const [news, setNews] = useState<any[]>([]);
    useEffect(() => {
    fetch('http://myfarog.com/crawler')
    .then( async response => {
      const data = response.json();
      setNews(await data)
    })
    }, [])
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
              border='3px solid #ecc94b'
              borderRadius='lg'
              p={4}
              textAlign={'center'} 
              key={e.id}>
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
