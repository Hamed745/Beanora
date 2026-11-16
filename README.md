[🌐 Live Demo — Visit Beanora](https://beanora-dqr7.vercel.app/)

_____________________________________________________________________

# Beanora - Premium Coffee Shop & E-Commerce Web Application
_____________________________________________________________________

Beanora is a fully responsive, modern web application designed for a luxury coffee shop. Developed as a final graduation project, it showcases a complete e-commerce flow—from browsing an interactive menu to managing a real-time shopping cart and navigating seamlessly through client-side routing.
_____________________________________________________________________

## Key Features & Highlights
_____________________________________________________________________

* Modern & Aesthetic UI: Clean, warm aesthetic crafted with custom CSS and Bootstrap 5 to deliver a cozy coffee-house vibe.
* Fully Responsive Layout: Mobile-first architecture with custom collapsible navigation (Hamburger Menu).
* Dynamic Shopping Cart: Real-time state management using React Context API (CartContext) for adding, updating, and removing items.
* Interactive User Experience: Simulated authentication flow redirecting users smoothly across pages.
* Fixed Navigation Bar: Sticky header ensuring smooth scrolling without layout shifts.
* Single Page Application (SPA): Ultra-fast page transitions using react-router-dom.

____________________________________________________________________

## Tech Stack & Dependencies
____________________________________________________________________

| Category | Technology Used |
| :--- | :--- |
| Frontend Framework | React.js (Vite) |
| UI & Styling | Bootstrap 5, Custom CSS3, Bootstrap Icons |
| State Management | React Context API |
| Routing | React Router DOM v6 |
| Deployment | Vercel (Production deployment with SPA redirects) |

___________________________________________________________________

## Project Architecture
___________________________________________________________________

```text
Beanora/
├── public/              # Static assets and favicon
├── src/
│   ├── assets/          # Images, banners, and logos
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── context/         # React Context for global state (CartContext)
│   ├── Pages/           # Application views (Home, Menu, About, Contact, Login, Cart)
│   ├── App.jsx          # Central route configuration
│   └── main.jsx         # Application entry point & Bootstrap imports
├── vercel.json          # SPA Rewrite rules for Vercel deployment
├── package.json         # Project dependencies and build scripts
└── README.md            # Project documentation