import React  from 'react';
import { ICard } from '../../../models/ICard';

interface CardItemProps {
  cards: ICard;
}

const PopularProductItems: React.FC <CardItemProps> = ({cards}) => {
      return ( 
                <div className='popular_product' key={cards.id}>
                  <div className='popular_product-items'>
                    <div className='items-product_img'>
                        <img className="product_img" src={cards.imageUrl} alt="Pizza" />
                    </div>
                    <div  className='items-product_info' >
                        <h4 className="info-product_titel">{cards.title}</h4>
                        <h4 className="info-product_price">{cards.price} ₽</h4>
                    </div> 
                    </div>
                </div>
  )
}
export default PopularProductItems;