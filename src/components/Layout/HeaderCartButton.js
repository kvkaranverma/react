import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon.js';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context.js';

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);
    const noOfCartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return <>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span></span>
            <span className={classes.badge}>{noOfCartItems}</span>
        </button>
    </>
}

export default HeaderCartButton;