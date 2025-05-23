import React from 'react';
import { FaStar, FaPlus } from 'react-icons/fa';
import "./styles/ProductCard.css";
import { addToCart } from '../pages/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ProductCard({ item }) {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    
      <div className="card p-3 m-3 shadow-sm rounded" style={{ width: '18rem' }}>
        <Link to={`/shop/${item.id}`} className='link-style'>
          <img src={item.imgUrl} className="card-img-top card-img" alt={item.productName} />
        </Link>
        <div className="card-body">
        <Link to={`/shop/${item.id}`} className='link-style'>
          <h6 className="card-title">{item.productName}</h6>
        </Link>
          {/* Stars */}
          <div className="text-warning mb-2">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          {/* Price and Add Icon */}
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">${item.price}</h5>
            <button onClick={handleAddToCart} className="add-to-cart">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
  );
}

