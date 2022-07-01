import { 
Stack,
Flex, 
Container,
StatLabel,
Stat,
StatNumber,
StatHelpText,
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
  const [amount, setAmount] = useState<number>();
      useEffect( ()=>{
          setAmount(Number(router.query?.amount))
      }, [router.query?.amount])


  useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,JPY-BRL,BTC-BRL' || process.env.API_COINS)
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
            <Box background={'#beb9b959'} p={3}>
            <ThreeTierPricingHorizontal text={String(amount)}/>
              <Flex 
                justify={["center"]} 
                p={2}>
                <Container maxW="container.xl" centerContent>
                  <Stack direction={['column', 'row']} spacing='24px'>
                    {coins.map((e, index) => (
                    <Stat 
                      p={{sm: '0.5rem', base: '1rem', md: '0.8rem', lg: '1rem' }}
                      backgroundColor='white'
                      key={e}
                      borderRadius='lg'
                      w={{sm: '100px', base: '380px', md: '150px', lg: '250px' }}
                      textAlign="center">
                            <StatLabel fontSize={{sm:'12px', base: '18px', md: '14px', lg: '14px' }}>{e.elements.name}</StatLabel>
                          <StatNumber fontSize={{sm:'14px', base: '20px', md: '18px', lg: '25px' }}>
                            {  index > 2 && 
                                (Number(amount) / e.elements.bid * 0.001).toFixed(5)
                                || index <= 2 &&
                                (Number(amount) / e.elements.bid ).toFixed(2)
                            }
                            </StatNumber>
                             <StatHelpText  m={1} fontSize={{sm:'10px', base: '16x', md: '12px', lg: '14px' }}>{e.elements.create_date}</StatHelpText>
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