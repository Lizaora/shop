import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import RecapPage from "../../components/recapPage";
import CardPanier from "../../components/panier/CardPanier"
const Panier = () => {
  return (
    <>
      <Header />
      <RecapPage pagePrecedent="Accueil" pageActuell="panier" />
      <div class="cart-main-area pt-60 pb-65">
        <div class="container">
          <h3 class="page-title">votre panier</h3>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <form action="#">
                <div class="table-content table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>nom du produit</th>
                        <th>prix a l'uniter</th>
                        <th>Quantiter</th>
                        <th>sous total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        <CardPanier  name="bouqet exemble" total={"23"} soustotal={"34"} quantiter={"2"} lien='/'/>
                        <CardPanier  name="bouqet exemble" total={"23"} soustotal={"34"} quantiter={"2"} lien='/'/>
                        <CardPanier  name="bouqet exemble" total={"23"} soustotal={"34"} quantiter={"2"} lien='/'/>
                      
                    
                    </tbody>
                  </table>
                </div>
              
              </form>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="cart-tax">
                    <div class="title-wrap">
                      <h4 class="cart-bottom-title section-bg-gray">
                        estimer vos frais de livraisons
                      </h4>
                    </div>
                    <div class="tax-wrapper">
                      <p>entrer votre lieu de livraions afin d'estimer vos frais de livraisons.</p>
                      <div class="tax-select-wrapper">
                        <div class="tax-select">
                          <label>* ville</label>
                          <select class="email s-email s-wid">
                            <option>combani</option>
                            <option>miréréni</option>
                            <option>tsingoni</option>
                          </select>
                        </div>
                        <div class="tax-select">
                          <label>* code posal</label>
                          <input type="text" />
                        </div>
                        <div class="tax-select">
                          <label>* lieu dit</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="discount-code-wrapper">
                    <div class="title-wrap">
                      <h4 class="cart-bottom-title section-bg-gray">
                        utiliser un code promo
                      </h4>
                    </div>
                    <div class="discount-code">
                      <p>entrer un code promo</p>
                      <form>
                        <input type="text" required name="name" />

                        <button class="cart-btn-2" type="submit">
                         valider le code promo
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="grand-totall">
                    <div class="title-wrap">
                      <h4 class="cart-bottom-title section-bg-gary-cart">
                        total de votre panier
                      </h4>
                    </div>
                    <h5>
                      Total des article <span>260.00€</span>
                    </h5>
                    <div class="total-shipping">
                      <h5>Type de livraions</h5>
                      <ul>
                        <div>
                          <li>
                            <input type="checkbox" /> Standard{" "}
                            <span>20.00€</span>
                          </li>
                          <li>
                            <input type="checkbox" /> Express{" "}
                            <span>30.00€</span>
                          </li>
                        </div>
                      </ul>
                    </div>
                    <h4 class="grand-totall-title">
                      A payer <span>260.00€</span>
                    </h4>
                    <a href="#">Passer a la caisse</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Panier;
