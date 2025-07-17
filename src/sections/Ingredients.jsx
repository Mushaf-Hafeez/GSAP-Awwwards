import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import { nutrientLists } from "../constants/index";

const Ingredients = () => {
  useGSAP(() => {
    // split the heading into chars
    const headingSplit = SplitText.create("#ingredients-first-heading", {
      type: " chars",
    });

    // create the timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#ingredients",
        start: "top top",
      },
    });

    tl.from(headingSplit.chars, {
      yPercent: 100,
      stagger: 0.02,
      ease: "power1.inOut",
    })
      .to("#ingredients-clip-heading", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power1.inOut",
      })
      .from(
        "#ingredients-para",
        {
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);

  return (
    <section
      id="ingredients"
      className="relative min-h-screen bg-milk-yellow w-full"
    >
      <img src="/images/slider-dip.png" alt="drip image" />
      <img src="/images/big-img.png" alt="main image" />

      {/* content */}
      <div className="w-full h-full absolute z-30 inset-0 pt-70">
        <div className="flex justify-between px-9">
          <div>
            <div className="overflow-hidden">
              <h1
                id="ingredients-first-heading"
                className="text-8xl font-bold text-dark-brown"
              >
                IT STILL DOES
              </h1>
            </div>
            <h1
              id="ingredients-clip-heading"
              style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
              className="text-8xl font-bold text-milk bg-mid-brown border-4 border-milk text-center -mt-2 py-2 -rotate-2"
            >
              BODY GOOD
            </h1>
          </div>
          <p
            id="ingredients-para"
            className="text-dark-brown text-end font-paragraph w-[20vw]"
          >
            Milk contains a wide array of nutrients, including vitamins,
            minerals, and protein, and this is lactose free
          </p>
        </div>
        {/* footer */}
        <div className="bg-milk text-mid-brown border-4 border-milk-yellow rounded-full w-8/12 absolute bottom-15 left-1/2 -translate-x-1/2 px-20 py-4 flex items-center justify-between">
          {nutrientLists.map((item, index) => (
            <span className="flex flex-col gap-2">
              <p>{item.label}</p>
              <p className="font-paragraph text-sm">UPTO</p>
              <h3 className="text-3xl font-semibold">{item.amount}</h3>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
