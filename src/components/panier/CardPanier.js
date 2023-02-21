import React from "react";
import { Link } from "react-router-dom";

const CardPanier = ({ name, total, soustotal, quantiter}) => {
  return (
    <tr>
      <td class="product-thumbnail">
        <Link to="/detaille">
          <img src="assets/img/cart/cart-3.jpg" alt />
        </Link>
      </td>
      <td class="product-name">
        <Link to="/detaille">{name} </Link>
      </td>
      <td class="product-price-cart">
        <span class="amount">{total}€</span>
      </td>
      <td class="product-quantity">
        <div class="pro-dec-cart">
          <input
            classname="cart-plus-minus-box"
            type="text"
            defaultvalue={quantiter}
            name="qtybutton"
          />
        </div>
      </td>
      <td class="product-subtotal">{soustotal}€</td>
      <td class="product-remove">
       
        <a href="#">
          <i class="fa fa-times"></i>
        </a>
      </td>
    </tr>
  );
};

export default CardPanier;
