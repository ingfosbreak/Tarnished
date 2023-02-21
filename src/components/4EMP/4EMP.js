import './4EMP.css'


import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function Four(){
    return (
        
        <div class = 'wrapper6'>

    
          <ParallaxLayer offset={5} speed={0.7}>
          
            
            <div class="animation_layer" id="four-1"></div>
            

            
          </ParallaxLayer >

          <ParallaxLayer offset={5} speed={0.4}>
          
            
            <div class="animation_layer" id="four-2"></div>
            

            
          </ParallaxLayer >

          <ParallaxLayer offset={5} speed={0.45}>
          
            
            <div class="animation_layer" id="four-3"></div>
            

            
          </ParallaxLayer >

          <ParallaxLayer offset={5} speed={0.35}>
          
            
            <div class="animation_layer" id="four-4"></div>
            

            
          </ParallaxLayer >

          <ParallaxLayer offset={5} speed={0.5}>
          <div class="animation_layer" id="emp-txt"></div>
           {/* <p class='ink-txt'>four Emperors</p>
           <p class='ink-txt' id = 'four'>4</p> */}
           

          
          </ParallaxLayer>
      

          </div>




    );
}


export default Four;