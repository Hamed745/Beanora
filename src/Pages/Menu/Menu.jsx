import React, { useState } from "react";
import { useCart } from "../../components/context/CartContext";
import "./Menu.css";

const menuItemsData = [
  // القهوة الساخنة
  {
    id: 101,
    title: "Classic Espresso",
    category: "Coffee",
    price: 3.5,
    description: "Rich, bold, and intense double shot of authentic espresso.",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600",
  },
  {
    id: 102,
    title: "Caramel Macchiato",
    category: "Coffee",
    price: 4.8,
    description: "Espresso with steamed milk, vanilla syrup, and caramel drizzle.",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600",
  },
  {
    id: 103,
    title: "Spanish Latte",
    category: "Coffee",
    price: 5.0,
    description: "Espresso blended with condensed milk and textured steamed milk.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600",
  },
  {
    id: 104,
    title: "Cappuccino Special",
    category: "Coffee",
    price: 4.5,
    description: "Equal parts espresso, steamed milk, and velvety foam with cocoa dusting.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600",
  },

  // المشروبات الباردة
  {
    id: 201,
    title: "Iced Spanish Latte",
    category: "Cold Drinks",
    price: 5.25,
    description: "Chilled espresso, sweet condensed milk, and fresh whole milk over ice.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600",
  },
  {
    id: 202,
    title: "Cold Brew Vanilla",
    category: "Cold Drinks",
    price: 4.9,
    description: "Slow-steeped cold brew served with sweet cream and vanilla syrup.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=600",
  },
  {
    id: 203,
    title: "Iced Mocha Frappe",
    category: "Cold Drinks",
    price: 5.5,
    description: "Blended ice, espresso, Belgian chocolate sauce, and whipped cream.",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=600",
  },

  // الحلويات والمخبوزات
  {
    id: 301,
    title: "Butter Croissant",
    category: "Desserts",
    price: 3.25,
    description: "Freshly baked, flaky french croissant made with pure butter.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600",
  },
  {
    id: 302,
    title: "Chocolate Donut",
    category: "Desserts",
    price: 2.75,
    description: "Soft glazed donut topped with rich dark chocolate drizzle.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600",
  },
  {
    id: 303,
    title: "Cheesecake Slice",
    category: "Desserts",
    price: 4.5,
    description: "Classic New York cheesecake with a buttery graham cracker crust.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600",
  },
];

const categories = ["All", "Coffee", "Cold Drinks", "Desserts"];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  // فلترة المنتجات بناءً على التصنيف + كلمة البحث
  const filteredItems = menuItemsData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="menu-page py-5">
      <div className="container py-3">
        {/* Header Section */}
        <div className="text-center mb-4">
          <span className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill mb-2">
            Our Delicious Selection
          </span>
          <h1 className="display-5 fw-bold menu-title">Explore Our Menu</h1>
          <p className="text-muted col-md-6 mx-auto">
            From handcrafted espresso to freshly baked treats, find your perfect blend today.
          </p>
        </div>

        {/* Search Bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-6">
            <div className="input-group shadow-sm rounded-pill overflow-hidden bg-white p-1 border">
              <span className="input-group-text bg-white border-0 ps-3">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search for coffee, cold drinks, desserts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="btn btn-link text-muted border-0 pe-3 text-decoration-none"
                  onClick={() => setSearchTerm("")}
                >
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn menu-filter-btn rounded-pill px-4 py-2 ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="row g-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-lg-4">
                <div className="card menu-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="menu-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img-top menu-img"
                    />
                    <span className="badge menu-cat-badge">{item.category}</span>
                  </div>

                  <div className="card-body d-flex flex-column justify-content-between p-4">
                    <div>
                      <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                      <p className="text-muted small mb-3">{item.description}</p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                      <span className="fw-bold fs-5 text-coffee">
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        className="btn btn-add-menu rounded-pill px-3 py-1 fw-bold"
                        onClick={() => addToCart(item)}
                      >
                        <i className="bi bi-cart-plus me-1"></i> Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-emoji-frown fs-1 text-muted d-block mb-2"></i>
              <h5 className="text-muted">No items found matching "{searchTerm}"</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;