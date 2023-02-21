import './Rozen.css';



import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Rozen() {
    return (
        <div class = 'wrapper4'>

          <ParallaxLayer offset={3} speed={0.75}>
          <div class="animation_layer" id="Rozen"></div>
          <p class='Rozen-txt'>"With Respect to 
          Rozen & Reven <br></br> Our fellows tarnished,<br></br>who contributed <br></br>the melody of the GOD"</p>

          </ParallaxLayer>

          </div>



    );

}

export default Rozen;