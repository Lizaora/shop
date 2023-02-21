import React ,{useState,useEffect}from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardsProduct from "../CardsProduct";
import { Link } from "react-router-dom";

const ProductSlide = ({title}) => {

  const [width, setWidth] = useState(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 767;




  return (
    <div className="product-area pt-40 pb-70">
      <div className="container product" style={{ paddingTop: "10em" }}>
        <div className="product-top-bar section-border mb-35">
          <div className="section-title-wrap">
            <h3 className="section-title section-bg-white">
              {title}
            </h3>
          </div>
        </div>
        <div className="tab-content">
          <OwlCarousel items={isMobile?2:4} loop margin={isMobile?10:15}>
            <div className="product-wrapper">
              <div className="product-img">
                <Link to="/detaille">
                  <img alt="" src="assets/img/product/product-1.png" />
                </Link>
                <span>-30%</span>
                <div className="product-action">
                  <a className="action-wishlist" href="/" title="Wishlist">
                    <i className="icon-heart" />
                  </a>
                  <a className="action-cart" href="/" title="Add To Cart">
                    <i className="icon-handbag" />
                  </a>
                  <a
                    className="action-compare"
                    href="/"
                    data-bs-target="#exampleModal"
                    data-bs-toggle="modal"
                    title="Quick View"
                  >
                    <i className="icon-magnifier-add" />
                  </a>
                </div>
              </div>
              <div className="product-content text-center">
                <h4>
                  <a href="product-details.html">Dutchman's Breeches </a>
                </h4>
                <div className="product-price-wrapper">
                  <span>100.00€</span>
                  <span className="product-price-old">120.00€</span>
                </div>
              </div>
            </div>
            <div className="product-wrapper">
              <div className="product-img">
                <a href="product-details.html">
                  <img alt="" src="assets/img/product/product-2.png" />
                </a>
                <div className="product-action">
                  <a className="action-wishlist" href="/" title="Wishlist">
                    <i className="icon-heart" />
                  </a>
                  <a className="action-cart" href="/" title="Add To Cart">
                    <i className="icon-handbag" />
                  </a>
                  <a
                    className="action-compare"
                    href="/"
                    data-bs-target="#exampleModal"
                    data-bs-toggle="modal"
                    title="Quick View"
                  >
                    <i className="icon-magnifier-add" />
                  </a>
                </div>
              </div>
              <div className="product-content text-center">
                <h4>
                  <a href="product-details.html">Flowers Bouquet Pink </a>
                </h4>
                <div className="product-price-wrapper">
                  <span>€100.00</span>
                </div>
              </div>
            </div>
            <div className="product-wrapper">
              <div className="product-img">
                <a href="product-details.html">
                  <img alt="" src="assets/img/product/product-3.png" />
                </a>
                <span>-30%</span>
                <div className="product-action">
                  <a className="action-wishlist" href="/" title="Wishlist">
                    <i className="icon-heart" />
                  </a>
                  <a className="action-cart" href="/" title="Add To Cart">
                    <i className="icon-handbag" />
                  </a>
                  <a
                    className="action-compare"
                    href="/"
                    data-bs-target="#exampleModal"
                    data-bs-toggle="modal"
                    title="Quick View"
                  >
                    <i className="icon-magnifier-add" />
                  </a>
                </div>
              </div>
              <div className="product-content text-center">
                <h4>
                  <a href="product-details.html">Evergreen Candytuft </a>
                </h4>
                <div className="product-price-wrapper">
                  <span>€100.00</span>
                  <span className="product-price-old">€120.00 </span>
                </div>
              </div>
            </div>
            <div className="product-wrapper">
              <div className="product-img">
                <a href="product-details.html">
                  <img alt="" src="assets/img/product/product-4.png" />
                </a>
                <div className="product-action">
                  <a className="action-wishlist" href="/" title="Wishlist">
                    <i className="icon-heart" />
                  </a>
                  <a className="action-cart" href="/" title="Add To Cart">
                    <i className="icon-handbag" />
                  </a>
                  <a
                    className="action-compare"
                    href="/"
                    data-bs-target="#exampleModal"
                    data-bs-toggle="modal"
                    title="Quick View"
                  >
                    <i className="icon-magnifier-add" />
                  </a>
                </div>
              </div>
              <div className="product-content text-center">
                <h4>
                  <a href="product-details.html">Pearly Everlasting</a>
                </h4>
                <div className="product-price-wrapper">
                  <span>€100.00</span>
                </div>
              </div>
            </div>
            <CardsProduct
              article={{ pourcentage: "30", name: "bouqet", promo: "12" }}
            />
          </OwlCarousel>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-12">
                  <div className="tab-content">
                    <div id="pro-1" className="tab-pane fade show active">
                      <img
                        src="assets/img/product-details/product-detalis-l1.jpg"
                        alt=""
                      />
                    </div>
                    <div id="pro-2" className="tab-pane fade">
                      <img
                        src="assets/img/product-details/product-detalis-l2.jpg"
                        alt=""
                      />
                    </div>
                    <div id="pro-3" className="tab-pane fade">
                      <img
                        src="assets/img/product-details/product-detalis-l3.jpg"
                        alt=""
                      />
                    </div>
                    <div id="pro-4" className="tab-pane fade">
                      <img
                        src="assets/img/product-details/product-detalis-l4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product-thumbnail">
                    <div className="thumb-menu nav nav-style" role="tablist">
                      <OwlCarousel loop>
                        <button
                          className="active"
                          data-bs-toggle="tab"
                          data-bs-target="#pro-1"
                        >
                          <img
                            src="assets/img/product-details/product-detalis-s1.jpg"
                            alt=""
                          />
                        </button>
                        <button data-bs-toggle="tab" data-bs-target="#pro-2">
                          <img
                            src="assets/img/product-details/product-detalis-s2.jpg"
                            alt=""
                          />
                        </button>
                        <button data-bs-toggle="tab" data-bs-target="#pro-3">
                          <img
                            src="assets/img/product-details/product-detalis-s3.jpg"
                            alt=""
                          />
                        </button>
                        <button data-bs-toggle="tab" data-bs-target="#pro-4">
                          <img
                            src="assets/img/product-details/product-detalis-s4.jpg"
                            alt=""
                          />
                        </button>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-7 col-xs-12">
                  <div className="modal-pro-content">
                    <h3>Dutchman's Breeches </h3>
                    <div className="product-price-wrapper">
                      <span className="product-price-old">162.00€</span>
                      <span>120.00€</span>
                    </div>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet.
                    </p>
                    <div className="quick-view-select">
                      <div className="select-option-part">
                        <label>Size*</label>
                        <select className="select">
                          <option value>S</option>
                          <option value>M</option>
                          <option value>L</option>
                        </select>
                      </div>
                      <div className="quickview-color-wrap">
                        <label>Color*</label>
                        <div className="quickview-color">
                          <ul>
                            <li className="blue">b</li>
                            <li className="red">r</li>
                            <li className="pink">p</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product-quantity">
                      <div className="cart-plus-minus">
                        <input
                          className="cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          defaultValue="02"
                        />
                      </div>
                      <button>Ajouter au panier</button>
                    </div>
                    <span>
                      <i className="fa fa-check" /> en stock
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
