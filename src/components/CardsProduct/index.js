import  React from 'react'


const CardsProduct = ({article})=>{
    return(
        <>
        <div className="product-wrapper">
        <div className="product-img">
          <a href="product-details.html">
            <img alt="" src="assets/img/product/product-1.png" />
          </a>
          {article.pourcentage?(<span>-{article.pourcentage}%</span>):null}
         
          <div className="product-action">
            <a className="action-wishlist" href="/" title="Wishlist">
              <i className="icon-heart" />
            </a>
            <a className="action-cart" href="/" title="Add To Cart">
              <i className="icon-handbag" />
            </a>
            <a className="action-compare" href="/" data-bs-target="#exampleModal" data-bs-toggle="modal" title="Quick View">
              <i className="icon-magnifier-add" />
            </a>
          </div>
        </div>
        <div className="product-content text-center">
          <h4>
            <a href="product-details.html">{article.name} </a>
          </h4>
          <div className="product-price-wrapper">
            <span>{article.price}€</span>
            {article.promo&( <span className="product-price-old">{article.promo}</span>)}
          </div>
        </div>
      </div>





      </>
    )
}


export default CardsProduct