import { FaStar, FaPlus } from 'react-icons/fa';
import "./styles/DiscountCard.css";
import { addToCart } from '../pages/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useToast } from './ToastContext';

export default function DiscountCard({ item }) {
    
      const dispatch = useDispatch();
      const { triggerToast } = useToast();
    
      const handleAddToCart = () => {
        dispatch(addToCart(item));
        triggerToast();
      };
    
  return (
    <div className="card p-3 m-3 shadow-sm rounded position-relative" style={{ width: '18rem' }}>
  {/* Discount Badge */}
  <span
    className="badge position-absolute top-0 start-0 m-2 px-2 py-1"
    style={{ backgroundColor: "#29609b", borderRadius: "1.5rem", fontSize: "0.9rem"}}
  >
    {item.discount}% Off
  </span>

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

  )
}
