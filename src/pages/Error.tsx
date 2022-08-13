import React from 'react';
import ExitLink from '../components/Ui/BackLink/ExitLink';
import { Result } from 'antd';

const Error: React.FC = () => {
       return(
        <div className='error_page'>
          <Result
           status="404"
           title="404"
           subTitle="Извините, данная страница не существует."
           extra={<ExitLink text='На главную'/>}
          />
        </div>
      )
}
export default Error;


