import React, { useEffect } from 'react';
import "./styles/Home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderData, serviceData, discoutProducts, products } from '../assets/products.jsx';

import ProductCard from '../components/ProductCard.jsx';
import DiscountCard from '../components/DiscountCard.jsx';

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

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const slides = document.querySelectorAll('.slick-slide');
      slides.forEach(slide => {
        if (slide.getAttribute('aria-hidden') === 'true') {
          slide.setAttribute('inert', '');
          slide.removeAttribute('aria-hidden');
        } else {
          slide.removeAttribute('inert');
        }
      });
    });

    const slider = document.querySelector('.slick-slider');
    if (slider) {
      observer.observe(slider, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);


  return (
    <div className='nav-top-margin'>
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
      <div className='service-container p-3'>
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
      <div className='discount-container pt-3'>
        <h3 className='text-center'>Big Discount</h3>
        <div className='discount-products' >
          {
            discoutProducts.map((item) => {
              return (
                <DiscountCard item={item} key={item.id} />
              )
            })
          }
        </div>
      </div>
      <div className='new-container pt-3'>
        <h3 className='text-center'>New Arrivals</h3>
        <div className='new-products' >
          {
            products.filter(item => item.category === "wireless" || item.category === "mobile").map((item) => {
              return (
                <ProductCard item={item} key={item.id} />
              )
            })
          }
        </div>
      </div>
      <div className='best-container pt-3'>
        <h3 className='text-center'>Best Sales</h3>
        <div className='best-products' >
          {
            products && products.filter(item => item.category === "sofa").map((item) => {
              return (
                <ProductCard item={item} key={item.id} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
