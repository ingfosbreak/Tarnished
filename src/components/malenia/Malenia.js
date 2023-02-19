import './Malenia.css'


function Malenia() {
    return (
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
    );

}

export default Malenia;