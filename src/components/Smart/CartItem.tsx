import React from 'react';
import { useDispatch } from 'react-redux';
import { ICard as CartItemType } from '../../models/ICard';
import { addToCart, minusToCart, removeFromCart } from '../../store/reducers/cart/action-creator';

type CartItemProps = {
  id: string;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addToCart({ id,} as CartItemType, count),
    );
  };
  const removeHandler = (id: string) => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
		dispatch(removeFromCart(id))
    }
	}

	const minusCart = (id: string) => {
		dispatch(minusToCart(id))
	}
  return (

    <div key={`cart item ${title}`} 
    className='cart-items'>
    <div className='cart-img'>
    <img
      src={imageUrl}
      alt={title}
    />
                </div>
      <div className='cart-title'>
        <h1>{title}</h1>
      </div>
      <div className='cart-count'>
        <button disabled={count === 1} onClick={() => minusCart(id)} >
          <svg
           fill="#ff5100" 
          height="26" 
          viewBox="0 0 26 26" 
          width="26" 
          xmlns="http://www.w3.org/2000/svg"
          >
            <path 
            d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" 
            stroke="#ffff" 
            strokeLinecap="round" 
            strokeMiterlimit="10" 
            strokeWidth="2"/>
            <path
            d="M9.2 13H16.8" 
            stroke="#ffff" 
            strokeLinecap="round" 
            strokeMiterlimit="10" 
            strokeWidth="2"/>
        </svg>
        </button>
          <b>{count}</b>
        <button  onClick={onClickPlus} >
          <svg 
           fill="#ff5100"
          height="26" 
          viewBox="0 0 26 26" 
          width="26" 
          xmlns="http://www.w3.org/2000/svg"
          >
            <path
            d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" 
            stroke="#ffff" 
            strokeLinecap="round" 
            strokeMiterlimit="10" 
            strokeWidth="2"/>
            <path 
            d="M9.20001 13H16.8" 
            stroke="#ffff" 
            strokeLinecap="round" 
            strokeMiterlimit="10" 
            strokeWidth="2"/>
            <path 
            d="M13 8.5V17.5" 
            stroke="#ffff" 
            strokeLinecap="round" 
            strokeMiterlimit="10" 
            strokeWidth="2"/>
          </svg>
        </button>
      </div>
      <div className='cart-price'>{price * count} ₽</div>
      <div className='cart-close'>
      <button
        onClick={() => removeHandler(id)}
      >
        <svg 
        width="28" 
        height="28" 
        viewBox="0 0 48 48" 
        fill="#000000" 
        xmlns="http://www.w3.org/2000/svg"
        >
          <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" 
          fill="#000000"/>
          <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M16.2218 31.7782C15.8312 31.3876 15.8312 30.7545 16.2218 30.3639L30.3639 16.2218C30.7544 15.8313 31.3876 15.8313 31.7781 16.2218C32.1686 16.6123 32.1686 17.2455 31.7781 17.636L17.636 31.7782C17.2454 32.1687 16.6123 32.1687 16.2218 31.7782Z" 
          fill="#000000"/>
          <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M16.2218 16.2218C16.6124 15.8313 17.2455 15.8313 17.6361 16.2218L31.7782 30.364C32.1687 30.7545 32.1687 31.3876 31.7782 31.7782C31.3877 32.1687 30.7545 32.1687 30.364 31.7782L16.2218 17.636C15.8313 17.2455 15.8313 16.6123 16.2218 16.2218Z" 
          fill="#000000"/>
      </svg>
      </button>
      </div>
    </div>
  );
};
