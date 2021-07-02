import React from 'react';
import './Gallery.css';
import {useEffect,useState} from "react";
import {ApiUrl} from "../../const"
function Gallery({images}){
    const first = 1;
    const last = images.length -1;
    useEffect(() => {
        document.getElementById("back").addEventListener('click',(event) =>{
            console.log("u backu sam")
        });

    
  }, []);
    return(
        
            <div class='container-gallery'>
                <img src = {images[0].src}  alt = "main Image"/>
                <div class ="smaller">
                    <button type="button" id="back">&lt;</button>
                    {images.map(i => (
                        <img src = {i.src} alt="other picture"></img>
                    ))}
                     <button type="button" id="next">&gt;</button>
                    </div>
            </div>


    );

}

export default Gallery;