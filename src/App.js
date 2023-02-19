import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './App.css';
import './components/Intro/Intro';


import EldenMain from './components/EldenMain/EldenMain.js';
import Intro from './components/Intro/Intro.js';
import Margit from './components/Margit/Margit.js';
import Rozen from './components/Rozen/Rozen.js'

import './components/EldenMain/EldenMain.css'
import './components/Intro/Intro.css'

function App() {
  return (
    <div className="Container">
          
        <Parallax pages={5} style={{ top: '0', left: '0' }} class="animation">
          
          <EldenMain />

          <Intro />

          <Margit />

          <Rozen />

          

          

          
          <div class = 'wrapper5'>
          <ParallaxLayer offset={4} speed={0.75}>
          <div class="animation_layer" id="Malenia-Back"></div>

          </ParallaxLayer >
          <ParallaxLayer offset={4} speed={0.75}>
          <div class="animation_layer" id="leaf"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.5} >
          <div class="animation_layer" id="Malenia"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.45} >
          <div class="animation_layer" id="Helmet"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.45} >
          <div class="animation_layer" id="arm"></div>
          </ParallaxLayer>
          

          <ParallaxLayer offset={4} speed={1.5}>
          <p class='hot-txt'> House <br></br>of<br></br> Tarnished</p>

          </ParallaxLayer>

          </div>


       


       
      
        </Parallax>
      </div>
      
      
   
   
  );
}

export default App;
