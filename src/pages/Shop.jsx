import React, { useState } from 'react'
import { products } from '../assets/products';
import "./styles/Shop.css";
import ProductCard from '../components/ProductCard';
import { FaSearch } from 'react-icons/fa';

export default function Shop() {
  const [catagory, setCatagory] = useState("sofa");
  const [input, setInput] = useState("");

  const handleCatagory = (e) => {
    setInput("");
    e.preventDefault();
    const selectedCategory = e.target.dataset.category;
    setCatagory(selectedCategory);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className='nav-top-margin'>
      <div className='banner'>
        <h3 className='fw-bold'>Product</h3>
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

          <div className="col d-flex justify-content-center">
            <div className="input-group" style={{ maxWidth: "600px" }}>
              <input
                type="text"
                className="form-control rounded-pill px-4 py-2 border-0"
                placeholder="Search..."
                style={{ backgroundColor: "#f2f2f2" }}
                value={input}
                onChange={handleChange}
              />
              <FaSearch className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" />
            </div>
          </div>
        </div>
      </div>

     <div className='product'>
  {products
    .filter(item => {
      const matchesSearch = new RegExp(input, 'i').test(item.productName);
      const matchesCategory = item.category === catagory;
      return input ? matchesSearch : matchesCategory;
    })
    .map(item => (
      <ProductCard item={item} key={item.id} />
    ))}
</div>


    </div>
  )
}
