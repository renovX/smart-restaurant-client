import React from 'react';
import Slideshow from '../landing_components/Slideshow';
import Header from '../landing_components/Header';
import Body from '../landing_components/Body';
import Footer from '../landing_components/Footer';
import "./Landing.css";


export default function Landing() {
    return (
        <div className='page-conatainer'>
            <div>
                <Header/>
                <Slideshow/>
                <Body/>
            </div>
            <Footer/>
        </div>
    );
}
