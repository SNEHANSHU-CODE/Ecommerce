Folder Stucture:-
src/
│
├── app/
│   └── store.js                 # Redux store setup
│
├── features/
│   ├── cart/                    # Cart slice
│   │   ├── cartSlice.js
│   │   └── Cart.jsx
│   ├── products/                # Products slice
│   │   ├── productsSlice.js
│   │   ├── ProductsList.jsx
│   │   └── ProductDetails.jsx
│   └── user/                    # User/auth slice
│       ├── userSlice.js
│       └── Login.jsx
│
├── components/                 # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
│
├── pages/                      # Page-level components
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── NotFound.jsx
│
├── routes/
│   └── AppRouter.jsx           # All Routes using React Router
│
├── utils/
│   └── helpers.js              # Utility functions (formatting, etc.)
│
├── services/
│   └── api.js                  # Centralized API handlers (e.g., axios)
│
├── assets/
│   ├── images/
│   └── styles/
│       └── global.css
│
├── App.jsx                     # Layout wrapper (with header/footer)
├── index.js                    # Entry point
└── main.jsx or index.jsx       # React 18 createRoot + Bootstrap/CSS import


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
