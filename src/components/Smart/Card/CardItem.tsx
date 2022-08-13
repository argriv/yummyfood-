import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import '../../../style/components/Smart/Card.css'
import ModalCards from '../../Ordinary/ModalCard/ModalCards';
import { Button } from 'antd';
import { ICard } from '../../../models/ICard';
import { addToCart, selectCartItemById } from '../../../store/reducers/cart/action-creator';

interface CardItemProps {
  cards: ICard;
}

const CardItem: React.FC<CardItemProps> = ({cards}) => {
  const [totalCount, setTotalCount] = React.useState(0)
	const dispatch = useDispatch()

  const [active, setActive] = React.useState(false)
  	const addProduct = () => {
    setTotalCount(totalCount + 1)
    dispatch(addToCart(cards, totalCount))
	}

  const cartItem = useTypedSelector(selectCartItemById(cards.id));
  const addeCount = cartItem ? cartItem.count : 0;


      return ( 
                 <div className='card' key={cards.id}>
                 <div className='card__block'>
                   <div className='block-card__interaction' onClick={() => setActive(true)}>
                       <img className="interaction-card__img" src={cards.imageUrl} alt="Pizza" />
                   </div> 
                   <div className='card-content__info'>
                       <h4 className="info-content__title">{cards.title}</h4>
                         <div className='info-content__block'>
                           <div className='block-content__price'>от {cards.price} ₽</div>
                             <Button 
                               type="ghost" 
                               className="bt block-content__button" 
                               onClick={addProduct}>
                                 <span className='block-content__plus'>+</span> 
                                 <div className='block-content__text-button'> 
                                 Добавить
                                 </div>
                                 {addeCount > 0 && <span className='block-content__count'>{addeCount}</span>} 
                             </Button>
                         </div>
                   </div>
                   <ModalCards state={active} setState={setActive} cards={cards}/>
                   </div>
               </div>
  )
}
export default CardItem;

