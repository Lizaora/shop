import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import RecapPage from "../../components/recapPage";
import ProductSlide from "../../components/slider/ProductSlide";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Detaille = () => {
  return (
    <div>
      <Header />
      <RecapPage pagePrecedent="Accueil" pageActuell="Magasin" />

      <div class="product-details pt-75 pb-65">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="product-details-img">
                <img
                  class="zoompro"
                  src="assets/img/product-details/product-detalis-l1.jpg"
                  data-zoom-image="assets/img/product-details/product-detalis-bl1.jpg"
                  alt="zoom"
                />
                <div id="gallery" class="mt-20 product-dec-slider">
                  <div>
                  <OwlCarousel>
                    <a
                      data-image="assets/img/product-details/product-detalis-l1.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl1.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s1.jpg"
                        alt
                      />
                    </a>
                    <a
                      data-image="assets/img/product-details/product-detalis-l2.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl2.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s2.jpg"
                        alt
                      />
                    </a>
                    <a
                      data-image="assets/img/product-details/product-detalis-l3.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl3.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s3.jpg"
                        alt
                      />
                    </a>
                    <a
                      data-image="assets/img/product-details/product-detalis-l4.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl4.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s4.jpg"
                        alt
                      />
                    </a>
                    <a
                      data-image="assets/img/product-details/product-detalis-l5.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl5.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s5.jpg"
                        alt
                      />
                    </a>
                    <a
                      data-image="assets/img/product-details/product-detalis-l2.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl2.jpg"
                    >
                      <img
                        src="assets/img/product-details/product-detalis-s2.jpg"
                        alt
                      />
                    </a>
                    </OwlCarousel>
                  </div>
                </div>
                <span>-29%</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="product-details-content">
                <h4>nom Articles</h4>
                {/* <div class="rating-review">
                  <div class="pro-dec-rating">
                    <i class="ion-android-star-outline theme-star"></i>
                    <i class="ion-android-star-outline theme-star"></i>
                    <i class="ion-android-star-outline theme-star"></i>
                    <i class="ion-android-star-outline theme-star"></i>
                    <i class="ion-android-star-outline"></i>
                  </div>
                  <div class="pro-dec-review">
                    <ul>
                      <li>32 Reviews </li>
                      <li> Add Your Reviews</li>
                    </ul>
                  </div>
                </div> */}
                <span>260.00€</span>
                <div class="in-stock">
                  <p>
                    stockage: <span>en stock</span>
                  </p>
                </div>
                <p>
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.{" "}
                </p>
                <div class="pro-dec-feature">
                  <ul>
                    <div>
                      <li>
                        <input type="checkbox" /> sur embalage
                        <span>  5€ / article</span>
                      </li>
                      <li>
                        <input type="checkbox" /> message:{" "}
                        <span> 3€</span>
                      </li>
                    </div>
                  </ul>
                </div>
                <div class="quality-add-to-cart">
                  <div class="quality">
                    <label>Qantiter:</label>
                    <input
                      classname="cart-plus-minus-box"
                      type="text"
                      name="qtybutton"
                      defaultvalue={3}
                    />
                  </div>
                  <div class="shop-list-cart-wishlist">
                    <a title="Add To Cart" href="#">
                       
                      <i class="icon-handbag"></i>
                    </a>
                    {/* <a title="Wishlist" href="#">
                      <i class="icon-heart"></i>
                    </a> */}
                  </div>
                </div>
                <div class="pro-dec-categories">
                  <ul>
                    <li class="categories-title">Categories:</li>
                    <li>
                      <a href="#">Birthday,</a>
                    </li>
                    <li>
                      <a href="#"> Bouquets, </a>
                    </li>
                    <li>
                      <a href="#">Custom Orders,</a>
                    </li>
                    <li>
                      <a href="#">Home Decor,</a>
                    </li>
                    <li>
                      <a href="#">Weddings, </a>
                    </li>
                  </ul>
                </div>
                <div class="pro-dec-categories">
                  <ul>
                    <li class="categories-title">Tags: </li>
                    <li>
                      <a href="#"> Bouquet,</a>
                    </li>
                    <li>
                      <a href="#"> Event, </a>
                    </li>
                    <li>
                      <a href="#"> Gift,</a>
                    </li>
                    <li>
                      <a href="#"> Joy,</a>
                    </li>
                    <li>
                      <a href="#"> Love </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div class="description-review-area pb-70">
            <div class="container">
                <div class="description-review-wrapper">
                    <div class="description-review-topbar nav text-center">
                        <a class="active" data-bs-toggle="tab" href="#des-details1">Description</a>
                        <a data-bs-toggle="tab" href="#des-details2">Tags</a>
                        <a data-bs-toggle="tab" href="#des-details3">Review</a>
                    </div>
                    <div class="tab-content description-review-bottom">
                        <div id="des-details1" class="tab-pane active">
                            <div class="product-description-wrapper">
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. </p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                                <ul>
                                    <li>-  Typi non habent claritatem insitam</li>
                                    <li>-  Est usus legentis in iis qui facit eorum claritatem. </li>
                                    <li>-  Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</li>
                                    <li>-  Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</li>
                                </ul>
                            </div>
                        </div>
                        <div id="des-details2" class="tab-pane">
                            <div class="product-anotherinfo-wrapper">
                                <ul>
                                    <li><span>Tags:</span></li>
                                    <li><a href="#"> bouquet,</a></li>
                                    <li><a href="#"> event,</a></li>
                                    <li><a href="#"> gift,</a></li>
                                    <li><a href="#"> joy,</a></li>
                                    <li><a href="#"> love ,</a></li>
                                    <li><a href="#"> special</a></li>
                                </ul>
                            </div>
                        </div>
                        <div id="des-details3" class="tab-pane">
                            <div class="rattings-wrapper">
                                <div class="sin-rattings">
                                    <div class="star-author-all">
                                        <div class="ratting-star f-left">
                                            <i class="ion-star theme-color"></i>
                                            <i class="ion-star theme-color"></i>
                                            <i class="ion-star theme-color"></i>
                                            <i class="ion-star theme-color"></i>
                                            <i class="ion-star theme-color"></i>
                                            <span>(5)</span>
                                        </div>
                                        <div class="ratting-author f-right">
                                            <h3>tayeb rayed</h3>
                                            <span>12:24</span>
                                            <span>9 March 2022</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost.</p>
                                </div>
                                <div class="sin-rattings">
                                    <div class="star-author-all">
                                        <div class="ratting-star f-left">
                                            <i class="ion-star theme-color"></i>
                                            <i class="ion-star theme-color"></i>
                                            <i class="ion-star theme-color"></i>
                                            <i class="ion-star theme-color"></i>
                                            <i class="ion-star theme-color"></i>
                                            <span>(5)</span>
                                        </div>
                                        <div class="ratting-author f-right">
                                            <h3>farhana shuvo</h3>
                                            <span>12:24</span>
                                            <span>9 March 2022</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost.</p>
                                </div>
                            </div>
                            <div class="ratting-form-wrapper">
                                <h3>Add your Comments :</h3>
                                <div class="ratting-form">
                                    <form action="#">
                                        <div class="star-box">
                                            <h2>Rating:</h2>
                                            <div class="ratting-star">
                                                <i class="ion-star theme-color"></i>
                                                <i class="ion-star theme-color"></i>
                                                <i class="ion-star theme-color"></i>
                                                <i class="ion-star theme-color"></i>
                                                <i class="ion-star"></i>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="rating-form-style mb-20">
                                                    <input placeholder="Name" type="text" />

                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="rating-form-style mb-20">
                                                  <input placeholder="Email" type="text" />

                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="rating-form-style form-submit">
                                                    <textarea name="message" placeholder="Message"></textarea>
                    <input type="submit" defaultValue="add review" />

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <ProductSlide  style={{padding : 0, margin :0}} title="Articles qui pourraient aussi vous intéresser." />
      <Footer />
    </div>
  );
};

export default Detaille;
