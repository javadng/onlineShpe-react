import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';

import classes from './InputChangeNumber.module.scss';

const InputChangeNumber = props => {
  const customClasses = `${props.className} ${classes.number__procut}`;
  const { id, quantity, name, price } = props;

  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );

    dispatch(
      uiActions.showNotification({
        status: 'success',
        titile: '',
        message: 'Item Added to cart',
      })
    );
  };

  const decreaseHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <div className={customClasses}>
      <span className={classes.decrease} onClick={decreaseHandler}>
        -
      </span>
      <input type="number" min="0" placeholder={quantity} />
      <span className={classes.increase} onClick={increaseHandler}>
        +
      </span>
    </div>
  );
};

export default InputChangeNumber;
