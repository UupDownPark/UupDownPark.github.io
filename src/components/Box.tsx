import React from "react"
import Slider from "react-slick"

interface BoxProps  {
  className? :string;
  imgSrc?: string[];
}

const Box = ({className,imgSrc}:BoxProps) => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className={className}>
     {imgSrc?.map((el,idx)=>{
      return (
        <img src={el} key={idx} alt="" />
      )
     })}
    </Slider>
  );
};

export default Box;
