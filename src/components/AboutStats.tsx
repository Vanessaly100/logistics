'use client';

import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import icon14 from "../assets/icon-14.png.png"
import icon15 from "../assets/icon-15.png.png"
import icon16 from "../assets/icon-16.png.png"
import icon17 from "../assets/icon-17.png.png"

import Image, { StaticImageData } from "next/image";

type StatItem = {
  label: string;
  image: StaticImageData;
  end: number;
  suffix?: string;
};

const stats: StatItem[] = [
  { label: 'Years of Experience', end: 12, image: icon14 },
  { label: 'Cities Served Worldwide', end: 75, image: icon15 },
  { label: 'Satisfied Clients', end: 1200, suffix: '+', image: icon16},
  { label: 'Companies We Helped', end: 300 ,image: icon17},
];

const AboutStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal('.stat-item', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        interval: 150,
        reset: false,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-6 max-w-7xl mx-auto"
    >
      {stats.map((stat, index) => (
        <div
          ref={ref}
          key={index}
          className="stat-item bg-TextDarkGreen text-white text-center p-6 rounded-lg shadow-lg"
        >
          <div className="w-[100px] h-[100px] mx-auto pb-4">
          <Image src={stat.image} alt={stat.label} className='w-full h-full'/>
          </div>

          <h3 className="text-4xl font-bold text-bgOrange mb-2">
            {inView ? (
              <CountUp end={stat.end} duration={2} suffix={stat.suffix || ''} />
            ) : (
              0
            )}
          </h3>
          <p className="text-lg">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default AboutStats;
