import React from'react';
import { Link } from "react-router-dom"

const LienRapide = ()=>{
    return(    <div className="banner-area">
    <div className="container" style={{height: "2em"}}>
      <div className="banner-wrap">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="single-banner img-zoom mb-30">
              <a href="/">
                <img src="assets/img/banner/banner-1.png" alt="" />
              </a>
              <div className="banner-content">
                <h4>Bouquet</h4>
                <a href="/">passer une commande</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="single-banner img-zoom mb-30">
              <a href="/">
                <img src="assets/img/banner/banner-2.png" alt="" />
              </a>
              <div className="banner-content">
                <h4>couvrir un événement</h4>
                <a href="/">obtenir un devis</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="single-banner mb-xs-banner img-zoom mb-30">
              <Link to="/shop">
                <img src="assets/img/banner/banner-3.png" alt="" />
                </Link>
              <div className="banner-content">
                <h4>achat en ligne</h4>
                <Link to="/shop">magasin Accéder à la Boutique</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default LienRapide;
