import React from 'react';
import { ICard } from '../../../models/ICard';

type booleanProps = {
  cards: ICard;
}

const ModalItems: React.FC <booleanProps> = ({cards}: booleanProps) => {

      return (
        <div className="modal_container">
          <div className='modal_img'>
            <img src={cards.imageUrl} />
          </div>
          <div className='modal_info'>
            <h2>{cards.title}</h2>
            <h4>{cards.price} ₽</h4>
          </div>
        </div>
      );
}
export default ModalItems;