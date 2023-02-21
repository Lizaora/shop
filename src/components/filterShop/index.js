import React from "react";

const FilterShop = () => {
  return (
    <div className="shop-topbar-wrapper">
    <div className="shop-topbar-left">
      <p> 1 - 20 sur 30 resultats</p>
    </div>
    <div className="product-sorting-wrapper">
      <div className="product-shorting shorting-style">
        <label>nombre article:</label>
        <select>
          <option value>20</option>
          <option value>23</option>
          <option value>30</option>
        </select>
      </div>
      <div className="product-show shorting-style">
        <label>trier par:</label>
        <select>
          <option value>prix croissant</option>
          <option value>prix decroissant</option>
        </select>
      </div>
    </div>
  </div>

  )
};

export default FilterShop;
