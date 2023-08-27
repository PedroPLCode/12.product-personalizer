import { useState } from 'react';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  return (
    <article className={styles.product}>
      <ProductImage name={props.name}
                    title={props.title}
                    currentColor={currentColor} />
      <ProductOptions sizes={props.sizes}
                    colors={props.colors}
                    title={props.title}
                    basePrice={props.basePrice}
                    currentColor={currentColor}
                    currentSize={currentSize}
                    setCurrentColor={setCurrentColor}
                    setCurrentSize={setCurrentSize} />
    </article>
  )
};

export default Product;