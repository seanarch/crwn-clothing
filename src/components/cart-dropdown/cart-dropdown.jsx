import './cart-dropdown.styles.scss'
import Button from '../buttom/button'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items" />
            <Button>CHECKOUT</Button>
        </div >
    )
}

export default CartDropdown