import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../sass/components/_footer.scss";

export default function Footer() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <footer className="footer">
        <div className="containerFooter">
          <div className="row">
            <div className="footer-col">
              <h4>Soydan Tarım</h4>
              <ul>
                <li>
                  <Nav.Link as={NavLink} to="/ürünler">
                    <h5>Zirai İlaçlar</h5>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/ürünler/gübreler">
                    <h5>Gübreler</h5>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/ürünler/tohumlar">
                    <h5>Tohumlar</h5>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/ürünler/fideler">
                    <h5>Fideler</h5>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/ürünler/tarım-aletleri">
                    <h5>Tarım Aletleri</h5>
                  </Nav.Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Site Haritası</h4>
              <ul>
                <li>
                  <Nav.Link as={NavLink} to="/">
                    <h5>Anasayfa</h5>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/ürünler">
                    <h5>Ürünler</h5>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/galeri">
                    <h5>Galeri</h5>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/hakkımızda">
                    <h5>Hakkımızda</h5>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/iletişim">
                    <h5>İletişim</h5>
                  </Nav.Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>İletişim</h4>
              <ul>
                <li>
                  <Nav.Link as={NavLink} to="/iletişim">
                    <h5>Yeni mahalle, Sanayi Cd. 3/c, 33330 Mezitli/Mersin</h5>
                  </Nav.Link>
                </li>
                <li>
                  <a href="tel:0-324-359-4257">
                    <h5>
                      (0324) 359 42 57
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="tel:90-532-545-3258">
                    <h5>
                      +90 532 545 32 58
                    </h5>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <FontAwesomeIcon icon={faTwitter} className="twitterLogo" onClick={() => window.open("https://www.google.com.tr/", "_blank")} />
                <FontAwesomeIcon icon={faFacebook} className="facebookLogo" onClick={() => window.open("https://www.google.com.tr/", "_blank")} />
                <FontAwesomeIcon icon={faInstagram} className="instagramLogo" onClick={() => window.open("https://www.google.com.tr/", "_blank")} />
              </div>
            </div>
          </div>
        </div>
        <p className="footer__copyright">Copyright © 3rd Wave 2023. Tüm hakları saklıdır.</p>
        <div className='scrollTop'>
          <div class="arrow" onClick={handleScrollToTop}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </footer>

    </div>

   
  );
}
