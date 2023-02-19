import './Intro.css';






import { Parallax, ParallaxLayer } from '@react-spring/parallax'



function Intro() {



   return (
      <div class = 'wrapper2'>
      <ParallaxLayer offset={1} speed={0}>
                <div class='nd'> </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.15}>
          <p class='Intro-txt'> A Long, long time ago in a Lands far, Far away.<br></br>
                                The Lands Between.</p>
      </ParallaxLayer>
      </div>


   );
}

export default Intro