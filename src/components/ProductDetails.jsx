import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../assets/products';
import { FaStar, FaPlus } from 'react-icons/fa';
import "./styles/ProductDetails.css";
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../pages/slice/cartSlice';
import { useToast } from './ToastContext';
import { Navigate } from "react-router-dom";



export default function ProductDetails() {
  const dispatch = useDispatch();
  const { triggerToast } = useToast();


  const { id } = useParams();
  const product = products.find(item => item.id === id);

  const relatedProducts = products.filter(
    p => p?.category === product?.category && p.id !== product?.id
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    triggerToast();
  };

  if (!product) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="container-fluid px-4 nav-top-margin">
      {/* Banner */}
      <div className="bg-light py-4 mb-4 text-center banner">
        <h2 className="fw-bold">{product.productName}</h2>
      </div>

      {/* Product Main Section */}
      <div className="row gy-4 align-items-start">
        {/* Product Image */}
        <div className="col-lg-6 text-center">
          <img src={product.imgUrl} alt={product.productName} className="img-fluid rounded shadow-sm" style={{ maxHeight: "400px", objectFit: "contain" }} />
        </div>

        {/* Product Details */}
        <div className="col-lg-6">
          <h3>{product.productName}</h3>
          <div className="d-flex align-items-center mb-2">
            <div className="text-warning me-2">
              {[...Array(5)].map((_, idx) => <FaStar key={idx} />)}
            </div>
            <span className="text-muted">({product.avgRating} ratings)</span>
          </div>
          <h4 className="text-primary">${product.price}</h4>
          <p className="text-muted">category: <strong>{product.category}</strong></p>
          <p>{product.shortDesc}</p>
          <button className="btn px-4 mt-3" style={{ backgroundColor: "#29609b", color: "white" }} onClick={handleAddToCart} type='button'>Add To Cart</button>
        </div>
      </div>

      {/* Description + Reviews Tabs */}
      <div className="mt-5">
        <ul className="nav nav-tabs" id="productTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description"
              type="button"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              Reviews (2)
            </button>
          </li>
        </ul>
        <div className="tab-content p-3 border border-top-0" id="productTabContent">
          <div
            className="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <p className="text-muted">{product.description}</p>
          </div>
          <div
            className="tab-pane fade"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <div className="mb-4">
              <h6 className="fw-bold">John Doe</h6>
              <div className="text-warning mb-2">
                {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
              </div>
              <p className="text-muted">Great quality and comfortable. Loved the fabric and delivery was on time!</p>
            </div>
            <div className="mb-4">
              <h6 className="fw-bold">Jane Smith</h6>
              <div className="text-warning mb-2">
                {[...Array(4)].map((_, i) => <FaStar key={i} size={14} />)}<FaStar className="text-secondary" size={14} />
              </div>
              <p className="text-muted">Nice product, but the color was a bit different than shown.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Related Products */}
      <div className="mt-5">
        <h5 className="mb-4">You might also like</h5>
        <div className="row related-product">
          {relatedProducts.map(item => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

