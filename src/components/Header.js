import ApercusPanier from "./panier/ApercusPanier";
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
                <a href="/">
                  <img
                    width="110px"
                    alt=""
                    src={process.env.PUBLIC_URL + "assets/img/logo/logo.jpg"}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-6">
              <div className="header-bottom-right">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li className="top-hover">
                        <a href="/">Accueil</a>
                      </li>
                      <li className="mega-menu-position top-hover">
                        <a href="/shop">magasin</a>
                   
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
