import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export interface IImageSliderProps {
  imageURL: string[];
  width: number;
  height: number;
}

const ImageSlider: React.FC<IImageSliderProps> = ({ imageURL, width, height }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{width:"550px"}}>
      <Slider {...settings}>
        {imageURL.map((item: string) => (
          <div key={item}>
            <img src={item} alt="" width={width??450} height={height??350} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
