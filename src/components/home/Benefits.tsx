import { useState } from 'react';

interface Benefit {
  title: string;
  description: string;
  image: string;
}

export function Benefits() {
  const benefits: Benefit[] = [
    {
      title: "Affordable Health Care",
      description: "We offer affordable yearly payment plans for our users.",
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Preventive & Wellness Service",
      description: "Comprehensive preventive health services.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Telemedicine",
      description: "Access to doctors anytime, anywhere.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Specialist Access",
      description: "Care from specialists when needed.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="w-full">
            <h2 className="text-5xl font-bold text-gray-800 uppercase">Benefits</h2>
            <div className="relative w-full mt-2 flex items-center">
              <div className="relative bg-gray-300 h-1 w-full"></div>
              <div 
                className="absolute bg-gray-800 h-1 transition-all duration-300" 
                style={{ width: `${(currentIndex + 1) * 25}%` }}
              ></div>
              <span className="absolute right-0 top-0 text-gray-500 text-lg">
                {String(currentIndex + 1).padStart(2, '0')}/04
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className={`flex items-center cursor-pointer transition-colors duration-200 ${
                    currentIndex === index ? 'text-black' : 'text-gray-400'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <i className={`fa ${currentIndex === index ? 'fa-arrow-right' : 'fa-circle'} text-3xl mr-4`}></i>
                  <div>
                    <h3 className={`text-2xl ${currentIndex === index ? 'font-bold' : 'font-semibold'}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                <div className="flex flex-col p-6 md:w-1/2">
                  <div className="flex flex-col justify-start">
                    <h4 className="text-2xl font-bold text-gray-800">{benefits[currentIndex].title}</h4>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 text-base">{benefits[currentIndex].description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={benefits[currentIndex].image} 
                    alt={benefits[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}