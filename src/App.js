import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './App.css';
import './components/Intro/Intro';

import './components/Ink/Ink.css';


import EldenMain from './components/EldenMain/EldenMain.js';
import Intro from './components/Intro/Intro.js';
import Margit from './components/Margit/Margit.js';
import Rozen from './components/Rozen/Rozen.js';
import Malenia from './components/malenia/Malenia.js';
import Four from './components/4EMP/4EMP.js';

import './components/EldenMain/EldenMain.css'
import './components/Intro/Intro.css'

function App() {
  return (
    <div className="Container">
          
        <Parallax pages={7} style={{ top: '0', left: '0' }} class="animation">
          
          <EldenMain />

          <Intro />

          <Margit />

          <Rozen />

          <Malenia />

          <Four />

          <ParallaxLayer sticky={{start: 5.8, end:6}} speed={2}>
          <div class="animation_layer" id="wanted"></div>
          </ParallaxLayer>

          
          

       

        </Parallax>
      </div>
      
      // <div class="animation_layer" id="wanted"></div>
   
   
  );
}

export default App;
