import './checkout-item.styles'
import {useSelector, useDispatch} from "react-redux";
import {selectCartItems, selectCartCount, selectCartTotal} from "../../store/cart/cart.selector";
import {addItemToCart, removeItemFromCart, clearItemFromCart} from "../../store/cart/cart.action";

import {CheckoutItemContainer, ImageContainer, Quantity} from "./checkout-item.styles";

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const {id, name, imageUrl, price, quantity} = cartItem
    const cartItems = useSelector(selectCartItems)

    addItemToCart, clearItemFromCart, removeItemFromCart


    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))

    return (
        <CheckoutItemContainer className='checkout-item-container' key={id}>

            <ImageContainer className='image-container'>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <span className='name'>{name}</span>
            <Quantity>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </Quantity>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem
