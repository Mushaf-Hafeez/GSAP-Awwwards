import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import { flavorlists } from "../constants/index";

const FlavorSlider = () => {
  useGSAP(() => {
    gsap.to("#flavor", {
      x: -3500,
      stagger: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#flavor",
        start: "10% top",
        end: "bottom 30%",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div>
      <div className="flex gap-20">
        {flavorlists.map((flavor, index) => (
          <div key={index} className={`flex-none relative ${flavor.rotation}`}>
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="w-[40vw]"
            />
            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="absolute z-30 inset-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="h-full absolute z-40 bottom-0 left-1/2 -translate-x-1/2"
            />
            <h1 className="absolute z-50 left-4 bottom-4 text-6xl font-bold text-milk">
              {flavor.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
