import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// lenis
import { ReactLenis, useLenis } from "lenis/react";

// components
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

// register plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const lenis = useLenis();

  return (
    <main>
      <ReactLenis root />
      <Navbar />
      <Hero />
      <About />
      <div className="min-h-[200vh]"></div>
    </main>
  );
};

export default App;
