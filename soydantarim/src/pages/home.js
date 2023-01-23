import react from "react";
import CommentCarousel from "../components/carousel";
import image from "../assets/mission.jpg";
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
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

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

      <div className="section2">
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
              nisl consequat, auctor augue et, facilisis diam. Ut euismod
              placerat lacus eu tempus. Sed quis ligula urna. Mauris facilisis
              massa mauris, eget gravida dolor tempus vel. Aenean feugiat nunc a
              ex imperdiet, eu egestas dolor ultriciesLorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam at nisl consequat,
              auctor augue et, facilisis diam. Ut euismod placerat lacus eu
              tempus. Sed quis ligula urna. Mauris facilisis massa mauris, eget
              gravida dolor tempus vel. Aenean feugiat nunc a ex imperdiet, eu
              egestas dolor ultriciesLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam at nisl consequat, auctor augue et,
              facilisis diam. Ut euismod placerat lacus eu tempus. Sed quis
              ligula urna.
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
                <img
                  src={icon1}
                  style={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                  }}
                ></img>
                <div className="services__texts">
                  <h4>Mükemmel Hizmet</h4>
                  <p>Lorem ipsum dolor sit</p>
                </div>
              </div>
              <div className="services__heading">
                <img
                  src={icon4}
                  style={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                  }}
                ></img>
                <div className="services__texts">
                  <h4>Temiz Çalışma</h4>
                  <p>Lorem ipsum dolor sit</p>
                </div>
              </div>
              <div className="services__heading">
                <img
                  src={icon3}
                  style={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                  }}
                ></img>
                <div className="services__texts">
                  <h4>Kalite ve Güvenilirlik</h4>
                  <p>Lorem ipsum dolor sit</p>
                </div>
              </div>
              <div className="services__heading">
                <img
                  src={icon2}
                  style={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                  }}
                ></img>
                <div className="services__texts">
                  <h4>Uzman Çiftçi</h4>
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
            <div class="card-hover">
              <div class="card-hover__content">
                <h3 class="card-hover__title">
                  Zirai <span>İlaçlar</span>
                </h3>
                <p class="card-hover__text">
                  Akasit, Defoliant, Fumigant ve daha fazlası.
                </p>
                <Link to="/ürünler" className="card-hover__link">
                  <span>Keşfet</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <img src={p1}></img>
            </div>
            <div class="card-hover">
              <div class="card-hover__content">
                <h3 class="card-hover__title">
                  Gübre<span>ler</span>
                </h3>
                <p class="card-hover__text">
                  Ahır Gübresi, Kompostlar, Yeşil Gübreler ve daha fazlası.
                </p>
                <Link to="/ürünler/productA" className="card-hover__link">
                  <span>Keşfet</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <img src={p2}></img>
            </div>
            <div class="card-hover">
              <div class="card-hover__content">
                <h3 class="card-hover__title">
                  Tohum<span>lar</span>
                </h3>
                <p class="card-hover__text">
                  Domates, Biber, Karpuz ve daha fazlası.
                </p>
                <Link to="/ürünler/productA" className="card-hover__link">
                  <span>Keşfet</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <img src={p3}></img>
            </div>
            <div class="card-hover">
              <div class="card-hover__content">
                <h3 class="card-hover__title">
                  Fide<span>ler</span>
                </h3>
                <p class="card-hover__text">
                  Aşılı Fide, Marul Fidesi, Domates Fidesi ve daha fazlası
                </p>
                <Link to="/ürünler/productA" className="card-hover__link">
                  <span>Keşfet</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <img src={p4}></img>
            </div>
            <div class="card-hover">
              <div class="card-hover__content">
                <h3 class="card-hover__title">
                  Tarım<span> Aletleri</span>
                </h3>
                <p class="card-hover__text">
                  Kültivatör, Saban, Fıskiye ve daha fazlası.
                </p>
                <Link to="/ürünler/productA" className="card-hover__link">
                  <span>Keşfet</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <img src={p5}></img>
            </div>
            <div class="card-hover">
              <div class="card-hover__content">
                <h3 class="card-hover__title">
                  Zeytin<span>yağı</span>
                </h3>
                <p class="card-hover__text">Organik Zeytinyağı</p>
                <Link to="/ürünler/productA" className="card-hover__link">
                  <span>Keşfet</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <img src={p6}></img>
            </div>
          </div>
        </div>

        <div className="partners__section">
          <Partners />
        </div>
        <div className="comments">
          <h1 className="comments__header">Müşteri Yorumları</h1>
          <div className="comments__slider">
            <CommentCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
