import React from 'react';
import withRouter from 'react-router-dom'

const CartDropdown = () => {
    <div classname='cart-dropdown'>
        <div classname='cart-items'></div>
        <CustomButton onClick={
            () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }
        }>
            GO TO CHECKOUT
        </CustomButton>
    </div>

}

export default withRouter(CartDropdown)
