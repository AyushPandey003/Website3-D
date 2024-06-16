import Navbar from './components/navbar';
import Hero from './components/hero';
import Highlights from './components/highlights';
import Model from './components/Model';
import * as Sentry from '@sentry/react';
function App() {
  return <button onClick={() => methodDoesNotExist()}>Break the world</button>;

  return (
    
    <>
      <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      {/* <Features />
      <HowItWorks />
      <Footer /> */}
      </main>
    </>
  )
}

export default Sentry.withProfiler(App);
