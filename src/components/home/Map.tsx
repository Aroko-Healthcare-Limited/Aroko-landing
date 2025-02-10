import { MapPin } from 'lucide-react';

export function Map() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Aroko Health For Everyone
        </h2>
        <div className="relative">
          <img 
            src="https://arokohealth.com/assets/images/map-base-1.png" 
            alt="Map Base" 
            className="w-full h-auto mx-auto shadow-lg rounded-lg"
          />
          <div className="absolute top-1/3 left-1/4 bg-pink-500 text-white p-2 rounded-full shadow-lg">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="absolute top-2/3 right-1/4 bg-pink-500 text-white p-2 rounded-full shadow-lg">
            <MapPin className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}