import React from 'react';

import GetOutfitImage from './GetOutfitImage.js'

import Carousel from 'react-elastic-carousel';


const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width: 350, itemsToShow: 2},
    { width: 525, itemsToShow: 3},
    { width: 700, itemsToShow: 4},
    { width: 875, itemsToShow: 5},
    { width: 1050, itemsToShow: 6},
    { width: 1225, itemsToShow: 7},
    { width: 1400, itemsToShow: 8},
    { width: 1575, itemsToShow: 9},
    { width: 1750, itemsToShow: 10},
]

const GetOutfitSubcomponent= (props) =>{

    return(
        
        <div className="content-carousel">
            <Carousel breakPoints={breakPoints} >
        
                {props.outfit && (
                    props.outfit.map((outfit1) => {
                        return(
                            
                            <GetOutfitImage image={outfit1.Outfits} category={props.category}/>
                    
                        )
                    })
                )}
                    
            </Carousel>
        </div>
    )
}

export default GetOutfitSubcomponent;