import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
// import ReactPlayer from 'react-player';
// import YouTube from 'react-youtube';
import VideoBackground from '../components/Background/VideoBackground'


// import video from './media/video.mp4'

import './Home.css'

export default function Home() {
   const { t } = useTranslation();

   

    return(
        <div className='' id='homeContainer'>
            {/* BACKGROUND VIDEO */}
            <div className="video-background">
                <VideoBackground />
            </div>


            <div className="Home">
                <h1>{t("hi")}</h1>
            </div>
        </div>
    )
}