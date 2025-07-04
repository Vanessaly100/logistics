"use client";

import Image from "next/image";
import icon1 from "../assets/icon-10.png.png"
import icon2 from "../assets/icon-11.png.png"
import icon3 from "../assets/icon-12.png.png"
import icon4 from "../assets/icon-13.png.png"

const features = [
  {
    title: "100% Guaranteed secure delivery",
    description:
      '"100% Guaranteed secure delivery" is a reassuring statement often used by companies to convey confidence in their shipping or delivery services.',
    icon: icon1,
  },
  {
    title: "Up-to-date fleet of vehicles",
    description:
      '"Up-to-date fleet of vehicles" highlights the use of modern, well-maintained transport for reliable service.',
    icon: icon2,
  },
  {
    title: "Cargo Insurance",
    description:
      '"Cargo Insurance" ensures your goods are protected against damage or loss during transit.',
    icon: icon3,
  },
  {
    title: "On Time Delivery",
    description:
      '"On Time Delivery" promises punctual arrival of goods to build customer trust and satisfaction.',
    icon: icon4,
  },
];

const ServiceFeatures = () => {
  return (
    <section className=" mx-auto py-20">
      <div className="grid md:grid-cols-2 gap-20">
        {features.map((feature, index) => (
          <div key={index} className="feature-item relative text-center rounded-[30px] bg-[#F4F4F4] shadow-md p-8">
            <div className="icon absolute left-1/2 -top-10 transform -translate-x-1/2 w-20 h-20 rounded-full bg-TextOrange flex items-center justify-center">
              <Image src={feature.icon} alt={feature.title} width={50} height={50} />
            </div>
            <div className="text mt-14">
              <h5 className="text-xl font-bold pb-4 to-TextDarkGreen">{feature.title}</h5>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;
