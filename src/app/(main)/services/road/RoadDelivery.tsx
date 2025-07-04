"use client";
import { StructuredData } from "@/components/StructuredData";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import bgImage from "../../../../assets/road-freight-1.jpg";
import bgAirFreight from "../../../../assets/road-freight-2.jpg";
import contactAirFreight from "../../../../assets/img1.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceFeatures from "@/components/ServiceFeatures";
import { MdEmail } from "react-icons/md";
import { LocateFixedIcon, PhoneCall } from "lucide-react";

const RoadDelivery = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const linkClass = (href: string) =>
    `flex items-center justify-between py-2 px-4 group lg:py-4 lg:px-8 lg:rounded-4xl rounded-lg cursor-pointer ${
      isActive(href)
        ? "bg-bgOrange text-white"
        : "bg-bgWhite text-[#788094] hover:bg-TextOrange hover:text-white"
    }`;

    const oceanFreightJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Ocean Freight",
        provider: {
          "@type": "Organization",
          name: "YourCompany",
          url: "https://yourdomain.com"
        },
        areaServed: {
          "@type": "Place",
          name: "Worldwide"
        },
        serviceType: "Ocean Freight Shipping",
        description: "Reliable ocean freight delivery for heavy and bulk cargo.",
        url: "https://yourdomain.com/services/ocean"
      };
      

  return (
    <div>
      <StructuredData data={oceanFreightJsonLd} />
      {/* Hero Section */}
      <section className="relative h-[400px] pt-[80px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
          <div className="absolute inset-0 bg-bgLightGreen opacity-80"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6 text-white">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-bgOrange">Road Freight</h1>
            <div className="flex gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-white">Home</span>
                <FaAngleDoubleRight className="transition-transform duration-200 group-hover:translate-x-1 text-bgOrange" />
              </Link>
              <p className="text-gray-400">Road Freight </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 px-6 py-3 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        Road
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 pt-10">
        <h2 className="text-3xl font-bold text-bgOrange mb-4">
        Road Freight Delivery Services
        </h2>
      </section>

      {/* Sidebar + Main */}
      <section className="py-20 w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar */}
          <aside className="w-full lg:w-[30%] order-2 lg:order-1">
            <section className="flex lg:flex-col flex-row gap-4 p-5 bg-[#F4F4F4] rounded-lg">
              <h1 className="text-3xl text-bgLightGreen lg:block hidden">services</h1>

              <Link href="/services/air" className={linkClass("/services/air")}>
                <span>Air Freight</span>
                <FaAngleDoubleRight className="transition-transform duration-200 group-hover:translate-x-1 pl-2" />
              </Link>

              <Link
                href="/services/road"
                className={linkClass("/services/road")}
              >
                <span>Road Freight</span>
                <FaAngleDoubleRight className="transition-transform duration-200 group-hover:translate-x-1 pl-2" />
              </Link>

              <Link
                href="/services/ocean"
                className={linkClass("/services/ocean")}
              >
                <span>Ocean Freight</span>
                <FaAngleDoubleRight className="pl-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </section>
            <section className="h-[300px] relative my-20">
              <Image
                src={contactAirFreight}
                alt="Air Freight Image"
                className="rounded-lg w-full h-full"
              />
              <div className="absolute top-0 inset-0 bg-TextBlack opacity-65 rounded-lg"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl whitespace-nowrap">
                <h2>Any Question ?</h2>
              </div>
            </section>
            <section className="bg-[#F4F4F4] rounded-lg flex flex-col gap-8 pb-10">
                <h1 className="bg-TextDarkGreen text-white py-4 px-8">Contact Info</h1>
                <div className="flex gap-10 px-5">
                    <div className="w-15 h-15 rounded-full bg-TextOrange flex items-center justify-center">
                                  <MdEmail  className="text-white text-4xl"/>
                                </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Email Address</p>
                        <span>info@yourdomain.com</span>
                    </div>
                </div>
                <div className="flex gap-10 px-5">
                    <div className="w-15 h-15 rounded-full bg-TextOrange flex items-center justify-center">
                                  <PhoneCall  className="text-white text-4xl"/>
                                </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">
                        Phone Number</p>
                        <span>(+44) 123 456 789</span>
                    </div>
                </div>
                <div className="flex gap-10 px-5">
                    <div className="w-15 h-15 rounded-full bg-TextOrange flex items-center justify-center">
                                  <LocateFixedIcon  className="text-white text-4xl"/>
                                </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Location</p>
                        <span>Guild Street 512B, UK</span>
                    </div>
                </div>
            </section>
          </aside>

          {/* Main */}
          <main className="w-full lg:w-[70%] p-4 bg-white order-1 lg:order-2">
            <div className="h-[400px]">
              <Image
                src={bgAirFreight}
                alt="Air Freight Image"
                className="rounded-lg w-full h-full"
              />
            </div>

            <section className="mt-12">
  <h3 className="text-2xl font-semibold text-bgLightGreen mb-3">About Our Road Freight Services</h3>
  <p className="text-gray-700 mb-4">
    Our road freight services connect cities, states, and neighboring countries with dependable trucking solutions. From single pallets to full truckloads, we provide fast, safe, and flexible ground transportation for your cargo.
  </p>
  <p className="text-gray-600 mb-4">
    YourCompany uses a modern fleet and advanced tracking systems to ensure timely pickups and deliveries. Our drivers are professionally trained and adhere to strict safety standards, making us a trusted partner for regional logistics.
  </p>
  <p className="text-gray-600">
    Whether it’s daily scheduled deliveries or on-demand transport, our road freight team keeps your business moving forward.
  </p>
</section>



            <section>
                <ServiceFeatures/>
            </section>

            <section>
              <FaqAccordion />
            </section>
          </main>
        </div>
      </section>
    </div>
  );
};

export default RoadDelivery;
