
import { Box } from '@chakra-ui/react'
import Coins from '../Components/Coins/Coins'
import ThreeTierPricingHorizontal from '../Components/Header'
import News from '../Components/News'
import Title from '../Components/Title'


const Amount = () =>{
  return(
    <>
     <Box background="#eee">
      <ThreeTierPricingHorizontal/>
            <Coins />
      </Box>

      <Title/>
      <News/>
    </>

  )
}
export default Amount