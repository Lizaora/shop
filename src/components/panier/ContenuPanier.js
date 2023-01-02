import React from'react';

const ContenuPanier = ({lien,name,quantiter,prix})=>{

    return (
        <ul>
        <li className="single-shopping-cart">
        <div className="shopping-cart-img">
          <a href="/">
            <img
              alt=""
              src={lien}
              />
          </a>
        </div>
        <div className="shopping-cart-title">
          <h4>
            <a href="/">{name} </a>
          </h4>
          <h6>Quantiter: {quantiter}</h6>
          <span>{prix}€</span>
        </div>
        <div className="shopping-cart-delete">
          <a href>
            <i className="ion ion-close" />
          </a>
        </div>
      </li>
      </ul>
    )
}

export default ContenuPanier;