import React from "react";
import "./Features.css";

const featuresData = [
  {
    id: 1,
    icon: "bi bi-truck",
    title: "Fast Delivery",
    description: "Hot & fresh coffee delivered to your doorstep in 30 minutes.",
  },
  {
    id: 2,
    icon: "bi bi-award",
    title: "Premium Quality",
    description: "100% handpicked organic coffee beans from top farms.",
  },
  {
    id: 3,
    icon: "bi bi-shield-check",
    title: "Secure Payment",
    description: "Safe, encrypted and seamless online checkout experience.",
  },
  {
    id: 4,
    icon: "bi bi-cup-hot",
    title: "Freshly Roasted",
    description: "Roasted daily in small batches to guarantee rich aroma.",
  },
];

function Features() {
  return (
    <section className="py-5 features-section">
      <div className="container py-4">
        
        {/* عنوان السكشن */}
        <div className="text-center mb-5">
          <h2 className="fw-bold section-title">Why Choose Beanora?</h2>
          <p className="text-muted">We deliver more than just coffee, we deliver an experience.</p>
        </div>

        {/* عرض المميزات بـ Bootstrap Grid */}
        <div className="row g-4">
          {featuresData.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-3">
              <div className="feature-card p-4 rounded-4 text-center h-100 bg-white shadow-sm border-0">
                <div className="feature-icon-box mx-auto mb-3">
                  <i className={`${item.icon} fs-2 text-coffee`}></i>
                </div>
                <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                <p className="text-muted small mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;