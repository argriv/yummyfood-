import React from 'react';
import { Result } from "antd"

type ResultErrorProps = {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
}

const ResultError:React.FC<ResultErrorProps> = ({icon, title, subTitle, extra}: ResultErrorProps) => {
      return (
        <Result
            icon={icon}
            title={title}
            subTitle={subTitle}
            extra ={extra}
          />
  )
}
export default ResultError;