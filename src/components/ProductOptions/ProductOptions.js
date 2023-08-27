import ProductHeader from '../ProductHeader/ProductHeader';
import OptionsSize from '../OptionsSize/OptionsSize';
import OptionsColor from '../OptionsColor/OptionsColor';
import Button from '../Button/Button';
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


    return (
        <div>
          <ProductHeader title={props.title}
                          currentSize={props.currentSize}
                          basePrice={props.basePrice}
                              getPrice={getPrice}/>
        <form>
          <OptionsSize sizes={props.sizes}
                              currentSize={props.currentSize}
                              setCurrentSize={props.setCurrentSize}/>
          <OptionsColor colors={props.colors}
                              currentColor={props.currentColor}
                              setCurrentColor={props.setCurrentColor}/>
          <Button onClick={ (event) => sentOrder(event, props.title, props.basePrice, props.currentSize, props.currentColor)}
            className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    )
}

export default ProductOptions;