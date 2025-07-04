"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Can I specify a delivery date when ordering?",
    answer:
      "We are committed to providing our customers with exceptional service while offering our employees the best training. There are many variations of passages of lorem ipsum is simply free text.",
  },
  {
    question: "How can I track my shipments?",
    answer:
      "We are committed to providing our customers with exceptional service while offering our employees the best training. There are many variations of passages of lorem ipsum is simply free text.",
  },
  {
    question: "What is included in your services?",
    answer:
      "We are committed to providing our customers with exceptional service while offering our employees the best training. There are many variations of passages of lorem ipsum is simply free text.",
  },
  {
    question: "How can I safely use files?",
    answer:
      "We are committed to providing our customers with exceptional service while offering our employees the best training. There are many variations of passages of lorem ipsum is simply free text.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-3xl mx-auto" id="accordion">
      {faqData.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className="border-b border-gray-300 mb-4 transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between text-left text-lg font-semibold py-4 px-6 bg-gray-100 hover:bg-bgOrange hover:text-white rounded-lg transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 py-4 text-gray-700 bg-white">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
