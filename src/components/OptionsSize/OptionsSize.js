import clsx from 'clsx';
import styles from './OptionsSize.module.scss';
import PropTypes from 'prop-types';

const OptionsSize = props => {
    return (
        <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map(size => <li><button type="button" 
                                          onClick={ () => props.setCurrentSize(size)} 
                                          className={clsx(size === props.currentSize && styles.active)}>
                                            {size.name}
                                        </button>
                                    </li>)}
        </ul>
      </div>
    );
};

OptionsSize.propTypes = {
    setCurrentSize: PropTypes.func.isRequired,
    currentSizeme: PropTypes.string.isRequired,
    sizes: PropTypes.array.isRequired,
};

export default OptionsSize;