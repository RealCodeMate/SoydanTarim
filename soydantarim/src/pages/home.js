import react from "react";
import CommentCarousel from "../components/carousel";
import image from "../assets/landingImg.jpg";
import wheat from "../assets/wheat.mp4";
import "../sass/pages/_home.scss";
import logo from "../assets/logo.png";
import Partners from "../components/partners";
import { Link } from "react-router-dom";
import p1 from "../assets/1.jpg";
import p2 from "../assets/2.jpg";
import p3 from "../assets/3.jpg";
import p4 from "../assets/4.jpg";
import p5 from "../assets/5.jpg";
import p6 from "../assets/6.jpg";

export default function Home() {
  return (
    <div>
      <div className="landingPage">
        <div className="containerBlurHome">
          <div className="containerLandingPage">
            <div className="containerLandingPage_left">
              <div className="containerLandingPage_left_img">
                <video loop autoplay="" muted>
                  <source src={wheat} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="containerLandingPage_right ">
              <h2>
                <span>Soydan</span> Tarım
              </h2>
              <h5>
                Zirai ilaç, gübre, tohum, fide ve tarım aletleri, Mersin'in en
                iyisi.
              </h5>
              <a className="btn">Keşfet</a>
            </div>
          </div>
        </div>
      </div>

      <div className="landingImages">
        <img src={image} className="img1" />
        <img src={image} className="img1" />
        <img src={image} className="img1" />
      </div>
      <div className="landingInfo">
        <div className="landingInfo__slogan">
          <h3>
            Üreticiler için Mersin'in
            <br /> En Gözde Tarım ve Zirai İlaçları
          </h3>
        </div>
        <div className="landingInfo__desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            nisl consequat, auctor augue et, facilisis diam. Ut euismod placerat
            lacus eu tempus. Sed quis ligula urna. Mauris facilisis massa
            mauris, eget gravida dolor tempus vel. Aenean feugiat nunc a ex
            imperdiet, eu egestas dolor ultriciesLorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam at nisl consequat, auctor augue
            et, facilisis diam. Ut euismod placerat lacus eu tempus. Sed quis
            ligula urna. Mauris facilisis massa mauris, eget gravida dolor
            tempus vel. Aenean feugiat nunc a ex imperdiet, eu egestas dolor
            ultriciesLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam at nisl consequat, auctor augue et, facilisis diam. Ut
            euismod placerat lacus eu tempus. Sed quis ligula urna.
          </p>
        </div>
      </div>

      <div className="landingChoose">
        <div className="landingChoose__texts">
          <h1>Neden Soydan Tarım?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            nisl consequat, auctor augue et, facilisis diam.
          </p>
          <div className="services">
            <div className="services__heading">
              <p>ICON</p>
              <div>
                <h3>Servis 1</h3>
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="services__heading">
              <p>ICON</p>
              <div>
                <h3>Servis 2</h3>
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="services__heading">
              <p>ICON</p>
              <div>
                <h3>Servis 3</h3>
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="services__heading">
              <p>ICON</p>
              <div>
                <h3>Servis 4</h3>
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
          </div>
          <div className="landingChoose__button__wrapper">
            <a className="btn">Hakkımızda</a>
          </div>
        </div>
        <div className="landingChoose__image">
          <img src={image} className="img1" />
        </div>
      </div>
      
      <div className="homeProducts">
        <h1 className="homeProducts__header">Ürünlerimiz</h1>
        <div className="homeProducts__elements">
          <div className="hvr_img">
            <Link to="/ürünler/productA" className="flex_products">
              <img src={p1} style={{ height: "280px", width: "280px" }}></img>
              <h5>Zirai İlaçlar</h5>
            </Link>
          </div>
          <div className="hvr_img">
            <Link to="/ürünler/productA" className="flex_products">
              <img src={p2} style={{ height: "280px", width: "280px" }}></img>
              <h5>Gübreler</h5>
            </Link>
          </div>
          <div className="hvr_img">

            <Link to="/ürünler/productA" className="flex_products">
              <img src={p3} style={{ height: "280px", width: "280px" }}></img>
              <h5>Tohumlar</h5>
            </Link>
          </div>
          <div className=" hvr_img">

            <Link to="/ürünler/productA" className="flex_products">
              <img src={p4} style={{ height: "280px", width: "280px" }}></img>
              <h5>Fideler</h5>
            </Link>
          </div>
          <div className=" hvr_img">
            <Link to="/ürünler/productA" className="flex_products">
              <img src={p5} style={{ height: "280px", width: "280px" }}></img>
              <h5>Tarım Aletleri</h5>
            </Link>
          </div>
          <div className=" hvr_img">
            <Link to="/ürünler/productA" className="flex_products">
              <img src={p6} style={{ height: "280px", width: "280px" }}></img>
              <h5>Zeytinyağı</h5>
            </Link>
          </div>
        </div>
      </div>

      <div className="partners">
        <Partners />
      </div>
      <div className="comments">
        <h1 className="comments__header">Müşteri Yorumları</h1>
        <div className="comments__slider">
          <CommentCarousel />
        </div>
      </div>

    </div>
  );
}
