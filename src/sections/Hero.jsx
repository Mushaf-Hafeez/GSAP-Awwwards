import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const Hero = () => {
  // animations
  useGSAP(() => {
    // split heading into chars
    const splitHeading = SplitText.create("#hero-heading", { type: "chars" });

    // gsap timeline
    const tl = gsap.timeline({ delay: 1 });

    tl.to("#hero-content", {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    })
      .to("#hero-clip-heading", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "circ.out",
      })
      .from(
        splitHeading.chars,
        {
          yPercent: 100,
          stagger: 0.025,
          ease: "power1.inOut",
        },
        "-=0.5"
      );

    // scroll animation
    gsap.to("#hero", {
      scale: 0.8,
      rotate: 10,
      scrollTrigger: {
        trigger: "#hero",
        start: "1% top",
        end: "bottom center",
        markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* images for background */}
      <img src="/images/static-img.png" alt="hero img" />
      {/* hero content */}
      <div
        id="hero-content"
        className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-28 opacity-0"
      >
        <h1
          id="hero-heading"
          className="text-8xl text-dark-brown font-bold whitespace-nowrap selection:bg-dark-brown selection:text-milk overflow-hidden"
        >
          FREAKING DELICIOUS
        </h1>
        <h1
          id="hero-clip-heading"
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          className="text-8xl font-bold px-1 py-4 text-milk bg-mid-brown border-4 border-milk -rotate-2 selection:text-dark-brown selection:bg-milk"
        >
          PROTEIN + CAFFEINE
        </h1>
        {/* description */}
        <div className="py-10 flex flex-col gap-8 items-center">
          <p className="text-dark-brown tracking-wide text-center w-8/12 selection:bg-dark-brown selection:text-milk">
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </p>
          <button className="w-fit px-8 py-4 rounded-full  bg-light-brown text-dark-brown cursor-pointer selection:text-milk selection:bg-dark-brown">
            Chug the SPYLT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
