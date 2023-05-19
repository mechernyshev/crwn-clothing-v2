import {CART_ACTION_TYPES} from "./cart.types";
import {createAction} from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)

const addCartItem = (cartItems, productToAdd) => {
    //find if cart items contains product to add

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id )
    //if found - increment quantity

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }
    // return nw array with modify cart items/new cart item
    // [{...productToAdd, quantity: 1}]

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id )

    // check if quantity is equal to 1 and if it is - remove item from cart
    if(existingCartItem.quantity ===1 ) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    // if it isn't - reduce quantity for that item
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity -1 }
            : cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems =removeCartItem(cartItems, cartItemToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems =clearCartItem(cartItems, cartItemToClear)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
