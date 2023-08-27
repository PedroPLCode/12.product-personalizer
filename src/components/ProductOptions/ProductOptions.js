import OptionsSize from '../OptionsSize/OptionsSize';
//import OptionsColor from '../OptionsColor/OptionsColor';
import Button from '../Button/Button';
import clsx from 'clsx';
import styles from './ProductOptions.module.scss';

const ProductOptions = props => {

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
      props.setCurrentColor(props.colors[0]);
      props.setCurrentSize(props.sizes[0]);
    };

    const prepareColorClassName = color => {
      return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    };

    return (
        <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice, props.currentSize)}$</span>
        </header>
        <form>

          <OptionsSize sizes={props.sizes}
                              currentSize={props.currentSize}
                              setCurrentSize={props.setCurrentSize}/>

          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li><button type="button" 
                                                onClick={ () => props.setCurrentColor(color)} 
                                                className={clsx(prepareColorClassName(color), 
                                                color === props.currentColor && styles.active)} />
                                          </li>)}
            </ul>
          </div>
          
          <Button onClick={ (event) => sentOrder(event, props.title, props.basePrice, props.currentSize, props.currentColor)}
            className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    )
}

export default ProductOptions;