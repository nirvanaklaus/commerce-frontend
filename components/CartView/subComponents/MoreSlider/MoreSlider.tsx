import React from "react";
import Slider from "react-slick";
import { IImageSliderProps } from "../../../DetailView/subComponents/ImageSlider/ImageSlider";

export interface IMoreSlider extends IImageSliderProps {
  text: string;
}
const MoreSlider: React.FC<IMoreSlider> = ({
  imageURL,
  width,
  height,
  text,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ width: "100%" }}>
      <h2>{text}</h2>
      <Slider {...settings}>
        {imageURL.map((item: string) => (
          <div key={item}>
            <img
              src={item}
              alt=""
              width={width ?? 350}
              height={height ?? 550}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MoreSlider;
