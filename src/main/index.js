import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
function MainPage() {
  const [products, setproducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://ecdb77d7-e978-4dcc-ac23-1a5386ee19a3.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setproducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 :", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>판매중인 상품들</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link
                style={{ color: "inherit" }}
                className="product-link"
                to={`/products/${product.id}`}
              >
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
