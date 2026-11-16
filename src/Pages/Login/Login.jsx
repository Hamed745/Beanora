import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); //user logged in, navigate to home

  const handleSubmit = (e) => {
    e.preventDefault();

    // here you can add your login logic,
    console.log("Logged in user:", formData.email);

    // After successful login, navigate to the home page
    navigate("/");
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card login-card border-0 shadow-lg p-4 rounded-4">
              <div className="text-center mb-4">
                <i className="bi bi-flower1 fs-1 text-warning"></i>
                <h3 className="fw-bold text-dark mt-2">Welcome Back</h3>
                <p className="text-muted small">Sign in to your Beanora account</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">Email Address</label>
                  <input
                    type="email"
                    className="form-control rounded-3 py-2"
                    placeholder="name@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-3 py-2"
                    placeholder="••••••••"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-login w-100 rounded-pill py-2 fw-bold mt-3">
                  Sign In
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted small mb-0">
                  Don't have an account?{" "}
                  <Link to="/contact" className="text-warning fw-bold text-decoration-none">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;