import "../sass/pages/_about.scss";
import GoToTop from "../utils/GoToTop";

export default function About() {
  return (
    <div className="about">
      <div className="about__top">
        <div className="about__top--image">
          <img
            src="https://raw.githubusercontent.com/RealCodeMate/SoydanTarim/main/soydantarim/src/assets/backgrounds/about.jpeg"
            className="img1"
          />
        </div>
        <div className="about__top--text">
          <h2>Soydan Tarım</h2>
          <p>
            İşletmemiz ziraat mühendisi Mehmet Soydan yönetiminde Eylül 1997
            yılında hizmet vermeye başlamıştır. Narenciye üretimi,sebze
            üretimi,sert çekirdekli meyve üretimi ve bağcılık konulanında
            üreticilerimize teknik danışmanlık hizmetleri ve ürün temini
            konularında hizmet vermekteyiz. Tüm zirai ilaç yaprak ve damlama
            gübreleri,taban gübreleri,tarım aletleri,ev haşere ilaçları, sebze
            tohum ve fideleri ve meyve fidanları temini ve satış hizmetleri
            vermektedir. Sektörde 26 yıldır başarıyla hizmet vermektedir. Daha
            çok sorun çözme odaklı çalışan işletmemiz doğru teşhis ve
            tavsiyeleriyle üreticilerimize kazandırma odaklı çalışmaktadır.
          </p>
        </div>
      </div>
      <div className="about__middle">
        <div className="about__middle--banner">
          <div className="about__middle--banner--1">
            <h3>Güvenilir</h3>
            <p>İnsanların tercih ettiği en güvenilir zirai ilaçlama adresi</p>
          </div>
          <div className="about__middle--banner--2">
            <h3>Profesyonel</h3>
            <p>Çözüm odaklı profesyonel bir hizmet için tek adres</p>
          </div>
          <div className="about__middle--banner--3">
            <h3>Uzman</h3>
            <p>Alanında uzmanlaşmış kişiler tarafından kaliteli çözümler </p>
          </div>
        </div>
      </div>

      <div className="about__bottom">
        <div className="about__bottom--mission">
          <div className="mission">
            <h1>Misyonumuz</h1>
            <p>
              Çeşitli planlar, programlar ve refah önlemleri yoluyla çiftçilere
              artan net çiftlik geliri sağlarken, çevre dostu bilim ve
              teknolojiyi kullanarak tarımsal-bahçe bitkilerinin üretimini ve
              üretkenliğini artırmak.
            </p>
          </div>
          <img
            src="https://raw.githubusercontent.com/RealCodeMate/SoydanTarim/main/soydantarim/src/assets/backgrounds/mission.jpg"
            className="img__mission"
          />
        </div>
        <div className="about__bottom--vision">
          <img
            src="https://raw.githubusercontent.com/RealCodeMate/SoydanTarim/main/soydantarim/src/assets/backgrounds/vision.jpg"
            className="img__vision"
          />
          <div className="vision">
            <h1>Vizyonumuz</h1>
            <p>
              İnsanlara gıda ve beslenme güvenliği sağlamak ve Tarımı
              sürdürülebilirlik ile karlı ve çekici bir işletme haline getirmek.
            </p>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  );
}
