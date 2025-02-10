import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { Benefits } from '../components/home/Benefits';
import { Plans } from '../components/home/Plans';
import { Map } from '../components/home/Map';
import { SDG } from '../components/home/SDG';
import { Testimonials } from '../components/home/Testimonials';
import { AccountTypes } from '../components/home/AccountTypes';
import { FAQ } from '../components/home/FAQ';
import { Contact } from '../components/home/Contact';
import { Footer } from '../components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Plans />
      <Map />
      <SDG />
      <Testimonials />
      <AccountTypes />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}