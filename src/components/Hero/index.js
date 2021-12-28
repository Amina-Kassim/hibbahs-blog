import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <Card style={{borderRadius: '10px 10px 0 0'}}>
            <div style={{ padding: '50px 0'  }}>
            <Logo />
            </div>
            <Navbar />
        </Card>
    </div>
   )

 }

export default Hero