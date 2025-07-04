"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { RiMenuLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/logo (1).png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const pathname = usePathname();

  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);

  
  const isPagesActive = [
    "/services/air",
    "/services/ocean",
    "/services/road",
  ].includes(pathname);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setIsServicesMenuOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setIsServicesMenuOpen(false), 200);
  };

  const handleMobileNavClick = () => {
    setOpen(false);
    setIsServicesMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (href: string) => pathname === href;

  const linkClass = (href: string) =>
    isActive(href)
      ? "bg-bgOrange p-1 rounded text-white"
      : `p-1 rounded ${
          sticky ? "text-black hover:bg-bgOrange hover:text-white" : "text-white hover:bg-bgOrange"
        }`;

  return (
    <header
      className={`w-full fixed top-0 left-0 transition-all duration-300 z-50 ${
        sticky ? "bg-white text-black shadow-lg" : "bg-transparent text-black border border-b-gray-500"
      }`}
    >
      {/* Desktop Navbar */}
      <nav className="xl:flex hidden justify-between items-center w-full h-16 px-5 py-14 font-semibold lg:px-10 text-base uppercase">
        <span className="flex items-center">
          <Image src={Logo} alt="logo" width={226} height={63} />
        </span>

        <div className="flex items-center gap-8">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>

          {/* Services dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
             className={`${
              isPagesActive
                ? "text-white px-2 py-2 bg-TextOrange rounded cursor-pointer"
                : `p-2 rounded ${
                    sticky ? "text-black hover:bg-bgOrange hover:text-white" : "text-white hover:bg-bgOrange hover:text-white"
                  }`
            } hover:text-white`}
            >
              <span className="flex gap-1 cursor-pointer">
                SERVICES
                <IoIosArrowDown size={20} />
              </span>
            </button>

            {isServicesMenuOpen && (
              <ul className="absolute top-12 left-0 bg-bgOrange text-white w-40 shadow-lg rounded-lg py-6 text-center flex flex-col gap-5">
                <Link href="/services/air" className="hover:bg-white hover:text-bgLightGreen p-2 rounded">Air Delivery</Link>
                <Link href="/services/road" className="hover:bg-white hover:text-bgLightGreen p-2 rounded">Land Delivery</Link>
                <Link href="/services/ocean" className="hover:bg-white hover:text-bgLightGreen p-2 rounded">Water Delivery</Link>
              </ul>
            )}
          </div>

          <Link href="/contacts" className={linkClass("/contacts")}>Contacts</Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Link href="/track">
            <Button className="py-6 px-4 rounded-2xl text-2xl bg-TextOrange text-white cursor-pointer">
              Track Order
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex justify-between items-center w-full h-16 bg-white text-white relative py-3 px-8 lg:hidden">
        <span className="flex items-center">
          <Image src={Logo} alt="logo" width={80} height={80} />
        </span>

        <ul
          className={`bg-bgLightGreen text-white flex flex-col items-center gap-3 font-semibold text-lg text-center h-screen fixed top-0 mt-16 w-screen pt-8 pl-6 left-full transition-all duration-300 ${
            open ? "!left-0" : ""
          }`}
        >
          <Link href="/" className={linkClass("/")} onClick={handleMobileNavClick}>Home</Link>
          <Link href="/about" className={linkClass("/about")} onClick={handleMobileNavClick}>About</Link>

          {/* Services mobile submenu */}
          <div className="relative">
            <button
              className="p-1  rounded text-white hover:bg-TextDark3 flex gap-1 items-center"
              onClick={() => setIsServicesMenuOpen((prev) => !prev)}
            >
              SERVICES <IoIosArrowDown size={20} />
            </button>

            {isServicesMenuOpen && (
              <ul className="absolute top-10 -left-40 bg-TextOrange text-white w-40 shadow-lg rounded-lg py-6 text-center flex flex-col gap-5">
                <Link href="/services/air" className="hover:bg-TextDarkGreen p-2 rounded" onClick={handleMobileNavClick}>Air Delivery</Link>
                <Link href="/services/road" className="hover:bg-TextDarkGreen p-2 rounded" onClick={handleMobileNavClick}>Land Delivery</Link>
                <Link href="/services/ocean" className="hover:bg-bgLightGreen p-2 rounded" onClick={handleMobileNavClick}>Water Delivery</Link>
              </ul>
            )}
          </div>

          <Link href="/contacts" className={linkClass("/contacts")} onClick={handleMobileNavClick}>Contacts</Link>
        </ul>

        <RiMenuLine onClick={() => setOpen(!open)} color="black" size={30} />
      </nav>
    </header>
  );
};

export default Navbar;
