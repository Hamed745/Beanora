import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/coffee/hot")
      .then((response) => {
        setProducts(response.data.slice(0, 8));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching coffee data:", err);
        setError("Failed to load products, please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <section id="products" className="py-5 products-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold section-title">Popular Brews</h2>
          <p className="text-muted">Handcrafted coffee made with fresh roasted beans</p>
        </div>

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-coffee" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger text-center w-50 mx-auto" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="row g-4">
            {products.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-lg-3">
                <div className="card product-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="product-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img-top product-img"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400";
                      }}
                    />
                  </div>

                  <div className="card-body d-flex flex-column justify-content-between p-3">
                    <div>
                      <h5 className="card-title fw-bold text-dark">{item.title}</h5>
                      <p className="card-text text-muted small product-desc">
                        {item.description}
                      </p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-3 pt-2 border-top">
                      <span className="fw-bold fs-5 text-coffee">$4.50</span>
                      <button
                        className="btn btn-add-cart rounded-circle"
                        onClick={() => addToCart({ ...item, price: 4.5 })}
                        title="Add to Cart"
                      >
                        <i className="bi bi-plus-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;