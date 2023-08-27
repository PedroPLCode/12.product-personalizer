import ProductHeader from '../ProductHeader/ProductHeader';
import OptionsSize from '../OptionsSize/OptionsSize';
import OptionsColor from '../OptionsColor/OptionsColor';
import Button from '../Button/Button';
import styles from './ProductOptions.module.scss';
import PropTypes from 'prop-types';

const ProductOptions = props => {
    
  const sentOrder = (event, title, totalPrice, currentSizeName, currentColor) => {
    event.preventDefault();
    console.log(`
      ORDER SENT:
      Name: ${title}
      Price: ${totalPrice}
      Size: ${currentSizeName}
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
                     totalPrice={props.totalPrice}/>
      <form>
        <OptionsSize sizes={props.sizes}
                     currentSize={props.currentSize}
                     setCurrentSize={props.setCurrentSize}/>
        <OptionsColor colors={props.colors}
                     currentColor={props.currentColor}
                     setCurrentColor={props.setCurrentColor}/>
        <Button onClick={ (event) => sentOrder(event, props.title, props.totalPrice, props.currentSize.name, props.currentColor)}
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
  totalPrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.object.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductOptions;