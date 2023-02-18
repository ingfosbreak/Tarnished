import './EldenMain.css';
import '../../assets/Mantinia Regular/MantiniaRegular.otf'

import background from '../../assets/EldenMain/background.png';
import capegif from '../../assets/EldenMain/capegif.gif';
import character from '../../assets/EldenMain/character.png';
import foreground from '../../assets/EldenMain/foreground.png';
import logo from '../../assets/EldenMain/logo.png';


import useScrollYPosition from '../../containers/ScrollY/scrollY';
import cloud1 from '../../assets/cloud1.png'
import cloud2 from '../../assets/cloud2.png'
import cloud3 from '../../assets/cloud3.png'
import React from 'react';



function EldenMain() {

    const scrolling = useScrollYPosition();
    const style = { transform: 'translateY('+scrolling * 0.25+'px)'};
    const foregroundstyle = { transform: 'translateY('+scrolling * 0+'px)'};
    const backgroundstyle = { transform: 'translateY('+scrolling * 0.25+'px)'};
    const characterstyle = { transform: 'translateY('+scrolling * 0+'px)'};
    const logostyle = { transform: 'translateY('+scrolling * -0.3+'px)'
                        ,     
                        };

    

  

    return  <div class='block'>
                <div class="Main" >
                    <div class = "sec">
                        <img src={background}  alt= 'backgroud' id='background' style={backgroundstyle} />
                        <img src={logo}  alt= 'logo' id='logo' style={logostyle} />
                        <img src={capegif}  alt= 'cape' id='cape' style={characterstyle}/>
                        <img src={character} alt= 'character' id='character' style={characterstyle}/>
                        <img src={foreground}  alt= 'foreground' id='foreground' style={foregroundstyle} />


                    </div>
            
                    <div class ='clouds'>
                        <img src={cloud1} class="cloud" alt= 'cloud' id='c1' style = {{'--i': 1}} />
                        <img src={cloud2} class="cloud" alt= 'cloud' id='c2' style = {{'--i': 2}}/>
                        <img src={cloud3} class="cloud" alt= 'cloud' id='c3' style = {{'--i': 3}}/>

                    </div>
                    
                    {/* <h3 class="first-txt" style={style} id = 'txt'>TARNISHED</h3> */}
                    
                </div>
            </div>
            
}



export default EldenMain;