import { ReactComponent } from '*.svg';
import React from 'react';


class Book extends React.Component{

    constructor(props){
        super(props);
    }

    submitBook(input){
        this.props.createBook(input);// action gets triggered 
    }


    render(){
        let textInput = null;


        return(
            <div>
                <h3>Books</h3>
                <ul>

                </ul>
            
            <div>
                <h3>Books listing form</h3>
                <form onSubmit={event => {
                    event.preventDefault();
                    var input = {title:titleInput};
                    this.submitBook(input);

                }}>

                <input type="text" name="title"/>
                <input type="submit"/>

                </form>
            </div>
            </div>

        )

    }


}
