import React from 'react';
import '../../../style/components/Simple/Loader.css'


const LoaderItems: React.FC = () => {
      return (
    <div className='card'>
      <div className="card__block">
          <div className='img-loadaer'/>
      <div className='card-content__info'>
        <div className='titel-lodaer'/>
        <div className='info-content__block'>
            <div className='text-price-loadaer'/>
            <div className='button-loadaer'/>
        </div>
      </div>
      </div>
    </div>
  )
}
export default LoaderItems;