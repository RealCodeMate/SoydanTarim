import react from "react";
import "../sass/pages/_products.scss";
import p1 from "../assets/1.png";
import { Link } from "react-router-dom";


export default function Products(){
  function productDetail () {

  }
    return(
        <div>
            <div className="product">
                <div className="container">
                    <h2>Ürünlerimiz</h2>
                </div>
                <div class="section">
  <div class="container">
    <div class="grid-row">
      <div class="grid-item">
        <span>
          <h3>First Heading</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </span>
        <img src="https://www.kareseniors.com.au/wp-content/uploads/2021/08/About-Us.jpg" />
      </div>
      <div class="grid-item">
        <span>
          <h3>Second Heading</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </span>
        <img src="https://www.kareseniors.com.au/wp-content/uploads/2021/08/About-Us.jpg" />
      </div>
      <div class="grid-item">
        <span>
          <h3>Third Heading</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </span> <img src="https://www.kareseniors.com.au/wp-content/uploads/2021/08/About-Us.jpg" />
      </div>
      <div class="grid-item">
        <span>
          <h3>Fourth Heading</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </span> <img src="https://www.kareseniors.com.au/wp-content/uploads/2021/08/About-Us.jpg" />
      </div>
      <div class="grid-item">
        <span>
          <h3>Fifth Heading</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </span> <img src="https://www.kareseniors.com.au/wp-content/uploads/2021/08/About-Us.jpg" />
      </div>
      <div class="grid-item">
        <span>
          <h3>Sixth Heading</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </span> <img src="https://www.kareseniors.com.au/wp-content/uploads/2021/08/About-Us.jpg" />
      </div>

    </div>
  </div>
</div>
                {/* <div className="container__products__1">
                <h3>Bitki Koruma Ürünleri</h3>
                  <div className="container__products__1__img">
                    <h3>Böcek İlacı</h3>
                  <Link to="/ürünler/productA">
                  <img src={p1}></img>
                  </Link>
                    
                  <Link to="/ürünler/productB">
                  <img src={p1}></img>
                  </Link>
                  <Link to="/ürünler/productC">
                  <img src={p1}></img>
                  </Link>
                  <Link to="/ürünler/productD">
                  <img src={p1}></img>
                  </Link>
                  <Link to="/ürünler/productE">
                  <img src={p1}></img>
                  </Link>
                  <Link to="/ürünler/productF">
                  <img src={p1}></img>
                  </Link>
                  </div>
                  
                </div> */}
            </div>
        </div>
    )
}