import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How can Aroko Health help my business?",
      answer: "Tested and Trusted by thousands of users, Aroko Health provides reliable access to funds. Think of a trusted payment service."
    },
    {
      id: 2,
      question: "What is Aroko Health?",
      answer: "Aroko Health offers affordable and accessible healthcare plans designed to meet your needs."
    },
    {
      id: 3,
      question: "How secure is Aroko Health's platform?",
      answer: "Aroko Health's platform uses advanced encryption and secure protocols to ensure data privacy and security."
    }
  ];

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-5">
              Common Concerns and Helpful Answers
            </h2>
            <p className="text-gray-600 mb-3">
              Here is the list of FAQ's about us and how we work. Got more questions? Feel free to reach out to us.
            </p>
          </div>
          <div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.id} className="border rounded-lg overflow-hidden">
                  <button
                    className={`w-full px-4 py-3 text-left text-gray-800 font-semibold flex justify-between items-center ${
                      activeId === item.id ? 'bg-gray-50' : 'bg-white'
                    }`}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    {item.question}
                    <span className="transform transition-transform duration-200">
                      {activeId === item.id ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </button>
                  {activeId === item.id && (
                    <div className="px-4 py-3 text-gray-600 bg-white">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}