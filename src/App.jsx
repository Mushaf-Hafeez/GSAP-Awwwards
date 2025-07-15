import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// lenis
import { ReactLenis, useLenis } from "lenis/react";

// components
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

// register plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const lenis = useLenis();

  return (
    <main>
      <ReactLenis root />
      <Navbar />
      <Hero />
      <div className="h-[200vh] w-full bg-dark-brown relative z-40"></div>
    </main>
  );
};

export default App;
