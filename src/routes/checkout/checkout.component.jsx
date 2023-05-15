import './checkout.styles'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutContainer, CheckoutHeader, HeaderBlock} from "./checkout.styles";

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart, cartTotal } = useContext(CartContext)

    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            <div>
                {
                    cartItems.map((cartItem) =>  <CheckoutItem  key={cartItem.id} cartItem={cartItem}/>
                    )
                }
            </div>
            <span className='total'>Total: ${cartTotal}</span>
        </CheckoutContainer>
    )
}

export default Checkout
