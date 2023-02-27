


import './Ink.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Ink2() {
    return (
        <div class = 'wrapper8'>

          <ParallaxLayer offset = {6} speed={2}>
            <p class='InkB-txt'> Mr. Prince,<br></br> The Moon Lord.</p>
            <p class='InkB-txt2'>To be known as <br></br>"The Strongest Swordsman"</p>
            <p class='InkB-txt3'>Bounty <br></br>"3,790,000,000 Runes"</p>
                
          </ParallaxLayer>
           

          <ParallaxLayer offset={7.5} speed={-0.2}>
          <div class="animation_layer" id="back"></div>
          </ParallaxLayer >
          <ParallaxLayer offset={7.5} speed={-0.25}>
          <p class='Ink2-txt'> Moon Lord</p>
          </ParallaxLayer>
          <ParallaxLayer offset={7.5} speed={-0.2}>
          <div class="animation_layer" id="sword"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={7.5} speed={-0.2} >
          <div class="animation_layer" id="jesus"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={7.5} speed={0} >
          <div class="animation_layer" id="foreground-ink2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={7.5} speed={0} >
          <div class="animation_layer" id="hair"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={7.5} speed={0}>
            <div class ='transition-ink2'></div>
            </ParallaxLayer>



            
          
{/* 
          <ParallaxLayer offset={4} speed={1.5}>
          <p class='hot-txt'> House <br></br>of<br></br> Tarnished</p>

          </ParallaxLayer> */}

          </div>
    );

}


export default Ink2;