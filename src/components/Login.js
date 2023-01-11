import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from "./Header";
import Footer from "./footer";
import PrincipalSlide from "./slider/PrincipalSlide";
import LienRapide from "./LienRapide";
import ProductSlide from "./slider/ProductSlide";

const Login = () => {
  return (
    <>
      <Header />

      <PrincipalSlide />

      <LienRapide />

      <ProductSlide title="Nos offres du moment"/>

      <div
        className="testimonials-area bg-img pt-120 pb-115"
        style={{ backgroundImage: "url(assets/img/bg/bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ms-auto col-12">
              <div className="testimonial-active">
                <OwlCarousel items={1} loop>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-img">
                      <img
                        alt=""
                        style={{ width: "47px" }}
                        src="assets/img/icon-img/testi.png"
                      />
                    </div>
                    <p>
                      When a beautiful design is combined with powerful
                      technology,
                      <br /> it truly is an artwork. I love how my website
                      operates and looks with this theme. <br />
                      Thank you for the awesome product.{" "}
                    </p>
                    <h4>mohamadi</h4>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-img">
                      <img
                        alt=""
                        style={{ width: "47px" }}
                        src="assets/img/icon-img/testi.png"
                      />
                    </div>
                    <p>
                      “ Lorem ipsum dolor sit, con adipisicing elit, sed do
                      eiusmod tempor <br />
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud <br />
                      exercitati ullamco laboris ”{" "}
                    </p>
                    <h4> moahamdi</h4>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-img">
                      <img
                        alt=""
                        style={{ width: "47px" }}
                        src="assets/img/icon-img/testi.png"
                      />
                    </div>
                    <p>
                      When a beautiful design is combined with powerful ,<br />{" "}
                      technology it truly is an artwork. I love how my website
                      operates and looks with this <br />
                      theme. Thank you for the awesome product.{" "}
                    </p>
                    <h4>mohamadi</h4>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="best-selling-product pt-70 pb-75 gray-bg">
        <div className="container">
          <div className="product-top-bar section-border mb-35"></div>
          <div className="best-selling-wrap">
            <div className="best-selling-active  product-nav">
              <div className="single-best-selling">
                <div className="row">
                  <div className="col-lg-6 col-xl-5 col-md-6">
                    <div className="single-best-img">
                      <img
                        className="tilter"
                        src="assets/img/banner/deal-1.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-7 col-md-6">
                    <div className="deals-content text-center deal-mrg">
                      <img
                        className="sousimage"
                        alt=""
                        src="assets/img/icon-img/deals-2.png"
                      />
                      <h2>C'EST BIENTÔT LA SAINT VALENTIN</h2>
                      <p>
                        La fête des amoureux approche, c’est l’occasion de
                        couvrir de tendres cadeaux votre moitié. Classique avec
                        les roses rouges, ou plus original avec une composition
                        florale unique, laissez parler votre cœur pour offrir à
                        l’être aimé une attention dont il ou elle se souviendra
                        longtemps{" "}
                      </p>
                      <div className="timer timer-style">
                        <div data-countdown="2023/09/01" />
                      </div>
                      <div className="deals-btn">
                        <a href="/">Passer commande</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-logo-area ptb-75">
        <div className="container">
          <div className="product-top-bar section-border mb-35">
            <div className="section-title-wrap">
              <h3 className="section-title section-bg-white">
                ils nous font confiance
              </h3>
            </div>
          </div>
          <div className="brand-logo-active ">
            <OwlCarousel items={6} loop margin={5} autoplay>
              <div className="single-brand-logo">
                <img alt="" src="assets/img/brand-logo/logo-1.png" />
              </div>
              <div className="single-brand-logo">
                <img alt="" src="assets/img/brand-logo/logo-2.png" />
              </div>
              <div className="single-brand-logo">
                <img alt="" src="assets/img/brand-logo/logo-3.png" />
              </div>
              <div className="single-brand-logo">
                <img alt="" src="assets/img/brand-logo/only.jpeg" />
              </div>
              <div className="single-brand-logo">
                <img alt="" src="assets/img/brand-logo/sfr.jpeg" />
              </div>
              <div className="single-brand-logo">
                <img alt="" src="assets/img/brand-logo/logo-2.png" />
              </div>
              <div className="single-brand-logo">
                <img alt="" src="assets/img/brand-logo/jasmine.JPG" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
