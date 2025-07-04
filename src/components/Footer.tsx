'use client';

import Link from 'next/link';
import Image from "next/image";
import footerLogo from "../assets/logo-inner.png.png"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


type LinkItem = {
  title: string;
  link: string;
};

const FooterLinks: LinkItem[] = [
  { title: 'About', link: '/about' },
  { title: 'Services', link: '/services' },
  { title: 'Contacts', link: '/contacts' },
  // { title: 'Portfolio', link: '/pages/portfoliopage' },
  // { title: 'Pricing', link: '/pages/pricing' },
  { title: 'Faqs', link: '/pages/faqs' },
];

const HelpLinks: LinkItem[] = [
  { title: 'Customer Support', link: '/support' },
  { title: 'Delivery Details', link: '/delivery-details' },
  { title: 'Terms & Conditions', link: '/terms' },
  { title: 'Privacy Policy', link: '/policy' },
];

// const ResourcesLinks: LinkItem[] = [
//   { title: 'Free Ebooks', link: 'https://www.free-ebooks.net/' },
//   { title: 'How To Blog', link: 'https://www.wix.com/blog/how-to-start-a-blog' },
// ];

const Footer = () => {
  return (
    <footer className=" bg-TextDarkGreen text-white">
      <section className="container py-10 w-11/12 mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Info */}
          <div className="py-8 lg:px-4">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 flex items-center gap-3">
            About Kargon
            </h1>
            <p className=" w-80 text-lg">
            We pride ourselves on providing the best transport and shipping services.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-bgOrange duration-300" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:text-bgOrange duration-300" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl hover:text-bgOrange duration-300" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Company */}
            <div className="py-8 lg:px-4">
              <h2 className="text-xl font-bold mb-3">Useful Links</h2>
              <ul className="flex flex-col gap-3 text-lg">
                {FooterLinks.map((item) => (
                  <li key={item.title}>
                    <Link href={item.link} className="hover:text-bgOrange">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us*/}
            <div className="py-8 lg:px-4">
              <h2 className="text-xl font-bold mb-3">Contact Us</h2>
              <div className="flex flex-col gap-3">
                <p><span className='font-bold'>ADDRESS:</span> <span className='text-gray-400'>66 Guild Street 512B, Great North Town.</span></p>
                <p><span className='font-bold'>MAIL:</span> <span className='text-gray-400'> addyour@email</span></p>
                <p><span className='font-bold'>PHONE:</span> <span className='text-gray-400'>  (+44) 123 456 789</span></p>
                <p><span className='font-bold'>FAX ID:</span> <span className='text-gray-400'>  (+1) 523-567-987</span></p>
              </div>
              
            </div>

            {/* Resources */}
            <div className="py-8 lg:px-4">
              <h2 className="text-xl font-bold mb-3">Parcel Tracking</h2>
              {/* Tracking Input */}
<div className=" w-full max-w-md py-5">
  <div className="flex items-center">
    <input
      type="text"
      id="tracking"
      placeholder="Enter tracking ID"
      className="w-full py-2 pl-4  rounded-md rounded-r-none bg-transparent text-white border-white border border-r-0 focus:ring-0 focus:border-none placeholder:text-gray-500"
    />
    <button
      className="py-3 cursor-pointer px-4 bg-TextOrange text-white rounded-md hover:bg-opacity-90 text-sm rounded-l-none"
    >
      Track
    </button>
  </div>
</div>

              <p className='text-lg'>You can quickly check your shipment progress.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='w-11/12 mx-auto'>
        <div className="flex justify-between items-center border border-t-TextGen border-l-transparent border-r-transparent border-b-transparent py-6">
          <div className="w-[100px] h-[80px]">
            <Image src={footerLogo} alt="" className='w-full h-full bg-cover'/>
          </div>
          <div className="">
            <ul className="flex  gap-3">
                {HelpLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      className="hover:translate-x-1 hover:text-bgOrange transition duration-300 text-gray-400 inline-block"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
