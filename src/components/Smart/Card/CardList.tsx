import React, {FC} from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import '../../../style/components/Smart/Card.css'
import CardItems from './CardItem';
import { ICard } from '../../../models/ICard';



const CardList:FC = () => {
  const {card} = useTypedSelector(state => state.pizza)

      return (
        <div className='container-card__list'>
            {card && card.length 
              ? 
              card.map((card:ICard) =>
                <CardItems 
                key={card.id} 
                cards={card}/>
              )
              : 
              <h3>Ничего не найдено</h3>
            } 
        </div>
  )
}
export default CardList;