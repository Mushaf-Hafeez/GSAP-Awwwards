import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstSplitHeading = SplitText.create("#flavor-first-heading", {
      type: "chars",
    });
    const secondSplitHeading = SplitText.create("#flavor-second-heading", {
      type: "chars",
    });

    gsap.from(firstSplitHeading.chars, {
      y: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#flavor",
        start: "top 30%",
      },
    });

    gsap.to("#flavor-clip-heading", {
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#flavor",
        start: "top 20%",
      },
    });

    gsap.from(secondSplitHeading.chars, {
      y: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#flavor",
        start: "top 1%",
      },
    });
  }, []);
  return (
    <div className="w-[50vw] flex flex-col items-center">
      <div className="overflow-hidden -mb-4 py-2">
        <h1
          id="flavor-first-heading"
          className="text-8xl font-bold text-dark-brown selection:bg-dark-brown selection:text-milk"
        >
          WE HAVE 6
        </h1>
      </div>
      <h1
        id="flavor-clip-heading"
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        }}
        className=" text-8xl font-bold px-1 py-2 bg-mid-brown text-milk border-4 border-milk selection:bg-milk selection:text-mid-brown -rotate-2 opacity-0"
      >
        FREAKING
      </h1>
      <div className="overflow-hidden -mt-8 py-2">
        <h1
          id="flavor-second-heading"
          className="text-8xl font-bold text-dark-brown selection:bg-dark-brown selection:text-milk"
        >
          DELICIOUS FLAVORS
        </h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
