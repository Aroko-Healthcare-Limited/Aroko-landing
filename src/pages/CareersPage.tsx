import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export default function CareersPage() {
  const jobs = [
    {
      title: "Healthcare Software Engineer",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Medical Director",
      location: "Abuja, Nigeria",
      type: "Full-time",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Healthcare Data Analyst",
      location: "Remote",
      type: "Contract",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    }
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Careers at Aroko Health</h1>
        <p className="mb-8">
          Join our team and make a difference in healthcare delivery across Africa.
        </p>
        
        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">{job.title}</h2>
              <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                <span>{job.location}</span>
                <span>{job.type}</span>
              </div>
              <p className="mb-4">{job.description}</p>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}