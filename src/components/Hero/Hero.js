import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './Hero.css'

export default function Hero() {
   const { t } = useTranslation();

    return(
        <div class="container">
            <div class="row justify-content-center align-items-center" id="herobox">

                <div class="col-5 mx-5" id="title">
                    <h1>{t("hero_title")}</h1>
                </div>

                <div class="col-4 mx-5" id="backsquare">
                    <div className="row" id="copy1">
                        {t("copy_1")}
                    </div>
                    
                    <button type="button" class="btn btn-primary">
                        {t("button_connect")}
                    </button>
                </div>
            </div>
        </div>
    )
}