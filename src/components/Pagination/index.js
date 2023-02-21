import React from "react";

const Pagination = () => {
  return (
   <div classname="pagination-total-pages">
  <div classname="pagination-style">
    <div>
      <ul>
        <li>
          <a classname="prev-next prev" href="/">
            <i classname="ion-ios-arrow-left">précédent</i>
          </a>
          <i classname="ion-ios-arrow-left" />
        </li>
        <i classname="ion-ios-arrow-left">
          <li>
            <a classname="active" href="/">
              1
            </a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">...</a>
          </li>
          <li>
            <a href="/">10</a>
          </li>
          <li>
            <a classname="prev-next next" href="/">
              suivant<i classname="ion-ios-arrow-right" />
            </a>
            <i classname="ion-ios-arrow-right" />
          </li>
          <i classname="ion-ios-arrow-right" />
        </i>
      </ul>
      <i classname="ion-ios-arrow-left">
        <i classname="ion-ios-arrow-right" />
      </i>
    </div>
  </div>
  <div classname="total-pages">
    <p>1 - 20 sur 30 resultats</p>
  </div>
</div>

  );
};

export default Pagination;
