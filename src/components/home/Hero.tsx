export function Hero() {
  return (
    <section className="text-center py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Your <span className="text-pink-500">Health</span>, Our{" "}
          <span className="text-pink-500">Priority!</span>
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Access affordable, reliable healthcare plans designed with you in mind.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600">
          Choose Plan
        </button>
        <div className="mt-8 flex justify-center items-center">
          <img 
            src="https://arokohealth.com/assets/images/images/doct-slide.png" 
            alt="Doctor" 
            className="w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
}