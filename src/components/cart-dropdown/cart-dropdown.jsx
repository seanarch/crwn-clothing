import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button'
import CartItem from '../cart-item/cart-item'
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    function routeChange() {
        const path = `checkout`;
        navigate(path)

    }

    return (
        <CartDropdownContainer>

            <CartItems>
                {
                    cartItems.length ? cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />)) :
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                }

            </CartItems>
            <Button onClick={routeChange}>CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown