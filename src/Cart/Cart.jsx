import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  const shippingFee = cart.length > 0 ? 2.50 : 0;
  const finalTotal = totalPrice + shippingFee;

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center my-5">
        <i className="bi bi-cart-x display-1 text-muted"></i>
        <h3 className="fw-bold my-3 text-dark">Your Cart is Empty</h3>
        <p className="text-muted mb-4">Looks like you haven't added any coffee to your cart yet.</p>
        <Link to="/" className="btn btn-coffee btn-lg rounded-pill px-4">
          Explore Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page py-5">
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold section-title mb-0">Shopping Cart 🛒</h2>
          <button className="btn btn-outline-danger btn-sm rounded-pill" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-3">
              {cart.map((item) => (
                <div key={item.id} className="row align-items-center py-3 border-bottom g-3">
                  <div className="col-3 col-sm-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid rounded-3 cart-item-img"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400";
                      }}
                    />
                  </div>

                  <div className="col-9 col-sm-4">
                    <h6 className="fw-bold text-dark mb-1">{item.title}</h6>
                    <small className="text-coffee fw-bold">${item.price.toFixed(2)}</small>
                  </div>

                  <div className="col-6 col-sm-3 d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-outline-secondary rounded-circle qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="fw-bold px-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary rounded-circle qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="col-4 col-sm-2 text-end">
                    <span className="fw-bold text-dark">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="col-2 col-sm-1 text-end">
                    <button
                      className="btn btn-link text-danger p-0"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="bi bi-trash fs-5"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 summary-card">
              <h5 className="fw-bold text-dark mb-4">Order Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span className="fw-bold">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Delivery Fee</span>
                <span className="fw-bold">${shippingFee.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4 fs-5">
                <span className="fw-bold text-dark">Total</span>
                <span className="fw-bold text-coffee">${finalTotal.toFixed(2)}</span>
              </div>

              <button className="btn btn-coffee w-100 btn-lg rounded-pill py-2 shadow-sm">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;