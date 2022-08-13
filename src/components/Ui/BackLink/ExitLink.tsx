import React  from 'react';
import { Link } from 'react-router-dom';

type ExitProps = {
    text: string
}

const BackLink: React.FC <ExitProps> = ({text}: ExitProps) =>  {
  
      return (
        <Link className='bt' to="/">{text}</Link>
    )
}
export default BackLink;