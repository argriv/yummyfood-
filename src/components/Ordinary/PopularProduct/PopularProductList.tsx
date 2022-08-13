import React from 'react';
import Slider from "react-slick";
import PopularProductItems from './PopularProductItem';
import '../../../style/components/Ordinary/PopularProduct.css'
import { ICard } from '../../../models/ICard';

interface CardItemProps {
    cards: ICard[];
}

const PopularProductList: React.FC <CardItemProps> = ({cards}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
      return (
        <Slider {...settings}>
            {cards &&  
              cards.map((cards:ICard) =>
                <PopularProductItems 
                key={cards.id} 
                cards={cards}/>
              )
            } 
        </Slider>
  )
}
export default PopularProductList;