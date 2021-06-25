import React from 'react';
import './Card.css';
function Card({name, imageURL, price}){
    return(
            <div class='card-container'>
                <div class="image-container">
                    <img src={imageURL} alt="Image" />
                </div>

                <div class="card-content">

                    <div class="card-title">
                        <h2>{name}</h2>
                    </div>

                    <div class="card-body">
                        <p>Start price from ${price}</p>
                    </div>

                </div>
                
            </div>


    );

}

export default Card;