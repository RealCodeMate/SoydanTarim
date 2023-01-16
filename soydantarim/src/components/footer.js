import "../sass/components/_footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container-info">
                    <h3>Soydan Tarım</h3>
                    <p>Risus venenatis, varius nisi eget, accumsan neque. Aenean ac tristique ante, eget temique ante, eget tempus felis quisque.</p>
                </div>
                <div className="footer__container-links">
                    <h3>Site Haritası</h3>
                    <ul>
                        <div>
                            <li>Anasayfa</li>
                            <li>Ürünler</li>
                            <li>Galeri</li>
                        </div>
                        <div>
                            <li>Hakkımızda</li>
                            <li>İletişim</li>
                        </div>
                    </ul>
                </div>
                <div className="footer__container-contact">
                    <h3>İletişim</h3>
                    <p>Yeni mahalle, Sanayi Cd. 3/c, 33330 Mezitli/Mersin</p>
                    <p>(0324) 359 42 57</p>
                    <div className="footer__container-contact-logos">
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p>Copyright 2023 All Rights Reserved By 3rd Wave</p>
            </div>
        </div>
    )
}