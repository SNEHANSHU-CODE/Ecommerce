import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../assets/products';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(item => item.id === id);

  if (!product) {
    return <div className="text-center py-5">Product not found</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imgUrl} alt={product.productName} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.productName}</h2>
          <p className="text-muted">${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
