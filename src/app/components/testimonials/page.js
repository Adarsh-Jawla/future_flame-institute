"use client"
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from 'react-icons/go'
import { RxDividerVertical } from 'react-icons/rx'

const Testimonials = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
    dots: false,
    dotsClass: 'slick-dots',
    autoplaySpeed: 2000,

  };
  return (
    <>
      <div className="flex flex-row p-3 justify-center mt-10 ">
        <GoDotFill size={20} className="text-sky-800 mt-2" />
        <GoDotFill size={20} className="text-sky-800 mt-2" />
        <span className='text-slate-400 px-4  text-2xl'>Education & Training Organization</span>
        <GoDotFill size={20} className="text-sky-800 mt-2" />
        <GoDotFill size={20} className="text-sky-800 mt-2" />
      </div>
      <div>
        <h1 className="text-5xl text-center">Students <b>Testimonial.</b></h1>
      </div>
      <Slider {...settings} >
        <div className="mt-8 mb-6 grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-6 flex justify-center">
            <Image src="/images/Backend.jpg"
              alt="hello" width={500} height={500} className="w-32 h-32 rounded-full " />
          </div>
          <p className=" mx-52 italic"> &quot; A backend development course focuses on teaching students the art of building and maintaining the server-side of websites and web applications. Participants learn programming languages like Python, Ruby, or Node.js, to handle data processing, security, and server-side functionality. With a strong emphasis on scalable and efficient systems, the course prepares students for tackling complex backend challenges in the world of web development. &quot; </p>
          <div className="flex justify-center mt-6">
            <span className="font-bold text-sky-500">Adarsh Jawla</span>
            <RxDividerVertical size={30} className="mx-20 text-sky-800" />
            <span className="font-bold text-sky-500">Fullstack Developer</span>
          </div>
        </div>

        <div className="mt-8 mb-6 grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-6 flex justify-center">
            <Image src="/images/Backend.jpg"
              alt="hello" width={500} height={500} className="w-32 h-32 rounded-full " />
          </div>
          <p className=" mx-52 italic"> &quot; A backend development course focuses on teaching students the art of building and maintaining the server-side of websites and web applications. Participants learn programming languages like Python, Ruby, or Node.js, to handle data processing, security, and server-side functionality. With a strong emphasis on scalable and efficient systems, the course prepares students for tackling complex backend challenges in the world of web development. &quot; </p>
          <div className="flex justify-center mt-6">
            <span className="font-bold text-sky-500">Adarsh Jawla</span>
            <RxDividerVertical size={30} className="mx-20 text-sky-800" />
            <span className="font-bold text-sky-500">Fullstack Developer</span>
          </div>
        </div>

        <div className="mt-8 mb-6 grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-6 flex justify-center">
            <Image src="/images/Backend.jpg"
              alt="hello" width={500} height={500} className="w-32 h-32 rounded-full " />
          </div>
          <p className=" mx-52 italic"> &quot; A backend development course focuses on teaching students the art of building and maintaining the server-side of websites and web applications. Participants learn programming languages like Python, Ruby, or Node.js, to handle data processing, security, and server-side functionality. With a strong emphasis on scalable and efficient systems, the course prepares students for tackling complex backend challenges in the world of web development. &quot; </p>
          <div className="flex justify-center mt-6">
            <span className="font-bold text-sky-500">Adarsh Jawla</span>
            <RxDividerVertical size={30} className="mx-20 text-sky-800" />
            <span className="font-bold text-sky-500">Fullstack Developer</span>
          </div>
        </div>

        <div className="mt-8 mb-6 grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-6 flex justify-center">
            <Image src="/images/Backend.jpg"
              alt="hello" width={500} height={500} className="w-32 h-32 rounded-full " />
          </div>
          <p className=" mx-52 italic"> &quot; A backend development course focuses on teaching students the art of building and maintaining the server-side of websites and web applications. Participants learn programming languages like Python, Ruby, or Node.js, to handle data processing, security, and server-side functionality. With a strong emphasis on scalable and efficient systems, the course prepares students for tackling complex backend challenges in the world of web development. &quot; </p>
          <div className="flex justify-center mt-6">
            <span className="font-bold text-sky-500">Adarsh Jawla</span>
            <RxDividerVertical size={30} className="mx-20 text-sky-800" />
            <span className="font-bold text-sky-500">Fullstack Developer</span>
          </div>
        </div>
      </Slider>
    </>
  )
}

export default Testimonials