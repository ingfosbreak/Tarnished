


import './Ink.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Ink1() {
    return (
        <div class = 'wrapper7'>
            <ParallaxLayer offset={8.5} speed={0}>
                <div class='nd'> </div>
      </ParallaxLayer>

          <ParallaxLayer offset={8.7} speed={0.4}>
          <div class="animation_layer" id="main"></div>
          </ParallaxLayer >
          <ParallaxLayer offset={8.7} speed={0.4}>
          <div class="animation_layer" id="left-hel"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={8.7} speed={0.3} >
          <div class="animation_layer" id="in-hel"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={8.7} speed={0.3} >
          <div class="animation_layer" id="out-hel"></div>
          </ParallaxLayer>

          
          <ParallaxLayer offset={8.7} speed={0.3} >
          <div class="animation_layer" id="down-hel"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={8.7} speed={0.4}>
            <div class ='transition-ink1'></div>
            </ParallaxLayer>
          
{/* 
          <ParallaxLayer offset={4} speed={1.5}>
          <p class='hot-txt'> House <br></br>of<br></br> Tarnished</p>

          </ParallaxLayer> */}

          </div>
    );

}


export default Ink1;