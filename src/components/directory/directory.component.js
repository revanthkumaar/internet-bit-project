import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component'

import {withRouter} from 'react-router-dom'

class Directory extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            sections:  []
        };

    }

    componentDidMount(){
            console.log('directory component loaded just now')
            //this function gets triggered when the component is loaded
            //call an API when the components mounts 

            //making call with fetch api of javascript 
            fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(response => {
                this.setState({sections:response})
                console.log('am inside the promise, looks like promise is resolved successfully')
                console.log(response)

            }
                )
            .catch(error => console.log(error))
            console.log('received response')
            console.log(this.state.sections);
        }

    render() {

       
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps})=> (
                            <MenuItem key={id} {...otherSectionProps} />
                    ) )}
               
            </div>

        )
    }

}

export default withRouter(Directory);