import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef, useState } from 'react';

import './App.css';
import './components/Intro/Intro';
import './components/Ink/Ink.css';


import EldenMain from './components/EldenMain/EldenMain.js';
import Intro from './components/Intro/Intro.js';
import Margit from './components/Margit/Margit.js';
import Rozen from './components/Rozen/Rozen.js';
import Malenia from './components/malenia/Malenia.js';
import Four from './components/4EMP/4EMP.js';
import Ink1 from './components/Ink/Ink.js';
import Ink2 from './components/Ink/Ink2.js';
import InkArt from './components/Ink/InkArt.js';

import './components/EldenMain/EldenMain.css'
import './components/Intro/Intro.css'
import './components/Ink/Ink.css'


let p;
let paraRef; 

function App() {
  const Pages = 15;
  const parallax = useRef(null);
  
  p = Pages;
  paraRef = parallax;



  

  

  
  return (
    <div className="Container">
          
        <Parallax pages={Pages} style={{ top: '0', left: '0' }} class="animation" ref={parallax}>
          
          <EldenMain />

          <Intro />

          <Margit />

          <Rozen />

          <Malenia />

          <ParallaxLayer sticky={{start: 5.8, end:6.2}} speed={2}>
                <div class="animation_layer" id="wanted"></div>
                
          </ParallaxLayer>
         
          <Ink2 />

          <Four />
          
          <Ink1 />

          <InkArt />

          
     
          
          


          

      



         


          
          

       

        </Parallax>
      </div>
      
      // <div class="animation_layer" id="wanted"></div>
   
   
  );
}

export default App;
export { p, paraRef };
