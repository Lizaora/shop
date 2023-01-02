import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const PrincipalSlide = ()=>{

    return(
        <div className="slider-area">
        <OwlCarousel items={1}  loop  autoplay={true} >
          <div
            className="single-slider pt-175 pb-258 bg-img"
            style={{ backgroundImage: "url(assets/img/slider/slider-1.jpg)" }}
          >
            <div className="container" style={{height : "260px"}}>
              {/* <div class="slider-content slider-animated-1">
                <h3 class="animated">.</h3>
                <h1 class="animated">.</h1>
                <h5 class="animated">.</h5>
                <div class="slider-btn mt-45">
                  <a class="animated" href="product-details.html">
                    ''
                  </a>
                </div>
              </div> */}
            </div >
          </div>
          <div
            className="single-slider pt-175 pb-258 bg-img"
            style={{ backgroundImage: "url(assets/img/slider/slider-1.jpg)" }}
          >
            <div className="container" style={{height : "260px"}}>
              {/* <div class="slider-content slider-animated-1">
                <h3 class="animated">.</h3>
                <h1 class="animated">.</h1>
                <h5 class="animated">.</h5>
                <div class="slider-btn mt-45">
                  <a class="animated" href="product-details.html">
                    ''
                  </a>
                </div>
              </div> */}
            </div >
          </div>
          
          </OwlCarousel>
        </div>
    )

}

export default PrincipalSlide;
