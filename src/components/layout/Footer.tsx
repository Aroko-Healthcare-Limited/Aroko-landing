export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img 
              src="https://arokohealth.com/assets/images/logo/head-logo.png" 
              alt="Logo" 
              className="h-12"
            />
          </div>
          <div className="text-center md:text-right md:ml-4">
            <h3 className="text-xl font-bold">
              Join Aroko Health for Comprehensive Healthcare Coverage
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              "Select from affordable HMO plans that fit your needs and get the healthcare you deserve with Aroko Health."
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-400">
          <div>
            <h4 className="text-white font-semibold mb-4">AROKO HEALTH</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/terms" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Link</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>+2349150388001</li>
              <li>
                <a href="mailto:info@arokohealth.com" className="hover:underline">
                info@arokohealth.com
                </a>
              </li>
              <li>
                <a href="mailto:help@arokohealth.com" className="hover:underline">
                  help@arokohealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}