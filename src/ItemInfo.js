import './App.css';
import { useState, useEffect } from 'react';

function ItemInfo({ match }) {
  const [item, setItem] = useState('');  

  useEffect(() => {
    const fetchItem = async () => {
      const idMatch = await match.params.id;
      setItem(idMatch);
    };
    fetchItem();
  }, [item, match.params.id]);

  return (
    <div>
      <h1>item</h1>
      <img src={`https://fortnite-api.com/images/cosmetics/br/${item}/icon.png`} alt=''/>
    </div>
  );
}

export default ItemInfo;
