import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AddToCartMessage = ({ show, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (show) {
      setProgress(100);
      const duration = 2000;
      const interval = 50;
      const decrement = (100 / (duration / interval));

      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev <= 0) {
            clearInterval(timer);
            // 🔁 DEFER setShowToast via onClose AFTER render
            setTimeout(() => {
              onClose();
            }, 0);
            return 0;
          }
          return prev - decrement;
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999, minWidth: '300px' }}>
      <div className="toast show align-items-center border-0 shadow-sm" role="alert" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="d-flex justify-content-between align-items-center p-2 pt-2">
          <div className="d-flex align-items-center">
            <FaCheckCircle className="me-2" size={18} style={{ color: '#199B24' }} />
            <strong>Product has been added to cart!</strong>
          </div>
          <button
            type="button"
            className="btn-close ms-2"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="progress mt-2" style={{ height: '4px', backgroundColor: 'transparent' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${progress}%`,
              backgroundColor: '#199B24',
              transition: 'width 50ms linear',
            }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartMessage;

