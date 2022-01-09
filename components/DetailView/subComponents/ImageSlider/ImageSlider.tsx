import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

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

  const SliderDiv = styled.div`
  button{
    background:black;
    border-radius:50%;
    padding:2px;
  }
  button:hover{
    background:black;
  }
  button:focus{
    background:black;

  }
  `
  return (
    <SliderDiv style={{ maxWidth: "550px" }}>
      <Slider {...settings}>
        {imageURL.map((item: string) => (
          <div key={item}>
            <img src={item} alt="" width={width ?? 450} height={height ?? 350} />
          </div>
        ))}
      </Slider>
    </SliderDiv>
  );
};

export default ImageSlider;
