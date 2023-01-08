import react from "react";
import "../sass/pages/_products.scss";
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/3.png";
import p4 from "../assets/4.png";
import p5 from "../assets/5.png";
import p6 from "../assets/6.png";
import { Link } from "react-router-dom";

export default function Products() {
  function productDetail() {}
  return (
    <div>
      <div className="product">
        <div className="container">
          <h2>Ürünlerimiz</h2>
        </div>
      </div>
      <div class="parent">
        <div class="div1 mg_2 hvr_img">
          <h3>Böcek İlacı</h3>
          <Link to="/ürünler/productA" className="flex_products">
            <img src={p1} style={{ height: "300px", width: "300px" }}></img>
            <h5>İnsektisit</h5>
          </Link>
        </div>
        <div class="div2 mg_2 hvr_img">
          <h3>Kırmızı Örümcek İlacı</h3>
          <Link to="/ürünler/productA" className="flex_products">
            <img src={p2} style={{ height: "300px", width: "300px" }}></img>
            <h5>Akarisit</h5>
          </Link>
        </div>
        <div class="div3 mg_2 hvr_img">
          {" "}
          <h3>Nematod İlacı</h3>
          <Link to="/ürünler/productA" className="flex_products">
            <img src={p3} style={{ height: "300px", width: "300px" }}></img>
            <h5>Nematisitler</h5>
          </Link>
        </div>
        <div class="div4 hvr_img">
          {" "}
          <h3>FUNGİSİTLER</h3>
          <Link to="/ürünler/productA" className="flex_products">
            <img src={p4} style={{ height: "300px", width: "300px" }}></img>
            <h5>Fungisitler</h5>
          </Link>
        </div>
        <div class="div5 hvr_img">
          <h3>YABANCI OT İLAÇLARI</h3>
          <Link to="/ürünler/productA" className="flex_products">
            <img src={p5} style={{ height: "300px", width: "300px" }}></img>
            <h5>Herbisitler</h5>
          </Link>{" "}
        </div>
        <div class="div6 hvr_img">
          <h3>SALYANGOZ İLACI</h3>
          <Link to="/ürünler/productA" className="flex_products">
            <img src={p6} style={{ height: "300px", width: "300px" }}></img>
            <h5>Mollussisit</h5>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
