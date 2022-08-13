import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  '../../style/components/Smart/Header.css';
import Search from './Search';
import CartButton from '../Simple/CartButton';
import LoginForm from './LoginForm';
import Sticky from 'react-sticky-el';
import logo from '../../assets/images/logo.svg'
import { Modal } from 'antd';
import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import { calcTotalCount, calcTotalPrice } from '../../utils/calcReduc';
import useResize from '../../hooks/useResize';

const Header: React.FC = () => {

  const cart  = useTypedSelector(state => state.cart)
  const count = calcTotalCount(cart)
  const total = calcTotalPrice(cart)
  const location = useLocation();
  const { IsAuth, IsNavigate } = useTypedSelector(state => state.auth)
  const isMounted = React.useRef(false);
  const [modalVisible, setModalVisible] = React.useState(false)
  const history = useNavigate();
  const [ref, entry]  =  useResize();
  
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cart);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
    if (IsNavigate == true) {
     setModalVisible(false)
     history("/profil")
    }
  }, [cart, IsNavigate]);



      return (
        <Sticky topOffset={200} disabled={entry <= 880 ? true : false}>
        <div className='header' ref={ref}>
          <div className='header__container'>
          {entry <= 880
          ? 
            <div className='header-mobile__block'>
            <div className='block-mobile__top'>
                <Link to="/" className='logo'>
                  <img src={logo} alt="logo" width="50px" className='hedaer__logo'></img>
                  <div className='logo-items'>
                      <h1>Yummy Food</h1>
                      <div className='sub-title'>Готовим самую вкусную пиццу</div>
                  </div>
                </Link>
            {location.pathname == '/' && <div className='interaction'>
            { IsAuth
            ?
                <Link to="/profil" className='interaction-profil'>
                  <UserOutlined className='interaction_profil-img'/>
                  <div className='interaction_profil-lable'>Кабинет</div>
                </Link>
            :  
                <button 
                className="interaction-button" 
                onClick={() => setModalVisible(true)
                }>Вход</button>
            }
                  <CartButton total={total} count={count}/>
             </div>}
             { IsAuth !==  true &&
                  <Modal
                  destroyOnClose
                  title={null}
                  visible={modalVisible}
                  footer={null}
                  width={400}
                  closeIcon={ <CloseOutlined />}
                  onCancel={() => setModalVisible(false)}
                  >
                     <LoginForm/>
                 </Modal>
             }
            </div>
              {location.pathname == '/' && <Search />}
          </div>
          :
          <>
          <Link to="/" className='logo'>
              <img src={logo} alt="logo" width="50px"></img>
              <div className='logo-items'>
                  <h1>Yummy Food</h1>
                  <div className='sub-title'>Готовим самую вкусную пиццу</div>
              </div>
          </Link>
             {location.pathname == '/' && <Search />}
             {location.pathname == '/' && <div className='interaction'>
                  { IsAuth
                        ?
                        <Link to="/profil" className='interaction-profil'>
                          <UserOutlined className='interaction_profil-img'/>
                          <div className='interaction_profil-lable'>Кабинет</div>
                        </Link>
                        :  
                        <button 
                        className="interaction-button" 
                        onClick={() => setModalVisible(true)
                        }>Вход</button>
                  }
                  <CartButton total={total} count={count}/>
             </div>}
             { IsAuth !==  true &&
                  <Modal
                  destroyOnClose
                  title={null}
                  visible={modalVisible}
                  footer={null}
                  width={400}
                  closeIcon={ <CloseOutlined />}
                  onCancel={() => setModalVisible(false)}
                  >
                     <LoginForm/>
                 </Modal>
             }   
        </>
        }
          </div>
        </div>
      </Sticky>
  )
}
export default Header;
