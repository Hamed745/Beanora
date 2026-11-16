import React from "react";
import "./Offer.css";

function Offer() {
  return (
    <section className="py-5 offer-section">
      <div className="container">
        <div className="offer-banner p-4 p-md-5 rounded-5 text-white position-relative overflow-hidden shadow-lg">
          <div className="row align-items-center position-relative z-2">
            
            <div className="col-12 col-md-8 text-center text-md-start mb-4 mb-md-0">
              <span className="badge bg-warning text-dark fw-bold mb-3 px-3 py-2 rounded-pill fs-6">
                Special Offer 
              </span>
              <h2 className="display-5 fw-bold mb-3">
                Get <span className="text-warning">20% OFF</span> On Your First Order!
              </h2>
              <p className="lead mb-0 text-light opacity-75">
                Use code <span className="fw-bold text-white bg-dark bg-opacity-50 px-2 py-1 rounded border border-warning">BEANORA20</span> at checkout.
              </p>
            </div>

            <div className="col-12 col-md-4 text-center text-md-end">
              <button className="btn btn-warning btn-lg rounded-pill px-4 fw-bold shadow-sm btn-offer">
                Claim Offer <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>

          </div>

          {/* دوائر ديكورية لخلفية السكشن */}
          <div className="offer-circle circle-1"></div>
          <div className="offer-circle circle-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Offer;