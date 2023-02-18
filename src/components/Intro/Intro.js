import './Intro.css';
import stars from '../../assets/stars.png';
import mount from '../../assets/mountain.png';
import React from 'react';



function Intro() {
   return <div class = "block-int">
            <div class = "Main-int">
               <img src={stars} class="stars" alt= 'stars' />
               <img src={mount} class="mountain" alt = 'mountain' />
               
               
               
               
               <p class='text'>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
               
            </div>
          
         </div>
}

export default Intro