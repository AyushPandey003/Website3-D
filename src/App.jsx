import Navbar from './components/navbar';
import Hero from './components/hero';
import Highlights from './components/highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowitWorks';
import Footer from './components/Footer';
import * as Sentry from '@sentry/react';
function App() {

  return (
    
    <>
      <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
      </main>
    </>
  )
}

export default Sentry.withProfiler(App);
