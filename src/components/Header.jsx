import React, { useState } from 'react';
import { FaShoppingBag, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { totalProduct } from '../pages/slice/cartSlice';
import { useSelector } from 'react-redux';

export default function Header() {
    const total = useSelector(totalProduct);
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const closeNavbar = () => {
        setIsNavOpen(false);
    };
    
    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="w-100 navbar navbar-expand-lg bg-white shadow-sm py-4 position-fixed z-3">
            <div className="container">
                {/* Logo */}
                <Link 
                    className="navbar-brand fw-bold d-flex align-items-center gap-2" 
                    to="/" 
                    onClick={closeNavbar}
                >
                    <FaShoppingBag />
                    MART
                </Link>

                {/* Toggle for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isNavOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div 
                    className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} 
                    id="navbarNav"
                >
                    <ul className="navbar-nav align-items-center d-flex gap-4">
                        <li className="nav-item">
                            <Link 
                                className="nav-link fw-medium text-dark" 
                                to="/" 
                                onClick={closeNavbar}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link fw-medium text-dark" 
                                to="/shop" 
                                onClick={closeNavbar}
                            >
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link fw-medium text-dark" 
                                to="/cart" 
                                onClick={closeNavbar}
                            >
                                Cart
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark disabled" to="#" onClick={(e) => e.preventDefault()}>
                                <FaUser />
                            </Link>
                        </li>
                        <li className="nav-item position-relative">
                            <Link 
                                className="nav-link text-dark" 
                                to="/cart" 
                                onClick={closeNavbar}
                            >
                                <FaShoppingCart />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                    {total}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
