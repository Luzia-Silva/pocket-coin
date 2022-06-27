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
    fetch(process.env.NEXT_PUBLIC_API_CRAWLER || 'https://myfarog.com/crawler'  )
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
          <Grid  templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4} >
            {news.map(e => (
          <Flex
         boxShadow={'lg'}
                  maxW={'640px'}
                  width={'full'}
                  rounded={'xl'}
                  p={5}
                  justifyContent={'center'}
                  position={'relative'}
                  bg={'white'}
                  border="2px solid #8376767a"
                  text-align="center"
                key={e.id}>
                <Link href={e.link} 
                textAlign="center" 
                color={'gray.600'}>
                {e.title}
                </Link>
              </Flex>
                ))}

  
          </Grid>
        </Flex>
        </Container>
        )
}
export default ResultCoins
