import './SliderItem.scss';

type SliderItemPropsType = {
  children: JSX.Element | string,
  title: string,
  text: string,
  onClick?: () => void;
}

function SliderItem({ children, title, text, onClick } : SliderItemPropsType) {
  return (
    <div className='slider__item' onClick={onClick}>
      <div className='slider__item__image'>
        {children}
      </div>
      <div className='slider__item__info'>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SliderItem;