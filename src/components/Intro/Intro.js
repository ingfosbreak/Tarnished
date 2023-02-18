import './Intro.css';


import margit from '../../assets/margit.jpg';



import React from 'react';



function Intro() {



   return <div class = "block-int">
            <div class = "Main-int">
               <p class='Intro-txt'> A Long, long time ago in a Land far, Far away.<br></br>
                                    The Land Between.
               </p>
            
               
            </div>
            <img src={margit}  alt= 'margit' id='margit' class ='margit'/>
            <div class = 'Second-int'><p class='margit-txt'>"...Foul Tarnished, in search of the Elden Ring. <br></br>
            Emboldened by the flame of ambition. <br></br>
            Someone must extinguish thy flame. <br></br>
            Let it be Margit the Fell..."</p>
            </div>
          
         </div>
}

export default Intro