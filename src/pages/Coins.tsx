import { useEffect, useState } from 'react';

const Coins = () =>{
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,USD-XOF')
      .then(response => response.json())
      .then(
        data => {
          setCoins(data);
        })
  }, [])
    console.log(coins)
    return (
      <ul>
        {coins.map(e => (
          <li key={e}>
            {e}
          </li>
        ))}
      </ul>
    )
  }
export default Coins