import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  rating: number;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Aroko Health has been a game-changer for my family! Their services are top-notch and their staff are incredibly friendly and caring.",
      author: "Jane Doe",
      rating: 5
    },
    {
      id: 2,
      content: "I was blown away by the level of care and attention I received from Aroko Health. They truly understand the importance of patient-centered care.",
      author: "John Smith",
      rating: 5
    },
    {
      id: 3,
      content: "Aroko Health has been a lifesaver for me. Their services are convenient, affordable, and reliable.",
      author: "Emily Johnson",
      rating: 5
    },
    {
      id: 4,
      content: "I highly recommend Aroko Health to anyone looking for quality healthcare services. Their staff is professional, courteous, and compassionate.",
      author: "David Lee",
      rating: 5
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-600 mt-4 italic">"{testimonial.content}"</p>
              <strong className="text-gray-800 block mt-4">- {testimonial.author}</strong>
              <div className="flex justify-center mt-2 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}