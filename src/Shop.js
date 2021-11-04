import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
    const jsonResponse = await data.json();
    const items = await jsonResponse.data.items;
    console.log(items);
    setItems(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/Shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
