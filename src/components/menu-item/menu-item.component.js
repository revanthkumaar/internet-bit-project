import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom'
 
const MenuItem = ({title, imageUrl, linkUrl, history, match, location}) => {
    
    return(

        <div className="menu-item"
        onClick={ () => history.push(`${match.url}${linkUrl}`) }>
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
export default withRouter(MenuItem); //wrap your component inside the higher order component
