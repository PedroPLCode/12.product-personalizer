import styles from './ProductHeader.module.scss';
import PropTypes from 'prop-types';

const ProductHeader = props => {
  return (
    <header>
      <h2 className={styles.name}>{props.title}</h2>
      <span className={styles.price}>Price: {props.getPrice(props.basePrice, props.currentSize)}$</span>
    </header>
  );
};

ProductHeader.propTypes = {
  basePrice: PropTypes.number.isRequired,
  currentSize: PropTypes.object.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default ProductHeader;