import React, {FC} from 'react';
import ExitLink from '../components/Ui/BackLink/ExitLink';
import ResultError from '../components/Ordinary/ResultError';
import '../style/pages/Cart.css'
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { CartItem } from '../components/Smart/CartItem';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { clearCart } from '../store/reducers/cart/action-creator';
import { calcTotalCount, calcTotalPrice } from '../utils/calcReduc';
import { DeleteOutlined, MehOutlined, ShoppingCartOutlined } from '@ant-design/icons';


const Cart:FC = () => {
   const cart = useTypedSelector(state => state.cart)
   const totalcount = calcTotalCount(cart)
   const totalPrice = calcTotalPrice(cart)

   const dispatch = useDispatch()

   const clearCarts = () => {
   		if (window.confirm('Вы действительно хотите очистить корзину?')) {
   			localStorage.removeItem('cart')
   			dispatch(clearCart())
   		}
   }

	return (
            <div className='carts'>
				{ cart && cart.length ?
                <div className='cart-container'>
                    <div className='cart-top'>
					<div className='cart-top_title'>
						<ShoppingCartOutlined/>
						<h1>Корзина</h1>
					</div >
                        <button onClick={clearCarts} className="cart-top_clear">
							<DeleteOutlined /><span>Очистить корзину</span></button>
                    </div>
					{cart.map((item: any) => (
						<CartItem key={item.id} {...item} />
					  ))}
					<div className='total-order'>
						<div>Количество пицц:<span className='total-pizza'> {totalcount} шт.</span></div>
						<div>Сумма заказа: <span className='color-order'>{totalPrice.toLocaleString()} ₽</span></div>
					</div>
					<div className='cart-interactiv'>
						<ExitLink text="Назад"/>
						<Button 
						className='bt'
                        type="ghost" 
						> Оплатить сейчас
                    	</Button>
					</div>
				</div>
				: 
				<div className='cart-container'>
					<ResultError
						icon={<MehOutlined />}
    					title="Корзина пуста"
						subTitle="Попробуйте добавить товары в корзину 🍕"
    					extra={<ExitLink text="Назад"/>}
					/>
				 </div>
				}
    </div>
  )
}
export default Cart;