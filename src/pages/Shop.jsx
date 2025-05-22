import React from 'react'
import { products } from '../assets/products';
import "./styles/Shop.css";
import ProductCard from '../components/ProductCard';

export default function Shop() {
  return (
    <div>
      <div className='product'>
        {
          products.map((item)=>{
            return(
              <ProductCard item={item} key={item.id}/>
            )
          })
        }
      </div>
    </div>
  )
}
