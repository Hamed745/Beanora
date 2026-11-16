import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./Navbar.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { totalItems } = useCart(); // جلب عدد المنتجات

  return (
    /* تم تغيير sticky-top إلى fixed-top ليبقى الناف بار ثابتاً أثناء السكرول */
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow-sm py-3">
      <div className="container">
        {/* اللوجو */}
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold text-dark" to="/">
          <i className="bi bi-flower1 fs-3 text-warning"></i>
          <span>Beanora</span>
        </Link>

        {/* زر الهامبرجر للموبايل */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsNavOpen((prev) => !prev)}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* القائمة والروابط */}
        <div className={`navbar-collapse ${isNavOpen ? "show" : "collapse"}`} id="navbarNav">
          {/* تم إضافة gap-4 و gap-lg-5 لإبعاد العناصر عن بعضها */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold gap-3 gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/menu" onClick={() => setIsNavOpen(false)}>Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about" onClick={() => setIsNavOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/login" onClick={() => setIsNavOpen(false)}>Login</Link>
            </li>
          </ul>

          {/* أيقونة السلة الحقيقية (bi-cart3) مع الـ Badge */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/cart" className="btn btn-outline-dark rounded-circle position-relative p-2">
              <i className="bi bi-cart3 fs-5"></i>
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;