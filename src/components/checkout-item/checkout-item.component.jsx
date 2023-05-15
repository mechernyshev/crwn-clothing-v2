import './checkout-item.styles'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import {CheckoutItemContainer, ImageContainer, Quantity} from "./checkout-item.styles";

const CheckoutItem = ({cartItem}) => {
    const {id, name, imageUrl, price, quantity} = cartItem
    const { cartItems, addItemToCart, clearItemFromCart, removeItemFromCart } = useContext(CartContext)

    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)

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
