interface AccountType {
  title: string;
  description: string;
  image: string;
}

export function AccountTypes() {
  const accountTypes: AccountType[] = [
    {
      title: "Individual",
      description: "Personal healthcare coverage tailored to your needs.",
      image: "https://arokohealth.com/assets/images/images/man-1.png"
    },
    {
      title: "Someone Else",
      description: "Extend healthcare coverage to your loved ones.",
      image: "https://arokohealth.com/assets/images/images/colored-hair.png"
    },
    {
      title: "Friends & Family",
      description: "Group coverage for your entire family.",
      image: "https://arokohealth.com/assets/images/images/family-1.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left text-gray-800 mb-10">
          One Account, Different Use
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {accountTypes.map((type, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src={type.image} 
                alt={type.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{type.title}</h3>
                <p className="text-gray-600 mt-2">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}