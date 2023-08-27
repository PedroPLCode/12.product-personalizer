import { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = (basePrice, currentSize) => {
    return basePrice + currentSize.additionalPrice;
  }

  const sentOrder = (event, title, basePrice, currentSize, currentColor) => {
    event.preventDefault();
    console.log(`
      Your Order:
      Name: ${title}
      Price: ${getPrice(basePrice, currentSize)}
      Size: ${currentSize.name}
      Color: ${currentColor}
    `);
    setCurrentColor(props.colors[0]);
    setCurrentSize(props.sizes[0]);
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice, currentSize)}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li><button type="button" 
                                              onClick={ () => setCurrentSize(size)} 
                                              className={clsx(size === currentSize && styles.active)}>
                                                {size.name}
                                            </button>
                                        </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li><button type="button" 
                                                onClick={ () => setCurrentColor(color)} 
                                                className={clsx(prepareColorClassName(color), 
                                                color === currentColor && styles.active)} />
                                          </li>)}
            </ul>
          </div>
          <Button onClick={ (event) => sentOrder(event, props.title, props.basePrice, currentSize, currentColor)}
            className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;