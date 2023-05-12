import {CartItemContainer, Img, Name, ItemDetails} from './cart-item.styles'

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`}/>
            <ItemDetails className='item-details'>
                <Name className='name'>{name}</Name>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem
