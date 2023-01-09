import React from "react";
import Header from "../../components/Header";
import RecapPage from "../../components/recapPage";
import CardsProduct from "../../components/CardsProduct";
import FilterShop from "../../components/filterShop";
import CategorieShop from "../../components/footer/categorieShop";
import Footer from "../../components/footer";
import "./index.css"

const Shop = () => {
  
  return (
    <div>
      <Header />
      <RecapPage pagePrecedent="Accueil" pageActuell="Magasin" />

      <div className="shop-page-area pt-75 pb-75">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-9">
              <div className="banner-area pb-30">
                <a href="/">
                  <img className="affiche-shop" alt="" src="assets/img/banner/affiche.jpg" />
                </a>
              </div>
              {/* filtrer shop */}
              <FilterShop />

              <div className="grid-list-product-wrapper">
                <div className="product-grid product-view pb-20">
                  <div className="row">
                    {/* cardArticle  mettre une boucle ici*/}
                    <div className="product-width col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-30">
                      <CardsProduct
                        article={{
                          pourcentage: "30",
                          name: "bouqet",
                          promo: "12",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* categories */}
            <CategorieShop />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
