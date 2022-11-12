import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button'
import CartItem from '../cart-item/cart-item'
import { CartDropdownContainer } from './cart-dropdown.styles'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    function routeChange() {
        const path = `checkout`;
        navigate(path)

    }

    return (
        <CartDropdownContainer>

            <div className="cart-items">
                {cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))}
            </div>
            <Button onClick={routeChange}>CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown