import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Aroko Health</h1>
        <div className="prose max-w-none">
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
          <p className="mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Excellence in Healthcare Delivery</li>
            <li className="mb-2">Patient-Centered Approach</li>
            <li className="mb-2">Innovation and Technology</li>
            <li className="mb-2">Accessibility and Affordability</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}