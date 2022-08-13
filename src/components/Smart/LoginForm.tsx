import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import LoadingForm from '../Simple/LoadingForm';
import { rules } from '../../utils/rules';
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

const LoginForm: React.FC = () => {
  const {error, IsLoading } = useTypedSelector(state => state.auth)
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [formRegister, setFormRegister] = React.useState(false)
  const [formClear, setFormClear] = React.useState(Boolean)
  const {authorization} = useActions()

  const submit = () => {
    authorization() 
   }
  
  const  formAuth = () => {
    setFormRegister(false)
    setFormClear(false)
  }

  const formReg = () => {
    setFormClear(false)
    setFormRegister(true)
  }

  const validateMessages = {
    types: {
      email: 'Такой ${label} не подойдет',
    }
  }


   return (
      <Form onFinish = {submit} validateMessages={validateMessages} preserve={formClear}>
        <h1 className='form_title'>{formRegister ? "Регистрация" : "Вход на сайт"}</h1>
        <h3 className='form-sub_title'>
        {formRegister 
        ? 
        "Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях 🎁"
        : 
        "Авторизуйтесь, копите баллы,меняйте на еду и напитки в приложении 😋🍕"}
        </h3>
          {error 
          && 
          <div style={{color:"red"}}>
          {error}
          </div>}

    {IsLoading && <LoadingForm/>}
        
    { formRegister == false &&
        <Form.Item
        
          name="login"
          rules={[rules.required('Пожалуйста введите логин или email')]}
          >
              <Input
              type = {"text"}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder='Логин или email'  
              value={login}
              onChange={e => setLogin(e.target.value)}
              />
        </Form.Item>
    }
    { formRegister &&
        <Form.Item
          name="email"
          rules={login.length ? [{type: "email"}] : [rules.required('Пожалуйста введите email')]}
          >
              <Input
              type = {"text"}
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder='Email'  
              value={login}
              onChange={e => setLogin(e.target.value)}
              />
        </Form.Item>
        }


      {formRegister 
      ?
      <Form.Item
      name="password-reg"
      rules={[rules.required('Пожалуйста введите пароль')]}
      >
        <Input.Password
        id='password-reg'
        prefix={<LockOutlined className="site-form-item-icon" />}
        placeholder='Пароль'  
        type={"password"} 
        value={password}
        onChange={ e => setPassword(e.target.value)}
        />
      </Form.Item>
      :
      <Form.Item
      name="password-aut"
      rules={[rules.required('Пожалуйста введите пароль')]}
      >
        <Input.Password
        id='password-aut'
        prefix={<LockOutlined className="site-form-item-icon" />}
        placeholder='Пароль'  
        type={"password"} 
        value={password}
        onChange={ e => setPassword(e.target.value)}
        />
      </Form.Item>
      }  


        <Form.Item>
            <Button className='button-login_form' type="primary" htmlType="submit" >
            { formRegister ? "Регистрация" : "Войти" }
            </Button>

            { formRegister 
            ?
            <button className='button-register_back' onClick={formAuth}>Уже есть аккаунт</button>

            :
            <Button onClick={formReg} className='button-register' >Регистрация</Button>
            }
            
        </Form.Item>
        
      </Form>
)
}
export default LoginForm;