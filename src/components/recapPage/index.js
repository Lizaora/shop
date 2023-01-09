import React from "react";

const RecapPage = ({pagePrecedent,pageActuell}) => {
  return (
    <div class="breadcrumb-area gray-bg">
      <div class="container">
        <div class="breadcrumb-content">
          <ul>
            <li>
              <a href="index.html">{pagePrecedent}</a>
            </li>
            <li class="active">{pageActuell}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecapPage;
