import React from "react";
import insta1 from "../../images/iteration-2-images/footer/insta/li-0.png";
import insta2 from "../../images/iteration-2-images/footer/insta/li-1.png";
import insta3 from "../../images/iteration-2-images/footer/insta/li-2.png";
import insta4 from "../../images/iteration-2-images/footer/insta/li-3.png";
import insta5 from "../../images/iteration-2-images/footer/insta/li-4.png";
import insta6 from "../../images/iteration-2-images/footer/insta/li-5.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
         <div className="footer-brand">
          <h2 className="brand-title">Teknolojik Yemekler</h2>

          <div className="contact-item flex gap-3">
            <img
              src="../../images/iteration-2-images/footer/icons/icon-1.png"
              alt="icon"
            />
            <p>341 Londonderry Road, İstanbul Türkiye</p>
          </div>

          <div className="contact-item flex gap-3">
            <img
              src="../../images/iteration-2-images/footer/icons/icon-2.png"
              alt="icon"
            />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>

          <div className="contact-item flex gap-3">
            <img
              src="../../images/iteration-2-images/footer/icons/icon-3.png"
              alt="icon"
            />
            <p>+90 216 123 45 67</p>
          </div>
        </div>

        <div className="footer-menu">
          <h3>Hot Menu</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="footer-instagram">
          <h3>Instagram</h3>
          <div className="insta-grid">
            <img src={insta1} />
            <img src={insta2} />
            <img src={insta3} />
            <img src={insta4} />
            <img src={insta5} />
            <img src={insta6} />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
      </div>
    </footer>
  );
}

export default Footer;