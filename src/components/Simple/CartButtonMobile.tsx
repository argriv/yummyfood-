import React from 'react';
import '../../style/components/Simple/CartButtonMobile.css'
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingTwoTone } from '@ant-design/icons';

type countProps = {
    count:number;
}

const CartButtonMobile: React.FC <countProps> = ({count}: countProps) => {
      return (
          <Link to="/cart"  className='cart__mobile'>
                  <Badge size="default" count={count}>
                      <ShoppingTwoTone />
                  </Badge>
          </Link>
  )
}
export default CartButtonMobile;