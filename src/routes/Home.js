import React, { useRef } from "react";
// import { useTranslation } from "react-i18next";
import video from './media/artyco-background-video.mp4'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import Exportation from '../components/Exportation/Exportation'

import './Home.css'

export default function Home() {
//    const { t } = useTranslation();

    return(
        <div className='' id='homeContainer'>

            {/* BACKGROUND VIDEO */}
            <div className="video-background">
                <video autoPlay loop muted >
                    <source src={video} type='video/mp4'/>
                </video>
            </div>

            <div className="color-overlay"></div>
            
            <Hero />
            <Products />
            <Exportation />
        </div>
    )
}