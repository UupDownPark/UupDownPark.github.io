import React from "react"
import Slider from "react-slick"

interface BoxProps  {
  className? :string;
  imgSrc?: string[][];
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
        <div key={idx} className="flex flex-col">
          <img src={el[0]}  alt="" className="mb-6 w-auto h-contents" />
          <div className="text-center mb-4 font-noto-sans text-bold text-base bottom-2">{el[1]}</div>
        </div>
      )
     })}
    </Slider>
  );
};

export default Box;
