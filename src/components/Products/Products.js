import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);
  //const [currentColor, setCurrentColor] = useState(...products.colors[0]);
  //const [currentSize, setCurrentSize] = useState(...products.sizes[0].name);

  return (
    <section>
      {products.map(product => <Product key={product.id} 
                    //currentColor={currentColor} 
                    //currentSize={currentSize}
                    {...product} />)}
    </section>
  );
};

export default Products;