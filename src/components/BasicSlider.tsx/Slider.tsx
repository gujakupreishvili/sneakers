import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rect1 from "../../../public/assets/bigImg/Rectangle (1).png";
import bigN2 from "../../../public/assets/bigImg/n2.jpg"
import bigN3 from "../../../public/assets/bigImg/n3.jpg"
import bigN4 from "../../../public/assets/bigImg/n4.jpg"
import rect2 from "../../../public/assets/smallImg/Rectangle Copy 2 (1).png";
import rect3 from "../../../public/assets/smallImg/Rectangle Copy 3.png";
import rect4 from "../../../public/assets/smallImg/Rectangle Copy 4.png";

const SlidePhotos: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const handleClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="slider-container lg:w-[380px]">
      <Slider ref={sliderRef} {...settings}>
        <div onClick={() => handleClick(0)}>
          <img src={rect1} alt="Slide 1" />
        </div>
        <div onClick={() => handleClick(1)}>
          <img src={bigN2} alt="Slide 2" className="rounded-[12px]" />
        </div>
        <div onClick={() => handleClick(2)}>
          <img src={bigN3} alt="Slide 3"  className="rounded-[12px]"/>
        </div>
        <div onClick={() => handleClick(3)}>
          <img src={bigN4} alt="Slide 4" className="rounded-[12px]" />
        </div>
      </Slider>
      <div className="under-arrows hidden lg:flex lg:gap-[10px]">
        <img src={rect1} alt="Slide 1" onClick={() => handleClick(0)} className='w-[88px] h-[88px] rounded-[10px]' />
        <img src={rect2} alt="Slide 2" onClick={() => handleClick(1)} />
        <img src={rect3} alt="Slide 3" onClick={() => handleClick(2)} />
        <img src={rect4} alt="Slide 4" onClick={() => handleClick(3)} />
      </div>
    </div>
  );
};

export default SlidePhotos;



