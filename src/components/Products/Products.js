import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './Products.css';
import image from '../../routes/media/products images.png'

export default function Products() {
   const { t } = useTranslation();

    return(
        <div class="container-products">
            <div class="row justify-content-center align-items-center" id="productsbox">

                <div class="col-5 mx-5" id="title">
                    <img src={image} alt="" />
                </div>

                <div class="col-4 mx-5" id="backsquare2">
                    <div className="row" id="copy2">
                        <h1>{t("copy_2_title")}</h1>
                        {t("copy_2")}
                    </div>
                    
                    <button type="button" class="btn btn-primary">
                        {t("button_connect")}
                    </button>
                </div>
            </div>
        </div>
    )
}