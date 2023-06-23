import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import "../Styles/HomeNext.css";
import Maquette from "./Maquette";

function Home() {
  return (
    <>
      <section className="barner container-fluide">
        {/*                    Nav                           */}
        <nav>
          <div className="logo-box">
            {/* <img src="images/LeetCode_logo_rvs.png" className="logo-img" /> */}
            <span style={{ color: "#FFF", fontSize: 14 }}>Farm.Smart</span>
          </div>
          <div className="nav-link">
            <ul>
              <li>
                <a
                  href="#"
                  className="nav-link-item "
                  style={{ color: "#FFF", fontSize: 14 }}
                >
                  Digital agriculture
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <nav>
          <div className="logo-box">
            <img src="images/LeetCode_logo_rvs.png" className="logo-img" />
            <span style={{ color: "#3cB815" }}>Les petits fermiers</span>
          </div>
          <div className="nav-link">
            <ul>
              <li>
                <a href="#" className="nav-link-item premium">
                  Premium
                </a>
              </li>
              <li>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <a href="#" className="nav-link-item">
                    Sign in
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav> */}

        {/*                           Contenu de la barniere                    */}

        <div className="content-barner container" style={{ marginTop: 50 }}>
          <div className="content-barner-left col-md-5 col-sm-0 col-xs-0 ">
            <p className="digitalText">DIGITAL AGRICULTURE</p>
            {/* <Maquette /> */}
          </div>
          <div
            className=" col-md-4 col-sm-12 "
            style={{ position: "relative", top: 0, marginTop: " -12rem" }}
          >
            <img src="images/soucoupe.PNG" className="logo-img" id="soucoupe" />
          </div>
          <div
            className="content-barner-right col-md-2 col-sm-12 "
            style={{ position: "relative" }}
          >
            <h6
              style={{
                color: "#fff",
                fontSize: 12,
                fontWeight: "normal",
                position: "absolute",
                bottom: 0,
              }}
            >
              The guy have figured out how to revolutionize agriculture,and
              we're here to help them
            </h6>
          </div>
        </div>
      </section>
      <section className="barnerCard container">
        <img
          src="images/mais.PNG"
          style={{
            position: "absolute",
            top: "-14.6rem",
            right: 15,
            zIndex: "-400",
          }}
        />

        <nav>
          <div className="logo-box">
            <img src="images/LeetCode_logo_rvs.png" className="logo-img" />

            <span style={{ color: "#333333", fontWeight: 500 }}>
              Farm Smart
            </span>
          </div>
          <div className="nav-link">
            <ul>
              <li>
                <a href="#" className="nav-link-item premium">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link-item ">
                  Platform
                </a>
              </li>
              <Link to="/student" style={{ textDecoration: "none" }}>
                <a href="#" className="nav-link-item ">
                  Courses
                </a>
              </Link>
              <li>
                <a href="#" className="nav-link-item ">
                  Technologiy
                </a>
              </li>
              <li>
                <a href="#" className="nav-link-item ">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/student" style={{ textDecoration: "none" }}>
              <a href="#" className="nav-link-item">
                <button
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "#27ae60",
                    borderRadius: "3px",
                    padding: "5px",
                    color: "#fff",
                  }}
                >
                  {/* <i class="fa-regular fa-avatar"></i> */}
                  My Space
                </button>
              </a>
            </Link>
          </div>
        </nav>
        <div className="containerCard container">
          <div className="containerCardLeft col-md-6 col-sm-12">
            <h1
              style={{
                fontSize: "3.4rem",
                color: "#000",
                lineHeight: "3.5rem",
                fontWeight: "bold",
              }}
            >
              Make reliable <br />
              agriculture decisions with US
            </h1>
            <p>
              Get to Know the field in seconds and take informed actions with
              the Farm.Smart platform.To make farming simple,we analyze
              satellite images with machine learning technologies.For free
            </p>
            <div
              style={{
                backgroundColor: "#F9F9F2",
                width: "20rem",
                padding: "10px",
              }}
            >
              <input
                placeholder="Enter your email..."
                style={{
                  outline: "none",
                  border: "none",

                  borderRadius: "3px",
                  padding: "5px",
                }}
              />{" "}
              <button
                style={{
                  outline: "none",
                  border: "none",
                  backgroundColor: "#27ae60",
                  borderRadius: "3px",
                  padding: "5px",
                  color: "#fff",
                }}
              >
                Get Started
              </button>
            </div>
            <p style={{ marginTop: 10 }}>
              <span>Already have an account?</span>{" "}
              <Link
                to="/login"
                style={{
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Log in
              </Link>{" "}
            </p>
          </div>
          <div className="containerCardRight col-md-6 col-sm-12">
            <img src="images/IAFarm.PNG" className="logo-farm" />
          </div>
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "70px",
          }}
        >
          <div
            className="col-md-4 col-sm-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <img
              src="images/search.PNG"
              className="logo-farm"
              style={{ width: "160px", height: "100px" }}
            />
            <h1>Easily add courses</h1>
            <p
              style={{
                textAlign: "center",
              }}
            >
              We've found all the techniques in Africa and Cameroon - just
              choose yours
            </p>
          </div>
          <div
            className="col-md-4 col-sm-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <img
              src="images/fast data.PNG"
              className="logo-farm"
              style={{ width: "160px", height: "100px" }}
            />
            <h1>Fast data processing</h1>
            <p
              style={{
                textAlign: "center",
              }}
            >
              We show a current photo of the field in a second
            </p>
          </div>
          <div
            className="col-md-4 col-sm-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <img
              src="images/mobile.PNG"
              className="logo-farm"
              style={{ width: "160px", height: "100px" }}
            />
            <h1>Website and mobile app</h1>
            <p
              style={{
                textAlign: "center",
              }}
            >
              It's free Works anywhere with an internet connection
            </p>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <section id="action" className="reveal">
          <div className="action-cover">
            <div className="container">
              <div className="row action-cover-row">
                <div className="col-md-9">
                  <h1 className="action-title">JOIN US</h1>
                  <p style={{ color: "#fff" }}>
                    We are present on several platforms{" "}
                    <strong>
                      Telegram , Signal , whatsapp ,Facebook , Youtube ,Vk{" "}
                    </strong>{" "}
                    ,We make a difference in everything we do. For several years
                    now, people have been putting their trust in us and bring
                    back their loved ones.
                    <strong>GET TRAINED AND BOOST YOUR PRODUCTIVITY.</strong>
                  </p>
                </div>
                <div className="col-md-3">
                  <button className="btn-ensemble btn-rejoindre">
                    JOIN US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ////////////////////////////////////////////////STATISTIQUES//////////////////////////////////////////////////// */}
        <section id="stat" className="reveal">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3  stat-item-container">
                <div className="stat-item-box-icon-box">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
                <div className="stat-item-box-number">
                  +<span className="counter">133</span>
                </div>
                <div className="stat-item-box-title">Teacher members</div>
              </div>
              <div className="col-lg-3 col-md-3  stat-item-container">
                <div className="stat-item-box-icon-box">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="stat-item-box-number">
                  {" "}
                  + <span className="counter">200</span>{" "}
                </div>
                <div className="stat-item-box-title">New visitors/jours</div>
              </div>
              <div className="col-lg-3 col-md-3  stat-item-container">
                <div className="stat-item-box-icon-box">
                  <i className="fa-solid fa-face-smile"></i>{" "}
                </div>
                <div className="stat-item-box-number">
                  {" "}
                  +<span className="counter">90</span>%
                </div>
                <div className="stat-item-box-title">satisfied people</div>
              </div>
              <div className="col-lg-3 col-md-3 stat-item-container">
                <div className="stat-item-box-icon-box">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <div className="stat-item-box-number">
                  +<span className="counter">50</span>
                </div>
                <div className="stat-item-box-title">
                  Partners around the world
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- -------------------------------------------SECTION CONTACTEZ NOUS START ------------------------------------------- --> */}
        <div id="contact" className="reveal">
          <h1
            className="tittle-level-one"
            style={{ marginTop: "3rem ", marginBottom: "2rem" }}
          >
            Contact Us
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3 contact-box-item">
                <div className="contact-box-item-icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div>
                  <h3>Our networks </h3>
                  <p> Telegram : @farm.Smart</p>
                  <p> whatsapp : +237 69046071</p>
                  <p> Signal : +237 6 90 46 07 81 </p>
                </div>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-3 contact-box-item">
                <div className="contact-box-item-icon">
                  <i className="fa-solid fa-envelope"></i>{" "}
                </div>
                <div>
                  <h3>Our Email </h3>
                  <p> farm.smart@gmail.com</p>
                </div>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-3 contact-box-item">
                <div className="contact-box-item-icon">
                  {/* <!-- <i className="fa-solid fa-phone-arrow-up-right"></i> --> */}
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <h3>Our telephone</h3>
                  <p> +237 6 90 46 07 81</p>
                </div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <form id="formulaire">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          value=""
                          name=""
                          className="input-contact-form"
                          id="name-form"
                          placeholder="Votre Nom"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          value=""
                          className="input-contact-form"
                          id="email-form"
                          placeholder="Votre Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="text"
                          value=""
                          className="input-contact-form"
                          id="subject-form"
                          placeholder="Votre Sujet"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <textarea
                          className="textarea-contact-form"
                          value=""
                          id="messageForm"
                          placeholder="Votre message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="btn-send-box">
                      <button id="btnsendform">Send</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-2"></div>
              <form></form>
            </div>
          </div>
        </div>
        {/* <!-- -------------------------------------------SECTION CONTACTEZ NOUS END ------------------------------------------- --> */}
      </section>{" "}
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-box-item">
              <div className="footer-title-box">
                <h2>YAOUNDE CAMEROUN</h2>
              </div>
              <div className="footer-texte-box">
                <p>Telephone : +237 6 90 46 02 71</p>
                {/* <!-- <div style="margin-right:2px; color: black;" data-toggle="tooltip" data-placement="bottom" title="Envoyez Nous un mail">  --> */}

                <p>
                  <a
                    href="mailto:Workpro394@gmail.com"
                    style={{
                      color: "#25d366",
                      texDecoration: "none",
                      cursor: "pointer",
                    }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Envoyez Nous un mail"
                  >
                    Email : Farmt.Smart@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-box-item">
              <div className="footer-title-box">
                <h2>Liens Utiles </h2>
              </div>
              <div className="footer-texte-box ">
                <ul>
                  <li>
                    <a href="#home" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Home{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> services{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> contact{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Gallerie{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Faq{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#paiement" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Course{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Ubout Us{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#temoignage" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Testimonials{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-box-item">
              <div className="footer-title-box">
                <h2>Ours Services </h2>
              </div>
              <div className="footer-texte-box">
                <ul>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i> Courses{" "}
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i> Agriculture
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i> Discover
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i> Best Course
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>Technologies
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 footer-box-item">
              <div className="footer-title-box">
                <h2>Join Our Newsletter </h2>
              </div>
              <div className="footer-texte-box">
                <p>
                  {" "}
                  <i className="bx bx-chevron-right"></i>Join our Newsletter and
                  follow all our news
                </p>
                <div className="box-btn-newletter">
                  <input id="btn-newletter"></input>
                  <a
                    href="https://t.me/documentetaffairefinancieren"
                    target="_blank"
                  >
                    <button>Souscribe</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="footer-bottom-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" style={{ textAlign: "center" }}>
                © Copyright Farm.Smart. Tout les droits Reserve
              </div>
              <div className="col-lg-7"></div>
              <div className="col-lg-1 footer-bottom-icon-container">
                <a href="#!">
                  <div className="footer-bottom-icon-box">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                </a>
                {/* <!-- ------------------------------------- --> */}
                <a href="/">
                  <div className="footer-bottom-icon-box">
                    <i className="fa-solid fa-paper-plane"></i>{" "}
                  </div>
                </a>
                {/* <!-- ------------------------------------- --> */}
                <a href="/">
                  <div className="footer-bottom-icon-box">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                </a>

                {/* <!-- ------------------------------------- --> */}
                <a href="#!">
                  <div className="footer-bottom-icon-box">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </a>
                {/* <!-- ------------------------------------- --> */}
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Home;
