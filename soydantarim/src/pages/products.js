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
  function productDetail() {}
  return (
    <div>
      <div className="product">
        <div className="containerHeader">
          <h2><span>Ürün</span>lerimiz</h2>
        </div>
      </div>
        <div className="containerCard">
          <div className="card" >
            <div className="content">
              
              <div className="content__text">
                <h3>Designing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, dolor.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="card" >
            <div className="content">
              
              <div className="content__text">
                <h3>Development</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Libero, aperiam!
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              
              <div className="content__text">
                <h3>Maintenance</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit, itaque!
                </p>
                <a href="#">Read More</a>
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
