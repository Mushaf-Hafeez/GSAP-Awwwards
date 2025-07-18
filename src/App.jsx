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
import Video from "./sections/Video";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";

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
      <Video />
      <Reviews />
      <Footer />
    </main>
  );
};

export default App;
