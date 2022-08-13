import React from 'react';
import LoaderItems from './LoaderItem';
import { createPages } from '../../../utils/page';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const LoaderList: React.FC = () => {

    const {limit} = useTypedSelector(state => state.pizza)
    const loaderCard: number[] = []; 
    createPages(loaderCard, limit, 1)

      return (
        <div className='container-card__list'>
        { loaderCard.map((loader) =>
        <LoaderItems key={loader}/>
        )}
    </div> 
  )
}
export default LoaderList;