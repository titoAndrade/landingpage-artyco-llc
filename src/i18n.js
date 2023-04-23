import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          hi: "Hello World",
          home: 'Home',
          products: 'Products',
          exportation: 'Exportation',
          about: 'About Us',
          testimonials: 'Testimonials',
          contact: 'Contact Us',
        }
      },
      es: {
        translation: {
          hi: "Hola Mundo",
          home: 'Inicio',
          products: 'Productos',
          exportation: 'Exportación',
          about: 'Acerca de Nosotros',
          testimonials: 'Testimonios',
          contact: 'Contáctanos',
        }
      }
    }
});

export default i18n;