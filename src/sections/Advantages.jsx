import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Advantages = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#advantages",
        start: "top top",
        end: "bottom 60%",
        scrub: true,
      },
    });

    tl.to(
      ".advantages-clip-heading",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.5,
        ease: "power1.inOut",
      },
      "-=.5"
    );
  });

  return (
    <section id="advantages" className="h-screen w-full bg-black text-milk">
      <div className="h-full w-full flex flex-col items-center justify-between py-10 text-center">
        <p className="text-sm font-paragraph">
          Unlock the Advantages: <br /> Explore the Key Benefits of Choosing
          SPYLT
        </p>
        <div className="flex flex-col items-center">
          <h1
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="advantages-clip-heading w-fit px-20 py-6 text-7xl font-bold text-milk bg-light-brown border-4 border-black rotate-2"
          >
            SHELF STABLE
          </h1>
          <h1
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="advantages-clip-heading w-fit px-20 py-6 text-7xl font-bold text-black bg-milk border-4 border-black -rotate-1"
          >
            PROTEIN + CAFFEINE
          </h1>
          <h1
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="advantages-clip-heading w-fit px-20 py-6 text-7xl font-bold text-milk bg-dark-brown border-4 border-black rotate-2"
          >
            INFINITELY RECYCLEABLE
          </h1>
          <h1
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="advantages-clip-heading w-fit px-20 py-6 text-7xl font-bold text-black bg-yellow-brown border-4 border-black -rotate-2"
          >
            LACTOSE FREE
          </h1>
        </div>
        <p className="text-sm font-paragraph">and much more</p>
      </div>
    </section>
  );
};

export default Advantages;
