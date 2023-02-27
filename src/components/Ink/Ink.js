import { p, paraRef } from '../../App.js';
import useScrollYPosition from '../../containers/ScrollY/scrollY.js';

import './Ink.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useState, useEffect } from 'react';
function Ink1() {

    // const scrolling = useScrollYPosition();
    // console.log(scrolling);
    // let scroll = 0;
    // if (p == 8){
    //     scroll = scrolling;
    //     console.log(scroll);
    //     console.log('setscroll')
    // }

    // console.log(p);

    const parallax = paraRef;
    const [rotate, setRotate] = useState(0)
    const PAGES = p;

    let style = {
        transform: `translate(${-rotate * 60}px, ${-rotate * 30}px)`
    }
    let style2 = {
        transform: `translate(${-rotate * 80}px, ${-rotate * 25}px)`
        
    }
    let style3 = {
        transform: `translate(${-rotate * 30}px, ${-rotate * 80}px)`
        
    }


    

    useEffect(() => {
        const handleScroll = (e) => {
          const height = parallax.current.space
          const scrollablePages = PAGES - 1 // because you can't scroll past the last page 
          const scrollHeight = height * scrollablePages
    
          const scrollTop = e.target.scrollTop
          const percentScrolled = scrollTop / scrollHeight
          const currentPage = Math.floor(percentScrolled * scrollablePages)
          const currentPageScrollTop = scrollTop - (height * (currentPage))
          const currentPagePercent = currentPageScrollTop / height
    
          // because the ParallaxLayer below has an `offset` of `0`
          if (currentPage === 8) {
            setRotate(currentPagePercent)
          }
        }
    
        const container = parallax.current.container.current
        container.addEventListener('scroll', handleScroll)
    
        return () => {
          container.removeEventListener('scroll', handleScroll)
        }
      }, [])


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
          <ParallaxLayer offset={8.7} speed={0.4}  >
          <div class="animation_layer" id="in-hel" style={style}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={8.7} speed={0.4} >
          <div class="animation_layer" id="out-hel" style={style2}></div>
          </ParallaxLayer>

          
          <ParallaxLayer offset={8.7} speed={0.4} >
          <div class="animation_layer" id="down-hel" style={style3}></div>
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