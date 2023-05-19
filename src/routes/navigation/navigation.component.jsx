import {Outlet, Link} from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import {NavigationContainer, NavLink, LogoContainer, NavLinks} from "./navigation.styles";

import {useSelector} from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import  {selectIsCartOpen} from "../../store/cart/cart.selector";

import {signOutUser} from "../../utils/firebase/firebase.utils";


const Navigation = () => {
   // const { currentUser} = useContext(UserContext)
    const currentUser = useSelector((state) => state.user.currentUser)

    const { isCartOpen } = useSelector(selectIsCartOpen)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo'/>
                </LogoContainer>

                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                </NavLinks>

                <NavLinks className='nav-links-container'>
                    {
                        currentUser ?
                            (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                            :
                            (<NavLink to='/auth'>
                                    SIGN IN
                            </NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
