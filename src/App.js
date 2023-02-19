import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './App.css';
import './components/Intro/Intro';


import EldenMain from './components/EldenMain/EldenMain.js';
import Intro from './components/Intro/Intro.js';
import Margit from './components/Margit/Margit.js';
import Rozen from './components/Rozen/Rozen.js';
import Malenia from './components/malenia/Malenia.js';

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

          <Malenia />

        </Parallax>
      </div>
      
      
   
   
  );
}

export default App;
