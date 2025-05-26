import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className=" bg-lighterPrimary text-secondary  rounded-md overflow-hidden shadow-sm"
        >
          <div 
            onMouseEnter={() => toggleFAQ(index)}
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-md font-semibold">{faq.question}</h3>
            <ChevronDown 
              className={`w-6 h-6 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`} onClick={() => toggleFAQ(index)}
            />
          </div>

          {openIndex === index && (
            <div 
              className="p-4 pt-0 text-gray-600 text-sm font-medium animate-fade-in"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;