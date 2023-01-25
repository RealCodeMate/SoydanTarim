import react from "react";
import "../sass/pages/_products.scss";
import p1 from "../assets/1.jpg";
import p2 from "../assets/2.jpg";
import p3 from "../assets/3.jpg";
import p4 from "../assets/4.jpg";
import p5 from "../assets/5.jpg";
import p6 from "../assets/6.jpg";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <div className="product">
        <div className="containerHeader">
          <h2><span>Zirai </span>İlaçlar</h2>
        </div>
      </div>
      <div className="containerCard">
        <div className="card" >
          <div className="content">

            <div className="content__text">
              <h3>Fungisitler</h3>
              <p>
                Mantar kaynaklı bitki hastalıklarının tedavisi için...
              </p>
              <Link to="/ürünler/fungisitler">Daha Fazlası</Link>
            </div>
          </div>
        </div>
        <div className="card" >
          <div className="content">

            <div className="content__text">
              <h3>İnsektisitler</h3>
              <p>
                Böcek ve haşerelere karşı olan etkili mücadele için...
              </p>
              <Link to="/ürünler/insektisitler">Daha Fazlası</Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">

            <div className="content__text">
              <h3>Akarisitler</h3>
              <p>
                Akarlar, kırmızı örümcekler ve kene ile mücadele için...
              </p>
              <Link to="/ürünler/akarisitler">Daha Fazlası</Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">

            <div className="content__text">
              <h3>Pestisitler</h3>
              <p>
              Bakteri, virüs ve haşerelerin zararlı etkileri ile mücadele için...
              </p>
              <Link to="/ürünler/haşare-ilaçları">Daha Fazlası</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="hvr_img">
//           <Link to="/ürünler/productA" className="flex_products">
//             <img src={p1} style={{ height: "280px", width: "280px" }}></img>
//             <h5>Zirai İlaçlar</h5>
//           </Link>
//         </div>
//         <div className="hvr_img">
//           <Link to="/ürünler/productA" className="flex_products">
//             <img src={p2} style={{ height: "280px", width: "280px" }}></img>
//             <h5>Gübreler</h5>
//           </Link>
//         </div>
//         <div className="hvr_img">

//           <Link to="/ürünler/productA" className="flex_products">
//             <img src={p3} style={{ height: "280px", width: "280px" }}></img>
//             <h5>Tohumlar</h5>
//           </Link>
//         </div>
//         <div className=" hvr_img">

//           <Link to="/ürünler/productA" className="flex_products">
//             <img src={p4} style={{ height: "280px", width: "280px" }}></img>
//             <h5>Fideler</h5>
//           </Link>
//         </div>
//         <div className=" hvr_img">
//           <Link to="/ürünler/productA" className="flex_products">
//             <img src={p5} style={{ height: "280px", width: "280px" }}></img>
//             <h5>Tarım Aletleri</h5>
//           </Link>
//         </div>
//         <div className=" hvr_img">
//           <Link to="/ürünler/productA" className="flex_products">
//             <img src={p6} style={{ height: "280px", width: "280px" }}></img>
//             <h5>Zeytinyağı</h5>
//           </Link>
//         </div>
