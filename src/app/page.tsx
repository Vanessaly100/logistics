"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import HeroSlider from "../components/slider/SliderConstant";
import Service from "../components/slider/Service";
import TypeOfServices from "../components/slider/TypeServices";
import Review from "../components/slider/Review";
// import Logo from "../assets/logo-inner.png.png"
// import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AboutusImg from "../assets/about-04.jpg.jpg"
import { Check } from 'lucide-react';
import { FaHeart, FaShareAlt } from "react-icons/fa";
import process1 from "../assets/process-01.jpg"
import process2 from "../assets/process-02.jpg"
import process3 from "../assets/process-03.jpg"
import process4 from "../assets/process-04.jpg"
import bgImage from "../assets/bg-05.jpg"

// import { Navigation } from 'swiper/modules'

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[500px] lg:h-screen z-10 bg-no-repeat">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className=" w-full h-full relative"
        >
          {HeroSlider.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full  bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image.src})` }}
              >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/30 z-0" /> */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10 z-0" />

                {/* Slide Text Content */}
                <div className="flex flex-col lg:w-3/5 relative top-[35%]  left-10  text-white font-bold items-start pb-10 justify-center">
                  <h1 className="text-[4rem] font-bold">{slide.header}</h1>
                  <Link href="#" className="flex items-center gap-2 group">
                    <span className="py-3 px-6 bg-TextOrange text-white rounded-sm">GET STARTED</span>
                    {/* <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" /> */}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="w-11/12 mx-auto lg:relative lg:-top-20 z-40">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          {Service.map((card, i) => (
            <div key={i}>
              <Card className="py-10 w-full px-10 bg-bgWhite border !border-none">
                <div className="flex flex-col gap-8 h-full items-center">
                  <div className="flex flex-col justify-start gap-7 items-center">
                    <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-blue-100">
                      {card.number}
                    </div>
                    <h3>
                      <Link
                        href="#"
                        className="text-2xl font-bold hover:text-blue-500"
                      >
                        {card.header}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-black text-center">{card.text}</p>
                  <span className="text-bgOrange font-bold underline">
                    {card.score}
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
      <section className="sectionOne xl:h-screen h-fit pb-14">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col lg:flex-row w-full h-full  gap-20 pb-14">
            <div
              data-aos="zoom-in"
              className="xl:w-1/2 w-full text-white flex flex-col gap-7"
            >
              <h1 className="text-2xl font-bold text-bgOrange">
              01 _ MORE ABOUT US
              </h1>
              <h1 className="text-6xl font-bold text-bgLightGreen">
              We get solutions to grow transport.
              </h1>
              
              <div className="">
                <div className="flex flex-col gap-5 text-black">
                  <div className="flex gap-4 items-center">
                    <span className="w-16 h-16 rounded-full border-bgOrange flex justify-center items-center border-2">
                    <Check />
                    </span>
                    <p className="w-2/4">
                    Is always more than our expectation due to your support.
                    </p>
                  </div>
                  <div className="flex gap-4">
                  <span className="w-16 h-16 rounded-full border-2 border-bgOrange flex justify-center items-center">
                    <Check />
                    </span>
                    <p className="w-2/4">
                    We guarantee trusted service for us to grow more around the world.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="about">
                <button className="rounded border bg-bgOrange py-3 px-20 w-full hover:text-white cursor-pointer">
                  ABOUT COMPANY
                </button>
              </Link>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="w-full xl:w-1/2 image-container transition-transform duration-300 transform hover:translate-y-[-10px] hover:scale-105"
            >
              
              <Image
                src={AboutusImg}
                alt="Example"
                className="h-full w-full z-10 relative rounded border"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {TypeOfServices.map((image) => (
        <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-lg">
          {/* Image */}
          <Image
            src={image.src}
            alt={image.title}
            width={400}
            height={300}
            className="w-full h-auto object-cover transform duration-500 group-hover:scale-110"
          />

          {/* Top content - number & title */}
          <div className="absolute top-0 left-0 w-full p-3 bg-gradient-to-b from-black/60 to-transparent text-white z-10">
          <div className="">
          <h3 className="text-sm font-semibold">#{image.id}</h3>
          <h2 className="text-lg font-bold">{image.title}</h2>
          </div>
          <div className="mt-40 w-[70px] h-[70px]">
            <Image src={image.icon} alt="" className="hover:hidden w-full h-full"/>
          </div>
          </div>

          {/* Hover overlay content */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 z-20 flex items-center justify-center px-4 cursor-pointer">
            <div className="text-center text-white">
              <p className="mb-2 text-sm">Explore more about <span className="font-bold">{image.title}</span></p>
              <p>{image.text}</p>
              <div className="flex justify-center gap-4 mt-2">
                <FaHeart className="hover:text-red-500 transition" size={22} />
                <FaShareAlt className="hover:text-blue-400 transition" size={22} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
      </section>

      <section className="py-30 w-11/12 mx-auto">
        {/* <div className=""> */}
          <div className="flex flex-col gap-8 justify-center items-center pb-20">
            <h3 className="text-bgOrange font-bold">02 _ WORK PROCESS</h3>
            <h1 className="font-bold text-6xl">Logistics workflow</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4 items-center justify-center">
            <div className="">
            <div className="w-[180px] h-[180px] mx-auto">
              <Image src={process1} alt="" className="w-full h-full rounded-full bg-cover"/>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 text-center pt-3">
              <h3 className="font-bold text-xl">Order Processing</h3>
              <p className="">The logistics process begins with the receipt of customer...</p>
              </div>
            </div>
            <div className="">
            <div className="w-[180px] h-[180px] mx-auto">
              <Image src={process2} alt="" className="w-full h-full rounded-full bg-cover"/>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 text-center pt-3">
              <h3 className="font-bold text-xl">Warehousing</h3>
              <p>Goods that are ready for shipment are stored in warehouses or...</p>
              </div>
            </div>
            <div className="">
            <div className="w-[180px] h-[180px] mx-auto">
              <Image src={process3} alt="" className="w-full h-full rounded-full bg-cover"/>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 text-center pt-3">
              <h3 className="font-bold text-xl">Order Tracking</h3>
              <p>Real-time tracking systems are used to monitor the...</p>
              </div>
            </div>
            <div className="">
              <div className="w-[180px] h-[180px] mx-auto">
              <Image src={process4} alt="" className="w-full h-full rounded-full bg-cover"/>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 text-center pt-3">
              <h3 className="font-bold text-xl">Product Delivery</h3>
              <p>In the final stage of logistics services.</p>
              </div>
            </div>
          </div>
          {/* </div> */}
      </section>

      <section className="h-screen">
        <div className="relative z-0 h-screen">
          <Image src={bgImage} alt="" className="w-full h-full"/>
        </div>
        <div className="relative lg:bottom-[144px] bottom-[344px] z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:ml-5 mx-6">
          <div className="bg-bgWhite flex gap-10 font-bold lg:py-10 lg:px-8 py-4 px-3">
            <span className="text-5xl">426</span>
            <div className="">
            <p className="text-2xl">Products</p>
            <p className="text-2xl">Transport</p>
            </div>
          </div>
          <div className="bg-black text-white flex gap-10 font-bold py-10 px-8 items-center">
            <span className="">426</span>
            <div className="">
            <p className="text-2xl">Toll Free call</p>
            <p className="text-xl">(+44) 123 456 789</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-bgOrange">02 _ WHAT PEOPLE ASK</h4>
              <h2 className="font-black text-5xl">What our clients say about us</h2>
            </div>
            <div className="">{/* review sections  */}
        <div className='w-full mt-10'>
            <Swiper
            modules={[Autoplay, EffectFade]}
          spaceBetween={30}
          loop={true}
          speed={1000}
          autoplay={{ delay: 3500 }}
          className="w-full h-96 flex justify-center items-center"
            >
              {Review.map((rev, index)=>(
                <SwiperSlide key={index} className='h-full' >
                  <div className='h-86 p-6 gap-6 flex justify-center flex-col '   style={{ boxShadow: '0 8px 10px -6px rgba(0,0,0,0.3), 0 -8px 10px -6px rgba(0,0,0,0.3)' }}>
                    <div className="flex items-center gap-14">
                    <div className='h-40 w-40 rounded-full'>
                      <Image src={rev.picture} alt="" className='h-full w-full object-cover object-center rounded-full' />
                    </div>
                    <div className="w-[50%]">
                    <p>{rev.review}</p>
                    <h1 className='text-lg font-semibold'>{rev.name}</h1>
                    </div>
                    </div>
                  </div>

                </SwiperSlide>
              ))}

            </Swiper>
        </div>
      </div>
      </div>
      </section>
    </>
  );
}
