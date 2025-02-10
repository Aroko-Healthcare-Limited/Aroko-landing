import { Facebook, Instagram, Linkedin, Twitter, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Get In Touch With Aroko Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">
              Stay Connected with Aroko Health today. Have questions or just want to say hi? 
              We're always a DM away! Reach out to Aroko Health on your favorite social 
              platforms and let's make healthcare accessible together.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-green-500 hover:text-green-600">
                <MessageSquare className="w-8 h-8" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-black hover:text-gray-800">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-800">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div>
            <form className="bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone No
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="+234 000-000-0000"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter email address"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}