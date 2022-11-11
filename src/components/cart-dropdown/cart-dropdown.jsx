import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'
import Button from '../buttom/button'
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    function routeChange() {
        const path = `checkout`;
        navigate(path)

    }

    return (
        <div className='cart-dropdown-container'>

            <div className="cart-items">
                {cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))}
            </div>
            <Button onClick={routeChange}>CHECKOUT</Button>
        </div >
    )
}

export default CartDropdown