import './SliderItem.scss';

type SliderItemPropsType = {
  children: JSX.Element | string,
  title: string,
  text: string,
}

function SliderItem({ children, title, text } : SliderItemPropsType) {
  return (
    <div className='slider__item'>
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