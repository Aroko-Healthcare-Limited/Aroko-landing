import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export default function MissionPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
        <div className="prose max-w-none">
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Key Objectives</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Provide accessible healthcare solutions</li>
            <li className="mb-2">Improve healthcare outcomes</li>
            <li className="mb-2">Foster innovation in healthcare delivery</li>
            <li className="mb-2">Build sustainable healthcare systems</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}