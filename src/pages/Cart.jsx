import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { increaseQuantity, decreaseQuantity, removeFromCart } from './slice/cartSlice';

export default function Cart() {
  const { cartItems, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container nav-top-margin">
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-5 bg-white shadow-sm rounded">
              <h5>Your cart is empty 🛒</h5>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="d-flex justify-content-between align-items-center bg-white p-3 mb-3 shadow-sm rounded">
                <div className="d-flex align-items-center gap-3">
                  <img src={item.imgUrl} alt={item.productName} style={{ width: 100, height: 80, objectFit: "cover" }} />
                  <div>
                    <h6 className="mb-1">{item.productName}</h6>
                    <p className="mb-0 text-muted">${item.price.toFixed(2)} x {item.quantity}</p>
                    <p className="mb-0 fw-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-light border" onClick={() => dispatch(increaseQuantity(item.id))}><FaPlus /></button>
                  <button className="btn btn-light border" onClick={() => dispatch(decreaseQuantity(item.id))}><FaMinus /></button>
                  <button className="btn btn-link text-danger fs-4" onClick={() => dispatch(removeFromCart(item.id))}><FaTimes /></button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        <div className="col-lg-4">
          {cartItems.length > 0 && (
            <div className="p-3 bg-white shadow-sm rounded">
              <h6 className="border-bottom pb-2 mb-2">Cart Summary</h6>
              <p className="d-flex justify-content-between">
                <span>Total Price:</span>
                <span className="fw-bold text-primary">${totalAmount.toFixed(2)}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
