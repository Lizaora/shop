import ApercusPanier from "./panier/ApercusPanier";
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className="header-area clearfix">
      <div className="header-top">
        <div className="container">
          <div className="border-bottom-1">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="welcome-area">
                  <p>🌻 BIENVENUE 🌻 CHEZ LIZAORA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom transparent-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-6">
              <div className="logo">
              <Link to="/">
                  <img
                  className="header-logo"
                    width="110px"
                    alt=""
                    src={process.env.PUBLIC_URL + "assets/img/logo/logo.jpg"}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-6">
              <div className="header-bottom-right">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li className="top-hover">
                      <Link to="/">Accueil</Link>
                      </li>
                      <li className="mega-menu-position top-hover">
                      <Link to="/shop">magasin</Link>  
                   
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
            <ApercusPanier/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
