"use client"
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders() {
 
  const settings = {
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true,
    dots: false,
    dotsClass: 'slick-dots',
    autoplaySpeed: 2000,

  };
  return (
    <>
      <Slider {...settings} >
      <div> <Image src='/images/html-slider.jpg' alt="html" width={500} height={100} style={{height: "148px"}}/> </div>
        <div> <Image src='/images/css-slider.jpg' alt="css" width={500} height={100} style={{height: "148px"}} /> </div>
        <div> <Image src='/images/javascript-slider.jpg' alt="js" width={500} height={100} style={{height: "148px"}}/> </div>
        <div> <Image src='/images/reactjs-slider.jpg' alt="react" width={500} height={100} style={{height: "148px"}}/> </div>
        <div> <Image src='/images/next-slider.png' alt="next" width={500} height={80} style={{height: "148px"}}/> </div>
        <div> <Image src='/images/tailwind-slider.jpg' alt="tail" width={500} height={100} style={{height: "148px"}}/> </div>
        <div> <Image src='/images/node-slider.jpg' alt="node" width={500} height={100} style={{height: "148px"}}/> </div>
        <div> <Image src='/images/Php-slider.jpg' alt="php" width={500} height={100} style={{height: "148px"}}/> </div>
        <div> <Image src='/images/Laravel-slider.jpg' alt="lara" width={500} height={100} style={{height: "148px"}}/> </div>
        <div> <Image src='/images/Java-slider.jpg' alt="java" width={500} height={100} style={{height: "148px"}}/> </div>
        <div> <Image src='/images/python-slider.jpg' alt="python" width={500} height={100} style={{height: "148px"}}/> </div>
      </Slider>
      
    </>
  );
}

export default Sliders;