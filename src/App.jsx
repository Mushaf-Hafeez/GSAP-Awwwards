import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// lenis
import { ReactLenis, useLenis } from "lenis/react";

// components
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Flavor from "./sections/Flavor";
import { useEffect } from "react";
import Ingredients from "./sections/Ingredients";
import Advantages from "./sections/Advantages";

// register plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const lenis = useLenis();

  useEffect(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <main>
      <ReactLenis root />
      <Navbar />
      <Hero />
      <About />
      <Flavor />
      <Ingredients />
      <Advantages />
      <div className="min-h-dvh"></div>
    </main>
  );
};

export default App;
