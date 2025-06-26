"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import Image from "next/image";
import { RiMenuLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
// import DigitalLogo2 from "@/public/assets/Navlogo2.png"; // Ensure image is in public/assets

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const submenuTimeout = useRef<NodeJS.Timeout | null>(null);

  const isPagesActive = [
    "/pages/portfoliopage",
    "/pages/pricing",
    "/pages/faqs",
  ].includes(pathname);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    submenuTimeout.current = setTimeout(() => setIsSubmenuOpen(false), 200);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contacts", href: "/contacts" },
  ];

  const isActive = (href: string) => pathname === href;

  const linkClass = (href: string) =>
    isActive(href)
      ? "bg-PrimaryColor p-1 rounded text-white"
      : `p-1 rounded ${sticky ? "text-black hover:bg-PrimaryColor" : "text-white hover:bg-PrimaryColor"}`;

  return (
    <header
      className={`w-full fixed top-0 left-0 transition-all duration-300 z-50 ${
        sticky ? "bg-white text-black shadow-lg" : "bg-transparent text-black"
      }`}
    >
      <nav className="xl:flex hidden justify-between items-center w-full h-16 px-5 py-10 font-semibold lg:px-10 text-base uppercase">
        <span className="flex items-center">
          {/* <Image src={DigitalLogo2} alt="logo" width={80} height={80} /> */}
          <h1 className="-ml-6">NextGen Digital</h1>
        </span>

        <div className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link href={href} key={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}

          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${
                isPagesActive
                  ? "text-white bg-PrimaryColor rounded"
                  : `p-2 rounded ${
                    sticky ? "text-black hover:bg-PrimaryColor" : "text-white hover:bg-PrimaryColor"
                  }`
              } hover:text-white`}
            >
              <span className="flex gap-1">
                Pages
                <IoIosArrowDown size={20} />
              </span>
            </button>

            {isSubmenuOpen && (
              <ul className="absolute top-12 left-0 bg-AddedColor text-white w-40 shadow-lg rounded-lg py-6 text-center flex flex-col gap-5">
                <Link href="/pages/portfoliopage" className={linkClass("/pages/portfoliopage")}>Portfolio</Link>
                <Link href="/pages/pricing" className={linkClass("/pages/pricing")}>Pricing</Link>
                <Link href="/pages/faqs" className={linkClass("/pages/faqs")}>Faqs</Link>
              </ul>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <PiPhoneCallFill size={30} />
          <h1>+92 (3680) - 9850</h1>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="flex justify-between items-center w-full h-16 bg-white text-black relative py-3 px-8 lg:hidden">
        <span className="flex items-center">
          {/* <Image src={DigitalLogo2} alt="logo" width={80} height={80} /> */}
          <h1 className="-ml-6">NextGen Digital</h1>
        </span>

        <ul
          className={`bg-AddedColor text-white flex flex-col items-center gap-3 font-semibold text-lg text-center h-screen fixed top-0 mt-16 w-screen pt-8 pl-6 left-full transition-all 5s ${
            open ? "!left-0" : ""
          }`}
        >
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}

          <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
              className={`${
                isPagesActive
                  ? "text-white bg-PrimaryColor rounded"
                  : `p-1 rounded ${
                    sticky ? "text-white hover:bg-PrimaryColor" : "text-white hover:bg-PrimaryColor"
                  }`
              } hover:text-white`}
            >
              <span className="flex gap-1">
                Pages
                <IoIosArrowDown size={20} />
              </span>
            </button>

            {isSubmenuOpen && (
              <ul className="absolute top-10 -left-40 bg-BackgroundColor text-white w-40 shadow-lg rounded-lg py-6 text-center flex flex-col gap-5">
                <Link href="/pages/portfoliopage" className={linkClass("/pages/portfoliopage")}>Portfolio</Link>
                <Link href="/pages/pricing" className={linkClass("/pages/pricing")}>Pricing</Link>
                <Link href="/pages/faqs" className={linkClass("/pages/faqs")}>Faqs</Link>
              </ul>
            )}
          </div>
        </ul>

        <RiMenuLine onClick={() => setOpen(!open)} color="black" size={30} />
      </nav>
    </header>
  );
};

export default Navbar;
