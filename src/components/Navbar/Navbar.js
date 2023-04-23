import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './Navbar.css'

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const { t, i18n } = useTranslation();

   const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="Navbar fixed-top">

      <a href="#" onClick={() => setIsOpen(isOpen)} className="nav-logo">{t("home")}</a>

      <div className={`nav-items ${isOpen && "open"}`}>

        <a href='#row-about' onClick={() => setIsOpen(!isOpen)}>{t("products")}</a>
        <a href='#row-work' onClick={() => setIsOpen(!isOpen)}>{t("exportation")}</a>
        <a href='#row-skills' onClick={() => setIsOpen(!isOpen)}>{t("about")}</a>
        <a href='#row-services' onClick={() => setIsOpen(!isOpen)}>{t("testimonials")}</a>
        <a href='#row-contact' onClick={() => setIsOpen(!isOpen)}>{t("contact")}</a>

      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>

      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('es')}>ES</button>
      </div>

    </div>
  );
};