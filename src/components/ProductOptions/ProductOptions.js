import ProductHeader from '../ProductHeader/ProductHeader';
import OptionsSize from '../OptionsSize/OptionsSize';
import OptionsColor from '../OptionsColor/OptionsColor';
import Button from '../Button/Button';
import styles from './ProductOptions.module.scss';
import PropTypes from 'prop-types';

const ProductOptions = props => {

  const getPrice = (basePrice, currentSize) => {
    return basePrice + currentSize.additionalPrice;
  }
    
  const sentOrder = (event, title, basePrice, currentSize, currentColor) => {
    event.preventDefault();
    console.log(`
      ORDER SENT:
      Name: ${title}
      Price: ${getPrice(basePrice, currentSize)}
      Size: ${currentSize.name}
      Color: ${currentColor}
    `);
    resetToDefault();
  };

  const resetToDefault = () => {
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

ProductOptions.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.object.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductOptions;