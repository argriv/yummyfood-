import React from 'react';
import '../../style/components/Simple/CartButton.css'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

type countProps = {
  count:number;
  total:number
}

const CartButton: React.FC <countProps> = ({count, total}: countProps) => {
      return (
        <Link to="/cart" >
          {count
              ?
              <div className='cart'>
                  <div className='cart-info'>{total} ₽</div>
                  <div className='cart-count'><ShoppingCartOutlined/>{count}</div>
              </div>
              :
              <div className='cart'>
              <div>Корзина</div>
              </div>
          }
        </Link>
  )
}
export default CartButton;