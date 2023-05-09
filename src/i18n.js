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
          home: 'Home',
          products: 'Products',
          exportation: 'Exportation',
          about: 'About Us',
          testimonials: 'Testimonials',
          contact: 'Contact Us',

          hero_title: "CONNECT WITH THE BEST AMERICAN PRODUCTS, NO MATTER WHERE YOU ARE.",
          copy_1: "You can get all these products quickly and easily, no matter if you are in Venezuela, Panama, Colombia or any other Latin American country, and best of all, we offer competitive prices!",
          button_connect: "CONNECT",

          copy_2_title: "Connect with the best American products, no matter where you are.",
          copy_2: "With Artyco Llc, you will have access to the best American products quickly and easily, join our community of satisfied customers today!",

          exportation_title: "With our export service",
          copy_3: "You can get all these products quickly and easily, no matter if you are in Venezuela, Chile, Colombia or any other Latin American country, and best of all, we offer competitive prices!",
          list_item_1: "Choose from our product catalog",
          list_item_2: "We create your order and pack the merchandise",
          list_item_3: "Your packages travel by sea or air",
          list_item_4: "In record time you have your merchandise",
          list_item_5: "You get the best quality at the best price",

        }
      },
      es: {
        translation: {
          home: 'Inicio',
          products: 'Productos',
          exportation: 'Exportación',
          about: 'Acerca de Nosotros',
          testimonials: 'Testimonios',
          contact: 'Contáctanos',

          hero_title: "CONÉCTATE CON LOS MEJORES PRODUCTOS AMERICANOS, SIN IMPORTAR DÓNDE ESTÉS",
          copy_1: "Puedes obtener todos estos productos de manera rápida y sencilla, sin importar si te encuentras en Venezuela, Panamá, Colombia o cualquier otro país de Latinoamérica. ¡Y lo mejor de todo es que te ofrecemos precios competitivos!",
          button_connect: "CONECTAR",

          copy_2_title: "Conéctate con los mejores productos americanos, sin importar dónde estés.",
          copy_2: "Con Artyco Llc, tendrás acceso a los mejores productos americanos de manera fácil y rápida. ¡Únete a nuestra comunidad de clientes satisfechos hoy mismo!",

          exportation_title: "Con nuestro servicio de exportación",
          copy_3: "Puedes obtener todos estos productos de manera rápida y sencilla, sin importar si te encuentras en Venezuela, Chile, Colombia o cualquier otro país de Latinoamérica. ¡Y lo mejor de todo es que te ofrecemos precios competitivos!",
          list_item_1: "Escoge en nuestro catalogo de productos",
          list_item_2: "Creamos tu orden y empacamos la mercancia",
          list_item_3: "Tu mercancia viaja por mar o aire",
          list_item_4: "En tiempo record tienes tu mercancia",
          list_item_5: "Obtienes la mejor calidad al mejor precio",
        }
      }
    }
});

export default i18n;