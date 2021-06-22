import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl}) => {

    return(

        <div className="menu-item">

        <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='title'>
        <h1>{title.toUpperCase()}</h1>
    </div>

    </div>


    )

   


}

export default MenuItem;
