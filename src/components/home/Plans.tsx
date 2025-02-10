import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface Plan {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
}

export function Plans() {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = 4;

  const plans: Plan[] = [
    {
      id: 1,
      title: "Aroko Essential Plan",
      price: "N12,000 / Year",
      description: "Inpatient, Outpatient, Pharmacy",
      features: [
        "Specialist consultation",
        "Basic telemedicine",
        "Emergency room visits",
        "Basic diagnostic imaging",
        "Blood tests",
        "Microbiology and parasitology",
        "Hospital admission",
        "Family planning",
        "Annual wellness checks",
        "Ambulance services"
      ]
    },
    {
      id: 2,
      title: "Aroko Advantage Plan",
      price: "N22,000 / Annually",
      description: "Inpatient, Outpatient, Pharmacy",
      features: [
        "Aroko Benefits: Essential Care + Specialist Access",
        "Enhanced telemedicine",
        "Advanced diagnostic imaging",
        "Advanced laboratory tests",
        "Private or semi-private rooms",
        "Basic surgical procedures",
        "Cancer care",
        "Renal care"
      ]
    },
    {
      id: 3,
      title: "Aroko Premium Plan",
      price: "N35,000 / Annually",
      description: "Inpatient, Outpatient, Pharmacy",
      features: [
        "Aroko Benefits: Advantage Care + Optical Care",
        "Dental care",
        "Obstetrics care",
        "ICU services",
        "Physiotherapy",
        "Infertility care",
        "Childhood immunization",
        "Neonatal care",
        "Wellness facilities",
        "Mental health services",
        "HIV/AIDS care"
      ]
    },
    {
      id: 4,
      title: "Aroko MomCare",
      price: "Coming Soon",
      description: "Specialized Maternal Care",
      features: []
    }
  ];

  const handleNext = () => {
    if (currentPage < maxPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-left text-gray-800 mb-10">
          Find the right plan for your Health
        </h2>
        <div className="overflow-hidden">
          <div 
            className="flex space-x-4 transition-transform duration-300"
            style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}
          >
            {plans.map((plan) => (
              <div key={plan.id} className="flex-shrink-0 w-full md:w-80 bg-white shadow-lg rounded-lg relative">
                <div className="bg-gray-300 text-gray-700 rounded-t-lg text-lg font-semibold p-4">
                  {plan.title}
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mt-2 font-extrabold">{plan.price}</p>
                  <p className="text-gray-600">{plan.description}</p>
                  <button className="mt-6 w-full px-6 py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition duration-300">
                    Buy Plan
                  </button>
                  {plan.features.length > 0 && (
                    <ul className="list-none mt-4 text-lg space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <span className="absolute top-3 right-4 text-2xl font-bold text-gray-400">{plan.id}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-2 py-2 rounded-lg mr-2 transition duration-300 ${
              currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === maxPages}
            className={`px-2 py-2 rounded-lg ml-2 transition duration-300 ${
              currentPage === maxPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}