import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import video from './media/artyco-background-video.mp4'

import './Home.css'

export default function Home() {
   const { t } = useTranslation();

   

    return(
        <div className='' id='homeContainer'>

            {/* BACKGROUND VIDEO */}
            <div className="video-background">
                <video autoPlay loop muted >
                    <source src={video} type='video/mp4'/>
                </video>
            </div>

            <div className="color-overlay"></div>

            <div className='Home'>
                <h1>ARTYCO LLC</h1>
                <h4>WORK IN PROGRESS</h4>
                <h5>10%</h5>
            </div>
        </div>
    )
}