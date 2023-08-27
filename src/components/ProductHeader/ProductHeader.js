import styles from './ProductHeader.module.scss';

const ProductHeader = props => {
    return (
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.getPrice(props.basePrice, props.currentSize)}$</span>
        </header>
    );
};

export default ProductHeader;