import { useState, useEffect } from 'react';
import config from '../config.js';

export default productsHook = () => {
  
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    fetch(`${config.URL_WEB}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  
  return products;
}
