import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export default function BoardPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Board of Directors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card rounded-lg shadow-lg p-6">
              <img
                src={`https://i.pravatar.cc/300?img=${i}`}
                alt={`Board Member ${i}`}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-bold text-center mb-2">John Doe {i}</h2>
              <p className="text-muted-foreground text-center mb-4">Board Member</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}