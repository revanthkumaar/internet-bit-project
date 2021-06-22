import React from 'react';

import './directory.styles.css';

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {

    constructor(){
        super();

        this.state = {
            sections:  [
                {
                    title:'Veggies',
                    imageUrl: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg',
                    id:1,
                    linkUrl:'veggies'
                },
                {
                    title:'fruits',
                    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg',
                    id:2,
                    linkUrl:'fruits'
                },
                {
                    title:'dairy',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENgm8iHViJY7igbBelx7Ps61fkhUpL--z_E024mWFUF18p_p5kVqW-Td_0gQjp9vrGuE&usqp=CAU',
                    id:3,
                    linkUrl:'dairy'
                }
            ],

        }

    }
    render() {
        return(
            <div className="directory">
                {
                    this.state.sections.map(({id, ...otherSectionProps})=> (
                            <MenuItem key={id} {...otherSectionProps} />
                    ) )}
               
            </div>

        )
    }

}

export default Directory;