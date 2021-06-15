import React from 'react';
import './card.css';
function Card({name, imageURL, price}){
    return(
            <div className='card-container'>
                <div className="image-container">
                    <img src={imageURL} alt="Image" />
                </div>

                <div className="card-content">

                    <div className="card-title">
                        <h2>{name}</h2>
                    </div>

                    <div className="card-body">
                        <p>{price}</p>
                    </div>

                </div>
                
            </div>


    );

}

export default Card;