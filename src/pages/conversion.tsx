import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import api from "./services/api";

// types coins
const typeCoins = '/USD-BRL,EUR-BRL,BTC-BRL';
const Conversion = () => {
  const [coins, setCoins] = useState([]);
    useEffect (()=> {
      api
      .get(typeCoins)
      .then(({data})=>{setCoins(data);
});
      console.log(coins);
    }, [])
    return(
      <Text fontSize='50px' color='White'>
       {coins?.map()}
      </Text>
    )
}
export default Conversion;