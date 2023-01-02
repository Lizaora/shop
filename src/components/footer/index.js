import React from'react';


const Footer = ()=>{

    return (
        <footer className="footer-area pt-58 gray-bg-3">
  <div className="footer-top gray-bg-3 pb-20">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="footer-widget footer-widget-red footer-black-color mb-40">
            <div className="footer-title mb-30">
              <h4>À propos de nous</h4>
            </div>
            <div className="footer-about">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididun</p>
              <div className="footer-contact mt-20">
                <ul>
                  <li>Address: Combani</li>
                  <li>Telephone: 06-39-04-84-34 </li>
                  <li>Email: <a href="/">support@lisaOra.fr</a></li>
                </ul>
              </div>
            </div>
            <div className="social-icon">
              <ul>
                <li><a className="facebook" href="https://www.facebook.com/desiles.bahati"><i className="ion-social-facebook" /></a></li>
                <li><a className="instagram" href="https://instagram.com/pepinieristelizaora?igshid=YmMyMTA2M2Y="><i className="ion-social-instagram-outline" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      
       
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="footer-widget mb-40">
            <div className="footer-title mb-30">
              <h4>s'inscrire au newsletter</h4>
            </div>
            <div className="footer-newsletter">
              <p>Recevez par e-mail nos offres spéciales.</p>
              <div id="mc_embed_signup" className="subscribe-form">
                <form action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll" className="mc-form">
                    <input type="email"  name="EMAIL" className="email" placeholder="votre adress email..." required  />
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div className="mc-news" aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabIndex={-1} defaultValue="exemple@exemple.fr" /></div>
                    <div className="clear-2"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom pb-25 pt-25 gray-bg-2">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="copyright">
            <p>Copyright © 2023 <a href="/">LisaOra</a> | Conçu par  <a href="https://www.mohamadimsa.fr">
             Mohamadi msa
            </a></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="payment-img f-right">
            <a href="/">
              <img alt="" src="assets/img/icon-img/payment.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
    )

}


export default Footer;