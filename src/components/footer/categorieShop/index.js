import React from "react";
import { popular, categories } from "../../../DataStatic/categories";

const CategorieShop = () => {
  return (
    <>
      <div className="col-lg-3">
        <div className="shop-sidebar-wrapper gray-bg-7 shop-sidebar-mrg">
          <div className="shop-widget">
            <h4 className="shop-sidebar-title">catégorie</h4>
            <div className="shop-catigory">
              <ul id="faq">
                {categories.map((value, index) => {
                  return (
                    <li>
                      <a href={value.lien}>{value.name}</a>
                      {value.items.length ? (
                        <ul
                          id="shop-catigory-1"
                          className="panel-collapse collapse show"
                        >
                          {value.items.map((value2, index2) => {
                            return (
                              <li key={index2}>
                                <a href="/">{value2.name}</a>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="shop-widget mt-40 shop-sidebar-border pt-35">
            <h4 className="shop-sidebar-title">tag populaire</h4>
            <div className="shop-tags mt-25">
              <ul>
                {popular.map((value, index) => {
                  return (
                    <li>
                      <a href={value.lien}>{value.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorieShop;
