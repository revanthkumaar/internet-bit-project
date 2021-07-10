import React from 'react';
import {withRouter} from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = ({history}) => {
    return(
          <div classname='cart-dropdown'>
              <p>cart dropdown</p>
        <div classname='cart-items'></div>
        <CustomButton onClick={
            () => {
                history.push('/checkout');   
            }
        }>
            GO TO CHECKOUT
        </CustomButton>
    </div>
    )
  

}

export default withRouter(CartDropdown)
