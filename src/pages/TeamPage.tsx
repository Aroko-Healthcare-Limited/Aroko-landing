import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-card rounded-lg shadow-lg p-6">
              <img
                src={`https://i.pravatar.cc/300?img=${i + 10}`}
                alt={`Team Member ${i}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-bold text-center mb-2">Jane Doe {i}</h2>
              <p className="text-muted-foreground text-center mb-4">Team Lead</p>
              <p className="text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}