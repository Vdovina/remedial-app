import React from 'react';
import { connect, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { Header, Slider } from '../../components';
import { SliderItem } from '../../components/Slider/components';
import './HomePage.scss';

function HomePage() {
  return (
    <div className='home-page__wrapper'>
      <Slider>
        <SliderItem
          title='Играйте'
          text='блабла блабла блабла бла бла блабла блабла блабла бла бла блабла блабла блабла бла бла блабла блабла блабла бла бла'
        >
          Item1
        </SliderItem>
        <SliderItem
          title='Играйте'
          text='блабла блабла блабла бла бла блабла блабла блабла бла бла блабла блабла блабла бла бла блабла блабла блабла бла бла'
        >
          Item2
        </SliderItem>
        <SliderItem
          title='Играйте'
          text='блабла блабла блабла бла бла блабла блабла блабла бла бла блабла блабла блабла бла бла блабла блабла блабла бла бла'
        >
          Item3
        </SliderItem>
      </Slider>
    </div>
  );
}

const mapStateToProps = (state : IState) => ({
  state: state,
});

export default connect(mapStateToProps, null)(HomePage);
