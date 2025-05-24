import React from "react";
import { Link } from "react-router-dom";
import { FaSadTear } from "react-icons/fa"; // Optional: for additional styling

export default function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-center">
      <div className="p-4">
        <FaSadTear size={80} className="text-danger mb-3" />
        <h1 className="display-4 fw-bold text-dark">404</h1>
        <h2 className="mb-3 text-secondary">Page Not Found</h2>
        <p className="text-muted mb-4">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-dark px-4 py-2 rounded-pill">
          Go Home
        </Link>
      </div>
    </div>
  );
}

