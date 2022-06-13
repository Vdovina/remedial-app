import React, { useState } from 'react';
import classNames from 'classnames';
import PrevIcon from '../../assets/left-arrow.svg';
import NextIcon from '../../assets/right-arrow.svg';
import './Slider.scss';

type SliderPropsType = {
  children: React.ReactNode,
}

function Slider({ children } : SliderPropsType) {
  const [active, setActive] = useState(0);
  const onChangeActive = (index: number) => {
    if (index < 0) {
      setActive(React.Children.count(children) - 1);
    }
    else if (index >= React.Children.count(children)) {
      setActive(0);
    }
    else {
      setActive(index);
    }
  };

  return (
    <div className='slider__wrapper'>
      <div className='slider__container'>
        <button
          className='slider__button'
          onClick={() => onChangeActive(active - 1)}
        >
          <img className='slider__button__icon' src={PrevIcon} alt="prev" />
        </button>
        <div className='slider'>
          <div
            className='slider__inner'
            style={{transform: `translateX(-${active * 100}%)`}}
            >
              {React.Children.map(children, (child, index) => {
                return React.cloneElement(child as React.ReactElement<any>, { width: '100%' });
              })}
            </div>
        </div>
        <button
          className='slider__button'
          onClick={() => onChangeActive(active + 1)}
        >
          <img className='slider__button__icon' src={NextIcon} alt="next" />
        </button>
      </div>
      <div className='slider__indicators'>
            <div className='slider__indicators__container'>
              {React.Children.map(children, (child, index) => {
                return (
                  <div
                    className={classNames(
                      'slider__indicators__circle',
                      index === active && 'slider__indicators__circle--active'
                      )}
                    onClick={() => onChangeActive(index )}
                  ></div>
                )
              })}
            </div>
          </div>
    </div>
  )
}

export default Slider;