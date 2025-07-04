// import React from 'react'
import ContactUsImg from '../../../assets/breadcrumb-contact.jpg.jpg'
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import Form from "./Form";
import contactformimg from '../../../assets/breadcrumb.jpg'
import Maps from "./Maps";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div>
      <div className="relative h-[400px] pt-[80px]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${ContactUsImg.src})`,
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
                <FaAngleDoubleRight className="transition-transform duration-200 group-hover:translate-x-1 text-bgOrange" />
              </Link>
              <p className="text-gray-400">Contact Us </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-TextDarkGreen text-white">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-col xl:grid-cols-4 md:grid-cols-2 text-center gap-8 py-12">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="flex flex-col items-center  gap-6 border border-gray-500 p-7"
            >
              <div className="bg-SecondaryColor w-fit p-6">
                <FaMapLocationDot color="white" size={30} />
              </div>
              <div>
                <p className="text-1xl font-bold">123, King Street, NY</p>
                <span>Visit Us</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="flex flex-col items-center  gap-6 border border-gray-500 p-7"
            >
              <div className="bg-SecondaryColor w-fit p-6">
                <MdAddCall color="white" size={30} />
              </div>
              <div>
                <p className="text-1xl font-bold">+1 (123) 456 7890</p>
                <span>Call Us</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="flex flex-col items-center  gap-6 border border-gray-500 p-7"
            >
              <div className="bg-SecondaryColor w-fit p-6">
                <MdAttachEmail color="white" size={30} />
              </div>
              <div>
                <p className="text-1xl font-bold">info@example.com</p>
                <span>Email Us</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-col items-center  gap-6 border border-gray-500 p-7"
            >
              <div className="bg-SecondaryColor w-fit p-6">
                <IoIosTime color="white" size={30} />
              </div>
              <div>
                <p className="text-1xl font-bold">Mon-Fri: 9:00am - 7:00pm</p>
                <span>Business Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-fit bg-[#F9F9F9]  text-black xl:p-10 p-2">
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="grid xl:grid-cols-2 grid-cols-1"
        >
          <div className="h-fit">
            <Form />
          </div>
          <div className="lg:h-full h-[300px] relative rounded-2xl">
            <Image
              src={contactformimg}
              alt=""
              className="h-full rounded-2xl object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0  bg-black opacity-60 rounded-2xl"></div>
          </div>
        </div>
      </section>
      {/* map */}
      <section>
        <Maps />
      </section>
    </div>
  );
}

export default Contacts