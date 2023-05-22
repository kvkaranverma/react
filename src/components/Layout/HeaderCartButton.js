import CartIcon from '../Cart/CartIcon.js';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    return <>
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span></span>
            <span className={classes.badge}>3</span>
        </button>
    </>
}

export default HeaderCartButton;