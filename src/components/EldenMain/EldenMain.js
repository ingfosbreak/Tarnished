
import './EldenMain.css'
import Theme from '../../assets/MainTheme.mp3';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function EldenMain() {
    return (
      <div class='wrapper'>
          
      <ParallaxLayer offset={0} speed={-0.25}>
        <div class="animation_layer parallax" id="background"></div>
        <div class="animation_layer" id="c1" style = {{'--i': 1}}></div>
        {/* <div class="animation_layer"  id="fire"></div> */}
        
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.25}>
        <div class="animation_layer parallax" id="logo"></div>

      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <div class="animation_layer parallax" id="cape"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <div class="animation_layer parallax" id="character"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <div class="animation_layer parallax" id="foreground"></div>
        <div class="animation_layer" id="c5" style = {{'--i': 5}}></div>
        
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0}>
      <div class ='transition1'>
      

                </div>
      
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.25}>
      <figure>

        <audio
          autoPlay controls loop 
            src={Theme}>
          <a href={Theme}>
              Download audio
          </a>
        </audio>
      </figure>


      </ParallaxLayer>
    
      
      </div>
    );
}

export default EldenMain;