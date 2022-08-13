import React from 'react';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/ru_RU';
import DynamicPhone from '../components/Ordinary/DynamicPhone';
import '../style/pages/Profil.css'
import 'moment/locale/ru'
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { GiftOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, DatePicker, Form, Input, Tooltip } from 'antd';

const Profil: React.FC = () => {
    
  const {logout} = useActions()
  const hp = moment([2022, 7, 2]);
  const validateMessages = {
    types: {
      email: 'Укажите корректный email',
    }
  }

  window.scroll(0,0)
  
  return (
        <div className='profil'>
            <div className='profil_arrow'>
              <Link to="/" className='arrow-profil_back'>
                <span className='arrow arrow-back'/>
              </Link>                
            </div>
          <div className='profil_content'>
              <div className='conten-profil_top'>
              <Card
                  style={{ width: 240 }}
                  cover={<GiftOutlined />}
              ><p className='profil-card_info'>Персональные акции появятся здесь после заказа</p>
              </Card>
              </div>
              <h2 className= "content-title personal">Личные данные</h2>
              <Form className='profil_form' validateMessages={validateMessages}>
                <Form.Item label="День рождения">
                  <DatePicker 
                      locale={locale}
                  />
                </Form.Item>
                <Form.Item
                    name="nickname"
                    label="Имя"
                    initialValue="user"
                >
                  <Input id="user"/>
              </Form.Item>
              <Form.Item
                  name="email"
                  label="Эл.почта"
                  rules={[{type: "email"}]}
                  initialValue="user123@gmail.com"  
              >
                <Input
                    id="email"
                    type = {"text"}
                />
              </Form.Item>
              <Form.Item
                  name="phone"
                  label="Номер телефона"
                  initialValue={"1233211231"}
              >
                <DynamicPhone/>
              </Form.Item>
              <Form.Item>
                <h2 className= "content-title subscriptions">Подписки</h2>
                <div className='content_subscription'>
                    <Checkbox>Получать персональные предложения и акции</Checkbox>
                    <Tooltip 
                        title="Согласен на получение от ООО «Вкусная Еда»  рекламных предложений по сетям электросвязи (SMS, push, email и другое)" 
                        className='subscription_info'>
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                </div>
              </Form.Item>
              <Form.Item>
                <Button 
                    className='button-login_form' 
                    type="primary" 
                    htmlType="submit" 
                >Сохранить
                </Button>
              </Form.Item>
            </Form>
              <div className='content_history'>
                <h2 className= "content-title history">История заказов</h2>
                  Последний заказ был: {hp.fromNow()}
              </div>
              <Link to="/"
                  className='bt' 
                  type="primary" 
                  onClick={logout}>Выйти
              </Link>
            </div>
        </div>
)}
export default Profil;