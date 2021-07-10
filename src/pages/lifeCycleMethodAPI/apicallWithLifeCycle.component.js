import React from "react";
import axios from 'axios';

class ApiwithLifecycle extends React.Component{

    constructor(){
        super();
        this.state = {
            name: 'lifecycle',
            data: []
        }
        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount(){

         this.getProducts() //side effect
           
    }

    async getProducts(){
         
           let response = await fetch("https://fakestoreapi.com/products");

           if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
           }
           else{
                console.log(response)
                this.setState({data:response})
           }

          
         }
    }


    render(){
        const {products} = this.state.data
        return(

            <div className="api">
                
                {
                    products ? 


                }


            </div>

        )
    }





}