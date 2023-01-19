import "../sass/pages/_about.scss";
import image from "../assets/about.jpeg";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";

export default function About() {
  return (
    <div className="containerBlur">
      <div className="page-preview">
        <div className="page-preview-header">
          <h3>Hakkımızda</h3>
        </div>
        <div className="page-preview-body">
          <div className="page-preview-body-empty"></div>
          <img className="page-preview-body-img-1" src={image}></img>
          <img className="page-preview-body-img-2" src={mission}></img>
          <div className="page-preview-body-about">
            <div className="page-preview-body-about-info">
              <h3>Soydan Tarım Hakkında</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>

              <div className="page-preview-body-about-info-middle">
                <div className="page-preview-body-about-info-middle-banner">
                  <div className="page-preview-body-about-info-middle-banner-1">
                    <h3>Güvenilir</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="page-preview-body-about-info-middle-banner-2">
                    <h3>Profesyonel</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="page-preview-body-about-info-middle-banner-3">
                    <h3>Uzman</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="page-preview-body-about-info-bottom">
                <div className="page-preview-body-about-info-bottom-mission">
                  <div className="mission">
                    <h1>Misyonumuz</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing eLorem
                      ipsum dolor sit amet, consectetur adipiscing eLorem ipsum
                      dolor sit amet, consectetur adipiscing eLorem ipsum dolor
                      sit amet, consectetur adipiscing eLorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <img src={mission} className="img-mission" />
                </div>
                <div className="page-preview-body-about-info-bottom-vision">
                  <img src={vision} className="img-vision" />
                  <div className="vision">
                    <h1>Vizyonumuz</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing eLorem
                      ipsum dolor sit amet, consectetur adipiscing eLorem ipsum
                      dolor sit amet, consectetur adipiscing eLorem ipsum dolor
                      sit amet, consectetur adipiscing eLorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="about__top">
                <div className="about__top--image">
                    <img src={image} className="img1" />
                </div>
                <div className="about__top--text">
                    <h2>Soydan Tarım</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </div>
            </div>
            <div className="about__middle">
                <div className="about__middle--banner">
                    <div className="about__middle--banner--1">
                        <h3>Güvenilir</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="about__middle--banner--2">
                        <h3>Profesyonel</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="about__middle--banner--3">
                        <h3>Uzman</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            <div className="about__bottom">
                <div className="about__bottom--mission">
                    <div className="mission">
                        <h1>Misyonumuz</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <img src={mission} className="img__mission" />
                </div>
                <div className="about__bottom--vision">
                    <img src={vision} className="img__vision" />
                    <div className="vision">
                        <h1>Vizyonumuz</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, consectetur adipiscing eLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div> */
}
