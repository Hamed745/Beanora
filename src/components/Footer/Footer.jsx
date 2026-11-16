import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section pt-5 pb-3 text-white">
      <div className="container">
        <div className="row g-4 mb-4">
          
          {/* العمود الأول: اللوجو والوصف */}
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-flower1 fs-2" style={{ color: "#fbee00" }}></i>
              <h4 className="fw-bold mb-0 text-white">Beanora</h4>
            </div>
            <p className="text-light opacity-75 small">
              Crafting warm coffee experiences with fresh, handpicked beans. 
              Your daily dose of happiness delivered straight to your doorstep.
            </p>
            <div className="d-flex gap-3 social-icons mt-3">
              <a href="#facebook" className="social-link"><i className="bi bi-facebook"></i></a>
              <a href="#instagram" className="social-link"><i className="bi bi-instagram"></i></a>
              <a href="#twitter" className="social-link"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold text-warning mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links mb-0">
              <li><Link to="/">Home</Link></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#products">Popular Brews</a></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* العمود الثالث: خدمة العملاء */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold text-warning mb-3">Customer Support</h6>
            <ul className="list-unstyled footer-links mb-0">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* العمود الرابع: معلومات التواصل */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold text-warning mb-3">Get in Touch</h6>
            <p className="small text-light opacity-75 mb-2">
              <i className="bi bi-geo-alt-fill text-warning me-2"></i> 123 Coffee Street, Brew City
            </p>
            <p className="small text-light opacity-75 mb-2">
              <i className="bi bi-envelope-fill text-warning me-2"></i> support@beanora.com
            </p>
            <p className="small text-light opacity-75">
              <i className="bi bi-telephone-fill text-warning me-2"></i> +1 (234) 567-890
            </p>
          </div>

        </div>

        {/* خط فاصل وحقوق الملكية */}
        <hr className="border-secondary opacity-25" />
        <div className="text-center pt-2">
          <p className="small text-light opacity-50 mb-0">
            &copy; {new Date().getFullYear()} Beanora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;