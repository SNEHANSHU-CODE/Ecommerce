import React from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#0d3b66' }} className="text-white pt-5 pb-4">
            <div className="container text-md-left">
                <div className="row text-md-left">

                    {/* Logo and Description */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold">
                            <FaShoppingBag className="me-2" /> Mart
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris.
                        </p>
                    </div>

                    {/* About Us */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold">About Us</h5>
                        <p><Link href="#" className="text-white text-decoration-none">Careers</Link></p>
                        <p><Link href="#" className="text-white text-decoration-none">Our Stores</Link></p>
                        <p><Link href="#" className="text-white text-decoration-none">Our Cares</Link></p>
                        <p><Link href="#" className="text-white text-decoration-none">Terms & Conditions</Link></p>
                        <p><Link href="#" className="text-white text-decoration-none">Privacy Policy</Link></p>
                    </div>

                    {/* Customer Care */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold">Customer Care</h5>
                        <p><Link href="#" className="text-white text-decoration-none">Help Center</Link></p>
                        <p><Link href="#" className="text-white text-decoration-none">How to Buy</Link></p>
                        <p><Link href="#" className="text-white text-decoration-none">Track Your Order</Link></p>
                        <p><Link href="#" className="text-white text-decoration-none">Corporate & Bulk Purchasing</Link></p>
                        <p><Link href="#" className="text-white text-decoration-none">Returns & Refunds</Link></p>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold">Contact Us</h5>
                        <p>70 Washington Square<br />South, New York, NY 10012, USA</p>
                        <p>Email: <a href="mailto:example@gmail.com" className="text-white text-decoration-none">example@gmail.com</a></p>
                        <p>Phone: +1 1123 456 780</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}
