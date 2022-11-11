import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd 
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    // if found, increment quantity 
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    // return new array with modified cartItems/ new cart item 

    return [...cartItems, { ...productToAdd, quantity: 1 }]

}

const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = (cartItems).find((cartItem) => cartItem.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    )
}

const clearItem = (cartItems, cartItemToRemove) => {

    const existingCartItem = (cartItems).find((cartItem) => cartItem.id === cartItemToRemove.id)

    if (existingCartItem) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    removeItem: () => { },
    cartCount: 0,
    cartTotal: 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems])




    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeItemFromCart(cartItems, cartItemToRemove))
    }
    const removeItem = (cartItemToRemove) => {
        setCartItems(clearItem(cartItems, cartItemToRemove))
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, removeItem, cartTotal }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

