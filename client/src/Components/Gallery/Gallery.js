import React from 'react';
import './Gallery.css';
import {useEffect,useState} from "react";
import {ApiUrl} from "../../const"
function Gallery({images}){
    var first = 1;
    var last = 5;
    const [bottomPictures,setBPictures] = useState([])
    useEffect(() => {
        const bPictures = images.slice(first,last)
        setBPictures(bPictures)

        document.getElementById("back").addEventListener('click',(event) =>{
            if(first == 1) return
            else{
                first--;
                last --;
                const down = images.slice(first,last)
                setBPictures(down)
            }

        });

        document.getElementById("next").addEventListener('click',(event) =>{
            console.log(images)
            if(last >= images.length ) return
            else{
                first++;
                last ++;
                const down = images.slice(first,last)
                setBPictures(down)
            }

        });

    
  }, []);
    return(
        
            <div class='container-gallery'>
                <img src = {images[0].src}  alt = "main Image"/>
                <div class ="smaller">
                    <button type="button" id="back">&lt;</button>
                    {bottomPictures.map(i => (
                        <img src = {i.src} alt="other picture"></img>
                    ))}
                     <button type="button" id="next">&gt;</button>
                    </div>
            </div>


    );

}

export default Gallery;