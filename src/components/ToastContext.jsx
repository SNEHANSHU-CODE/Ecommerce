import { createContext, useContext, useState } from 'react';
import AddToCartMessage from './AddToCartMessage';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <ToastContext.Provider value={{ triggerToast }}>
      {children}
      <AddToCartMessage show={showToast} onClose={closeToast} />
    </ToastContext.Provider>
  );
};

