import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './Exportation.css';

import number_1 from "../../routes/media/number-1.png"
import number_2 from "../../routes/media/number-2.png"
import number_3 from "../../routes/media/number-3.png"
import number_4 from "../../routes/media/number-4.png"
import number_5 from "../../routes/media/number-5.png"

import catalog from "../../routes/media/catalog.png"
import box from "../../routes/media/package.png"
import airplane from "../../routes/media/airplane.png"
import clock from "../../routes/media/clock.png"
import balance from "../../routes/media/balance.png"


export default function Products() {
   const { t } = useTranslation();

    return(
        <div class="container-exportation">
            <div class="row justify-content-center align-items-center" id="exportationbox">

                <div className="row justify-content-center align-items-center" id="exportTitle">
                    {t("exportation_title")}
                </div>

                <div className="row justify-content-center align-items-center">
                    <div class="col-5 ms-5 " id="copybox">
                        <div className="row" id="copy3">
                            {t("copy_3")}
                        </div>
                        
                        <button type="button" class="btn btn-primary">
                            {t("button_connect")}
                        </button>
                    </div>

                    <div class="col-5 mx-5" id="list">

                        <div className="row" id="item1">
                            <div className="col-1">
                                <img src={number_1} alt="" />
                            </div>
                            <div className="col-9">
                                {t("list_item_1")}
                            </div>
                            <div className="col-1">
                                <img src={catalog} alt="" />
                            </div>
                        </div>

                        <div className="row" id="item1">
                            <div className="col-1">
                                <img src={number_2} alt="" />
                            </div>
                            <div className="col-9">
                                {t("list_item_2")}
                            </div>
                            <div className="col-1">
                                <img src={box} alt="" />
                            </div>
                        </div>

                        <div className="row" id="item1">
                            <div className="col-1">
                                <img src={number_3} alt="" />
                            </div>
                            <div className="col-9">
                                {t("list_item_3")}
                            </div>
                            <div className="col-1">
                                <img src={airplane} alt="" />
                            </div>
                        </div>

                        <div className="row" id="item1">
                            <div className="col-1">
                                <img src={number_4} alt="" />
                            </div>
                            <div className="col-9">
                                {t("list_item_4")}
                            </div>
                            <div className="col-1">
                                <img src={clock} alt="" />
                            </div>
                        </div>

                        <div className="row" id="item1">
                            <div className="col-1">
                                <img src={number_5} alt="" />
                            </div>
                            <div className="col-9">
                                {t("list_item_5")}
                            </div>
                            <div className="col-1">
                                <img src={balance} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}