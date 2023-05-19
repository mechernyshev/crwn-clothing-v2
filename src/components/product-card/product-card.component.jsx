import './product-card.styles'
import '../button/button.component'
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {ProductCardContainer} from "./product-card.styles";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const {name, price, imageUrl} = product


    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    return (<ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>)
}

export default ProductCard
