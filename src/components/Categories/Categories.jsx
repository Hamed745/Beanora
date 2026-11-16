import React from "react";
import "./Categories.css";

// داتا وهمية للأقسام (تقدر تطلبها بعد كده من API)
const categoriesData = [
  {
    id: 1,
    name: "Espresso",
    time: "10-15 min",
    icon: "bi bi-cup-hot-fill", // أيقونة بوتستراب
  },
  {
    id: 2,
    name: "Cappuccino",
    time: "10-15 min",
    icon: "bi bi-cup-straw",
  },
  {
    id: 3,
    name: "Latte",
    time: "10-15 min",
    icon: "bi bi-cup",
  },
  {
    id: 4,
    name: "Cold Brew",
    time: "15-20 min",
    icon: "bi bi-snow2",
  },
];

function Categories() {
  return (
    <section id="categories" className="py-5 categories-section">
      <div className="container text-center">
        {/* عنوان السكشن */}
        <h2 className="fw-bold mb-4 section-title">Popular Categories</h2>

        {/* كروت الأقسام بـ Bootstrap Grid */}
        <div className="row g-4 justify-content-center">
          {categoriesData.map((category) => (
            <div key={category.id} className="col-6 col-sm-6 col-md-3">
              <div className="category-card p-4 rounded-4 shadow-sm bg-white h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="category-icon-wrapper mb-3">
                  <i className={`${category.icon} category-icon`}></i>
                </div>
                <h5 className="fw-bold text-dark mb-1">{category.name}</h5>
                <small className="text-muted fs-7">{category.time}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;