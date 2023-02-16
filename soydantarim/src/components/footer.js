import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

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
                  <a>Zirai ilaç</a>
                </li>
                <li>
                  <a>gübre</a>
                </li>
                <li>
                  <a>tohum</a>
                </li>
                <li>
                  <a>fide</a>
                </li>
                <li>
                  <a>tarım aletleri</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Site Haritası</h4>
              <ul>
                <li>
                  <a href="#">Anasayfa</a>
                </li>
                <li>
                  <a href="#">Ürünler</a>
                </li>
                <li>
                  <a href="#">Galeri</a>
                </li>
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>İletişim</h4>
              <ul>
                <li>
                  <a>Yeni mahalle, Sanayi Cd. 3/c, 33330 Mezitli/Mersin</a>
                </li>
                <li>
                  <a>(0324) 359 42 57</a>
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
        <p className="footer__copyright">Copyright © 3rd Wave 2022. All rights reserved.</p>
        <div className='scrollTop'>
          <div class="arrow" onClick={handleScrollToTop}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </footer>

    </div>

    // <div className="footer">
    //     <div className="footer__container">
    //         <div className="footer__container-info">
    //             <h3>Soydan Tarım</h3>
    //             <p>Risus venenatis, varius nisi eget, accumsan neque. Aenean ac tristique ante, eget temique ante, eget tempus felis quisque.</p>
    //         </div>
    //         <div className="footer__container-links">
    //             <h3>Site Haritası</h3>
    //             <ul>
    //                 <div>
    //                     <li>Anasayfa</li>
    //                     <li>Ürünler</li>
    //                     <li>Galeri</li>
    //                 </div>
    //                 <div>
    //                     <li>Hakkımızda</li>
    //                     <li>İletişim</li>
    //                 </div>
    //             </ul>
    //         </div>
    //         <div className="footer__container-contact">
    //             <h3>İletişim</h3>
    //             <p>Yeni mahalle, Sanayi Cd. 3/c, 33330 Mezitli/Mersin</p>
    //             <p>(0324) 359 42 57</p>
    //             <div className="footer__container-contact-logos">
    //                 <p>Twitter</p>
    //                 <p>Instagram</p>
    //                 <p>Facebook</p>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="footer__copyright">
    //         <p>Copyright 2023 All Rights Reserved By 3rd Wave</p>
    //     </div>
    // </div>
  );
}
