import ContenuPanier from "./ContenuPanier"
import { Link } from "react-router-dom"
const ApercusPanier =()=>{

 return(
    <div className="header-cart">
     <Link to="/panier">
      <div className="cart-icon">
        <i className="ion-bag" />
        <span className="count-style">2</span>
      </div>
      <div className="cart-text">
        <span className="digit">panier</span>
        <span>0.00€</span>
      </div>
      </Link>
    <div className="shopping-cart-content">
        <ContenuPanier lien="assets/img/cart/cart-1.jpg"
        name="bouquet"
        quantiter="4"
        prix="123"
        />
          <ContenuPanier lien="assets/img/cart/cart-1.jpg"
        name="bouquet"
        quantiter="4"
        prix="123"
        />
        
      <div className="shopping-cart-total">
        <h4>
          Total : <span className="shop-total">260.00€</span>
        </h4>
      </div>
      <div className="shopping-cart-btn">
        <a href="cart-page.html">voir le panier</a>
      </div>
    </div>
  </div>
 )
}


export default ApercusPanier


