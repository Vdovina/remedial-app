import React from 'react';
import { connect, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { Header, Slider } from '../../components';
import { SliderItem } from '../../components/Slider/components';
import { games } from '../../constants/data';
import './HomePage.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className='home-page__wrapper'>
      <Slider>
        {games.map(game => (
          <SliderItem
            title='Играйте'
            text={game.description || ''}
            onClick={() => navigate(ROUTES.GAME.replace(':game', game.code))}
          >
            Item
          </SliderItem>
        ))}
      </Slider>
    </div>
  );
}

const mapStateToProps = (state : IState) => ({
  state: state,
});

export default connect(mapStateToProps, null)(HomePage);
