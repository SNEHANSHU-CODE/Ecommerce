import React, { useState } from 'react'
import { products } from '../assets/products';
import "./styles/Shop.css";
import ProductCard from '../components/ProductCard';
import { FaSearch } from 'react-icons/fa';

export default function Shop() {
  const [catagory, setCatagory] = useState("sofa");

  const handleCatagory = (e) => {
    e.preventDefault();
    const selectedCategory = e.target.dataset.category;
    setCatagory(selectedCategory);
  };


  return (
    <div>
      <div className='banner'>
        <h3 className='px-1'>Product</h3>
      </div>
      <div className="container my-4">
        <div className="row justify-content-center align-items-center">

          <div className="col-auto">
            <div className="dropdown">
              <button className="btn btn-primary rounded-3 px-4 d-flex align-items-center gap-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter By Category
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={handleCatagory} data-category="sofa">Sofa</a></li>
                <li><a className="dropdown-item" href="#" onClick={handleCatagory} data-category="chair">Chair</a></li>
                <li><a className="dropdown-item" href="#" onClick={handleCatagory} data-category="watch">Watch</a></li>
                <li><a className="dropdown-item" href="#" onClick={handleCatagory} data-category="mobile">Mobile</a></li>
                <li><a className="dropdown-item" href="#" onClick={handleCatagory} data-category="wireless">Wireless</a></li>
              </ul>

            </div>
          </div>

          <div className="col">
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded-pill px-4 py-2 border-0"
                placeholder="Search..."
                style={{ backgroundColor: "#f2f2f2" }}
              />
              <FaSearch className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" />
            </div>
          </div>
        </div>
      </div>

      <div className='product'>
        {
          products.filter(item => item.category === catagory).map((item) => {
            return (
              <ProductCard item={item} key={item.id} />
            )
          })
        }
      </div>
    </div>
  )
}
