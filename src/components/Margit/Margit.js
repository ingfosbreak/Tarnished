

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Margit.css'


function Margit(){
    return (
        <div class = 'wrapper3'>
          <ParallaxLayer offset={2} speed={0.25}>
            <div class="animation_layer" id="margit"></div>
            
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
          <p class='margit-txt'>"...Foul Tarnished, in search of the Elden Ring. <br></br>
            Emboldened by the flame of ambition. <br></br>
            Someone must extinguish thy flame. <br></br>
            Let it be Margit the Fell..."</p>

          </ParallaxLayer>
          </div>


    );
}

export default Margit;