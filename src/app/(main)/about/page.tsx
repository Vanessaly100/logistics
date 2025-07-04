"use client";
import Link from "next/link";
import Image from "next/image";
import bgImage from "../../../assets/bg-01.jpg.jpg";
import bgImage04 from "../../../assets/bg-04.jpg.jpg";
import icon4 from "../../../assets/icon-4.png.png";
import icon5 from "../../../assets/icon-5.png.png";
import about03 from "../../../assets/about-03.jpg.jpg";
import { ArrowRight } from "lucide-react";
import AboutStats from "@/components/AboutStats";

const About = () => {
  return (
    <div>
      <section className="relative h-[400px] pt-[80px]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${bgImage.src})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* Content Inside Hero Section */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6 text-white">
          <div>
            <h1
              data-aos="zoom-in"
              data-aos-duration="500"
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              About Us
            </h1>
            <div className="flex gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-white">Home</span>
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1 text-bgOrange" />
              </Link>
              <p className="text-gray-400">About Us </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-11/12 mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-bgOrange">01 _ ABOUT US</h4>
            <h2 className="font-black lg:text-5xl sm:text-3xl">
            We provide full range of transportation
            </h2>
            <p className="text-lg">The efficiency and reliability of transport systems play a crucial role in connecting communities.</p>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-10">
                    <div className="h-[100px] w-[100px]">
                    <Image src={icon4} alt="" className="w-full h-full" />
                    </div>
                    <div className="pr-6">
                        <h1 className="font-bold text-2xl">Worldwide Service</h1>
                        <span className="text-lg">We’re always provide people a complete solution focused of any business.</span>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <div className="h-[100px] w-[100px]">
                    <Image src={icon5} alt="" className="w-full h-full" />
                    </div>
                    <div className="pr-6">
                        <h1 className="font-bold text-2xl">Local Service</h1>
                        <span className="text-lg">We’re always provide people a complete solution focused of any business.</span>
                    </div>
                </div>
            </div>
            <Link href="#" className="flex items-center gap-2 group">
                    <span className="py-3 px-6 bg-TextOrange text-white rounded-sm">GET STARTED</span>
                  </Link>
          </div>
          <div className="">
            <div className="h-[400px]">
              <Image src={about03} alt="" className="w-full h-full bg-cover" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${bgImage04.src})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-65"></div>
          </div>

       
          <div className="relative z-10 h-full flex lg:w-2/4 w-[100%] lg:px-10 px-3 text-white lg:top-[25%] top-10">
            <div>
              <p
                data-aos="zoom-in"
                data-aos-duration="500"
                className="xl:text-5xl text-3xl font-bold mb-8 xl:w-full mx-auto"
              >
               We are proud to excellence deliver success
              </p>
              <p data-aos="zoom-in"
                data-aos-duration="500"
                className="mb-8 text-lg">Our company has grown into a dynamic force in transportation across the world. Equipped with state-of-the-art technologies, warehouse services, carrier-partners and dedicated employees.</p>
              <Link href="/contacts">
                <button
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  className="bg-bgOrange hover:bg-bgLightGreen text-white px-8 py-4 rounded-lg cursor-pointer"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <AboutStats/>
      </section>
    </div>
  );
};

export default About