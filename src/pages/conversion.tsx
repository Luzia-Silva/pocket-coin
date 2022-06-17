import { Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import api from "./services/api";

const typeCoins = '/USD-BRL,EUR-BRL,BTC-BRL,USD-XOF';
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
        Bora Codar!
      </Text>
    )
}
export default Conversion;