import image0 from "./images/image0.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
const App = () => {
  useEffect(() => {
    runAnimations();
  }, []);

  return (
    <div className="parent-div ">
      <div className="desktop-9-container pos-abs">
        <div className="hero-background-rectangle pos-abs"></div>

        <div className="hero-background-image pos-abs"></div>
        {/* Group 41 */}
        <section className="logo-container pos-abs">
          <div className="logo-icon-container pos-abs">
            <div className="logo-icon-part-1 pos-abs">
              <div className="nodeBg-21413 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="logo-icon-part-3 pos-abs">
              <div className="nodeBg-21415 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="logo-icon-part-2 pos-abs">
              <div className="nodeBg-21414 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="logo-icon-part-4 pos-abs">
              <div className="nodeBg-21416 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="logo-text pos-abs">
            <div className="nodeBg-21411 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>

        <div className="header-background pos-abs"></div>
        {/* Group 111 */}
        <section className="header-nav-container pos-abs">
          <div className="header-product-link pos-abs">
            <span className="header-product-link-1">{`Producto`}</span>
          </div>

          <div className="header-services-link pos-abs">
            <span className="header-services-link-1">{`Services`}</span>
          </div>

          <div className="header-find-team-link pos-abs">
            <span className="header-find-team-link-1">{`Find a Team`}</span>
          </div>

          <div className="header-about-us-link pos-abs">
            <span className="header-about-us-link-1">{`About Us`}</span>
          </div>

          <div className="header-articles-link pos-abs">
            <span className="header-articles-link-1">{`Articles`}</span>
          </div>

          <div className="header-portfolio-link pos-abs">
            <span className="header-portfolio-link-1">{`Portofolio`}</span>
          </div>

          <div className="header-contact-us-link pos-abs">
            <span className="header-contact-us-link-1">{`Contact us`}</span>
          </div>
        </section>

        <div className="hero-image pos-abs">
          <img
            src={image0}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-102650 "
            alt="Hero section image"
          />{" "}
        </div>

        <div className="hero-title-line-1 pos-abs">
          <span className="hero-title-line-1-1">{`Sistema de pagos Automatizados Para puntos de peajes `}</span>
        </div>

        <div className="hero-description pos-abs">
          <span className="hero-description-1">{`"Optimiza tu experiencia en las autopistas con nuestro sistema de peajes 
automatizados. Gracias a la tecnología RFID, reduce los tiempos 
de espera y disfruta de un viaje fluido sin detenerte en los puntos de cobro."`}</span>
        </div>
        {/* Frame 6281 */}
        <section className="cta-button-container pos-abs">
          <div className="cta-button-text pos-abs">
            <span className="cta-button-text-1">{`Mas Información`}</span>
          </div>
        </section>
        {/* Group 121 */}
        <section className="stats-container pos-abs">
          <div className="stats-value-1 pos-abs">
            <span className="stats-value-1-1">{`100`}</span>
            <span className="stats-value-1-1-2">{`%`}</span>
          </div>

          <div className="stats-value-2 pos-abs">
            <span className="stats-value-2-1">{`50`}</span>
            <span className="stats-value-2-1-2">{`+`}</span>
          </div>

          <div className="stats-title-1 pos-abs">
            <span className="stats-title-1-1">{`Reducción de tiempos de espera`}</span>
          </div>

          <div className="stats-title-2 pos-abs">
            <span className="stats-title-2-1">{`Estaciones de peaje modernizadas`}</span>
          </div>
        </section>
        {/* Group 31 */}
        <section className="partner-logos-container pos-abs">
          <div className="partner-logo-1 pos-abs">
            <img
              src={image1}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-102675 "
              alt="Partner logo 1"
            />{" "}
          </div>

          <div className="partner-logo-3 pos-abs">
            <img
              src={image2}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-102677 "
              alt="Partner logo 3"
            />{" "}
          </div>

          <div className="partner-logo-2 pos-abs">
            <img
              src={image3}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-102676 "
              alt="Partner logo 2"
            />{" "}
          </div>

          <div className="partner-logo-4 pos-abs">
            <img
              src={image4}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-102678 "
              alt="Partner logo 4"
            />{" "}
          </div>
        </section>

        <div className="partner-logo-5 pos-abs">
          <img
            src={image5}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-102679 "
            alt="Partner logo 5"
          />{" "}
        </div>

        <div className="features-section-background pos-abs"></div>

        <div className="features-section-title pos-abs">
          <span className="features-section-title-1">{`Transformación Digital 
en los Peajes`}</span>
        </div>
        {/* Mask Group1 */}
        <section className="feature-image-container-1 pos-abs">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-nov-2024%2Fjhadyriv031731391992794%2Fimage-102-688.png?alt=media&token=0"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102688-ALT"
          />{" "}
        </section>
        {/* Mask Group2 */}
        <section className="feature-image-container-2 pos-abs">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-nov-2024%2Fjhadyriv031731391992794%2Fimage-102-691.png?alt=media&token=0"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102691-ALT"
          />{" "}
        </section>
        {/* Mask Group3 */}
        <section className="feature-image-container-3 pos-abs">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-nov-2024%2Fjhadyriv031731391992794%2Fimage-102-694.png?alt=media&token=0"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102694-ALT"
          />{" "}
        </section>

        <div className="feature-title-1 pos-abs">
          <span className="feature-title-1-1">{`Automatización de Peajes`}</span>
        </div>

        <div className="feature-title-2 pos-abs">
          <span className="feature-title-2-1">{`Gestión de Pagos Electrónicos`}</span>
        </div>

        <div className="feature-title-3 pos-abs">
          <span className="feature-title-3-1">{`Monitoreo en Tiempo Real`}</span>
        </div>

        <div className="feature-description-1 pos-abs">
          <span className="feature-description-1-1">{`Implementación de sistemas RFID para el cobro automático en estaciones de peaje, eliminando las colas y mejorando la fluidez del tráfico.`}</span>
        </div>

        <div className="feature-description-2 pos-abs">
          <span className="feature-description-2-1">{`Solución de pago sin contacto a través de tarjetas y aplicaciones móviles, facilitando la recaudación y reduciendo el manejo de efectivo.`}</span>
        </div>

        <div className="feature-description-3 pos-abs">
          <span className="feature-description-3-1">{`Visualiza y gestiona el tráfico en tiempo real, mejorando la toma de decisiones y garantizando un control eficiente del flujo vehicular.`}</span>
        </div>

        <div className="section-divider pos-abs"></div>

        <div className="unique-selling-points-title pos-abs">
          <span className="unique-selling-points-title-1">{`¿Qué nos hace 
Diferentes?`}</span>
        </div>

        <div className="feature-icon-1 pos-abs"></div>

        <div className="feature-icon-2 pos-abs"></div>

        <div className="feature-icon-3 pos-abs"></div>

        <div className="feature-icon-4 pos-abs"></div>

        <div className="unique-selling-point-icon-1 pos-abs"></div>

        <div className="unique-selling-point-icon-2 pos-abs"></div>

        <div className="unique-selling-point-icon-3 pos-abs"></div>

        <div className="unique-selling-point-icon-4 pos-abs"></div>
        {/* ant-design:field-time-outlined1 */}
        <section className="unique-selling-point-icon-4-container pos-abs">
          <div className="unique-selling-point-icon-4-part-2 pos-abs">
            <div className="nodeBg-102721 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="unique-selling-point-icon-4-part-1 pos-abs">
            <div className="nodeBg-102720 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
        {/* bx:bx-check-shield1 */}
        <section className="unique-selling-point-icon-2-container pos-abs">
          <div className="unique-selling-point-icon-2-outer pos-abs">
            <div className="nodeBg-22241 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="unique-selling-point-icon-2-inner pos-abs">
            <div className="nodeBg-22242 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
        {/* ion:pricetag-outline1 */}
        <section className="unique-selling-point-icon-3-container pos-abs">
          <div className="unique-selling-point-icon-3-outer pos-abs">
            <div className="nodeBg-102714 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="unique-selling-point-icon-3-inner pos-abs">
            <div className="nodeBg-102715 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>

        <div className="unique-selling-point-icon-1-inner pos-abs">
          <div className="nodeBg-102712 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>

        <div className="unique-selling-point-title-1 pos-abs">
          <span className="unique-selling-point-title-1-1">{`Eficiencia 
Comprobada`}</span>
        </div>

        <div className="unique-selling-point-title-2 pos-abs">
          <span className="unique-selling-point-title-2-1">{`Transacciones Seguras 
y Sin Contacto`}</span>
        </div>

        <div className="unique-selling-point-title-3 pos-abs">
          <span className="unique-selling-point-title-3-1">{`Impacto Ambiental 
Positivo`}</span>
        </div>

        <div className="unique-selling-point-title-4 pos-abs">
          <span className="unique-selling-point-title-4-1">{`Integración Flexible`}</span>
        </div>

        <div className="unique-selling-point-1 pos-abs">
          <span className="unique-selling-point-1-1">{`Nuestro sistema reduce los tiempos de espera en un 70%, permitiendo un flujo continuo de vehículos en cada estación de peaje.`}</span>
        </div>

        <div className="unique-selling-point-2 pos-abs">
          <span className="unique-selling-point-2-1">{`Con tecnología RFID, garantizamos pagos rápidos y seguros, eliminando el riesgo de manipulación de efectivo.`}</span>
        </div>

        <div className="unique-selling-point-3 pos-abs">
          <span className="unique-selling-point-3-1">{`Al eliminar el uso de tickets de papel y disminuir las emisiones por congestión, contribuimos a un entorno más limpio y sostenible.`}</span>
        </div>

        <div className="unique-selling-point-4 pos-abs">
          <span className="unique-selling-point-4-1">{`Nuestro sistema es compatible con las infraestructuras de peaje existentes, facilitando su implementación y adaptación sin complicaciones.`}</span>
        </div>
        {/* Mask Group4 */}
        <section className="team-image-container pos-abs">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-nov-2024%2Fjhadyriv031731391992794%2Fimage-102-731.png?alt=media&token=0"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102731-ALT"
          />{" "}
        </section>
        {/* Group 91 */}
        <section className="team-section-container pos-abs">
          <div className="team-section-title pos-abs">
            <span className="team-section-title-1">{`¿Como es el Equipo?`}</span>
          </div>

          <div className="team-description pos-abs">
            <span className="team-description-1">{`"Un equipo dedicado de ingenieros y especialistas en tecnología que trabajan para ofrecer una experiencia de viaje más rápida y eficiente. Estamos aquí para ayudarte a modernizar tu operación de peaje con soluciones innovadoras."`}</span>
          </div>

          <div className="team-cta-button-container pos-abs">
            <div className="team-cta-button-text pos-abs">
              <span className="team-cta-button-text-1">{`See all team`}</span>
            </div>
          </div>

          <div className="how-it-works-link pos-abs">
            <span className="how-it-works-link-1">{`How it works`}</span>
          </div>

          <div className="how-it-works-icon-container pos-abs">
            <div className="how-it-works-icon-group pos-abs">
              <div className="how-it-works-icon pos-abs">
                <div className="nodeBg-102730 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>
        </section>

        <div className="project-history-title pos-abs">
          <span className="project-history-title-1">{`Historia de la 
Proyecto`}</span>
        </div>
        {/* Mask Group5 */}
        <section className="project-history-image-container pos-abs">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-nov-2024%2Fjhadyriv031731391992794%2Fimage-102-742.png?alt=media&token=0"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102742-ALT"
          />{" "}
        </section>

        <div className="project-history-description pos-abs">
          <span className="project-history-description-1">{`"Nuestro sistema de control automatizado de peajes nació con la misión de modernizar el transporte en Bolivia. Hemos implementado soluciones tecnológicas en diversas estaciones de peaje, facilitando el paso eficiente de vehículos y mejorando la experiencia del usuario en carretera."`}</span>
        </div>

        <div className="news-section-title pos-abs">
          <span className="news-section-title-1">{`Noticias y Actualizaciones`}</span>
        </div>
        {/* ic:outline-work1 */}
        <section className="news-icon pos-abs"></section>
        {/* Mask Group7 */}
        <section className="news-image-container-1 pos-abs">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-nov-2024%2Fjhadyriv031731391992794%2Fimage-102-748.png?alt=media&token=0"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102748-ALT"
          />{" "}
        </section>
        {/* Mask Group6 */}
        <section className="news-image-container-2 pos-abs">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-nov-2024%2Fjhadyriv031731391992794%2Fimage-102-745.png?alt=media&token=0"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102745-ALT"
          />{" "}
        </section>
        {/* Mask Group8 */}
        <section className="news-image-container-3 pos-abs">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-nov-2024%2Fjhadyriv031731391992794%2Fimage-102-751.png?alt=media&token=0"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102751-ALT"
          />{" "}
        </section>

        <div className="news-date-1 pos-abs">
          <span className="news-date-1-1">{`12
`}</span>
        </div>

        <div className="news-date-2 pos-abs">
          <span className="news-date-2-1">{`12
`}</span>
        </div>

        <div className="news-date-3 pos-abs">
          <span className="news-date-3-1">{`12
`}</span>
        </div>

        <div className="news-title-1 pos-abs">
          <span className="news-title-1-1">{`Nuevas estaciones automatizadas en Bolivia`}</span>
        </div>

        <div className="news-title-2 pos-abs">
          <span className="news-title-2-1">{`Beneficios de la tecnología RFID`}</span>
        </div>

        <div className="news-title-3 pos-abs">
          <span className="news-title-3-1">{`Reduciendo tiempos de espera en peajes`}</span>
        </div>

        <div className="news-month-1 pos-abs">
          <span className="news-month-1-1">{`Jan`}</span>
        </div>

        <div className="news-month-2 pos-abs">
          <span className="news-month-2-1">{`Jan`}</span>
        </div>

        <div className="news-month-3 pos-abs">
          <span className="news-month-3-1">{`Jan`}</span>
        </div>

        <div className="news-description-1 pos-abs">
          <span className="news-description-1-1">{`Hemos completado la implementación del sistema automatizado de peajes en 10 estaciones clave, mejorando la eficiencia del tráfico y la recaudación.`}</span>
        </div>

        <div className="news-description-2 pos-abs">
          <span className="news-description-2-1">{`Descubre cómo el uso de etiquetas RFID ha transformado la experiencia de los conductores, permitiéndoles pasar por los peajes sin detenerse.`}</span>
        </div>

        <div className="news-description-3 pos-abs">
          <span className="news-description-3-1">{`Nuestro sistema ha demostrado ser efectivo en reducir los tiempos de espera en un 70%, facilitando un flujo vehicular más rápido y seguro.`}</span>
        </div>

        <div className="cta-section-background-1 pos-abs"></div>

        <div className="cta-title-1 pos-abs">
          <span className="cta-title-1-1">{`¿ Eres conductor ?, ¿Quieres 
empezar a utilizar aplicación?`}</span>
        </div>

        <div className="cta-image-1 pos-abs">
          <img
            src={image6}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-102784 "
            alt="CTA 1 image"
          />{" "}
        </div>

        <div className="cta-description-1 pos-abs">
          <span className="cta-description-1-1">{`"Descarga nuestra aplicación y disfruta de un paso rápido
 y sin filas en los peajes. Ahorra tiempo y paga de forma
 segura sin detenerte."`}</span>
        </div>
        {/* Frame 6291 */}
        <section className="cta-button-container-1 pos-abs">
          <div className="cta-button-text-1 pos-abs">
            <span className="cta-button-text-1-1">{`Descarga Aqui`}</span>
          </div>
        </section>
        {/* bi:arrow-down1 */}
        <section className="scroll-down-icon-1 pos-abs"></section>

        <div className="cta-section-background-2 pos-abs"></div>

        <div className="cta-image-2 pos-abs">
          <img
            src={image7}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-22591 "
            alt="CTA 2 image"
          />{" "}
        </div>

        <div className="cta-title-2 pos-abs">
          <span className="cta-title-2-1">{`¿ Eres Operador ?, inicia sesión para un nueva experencia`}</span>
        </div>

        <div className="cta-description-2 pos-abs">
          <span className="cta-description-2-1">{`Inicia sesión y vive una experiencia mejorada. Accede a herramientas avanzadas para gestionar de forma más ágil y eficiente todas tus operaciones. ¡Transforma tu manera de trabajar!`}</span>
        </div>

        <div className="footer-background-rectangle pos-abs"></div>
        {/* Frame 6301 */}
        <section className="cta-button-container-2 pos-abs">
          <div className="cta-button-text-2 pos-abs">
            <span className="cta-button-text-2-1">{`inicia sesión`}</span>
          </div>
        </section>
        {/* bi:arrow-down2 */}
        <section className="scroll-down-icon-2 pos-abs"></section>

        <div className="footer-container pos-abs"></div>

        <div className="footer-logo-text pos-abs">
          <span className="footer-logo-text-1">{`General Project`}</span>
        </div>
        {/* Item1 */}
        <section className="footer-company-links-container pos-abs">
          <div className="footer-company-links-background pos-abs"></div>

          <div className="footer-company-links-title pos-abs">
            <span className="footer-company-links-title-1">{`Company`}</span>
          </div>

          <div className="footer-about-link pos-abs">
            <span className="footer-about-link-1">{`About`}</span>
          </div>

          <div className="footer-terms-link pos-abs">
            <span className="footer-terms-link-1">{`How it Works`}</span>
          </div>

          <div className="footer-privacy-policy-link pos-abs">
            <span className="footer-privacy-policy-link-1">{`Term`}</span>
          </div>

          <div className="footer-careers-link pos-abs">
            <span className="footer-careers-link-1">{`Privacy Policy`}</span>
          </div>
        </section>
        {/* Item2 */}
        <section className="footer-more-links-container pos-abs">
          <div className="footer-more-links-background pos-abs"></div>

          <div className="footer-more-links-title pos-abs">
            <span className="footer-more-links-title-1">{`More`}</span>
          </div>

          <div className="footer-documentation-link pos-abs">
            <span className="footer-documentation-link-1">{`Documentation`}</span>
          </div>

          <div className="footer-license-link pos-abs">
            <span className="footer-license-link-1">{`License`}</span>
          </div>
        </section>

        <div className="footer-description pos-abs">
          <span className="footer-description-1">{`is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.`}</span>
        </div>

        <div className="footer-social-icon-1-shadow pos-abs"></div>

        <div className="footer-social-icon-1-background pos-abs"></div>
        {/* Layer1 */}
        <section className="footer-social-icon-2-container pos-abs">
          <div className="footer-social-icon-2-shadow pos-abs"></div>

          <div className="footer-social-icon-2-background pos-abs"></div>
        </section>
        {/* Layer2 */}
        <section className="footer-social-icon-3-container pos-abs">
          <div className="footer-social-icon-3-shadow pos-abs"></div>

          <div className="footer-social-icon-3-background pos-abs"></div>
        </section>
        {/* Layer3 */}
        <section className="footer-social-icon-4-container pos-abs">
          <div className="footer-social-icon-4-shadow pos-abs"></div>

          <div className="footer-social-icon-4-background pos-abs"></div>
        </section>

        <div className="footer-social-icon-1 pos-abs">
          <span className="footer-social-icon-1-1">{`google`}</span>
        </div>

        <div className="footer-social-icon-2 pos-abs">
          <span className="footer-social-icon-2-1">{`twitter`}</span>
        </div>

        <div className="footer-social-icon-3 pos-abs">
          <span className="footer-social-icon-3-1">{`instagram`}</span>
        </div>

        <div className="footer-social-icon-4 pos-abs">
          <span className="footer-social-icon-4-1">{`linkedin`}</span>
        </div>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
