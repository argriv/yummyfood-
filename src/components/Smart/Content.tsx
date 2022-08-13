import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from "../../hooks/useActions";
import { ICard } from '../../models/ICard';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { searchCategoryId } from '../../store/reducers/filter/action-creators';
import { calcTotalCount } from '../../utils/calcReduc';
import PizzaService from '../../api/PizzaService';
import Sticky from 'react-sticky-el';
import '../../style/components/Smart/Content.css'
import '../../style/index.css'
import { FrownOutlined } from '@ant-design/icons';
import { Categories } from '../Ordinary/Categories';
import Sort from './Sort';
import Pagination from './Pagination';
import CardList from './Card/CardList';
import CartButtonMobile from '../Simple/CartButtonMobile';
import ResultError from '../Ordinary/ResultError';
import LoaderList from '../Ordinary/LoaderCards/LoaderList';
import PopularProductList from '../Ordinary/PopularProduct/PopularProductList';


const Content: React.FC = () => {
    const cart  = useTypedSelector(state => state.cart)
    const count = calcTotalCount(cart)
    const {page, error, Isloading, limit} = useTypedSelector(state => state.pizza)
    const {value, filter, categoryId} = useTypedSelector(state => state.filter)

    const {fetchCards} = useActions()
    const dispatch = useDispatch();

    const onChangeCategory = React.useCallback((idx: number) => {
        dispatch(searchCategoryId(idx));
    }, []);
      
      const [cardPopular, setCardPopular] = React.useState<ICard[]>([]);
      
      const getPizza = async () => {
        const sortBy = filter.sortProperty.replace('-', '');
        const order = filter.sortProperty.includes('-') ? 'asc' : 'desc';
        let category = categoryId  > 0 ? String(categoryId) : '';

        if (value) {
            category = ''
            dispatch(searchCategoryId(0))
        }
        
        fetchCards(page, limit, value, category, sortBy, order)
        
        const responce = await PizzaService.getPopular( '', "desc");
        setCardPopular(responce.data)
        }
        
        React.useEffect(() => {
            getPizza()
        }, [value, categoryId, page, filter.sortProperty])


    if (error) {

    return( 
        <ResultError
        icon={<FrownOutlined />}
        title={error}
        subTitle="Попробуйте повторить попытку чуть позже."
        extra
        />
    )
            
    }
    return (
        <div className='content'>
                <CartButtonMobile count={count}/>
            <div className='content-top'>
                <div className='top-content_hedaer'>
                  <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                  <Sort value={filter}/> 
                </div>
                <div className='top-content_footer'>
                  <h2 className='footer-content_title'>Часто заказывают</h2>
                  <div className='footer-content_container product-container'>
                        <PopularProductList cards={cardPopular}/>
                  </div>
                </div>
                <h1 className='content-title'>Пицца</h1>
            </div>
            {Isloading
            ?
            <LoaderList/>
            : 
            <div>
                <CardList/>
                <Pagination/>
            </div>
            }
        </div>
    );
};

export default Content;
