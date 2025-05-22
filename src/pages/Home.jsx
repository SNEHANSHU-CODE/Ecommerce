import React from 'react';
import "./styles/Home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderData, serviceData, discoutProducts,  } from '../assets/products.jsx';

import ProductCard from '../components/ProductCard.jsx';

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true
  };

  return (
    <div>
      <div className='slider-container'>
        <div className='slider'>
          <Slider {...settings}>
            {SliderData.map(({ title, desc, id, cover }) => (
              <div key={id}>
                <div className='slides'

                >
                  {/* Left side content */}
                  <div className='left-container'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <button
                      className='visit-col'
                    >
                      Visit Collections
                    </button>
                  </div>

                  {/* Right side image */}
                  <div className="right-container">
                    <img
                      src={cover}
                      alt={title}
                      className='slide-img'
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className='service-container m-3'>
        {serviceData.map(({ icon, title, subtitle, bg }, index) => (
          <div key={index} style={{ backgroundColor: bg }} className='service-card m-3 p-3'>
            <div className="text-center service-icon">
              {icon}
            </div>
            <h6 className="text-center fs-5">{title}</h6>
            <p className='text-center fs-6'>{subtitle}</p>
          </div>
        ))}
      </div>
      <div className='discount-container'>
        <h3 className='text-center'>Big Discount</h3>
        <div className='discount-products' >
          {
            discoutProducts.map((item) => {
              return (
                <ProductCard item={item} key={item.id}/>
              )
            })
          }
        </div>
      </div>
      <div className='new-container'>
        <h3 className='text-center'>New Arrivals</h3>
        <div className='new-products' >
          {
            discoutProducts.map((item) => {
              return (
                <ProductCard item={item} key={item.id}/>
              )
            })
          }
        </div>
      </div>
      <div className='best-container'>
        <h3 className='text-center'>Best Sales</h3>
        <div className='best-products' >
          {
            discoutProducts.map((item) => {
              return (
                <ProductCard item={item} key={item.id}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
