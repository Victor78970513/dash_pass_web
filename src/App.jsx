import image0 from "./images/image0.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
const App = () => {
  useEffect(() => {
    runAnimations();
  }, []);

  const adminbtn = useRef(null);
  const downloadbtn = useRef(null);

  const scrollToComponent = (targetRef) => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="parent-div ">
      <div className="desktop-9-container pos-abs">
        <div className="hero-background-rectangle pos-abs"></div>
        <div className="menu-background-rectangle pos-abs"></div>
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
        {/* Group 111 */}
        <section className="header-nav-container pos-abs">
          <div onClick={() => scrollToComponent(adminbtn)} className="cta-button-inicio-container">
            <span className="button-text">Administracion</span>
          </div>
          <div onClick={() => scrollToComponent(downloadbtn)} className="cta-button-app-container">
            <span className="button-text">Descargar App</span>
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
          <span className="hero-title-line-1-1">{`Pago de peajes Automatizados`}</span>
        </div>

        <div className="hero-description pos-abs">
          <span className="hero-description-1">{`Disfruta de un viaje fluido sin detenerte en los puntos de peaje.`}</span>
        </div>
        {/* Frame 6281 */}
        <section className="cta-info-container pos-abs">
          <a href="#features-section" className="cta-button-info-container pos-abs">
            <span className="button-text">Mas Información</span>
          </a>
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

        <div id="features-section" className="features-section-background pos-abs"></div>

        <div className="features-section-title pos-abs">
          <span className="features-section-title-1">{`Transformación Digital 
en los Peajes`}</span>
        </div>
        {/* Mask Group1 */}
        <section className="feature-image-container-1 pos-abs">
          <img
            src="../src/images/imagen11.png"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102688-ALT"
          />{" "}
        </section>
        {/* Mask Group2 */}
        <section className="feature-image-container-2 pos-abs">
          <img
            src="../src/images/imagen12.png"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102691-ALT"
          />{" "}
        </section>
        {/* Mask Group3 */}
        <section className="feature-image-container-3 pos-abs">
          <img
            src="../src/images/imagen13.png"
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
            src="../src/images/imagen14.png"
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

          {/* <div className="team-cta-button-container pos-abs">
            <div className="team-cta-button-text pos-abs">
              <span className="team-cta-button-text-1">{`See all team`}</span>
            </div>
          </div> */}

          {/* <div className="how-it-works-link pos-abs">
            <span className="how-it-works-link-1">{`How it works`}</span>
          </div>

          <div className="how-it-works-icon-container pos-abs">
            <div className="how-it-works-icon-group pos-abs">
              <div className="how-it-works-icon pos-abs">
                <div className="nodeBg-102730 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div> */}
        </section>

        <div className="project-history-title pos-abs">
          <span className="project-history-title-1">{`Historia de la 
Proyecto`}</span>
        </div>
        {/* Mask Group5 */}
        <section className="project-history-image-container pos-abs">
          <img
            src="../src/images/imagen15.png"
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
            src="../src/images/imagen16.png"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102748-ALT"
          />{" "}
        </section>
        {/* Mask Group6 */}
        <section className="news-image-container-2 pos-abs">
          <img
            src="../src/images/imagen17.png"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
            alt="102745-ALT"
          />{" "}
        </section>
        {/* Mask Group8 */}
        <section className="news-image-container-3 pos-abs">
          <img
            src="../src/images/imagen18.png"
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

        <div ref={downloadbtn} className="cta-section-background-1 pos-abs"></div>

        <div className="cta-title-1 pos-abs">
          <span className="cta-title-1-1">{`¿ Eres conductor ?
Empeza a utilizar la aplicación`}</span>
        </div>

        <div className="cta-image-1 pos-abs">
          <img
            src={image6}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-102784 "
            alt="CTA 1 image"
          />{" "}
        </div>

        <div className="cta-description-1 pos-abs">
          <span className="cta-description-1-1">{`Descarga nuestra aplicación y disfruta 
de un viaje sin filas en los peajes.
Ahorra tiempo y paga de forma
segura sin detenerte.`}</span>
        </div>
        {/* Frame 6291 */}
        <section className="cta-button-descarga-container pos-abs">
          <a href="https://play.google.com/store/apps" className="cta-button-descarga pos-abs"> {/*link de appstore*/}  
            <span className="button-text">Descarga Aqui</span>
          </a>
        </section>
        {/* bi:arrow-down1 */}
        <section className="scroll-down-icon-1 pos-abs"></section>

        <div ref={adminbtn} className="cta-section-background-2 pos-abs"></div>

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
          <span className="cta-description-2-1">{`Inicia sesión y accede a herramientas avanzadas para gestionar todas tus operaciones. ¡Transforma tu manera de trabajar!`}</span>
        </div>
        {/* <div className="footer-background-rectangle pos-abs"></div> */}

        {/* <div className="footer-background-rectangle pos-abs"></div> */}
        {/* Frame 6301 */}
        <section className="cta-button-admin-container pos-abs">
          <a href="https://dash-pass-f5146.web.app/" className="cta-button-admin pos-abs">        {/*link del admin loginPage*/}  
            <span className="button-text">inicia sesión</span>
          </a>
        </section>
        {/* bi:arrow-down2 */}
        <section className="scroll-down-icon-2 pos-abs"></section>

        <footer className="footer-container">
      <div className="footer-logo">
        <div className="logo-icon">
          <span className="wave-icon">DASH PASS</span>
        </div>
      </div>

      <ul className="footer-links">
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Productos</li>
        <li>Sobre Nosotros</li>
      </ul>

      <div className="footer-icons">
        <i className="icon-github"></i>
        <i className="icon-instagram"></i>
        <i className="icon-linkedin"></i>
        <i className="icon-privacy"></i>
      </div>

      <div className="footer-copyright">
        © Wave Technologies LLC <br />
        • Todos Los Derechos Reservados <br />
        • Política De Privacidad
      </div>
    </footer>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
